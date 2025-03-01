export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Exam {
  title: string;
  questions: Question[];
}

export type RawExam = {
  question: string;
  correctRes: string;
  results: string[];
}