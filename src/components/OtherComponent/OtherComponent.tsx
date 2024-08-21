"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OtherComponent: React.FC = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      top: -100,
      fontSize: 200,
      color: "#fef08a",
      ease: "power4.Out",
      duration: 1,

      scrollTrigger: {
        trigger: ref.current,
        start: "top 60%",
        end: "bottom 40%",
        // scrub: 1,
        // markers: true,
      },
    });
    gsap.to(containerRef.current, {
      position: "fixed",
      top: 0,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "bottom 500vh",
        markers: true,
        scrub: 1,
        pin: true,
      },
    });
  });

  return (
    <div
      className="relative top-0 z-20 flex h-[10vh] items-center justify-center bg-yellow-200 will-change-transform"
      ref={containerRef}
    >
      {/* <div> */}
      <h1
        className="absolute text-3xl font-medium uppercase tracking-tighter text-[#0C0404]"
        ref={ref}
      >
        marianodev
      </h1>
      {/* </div> */}
    </div>
  );
};

export default OtherComponent;
