import { rawQuestions } from '@/models/resources/simpleQestions';
import { Question } from '@/models/types/exam';

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

// Convert raw questions to Question interface format without shuffling
export const sampleQuestions: Question[] = rawQuestions.map((q, index) => {
  const allOptions = [q.correctRes, ...q.results];
  return {
    id: index + 1,
    text: q.question,
    options: allOptions,
    correctAnswer: 0, // correct answer is always the first option
  };
});
