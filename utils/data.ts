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
    name: "Scale Your Marketing",
    description:
      "Our website offers a range of personalized grooming services to help you look and feel your best. Our experienced barbers and stylists provide haircuts, beard trims, hot towel shaves, coloring, styling, and more. Book your appointment today and experience our expert services at competitive prices.",
    image_path: "/Images/scaleurmarketing.JPG",
    deployed_url: "https://www.scale-your-marketing.com/",
    github_url: "",
    category: ["ReactJs"],
    categoryuser: ["landing page"],
    key_techs: ["Nextjs", "framer-motion", "nodemailer", "react-countup"],
  },
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
    name: "Transunity Agency",
    description:
      "Built a dynamic translation agency using Next.js and the Next.js theme, optimizing global communication through innovative technology..",
    image_path: "/Images/transunity.JPG",
    deployed_url: "https://transunityofficial.com/",
    github_url: "https://github.com/AbdalrhmanAmmar/Transunity",
    category: ["Nextjs"],
    categoryuser: ["Agency"],
    key_techs: ["Nextjs"],
  },
  {
    name: " Porfoltio",
    description:
      "Our website offers a range of personalized grooming services to help you look and feel your best. Our experienced barbers and stylists provide haircuts, beard trims, hot towel shaves, coloring, styling, and more. Book your appointment today and experience our expert services at competitive prices.",
    image_path: "/Images/portfolios.JPG",
    deployed_url: "https://trainning-one.vercel.app/",
    github_url: "https://github.com/AbdalrhmanAmmar/BarberShop",
    category: ["ReactJs"],
    categoryuser: ["landing page"],
    key_techs: ["ReactJs", "Css"],
  },
];
