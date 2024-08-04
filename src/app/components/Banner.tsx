import Image from "next/image";
import { AirPollution } from "./AirPollution";
import Link from "next/link";

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
          <h1 className="text-4xl font-bold md:text-6xl">CHANGE CLIMATES</h1>
          <p className="text-lg text-gray-700">Breve Descrição</p>

          <AirPollution />

          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-input bg-gray-800 text-white px-8 py-3 font-medium shadow-sm transition-colors hover:bg-gray-700 hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-100 focus-visible:ring-offset-2"
            prefetch={false}
          >
            junte-se a nós
          </Link>
        </div>
      </main>
    </section>
  );
}
