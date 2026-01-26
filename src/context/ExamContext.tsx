'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Question, ExamType, QuestionGroups } from '@/models/types/exam';
import { DEFAULT_EXAM_TYPE, MapExams } from '@/models/resources/exams';
import { shuffleQuestions, selectFirstQuestions } from '@/utils/shuffleQuestions';

export interface ExamResult {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export interface ExamState {
  currentExamType: ExamType;
  questionGroups: QuestionGroups[];
  selectedAnswers: Record<number, number>;
  examResults: ExamResult[] | null;
  score: number;
  isExamFinished: boolean;
}

interface ExamContextType {
  examState: ExamState;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  finishExam: () => void;
  clearResults: () => void;
  shuffleExam: (allGroups: QuestionGroups[]) => void;
  switchExamType: (examType: ExamType) => void;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const useExam = () => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
};

interface ExamProviderProps {
  children: ReactNode;
  initialExamType?: ExamType;
  onExamTypeChange?: (examType: ExamType) => void;
}

export const ExamProvider: React.FC<ExamProviderProps> = ({ 
  children, 
  initialExamType = DEFAULT_EXAM_TYPE,
  onExamTypeChange
}) => {
  const [examState, setExamState] = useState<ExamState>(() => {
    const exam = MapExams[initialExamType];
    return {
      currentExamType: initialExamType,
      questionGroups: selectFirstQuestions(exam.questions, exam.targetCount),
      selectedAnswers: {},
      examResults: null,
      score: 0,
      isExamFinished: false,
    };
  });

  // Update exam state when initialExamType changes (from URL parsing)
  useEffect(() => {
    if (examState.currentExamType !== initialExamType) {
      const exam = MapExams[initialExamType];
      const selectedGroups = selectFirstQuestions(exam.questions, exam.targetCount);

      setExamState({
        currentExamType: initialExamType,
        questionGroups: selectedGroups,
        selectedAnswers: {},
        examResults: null,
        score: 0,
        isExamFinished: false,
      });
    }
  }, [initialExamType, examState.currentExamType]);

  const selectAnswer = (questionId: number, answerIndex: number) => {
    if (examState.isExamFinished) return;
    
    setExamState(prev => ({
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [questionId]: answerIndex,
      },
    }));
  };

  const finishExam = () => {
    const allQuestions = examState.questionGroups.flatMap(group => group.questions);
    
    const results: ExamResult[] = allQuestions.map(question => {
      const selectedAnswer = examState.selectedAnswers[question.id];
      const isCorrect = selectedAnswer === question.correctAnswer;
      
      return {
        questionId: question.id,
        selectedAnswer: selectedAnswer ?? -1,
        isCorrect,
      };
    });

    const score = results.length > 0 ? (results.filter(result => result.isCorrect).length / results.length) * 100 : 0;

    setExamState(prev => ({
      ...prev,
      examResults: results,
      score: Math.round(score),
      isExamFinished: true,
    }));
  };

  const clearResults = () => {
    setExamState(prev => ({
      ...prev,
      selectedAnswers: {},
      examResults: null,
      score: 0,
      isExamFinished: false,
    }));
  };

  const shuffleExam = (allGroups: QuestionGroups[]) => {
    const exam = MapExams[examState.currentExamType];
    const selectedGroups = shuffleQuestions(allGroups, exam.targetCount);

    setExamState(prev => ({
      ...prev,
      questionGroups: selectedGroups,
      selectedAnswers: {},
      examResults: null,
      score: 0,
      isExamFinished: false,
    }));
  };

  const switchExamType = (examType: ExamType) => {
    const exam = MapExams[examType];
    const selectedGroups = selectFirstQuestions(exam.questions, exam.targetCount);

    setExamState({
      currentExamType: examType,
      questionGroups: selectedGroups,
      selectedAnswers: {},
      examResults: null,
      score: 0,
      isExamFinished: false,
    });

    // Notify parent component about exam type change (for URL updates)
    if (onExamTypeChange) {
      onExamTypeChange(examType);
    }
  };

  return (
    <ExamContext.Provider value={{
      examState,
      selectAnswer,
      finishExam,
      clearResults,
      shuffleExam,
      switchExamType,
    }}>
      {children}
    </ExamContext.Provider>
  );
};
