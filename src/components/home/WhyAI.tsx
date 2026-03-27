"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "The AI meets each child where they are — evaluating reading level, comprehension, and language ability through natural conversation, not standardized tests.",
  },
  {
    number: "02",
    title: "Personalize",
    description:
      "Based on what it learns, the AI builds a custom learning path around each child's developmental needs. No two programs look the same.",
  },
  {
    number: "03",
    title: "Engage",
    description:
      "Lessons are built around topics and subjects the child is actually interested in. A kid who loves football learns reading through football. A kid who loves music learns math through rhythm.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "The program continuously adapts. As the child grows, the AI raises the bar — introducing new challenges, deeper material, and broader subjects at exactly the right pace.",
  },
];

export function WhyAI() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="block font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4"
            >
              The Method
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl font-bold text-warm-black sm:text-5xl"
            >
              How We Teach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-4 text-warm-gray leading-relaxed max-w-sm"
            >
              Choose-your-own-adventure learning. The AI analyzes each
              child&apos;s level, then builds a program around their needs and
              interests — not a one-size-fits-all curriculum.
            </motion.p>
          </div>

          {/* Right — steps */}
          <div ref={ref}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border-t border-border py-8 last:border-b"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-mono text-sm text-stone-400 group-hover:text-teal transition-colors">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-warm-black group-hover:text-teal transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="ml-10 text-warm-gray leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * COMMENTED OUT: Original price comparison section ("A Better Way to Scale")
 *
 * const traditional = [
 *   { label: "Build a school", value: "$27K–80K" },
 *   { label: "Hire teachers", value: "Scarce" },
 *   { label: "Train staff", value: "Months" },
 *   { label: "Timeline", value: "Years" },
 *   { label: "Reaches", value: "1 community" },
 * ];
 *
 * const ours = [
 *   { label: "Install software", value: "Existing devices" },
 *   { label: "Train facilitators", value: "1–2 people" },
 *   { label: "Deploy", value: "Weeks" },
 *   { label: "Cost per child", value: "$12–50/yr" },
 *   { label: "Reaches", value: "Any community" },
 * ];
 */
