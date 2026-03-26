"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const paths = [
  {
    title: "Donate",
    description:
      "Fund a child's education. Every dollar goes directly to platform operations and deployment.",
    cta: "Donate Now",
    href: "/donate",
  },
  {
    title: "Partner With Us",
    description:
      "We're looking for grant organizations, corporate sponsors, and NGO partners.",
    cta: "Schedule a Conversation",
    href: "/contact",
  },
  {
    title: "Volunteer",
    description:
      "Are you a developer, educator, or Portuguese speaker? We need you.",
    cta: "Join the Team",
    href: "/contact?type=volunteer",
  },
];

export function GetInvolved() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-warm-white py-24 sm:py-32" id="get-involved">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="block font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4 text-center"
        >
          Take Action
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl font-bold text-warm-black sm:text-5xl text-center mb-6"
        >
          Get Involved
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-warm-gray mb-20 max-w-md mx-auto"
        >
          Three ways to help bring education to communities that need it most.
        </motion.p>

        <div ref={ref} className="space-y-0">
          {paths.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group grid grid-cols-1 gap-6 border-t border-border py-10 sm:grid-cols-[1fr_1.5fr_auto] sm:items-center"
            >
              <h3 className="font-serif text-2xl font-bold text-warm-black group-hover:text-teal transition-colors">
                {path.title}
              </h3>
              <p className="text-warm-gray leading-relaxed max-w-md">
                {path.description}
              </p>
              <Link
                href={path.href}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-border text-warm-gray hover:bg-warm-black hover:text-white h-10 px-6 text-sm rounded-full transition-all self-start sm:self-center"
                )}
              >
                {path.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
