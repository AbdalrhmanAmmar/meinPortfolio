import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";

import { BsCircleFill } from "react-icons/bs";
import { Iproject, Service, Skill } from "@/interfaces";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Html & Css",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React ",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React Query",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap & Tailwindcss",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "postman",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "strapi",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "git & gtihub",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projectsdata: Iproject[] = [
  {
    name: " Tour and Travel",
    description:
      "Our website offers a range of personalized grooming services to help you look and feel your best. Our experienced barbers and stylists provide haircuts, beard trims, hot towel shaves, coloring, styling, and more. Book your appointment today and experience our expert services at competitive prices.",
    image_path: "/barber.png",
    deployed_url: "https://abdalrhmanammar.github.io/BarberShop/",
    github_url: "https://github.com/AbdalrhmanAmmar/BarberShop",
    category: ["ReactJs"],
    categoryuser: ["landing page"],
    key_techs: ["ReactJs", "Css"],
  },
  {
    name: "Barber Shop",
    description:
      "Our website offers a range of personalized grooming services to help you look and feel your best. Our experienced barbers and stylists provide haircuts, beard trims, hot towel shaves, coloring, styling, and more. Book your appointment today and experience our expert services at competitive prices.",
    image_path: "/barber.png",
    deployed_url: "https://abdalrhmanammar.github.io/BarberShop/",
    github_url: "https://github.com/AbdalrhmanAmmar/BarberShop",
    category: ["UI UX"],
    categoryuser: ["Ecommerce"],
    key_techs: ["Html", "Css", "Bootstrap", "Javascript", "Js Libraries"],
  },
  {
    name: "photography",
    description:
      "Discover a stunning collection of images on our website, featuring a wide variety of captivating themes and subjects for your viewing pleasure",
    image_path: "/barber.png",
    deployed_url: "https://abdalrhmanammar.github.io/photography/",
    github_url: "https://github.com/AbdalrhmanAmmar/photography/",
    category: ["UI UX"],
    categoryuser: ["landing page"],
    key_techs: ["Html", "Css", "Bootstrap", "Javascript"],
  },
  {
    name: "Coffee",
    description:
      " Our coffee website offers you the finest carefully-roasted coffee beans and unique coffee preparations that cater to all tastes. In addition, we offer some delicious light bites. Visit us now and enjoy a distinctive coffee experience.",
    image_path: "/barber.png",
    deployed_url: "https://abdalrhmanammar.github.io/coffee-website/",
    github_url: "https://github.com/AbdalrhmanAmmar/coffee-website",
    category: ["Nextjs"],
    categoryuser: ["landing page"],
    key_techs: ["Html", "Css", "Bootstrap", "Javascript"],
  },

  {
    name: "Landing Page",
    description:
      "Created a clean and modern landing page using HTML/CSS with a focus on user experience, responsiveness, and attention to detail.",
    image_path: "/barber.png",
    deployed_url: "https://abdalrhmanammar.github.io/coffee-website/",
    github_url: "https://github.com/AbdalrhmanAmmar/coffee-website",
    category: ["ReactJs"],
    categoryuser: ["Ecommerce"],
    key_techs: ["HTML", "CSS"],
  },
  {
    name: "Landing Page",
    description:
      "Created a clean and modern landing page using HTML/CSS with a focus on user experience, responsiveness, and attention to detail.",
    image_path: "/barber.png",
    deployed_url: "https://abdalrhmanammar.github.io/coffee-website/",
    github_url: "https://github.com/AbdalrhmanAmmar/coffee-website",
    category: ["ReactJs"],
    categoryuser: ["Ecommerce"],
    key_techs: ["HTML", "CSS"],
  },
  {
    name: "Landing Page",
    description:
      "Created a clean and modern landing page using HTML/CSS with a focus on user experience, responsiveness, and attention to detail.",
    image_path: "/barber.png",
    deployed_url: "https://abdalrhmanammar.github.io/coffee-website/",
    github_url: "https://github.com/AbdalrhmanAmmar/coffee-website",
    category: ["ReactJs"],
    categoryuser: ["Ecommerce"],
    key_techs: ["HTML", "CSS"],
  },
];
