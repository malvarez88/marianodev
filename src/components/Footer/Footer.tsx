"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.to(titleRef.current, {
      duration: 1.25,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    gsap.to(textRef.current, {
      translateX: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 50%",
        end: "bottom bottom",
      },
    });
  }, []);

  return (
    <footer>
      <div className="bg-yellow-200 px-8 lg:px-24 py-20 flex flex-col items-center relative">
        <h1
          className="title text-[44px] -tracking-[4px] leading-[36px] xl:text-[120px] text-center xl:leading-[90px] py-6"
          ref={titleRef}
        >
          Communication matters to start good things/
        </h1>
        <p
          className="mt-20 text-xl xl:text-3xl text-center font-thin opacity-0 translate-x-40"
          ref={textRef}
        >
          I&apos;m currently available for freelance worldwide. Feel free to
          contact me if you want to collaborate on future projects or have a
          little chat.
        </p>
        <button className="border border-[#0C0404] rounded-full px-20 py-6 mt-10 w-auto text-center hover:bg-[#0C0404] hover:border-yellow-200 hover:text-yellow-200 transform transition-all duration-500 hover:scale-110">
          <p className="text-xl lg:text-4xl uppercase -tracking-[2px]">
            Let&apos;s connect!
          </p>
        </button>
        <div className="flex mt-10 items-center justify-between w-full flex-col md:flex-row">
          <a
            href="/"
            target="_blank"
            className="lg:border-t border-[#0C0404] lg:border-l p-6 text-xl lg:text-2xl"
          >
            <p>Linkedin</p>
            <span className="text-sm lg:text-lg opacity-20">
              www.linkedin.com
            </span>
          </a>
          <a
            href="/"
            target="_blank"
            className="lg:border-t border-[#0C0404] lg:border-l p-6 text-xl lg:text-2xl"
          >
            <p>Github</p>
            <span className="text-sm lg:text-lg opacity-20">
              www.github.com
            </span>
          </a>
        </div>
      </div>{" "}
      <div className="flex items-center justify-center">
        <span className="opacity-20 absolute bottom-4">
          Mariano Alvarez 2024 - All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
