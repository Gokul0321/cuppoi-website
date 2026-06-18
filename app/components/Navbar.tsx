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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Cuppoi"
             width={220}
            height={80}
            priority
            className="h-auto w-auto max-h-20"
              
              // className="h-auto w-auto max-h-16"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
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
            className="md:hidden text-3xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/20 backdrop-blur-xl border-t border-white/10 px-8 py-8">
          <div className="flex flex-col items-center gap-8 text-xl font-medium">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Home
            </a>

            <a
              href="#coffee"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Coffee
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Contact
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}