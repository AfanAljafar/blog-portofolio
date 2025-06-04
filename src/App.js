import { useRef } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SectionTwo from "./components/sectionTwo/SectionTwo";

function App() {
  const sectionRef = useRef(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Header onScroll={handleScroll} />
      <SectionTwo ref={sectionRef} />
    </div>
  );
}

export default App;
