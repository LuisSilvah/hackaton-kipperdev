import Link from "next/link";
import {  FlameIcon } from "./Icons";
import { FadeDown } from "./Animations/FadeDown";

export function Header() {
  return (
    <FadeDown>
      <header className=" fixed w-full flex items-center justify-between p-4  bg-gray-900/80 text-white z-10 border-b-2 border-white shadow">
        <div className="flex items-center space-x-2 ">
          <FlameIcon className="hover:animate-bounce w-8 h-8 text-primary current-fill text-lime-700  " />
          <span className="text-lg text-center font-bold font-roboto">
            Hackaton Climates
          </span>
        </div>
      </header>
    </FadeDown>
  );
}
