"use client";

import Markdown from "react-markdown";

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
import { Message, useChat } from "ai/react";
import { ChatButton, ComponentButton } from "../Buttons/ChatButton";
import { useEffect, useRef, useState, useTransition } from "react";
import { readStreamableValue, useActions } from "ai/rsc";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const ChatDialog = () => {
  const [conversation, setConversation] = useState<Message[]>([
    {
      role: "system",
      content: `ADSADASDS`,
      id: "",
    },
  ]);
  // const [input, setInput] = useState<string>('')
  const [isPending, startTransition] = useTransition();

  const { chat } = useActions();

  const { input, setInput } = useChat({
    onFinish: async (message) => {
      alert(message);
    },
    onError: async (error) => {
      alert(error);
    },
    onResponse: async (response) => {
      alert(response);
    },
  });

  const handler = async () => {
    const { messages, newMessage } = await chat([
      ...conversation,
      { role: "user", content: input },
    ]);

    startTransition(async () => {
      setInput("");
      let textContext = "";

      for await (const delta of readStreamableValue(newMessage)) {
        textContext = `${textContext}${delta}`;
        setConversation([
          ...messages,
          {
            role: "assistant",
            content: delta as string,
          },
        ]);
      }
    });
  };

  const chatRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const [view, setView] = useState<boolean>(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ChatButton>
          <ComponentButton />
        </ChatButton>
      </DialogTrigger>
      <DialogContent className=" transition-all bg-[#cbdfd1] max-w-md lg:max-w-2xl lg:mx-0 p-8 rounded-xl flex flex-col w-full h-auto">
        <ScrollArea className="transition-all min-h-[30px] h-[400px] max-h-[600px] w-full lg:h-[400px]   border p-4 flex  bg-gray-200 rounded-xl shadow-xl ">
          <div className="transition-all flex-1 overflow-auto p-4">
            <ScrollArea
              className={
                "transition-all space-y-4 min-h-0 h-[350px] p-2 rounded-xl bg-gray-200 bg-opacity-60"
              }
            >
              {conversation
                .filter((m) => m.role === "user" || m.role === "assistant")
                .map((m, index) => (
                  <>
                    <div
                      key={index}
                      className="transition-all   whitespace-pre-wrap"
                    >
                      {m.role === "user" ? (
                        <>
                          <div className="transition-all ">
                            <Avatar className="transition-all h-8 w-8">
                              <AvatarImage
                                alt="John Doe"
                                src="https://api.iconify.design/line-md:iconify1.svg"
                              />
                              <AvatarFallback>😀</AvatarFallback>
                            </Avatar>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="transition-all relative left-[90%] bottom-1">
                            <Avatar className="transition-all h-8 w-8">
                              <AvatarImage
                                alt="You"
                                src="https://api.iconify.design/bi:stars.svg"
                              />
                              <AvatarFallback>🍃</AvatarFallback>
                            </Avatar>
                          </div>
                        </>
                      )}

                      {m.role === "user" ? (
                        <>
                          <div className="transition-all relative bottom-2 right-1  flex-col gap-1 w-full flex items-start  justify-start ml-8">
                            <div className="transition-all  bg-blue-200 rounded-xl shadow-md  px-4 py-2 text-sm dark:bg-gray-800 w-auto max-w-sm ">
                              {m.content == ""
                                ? " "
                                : m.role === "user" && (
                                    <>
                                      <Markdown>{m.content as string}</Markdown>
                                    </>
                                  )}
                            </div>
                            <div className="transition-all font-medium text-gray-500 dark:text-gray-400">
                              Você
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="transition-all  flex flex-col gap-1 w-auto">
                            <div className="transition-all  bg-lime-500  rounded-xl px-4 py-2 text-sm text-white">
                              {m.role === "assistant" && (
                                <>
                                  <Markdown>{m.content as string}</Markdown>
                                </>
                              )}
                            </div>
                            <div className="transition-all font-medium text-gray-500 dark:text-gray-400">
                              IA
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ))}

              <div ref={chatRef} />
            </ScrollArea>
          </div>
        </ScrollArea>
        <form
          action={handler}
          className="transition-all flex items-center gap-2 border-t px-4 py-3"
        >
          <Input
            value={input}
            disabled={isPending}
            onChange={(event) => {
              setInput(event.target.value);
            }}
            className="transition-all flex-1"
            placeholder="Algo que queira saber sobre a empresa..."
            type="text"
          />
          <Button
            className="transition-all bg-blue-500"
            type="submit"
            disabled={isPending}
          >
            Enviar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
