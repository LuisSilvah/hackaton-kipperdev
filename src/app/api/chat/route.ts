import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText, StreamingTextResponse, streamText, streamToResponse } from 'ai';
import { NextRequest, NextResponse } from 'next/server';



const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API!,
});

const model = google("models/gemini-1.5-flash-latest")


const item = {
  assunto: " conteudo ",
  conteudo: "assunto"
}

export const POST = async (req: NextRequest, res: NextResponse) => {

  const messages = await req.json()

  const result = await streamText({
    model: model,
    messages,
    system: `Voce é um sistema capaz de responder pessoas sobre estes respectivos assuntos:  : ${item.assunto}  ${item.conteudo} `
  });

  return new StreamingTextResponse(result.toAIStream())
}