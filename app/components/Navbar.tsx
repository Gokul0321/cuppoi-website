"use client";

import { useState, useEffect } from "react";

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
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide text-yellow-500">
          Cuppoi
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="hover:text-yellow-500 transition">
            Home
          </a>

          <a href="#coffee" className="hover:text-yellow-500 transition">
            Coffee
          </a>

          <a href="#about" className="hover:text-yellow-500 transition">
            About
          </a>

          <a href="#contact" className="hover:text-yellow-500 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black px-8 pb-4 flex flex-col gap-4">
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