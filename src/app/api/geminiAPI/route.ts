import { NextResponse, NextRequest } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const pdfFile = formData.get('pdf') as File;
    const prompt = formData.get('prompt') as string;

    if (!pdfFile || !prompt) {
      return NextResponse.json({ error: 'Missing pdf file or prompt' }, { status: 400 });
    }

    const arrayBuffer = await pdfFile.arrayBuffer();
    const base64Pdf = Buffer.from(arrayBuffer).toString('base64');
    const env = process.env.GEMINI_API_KEY;
    if(env){
        console.log("Using env key")
    }

    const genAI = new GoogleGenerativeAI(env || '');
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const result = await model.generateContent([
      {
        text: prompt
      },
      {
        inlineData: {
          mimeType: 'application/pdf',
          data: base64Pdf,
        },
      },
    ]);

    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ result: text }, { status: 200 });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to process PDF', details: error.message },
      { status: 500 }
    );
  }
}
