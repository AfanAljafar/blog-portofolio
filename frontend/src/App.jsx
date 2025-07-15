import { Routes, Route, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import Layout from "./components/layout/layout";
import Home from "./pages/home/Home";
import MiniProject from "./pages/miniProject/MiniProject";

function App() {
  const location = useLocation();

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

  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
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
            <Route path="/mini-project" element={<MiniProject />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
