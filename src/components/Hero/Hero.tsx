"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowIcon from "@/assets/icons/ArrowIcon";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const btnRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(titleRef.current, {
      delay: 1,
      duration: 1.25,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    });
    tl.to(imgRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power4.inOut",
    });
    tl.to(btnRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    });
    tl.to(textRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    });
  });

  return (
    <section className="relative">
      <div className="px-4 pt-40 lg:px-20 h-screen flex flex-col justify-between">
        <div className="flex ">
          <p
            className="text-[50px] font-normal text-yellow sm:text-[80px]  sm:leading-[80px] md:text-[100px] md:leading-[100px] lg:text-[140px] lg:leading-[140px] 2xl:text-[180px] 2xl:leading-[160px] title"
            ref={titleRef}
          >
            Designing the future, one pixel at a time.{" "}
            <Image
              src={"/images/1profile.png"}
              className="inline-block hover:scale-110 transform transition-transform duration-300 hover:rotate-3 opacity-0"
              alt="profile"
              width={120}
              height={120}
              ref={imgRef}
            />
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between lg:flex-row relative bottom-10">
          <a
            href="mailto:marianoalvarez66@gmail.com"
            target="_blank"
            className="flex transform items-center justify-center rounded-full border-4 border-yellow-200 px-8 py-4 text-yellow transition-all duration-300 hover:bg-yellow-200 hover:text-[#0C0404] -translate-x-40 opacity-0 will-change-transform"
            ref={btnRef}
          >
            <span className="font-italic text-xl font-medium uppercase lg:text-4xl text-center flex items-center whitespace-nowrap">
              Let&apos;s connect!
              <ArrowIcon width={60} height={50} />
            </span>
          </a>
          <div
            className="mt-10 flex items-center justify-center lg:mt-0 opacity-0 translate-x-40"
            ref={textRef}
          >
            <p className="max-w-lg font-thin uppercase text-[#0C0404] xl:text-2xl 2xl:text-3xl ">
              Crafting digital products such as website & mobile apps
              development & design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
