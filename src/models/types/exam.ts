export type ExamType = "java" | "statistics" | "economy" | "research";

export interface Question {
  id: number;
  question: string;
  answers: [string, string, string, string] | [string, string, string, string, string];
  correctAnswer: number; // index of the correct answer
  hasImage?: string;
}

export interface QuestionGroups {
  story?: string;
  hasImage?: string;
  questions: Question[];
}

export interface Exam {
  id: ExamType;
  name: string;
  questions: QuestionGroups[];
  targetCount: number;
}

export type RawExam = {
  question: string;
  correctRes: string;
  results: string[];
}
