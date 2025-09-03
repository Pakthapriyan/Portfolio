// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Pakthapriyan. All Rights Reserved.
        </p>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="mailto:spakthapriyan@gmail.com"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
