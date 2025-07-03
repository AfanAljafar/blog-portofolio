import React, { useState } from "react";
import logo from "../../assets/space-planet-white.png";
import { Menu, X } from "lucide-react";

const Header = ({
  titleHeader,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link7,
  onScrollToHome,
  onScrollTo2,
  onScrollTo3,
  onScrollTo4,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="header fixed top-0 w-full z-50 bg-sky-950 drop-shadow-[0_6px_6px_rgba(0,255,255,0.5)]">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="logo flex items-center">
          <img src={logo} alt="Logo" className="h-[40px] w-auto" />
          <h1 className="text-white"> &nbsp; {titleHeader}</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-sm text-white">
          <ul className="flex space-x-8 font-medium text-sm text-white">
            <li
              className="hover:text-sky-400 cursor-pointer list-none"
              onClick={onScrollToHome}
            >
              {link1}
            </li>
            <li
              className="hover:text-sky-400 cursor-pointer list-none"
              onClick={onScrollTo2}
            >
              {link2}
            </li>
            <li
              className="hover:text-sky-400 cursor-pointer list-none"
              onClick={onScrollTo3}
            >
              {link3}
            </li>
            <li className="hover:text-sky-400 cursor-pointer list-none">
              {link4}
            </li>
            <li className="hover:text-sky-400 cursor-pointer list-none">
              {link5}
            </li>
            <li className="hover:text-sky-400 cursor-pointer list-none">
              {link6}
            </li>
            <li className="hover:text-sky-400 cursor-pointer list-none">
              {link7}
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white bg-transparent"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-8 pb-4 text-white list-none">
          {[link1, link2, link3, link4, link5, link6, link7].map((item) => (
            <li
              key={item}
              onClick={() => setIsOpen(false)}
              className="py-2 text-left w-full hover:text-sky-400"
            >
              {item}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
