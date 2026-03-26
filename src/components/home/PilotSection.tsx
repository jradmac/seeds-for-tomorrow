"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const details = [
  { label: "Location", value: "Rio de Janeiro, Brazil" },
  { label: "Partner", value: "Community program in favela" },
  { label: "Serving", value: "270 families — 166 children" },
  { label: "Status", value: "Building the platform" },
  { label: "Goal", value: "Deploy + measure outcomes over 6–12 months" },
];

export function PilotSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-warm-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="block font-mono text-xs uppercase tracking-[0.3em] text-teal-light mb-4"
            >
              The Pilot
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl font-bold text-white sm:text-5xl"
            >
              Starting in
              <br />
              Rio de Janeiro
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-6 text-stone-400 leading-relaxed max-w-sm"
            >
              This is where we prove it works. Real kids, real data, real
              results.
            </motion.p>
          </div>

          {/* Right — details list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {details.map((detail, i) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex flex-col gap-1 border-t border-stone-800 py-5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500">
                  {detail.label}
                </span>
                <span className="text-white sm:text-right">
                  {detail.value}
                </span>
              </motion.div>
            ))}
            <div className="border-t border-stone-800" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
