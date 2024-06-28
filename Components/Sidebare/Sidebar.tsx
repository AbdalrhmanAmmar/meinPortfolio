import Image from "next/image";
import React from "react";
import myPic from "./../../Images/picture.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaBlackTie } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ThemeSwitch from "./theme/ThemeSwitch";

function Sidebar() {
  return (
    <div className="dark:bg-blue-500">
      <Image
        className="w-32 h-32 rounded-full inline"
        src={myPic}
        alt="Abdelrhman Ammar"
      />
      <h1 className="my-4 text-3xl font-medium tracking-wider">
        <span className="font-Playwrite">Abdelrhman</span> Ammar
      </h1>
      <p className="px-2 py-1 my-3 rounded-full bg-foreground">
        Frontend developer
      </p>
      <a
        className="px-2 py-1 my-3 bg-foreground rounded-full flex flex-row justify-center items-center gap-2"
        href=""
        download="name"
      >
        <FaBlackTie className="w-6 h-6 cursor-pointer" />
        Download Resume
      </a>
      <div className="flex justify-around my-5 text-baseColor ">
        <a href="">
          <FaGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <FaLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <SiLeetcode className="w-8 h-8" />
        </a>
      </div>
      <div>
        {/* address */}
        <div
          className="my-5 py-4 bg-foreground space-y-2  "
          style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        >
          <div className="flex items-center justify-center space-x-4 font-bold">
            <FaLocationDot className="w-6 h-6" />
            <span>Cairo, Egypt</span>
          </div>

          <p>AbdelrhmanAmmarofficial@gmail.com</p>
          <p>+201026786173 / +201017404798</p>
        </div>
      </div>
      <button className="bg-gradient-to-r from-CustomeGreen to-CustomeBlue w-8/12 rounded-full py-2 px-1 text-white my-2 ">
        languages
      </button>
      <button className="bg-gradient-to-r from-CustomeGreen to-CustomeBlue w-8/12 rounded-full py-2 px-1 text-white my-2">
        Email Me
      </button>
      <button className="bg-gradient-to-r from-CustomeGreen to-CustomeBlue w-8/12 rounded-full py-2 px-1 text-white my-2">
        <ThemeSwitch />
      </button>
    </div>
  );
}

export default Sidebar;
