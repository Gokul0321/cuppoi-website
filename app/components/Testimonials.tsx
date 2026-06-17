"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Coffee Enthusiast",
      location: "Bangalore",
      review:
        "Rich aroma, smooth finish and a truly premium coffee experience.",
    },
    {
      name: "Filter Coffee Lover",
      location: "Kochi",
      review:
        "One of the best Kerala-style coffees I've tasted in recent years.",
    },
    {
      name: "Morning Brew Fan",
      location: "Chennai",
      review:
        "Perfect balance of strength and flavour. A great start to every day.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[0.3em] text-yellow-500 text-sm mb-4">
          Testimonials
        </p>

        <h2 className="text-5xl mb-4">
          What Coffee Lovers Say
        </h2>

        <p className="text-gray-400 mb-16">
          Crafted to create memorable coffee moments.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                bg-[#181818]
                p-8
                rounded-3xl
                border
                border-[#2a2a2a]
                hover:border-yellow-500
                transition
                duration-300
                hover:-translate-y-2
              "
            >
              <div className="text-yellow-500 text-xl mb-6">
                ★★★★★
              </div>

              <p className="text-gray-300 italic leading-relaxed mb-8">
                "{review.review}"
              </p>

              <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>

              <h3 className="font-semibold text-lg">
                {review.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {review.location}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}