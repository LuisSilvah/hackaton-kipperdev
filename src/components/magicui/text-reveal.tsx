"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  style?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  style,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-auto max-w-4xl items-center bg-transparent  py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={`flex flex-wrap p-5 text-4xl lg:text-6xl md:text-5xl font-bold bg-gradient-to-bl ${style} bg-clip-text text-transparent shadow-gray-500  `}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                style={style}
              >
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
  style?: string;
}

const Word: FC<WordProps> = ({ children, progress, range, style }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={`bg-gradient-to-bl ${style} bg-clip-text  dark:text-white `}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
