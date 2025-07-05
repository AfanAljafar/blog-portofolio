import React, { forwardRef } from "react";
import "./SectionFour.css";

const SectionFour = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section-four">
      <div className="box-title-s4">
        <h1 className="sect4Title">contact.</h1>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-row">
            <div className="form-grup">
              <label>First Name* </label>
              <input type="text" required />
            </div>
            <div className="form-grup">
              <label>Last Name* </label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-grup">
            <label>Email* </label>
            <input type="text" required />
          </div>
          <div className="form-grup">
            <label>Phone </label>
            <input type="text" required />
          </div>
          <div className="form-grup">
            <label>Massage* </label>
            <textarea rows="4" required />
          </div>
          <div className="form-actions">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
});

SectionFour.displayName = "SectionFour";

export default SectionFour;
