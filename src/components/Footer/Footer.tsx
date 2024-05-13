import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-yellow-200 px-8 lg:px-24 py-20 flex flex-col items-center relative">
        <h1 className="text-4xl xl:text-[120px] text-center xl:leading-[90px]">
          Communication matters to start good things/
        </h1>
        <p className="mt-20 text-xl xl:text-3xl text-center font-thin">
          I&apos;m currently available for freelance worldwide. Feel free to
          contact me if you want to collaborate on future projects or have a
          little chat.
        </p>
        <button className="border border-[#0C0404] rounded-full px-20 py-6 mt-10 w-auto text-center hover:bg-[#0C0404] hover:border-yellow-200 hover:text-yellow-200 transform transition-all duration-500 hover:scale-110">
          <p className="text-xl lg:text-4xl uppercase">Let&apos;s connect!</p>
        </button>
        <div className="flex mt-10 items-center justify-between w-full ">
          <div className="lg:border-t border-[#0C0404] lg:border-l p-6 text-xl lg:text-2xl">
            <p>Linkedin</p>
            <span className="text-sm lg:text-lg opacity-20">
              www.linkedin.com
            </span>
          </div>
          <div className="lg:border-t border-[#0C0404] lg:border-l p-6 text-xl lg:text-2xl">
            <p>Github</p>
            <span className="text-sm lg:text-lg opacity-20">
              www.github.com
            </span>
          </div>
        </div>
        <span className="opacity-20 absolute bottom-4">
          Mariano Alvarez 2024 - All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
