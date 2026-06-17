"use client";

import { motion } from "framer-motion";

export default function BrewingPromise() {
  const promises = [
    {
      title: "Estate Sourced",
      desc: "Beans sourced directly from Kerala coffee estates.",
    },
    {
      title: "Freshly Roasted",
      desc: "Roasted in small batches for maximum freshness.",
    },
    {
      title: "Delivered Fresh",
      desc: "Packed carefully and shipped across India.",
    },
  ];

  return (
    <section className="py-20 px-8 bg-black">
      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[0.3em] text-yellow-500 mb-4">
          Our Promise
        </p>

        <h2 className="text-5xl md:text-5xl mb-16">
          Crafted With Care
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-gray-800 rounded-3xl p-8"
            >
              <div className="text-yellow-500 text-4xl mb-4">
                ✓
              </div>

              <h3 className="text-2xl mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}