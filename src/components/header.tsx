"use client";
import { ModeToggle } from "./ui/toggle-theme";
import Image from "next/image";
import Monica from "../../public/images/bantumlum1.jpg";
import TitleDynamic from "./ui/TypeAnimation";

const Header = () => {
  return (
    <header className=" p-4 flex flex-col">
      <nav className=" flex justify-end items-center-safe">
        <ModeToggle></ModeToggle>
      </nav>
      <div className="flex flex-col gap-5 justify-center-safe items-center-safe">
        <div className="border-2 border-cyan-400 border-dashed rounded-4xl">
          <Image
            className="rounded-4xl"
            src={Monica}
            alt="BanTumLum"
            width={100}
            height={100}
          ></Image>
        </div>
        <div className="flex flex-col justify-center-safe items-center-safe">
          <div className="select-none text-center mb-4 text-sm md:text-2xl font-[chinacat] mt-3 leading-none tracking-tight text-gray-900  dark:text-white">
            <TitleDynamic></TitleDynamic>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
