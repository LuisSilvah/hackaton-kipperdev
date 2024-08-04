"use server"

import { createStreamableValue, getAIState, } from "ai/rsc"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { CoreMessage, streamText } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API!,
});



export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export const chat = async (messages: Message[]) => {
  "use server"

  // const history = getMutableAIState();



  const item = {
    content: "kdfjskgj"
  }


  const { textStream } = await streamText({
    model: google("models/gemini-1.5-pro-latest"),
    system: `Voçe é um assistente pessoas que responde perguntas sobre mudanças climaticas e tem um pré-treinamento baseado neste conteudo : ${item.content} 
     `,
    messages,
  })

  const stream = createStreamableValue(textStream);






  const history = getAIState()




  return {
    messages,
    newMessage: stream.value,
  };


}