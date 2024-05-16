import React from "react";
import Marquee from "react-fast-marquee";

const technologies = [
  "React",
  "Next",
  "Javascript",
  "Typescript",
  "GSAP",
  "Figma",
];
const titles = ["Web Developer"];

const Marqueee = () => {
  return (
    <div className="w-full overflow-hidden relative bg-[#0C0404] text-[#FDFCFA] py-8 flex flex-col gap-4">
      <Marquee pauseOnHover autoFill>
        {technologies.map((tech, index) => (
          <div
            key={`tech_${index}`}
            className="p-2 cursor-pointer flex items-center"
          >
            <p className="text-4xl md:text-5xl flex items-center justify-center font-semibold uppercase md:-tracking-[4px] opacity-70">
              {tech}
            </p>
            <span className="w-4 h-4 inline-block bg-yellow-200 ml-6 rounded-full" />
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover autoFill direction="right">
        {titles.map((title, index) => (
          <div
            key={`title_${index}`}
            className="p-2 cursor-pointer flex items-center"
          >
            <p className="text-4xl md:text-5xl flex items-center justify-center font-semibold md:-tracking-[4px] opacity-70">
              {title}
            </p>
            <span className="w-4 h-4 inline-block bg-yellow-200 ml-6 rounded-full" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marqueee;
