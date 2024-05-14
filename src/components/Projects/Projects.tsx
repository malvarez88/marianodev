"use client";
import React, { useRef, LegacyRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Work {
  title: string;
  company: string;
}

const projects: Work[] = [
  { title: "DHN Desarrolladora", company: "DHN Construcciones SRL" },
  { title: "HourlyRate App", company: "HourlyRate.ai" },
  { title: "HourlyRate Website", company: "HourlyRate.ai" },
  { title: "D'aura Studio", company: "D'aura Arquitectura" },
];

const Projects: React.FC = () => {
  const projectsRefs = useRef<any>([]);
  const lineRef = useRef<any | null>(null);

  const animateProject = (ref: HTMLDivElement | null) => {
    gsap.to(ref, {
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
      stagger: 1,
    });
  };

  useGSAP(() => {
    projectsRefs?.current?.forEach((projectRef: any) => {
      if (projectRef) {
        ScrollTrigger.create({
          trigger: projectRef,
          start: "top 90%",
          onEnter: () => animateProject(projectRef),
        });
      }
    });
  });

  useEffect(() => {
    const line = lineRef.current;
    const handleMouseEnter = () => {
      gsap.to(line, {
        rotate: "180deg",
        duration: 0.5,
        ease: "bounce.out",
      });
    };
    const handleMouseLeave = () => {
      gsap.to(line, {
        rotate: "0deg",
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
    <section className="py-10 bg-[#0C0404]">
      <div className="min-h-screen w-full overflow-hidden px-8 py-10 lg:px-20 ">
        <p className="mb-10 text-7xl -tracking-[6px] text-[#FDFCFA]">
          My latest works\{" "}
          <span
            className="h-2 w-32 bg-yellow-200 inline-block"
            ref={lineRef}
          ></span>
        </p>
        <div className="w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectsRefs.current[index] = el as any)}
              className="group relative flex items-start lg:items-center justify-between border-b flex-col lg:flex-row  border-[#FDFCFA] py-8 lg:py-16 opacity-0"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <p className="text-xl text-[#FDFCFA] md:text-4xl md:-tracking-[2px] lg:text-6xl lg:-tracking-[6px]">
                  {project.title} -{" "}
                </p>
                <span className="text-xl md:text-2xl lg:text-4xl -tracking-[2px] lg:-tracking-[4px] text-[#FDFCFA]">
                  {project.company}
                </span>
              </div>
              <div>
                <p className="border-b border-[#FDFCFA] text-sm uppercase text-[#FDFCFA] lg:text-2xl -tracking-[2px] mt-4 lg:mt-0">
                  Website Development
                </p>
              </div>
              <div className="absolute right-0 md:right-80 z-10  bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:block">
                <Image
                  src="/images/hourlyrate.png"
                  alt="Project Image"
                  className="h-full w-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 flex items-center gap-10 flex-col md:flex-row">
          <p className="text-2xl uppercase text-[#FDFCFA] lg:text-4xl">
            Want to see more?{" "}
          </p>
          <span className="text-xl font-thin normal-case text-[#FDFCFA] opacity-80 lg:text-3xl">
            Let&apos; talk at:{" "}
            <a href="mailto:marianoalvarez66@gmail.com" target="_blank">
              marianoalvarez66@gmail.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
