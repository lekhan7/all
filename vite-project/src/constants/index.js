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
  unifiedi,
  hackthon,
  nullclass,
  carrent,
  jobit,
  Screenshot,
  tripguide,
  threejs,
  Screenshot2,
    Screenshot3,
     Screenshot4,
      Screenshot5,
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
    title: "Vite- React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Nextjs Developer",
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

  
];

const experiences = [
  {
    title: "Intern",
    company_name: "Unified Mentores",
    icon: unifiedi,
    iconBg: "#383E56",
    date: "January 2025 - June 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Hackthons",
    company_name: "Hackthon",
    icon: hackthon,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Till Date  ",
    points: [
      "Developing  web applications in 24 or 48 hours using React.js and other related technologies.",
    "Presenting Your application to judegs ",
    "Meating Ppeople with same mentality ", 
    ],
  },
  {
    title: "Intern",
    company_name: "NullClass",
    icon: nullclass,
    iconBg: "#383E56",
    date: "Jan 2025 - Jun 2025",
    points: [
      "Developing and maintaining Redbus application using React.js and other related technologies.",
         ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but React js  proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients'Haaa just kidding😁",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Nodejs  optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sporlod",
    description:
      "Web-based platform that allows users  search the sports event s in near there locations and add sports events for the event managers ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Screenshot3,
    source_code_link: "https://github.com/lekhan7/all",
  },
  {
    name: "BBI",
    description:
      "Web application that enables users  see business ideas and helps investers to invest and it also provedies business advisores to post there reqirements and bankers to get banking helps ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
{
        name: "firebase",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Screenshot5,
    source_code_link: "https://github.com/lekhan7/all",
  },

{
    name: "College Event ",
    description:
      "Web application that enables College studentes to appli for the college events   ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
{
        name: "firebase",
        color: "white-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: Screenshot,
    source_code_link: "https://github.com/lekhan7/all",
  },
  {
    name: "Doc keeper  ",
    description:
      "Web application that enables people to secure their gov documenyts in the easy way and use to sare upload any where    ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
{
        name: "firebase",
        color: "white-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: Screenshot2,
    source_code_link: "https://github.com/lekhan7/all",
  },
  {
    name: "care  Guide",
    description:
      "A web app enable students to find best college and aso helps the colleges to select well knowldege students  by a apptitude test and the pervious grade marks ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Screenshot4,
    source_code_link: "https://github.com/lekhan7/all",
  },
];

export { services, technologies, experiences, testimonials, projects };
