"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Coffee Enthusiast",
      review:
        "Rich aroma, smooth finish and a truly premium coffee experience.",
    },
    {
      name: "Filter Coffee Lover",
      review:
        "One of the best Kerala-style coffees I've tasted in recent years.",
    },
    {
      name: "Morning Brew Fan",
      review:
        "Perfect balance of strength and flavour. A great start to every day.",
    },
  ];

  return (
    <section className="py-24 px-8 bg-[#111111]">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl mb-4 tracking-wide">
          What Coffee Lovers Say
        </h2>

        <p className="text-gray-400 mb-16">
          Crafted to create memorable coffee moments.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-8 rounded-3xl border border-gray-800 shadow-xl hover:border-yellow-500 transition"
            >
              <div className="text-yellow-600 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 italic mb-6">
                "{review.review}"
              </p>

              <h3 className="text-lg font-semibold text-yellow-600">
                {review.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}