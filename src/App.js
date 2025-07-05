import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import MiniProject from "./pages/miniProject/MiniProject";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  const sectionHomeRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);

  // Scroll function based on id string
  const scrollToSection = (section) => {
    const map = {
      home: sectionHomeRef,
      about: section2Ref,
      projects: section3Ref,
      experience: section4Ref,
      skills: section5Ref,
      testimonials: section6Ref,
      contact: section7Ref,
    };
    map[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Checking function  if there is a query section
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (location.pathname === "/" && section) {
      setTimeout(() => scrollToSection(section), 100); // scroll after render
    }
  }, [location]);

  const linkMenu = [
    {
      label: "Home",
      onClick: () => navigate("/?section=home"),
    },
    {
      label: "About",
      onClick: () => navigate("/?section=about"),
    },
    {
      label: "Projects",
      onClick: () => navigate("/?section=projects"),
    },
    {
      label: "Experience",
      onClick: () => navigate("/?section=experience"),
    },
    {
      label: "Skills",
      onClick: () => navigate("/?section=skills"),
    },
    {
      label: "Testimonials",
      onClick: () => navigate("/?section=testimonials"),
    },
    {
      label: "Contact",
      onClick: () => navigate("/?section=contact"),
    },
  ];

  return (
    <>
      <Header titleHeader="Portofolio Space" linkMenu={linkMenu} />
      <div className="pt-[45px]">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                sectionHomeRef={sectionHomeRef}
                section2Ref={section2Ref}
                section3Ref={section3Ref}
                section4Ref={section4Ref}
                section5Ref={section5Ref}
                section6Ref={section6Ref}
                section7Ref={section7Ref}
              />
            }
          />
          <Route
            path="/mini-project"
            element={<MiniProject todos={todos} setTodos={setTodos} />}
          />
        </Routes>
      </div>
      <Footer
        credit={"© 2025 by Afan Aljafar.\nPowered and secured by portofolio space"
          .split("\n")
          .map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
      />
    </>
  );
}

export default App;
