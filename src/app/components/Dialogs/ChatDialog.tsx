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
        <Button variant="outline"></Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[425px]  bg-blue-500 p-2">
        <ScrollArea className=" h-[200px] w-[350px]  border p-4 flex rounded-md ">
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
            <Input placeholder="insira seu prompt" />{" "}
            <Button type="submit">Generate</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
