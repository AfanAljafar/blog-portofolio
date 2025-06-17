import React, { forwardRef } from "react";
import "./SectionTwo.css";
import Card from "../card/Card";

const data = [
  {
    title: "Temperature Coneverter",
    content: "mini Project konverter suhu",
    image: "temperaturConvert.png",
  },
  { title: "Card 2", content: "Ini isi kartu kedua.", image: "gambar2" },
  {
    title: "Card 3",
    content: "Isi kartu ketiga yang lebih panjang.",
    image: "gambar3",
  },
  { title: "Card 4", content: "Dan seterusnya.", image: "gambar4" },
  {
    title: "Card 5",
    content: "Isi kartu ketiga yang lebih panjang.",
    image: "gambar5",
  },
  { title: "Card 6", content: "Dan seterusnya.", image: "gambar3" },
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
          />
        ))}
      </div>
    </div>
  );
});

SectionTwo.displayName = "SectionTwo";

export default SectionTwo;
