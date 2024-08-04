"use server"



import { createAI, getMutableAIState } from "ai/rsc"
import React from "react"

import { Message } from "ai";
import { chat } from "./chat";


export interface ServerMessage extends Message {

}

export interface UserMessage extends Message {
  display: React.ReactNode;
}



export const AI = createAI<ServerMessage[], UserMessage[]>({
  actions: {
    chat
  },
  initialAIState: [{
    id: "",
    role: "user",
    content: ``
  }],
  initialUIState: [],
  onSetAIState: async ({ done }) => {

    if (done) {
      console.log("rendered")
    }

  }
})