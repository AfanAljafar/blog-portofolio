import React, { forwardRef } from "react";
import { logos } from "./dataSkill";

interface DiamondBoxProps {
  src: string;
  link: string;
  bgColor: string;
}

interface SectionFiveProps {
  id?: string;
}

// Komponen untuk kotak diamond
const DiamondBox: React.FC<DiamondBoxProps> = ({ src, link, bgColor }) => (
  <div
    className={`w-16 h-16 rotate-45 ${bgColor} border shadow-md flex items-center justify-center transition-transform hover:scale-105`}
  >
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={src}
        alt="logo"
        className="w-12 h-12 object-contain -rotate-45"
      />
    </a>
  </div>
);

// Komponen utama SectionFive
const SectionFive = forwardRef<HTMLElement, SectionFiveProps>((props, ref) => {
  const row1 = logos.slice(0, 10);
  const row2 = logos.slice(10, 21);
  const row3 = logos.slice(21, 31);
  const row4 = logos.slice(31, 42);

  return (
    <section
      id="skills"
      ref={ref}
      className="section-four w-screen min-h-screen pt-[72px] px-4 md:px-10 py-10 bg-transparent"
    >
      {/* title */}
      <div className="text-center mb-6">
        <h1 className="text-white text-4xl md:text-5xl font-bold">Skills.</h1>
      </div>

      {/* logo of skill platform container   */}
      <div className="bg-gray-100 py-12 px-4 rounded-xl shadow-inner w-full max-w-7xl mx-auto space-y-6">
        {[row1, row2, row3, row4].map((row, i) => (
          <div
            key={i}
            className={`flex flex-wrap justify-center gap-6 ${
              i % 2 !== 0 ? "md:-translate-x-4" : ""
            }`}
          >
            {row.map((item, index) => (
              <DiamondBox
                key={`${i}-${index}`}
                src={item.src}
                link={item.link}
                bgColor={item.bgColor}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
});

export default SectionFive;
