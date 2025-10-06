import { StatisticsQuestions } from './questions_statistics';
import { JavaQuestions } from './questions_java';
import { Exam, ExamType } from '../types/exam';
import { EconomyQuestions } from './questions_economy';

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
  economy: {
    id: 'economy',
    name: 'כלכלה',
    questions: EconomyQuestions,
  }
};
