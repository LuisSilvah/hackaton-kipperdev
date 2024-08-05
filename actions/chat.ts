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
    content: "As mudanças climáticas são um dos maiores desafios que a humanidade enfrenta hoje. Cada ação individual pode contribuir significativamente para a mitigação desse problema. Reduzir, reutilizar e reciclar são passos fundamentais. Considere o impacto de suas escolhas diárias, como diminuir o uso de plásticos descartáveis, optar por transportes públicos ou bicicletas em vez de carros, e consumir alimentos locais e sazonais. Além disso, economizar energia em casa, utilizando lâmpadas LED e aparelhos eficientes, pode reduzir sua pegada de carbono. Educar-se sobre a crise climática e compartilhar conhecimento com amigos e familiares também é crucial. Pequenas mudanças em nossos hábitos diários podem somar grandes resultados quando praticadas coletivamente. A autonomia começa com a conscientização, e juntos, podemos criar um futuro mais sustentável.",
    based: "A sustentabilidade é essencial para a prevenção das crises climáticas. Adotar práticas sustentáveis em nosso cotidiano ajuda a reduzir a emissão de gases de efeito estufa e a conservar os recursos naturais. Comece por avaliar seu consumo de energia e água, implementando medidas para reduzir o desperdício. Plante árvores e mantenha áreas verdes, pois elas absorvem dióxido de carbono e promovem a biodiversidade. Apoie políticas e empresas que priorizam práticas ecológicas. Incentive a compostagem e a agricultura orgânica, que reduzem o uso de produtos químicos nocivos ao meio ambiente. Tornar-se consciente de como suas ações impactam o planeta é o primeiro passo para desenvolver autonomia na luta contra as mudanças climáticas. Com um esforço contínuo e coletivo, podemos criar um impacto positivo significativo e assegurar um planeta saudável para as futuras gerações"
  }


  const { textStream } = await streamText({
    model: google("models/gemini-1.5-pro-latest"),
    system: `Voçe é um assistente que responde perguntas sobre mudanças climaticas e tem um pré-treinamento baseado neste conteudo : ${item.content} %${item.based} 
     `,
    messages,
    maxTokens: 300
  })

  const stream = createStreamableValue(textStream);






  const history = getAIState()




  return {
    messages,
    newMessage: stream.value,
  };


}