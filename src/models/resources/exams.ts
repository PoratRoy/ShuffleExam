import { StatisticsQuestions } from './questions_statistics';
import { JavaQuestions } from './questions_java';
import { Exam, ExamType } from '../types/exam';

export const MapExams: Record<ExamType, Exam> = {
  java: {
    id: 'java',
    name: 'Java',
    questions: JavaQuestions,
  },
  statistics: {
    id: 'statistics',
    name: 'הסקה סטטיסטית',
    questions: StatisticsQuestions,
  },
};
