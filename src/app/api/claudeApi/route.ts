import { NextRequest, NextResponse } from 'next/server';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const API_URL = 'https://api.anthropic.com/v1/messages';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const pdfText = await file.text();

    const systemPrompt = `You are an expert at analyzing exam questions. 
    You will receive a PDF text content of an exam. 
    Extract all multiple choice questions and format them as a JSON array where each question has:
    - question: the question text
    - correctRes: the correct answer text
    - results: array of incorrect answer texts
    
    Only include questions that have clear multiple choice options.
    Return ONLY the JSON array, no other text.`;

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-opus-20240229',
        max_tokens: 4096,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: pdfText
          }
        ]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Claude API error:', error);
      return NextResponse.json({ error: 'Failed to process PDF' }, { status: 500 });
    }

    const data = await response.json();
    
    if (!data.content || !Array.isArray(data.content)) {
      return NextResponse.json({ error: 'Invalid response format from Claude' }, { status: 500 });
    }

    return NextResponse.json(data.content);
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}