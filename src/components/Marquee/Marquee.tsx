import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const marqueeRef = useRef<any | null>(null);
  const contentRef = useRef<any | null>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const contentElement = contentRef.current;

    gsap.to(contentElement, {
      x: () => -(contentElement.offsetWidth - window.innerWidth),
      duration: 10,
      repeat: -1,
      ease: "none",
      scrollTrigger: {
        trigger: marqueeElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="w-full overflow-hidden relative h-80">
      <div
        className="marquee absolute top-0 left-0 whitespace-nowrap"
        ref={marqueeRef}
      >
        <div className="marquee-content inline-block" ref={contentRef}>
          {/* Add your marquee content here */}
          <span className="inline-block">Marquee content goes here</span>
          <span className="inline-block">Marquee content goes here</span>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
