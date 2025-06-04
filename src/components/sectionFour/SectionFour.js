import React, { forwardRef } from "react";
import "./SectionFour.css";

const SectionFour = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section-four">
      SectionFour
    </div>
  );
});

SectionFour.displayName = "SectionFour";

export default SectionFour;
