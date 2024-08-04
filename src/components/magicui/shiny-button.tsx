"use client";

import { motion, type AnimationProps } from "framer-motion";

import { cn } from "@/lib/utils";
import { NeonGradientCard } from "./neon-gradient-card";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;
interface ShinyButtonProps {
  text: string;
  className?: string;
}
const ShinyButton = ({
  text = "shiny-button",
  className,
}: ShinyButtonProps) => {
  return (
    <motion.button
      {...animationProps}
      className={cn(
        "relative font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow  rounded-xl shadow-xl bg-transparent",
        className
      )}
    >
      <NeonGradientCard>
        <span
          className="relative px-4 block h-full w-full text-sm uppercase tracking-wide text-[#1E90FF]"
        >
          {text}
        </span>
      </NeonGradientCard>
    </motion.button>
  );
};

export default ShinyButton;
