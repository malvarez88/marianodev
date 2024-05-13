import ArrowIcon from "@/assets/icons/ArrowIcon";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <div className="px-4 pt-40 lg:px-20 h-screen flex flex-col justify-between">
        <div className="flex ">
          <p className="text-[50px] font-normal text-yellow sm:text-[80px]  sm:leading-[80px] md:text-[100px] md:leading-[100px] lg:text-[140px] lg:leading-[140px] 2xl:text-[180px] 2xl:leading-[160px]">
            Designing the future, one pixel at a time.{" "}
            <Image
              src={"/images/1profile.png"}
              className="inline-block hover:scale-110 transform transition-transform duration-300 hover:rotate-3"
              alt="profile"
              width={120}
              height={120}
            />
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between lg:flex-row relative bottom-10">
          <button className="flex transform items-center justify-center rounded-full border-4 border-yellow-200 px-8 py-4 text-yellow transition-all duration-300 hover:scale-110 hover:bg-yellow-200 hover:text-[#0C0404]">
            <span className="font-italic text-xl font-medium uppercase lg:text-4xl text-center flex items-center whitespace-nowrap">
              Let&apos;s connect!
              <ArrowIcon width={60} height={50} />
            </span>
          </button>
          <div className="mt-10 flex items-center justify-center lg:mt-0">
            <p className="max-w-lg font-thin uppercase text-[#0C0404] xl:text-2xl 2xl:text-3xl">
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
