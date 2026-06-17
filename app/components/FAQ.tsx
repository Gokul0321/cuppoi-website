"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "What roast level is Cuppoi coffee?",
      answer:
        "Our coffees are carefully roasted to a medium-dark profile for a rich aroma and balanced flavour.",
    },
    {
      question: "Do you deliver across India?",
      answer:
        "Yes. We deliver freshly packed coffee to customers across India.",
    },
    {
      question: "How long does the coffee stay fresh?",
      answer:
        "For the best experience, consume within 3 months of opening and store in an airtight container.",
    },
    {
      question: "Do you offer Arabica and Robusta separately?",
      answer:
        "Yes. We offer premium Arabica, Robusta and our signature Filter Coffee blend.",
    },
    {
      question: "How can I place an order?",
      answer:
        "Simply click any Buy Now button or use the WhatsApp Order button to place your order directly.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-8 bg-[#111111]">
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.3em] text-yellow-500 text-center mb-4"
        >
          FAQ
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-14"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="border border-gray-800 rounded-2xl overflow-hidden bg-black hover:border-yellow-500/50 transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-5 flex justify-between items-center"
              >
                <span className="text-lg font-medium">
                  {faq.question}
                </span>

                <span className="text-yellow-500 text-3xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}