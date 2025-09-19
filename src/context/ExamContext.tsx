'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Question, ExamType } from '@/models/types/exam';
import { MapExams } from '@/models/resources/exams';
import { shuffleQuestions, selectFirstQuestions } from '@/utils/shuffleQuestions';

export interface ExamResult {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export interface ExamState {
  currentExamType: ExamType;
  questions: Question[];
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
  shuffleExam: (allQuestions: Question[]) => void;
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
  initialExamType = 'java',
  onExamTypeChange
}) => {
  const [examState, setExamState] = useState<ExamState>(() => ({
    currentExamType: initialExamType,
    questions: selectFirstQuestions(MapExams[initialExamType].questions, 20), // Start with first 20 questions, handling linked questions
    selectedAnswers: {},
    examResults: null,
    score: 0,
    isExamFinished: false,
  }));

  // Update exam state when initialExamType changes (from URL parsing)
  useEffect(() => {
    if (examState.currentExamType !== initialExamType) {
      const examQuestions = MapExams[initialExamType].questions;
      const selectedQuestions = selectFirstQuestions(examQuestions, 20);

      setExamState({
        currentExamType: initialExamType,
        questions: selectedQuestions,
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
    const results: ExamResult[] = examState.questions.map(question => {
      const selectedAnswer = examState.selectedAnswers[question.id];
      const isCorrect = selectedAnswer === question.correctAnswer;
      
      return {
        questionId: question.id,
        selectedAnswer: selectedAnswer ?? -1,
        isCorrect,
      };
    });

    const score = results.filter(result => result.isCorrect).length * 5;

    setExamState(prev => ({
      ...prev,
      examResults: results,
      score,
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

  const shuffleExam = (allQuestions: Question[]) => {
    // Use utility function to shuffle questions and handle linked questions
    const selectedQuestions = shuffleQuestions(allQuestions, 20);

    setExamState(prev => ({
      ...prev,
      questions: selectedQuestions,
      selectedAnswers: {},
      examResults: null,
      score: 0,
      isExamFinished: false,
    }));
  };

  const switchExamType = (examType: ExamType) => {
    const examQuestions = MapExams[examType].questions;
    const selectedQuestions = selectFirstQuestions(examQuestions, 20);

    setExamState({
      currentExamType: examType,
      questions: selectedQuestions,
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
