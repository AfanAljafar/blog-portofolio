import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { Github, Instagram, Linkedin, Twitter, Download } from "lucide-react";
// import ArrowDoubleDown from "../arrowDoubleDown/ArrowDoubleDown";
import profileImage from "../../assets/profile-linkedin.jpg";

const SectionOne = forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <section
      ref={ref}
      className="w-screen min-h-screen pb-5 px-6 md:px-[50px] pt-[86px] md:pt-0 flex flex-col md:flex-row items-center justify-between gap-10 "
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 text-white text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm Afan Aljafar 👋
        </h1>
        <p className="text-lg mt-2 text-cyan-300 font-medium">
          Junior Fullstack Developer
        </p>
        <p className="mt-4 text-sky-100 max-w-md mx-auto md:mx-0">
          I build modern, responsive web apps with clean UI and smooth UX
          blending design and code to create experiences that feel intuitive,
          fast, and delightful to use.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center md:justify-start gap-4 mt-4 text-cyan-300">
          <a
            href="https://github.com/AfanAljafar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github />
          </a>
          <a
            href="https://www.instagram.com/afanaljafar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadafanaljafar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="https://x.com/aljafarafan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Twitter />
          </a>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
          <button
            onClick={() => navigate("/?section=projects")}
            className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700 transition"
          >
            Explore My Project
          </button>
          <a
            href={`${process.env.PUBLIC_URL}/Curriculum-Vitae-Muhammad-Afan-Aljafar.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 py-2 px-4 rounded hover:bg-cyan-700 flex items-center gap-2 transition"
          >
            <Download size={16} />
            Download My CV
          </a>
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-sm text-center md:text-left">
          <div>
            <p className="font-bold text-white">less than 1 Years</p>
            <p className="text-cyan-200">Experience</p>
          </div>
          <div>
            <p className="font-bold text-white">JavaScript, Python</p>
            <p className="text-cyan-200">Main Language</p>
          </div>
          <div>
            <p className="font-bold text-white">10+ Projects</p>
            <p className="text-cyan-200">Total Projects</p>
          </div>
          <div>
            <p className="font-bold text-white">2.89 / 4.00</p>
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
        </div>
      </div>
    </section>
  );
});

SectionOne.displayName = "SectionOne";

export default SectionOne;
