import React, { forwardRef } from "react";
import TelU from "../../assets/TelU.png";
import Telkom from "../../assets/Telkom.png";
import pupukKujang from "../../assets/pupukKujang.png";
import MKIR from "../../assets/MKIR.png";
import TSS from "../../assets/TSS.png";
import nodejs from "../../assets/nodejs.png";

const timelineData = [
  {
    year: "2016 - 2021",
    title: "Telkom University",
    icon: TelU,
    description: `School of Electrical Engineering
    (Electrical/Electronic Engineering),
    GPA 2.89/4.00`,
  },
  {
    year: "May- July, 2018",
    title: "Telkom Indonesia",
    icon: Telkom,
    description: `Civil Mechanical Electrical (CME) Maintenance
    Intern Staff`,
  },
  {
    year: "June - July, 2019",
    title: "PT Pupuk Kujang",
    icon: pupukKujang,
    description: `Instrument Maintenance Intern staff`,
  },
  {
    year: "June, 2021 - November, 2023",
    title: "PT Mulia Keramik Indah Raya",
    icon: MKIR,
    description: `Engineering & Maintenance Unit Head 
    'Glaze Application Section'`,
  },
  {
    year: "December, 2023 - April, 2025",
    title: "PT Tayoh Sarana Sukses",
    icon: TSS,
    description: `Sales Engineer 'Telecommunication'`,
  },
  {
    year: "April, 2025 - Becoming a Professional and beyond",
    title: "starting point as programmer",
    icon: nodejs,
    description: `My starting point is doing project full-stack development
      ( MERN / PERN )`,
  },
];

const SectionFour = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-w-screen min-h-screen pt-[72px] px-4 md:px-10"
    >
      <div className="text-center mb-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Experience.
        </h1>
      </div>

      {/* Timeline */}
      <div className="overflow-x-auto md:overflow-visible">
        <div className="flex md:grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center px-4">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative group w-[210px] md:w-[180px] h-[400px] bg-sky-900 text-white p-4 rounded-lg shadow-md flex-shrink-0 overflow-hidden"
            >
              {/* Header: Year & Title */}
              <div className="text-center mb-2">
                <div className="flex flex-col h-[80px] md:h-[100px] items-center justify-center mb-2">
                  <h3 className="text-l font-bold text-cyan-400">
                    {item.year}
                  </h3>
                </div>
                <div className="flex flex-col h-[25px] md:h-[35px] items-center justify-center">
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                </div>
              </div>

              {/* Logo */}
              <div className="flex flex-col h-[110px] md:h-[160px] items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] object-contain"
                />
              </div>

              {/* Deskripsi hover (desktop only) */}
              <div className="whitespace-pre-line text-center items-center justifiy-center font-bold hidden h-[230px] md:flex scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-sky-800 text-xs text-gray-100 p-3 rounded shadow-lg ring-1 ring-cyan-400/20 transition-all duration-500 ease-in-out">
                {item.description}
              </div>

              {/* Deskripsi default (mobile only) */}
              <div className="whitespace-pre-line h-[200px] overflow-hidden text-center items-center justifiy-center font-bold block md:hidden mt-2 bg-sky-800 text-xs text-gray-100 p-2 rounded">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

SectionFour.displayName = "SectionFour";
export default SectionFour;
