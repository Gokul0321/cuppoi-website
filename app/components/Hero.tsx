"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center pt-20"
    >
      <Image
        src="/images/hero.jpg"
        alt="Coffee"
        fill
        className="object-cover opacity-40"
        priority
      />

      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.p
          className="uppercase tracking-[0.4em] text-yellow-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Kerala Specialty Coffee
        </motion.p>

        <motion.h1
          className="text-5xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Cuppoi
        </motion.h1>

        <motion.p
          className="max-w-xl md:max-w-2xl text-lg md:text-xl text-gray-300 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          From the misty hills of Kerala to your cup. Freshly roasted coffee
          crafted for everyday rituals and unforgettable moments.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <a
            href="#coffee"
            className="bg-yellow-600 px-8 py-3 rounded-lg hover:scale-105 transition"
          >
            Shop Coffee
          </a>

          <a
            href="#about"
            className="border border-white px-8 py-3 rounded-lg hover:scale-105 transition"
          >
            Our Story
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}