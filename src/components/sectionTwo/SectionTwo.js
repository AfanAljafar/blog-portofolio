import React, { forwardRef } from "react";
import "./SectionTwo.css";

const SectionTwo = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section-two">
      SectionTwo
    </div>
  );
});

export default SectionTwo;
