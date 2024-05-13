"use client";
import Link from "next/link";
import path from "path";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "@/assets/icons/Logo";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowIcon from "@/assets/icons/ArrowIcon";

gsap.registerPlugin(ScrollTrigger);

const menuLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/work",
    label: "Work",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const Menu: React.FC = () => {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<GSAPTimeline>();
  const navbar = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 120 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container },
  );

  useGSAP(() => {
    gsap.to(navbar.current, {
      y: -100,
      duration: 1,
      ease: "power4.inOut",
      scrollTrigger: {
        start: 2,
        end: 3,
        toggleActions: "play none none reverse",
      },
    });
  });

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <div ref={container} className="relative z-20">
      <div
        className="z-1 fixed left-0 top-0 flex w-screen items-center justify-between bg-white px-20 py-6"
        ref={navbar}
      >
        <div className="cursor-pointer">
          <Link href={"/"}>
            <Logo fill={"#c5fb45"} />
          </Link>
        </div>
        <div
          className="cursor-pointer text-4xl font-thin text-black"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </div>

      <div className="menu-overlay z-2 fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-between bg-yellow-200 px-20 py-6">
        <div className="flex w-full justify-between">
          <div className="">
            <Link href={"/"}>
              <Logo fill={"#101010"} />
            </Link>
          </div>
          <div
            className="cursor-pointer text-4xl font-thin"
            onClick={toggleMenu}
          >
            Close
          </div>
        </div>

        <div className="flex w-full flex-[3] items-center justify-center pt-8 md:w-auto md:flex-[5] md:justify-between">
          <div className="">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item max-w-max" key={index}>
                <div
                  className="menu-link-item-holder relative"
                  onClick={toggleMenu}
                >
                  <Link
                    href={link.path}
                    className="menu-link text-6xl font-semibold uppercase tracking-tighter md:text-9xl"
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mr-auto flex flex-col text-2xl">
          <a
            href={"https://www.linkedin.com/in/malvarez88/"}
            className="flex items-center gap-2 uppercase"
            target="_blank"
          >
            <span>Linkedin</span>
            <ArrowIcon />
          </a>
          <a
            href={"https://github.com/malvarez88"}
            className="flex items-center gap-2 uppercase"
            target="_blank"
          >
            <span>Github</span>
            <ArrowIcon />
          </a>
          <a
            href="mailto:marianoalvarez66@gmail.com"
            className="flex items-center gap-2"
            target="_blank"
          >
            <span>marianoalvarez66@gmail.com</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
