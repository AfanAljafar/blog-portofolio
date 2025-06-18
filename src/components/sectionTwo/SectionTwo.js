import React, { forwardRef } from "react";
import "./SectionTwo.css";
import Card from "../card/Card";

const data = [
  {
    title: "Mini Project",
    content: "kompilasi mini project",
    image: process.env.PUBLIC_URL + "/miniProject.png",
    path: "/mini-project",
  },
  {
    title: "Project 2",
    content: "dekripsi singkat project.",
    image: "gambar 2",
  },
  {
    title: "Project 3",
    content: "dekripsi singkat project.",
    image: "gambar 3",
  },
  {
    title: "Project 4",
    content: "dekripsi singkat project.",
    image: "gambar 4",
  },
  {
    title: "Project 5",
    content: "dekripsi singkat project.",
    image: "gambar 5",
  },
  {
    title: "Project 6",
    content: "dekripsi singkat project.",
    image: "gambar 6",
  },
];

const SectionTwo = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section-two">
      <div className="box-title-s2">
        <h1 className="sect2Title">projects.</h1>
      </div>
      <div className="grid-container">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            content={item.content}
            image={item.image}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
});

SectionTwo.displayName = "SectionTwo";

export default SectionTwo;
