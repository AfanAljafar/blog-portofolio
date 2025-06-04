import React, { forwardRef } from "react";
import "./SectionThree.css";

const SectionThree = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section-three">
      SectionThree
    </div>
  );
});

SectionThree.displayName = "SectiionThree";
export default SectionThree;
