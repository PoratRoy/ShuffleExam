import { Question } from '@/models/types/exam';

/**
 * Shuffles questions and handles linked questions logic
 * @param allQuestions - Array of all available questions
 * @param targetCount - Target number of questions (default: 20)
 * @returns Array of selected questions with linked questions properly included
 */
export function shuffleQuestions(allQuestions: Question[], targetCount: number = 20): Question[] {
  // Create a map for quick question lookup by id
  const questionMap = new Map<number, Question>();
  allQuestions.forEach(q => questionMap.set(q.id, q));

  // Shuffle all questions
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  
  const selectedQuestions: Question[] = [];
  const addedQuestionIds = new Set<number>();
  
  for (const question of shuffled) {
    // Skip if we already added this question
    if (addedQuestionIds.has(question.id)) {
      continue;
    }
    
    // If question has linkTo array, add all linked questions
    if (question.linkTo && question.linkTo.length > 0) {
      const linkedQuestions: Question[] = [];
      
      // Get all linked questions in the specified order
      for (const linkedId of question.linkTo) {
        const linkedQuestion = questionMap.get(linkedId);
        if (linkedQuestion && !addedQuestionIds.has(linkedId)) {
          linkedQuestions.push(linkedQuestion);
          addedQuestionIds.add(linkedId);
        }
      }
      
      // Check if adding all linked questions would exceed the limit
      if (selectedQuestions.length + linkedQuestions.length <= targetCount) {
        selectedQuestions.push(...linkedQuestions);
      } else {
        // If it would exceed, we need to make room by removing non-linked questions
        const questionsToAdd = linkedQuestions.length;
        const currentNonLinkedCount = selectedQuestions.filter(q => !q.linkTo || q.linkTo.length === 0).length;
        const questionsToRemove = Math.min(
          currentNonLinkedCount,
          (selectedQuestions.length + questionsToAdd) - targetCount
        );
        
        // Remove non-linked questions from the end
        if (questionsToRemove > 0) {
          const filteredQuestions: Question[] = [];
          let removedCount = 0;
          
          for (let i = selectedQuestions.length - 1; i >= 0; i--) {
            const q = selectedQuestions[i];
            if (removedCount < questionsToRemove && (!q.linkTo || q.linkTo.length === 0)) {
              removedCount++;
              addedQuestionIds.delete(q.id);
            } else {
              filteredQuestions.unshift(q);
            }
          }
          
          selectedQuestions.length = 0;
          selectedQuestions.push(...filteredQuestions);
        }
        
        // Add the linked questions
        selectedQuestions.push(...linkedQuestions);
      }
    } else {
      // Regular question without links
      if (selectedQuestions.length < targetCount) {
        selectedQuestions.push(question);
        addedQuestionIds.add(question.id);
      }
    }
    
    // Stop if we've reached the target count
    if (selectedQuestions.length >= targetCount) {
      break;
    }
  }
  
  return selectedQuestions.slice(0, targetCount);
}

/**
 * Selects the first N questions from an array, handling linked questions
 * @param allQuestions - Array of all available questions
 * @param targetCount - Target number of questions (default: 20)
 * @returns Array of selected questions with linked questions properly included
 */
export function selectFirstQuestions(allQuestions: Question[], targetCount: number = 20): Question[] {
  const questionMap = new Map<number, Question>();
  allQuestions.forEach(q => questionMap.set(q.id, q));

  const selectedQuestions: Question[] = [];
  const addedQuestionIds = new Set<number>();
  
  for (const question of allQuestions) {
    // Skip if we already added this question
    if (addedQuestionIds.has(question.id)) {
      continue;
    }
    
    // If question has linkTo array, add all linked questions
    if (question.linkTo && question.linkTo.length > 0) {
      const linkedQuestions: Question[] = [];
      
      // Get all linked questions in the specified order
      for (const linkedId of question.linkTo) {
        const linkedQuestion = questionMap.get(linkedId);
        if (linkedQuestion && !addedQuestionIds.has(linkedId)) {
          linkedQuestions.push(linkedQuestion);
          addedQuestionIds.add(linkedId);
        }
      }
      
      // Add linked questions if there's room
      if (selectedQuestions.length + linkedQuestions.length <= targetCount) {
        selectedQuestions.push(...linkedQuestions);
      }
    } else {
      // Regular question without links
      if (selectedQuestions.length < targetCount) {
        selectedQuestions.push(question);
        addedQuestionIds.add(question.id);
      }
    }
    
    // Stop if we've reached the target count
    if (selectedQuestions.length >= targetCount) {
      break;
    }
  }
  
  return selectedQuestions.slice(0, targetCount);
}
