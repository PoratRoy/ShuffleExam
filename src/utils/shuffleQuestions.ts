import { QuestionGroups } from '@/models/types/exam';

/**
 * Shuffles question groups and selects groups until the total number of questions 
 * is as close as possible to targetCount without exceeding it.
 * 
 * @param allGroups - Array of all available question groups
 * @param targetCount - Target number of individual questions (default: 20)
 * @returns Array of selected question groups
 */
export function shuffleQuestions(allGroups: QuestionGroups[], targetCount: number = 20): QuestionGroups[] {
  // Shuffle the groups
  const shuffled = [...allGroups].sort(() => Math.random() - 0.5);
  
  const selectedGroups: QuestionGroups[] = [];
  let currentQuestionCount = 0;
  
  for (const group of shuffled) {
    const groupSize = group.questions.length;
    
    // Check if adding this group would exceed the targetCount
    if (currentQuestionCount + groupSize <= targetCount) {
      selectedGroups.push(group);
      currentQuestionCount += groupSize;
    }
    
    // Stop if we've reached the target count exactly
    if (currentQuestionCount >= targetCount) {
      break;
    }
  }
  
  return selectedGroups;
}

/**
 * Selects the first N questions by taking groups from the start, 
 * until the total number of questions reaches targetCount.
 * 
 * @param allGroups - Array of all available question groups
 * @param targetCount - Target number of individual questions (default: 20)
 * @returns Array of selected question groups
 */
export function selectFirstQuestions(allGroups: QuestionGroups[], targetCount: number = 20): QuestionGroups[] {
  const selectedGroups: QuestionGroups[] = [];
  let currentQuestionCount = 0;
  
  for (const group of allGroups) {
    const groupSize = group.questions.length;
    
    if (currentQuestionCount + groupSize <= targetCount) {
      selectedGroups.push(group);
      currentQuestionCount += groupSize;
    } else {
      break;
    }
    
    if (currentQuestionCount >= targetCount) {
      break;
    }
  }
  
  return selectedGroups;
}
