'use client';

import type React from 'react';
import { useState, useRef } from 'react';
import { Upload, FileText, ChevronDown } from 'lucide-react';
import { Question } from '@/models/types/exam';
import { sampleQuestions } from '@/models/resources/simpleQestions';
import QuestionList from '../QuestionList/QuestionList';
import { Button } from '../UI/Button/Button';
import styles from "./ExamViewer.module.css";

const ExamViewer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setError(null);

    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setIsUploading(true);

      try {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await fetch('/api/convertPdf', {
          method: 'POST',
          body: formData
        });
        console.log('ROY response: ', response)
        if (!response.ok) {
          throw new Error('Failed to process PDF');
        }

        const data = await response.json();
        console.log("data: ", data)
        // setQuestions(data.questions);
      } catch (err) {
        setError('Error processing PDF. Please try again.');
        console.error('Error:', err);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.uploadSection}>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className={styles.hiddenInput}
        />
        <Button
          variant="outline"
          className={styles.uploadButton}
          disabled={isUploading}
          onClick={handleButtonClick}
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
      </div>

      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      {file && !isUploading && (
        <div className={styles.fileInfo}>
          <FileText className={styles.icon} />
          <span>{file.name}</span>
        </div>
      )}

      {questions.length > 0 && (
        <div className={styles.examContainer}>
          <div className={styles.examHeader}>
            <h2 className={styles.examTitle}>Main Test Title</h2>
          </div>
          <QuestionList questions={questions} />
        </div>
      )}
    </div>
  );
};

export default ExamViewer;
