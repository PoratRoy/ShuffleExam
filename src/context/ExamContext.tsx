'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Question } from '@/models/types/exam';

export interface ExamResult {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export interface ExamState {
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
  initialQuestions: Question[];
}

export const ExamProvider: React.FC<ExamProviderProps> = ({ 
  children, 
  initialQuestions 
}) => {
  const [examState, setExamState] = useState<ExamState>({
    questions: initialQuestions.slice(0, 20), // Start with first 20 questions
    selectedAnswers: {},
    examResults: null,
    score: 0,
    isExamFinished: false,
  });

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
    // Shuffle all questions and take first 20
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffled.slice(0, 20);

    setExamState({
      questions: selectedQuestions,
      selectedAnswers: {},
      examResults: null,
      score: 0,
      isExamFinished: false,
    });
  };

  return (
    <ExamContext.Provider value={{
      examState,
      selectAnswer,
      finishExam,
      clearResults,
      shuffleExam,
    }}>
      {children}
    </ExamContext.Provider>
  );
};
