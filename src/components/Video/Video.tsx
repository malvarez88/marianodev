// "use client";
// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const Video = () => {
//   useGSAP(() => {
//     gsap.fromTo(
//       ".video-svg-path",
//       { strokeDashoffset: 10685 },
//       {
//         strokeDashoffset: 0,
//         ease: "power1.inOut",
//         scrollTrigger: {
//           trigger: ".video-svg-path",
//           start: "top 30%",
//           end: "bottom 50%",
//           scrub: true,
//           markers: true,
//         },
//       },
//     );
//   }, []);

//   return (
//     <div className="video-container grid h-[1000px] overflow-hidden">
//       <video
//         muted
//         autoPlay
//         loop
//         className="h-[1000px] overflow-hidden object-contain"
//       >
//         <source src="/video.mp4" type="video/mp4" className="" />
//       </video>
//       <div className="mask h-[1000px] overflow-hidden bg-white mix-blend-lighten">
//         <svg
//           id="Layer_1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1281 526.29"
//         >
//           <path
//             className="video-svg-path overflow-hidden"
//             d="M495.8.5c213.96.29,313.71,2.69,313.79,6.9.16,8.47-403.28,16.59-403.45,34.48-.19,20.72,540.5,36.8,540.23,50.57-.33,16.44-770.67,7.47-771.26,27.59-.63,21.33,864.86,53.39,864.37,81.61-.51,29.45-943.58,30.16-943.68,48.28-.11,19.57,1099.98,32.67,1100,52.87.01,17.04-1153.87,18.18-1154.02,36.78-.16,18.95,1196.56,34.79,1196.55,60.92,0,26.57-1237.99,43.59-1237.83,57.47.17,14.11,1279.61,2.86,1280,22.99.18,9.1-261.28,23.66-845.62,44.83"
//             fill="#fff"
//             stroke="#000"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Video;

"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".video-svg-path",
      { strokeDashoffset: 10685 },
      {
        strokeDashoffset: 0,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".video-svg-path",
          start: "top 30%",
          end: "bottom 50%",
          scrub: true,
          // markers: true,
        },
      },
    );
  }, []);

  return (
    <div className="video-container relative w-full overflow-hidden">
      <video
        muted
        autoPlay
        loop
        className="absolute inset-0 w-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="mask  inset-0 bg-white mix-blend-lighten">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1281 526.29"
          className="h-full w-full"
        >
          <path
            className="video-svg-path"
            d="M495.8.5c213.96.29,313.71,2.69,313.79,6.9.16,8.47-403.28,16.59-403.45,34.48-.19,20.72,540.5,36.8,540.23,50.57-.33,16.44-770.67,7.47-771.26,27.59-.63,21.33,864.86,53.39,864.37,81.61-.51,29.45-943.58,30.16-943.68,48.28-.11,19.57,1099.98,32.67,1100,52.87.01,17.04-1153.87,18.18-1154.02,36.78-.16,18.95,1196.56,34.79,1196.55,60.92,0,26.57-1237.99,43.59-1237.83,57.47.17,14.11,1279.61,2.86,1280,22.99.18,9.1-261.28,23.66-845.62,44.83"
            fill="#fff"
            stroke="#000"
          />
        </svg>
      </div>
    </div>
  );
};

export default Video;
