import { NextRequest, NextResponse } from 'next/server';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import { TextItem } from 'pdfjs-dist/types/src/display/api';

// Set worker path for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface QuestionResult {
  question: string;
  correctRes: string;
  results: string[];
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    console.log('ROY formData: ', formData);
    const file = formData.get('file') as File;
    console.log('ROY file: ', file);

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'File must be a PDF' }, { status: 400 });
    }

    // Convert file to ArrayBuffer for PDF.js
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    // Process all pages
    const totalPages = pdf.numPages;
    let allPageContent: string[] = [];

    // Extract text from all pages
    for (let i = 1; i <= totalPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => (item as TextItem).str).join(' ');

      allPageContent.push(pageText);
    }

    // Join all pages with a marker to help identify page boundaries
    const fullText = allPageContent.join(' PAGE_BREAK ');

    // Process the text to extract questions and answers
    const questions = extractQuestionsAndAnswers(fullText);

    return NextResponse.json({ questions });
  } catch (error) {
    console.error('Error processing PDF:', error);
    return NextResponse.json({ error: 'Error processing PDF' }, { status: 500 });
  }
}

function extractQuestionsAndAnswers(text: string): QuestionResult[] {
  const results: QuestionResult[] = [];

  // Find all question headers using regex (matches "שאלה מס' 1 (5 נק')" pattern)
  const questionRegex = /שאלה\s+מס['\s]*\s*(\d+)\s*\(\s*5\s*נק['"]?\)/g;
  const matches = Array.from(text.matchAll(questionRegex));

  // Process each question
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const questionNumber = match[1];
    const questionStartIndex = match.index || 0;

    // Determine the end of the current question (start of next question or end of text)
    const nextMatch = matches[i + 1];
    const questionEndIndex = nextMatch ? nextMatch.index || text.length : text.length;

    // Extract the question section
    const questionSection = text.substring(questionStartIndex, questionEndIndex);

    // Extract multiple choice options
    const options = extractMultipleChoiceOptions(questionSection);

    // According to requirements, in this exam format, option א. is always the correct answer
    const correctAnswer = options.find(
      (option) => option.startsWith('א.') || option.startsWith('א. ')
    );

    // All other options (ב through ה) are incorrect answers
    const incorrectAnswers = options.filter(
      (option) => !option.startsWith('א.') && !option.startsWith('א. ')
    );

    // Clean up answers by removing the option prefix (א., ב., etc.)
    const cleanCorrectAnswer = correctAnswer ? cleanAnswerText(correctAnswer) : '';
    const cleanIncorrectAnswers = incorrectAnswers.map(cleanAnswerText);

    results.push({
      question: `שאלה מספר ${questionNumber}`,
      correctRes: cleanCorrectAnswer,
      results: cleanIncorrectAnswers,
    });
  }

  return results;
}

function extractMultipleChoiceOptions(questionText: string): string[] {
  const options: string[] = [];

  // Look for answer options (א., ב., ג., ד., ה.)
  const hebrewLetters = ['א', 'ב', 'ג', 'ד', 'ה'];

  for (const letter of hebrewLetters) {
    // Create a regex to find the option that starts with the letter
    // and continues until the next option or end of text
    const pattern = new RegExp(`${letter}\\.\\s*([^א-ה]+?)(?=\\s+[א-ה]\\.|$)`, 's');
    const match = questionText.match(pattern);

    if (match && match[0]) {
      options.push(`${letter}. ${match[1].trim()}`);
    } else {
      // Alternative pattern: search for options with parentheses, like א)
      const altPattern = new RegExp(`${letter}\\)\\s*([^א-ה]+?)(?=\\s+[א-ה]\\)|$)`, 's');
      const altMatch = questionText.match(altPattern);

      if (altMatch && altMatch[0]) {
        options.push(`${letter}. ${altMatch[1].trim()}`);
      }
    }
  }

  // For the special pattern often seen in Hebrew exams: "כל התשובות האחרות לא נכונות"
  if (questionText.includes('כל התשובות האחרות לא נכונות')) {
    const lastOptionIndex = options.length;
    if (lastOptionIndex < hebrewLetters.length) {
      options.push(`${hebrewLetters[lastOptionIndex]}. כל התשובות האחרות לא נכונות`);
    }
  }

  return options;
}

function cleanAnswerText(text: string): string {
  // Remove the option prefix (א., ב., etc.) and clean up spaces
  return text.replace(/^[א-ה]\.\s*/, '').trim();
}

// Config for API route
export const config = {
  api: {
    bodyParser: false,
    responseLimit: '10mb',
  },
};

export const dynamic = 'force-dynamic';
