import Link from "next/link";
import { FlameIcon, LeafIcon } from "./Icons";
import { FadeDown } from "./Animations/FadeDown";

export function Header() {
  return (
    <FadeDown>
      <header className=" fixed w-full flex items-center justify-between p-4   text-white z-10 ">
        <div className="flex items-center space-x-2 ">
          <LeafIcon className="hover:animate-bounce w-8 h-8 text-primary current-fill text-lime-600  " />

          <span className="text-lg text-center font-bold font-roboto">
            Hackaton Climates
          </span>
        </div>
      </header>
    </FadeDown>
  );
}
