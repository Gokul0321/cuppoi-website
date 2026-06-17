"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md py-2 shadow-lg"
          : "bg-black/40 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Cuppoi"
            width={160}
            height={60}
            priority
            className="h-auto w-auto max-h-14"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a
            href="#home"
            className="hover:text-yellow-500 transition duration-300"
          >
            Home
          </a>

          <a
            href="#coffee"
            className="hover:text-yellow-500 transition duration-300"
          >
            Coffee
          </a>

          <a
            href="#about"
            className="hover:text-yellow-500 transition duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-yellow-500 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md px-6 pb-6 pt-4 flex flex-col gap-4 text-center">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#coffee" onClick={() => setMenuOpen(false)}>
            Coffee
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}