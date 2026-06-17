"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-[2px] bg-yellow-500 mb-6"></div>

            <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm mb-4">
              About Cuppoi
            </p>

            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
              From Kerala's Estates To Your Cup
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Cuppoi is a premium coffee brand rooted in the lush coffee
              estates of Kerala. We bring you carefully selected Arabica and
              Robusta beans, roasted to perfection to create a rich and
              memorable coffee experience.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Every batch is crafted with care, preserving the natural aroma,
              flavour and character of the beans. Whether it is your morning
              ritual or evening conversation, Cuppoi transforms everyday
              moments into something special.
            </p>

            {/* PREMIUM HIGHLIGHTS */}
            <div className="flex flex-wrap gap-10 pt-2">

              {/* <div>
                <p className="text-yellow-500 text-3xl font-bold">
                  100%
                </p>
                <p className="text-gray-400 text-sm">
                  Premium Beans
                </p>
              </div>

              <div>
                <p className="text-yellow-500 text-3xl font-bold">
                  Kerala
                </p>
                <p className="text-gray-400 text-sm">
                  Estate Sourced
                </p>
              </div>

              <div>
                <p className="text-yellow-500 text-3xl font-bold">
                  Fresh
                </p>
                <p className="text-gray-400 text-sm">
                  Small Batch Roasted
                </p>
              </div> */}

            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl group">

              <Image
                src="/images/premium-blend.jpg"
                alt="Cuppoi Premium Coffee"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8">
                <p className="uppercase tracking-[0.3em] text-yellow-600 text-sm mb-2">
                  Premium Kerala Coffee
                </p>

                <h3 className="text-3xl font-semibold">
                  Crafted With Passion
                </h3>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}