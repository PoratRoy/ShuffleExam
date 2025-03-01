'use client';

import React from 'react';
import { useState, useRef } from 'react';
import { Upload, FileText } from 'lucide-react';
import { Question, RawExam } from '@/models/types/exam';
import { rawQestionsToQuestions, shuffleQuestionOptions } from '@/utils/questions';
import QuestionList from '../QuestionList/QuestionList';
import { Button } from '../UI/Button/Button';
import styles from './ExamViewer.module.css';
import { PROMPT } from '@/models/resources/prompt';

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
        formData.append('pdf', selectedFile);
        formData.append('prompt', PROMPT);

        const response = await fetch('/api/geminiAPI', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to process PDF');
        }

        const data = await response.json();
        
        if (data.result) {
          try {
            const cleanJson = data.result.replace(/```json\n|\n```/g, '').trim();
            const jsonContent = JSON.parse(cleanJson) as RawExam[];
            
            if (Array.isArray(jsonContent)) {
              const questions = rawQestionsToQuestions(jsonContent)
              const shuffledQuestions = questions.map((q) => shuffleQuestionOptions(q));
              setQuestions(shuffledQuestions);
            } else {
              setError('Invalid response format from API');
            }
          } catch (err) {
            console.error('Parse error:', err);
            setError('Failed to parse the exam questions. Please try again.');
          }
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        setError('Error processing PDF. Please try again.');
        console.error('Error:', err);
      } finally {
        setIsUploading(false);
      }
    } else if (selectedFile) {
      setError('Please upload a PDF file');
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className={styles.hiddenInput}
        ref={fileInputRef}
      />

      <div className={styles.uploadSection}>
        <Button
          onClick={handleUploadClick}
          disabled={isUploading}
          className={styles.uploadButton}
        >
          <div className={styles.buttonContent}>
            <Upload className={styles.buttonIcon} />
            <span>{isUploading ? 'מעבד...' : 'העלאת מבחן'}</span>
          </div>
        </Button>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {file && !isUploading && (
        <div className={styles.fileInfo}>
          <FileText className={styles.fileIcon} />
          <span className={styles.fileName}>{file.name}</span>
        </div>
      )}

      {questions.length > 0 && (
        <div className={styles.examContainer}>
          <div className={styles.examHeader}>
            <h2 className={styles.examTitle}>מבחן</h2>
          </div>
          <QuestionList questions={questions} />
        </div>
      )}
    </div>
  );
};

export default ExamViewer;
