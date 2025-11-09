import React, { useEffect, useState } from "react";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.min(100, Math.max(0, (scrollTop / height) * 100));
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-cyan-500 z-[60]"
        style={{ width: `${progress}%` }}
      />

      <nav className="backdrop-blur-md bg-white/70 dark:bg-black/40 text-black dark:text-white px-6 py-4 flex justify-between items-center border-b border-black/10 dark:border-white/10 top-0 left-0 fixed w-full z-50 font-sans tracking-wide">
        {/* Left: Logo */}
        <div className="text-2xl md:text-3xl font-extrabold">Portfolio</div>

        {/* Center: Desktop Menu */}
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

        {/* Right: Theme toggle + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/95 dark:bg-black/90 text-black dark:text-white px-6 py-4 space-y-4 fixed top-16 left-0 w-full shadow-md z-40 text-lg font-medium">
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
