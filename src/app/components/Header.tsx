import Link from "next/link";
import { FlameIcon } from "./Icons";

export function Header() {
  return (
    <header className="fixed w-full flex items-center justify-between p-4 bg-black text-white">
      <div className="flex items-center space-x-2">
        <FlameIcon className="w-8 h-8" />
        <span className="text-lg text-center font-bold font-roboto">Hackaton Climates</span>
      </div>
      <nav className="flex space-x-4">
        <Link href="/" prefetch={false}>
          Home
        </Link>
        <Link href="/eventos" prefetch={false}>
          Eventos
        </Link>
      </nav>
    </header>
  );
}

