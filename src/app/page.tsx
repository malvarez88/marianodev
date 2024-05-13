import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import Projects from "@/components/Projects/Projects";
import SubHero from "@/components/SubHero/SubHero";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <SubHero />
      <Marquee />
      <Projects />
      <Footer />
    </div>
  );
}
