'use client';

import { useState } from 'react';
import { Check, Eye, EyeOff } from 'lucide-react';
import { Question } from '@/models/types/exam';
import { Button } from '../UI/Button/Button';
import styles from './QuestionList.module.css';
import { formatOptionText } from '@/utils/format';

interface QuestionListProps {
  questions: Question[];
}

const QuestionList = ({ questions }: QuestionListProps) => {
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  const toggleReveal = (questionId: number) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    if (!revealedAnswers[questionId]) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: optionIndex,
      }));
    }
  };

  const getOptionClassName = (questionId: number, optionIndex: number, isCorrect: boolean) => {
    const baseClass = styles.optionItem;
    const isSelected = selectedAnswers[questionId] === optionIndex;
    const isRevealed = revealedAnswers[questionId];

    if (!isRevealed && isSelected) {
      return `${baseClass} ${styles.selected}`;
    }

    if (isRevealed) {
      if (isCorrect) {
        return `${baseClass} ${styles.correct}`;
      }
      if (isSelected && !isCorrect) {
        return `${baseClass} ${styles.incorrect}`;
      }
    }

    return baseClass;
  };

  return (
    <div className={styles.container}>
      {questions.map((question) => (
        <div key={question.id} className={styles.questionItem}>
          <div className={styles.questionHeader}>
            <section className={styles.questionInfo}>
              {question.text.split('\n').map((part, index) => (
                <div key={index} className={styles.questionTitle}>
                  {part}
                </div>
              ))}
            </section>
            <Button variant="secondary" size="sm" onClick={() => toggleReveal(question.id)}>
              <div className={styles.buttonContent}>
                {revealedAnswers[question.id] ? (
                  <>
                    <EyeOff className={styles.buttonIcon} />
                    <span>הסתרת תשובה</span>
                  </>
                ) : (
                  <>
                    <Eye className={styles.buttonIcon} />
                    <span>הצגת תשובה</span>
                  </>
                )}
              </div>
            </Button>
          </div>
          <div className={styles.optionsContainer}>
            {question.options.map((option, index) => (
              <div
                key={index}
                className={getOptionClassName(question.id, index, question.correctAnswer === index)}
                onClick={() => handleOptionSelect(question.id, index)}
              >
                <span className={styles.optionLetter}>{String.fromCharCode(1488 + index)}.</span>
                <span className={styles.optionText}>{formatOptionText(option)}</span>
                {revealedAnswers[question.id] && question.correctAnswer === index && (
                  <Check className={styles.correctIcon} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
