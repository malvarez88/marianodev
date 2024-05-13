import React from "react";

const SubHero = () => {
  return (
    <section className="mt-20">
      <div className="2xl:px-32 xl:px-28 lg:px-20 h-auto w-auto px-4 py-20 bg-[#0C0404]">
        <div className="max-w-5xl">
          <h3 className="relative text-[50px] leading-[50px] text-[#FDFCFA] 2xl:text-[100px] 2xl:leading-[120px]">
            Transforming your digital dreams into reality.{" "}
            <span className="inline-block h-20 w-60 rounded-full bg-[#FDFCFA] mt-4 lg:mt-0"></span>
          </h3>
        </div>
        <div className="ml-auto flex max-w-5xl 2xl:-mt-28">
          <p className="text-xl font-thin leading-[40px] text-[#FDFCFA] lg:text-3xl 2xl:ml-52">
            I&apos;m Mariano Alvarez, a Frontend Developer and UX/UI Designer
            with passion for creating exceptional online experiencies. With 2+
            years of experience. I blend creativity with technical expertise to
            bring digital visions to life. Committed to staying updated with the
            latest trends and technologies, I thrive on tackling new challenges
            and pushing the boundaries of what&apos;s possible in the digital
            realm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
