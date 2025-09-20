'use client';

import React from 'react';
import { ExamType } from '@/models/types/exam';
import { MapExams } from '@/models/resources/exams';
import { useExam } from '@/context/ExamContext';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const { examState, switchExamType } = useExam();

  const handleExamTypeChange = (examType: ExamType) => {
    if (examState.currentExamType !== examType) {
      switchExamType(examType);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Shuffle Exam</h2>
        </div>
        <div className={styles.examOptions}>
          {Object.entries(MapExams).map(([key, exam]) => (
            <button
              key={key}
              className={`${styles.examButton} ${
                examState.currentExamType === key ? styles.active : ''
              }`}
              onClick={() => handleExamTypeChange(key as ExamType)}
            >
              {exam.name}
            </button>
          ))}
          <span>מותאם למחשב</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
