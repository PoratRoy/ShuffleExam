import React from 'react';
import styles from './CodeBlock.module.css';
import { Editor } from '@monaco-editor/react';
import { DEFAULT_EXAM_TYPE } from '@/models/resources/exams';

type CodeBlockProps = {
  code: string;
  language?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = DEFAULT_EXAM_TYPE }) => {
  return (
    <div className={styles.codeEditorBox}>
      <Editor
        height={`${code.split('\n').length * 21}px`}
        defaultLanguage={language}
        defaultValue={code}
        theme="vs-dark"
        options={{
          readOnly: true,
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          wrappingStrategy: 'advanced',
          lineNumbers: 'on',
          folding: true,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeBlock;
