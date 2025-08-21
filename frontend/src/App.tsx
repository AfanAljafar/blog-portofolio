import { Routes, Route, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import { lazy, Suspense } from "react";

import Layout from "./components/layout/layout.jsx";
// import Home from "./pages/home/Home";
// import MiniProject from "./pages/miniProject/MiniProject";
// import MicrocontrollerProjectPage from "./pages/microcontrollerProjectPage/MicrocontrollerProjectPage";
// import InventoryManager from "./pages/inventoryManager/InventoryManager";
import React from "react";
const Home = lazy(() => import("./pages/home/Home.jsx"));
const MiniProject = lazy(() => import("./pages/miniProject/MiniProject.jsx"));
const MicrocontrollerProjectPage = lazy(
  () =>
    import("./pages/microcontrollerProjectPage/MicrocontrollerProjectPage.jsx")
);
const InventoryManager = lazy(
  () => import("./pages/inventoryManager/InventoryManager.jsx")
);

function App() {
  const location = useLocation();

  const sectionHomeRef = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const section3Ref = useRef<HTMLElement | null>(null);
  const section4Ref = useRef<HTMLElement | null>(null);
  const section5Ref = useRef<HTMLElement | null>(null);
  const section6Ref = useRef<HTMLElement | null>(null);
  const section7Ref = useRef<HTMLElement | null>(null);

  // Scroll function based on id string
  const scrollToSection = (section: string) => {
    const map: Record<string, React.RefObject<HTMLElement | null>> = {
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
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
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
              <Route
                path="/microcontroller-project"
                element={<MicrocontrollerProjectPage />}
              />
              <Route
                path="/project-inventory-manager"
                element={<InventoryManager />}
              />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
