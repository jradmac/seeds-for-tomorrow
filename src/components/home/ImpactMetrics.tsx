"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const comparisons = [
  { label: "Traditional school", cost: "$27,000–80,000", percent: 100 },
  { label: "One teacher salary (Brazil)", cost: "$6,000–12,000/yr", percent: 15 },
  { label: "Our cost per child per year", cost: "$12–50", percent: 0.8 },
];

const donations = [
  { amount: "$1/mo", impact: "Educates one child for a month" },
  { amount: "$60/yr", impact: "A full year of AI-powered education" },
  { amount: "$500", impact: "Equips a community computer station" },
  { amount: "$5,000", impact: "Funds the entire Rio pilot for a year" },
];

export function ImpactMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-warm-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="block font-mono text-xs uppercase tracking-[0.3em] text-teal-light mb-4 text-center"
        >
          Impact
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl font-bold text-white sm:text-5xl text-center mb-20"
        >
          Where Your Money Goes
        </motion.h2>

        {/* Cost comparison */}
        <div ref={ref} className="mx-auto max-w-2xl mb-24 space-y-8">
          {comparisons.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm text-stone-400">{item.label}</span>
                <span className={`font-mono text-sm font-medium ${i === comparisons.length - 1 ? "text-teal-light" : "text-stone-200"}`}>
                  {item.cost}
                </span>
              </div>
              <div className="h-1 overflow-hidden bg-stone-800 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.percent}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.5 + i * 0.2, ease: "easeOut" }}
                  className={`h-full rounded-full ${i === comparisons.length - 1 ? "bg-teal-light" : "bg-stone-500"}`}
                  style={{ minWidth: i === comparisons.length - 1 ? "1rem" : undefined }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Donation tiers */}
        <div className="mx-auto max-w-3xl">
          <div className="border-t border-stone-800">
            {donations.map((donation, i) => (
              <motion.div
                key={donation.amount}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                className="group flex items-baseline justify-between border-b border-stone-800 py-5 transition-colors hover:bg-stone-900 px-4 -mx-4"
              >
                <span className="font-mono text-2xl font-bold text-white group-hover:text-teal-light transition-colors sm:text-3xl">
                  {donation.amount}
                </span>
                <span className="text-stone-400 text-sm sm:text-base">
                  {donation.impact}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
