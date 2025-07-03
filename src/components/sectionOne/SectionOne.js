import React, { forwardRef } from "react";
import { Github, Instagram, Linkedin, Twitter, Download } from "lucide-react";
// import ArrowDoubleDown from "../arrowDoubleDown/ArrowDoubleDown";
import profileImage from "../../assets/profile-linkedin.jpg";

const SectionOne = forwardRef(({ onScrollTo3 }, ref) => {
  return (
    <section
      ref={ref}
      className="w-screen min-h-screen pb-5 px-6 md:px-[50px] pt-[70px] md:pt-0 flex flex-col md:flex-row items-center justify-between gap-10 "
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 text-white text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm Afan Aljafar 👋
        </h1>
        <p className="text-lg mt-2 text-cyan-300 font-medium">
          Fullstack Developer
        </p>
        <p className="mt-4 text-sky-100 max-w-md mx-auto md:mx-0">
          I build modern, responsive web apps with clean UI and smooth UX
          blending design and code to create experiences that feel intuitive,
          fast, and delightful to use.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center md:justify-start gap-4 mt-4 text-cyan-300">
          <Github />
          <Instagram />
          <Linkedin />
          <Twitter />
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
          <button
            onClick={onScrollTo3}
            className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700 transition"
          >
            Explore My Project
          </button>
          <button className="border border-cyan-400 text-cyan-400 py-2 px-4 rounded hover:bg-cyan-700 flex items-center gap-2 transition">
            <Download size={16} />
            Download My CV
          </button>
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-sm text-center md:text-left">
          <div>
            <p className="font-bold text-white">2+ Years</p>
            <p className="text-cyan-200">Experience</p>
          </div>
          <div>
            <p className="font-bold text-white">JavaScript</p>
            <p className="text-cyan-200">Main Language</p>
          </div>
          <div>
            <p className="font-bold text-white">10+ Projects</p>
            <p className="text-cyan-200">Total Projects</p>
          </div>
          <div>
            <p className="font-bold text-white">3.55 / 4.00</p>
            <p className="text-cyan-200">GPA</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE & ICONS */}
      <div className="relative flex-1 flex justify-center items-center">
        <div className="relative w-[250px] h-[250px]">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-full h-full object-cover shadow-lg"
          />
          {/* ICONS AROUND */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="bg-cyan-300 text-sky-950 p-2 rounded-full shadow-md">
              💻
            </div>
          </div>
          <div className="absolute top-1/2 -left-4 -translate-y-1/2">
            <div className="bg-cyan-300 text-sky-950 p-2 rounded-full shadow-md">
              ⚛️
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div className="bg-cyan-300 text-sky-950 p-2 rounded-full shadow-md">
              🛠️
            </div>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2">
            <div className="bg-cyan-300 text-sky-950 p-2 rounded-full shadow-md">
              💾
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

SectionOne.displayName = "SectionOne";

export default SectionOne;
