import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-yellow-200 px-24 py-20 flex flex-col items-center relative">
        <h1 className="text-[120px] text-center leading-[90px]">
          Communication matters to start good things/
        </h1>
        <p className="mt-20 text-3xl text-center font-thin">
          I&apos;m currently available for freelance worldwide. Feel free to
          contact me if you want to collaborate on future projects or have a
          little chat.
        </p>
        <button className="border border-black rounded-full px-20 py-6 mt-10 w-auto text-center hover:bg-black hover:border-yellow-200 hover:text-yellow-200 transform transition-all duration-500 hover:scale-110">
          <p className="text-4xl uppercase">Let&apos;s connect!</p>
        </button>
        <div className="flex mt-10 items-center justify-between w-full text-2xl">
          <div className="border-t border-black border-l p-6">
            <p>Linkedin</p>
            <span className="text-lg opacity-20">www.linkedin.com</span>
          </div>
          <div className="border-t border-black border-r p-6">
            <p>Github</p>
            <span className="text-lg opacity-20">www.github.com</span>
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
