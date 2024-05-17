import { Work } from "@/Types";

const projects: Work[] = [
  {
    id: 1,
    slug: "dhn-desarrolldora",
    title: "DHN Desarrolladora",
    company: "DHN Construcciones SRL",
    img: "/images/dhn.png",
    description:
      "In this project I had to take the dhn construcciones page to a new world, updating the design & the logo. We started talking about what direction they wanted to take, what pages they found interesting and what image they wanted to show to their potential clients. When creating the logo, I took into account the main idea, taking the combination of work and ideas as a key. So it looks like two letters, we can see the third one between them.",
    technologies: ["typescript", "nextjs", "GSAP"],
    video: "LB65ilZuUaw",
  },
  {
    id: 2,
    slug: "hourlyrate-app",
    title: "HourlyRate App",
    company: "HourlyRate.ai",
    img: "/images/hourlyrateapp.png",
    description:
      "This application is designed to help freelancers find work. It is a centralized platform of several web pages, where depending on the user's specialty, the perfect jobs for their skills are shown. In my case, I served as a frontend lead, taking care of everything related to bringing the design to code.",
    technologies: ["nextjs", "tailwind", "mobx", "tremor", "flowbite"],
  },
  {
    id: 3,
    slug: "hourlyrate-website",
    title: "HourlyRate Website",
    company: "HourlyRate.ai",
    img: "/images/hourlyrate.png",
    description:
      "Landig page for the HourlyRate.ai application, in this case the idea was to present the functionality and how this application could benefit the user. We show the capability and benefits of using HourlyRate. My contribution was both to the development and when designing, using the latest in design and development techniques.",
    technologies: ["nextjs", "tailwind", "framer motion"],
    video: "sZDprKmB4tM",
  },
  {
    id: 4,
    slug: "daura-studio",
    title: "D'aura Studio",
    company: "D'aura Arquitectura",
    img: "/images/daura.png",
    description:
      "This Landing belongs to an architecture studio in Barcelona, I received the external design, which I had to improve and update depending on the client's needs, it has animations to make the page more attractive, it also has 3 languages, Spanish, English and Catalan. The animations are made with framer motion. I used Strapi as a backend, to facilitate the uploading of projects, news and architects.",
    technologies: ["React", "CSS", "framer motion", "strapi"],
    video: "iEwoVFcLg98",
  },
];

export { projects };
