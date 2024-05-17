import MoonIcon from "@/assets/icons/MoonIcon";
import SunIcon from "@/assets/icons/SunIcon";
import React from "react";
import Marquee from "react-fast-marquee";

const technologies = [
  "React",
  "Next",
  "Javascript",
  "GSAP",
  "Typescript",
  "Figma",
  "Git",
  "Framer-Motion",
];
const titles = ["Web Developer"];

//TODO: Move sgv to components

const Marqueee = () => {
  return (
    <div className="w-full overflow-hidden relative bg-[#0C0404] text-[#FDFCFA] py-20 flex flex-col gap-8">
      <Marquee pauseOnHover autoFill>
        {technologies.map((tech, index) => (
          <div
            key={`tech_${index}`}
            className="p-2 cursor-pointer flex items-center justify-center gap-5 opacity-80"
          >
            <p className="text-4xl md:text-5xl flex items-center justify-center font-ligths uppercase md:-tracking-[4px]">
              {tech}{" "}
            </p>
            <SunIcon />
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover autoFill direction="right">
        {titles.map((title, index) => (
          <div
            key={`title_${index}`}
            className="p-2 cursor-pointer flex gap-5 items-center justify-center opacity-80"
          >
            <p className="text-4xl md:text-5xl flex items-center justify-center font-light md:-tracking-[4px]">
              {title}
            </p>
            <MoonIcon />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marqueee;
