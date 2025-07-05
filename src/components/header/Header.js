import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/space-planet-white.png";
import { Menu, X } from "lucide-react";

const Header = ({ label, onClick, titleHeader, linkMenu = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  return (
    <div className="fixed top-0 w-full z-50 bg-sky-950 drop-shadow-[0_6px_6px_rgba(0,255,255,0.5)]">
      <div className="flex items-center justify-between px-8 py-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/?scrollTo=sectionOne")}
        >
          <img src={logo} alt="Logo" className="h-[40px] w-auto" />
          <h1 className="text-white ml-2">{titleHeader}</h1>
        </div>

        {/* desktop menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-sm text-white">
          {linkMenu.map(({ label, onClick }) => (
            <li
              key={label}
              className="list-none cursor-pointer hover:text-sky-400"
              onClick={onClick}
            >
              {label}
            </li>
          ))}
        </nav>

        {/* mobile menu button */}
        <div
          className="md:hidden
"
        >
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
          {linkMenu.map(({ label, onClick }) => (
            <button
              key={label}
              onClick={() => {
                setIsOpen(false);
                onClick?.(); // only call if onClick exists
              }}
              className="py-2 text-left w-full text-white hover:text-sky-400 bg-sky-950"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
