import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md top-0 left-0 fixed w-full z-50 font-sans tracking-wide">
        {/* Logo */}
        <div className="text-3xl font-extrabold font-serif">Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a
              href="#PortfolioHero"
              className="relative pb-1 hover:text-cyan-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="relative pb-1 hover:text-cyan-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative pb-1 hover:text-cyan-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="relative pb-1 hover:text-cyan-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="relative pb-1 hover:text-cyan-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 fixed top-16 left-0 w-full shadow-md z-40 text-lg font-medium">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item === "Home" ? "PortfolioHero" : item.toLowerCase()}`}
              className="block relative pb-1 hover:text-cyan-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              onClick={handleLinkClick}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
