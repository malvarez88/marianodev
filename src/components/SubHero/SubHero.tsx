"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SubHero: React.FC = () => {
  const aboutRef = useRef(null);
  const digitalRef = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
    gsap.to(digitalRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    gsap.to(aboutRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        end: "bottom bottom",
      },
    });
  }, [container]);
  return (
    <section className="mt-20">
      <div
        className="2xl:px-32 xl:px-28 lg:px-20 h-auto w-auto px-4 py-20 bg-[#0C0404]"
        ref={container}
      >
        <div className="max-w-5xl">
          <h3
            className="relative text-[50px] leading-[50px] text-[#FDFCFA] 2xl:text-[100px] 2xl:leading-[120px] opacity-0 -translate-x-40 will-change-transform"
            ref={digitalRef}
          >
            Transforming your digital dreams into reality.{" "}
            <span className="inline-block h-10 xl:h-20 w-60 rounded-full bg-[#FDFCFA] mt-4 lg:mt-0"></span>
          </h3>
        </div>
        <div className="ml-auto flex max-w-5xl 2xl:-mt-28">
          <p
            className="text-xl font-thin leading-[40px] text-[#FDFCFA] lg:text-3xl 2xl:ml-52 opacity-0 translate-x-40 will-change-transform text-right"
            ref={aboutRef}
          >
            I&apos;m Mariano Alvarez, a Frontend Developer and UX/UI Designer
            with passion for creating exceptional online experiencies. I blend
            creativity with technical expertise to bring digital visions to
            life. Committed to staying updated with the latest trends and
            technologies, I thrive on tackling new challenges and pushing the
            boundaries of what&apos;s possible in the digital realm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
