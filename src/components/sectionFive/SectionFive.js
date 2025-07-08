import React, { forwardRef } from "react";
import html5png from "../../assets/html5.png";
import css from "../../assets/css.png";
import JS from "../../assets/JS.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import GIT from "../../assets/GIT.png";
import express from "../../assets/express.png";
import python from "../../assets/python.png";
import axios from "../../assets/axios.png";
import cors from "../../assets/cors.png";
import c from "../../assets/c.png";
import cpp from "../../assets/c++.png";
import mysql from "../../assets/MySQL.png";
import postgresql from "../../assets/postgresql.png";
import mongodb from "../../assets/mongoDB.png";
import mongodbAtlas from "../../assets/mongodb-atlas.png";
import supabase from "../../assets/SUPABASE.png";
import tailwindcss from "../../assets/tailwindcss.png";
import nextjs from "../../assets/nextjs.png";
import arduino from "../../assets/arduino.png";
import linux from "../../assets/linux.png";

// Daftar logo (pastikan path-nya benar di /public/img/)
const logos = [
  {
    src: html5png,
    link: "https://www.w3schools.com/whatis/whatis_html.asp",
    bgColor: "bg-red-100",
  },
  {
    src: css,
    link: "https://www.w3schools.com/whatis/whatis_css.asp",
    bgColor: "bg-blue-100",
  },
  {
    src: JS,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    bgColor: "bg-green-100",
  },
  {
    src: python,
    link: "https://www.python.org/",
    bgColor: "bg-indigo-100",
  },
  {
    src: c,
    link: "https://www.w3schools.com/c/c_intro.php",
    bgColor: "bg-teal-100",
  },
  {
    src: cpp,
    link: "https://www.w3schools.com/cpp/default.asp",
    bgColor: "bg-cyan-100",
  },
  {
    src: node,
    link: "https://nodejs.org/en/docs",
    bgColor: "bg-yellow-100",
  },
  {
    src: react,
    link: "https://react.dev/",
    bgColor: "bg-purple-100",
  },
  { src: GIT, link: "https://git-scm.com", bgColor: "bg-pink-100" },
  {
    src: express,
    link: "https://expressjs.com",
    bgColor: "bg-orange-100",
  },
  { src: axios, link: "https://axios-http.com/", bgColor: "bg-lime-100" },
  {
    src: cors,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS",
    bgColor: "bg-emerald-100",
  },

  {
    src: mysql,
    link: "https://dev.mysql.com/doc/",
    bgColor: "bg-fuchsia-100",
  },
  {
    src: postgresql,
    link: "https://www.postgresql.org/docs/",
    bgColor: "bg-rose-100",
  },
  {
    src: mongodb,
    link: "https://www.mongodb.com/",
    bgColor: "bg-red-100",
  },
  {
    src: supabase,
    link: "https://supabase.com/docs",
    bgColor: "bg-blue-100",
  },
  {
    src: mongodbAtlas,
    link: "https://www.mongodb.com/docs/atlas/",
    bgColor: "bg-green-100",
  },
  {
    src: tailwindcss,
    link: "https://tailwindcss.com/",
    bgColor: "bg-indigo-100",
  },
  {
    src: nextjs,
    link: "https://nextjs.org/docs",
    bgColor: "bg-teal-100",
  },
  {
    src: arduino,
    link: "https://docs.arduino.cc/",
    bgColor: "bg-cyan-100",
  },
  {
    src: linux,
    link: "https://help.ubuntu.com/",
    bgColor: "bg-yellow-100",
  },
  {
    src: html5png,
    link: "https://www.w3schools.com/whatis/whatis_html.asp",
    bgColor: "bg-red-100",
  },
  {
    src: css,
    link: "https://www.w3schools.com/whatis/whatis_css.asp",
    bgColor: "bg-blue-100",
  },
  {
    src: JS,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    bgColor: "bg-green-100",
  },
  {
    src: python,
    link: "https://www.python.org/",
    bgColor: "bg-indigo-100",
  },
  {
    src: c,
    link: "https://site11.com",
    bgColor: "bg-teal-100",
  },
  {
    src: cpp,
    link: "https://site12.com",
    bgColor: "bg-cyan-100",
  },
  {
    src: node,
    link: "https://nodejs.org/en/docs",
    bgColor: "bg-yellow-100",
  },
  {
    src: react,
    link: "https://react.dev/",
    bgColor: "bg-purple-100",
  },
  { src: GIT, link: "https://git-scm.com", bgColor: "bg-pink-100" },
  {
    src: express,
    link: "https://expressjs.com",
    bgColor: "bg-orange-100",
  },
  { src: axios, link: "https://axios-http.com/", bgColor: "bg-lime-100" },
  {
    src: cors,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS",
    bgColor: "bg-emerald-100",
  },

  {
    src: mysql,
    link: "https://dev.mysql.com/doc/",
    bgColor: "bg-fuchsia-100",
  },
  {
    src: postgresql,
    link: "https://www.postgresql.org/docs/",
    bgColor: "bg-rose-100",
  },
  {
    src: mongodb,
    link: "https://www.mongodb.com/",
    bgColor: "bg-red-100",
  },
  {
    src: supabase,
    link: "https://www.w3schools.com/whatis/whatis_css.asp",
    bgColor: "bg-blue-100",
  },
  {
    src: mongodbAtlas,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    bgColor: "bg-green-100",
  },
  {
    src: tailwindcss,
    link: "https://tailwindcss.com/",
    bgColor: "bg-indigo-100",
  },
  {
    src: nextjs,
    link: "https://nextjs.org/docs",
    bgColor: "bg-teal-100",
  },
  {
    src: arduino,
    link: "https://docs.arduino.cc/",
    bgColor: "bg-cyan-100",
  },
  {
    src: linux,
    link: "https://help.ubuntu.com/",
    bgColor: "bg-yellow-100",
  },
];

// Komponen untuk kotak diamond
const DiamondBox = ({ src, link, bgColor }) => (
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
const SectionFive = forwardRef((props, ref) => {
  const row1 = logos.slice(0, 10);
  const row2 = logos.slice(10, 21);
  const row3 = logos.slice(21, 31);
  const row4 = logos.slice(31, 42);

  return (
    <section
      ref={ref}
      className="section-four w-screen min-h-screen pt-[72px] px-4 md:px-10 py-10 bg-transparent"
    >
      {/* Judul */}
      <div className="text-center mb-6">
        <h1 className="text-white text-4xl md:text-5xl font-bold">Skills.</h1>
      </div>

      {/* Kontainer logo */}
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
