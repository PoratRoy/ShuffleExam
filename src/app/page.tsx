'use client';

import { Suspense } from 'react';
import styles from './page.module.css';
import QuestionList from '@/components/QuestionList/QuestionList';
import ExamControls from '@/components/ExamControls/ExamControls';
import Navbar from '@/components/Navbar/Navbar';
import { ExamProvider } from '@/context/ExamContext';
import { useExamTypeQuery } from '@/hooks/useExamTypeQuery';
import { DEFAULT_EXAM_TYPE } from '@/models/resources/exams';

function HomeContent() {
  const { examType, setExamType, isReady } = useExamTypeQuery(DEFAULT_EXAM_TYPE);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return (
    <ExamProvider initialExamType={examType} onExamTypeChange={setExamType}>
      <Navbar />
      <main className={styles.main}>
        <ExamControls />
        <QuestionList />
      </main>
    </ExamProvider>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
