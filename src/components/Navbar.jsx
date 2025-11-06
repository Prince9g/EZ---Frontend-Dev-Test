import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/VFilms Logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#fff7f3]/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <img src={logo} className="w-24 h-10"/>

        {/* Desktop Links + X */}
        <div className="hidden md:flex items-center space-x-6 text-gray-800 font-medium relative">

          {/* Links (appear next to X) */}
          <div
            className={`flex items-center space-x-6 transition-all duration-300 ${
              openNav ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
            }`}
          >
            <a href="#services" className="hover:text-[#e65c3c]">Services</a>
            <a href="#aboutteam" className="hover:text-[#e65c3c]">Their Stories</a>
            <a href="#aboutus" className="hover:text-[#e65c3c]">Our Story</a>
            <a href="#hero" className="hover:text-[#e65c3c]">Varnan</a>
            <a
              href="#contact"
              className="bg-[#e65c3c] text-white px-4 py-2 rounded-full hover:bg-[#d94b2b]"
            >
              Let’s Talk
            </a>
          </div>
          {/* X Button */}
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-2xl font-bold text-[#e65c3c]"
          >
            {openNav ? <X size={24} /> : "X"}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-[#fff7f3] border-t border-gray-300 px-8 py-4 space-y-4 text-gray-800 font-medium">
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#aboutteam" onClick={toggleMenu}>Their Stories</a>
          <a href="#aboutus" onClick={toggleMenu}>Our Story</a>
          <a href="#hero" onClick={toggleMenu}>Varnan</a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="bg-[#e65c3c] text-white px-4 py-2 rounded-full text-center hover:bg-[#d94b2b]"
          >
            Let’s Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
