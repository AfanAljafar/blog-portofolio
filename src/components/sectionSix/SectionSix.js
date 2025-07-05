import React, { forwardRef } from "react";

const SectionSix = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="section-four w-screen min-h-screen pt-[82px] md:pt-[76px] px-4 md:px-10 py-10 bg-transparent"
    >
      <div className="text-center mb-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Testimonials.
        </h1>
      </div>
    </section>
  );
});

export default SectionSix;
