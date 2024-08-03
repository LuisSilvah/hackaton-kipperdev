"use client";

import { useEffect, useState, useTransition } from "react";
import { EventCardType } from "@/app/types";

export const EventCard = () => {
  const [evento, setEvento] = useState<EventCardType[]>([]);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const response = await fetch("/api/eventos");
      const data = await response.json();
      setEvento(data);
    });
  }, []);

  if (isPending) {
    return (
      <>
        <div>Loading</div>
      </>
    );
  }

  return (
    <>
      {evento.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-slate-100 rounded-lg p-6 shadow-md border cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-medium">
                <span>{item.data}, </span>
                <span>
                  {item.estado} - {item.cidade}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-muted-foreground">{item.describe}</p>
          </div>
        );
      })}
    </>
  );
};
