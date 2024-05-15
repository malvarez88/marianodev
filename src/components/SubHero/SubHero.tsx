"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SubHero: React.FC = () => {
  const aboutRef = useRef(null);
  const digitalRef = useRef(null);
  const container = useRef(null);
  const lineRef = useRef<any | null>(null);

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

  useGSAP(() => {
    gsap.to(digitalRef.current, {
      x: -600,
      // ease: "power4.out",
      duration: 3,
      scrollTrigger: {
        trigger: container.current,
        start: "20% top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(aboutRef.current, {
      x: 600,
      // ease: "power4.out",
      duration: 3,
      scrollTrigger: {
        trigger: container.current,
        start: "20% top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  useEffect(() => {
    const line = lineRef.current;

    const handleMouseEnter = () => {
      gsap.to(line, {
        backgroundColor: "#fefcbf",

        duration: 0.5,
        ease: "bounce.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(line, {
        backgroundColor: "#FDFCFA",
        duration: 0.5,
        ease: "bounce.out",
      });
    };

    line?.addEventListener("mouseenter", handleMouseEnter);
    line?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      line?.removeEventListener("mouseenter", handleMouseEnter);
      line?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <section className="">
      <div
        className="xl:px-24 lg:px-20 h-auto w-auto px-4 pt-20 pb-32 bg-[#0C0404]"
        ref={container}
      >
        <div className="">
          <h3
            className="relative text-[50px] max-w-7xl leading-[50px] text-[#FDFCFA] xl:text-[100px] xl:leading-[80px] 2xl:text-[120px] 2xl:leading-[120px] xl:-tracking-[1px] 2xl:-tracking-[10px] opacity-0 will-change-transform lg:-tracking-[4px]"
            ref={digitalRef}
          >
            Transforming digital dreams into reality.{" "}
            <span
              className="inline-block mb-auto h-4 xl:h-4 w-60 bg-[#FDFCFA]"
              ref={lineRef}
            ></span>
          </h3>
        </div>
        <div className="ml-auto flex 2xl:-mt-34 justify-end mt-4">
          <p
            className="text-3xl font-thin w-full md:max-w-5xl leading-[30px] text-[#FDFCFA] lg:text-4xl 2xl:ml-52 opacity-0 will-change-transform lg:text-right"
            ref={aboutRef}
          >
            I&apos;m Mariano Alvarez, a Frontend Developer and Graphic Designer
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
