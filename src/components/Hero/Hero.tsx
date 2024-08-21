"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowIcon from "@/assets/icons/ArrowIcon";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const container = useRef(null);
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const btnRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef<any | null>(null);
  const scrollRef = useRef<any | null>(null);
  const ctaRef = useRef(null);

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
    tl.to(arrowRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power4.inOut",
    });
    tl.to(ctaRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power4.out",
    });
    // tl.to(btnRef.current, {
    //   opacity: 1,
    //   duration: 0.5,
    //   ease: "power4.out",
    // });
    // tl.to(textRef.current, {
    //   opacity: 1,
    //   duration: 0.5,
    //   ease: "power4.out",
    // });
  });

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(titleRef.current, {
      translateY: -200,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "40% 40%",
        end: "bottom top",
        scrub: true,
      },
    });
    // tl.to(
    //   arrowRef.current,
    //   {
    //     y: -200,
    //     ease: "power4.out",
    //     scrollTrigger: {
    //       trigger: container.current,
    //       start: "40% 40%",
    //       end: "bottom top",
    //       scrub: true,
    //     },
    //   },
    //   0,
    // );
    tl.to(
      ctaRef.current,
      {
        y: -200,
        ease: "power4.out",
        delay: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "40% 40%",
          end: "bottom top",
          scrub: true,
        },
      },
      0.5,
    );
  });

  useEffect(() => {
    const arrow = arrowRef.current;
    const scroll = scrollRef.current;

    const handleMouseEnter = () => {
      gsap.to(arrow, {
        translateY: "2rem",
        rotation: 135,
        borderRadius: "100%",
        duration: 0.5,
        ease: "bounce.out",
      });
      gsap.to(scroll, {
        translateY: "32px",
        opacity: 1,
        delay: 0.5,
        ease: "bounce.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(arrow, {
        translateY: "0",
        rotation: 0,
        borderRadius: 0,
        duration: 0.5,
        ease: "bounce.out",
      });
      gsap.to(scroll, {
        translateY: "-32px",
        opacity: 0,
        delay: 0.7,
        ease: "bounce.out",
      });
    };

    arrow?.addEventListener("mouseenter", handleMouseEnter);
    arrow?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      arrow?.removeEventListener("mouseenter", handleMouseEnter);
      arrow?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative h-[90vh]" id="/">
      <div
        className="flex h-full flex-col justify-around gap-6 bg-[#0C0404] px-4 pt-28 md:justify-between lg:px-24 2xl:pt-28"
        ref={container}
      >
        <div className="mt-10 flex lg:mt-20">
          <h1
            className="text-yellow title opacity-1 text-[60px] font-medium leading-[58px] -tracking-[3px] text-[#FDFCFA] sm:text-[75px] sm:leading-[75px] md:text-[95px] md:leading-[95px] lg:text-[135px] lg:leading-[135px] lg:-tracking-[11px] 2xl:text-[160px] 2xl:leading-[160px]"
            ref={titleRef}
          >
            {/* Designing the
            <br /> future, one pixel at a time/ */}
            Creating digital experiences/
            <Image
              src={"/images/1profile.png"}
              className="relative transform pl-2 pt-10 opacity-0 transition-transform duration-300 hover:rotate-3 hover:scale-110 md:inline-block md:pl-0 md:pt-0"
              alt="profile"
              width={120}
              height={120}
              ref={imgRef}
            />
          </h1>
        </div>
        {/* <div className="relative hidden flex-col items-center justify-center md:flex">
          <div
            className="absolute bottom-[1.6rem] left-[15rem] z-10 transform cursor-pointer bg-yellow-200 p-2 opacity-0 transition-transform duration-300 hover:rotate-[135deg] md:absolute md:bottom-0 md:left-0"
            ref={arrowRef}
          >
            <ArrowIcon />
          </div>
          <p
            className="relative left-0 z-10 mt-2 hidden -translate-y-8 text-2xl font-thin uppercase tracking-tighter text-[#0C0404] opacity-0 md:flex"
            ref={scrollRef}
          >
            scroll
          </p>
        </div> */}
        {/* <div
          className="flex flex-col items-center justify-between lg:flex-row lg:relative lg:bottom-20 opacity-0"
          ref={ctaRef}
        >
          <a
            href="mailto:marianoalvarez66@gmail.com"
            target="_blank"
            className="flex transform items-center justify-center rounded-full border-2 border-yellow-200 px-8 py-4 text-yellow transition-all duration-300 hover:bg-yellow-200 hover:text-[#0C0404] hover:scale-110"
            ref={btnRef}
          >
            <span className="text-xl uppercase lg:text-4xl text-center flex items-center whitespace-nowrap -tracking-[2px] text-[#FDFCFA] font-semibold">
              Let&apos;s connect!
              <ArrowIcon width={60} height={50} fill={"#FDFCFA"} />
            </span>
          </a>
          <div
            className="mt-10 flex items-center justify-center lg:mt-0"
            ref={textRef}
          >
            <p className="max-w-lg pb-6 lg:pb-0 font-light tracking-tighter uppercase lg:-tracking-[2px] text-lg xl:text-2xl 2xl:text-3xl text-[#FDFCFA]">
              Crafting digital products such as website & mobile apps
              development & design.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
