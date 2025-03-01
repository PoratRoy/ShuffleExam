import { Question, RawExam } from '@/models/types/exam';

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const shuffleQuestionOptions = (question: Question): Question => {
  const shuffledOptions = shuffleArray(question.options);
  const newCorrectAnswer = shuffledOptions.indexOf(question.options[question.correctAnswer]);
  return {
    ...question,
    options: shuffledOptions,
    correctAnswer: newCorrectAnswer,
  };
};

export const rawQestionsToQuestions = (question: RawExam[]): Question[] => {
  return question.map((q, i) => ({
    id: i + 1,
    text: q.question,
    options: [q.correctRes, ...q.results],
    correctAnswer: 0, // correct answer is always the first option
  }));
};
