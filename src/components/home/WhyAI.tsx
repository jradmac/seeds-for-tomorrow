"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const traditional = [
  { label: "Build a school", value: "$27K–80K" },
  { label: "Hire teachers", value: "Scarce" },
  { label: "Train staff", value: "Months" },
  { label: "Timeline", value: "Years" },
  { label: "Reaches", value: "1 community" },
];

const ours = [
  { label: "Install software", value: "Existing devices" },
  { label: "Train facilitators", value: "1–2 people" },
  { label: "Deploy", value: "Weeks" },
  { label: "Cost per child", value: "$12–50/yr" },
  { label: "Reaches", value: "Any community" },
];

export function WhyAI() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="block font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4 text-center"
        >
          Why AI?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl font-bold text-warm-black sm:text-5xl text-center mb-20"
        >
          A Better Way to Scale
        </motion.h2>

        <div ref={ref} className="grid gap-16 md:grid-cols-2">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-stone-400 mb-8">
              Traditional Approach
            </h3>
            <div className="space-y-0">
              {traditional.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between border-t border-border py-4"
                >
                  <span className="text-warm-gray">{item.label}</span>
                  <span className="font-mono text-sm text-stone-400">
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="border-t border-border" />
            </div>
          </motion.div>

          {/* Ours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-8">
              Our Approach
            </h3>
            <div className="space-y-0">
              {ours.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between border-t border-teal/20 py-4"
                >
                  <span className="text-warm-black">{item.label}</span>
                  <span className="font-mono text-sm font-medium text-teal">
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="border-t border-teal/20" />
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-20 max-w-lg text-center text-2xl font-serif text-warm-black"
        >
          We don&apos;t need to build a school.
          <br />
          <span className="text-teal">
            We need a computer and an internet connection.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
