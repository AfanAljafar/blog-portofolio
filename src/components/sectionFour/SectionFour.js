import React, { forwardRef } from "react";

const experiences = [
  {
    title: "Telkom Indonesia – Witel Karawang",
    location: "Intern CME Maintenance",
    year: "2018",
    color: "text-blue-500",
  },
  {
    title: "PT Pupuk Kujang Cikampek",
    location: "Intern Staff Instrument Maintenance",
    year: "2019",
    color: "text-red-500",
  },
  {
    title: "PT Mulia Keramik Indah Raya (Cikarang, Indonesia)",
    location: "Engineering & Maintenance Unit Head",
    year: "2021–2023",
  },
  {
    title: "PT Tayoh Sarana Sukses (Bekasi, Indonesia)",
    location: "Sales Engineer – Telecommunication",
    year: "2023–2025",
  },
  {
    title: "start committing to become a professional programmer",
    location:
      "My starting point is to master fullstack development (MERN/PERN)",
    year: "2025 — become professional",
    italic: true,
    highlight: true,
  },
];

const SectionFour = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="section-two w-screen min-h-screen pt-[82px] md:pt-[76px] px-4 md:px-10 py-10 bg-transparent"
    >
      <div className="text-center mb-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Experience.
        </h1>
      </div>
    </section>
  );
});

export default SectionFour;
