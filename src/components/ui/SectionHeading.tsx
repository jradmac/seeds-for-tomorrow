"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      {label && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-teal">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl font-bold text-warm-black sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-gray leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
