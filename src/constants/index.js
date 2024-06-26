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
    xidian,
    ai,
    country,
    cowboy,
    fighter,
    mars,
    moon,
    robot,
    urbana,
    interview,
    yutong,
    chenxu,
    puyu
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "education",
        title: "Education",
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
        title: "Trading Execution",
        icon: web,
    },
    {
        title: "System Engineering",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "CPU/GPU Architecture",
        icon: creator,
    },
];

const avatars = [
    {
        title: "Me in Urbana",
        icon: urbana,
    },
    {
        title: "Dressed in Cowboy",
        icon: cowboy,
    },
    {
        title: "Attend an interview",
        icon: interview,
    },
    {
        title: "Walk in town",
        icon: country,
    },
    {
        title: "Settle in Moon",
        icon: moon,
    },
    {
        title: "Go to Mars",
        icon: mars,
    },
    {
        title: "Integrate with AI",
        icon: ai,
    },
    {
        title: "Ultimate Human",
        icon: fighter,
    },

]
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
        company_name: "CME Group, Trade Execution System",
        icon: cme,
        iconBg: "#34568B",
        date: "May 2024 - Aug 2024",
        points: [
            "Incoming intern: Open Telemetry API Implementation for High Frequency Trading Applications"
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "CME Group Innovation Center, Architecture and Product Management",
        icon: cme,
        iconBg: "#34568B",
        date: "May 2023 - Aug 2023",
        points: [
            "Designed a high volatility trading algorithm that detected spikes and trend breakers with 95% accuracy.",
            "Developed a configurable middleware using Kafka and Pub/Sub to seamlessly transfer messages between systems and standardize information sharing across platforms, leading to a 40% increase in data transferring.",
            "Created a reliable and efficient JSON Schema 7 Bundler to recursively combine multiple schemas and present options to store documents and serialized objects, improving the validation process by 17%."
        ],
    },
    {
        title: "Course Assistant",
        company_name: "University of Illinois, CS Department",
        icon: uiuc,
        iconBg: "#34568B",
        date: "Jan 2023 - May 2023",
        points: [
            "Designed homework assignments and used MySQL to write queries to check and evaluate students’ answers.",
            "Conducted weekly office hours to assist students one-on-one and provide guidance to debug their code effectively.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Zhejiang Uniview Technologies , Java Backend Team",
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

const educations = [
    {
        degree: "Master in Computer Science",
        university_name: "Universty of Illinois at Urbana Champaign",
        icon: uiuc,
        iconBg: "#34568B",
        date: "Graduating May 2025",
        honors: "",
        gpa: "4.0",
        courses: "Applied Parallel Programming, Computer Organization Design, High Frequency Trading Tech..."
    },
    {
        degree: "B.S. in Computer Science and Mathematics",
        university_name: "Universty of Illinois at Urbana Champaign",
        icon: uiuc,
        iconBg: "#34568B",
        date: "Graduated May 2023",
        honors: "Dean's List (top 10%)",
        gpa: "3.80",
        courses: "Algorithms, Numerical Analysis, System Programming, Web Programming, Database Systems, Real Analysis, Applied Complex Variables, Introduction to Combinatorics..."
    },
    // {
    //   degree: "Computer Science (Transferred out)",
    //   university_name: "Xidian University",
    //   icon: xidian,
    //   iconBg: "#FFFFFF",
    //   date: "August 2019 - June 2021",
    //   honors: "First Prize Scholarship (top 5%)",
    //   gpa: "3.70",
    //   courses: "Data Structures, Computer Newtworking, Operating Systems, Computer Architecture, Java Programming, C Programming, Calculus, Linear Algebra, Probability Theorem..."
    // },

];

const testimonials = [
    {
        testimonial:
            "Jiayuan is a very professional software developer and developed many useful and interesting project that help UIUC students.",
        name: "Yutong Li",
        designation: "SDE",
        company: "Amazon",
        image: yutong,
    },
    {
        testimonial:
            "Jiayuan has a lot of experience in trading system and can provide a lot of useful information to help me understand the trading system better.",
        name: "Chenxu Liu",
        designation: "SDE",
        company: "Snowflake",
        image: chenxu
    },
    {
        testimonial:
            "Jiayuan is very passionate on what he is doing and can bring joy, happiness, and optimistic life to everyone.",
        name: "Puyu Yang",
        designation: "SDE",
        company: "John Deere",
        image: puyu
    },
];

const projects = [
    {
        name: "Cryptopulse",
        description:
            "Cryptocurrency backtesting software with support for all exchange rules, latency analysis, and a customizable fee structure.",
        tags: [
            {
                name: "C++",
                color: "blue-text-gradient",
            },
            {
                name: "HFT",
                color: "green-text-gradient",
            },
            {
                name: "Backtesting",
                color: "pink-text-gradient",
            },
        ],
        image: project2,
        source_code_link: "https://github.com/Einsgates/CryptoPulse-Cryptocurrency-Backtesting-Platform",
    },
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
        name: "Memory Allocator",
        description:
            "C-based memory allocation system with optimized management through linked lists and improved efficiency by refining the First-Fit allocation method.",
        tags: [
            {
                name: "C",
                color: "blue-text-gradient",
            },
            {
                name: "Memory",
                color: "green-text-gradient",
            },
            {
                name: "First-fit",
                color: "pink-text-gradient",
            },
        ],
        image: project3,
        source_code_link: "https://github.com/Einsgates/YourVideos",
    },
];

export { services, avatars, technologies, experiences, testimonials, projects, educations };