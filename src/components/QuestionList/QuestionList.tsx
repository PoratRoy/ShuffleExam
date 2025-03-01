'use client';

import { useState } from 'react';
import { Check, Eye, EyeOff } from 'lucide-react';
import { Question } from '@/models/types/exam';
import { Button } from '../UI/Button/Button';
import styles from "./QuestionList.module.css";

interface QuestionListProps {
  questions: Question[];
}

const QuestionList = ({ questions }: QuestionListProps) => {
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  const toggleReveal = (questionId: number) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <div className={styles.container}>
      {questions.map((question) => (
        <div key={question.id} className={styles.questionItem}>
          <div className={styles.questionHeader}>
            <h3 className={styles.questionTitle}>
              {question.id}. {question.text}
            </h3>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => toggleReveal(question.id)}
            >
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
                className={`${styles.optionItem} ${
                  revealedAnswers[question.id] && question.correctAnswer === index
                    ? styles.correct
                    : ''
                }`}
              >
                <span className={styles.optionLetter}>
                  {String.fromCharCode(1488 + index)}.
                </span>
                <span className={styles.optionText}>{option}</span>
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
