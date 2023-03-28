import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  uiuc,
  starbucks,
  tesla,
  uniview,
  cme,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  project1,
  project2,
  project3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "CME Group",
    icon: cme,
    iconBg: "#34568B",
    date: "May 2023 - August 2023",
    points: [
      "Incoming Software Engineer Intern",
    ],
  },
  {
    title: "Course Assistant",
    company_name: "University of Illinois at Urbana Champaign",
    icon: uiuc,
    iconBg: "#34568B",
    date: "Jan 2023 - Now",
    points: [
      "Monitor student process: answer each student's question about their homework and machine problem (MP).",
      "Help design homework and MP and use Python Colab notebook.",
      "Assist student one-to-one debug their code and provide high-level suggestions.",
      "Use MySQL, MongoDB, and Neo4j to write queries to check students' answers.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Uniview",
    icon: uniview,
    iconBg: "#C3447A",
    date: "Jan 2021 - March 2021",
    points: [
      "Implemented Uniview Cloud Service to provide service for professional IP video surveillance devices and involved in the comprehensive application of Spring Boot, Eureka, Redis, Linux, and distributed systems.",
      "Solved the heartbeat mechanism problem, checked device functionality regularly, and automated asynchronous login tasks for offline devices in a poor network environment.",
      "Designed a suitable heartbeat packet in the application layer by starting a timer in the program, making the connection more stable and the system more robust.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jiayuan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jiayuan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Jiayuan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Apartment Rental",
    description:
      "Web-based platform that allows UIUC students to rent their favorite apartments according to their needs",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Einsgates/ApartmentRental",
  },
  {
    name: "Wechat",
    description:
      "Web application that enables customers to chat with each other as well as sell second-hand products.",
    tags: [
      {
        name: "Vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Einsgates/WechAt",
  },
  {
    name: "Your videos",
    description:
      "A comprehensive video application which users can upload videos and has functionality of like, comments, and share..",
    tags: [
      {
        name: "Sanity",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Einsgates/YourVideos",
  },
];

export { services, technologies, experiences, testimonials, projects };