'use client';

import type React from 'react';
import { useState } from 'react';
import { Upload, FileText, ChevronDown } from 'lucide-react';
import { Question } from '@/models/types/exam';
import { sampleQuestions } from '@/models/resources/simpleQestions';
import QuestionList from '../QuestionList/QuestionList';
import { Button } from '../UI/Button/Button';
import styles from "./ExamViewer.module.css";

const ExamViewer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [questions, setQuestions] = useState<Question[]>(sampleQuestions);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      // In a real app, we would parse the PDF here
      // For now, we'll just use the sample questions
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
      }, 1500);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.uploadSection}>
        <label className={styles.fileInput}>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className={styles.hiddenInput}
          />
          <Button
            variant="outline"
            className={styles.uploadButton}
            disabled={isUploading}
          >
            {isUploading ? (
              <>
                <ChevronDown className={`${styles.icon} ${styles.bounce}`} />
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <Upload className={styles.icon} />
                <span>Upload PDF File</span>
              </>
            )}
          </Button>
        </label>
      </div>

      {file && !isUploading && (
        <div className={styles.fileInfo}>
          <FileText className={styles.icon} />
          <span>{file.name}</span>
        </div>
      )}

      <div className={styles.examContainer}>
        <div className={styles.examHeader}>
          <h2 className={styles.examTitle}>Main Test Title</h2>
        </div>
        <QuestionList questions={questions} />
      </div>
    </div>
  );
};

export default ExamViewer;
