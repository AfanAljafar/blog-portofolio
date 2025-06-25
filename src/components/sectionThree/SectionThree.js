import React, { forwardRef } from "react";
import "./SectionThree.css";

const SectionThree = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section-three">
      <div className="box-title-s3">
        <h1 className="sect3Title">about.</h1>
      </div>
      <p className="desc-about">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
        leo vel ligula convallis, nec sodales ligula aliquam. Integer eu
        venenatis risus, a aliquam velit. In hac habitasse platea dictumst.
        Curabitur laoreet, nibh non congue malesuada, justo metus ultrices enim,
        eu hendrerit nibh risus vitae augue. Vivamus porttitor tortor non tellus
        ornare pretium. Fusce commodo, nunc ornare pellentesque viverra, ante
        est volutpat justo, at luctus felis odio at felis. Vivamus dolor arcu,
        imperdiet eu urna sit amet, bibendum tempor augue. Nam tincidunt ante in
        odio tempus porttitor. Nam faucibus lobortis diam, quis consectetur
        nulla aliquam eget. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Nulla eleifend turpis ac mi
        pellentesque, at auctor risus vehicula. Sed ornare nisi leo, id maximus
        massa scelerisque non.
      </p>
    </div>
  );
});

SectionThree.displayName = "SectiionThree";
export default SectionThree;
