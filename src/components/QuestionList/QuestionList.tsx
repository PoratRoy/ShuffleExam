'use client';

import { Check, X } from 'lucide-react';
import { useExam } from '@/context/ExamContext';
import CodeBlock from '../CodeBlock/CodeBlock';
import QuestionImage from '../QuestionImage/QuestionImage';
import styles from './QuestionList.module.css';
import { formatOptionText } from '@/utils/format';
import { parseQuestionContent } from '@/utils/parseQuestionContent';

const QuestionList = () => {
  const { examState, selectAnswer } = useExam();
  const { questions, selectedAnswers, examResults, isExamFinished } = examState;

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    if (!isExamFinished) {
      selectAnswer(questionId, optionIndex);
    }
  };

  const getQuestionResult = (questionId: number) => {
    return examResults?.find((result) => result.questionId === questionId);
  };

  const getOptionClassName = (questionId: number, optionIndex: number, isCorrect: boolean) => {
    const baseClass = styles.optionItem;
    const isSelected = selectedAnswers[questionId] === optionIndex;
    const questionResult = getQuestionResult(questionId);

    if (!isExamFinished && isSelected) {
      return `${baseClass} ${styles.selected}`;
    }

    if (isExamFinished && questionResult) {
      if (isCorrect) {
        return `${baseClass} ${styles.correct}`;
      }
      if (isSelected && !isCorrect) {
        return `${baseClass} ${styles.incorrect}`;
      }
    }

    return baseClass;
  };

  return (
    <div className={styles.container}>
      {questions.map((question, questionIndex) => (
        <div key={question.id} className={styles.questionItem}>
          <div className={styles.questionNumber}>
            שאלה {questionIndex + 1}
          </div>
          <div className={styles.questionHeader}>
            <section className={styles.questionInfo}>
              {parseQuestionContent(question.question, question.hasImage).map((part, index) => (
                <div key={index} className={styles.question}>
                  {part.type === 'text' ? (
                    part.content.split('\n').map((line, lineIndex) => (
                      <div className={styles.questionText} key={lineIndex}>
                        {line}
                      </div>
                    ))
                  ) : part.type === 'code' ? (
                    <div className={styles.questionCode}>
                      <CodeBlock code={part.content} language={part.language} />
                    </div>
                  ) : part.type === 'image' && part.imagePath ? (
                    <div className={styles.questionImage}>
                      <QuestionImage imageName={part.content} imagePath={part.imagePath} />
                    </div>
                  ) : null}
                </div>
              ))}
            </section>
            {isExamFinished && (
              <div className={styles.resultIndicator}>
                {getQuestionResult(question.id)?.isCorrect ? (
                  <div className={styles.correctResult}>
                    <Check className={styles.resultIcon} />
                    <span>נכון</span>
                  </div>
                ) : (
                  <div className={styles.incorrectResult}>
                    <X className={styles.resultIcon} />
                    <span>שגוי</span>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className={styles.optionsContainer}>
            {question.answers.map((option, index) => (
              <div
                key={index}
                className={getOptionClassName(question.id, index, question.correctAnswer === index)}
                onClick={() => handleOptionSelect(question.id, index)}
              >
                <span className={styles.optionLetter}>{String.fromCharCode(1488 + index)}.</span>
                <span className={styles.optionText}>{formatOptionText(option)}</span>
                {isExamFinished && question.correctAnswer === index && (
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
