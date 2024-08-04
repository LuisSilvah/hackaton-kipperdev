import Link from "next/link";
import {  FlameIcon } from "./Icons";
import { FadeDown } from "./Animations/FadeDown";

export function Header() {
  return (
    <FadeDown>
      <header className="fixed w-full flex items-center justify-between p-4 bg-transparent bg-[#62b2ff] bg-opacity-40  text-black">
        <div className="flex items-center space-x-2">
          <FlameIcon className="w-8 h-8 text-primary" />
          <span className="text-lg text-center font-bold font-roboto">
            Hackaton Climates
          </span>
        </div>
        <nav className="flex space-x-4 underline font-roboto">
          <Link href="/" prefetch={false}>
            Home
          </Link>
          <Link href="/eventos" prefetch={false}>
            Eventos
          </Link>
        </nav>
      </header>
    </FadeDown>
  );
}
