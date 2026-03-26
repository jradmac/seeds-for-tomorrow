"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 260, suffix: "M+", label: "Children without access to school" },
  { value: 166, suffix: "", label: "Kids in our Rio partner community" },
  { value: 3, suffix: "", label: "Computers available for all of them" },
];

export function ProblemStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-warm-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="block font-mono text-xs uppercase tracking-[0.3em] text-teal-light mb-16 text-center"
        >
          The Reality
        </motion.span>

        {/* Stats row */}
        <div ref={ref} className="grid gap-0 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`py-8 text-center ${
                i < stats.length - 1 ? "md:border-r md:border-stone-700" : ""
              }`}
            >
              <div className="font-mono text-5xl font-bold text-white sm:text-6xl tracking-tight">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm text-stone-400 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-auto mt-20 mb-16 h-px w-full bg-stone-800" />

        {/* Coordinator Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-xl leading-relaxed text-stone-200 sm:text-2xl font-serif italic text-center">
            &ldquo;Children finish their studies with many learning difficulties.
            There are children who cannot read and are not literate, and the
            schools do not fail students. Most young people between 14 and 16
            leave school to work or end up idle in the streets.&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-teal/40" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
              Program Coordinator, Rio de Janeiro
            </span>
            <div className="h-px w-12 bg-teal/40" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-12 max-w-xl text-center text-stone-400 leading-relaxed"
        >
          We&apos;re not trying to fix a broken system. We&apos;re building
          education where none exists.
        </motion.p>
      </div>
    </section>
  );
}
