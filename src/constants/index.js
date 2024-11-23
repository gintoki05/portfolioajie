export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Ajie was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Ajie’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Ajie. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Ajie was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Dashboard TI PSP - TI Dashboard Pusri",
    desc: "Dashboard TI PSP is a comprehensive IT management tool that visualizes key ITIL metrics. It provides real-time insights into system availability, capacity utilization, security status, storage usage, and other critical IT infrastructure elements, enabling efficient monitoring and decision-making.",
    subdesc: "",
    href: "#",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Shadcn UI",
        path: "/assets/shadcnui.svg",
      },
    ],
  },
  {
    title: "Mitra Faskes - Electronic Medical Record",
    desc: "Mitra Faskes is an electronic medical record (EMR) system designed to streamline the process of recording and managing patient health information. It offers a user-friendly interface for healthcare providers to input and organize medical data, while also providing patients with access to their own records.",
    subdesc:
      "With Mitra Faskes, healthcare providers can easily create and manage patient records, while patients can access their own records, making it a convenient and efficient solution for managing medical data.",
    href: "#",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Shadcn UI",
        path: "/assets/shadcnui.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -8, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "PT Pupuk Sriwidjaja Palembang",
    pos: "Fullstack Developer",
    duration: "2024 - Present",
    title:
      "As a Fullstack Developer at PT Pupuk Sriwidjaja Palembang, I develop and maintain comprehensive web applications, integrating frontend and backend technologies to create efficient and user-friendly solutions for the company's digital needs.",
    icon: "/assets/logo-pusri.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "PT Cermat Pratama Sejahtera",
    pos: "Web Developer",
    duration: "2022 - 2023",
    title:
      "Led development of internal applications such as an outsourcing management portal, acollaboration platform, and an e-ticketing system for ProLiga Bank Sumsel Babel 2023.",
    icon: "/assets/star.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "CV Musi Technical Solution",
    pos: "Software Developer",
    duration: "2020 - 2022",
    title:
      "Managed a team to develop applications for Palembang Aviation Polytechnic, includingan Academic Information System.",
    icon: "/assets/logomustechs.jpg",
    animation: "salute",
  },
  {
    id: 4,
    name: "Freelance",
    pos: "Freelance Programmer",
    duration: "2016 - Present",
    title:
      "I have been working as a freelance programmer for several years, specializing in web development and mobile app development. My expertise includes HTML, CSS, JavaScript, React, and Next.js, as well as experience with Figma and TailwindCSS.",
    icon: "/assets/star.png",
    animation: "salute",
  },
];
