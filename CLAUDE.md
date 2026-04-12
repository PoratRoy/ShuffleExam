# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Shuffle Exam** is a Next.js 14 (App Router) interactive exam platform. Users take multiple-choice exams with randomly shuffled questions and answer options. It includes AI-powered PDF-to-question extraction via Claude and Gemini APIs.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

### State Management
All exam state lives in `src/context/ExamContext.tsx` — a single React Context that acts as the central store. It manages: active exam type, shuffled question groups, user selections, score, and exam completion state. Components interact only through this context.

### Data Flow
1. URL query param (`?type=java`) → `useExamTypeQuery` hook → `switchExamType()` in context
2. `ExamContext` looks up the exam in `src/models/resources/exams.ts` (the exam registry)
3. `shuffleQuestions.ts` applies Fisher-Yates to both question groups and answer options, tracking the new correct-answer index after shuffling
4. `QuestionList` renders questions; answers are recorded via `selectAnswer()`; `finishExam()` computes the score

### Adding a New Exam
1. Create a `questions_<name>.ts` file in `src/models/resources/` following the existing pattern (array of `QuestionGroup[]`)
2. Register it in `src/models/resources/exams.ts` — add an entry to `MapExams` with the exam key, display name, questions array, and target question count
3. Add the exam key to the `ExamType` union in `src/models/types/exam.ts`

### Question Content Format
Questions support inline code blocks (triple-backtick markdown) and image references (`{IMG-12}` syntax). `parseQuestionContent.ts` handles parsing; `CodeBlock` and `QuestionImage` components handle rendering.

### API Routes
- `src/app/api/claudeApi/` — Anthropic Claude API; converts uploaded PDF text to structured JSON questions
- `src/app/api/geminiAPI/` — Google Gemini 2.0 Flash; same purpose

### Path Alias
`@/*` resolves to `./src/*` — use this for all internal imports.

## Code Style
- Prettier enforced: single quotes, semicolons, 2-space indent, trailing commas (ES5), 100-char line width
- CSS Modules (`.module.css`) for all component styles
- Hebrew text/RTL is present in question content — preserve encoding when editing question files
