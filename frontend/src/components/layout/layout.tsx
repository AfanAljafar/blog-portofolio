import { Outlet, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  const navigate = useNavigate();

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
    <div>
      <Header titleHeader="Portofolio Space" linkMenu={linkMenu} />
      <Outlet />
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
    </div>
  );
};

export default Layout;
