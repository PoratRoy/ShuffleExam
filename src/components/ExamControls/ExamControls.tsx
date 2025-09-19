'use client';

import React from 'react';
import { useExam } from '@/context/ExamContext';
import { Button } from '../UI/Button/Button';
import { MapExams } from '@/models/resources/exams';
import styles from './ExamControls.module.css';

const ExamControls: React.FC = () => {
  const { examState, finishExam, clearResults, shuffleExam } = useExam();

  const handleFinishExam = () => {
    finishExam();
  };

  const handleClearResults = () => {
    clearResults();
  };

  const handleShuffleExam = () => {
    const currentExamQuestions = MapExams[examState.currentExamType].questions;
    shuffleExam(currentExamQuestions);
  };

  return (
    <div className={styles.controlsContainer}>
      <div className={styles.buttonsContainer}>
        <Button
          variant="secondary"
          size="lg"
          onClick={handleClearResults}
          disabled={!examState.isExamFinished}
        >
          מחיקת תוצאות
        </Button>

        <Button
          variant="default"
          size="lg"
          onClick={handleFinishExam}
          disabled={examState.isExamFinished}
        >
          סיום מבחן
        </Button>

        <Button variant="outline" size="lg" onClick={handleShuffleExam}>
          ערבוב מבחן חדש
        </Button>
      </div>
      <div className={styles.scoreSection}>
        {examState.isExamFinished && (
          <div className={styles.scoreDisplay}>
            <span className={styles.scoreText}>
              ציון: {examState.score} / {examState.questions.length * 5}
            </span>
            <span className={styles.percentageText}>
              {examState.questions.length - examState.score / 5} תוצאות לא נכונות
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamControls;
