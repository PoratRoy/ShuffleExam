import ExamViewer from '@/components/ExamViewer/ExamViewer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Shuffle Exam</h1>
      <ExamViewer />
    </main>
  );
}
