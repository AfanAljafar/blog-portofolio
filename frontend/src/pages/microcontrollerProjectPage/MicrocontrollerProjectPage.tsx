import React, { useEffect } from "react";
import MicrocontrollerProject from "../../components/microcontrollerProject/MicrocontrollerProject";

const MicrocontrollerProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // automatically scroll up when page is opened
  }, []);
  return (
    <div>
      <MicrocontrollerProject />
    </div>
  );
};

export default MicrocontrollerProjectPage;
