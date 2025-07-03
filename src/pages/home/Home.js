import { useRef } from "react";
import Header from "../../components/header/Header";
import SectionOne from "../../components/sectionOne/SectionOne";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import SectionThree from "../../components/sectionThree/SectionThree";
// import SectionFour from "../../components/sectionFour/SectionFour";
// import Footer from "../../components/footer/Footer";

const Home = () => {
  const sectionHomeRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null); // Jika nanti ada SectionFour

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔗 Link menu array yang dinamis
  const linkMenu = [
    { label: "Home", onClick: () => scrollToSection(sectionHomeRef) },
    { label: "About", onClick: () => scrollToSection(section2Ref) },
    { label: "Projects", onClick: () => scrollToSection(section3Ref) },
    { label: "Experience" },
    { label: "Skills" },
    { label: "Testimonials" },
    { label: "Contact", onClick: () => scrollToSection(section4Ref) },
  ];

  return (
    <div className="home text-antiquewhite bg-sky-950 pt-[72px] bg-repeat">
      <Header titleHeader="Portofolio Space" linkMenu={linkMenu} />

      <SectionOne
        ref={sectionHomeRef}
        onScrollTo3={() => scrollToSection(section3Ref)}
      />
      <SectionTwo ref={section2Ref} />
      <SectionThree ref={section3Ref} />
      {/* <SectionFour ref={section4Ref} />
      <Footer credit="© 2035 by Afan Aljafar. Powered and secured by ynoir space" /> */}
    </div>
  );
};

export default Home;
