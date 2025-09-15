export interface Question {
  id: number;
  question: string;
  answers: [string, string, string, string];
  correctAnswer: number; // index of the correct answer
  difficulty: number;
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