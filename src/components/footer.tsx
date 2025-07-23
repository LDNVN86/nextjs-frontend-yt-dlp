"use client";
import { FaGithub } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-4 py-6 ">
      <span className="text-sm text-gray-700 dark:text-gray-300">
        Cre: LDN (Seno Impotent) and yt-dlp
      </span>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="https://ldn86dev.io.vn/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center px-4 py-2 overflow-hidden font-medium  text-sm bg-transparent"
        >
          <span className="absolute inset-0 bg-black transition-transform transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 border-2 border-black bg-white group-hover:bg-black"></span>
          <span className="relative flex items-center gap-1 text-black group-hover:text-white">
            <RiProfileFill className="w-5 h-5" /> Profile
          </span>
        </a>
        <a
          href="https://github.com/LDNVN86/nestjs-yt-dlp"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center px-4 py-2 overflow-hidden font-medium  text-sm bg-transparent"
        >
          <span className="absolute inset-0 bg-black transition-transform transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 border-2 border-black bg-white group-hover:bg-black"></span>
          <span className="relative flex items-center gap-1 text-black group-hover:text-white">
            <FaGithub className="w-5 h-5" /> Source
          </span>
        </a>
      </div>
    </div>
  );
}
