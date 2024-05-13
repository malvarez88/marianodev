import ArrowIcon from "@/assets/icons/ArrowIcon";
import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className="px-8 pt-40 lg:px-20 h-screen flex flex-col justify-between">
        <div className="flex ">
          <p className="text-[50px] font-normal text-yellow 2xl:text-[180px] 2xl:leading-[160px]">
            Designing the future, one pixel at a time.{" "}
            <span className="inline-block h-32 w-32 rounded-full bg-yellow-200" />
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between lg:flex-row relative bottom-10">
          <button className="flex transform items-center justify-center rounded-full border-4 border-yellow-200 px-8 py-4 text-yellow transition-all duration-300 hover:scale-110 hover:bg-yellow-200 hover:text-black">
            <span className="font-italic text-xl font-medium uppercase lg:text-4xl text-center flex items-center">
              Let&apos;s connect!
              <ArrowIcon width={60} height={50} />
            </span>
          </button>
          <div className=" flex items-center justify-center lg:mt-0">
            <p className="max-w-lg font-thin uppercase text-yellow 2xl:text-3xl">
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
