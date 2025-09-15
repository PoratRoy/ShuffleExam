'use client';

import styles from './page.module.css';
import QuestionList from '@/components/QuestionList/QuestionList';
import ExamControls from '@/components/ExamControls/ExamControls';
import { ExamProvider } from '@/context/ExamContext';
import { Questions } from '@/models/resources/questions';

export default function Home() {
  return (
    <ExamProvider initialQuestions={Questions}>
      <main className={styles.main}>
        <h1 className={styles.title}>Shuffle Exam</h1>
        <ExamControls />
        <QuestionList />
      </main>
    </ExamProvider>
  );
}
