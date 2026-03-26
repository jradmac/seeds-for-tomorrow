"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const subjects = [
  {
    title: "Reading",
    description:
      "AI-guided comprehension, leveled to each child. From basic literacy to advanced understanding.",
  },
  {
    title: "Writing",
    description:
      "Structured exercises with real-time AI feedback. Learn to express ideas clearly.",
  },
  {
    title: "Language",
    description:
      "Conversational practice with voice AI in English and Spanish. Kids speak, the AI listens, corrects, responds.",
  },
  {
    title: "Entrepreneurship",
    description:
      "Identify opportunity. Communicate value. Think like a builder. The skill nobody else teaches.",
  },
];

export function WhatWeTeach() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-warm-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="block font-mono text-xs uppercase tracking-[0.3em] text-teal-light mb-4"
            >
              Curriculum
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl font-bold text-white sm:text-5xl"
            >
              What We Teach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-4 text-stone-400 leading-relaxed max-w-sm"
            >
              Four pillars of learning designed for self-directed, AI-guided
              mastery.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 text-sm text-stone-500 italic"
            >
              This isn&apos;t a replacement for schools.
              <br />
              It&apos;s education for the places schools will never go.
            </motion.p>
          </div>

          {/* Right — subjects */}
          <div ref={ref}>
            {subjects.map((subject, i) => (
              <motion.div
                key={subject.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border-t border-stone-800 py-8 last:border-b last:border-stone-800"
              >
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-teal-light transition-colors">
                  {subject.title}
                </h3>
                <p className="mt-3 text-stone-400 leading-relaxed max-w-lg">
                  {subject.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
