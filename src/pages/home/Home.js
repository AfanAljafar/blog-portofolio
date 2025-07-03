import { useRef } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import SectionOne from "../../components/sectionOne/SectionOne";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import SectionThree from "../../components/sectionThree/SectionThree";

const Home = () => {
  const sectionHomeRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home text-antiquewhite bg-sky-950 pt-[72px] bg-repeat">
      <Header
        titleHeader={"Portofolio Space"}
        link1={"Home"}
        link2={"About"}
        link3={"Projects"}
        link4={"Experience"}
        link5={"Skills"}
        link6={"Testimonials"}
        link7={"Contact"}
        onScrollToHome={() => scrollToSection(sectionHomeRef)}
        onScrollTo2={() => scrollToSection(section2Ref)}
        onScrollTo3={() => scrollToSection(section3Ref)}
        onScrollTo4={() => scrollToSection(section4Ref)}
      />
      <SectionOne
        ref={sectionHomeRef}
        onScrollTo3={() => scrollToSection(section3Ref)}
      />
      <SectionTwo ref={section2Ref} />
      <SectionThree ref={section3Ref} />

      {/* <SectionOne
        profileDesc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu quam vel purus ullamcorper malesuada a sit amet urna. Phasellus volutpat metus egestas enim bibendum maximus. Mauris enim tortor, volutpat sit amet tincidunt in, rutrum nec libero. Morbi eu iaculis nisi, nec ullamcorper nulla. In ut eros consequat, sodales urna nec, scelerisque lorem. Quisque dictum lacinia lectus ut hendrerit. Sed urna tellus, tempus eu consequat sit amet, placerat sed dui. Vivamus eu quam commodo, convallis felis at, pulvinar tortor. Nullam quis urna ut orci facilisis ornare ut eget mauris. Aenean viverra sem nunc, vehicula placerat ex pulvinar vitae. Duis libero dolor, efficitur non erat et, blandit mollis mi."
        }
      />
      <SectionThree />
      <SectionTwo ref={section2Ref} />

      <SectionFour ref={section4Ref} />
      <Footer credit="© 2035 by Afan Aljafar. Powered and secured by ynoir space" /> */}
    </div>
  );
};

export default Home;
