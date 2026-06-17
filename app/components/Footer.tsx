"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
    return (
  <motion.footer
    id="contact"
    className="relative overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-16 items-start">

          {/* Brand */}
          <div className="flex flex-col">

            <Image
              src="/images/logo.png"
              alt="Cuppoi"
              width={240}
              height={90}
              className="mb-5"
            />

            <p className="text-gray-400 leading-relaxed max-w-md text-base">
              Premium Kerala coffee crafted from carefully selected
              Arabica and Robusta beans, roasted to create rich
              flavour and unforgettable coffee moments.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6 text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a
                href="#home"
                className="hover:text-yellow-500 transition"
              >
                Home
              </a>

              <a
                href="#coffee"
                className="hover:text-yellow-500 transition"
              >
                Coffee
              </a>

              <a
                href="#about"
                className="hover:text-yellow-500 transition"
              >
                About
              </a>

              <a
                href="#contact"
                className="hover:text-yellow-500 transition"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-6 text-white">
              Connect With Us
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a
                href="https://wa.me/919497093752"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                WhatsApp
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                Instagram
              </a>

              <span>
                Kerala, India
              </span>

            </div>
          </div>

        </div>

          {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-5">
          <p className="text-center text-gray-500 text-xs tracking-wide">
            © 2026 Cuppoi. Crafted in Kerala. All Rights Reserved.
          </p>
        </div>

        

      </div>
      
      
    </motion.footer>
    
  );
}