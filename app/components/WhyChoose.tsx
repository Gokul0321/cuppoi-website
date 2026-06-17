"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyChoose() {
  const features = [
    {
      title: "Freshly Roasted",
      image: "/images/freshly-roasted.jpg",
    },
    {
      title: "Kerala Sourced Beans",
      image: "/images/kerala-estate.jpg",
    },
    {
      title: "Premium Arabica & Robusta",
      image: "/images/premium-blend.jpg",
    },
    {
      title: "Delivered Across India",
      image: "/images/delivery.jpg",
    },
  ];

  return (
    <motion.section
      className="py-24 px-8 bg-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 tracking-wide">
          Why Coffee Lovers Choose Cuppoi
        </h2>

        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Crafted with care from Kerala's finest coffee-growing regions,
          delivering premium quality in every cup.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />

              <div className="absolute inset-0 flex items-end justify-center p-6">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}