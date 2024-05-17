"use client";
import React from "react";
import { useParams } from "next/navigation";
import { projects } from "@/constants/Projects";
import Image from "next/image";
import Link from "next/link";

import YouTube from "react-youtube";

const Project: React.FC = () => {
  const { slug } = useParams();

  const project = projects.find((project) => {
    return project.slug === slug;
  });
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0C0404] pt-28 px-24 flex items-center justify-center flex-col gap-10">
        <h1 className="text-7xl text-[#FDFCFA] uppercase">Project not found</h1>
        <Link
          href={"/#work"}
          className="border border-yellow-200 px-4 py-2 rounded-full  flex gap-1 items-center justify-center hover:bg-yellow-200 hover:text-[#0C0404] transform transition-all duration-300 text-[#FDFCFA]"
        >
          <svg
            className="w-6 h-6 hover:text-[#0C0404]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="m17 16-4-4 4-4m-6 8-4-4 4-4"
            />
          </svg>
          <p className="font-thin uppercase">Go back</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0C0404] ">
      <div className="pt-28 p-4 md:p-20 md:pt-28 md:px-24 text-[#FDFCFA]">
        <div className="flex justify-between gap-10 flex-col xl:flex-row">
          <h1 className="text-[50px] lg:text-[140px] -tracking-[4px] lg:-tracking-[16px] leading-[40px] lg:leading-[120px]">
            {project.title}
          </h1>
          <div className="flex flex-col justify-between">
            <Link
              href={"/#work"}
              className="ml-auto border border-yellow-200 px-4 py-2 rounded-full  flex gap-1 items-center justify-center hover:bg-yellow-200 hover:text-[#0C0404] transform transition-all duration-300"
            >
              <svg
                className="w-6 h-6 hover:text-[#0C0404]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m17 16-4-4 4-4m-6 8-4-4 4-4"
                />
              </svg>
              <p className="font-thin uppercase">Go back </p>
            </Link>
            <p className="text-2xl whitespace-nowrap md:mt-auto mt-10">
              {project.company}
            </p>
          </div>
        </div>
        <div className="mt-10 px-2">
          <p className="text-xl md:text-5xl">{project.description}</p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
          <ul className="my-10 bg-yellow-200 rounded-full font-semibold px-6 md:px-8 py-2 md:py-4 text-black flex items-center justify-center">
            <p className="text-lg md:text-3xl uppercase inline-block">
              Technologies:
            </p>
            <div className="inline-block">
              {project?.technologies?.map((technology, index) => (
                <li
                  key={`tech${index}`}
                  className="text-base md:text-2xl uppercase inline-block mr-6 my-auto ml-8"
                >
                  {technology}
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div className="relative mt-10 w-full flex flex-col items-center justify-center">
          <p className="text-2xl font-bold mb-2">Images:</p>
          <Image
            alt={`project_${slug}`}
            src={project.img ? project.img : ""}
            className="object-cover rounded-lg mx-auto"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex items-center flex-col justify-center mt-20">
          <p className="text-2xl font-bold mb-2">Video:</p>
          {project.video && <Video id={project.video} />}
        </div>
      </div>
    </div>
  );
};

export default Project;

interface VideoProps {
  id: string;
}

const Video: React.FC<VideoProps> = ({ id }) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return <YouTube videoId={id} opts={opts} />;
};
