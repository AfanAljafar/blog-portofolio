import { useRef } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";
import Footer from "./components/footer/Footer";

function App() {
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header
        onScrollTo2={() => scrollToSection(section2Ref)}
        onScrollTo3={() => scrollToSection(section3Ref)}
        onScrollTo4={() => scrollToSection(section4Ref)}
      />
      <SectionTwo ref={section2Ref} />
      <SectionThree ref={section3Ref} />
      <SectionFour ref={section4Ref} />
      <Footer credit="© 2035 by Afan Aljafar. Powered and secured by ynoir space" />
    </div>
  );
}

export default App;
