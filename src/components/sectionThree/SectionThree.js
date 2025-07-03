import React, { forwardRef } from "react";
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

const SectionThree = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="section-two w-screen min-h-screen px-4 md:px-10 py-10 bg-transparent"
    >
      <div className="box-title-s2 text-center mb-10">
        <h1 className="sect2Title text-white text-4xl md:text-5xl font-bold">
          projects.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
});

SectionThree.displayName = "SectionThree";

export default SectionThree;
