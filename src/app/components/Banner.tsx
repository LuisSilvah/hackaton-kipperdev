import Image from "next/image";
import { AirPollution } from "./AirPollution";
import Link from "next/link";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShinyButton from "@/components/magicui/shiny-button";

export function Banner() {
  return (
    <section className="py-16 md:py-20 lg:pt-20">
      <main className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        <div className="w-full max-w-md">
          <Image
            src="/urso.png"
            alt="Bear with forest and fire"
            className="w-full h-auto"
            width={400}
            height={400}
            placeholder="empty"
            priority
          />
        </div>
        <div className="w-full max-w-lg space-y-4 text-center md:text-left">
          <h1 className="sm:text-5xl md:text-6xl pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#7dbfc78f] from-35% to-[#235a63] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]   drop-shadow-xl">
            <WordFadeIn words="Fortalecendo  um  futuro sustentável" />
          </h1>
          <p className="text-lg text-gray-700 ">
            <WordFadeIn
              words="Junte-se a nós em nossa missão de combater as mudanças climáticas e
            criar um mundo mais verde e resiliente para todos. Juntos, podemos
            causar um impacto duradouro."
            />
          </p>

          <AirPollution />

          <div className="w-full ">
            <Link
              href={"https://chat.whatsapp.com/F3cwyRNThgxAuaNWxFBL2S"}
              target="_blank"
              className="py-4 "
            >
              <ShinyButton text="junte-se a nós" />
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}
