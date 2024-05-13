import React from "react";

const SubHero = () => {
  return (
    <section className="mt-20">
      <div className="lg:px-20 h-auto w-auto px-8 py-20 bg-black">
        <div className="max-w-5xl">
          <h3 className="relative text-[50px] text-white 2xl:text-[100px] 2xl:leading-[120px]">
            Transforming your digital dreams into reality.{" "}
            <span className="inline-block h-20 w-60 rounded-full bg-white"></span>
          </h3>
        </div>
        <div className="ml-auto flex max-w-4xl xl:-mt-24">
          <p className="text-xl font-thin leading-[40px] text-white lg:text-3xl pl-10">
            I&apos;m Mariano Alvarez, a Frontend Developer and UX/UI Designer
            with passion for creating exceptional online experiencies. With 2+
            years of experience.
            <br />
            I&apos;m Mariano Alvarez, a Frontend Developer and UX/UI Designer
            with passion for creating exceptional online experiencies. With 2+
            years of experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
