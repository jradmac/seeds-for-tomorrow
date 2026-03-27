"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const breakdown = [
  { label: "Software Development", description: "Building the AI learning platform, voice recognition, and adaptive curriculum engine", range: "$800–1,500" },
  { label: "Annual Software Costs", description: "AI API usage, cloud hosting, database, and infrastructure", range: "$400–800" },
  { label: "Tablets & Devices", description: "Durable, kid-friendly tablets preloaded with the learning platform", range: "$300–600" },
  { label: "Implementation & Training", description: "On-the-ground deployment, community facilitator training, and onboarding", range: "$200–500" },
  { label: "Curriculum & Content", description: "Culturally relevant lesson design, translation, and educational material development", range: "$150–300" },
  { label: "Monitoring & Evaluation", description: "Learning outcome tracking, progress reporting, and program assessment", range: "$150–300" },
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
          className="font-serif text-4xl font-bold text-white sm:text-5xl text-center mb-6"
        >
          Where Your Money Goes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-stone-400 mb-6 max-w-lg mx-auto"
        >
          A founding donation of $2,000–4,000 funds the full launch of our
          Rio pilot. Here&apos;s exactly how it breaks down.
        </motion.p>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-5xl font-bold text-white sm:text-6xl">
            $2,000
          </span>
          <span className="font-mono text-5xl font-bold text-stone-600 sm:text-6xl">
            –4,000
          </span>
        </motion.div>

        {/* Breakdown */}
        <div ref={ref} className="mx-auto max-w-3xl">
          {breakdown.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="group border-t border-stone-800 py-6"
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-white font-medium group-hover:text-teal-light transition-colors">
                  {item.label}
                </span>
                <span className="font-mono text-sm text-teal-light">
                  {item.range}
                </span>
              </div>
              <p className="text-sm text-stone-500">
                {item.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-stone-800" />
        </div>

        {/* Transparency note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-stone-700" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-stone-500">
              Full transparency, always
            </span>
            <div className="h-px w-12 bg-stone-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/*
 * COMMENTED OUT: Original donation tiers and cost comparison bars
 *
 * const comparisons = [
 *   { label: "Traditional school", cost: "$27,000–80,000", percent: 100 },
 *   { label: "One teacher salary (Brazil)", cost: "$6,000–12,000/yr", percent: 15 },
 *   { label: "Our cost per child per year", cost: "$12–50", percent: 0.8 },
 * ];
 *
 * const donations = [
 *   { amount: "$1/mo", impact: "Educates one child for a month" },
 *   { amount: "$60/yr", impact: "A full year of AI-powered education" },
 *   { amount: "$500", impact: "Equips a community computer station" },
 *   { amount: "$5,000", impact: "Funds the entire Rio pilot for a year" },
 * ];
 */
