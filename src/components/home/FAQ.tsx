"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is this different from Khan Academy or Duolingo?",
    answer:
      "Those tools supplement existing schools. We serve communities where schools don't function or don't exist. Our AI doesn't assume a child has a teacher, a curriculum, or internet at home.",
  },
  {
    question: "Why AI instead of real teachers?",
    answer:
      "We're not anti-teacher. We're pro-education. In communities with zero qualified teachers, an AI tutor that speaks their language and adapts to their level is infinitely better than nothing.",
  },
  {
    question: "Does this work offline?",
    answer:
      "We're building toward offline capability. Phase 1 requires internet. Phase 2 will explore running smaller AI models directly on devices.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "AI platform costs (API, hosting), device maintenance, community facilitator stipends, and expansion to new communities. We publish our spending openly.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Reading level assessments, English proficiency benchmarks, session engagement data, and long-term tracking of educational outcomes.",
  },
];

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-warm-black py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="block font-mono text-xs uppercase tracking-[0.3em] text-teal-light mb-4 text-center"
        >
          FAQ
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl font-bold text-white sm:text-5xl text-center mb-16"
        >
          Questions We Get Asked
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Accordion defaultValue={[]} className="space-y-0">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                className="border-t border-stone-800 last:border-b last:border-stone-800 px-0 data-open:pb-2"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-semibold text-stone-200 hover:text-teal-light hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-stone-400 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
