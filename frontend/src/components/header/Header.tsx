import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/space-planet-white.png";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "../../hooks/scrollpy";

// type LinkMenuItem = {
//   label: string;
//   onClick: () => void;
// };

interface HeaderProps {
  titleHeader: string;
  // linkMenu: LinkMenuItem[];
}

const Header: React.FC<HeaderProps> = ({ titleHeader }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const sectionIds = [
    "home",
    "about",
    "projects",
    "experience",
    "skills",
    "testimonials",
    "contact",
  ];
  const activeId = useScrollSpy(sectionIds, 100);

  // otomatis buat link menu dari sectionIds
  const linkMenu = sectionIds.map((id) => ({
    label: id.charAt(0).toUpperCase() + id.slice(1), // Kapital di awal
    onClick: () => {
      if (window.location.pathname !== "/") {
        // kalau bukan di home, arahkan dulu ke home dengan query
        navigate(`/?scrollTo=${id}`);
      } else {
        // kalau sudah di home, langsung scroll
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    },
  }));

  return (
    <div className="fixed top-0 w-full z-50 bg-sky-950 drop-shadow-[0_6px_6px_rgba(0,255,255,0.5)]">
      <div className="flex items-center justify-between px-8 py-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/?scrollTo=home")}
        >
          <img src={logo} alt="Logo" className="h-[40px] w-auto" />
          <h1 className="text-white ml-2">{titleHeader}</h1>
        </div>

        {/* desktop menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-sm text-white">
          {linkMenu.map(({ label, onClick }) => {
            const id = label.toLowerCase(); // pastikan label = id section
            return (
              <li
                key={label}
                // className="list-none cursor-pointer hover:text-sky-400"
                className={`list-none cursor-pointer ${
                  activeId === id ? "text-sky-400" : "hover:text-sky-400"
                }`}
                onClick={onClick}
              >
                {label}
              </li>
            );
          })}
        </nav>

        {/* mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white bg-sky-950"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-8 pb-4 text-white ">
          {linkMenu.map(({ label, onClick }) => {
            const id = label.toLowerCase();
            return (
              <button
                key={label}
                onClick={() => {
                  setIsOpen(false);
                  onClick?.(); // only call if onClick exists
                }}
                // className="py-2 text-left w-full text-white hover:text-sky-400 bg-sky-950"
                className={`py-2 text-left w-full ${
                  activeId === id ? "text-sky-400" : "hover:text-sky-400"
                } bg-sky-950`}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Header;
