import React from "react";
import Image from "next/image";

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

const Projects = () => {
  return (
    <section className="my-10">
      <div className="min-h-screen w-full overflow-hidden px-8 py-10 lg:px-20">
        <p className="mb-10 text-7xl text-[#0C0404]">My latest works.</p>
        <div className="w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-between border-b  border-[#0C0404] py-8 lg:py-16"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <p className="text-xl text-[#0C0404] lg:text-6xl">
                  {project.title} -{" "}
                </p>{" "}
                <span className="text-xl lg:text-4xl">{project.company}</span>
              </div>
              <div>
                <p className="border-b border-[#0C0404] text-sm uppercase text-[#0C0404] lg:text-2xl">
                  Website Development
                </p>
              </div>
              <div className="absolute right-80 z-10  bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Image
                  src="/images/hourlyrate.png"
                  alt="Project Image"
                  className="h-full w-full object-contain"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 flex items-center gap-10">
          <p className="text-2xl uppercase text-[#0C0404] lg:text-4xl">
            Want to see more?{" "}
          </p>
          <span className="text-xl font-thin normal-case text-[#0C0404] opacity-80 lg:text-3xl">
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
