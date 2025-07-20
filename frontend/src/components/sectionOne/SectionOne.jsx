import React, { forwardRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Github, Instagram, Linkedin, Twitter, Download } from "lucide-react";
import profileImage from "../../assets/profile-linkedin.jpg";
import { Typewriter } from "react-simple-typewriter";

const SectionOne = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [showRole, setShowRole] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    // Durasi intro
    const typeSpeedIntro = 70;
    const delaySpeedIntro = 1000;
    const totalIntro = props.intro.length * typeSpeedIntro + delaySpeedIntro;
    const timerIntro = setTimeout(() => setShowRole(true), totalIntro);
    return () => clearTimeout(timerIntro);
  }, [props.intro]);

  useEffect(() => {
    if (!showRole) return;
    // Durasi role
    const typeSpeedRole = 70;
    const delaySpeedRole = 1000;
    const totalRole = props.role.length * typeSpeedRole + delaySpeedRole;
    const timerRole = setTimeout(() => setShowSummary(true), totalRole);
    return () => clearTimeout(timerRole);
  }, [showRole, props.role]);

  return (
    <section
      ref={ref}
      className="w-screen min-h-screen pb-5 px-6 md:px-[50px] pt-[86px] flex flex-col md:flex-row items-center justify-between gap-10 "
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 text-white text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          <Typewriter
            words={[props.intro]}
            loop={1}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        {showRole && (
          <p className="text-lg mt-2 text-cyan-300 font-medium">
            <Typewriter
              words={[props.role]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        )}
        {showSummary && (
          <p className="whitespace-pre-line mt-4 text-sky-100 max-w-full mx-auto md:mx-0 md:text-justify">
            <Typewriter
              words={[props.summary]}
              loop={1}
              typeSpeed={25}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        )}

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
            href={`${
              import.meta.env.BASE_URL
            }/Curriculum-Vitae-Muhammad-Afan-Aljafar.pdf`}
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
            <p className="font-bold text-white">
              {props.programmingExperience}
            </p>
            <p className="text-cyan-200">Programming Experience</p>
          </div>
          <div>
            <p className="font-bold text-white">{props.mainLang}</p>
            <p className="text-cyan-200">Main Language</p>
          </div>
          <div>
            <p className="font-bold text-white">{props.totalProjects}</p>
            <p className="text-cyan-200">Total Projects</p>
          </div>
          <div>
            <p className="font-bold text-white">{props.gpa}</p>
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
