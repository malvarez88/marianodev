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
const titles = [
  "Web Developer",
  "Graphic Designer",
  "Contemporary Philosopher??",
];

const Marqueee = () => {
  return (
    <div className="w-full overflow-hidden relative bg-[#0C0404] text-[#FDFCFA] py-8 flex flex-col gap-4 border-y border-yellow-200">
      <Marquee pauseOnHover autoFill>
        {technologies.map((tech, index) => (
          <div key={`tech_${index}`} className="p-2 cursor-pointer">
            <p className="text-4xl md:text-5xl flex items-center justify-center font-semibold uppercase md:-tracking-[4px]">
              {tech}{" "}
              <span className="w-4 h-4 inline-block bg-yellow-200 ml-6 rounded-full" />
            </p>
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover autoFill direction="right">
        {titles.map((title, index) => (
          <div key={`title_${index}`} className="p-2 cursor-pointer">
            <p className="text-4xl md:text-5xl flex items-center justify-center font-semibold md:-tracking-[4px]">
              {title}
              <span className="w-4 h-4 inline-block bg-yellow-200 ml-6 rounded-full" />
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marqueee;
