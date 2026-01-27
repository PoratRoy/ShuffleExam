import { Question, QuestionGroups } from '@/models/types/exam';

/**
 * Fisher-Yates shuffle algorithm for any array
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Shuffles the answers of a question and updates the correctAnswer index.
 */
function shuffleQuestionAnswers(question: Question): Question {
  const answersWithOriginalIndex = question.answers.map((text, index) => ({
    text,
    isCorrect: index === question.correctAnswer,
  }));

  const shuffledAnswersWithIndex = shuffleArray(answersWithOriginalIndex);

  const shuffledAnswers = shuffledAnswersWithIndex.map((a) => a.text);
  const newCorrectAnswerIndex = shuffledAnswersWithIndex.findIndex((a) => a.isCorrect);

  return {
    ...question,
    answers: shuffledAnswers as typeof question.answers,
    correctAnswer: newCorrectAnswerIndex,
  };
}

/**
 * Shuffles question groups and selects groups until the total number of questions 
 * is as close as possible to targetCount without exceeding it.
 * Also shuffles the answers within each question.
 * 
 * @param allGroups - Array of all available question groups
 * @param targetCount - Target number of individual questions (default: 20)
 * @returns Array of selected question groups
 */
export function shuffleQuestions(allGroups: QuestionGroups[], targetCount: number = 20): QuestionGroups[] {
  // Shuffle the groups using Fisher-Yates
  const shuffledGroups = shuffleArray(allGroups);
  
  const selectedGroups: QuestionGroups[] = [];
  let currentQuestionCount = 0;
  
  for (const group of shuffledGroups) {
    const groupSize = group.questions.length;
    
    // Check if adding this group would exceed the targetCount
    if (currentQuestionCount + groupSize <= targetCount) {
      // Create a new group object with shuffled answers for its questions
      const shuffledGroup: QuestionGroups = {
        ...group,
        questions: group.questions.map(shuffleQuestionAnswers),
      };
      selectedGroups.push(shuffledGroup);
      currentQuestionCount += groupSize;
    }
    
    // Stop if we've reached the target count exactly
    if (currentQuestionCount >= targetCount) {
      break;
    }
  }
  
  return selectedGroups;
}

// selectFirstQuestions removed as it is no longer needed for random-only behavior
