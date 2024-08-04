"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "ai/react";
import { ChatButton, ComponentButton } from "../Buttons/ChatButton";

export const ChatDialog = () => {
  const {
    isLoading,
    handleSubmit,
    handleInputChange,
    input,
    reload,
    setInput,
    messages,
  } = useChat({
    api: "api/chat",
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ChatButton>
          <ComponentButton />
        </ChatButton>
      </DialogTrigger>
      <DialogContent className=" transition-all bg-[#cbdfd1] max-w-md lg:max-w-2xl lg:mx-0 p-8 rounded-xl flex flex-col w-full h-auto">
        <ScrollArea className=" h-[200px] w-full   border p-4 flex  bg-gray-200 rounded-xl shadow-xl ">
          {messages.map((message) => (
            <div key={message.id}>
              {message.role === "user" ? "User: " : "AI: "}
              {message.role === "user" && (
                <>
                  <h1 className="flex flex-col gap-1 w-full bg-zinc-500 mb-4  items-start  justify-start ">
                    {message.content}
                  </h1>
                </>
              )}
              {message.role === "assistant" && (
                <>
                  <h1 className="transition-all relative bottom-2 right-1 flex flex-col gap-1 w-full bg-red-200 items-start  justify-start ml-8">
                    {message.content}
                  </h1>
                </>
              )}
            </div>
          ))}
        </ScrollArea>
        <form>
          <DialogFooter>
            <Input placeholder="insira seu prompt" /> <Button>Generate</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
