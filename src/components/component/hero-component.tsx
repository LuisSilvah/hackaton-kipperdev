import Image from "next/image";
import Link from "next/link";
import TypingAnimation from "../magicui/typing-animation";
import { NeonGradientCard } from "../magicui/neon-gradient-card";
import { CardIntroduction } from "./card-introduction";

export function HeroComponent() {
  return (
    <section className="w-full h-[80vh] relative overflow-hidden">
      <div className="flex items-center justify-center bg-red-200 w-screen">
        <Image
          src="/urso.png"
          alt="Bear with forest and fire"
          className="mx-auto lg:mx-[50%]  w-auto max-w-md lg:max-w-xl absolute inset-0  h-auto object-cover object-center "
          width={400}
          height={400}
          placeholder="empty"
          priority
          quality={100}
        />
      </div>
      <div className="absolute inset-0  z-10" />
      <div className="relative z-20 container h-full flex flex-col items-center justify-center px-4 md:px-6 text-center text-primary-foreground">
        <div className="mt-12">
          <CardIntroduction />
        </div>
      </div>
    </section>
  );
}
