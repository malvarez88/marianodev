"use client";
import React, { useInsertionEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";
import GithubIcon from "@/assets/icons/GithubIcon";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
    gsap.to(container.current, {
      backgroundColor: "#FEF08A",
      duration: 1,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: container.current,
        start: "top 40%",
        end: "bottom bottom",
      },
    });
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
        start: "top 60%",
        end: "bottom bottom",
      },
    });
    gsap.to(btnRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: btnRef.current,
        start: "top 60%",
        end: "bottom bottom",
      },
    });
  }, []);

  return (
    <footer id="contact">
      <div
        className="bg-[#0C0404] px-8 lg:px-24 py-20 flex flex-col items-center relative"
        ref={container}
      >
        <h1
          className="title text-[44px] -tracking-[4px] leading-[36px] xl:text-[120px] text-center xl:leading-[90px] py-6"
          ref={titleRef}
        >
          Communication: the secret ingredient to every project/
        </h1>
        <p
          className="mt-10 text-xl xl:text-3xl text-center font-thin opacity-0 translate-x-40"
          ref={textRef}
        >
          I&apos;m currently available for freelance worldwide. Feel free to
          contact me if you want to collaborate on future projects or have a
          little chat.
        </p>
        <a
          href="mailto:marianoalvarez66@gmail.com"
          target="_blank"
          className="border border-[#0C0404] rounded-full px-20 py-6 mt-10 w-auto text-center hover:bg-[#0C0404] hover:border-yellow-200 hover:text-yellow-200 transform transition-all duration-500 hover:scale-110 opacity-0"
          ref={btnRef}
        >
          <p className="text-xl lg:text-4xl uppercase -tracking-[2px]">
            Let&apos;s connect!
          </p>
        </a>
        <div className="flex mt-10 items-center justify-between w-full flex-col md:flex-row">
          <a
            href="https://www.linkedin.com/in/malvarez88/"
            target="_blank"
            className="p-6 text-xl lg:text-2xl flex-col flex gap-2 items-center justify-center"
          >
            <LinkedinIcon />
            <span className="text-base lg:text-xl opacity-20">
              /in/malvarez88
            </span>
          </a>
          <a
            href="https://github.com/malvarez88"
            target="_blank"
            className="p-6 text-xl lg:text-2xl flex-col flex gap-2 items-center justify-center"
          >
            <GithubIcon />
            <span className="text-base lg:text-xl opacity-20">/malvarez88</span>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="opacity-20 absolute bottom-4">
          Mariano Alvarez 2024 - All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
