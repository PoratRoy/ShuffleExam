import { StatisticsQuestions } from './questions_statistics';
import { JavaQuestions } from './questions_java';
import { PythonExamQuestions as PythonQuestions } from './questions_python';
import { Exam, ExamType } from '../types/exam';
import { EconomyQuestions } from './questions_economy';
import { ResearchQuestions } from './questions_research';

export const DEFAULT_EXAM_TYPE = "research";

export const MapExams: Record<ExamType, Exam> = {
  java: {
    id: 'java',
    name: 'Java',
    questions: JavaQuestions,
    targetCount: 20,
  },
  statistics: {
    id: 'statistics',
    name: 'הסקה סטטיסטית',
    questions: StatisticsQuestions,
    targetCount: 20,
  },
  economy: {
    id: 'economy',
    name: 'כלכלה',
    questions: EconomyQuestions,
    targetCount: 20,
  },
  research: {
    id: 'research',
    name: 'שיטות מחקר',
    questions: ResearchQuestions,
    targetCount: 25,
  },
  python: {
    id: 'python',
    name: 'Python',
    questions: PythonQuestions,
    targetCount: 20,
  }
};

export function isValidExamType(value: string | null): value is ExamType {
  return !!value && value in MapExams;
}

export function getValidExamType(value: string | null, defaultType: ExamType = DEFAULT_EXAM_TYPE as ExamType): ExamType {
  return isValidExamType(value) ? value : defaultType;
}
