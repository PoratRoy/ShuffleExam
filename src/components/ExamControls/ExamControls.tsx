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
    const currentExamGroups = MapExams[examState.currentExamType].questions;
    shuffleExam(currentExamGroups);
  };

  const totalQuestions = examState.questionGroups.reduce((acc, group) => acc + group.questions.length, 0);

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
              ציון: {examState.score} / 100
            </span>
            <span className={styles.percentageText}>
              {totalQuestions - (examState.examResults?.filter(r => r.isCorrect).length || 0)} תשובות שגויות מתוך {totalQuestions} שאלות
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamControls;
