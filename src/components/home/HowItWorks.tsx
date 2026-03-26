"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Deploy",
    description:
      "AI learning software installed on existing community computers. No new infrastructure needed.",
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Children sit down for 30-minute sessions. The AI teaches reading, writing, English, and entrepreneurship — adapted to their level.",
  },
  {
    number: "03",
    title: "Adapt",
    description:
      "The system learns what each child knows, where they struggle, and adjusts in real time. A patient tutor that never gets tired.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Kids gain literacy, language skills, and business thinking. The tools to build a different future.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-warm-white py-24 sm:py-32" id="how-it-works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="block font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4"
        >
          Process
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl font-bold text-warm-black sm:text-5xl mb-20"
        >
          How It Works
        </motion.h2>

        <div ref={ref} className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group grid grid-cols-1 gap-4 border-t border-border py-10 sm:grid-cols-[80px_200px_1fr] sm:items-baseline sm:gap-8"
            >
              <span className="font-mono text-sm text-stone-400 group-hover:text-teal transition-colors">
                {step.number}
              </span>
              <h3 className="font-serif text-2xl font-bold text-warm-black group-hover:text-teal transition-colors">
                {step.title}
              </h3>
              <p className="text-warm-gray leading-relaxed max-w-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
