import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionOne from "../../components/sectionOne/SectionOne";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import SectionThree from "../../components/sectionThree/SectionThree";
import SectionFour from "../../components/sectionFour/SectionFour";
import SectionFive from "../../components/sectionFive/SectionFive";
import SectionSix from "../../components/sectionSix/SectionSix";
import SectionSeven from "../../components/sectionSeven/SectionSeven";

const Home = ({
  sectionHomeRef,
  section2Ref,
  section3Ref,
  section4Ref,
  section5Ref,
  section6Ref,
  section7Ref,
}) => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTarget = params.get("scrollTo");

    if (scrollTarget === "sectionOne" && sectionHomeRef?.current) {
      sectionHomeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, sectionHomeRef]);

  useEffect(() => {
    window.scrollTo(0, 0); // automatically scroll up when page is opened
  }, []);
  return (
    <div className="home text-antiquewhite bg-sky-950 bg-repeat">
      <SectionOne ref={sectionHomeRef} />
      <SectionTwo ref={section2Ref} />
      <SectionThree ref={section3Ref} />
      <SectionFour ref={section4Ref} />
      <SectionFive ref={section5Ref} />
      <SectionSix ref={section6Ref} />
      <SectionSeven ref={section7Ref} />
    </div>
  );
};

export default Home;
