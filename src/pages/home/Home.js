import { useEffect } from "react";
import SectionOne from "../../components/sectionOne/SectionOne";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import SectionThree from "../../components/sectionThree/SectionThree";

const Home = ({ sectionHomeRef, section2Ref, section3Ref, section4Ref }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // automatically scroll up when page is opened
  }, []);
  return (
    <div className="home text-antiquewhite bg-sky-950 bg-repeat">
      <SectionOne ref={sectionHomeRef} />
      <SectionTwo ref={section2Ref} />
      <SectionThree ref={section3Ref} />
    </div>
  );
};

export default Home;
