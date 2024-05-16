"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

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
    <footer id="contactt">
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
            <svg
              className="w-8 h-8 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#0C0404"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
            <span className="text-base lg:text-xl opacity-20">
              /in/malvarez88
            </span>
          </a>
          <a
            href="https://github.com/malvarez88"
            target="_blank"
            className="p-6 text-xl lg:text-2xl flex-col flex gap-2 items-center justify-center"
          >
            <svg
              className="w-8 h-8 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#0C0404"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
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
