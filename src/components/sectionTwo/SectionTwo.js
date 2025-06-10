import React, { forwardRef } from "react";
import "./SectionTwo.css";
import Card from "../card/Card";

const data = [
  { title: "Card 1", content: "Ini isi kartu pertama." },
  { title: "Card 2", content: "Ini isi kartu kedua." },
  { title: "Card 3", content: "Isi kartu ketiga yang lebih panjang." },
  { title: "Card 4", content: "Dan seterusnya." },
  { title: "Card 5", content: "Isi kartu ketiga yang lebih panjang." },
  { title: "Card 6", content: "Dan seterusnya." },
];

const SectionTwo = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section-two">
      <div className="box-title-s2">
        <h1 className="sect2Title">projects.</h1>
      </div>
      <div className="grid-container">
        {data.map((item, index) => (
          <Card key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
});

SectionTwo.displayName = "SectionTwo";

export default SectionTwo;
