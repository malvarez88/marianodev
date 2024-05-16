// "use client";

// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import MoonIcon from "@/assets/icons/MoonIcon";
// import SunIcon from "@/assets/icons/SunIcon";

// export default function ThemeSwitch() {
//   const [mounted, setMounted] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();

//   useEffect(() => setMounted(true), []);

//   if (!mounted)
//     return (
//       <Image
//         src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
//         width={36}
//         height={36}
//         sizes="36x36"
//         alt="Loading Light/Dark Toggle"
//         priority={false}
//         title="Loading Light/Dark Toggle"
//       />
//     );

//   if (resolvedTheme === "dark") {
//     return <SunIcon onClick={() => setTheme("light")} />;
//   }

//   if (resolvedTheme === "light") {
//     return <MoonIcon onClick={() => setTheme("dark")} />;
//   }
// }
"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { gsap } from "gsap";
import Image from "next/image";
import MoonIcon from "@/assets/icons/MoonIcon";
import SunIcon from "@/assets/icons/SunIcon";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const sunRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const sunIcon = sunRef.current;
    const moonIcon = moonRef.current;

    if (sunIcon && moonIcon) {
      if (resolvedTheme === "dark") {
        gsap.fromTo(
          moonIcon,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.5 },
        );
        gsap.to(sunIcon, { opacity: 0, x: -30, duration: 0.5 });
      } else {
        gsap.fromTo(
          sunIcon,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.5 },
        );
        gsap.to(moonIcon, { opacity: 0, x: 30, duration: 0.5 });
      }
    }
  }, [resolvedTheme, mounted]);

  const handleClick = () => {
    const isDark = resolvedTheme === "dark";
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  return (
    <div className="flex gap-2 border border-yellow-200 px-4 py-2 rounded-full">
      <SunIcon
        // ref={sunRef}
        onClick={handleClick}
        className={`cursor-pointer ${resolvedTheme === "dark" ? "hidden" : "block"}`}
      />
      <MoonIcon
        // ref={moonRef}
        onClick={handleClick}
        className={`cursor-pointer ${resolvedTheme === "light" ? "hidden" : "block"}`}
      />
    </div>
  );
}
