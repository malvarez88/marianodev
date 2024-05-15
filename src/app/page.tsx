"use client";
import { useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import Projects from "@/components/Projects/Projects";
import SubHero from "@/components/SubHero/SubHero";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="relative bg-[#FDFCFA] overflow-hidden">
      <Hero />
      <SubHero />
      <Marquee />
      <Projects />
      <Footer />
    </div>
  );
}
