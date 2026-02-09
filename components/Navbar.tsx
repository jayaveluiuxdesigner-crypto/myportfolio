import React from "react";
import { RxFontStyle } from "react-icons/rx";
import Logo from "../public/assets/Logo.png";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 py-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-16 h-16  rounded-full">
            <img
              src={Logo}
              alt="Jayavel Ganesan"
              className="h-4/5 w-4/5 object-contain opacity-80"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600">
          <a href="#" className="text-purple-600">
            Home
          </a>
          <a href="#about" className="hover:text-purple-600 transition-colors">
            About
          </a>
          <a
            href="#experience"
            className="hover:text-purple-600 transition-colors"
          >
            Experience
          </a>
          <a
            href="#education"
            className="hover:text-purple-600 transition-colors"
          >
            Education
          </a>
          <a
            href="#achievements"
            className="hover:text-purple-600 transition-colors"
          >
            Awards
          </a>
          <a href="#skills" className="hover:text-purple-600 transition-colors">
            Skills
          </a>
          <a
            href="#portfolio"
            className="hover:text-purple-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#articles"
            className="hover:text-purple-600 transition-colors"
          >
            Articles
          </a>
          <a
            href="#contact"
            className="bg-purple-600 text-white px-6 py-2.5 rounded-md hover:bg-purple-700 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};
