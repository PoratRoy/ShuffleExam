export type ExamType = "java" | "statistics";

/**
 * Validate if a string is a valid ExamType
 */
export function isValidExamType(value: string | null): value is ExamType {
  return value === "java" || value === "statistics";
}

/**
 * Get a valid ExamType from a string, with fallback to default
 */
export function getValidExamType(value: string | null, defaultType: ExamType = "java"): ExamType {
  return isValidExamType(value) ? value : defaultType;
}

export interface Question {
  id: number;
  question: string;
  answers: [string, string, string, string];
  correctAnswer: number; // index of the correct answer
  linkTo?: number[] // ids of group questions 
  hasImage?: string;
}

export interface Exam {
  id: ExamType;
  name: string;
  questions: Question[];
}

export type RawExam = {
  question: string;
  correctRes: string;
  results: string[];
}