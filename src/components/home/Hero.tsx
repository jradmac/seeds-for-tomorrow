"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative mt-16 flex min-h-[75vh] items-center justify-center overflow-hidden bg-warm-black">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-bottom"
      >
        <source src="/images/rio.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-warm-black/60" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="mb-6 inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.3em] text-teal-light">
            AI-Powered Education
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl font-bold leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          The School That
          <br />
          <span className="bg-gradient-to-r from-amber-light to-amber bg-clip-text text-transparent">
            Comes to Them
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-teal-light to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mx-auto mt-6 max-w-xl text-lg text-stone-400 sm:text-xl"
        >
          AI-powered education for communities where resources fall short and
          potential goes untapped.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="#get-involved"
            className={cn(
              buttonVariants({}),
              "bg-white text-warm-black hover:bg-stone-100 font-medium h-12 px-8 text-sm tracking-wide rounded-full"
            )}
          >
            Support the Mission
          </Link>
          <Link
            href="#how-it-works"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-stone-700 text-teal-light hover:bg-white/5 hover:text-white h-12 px-8 text-sm tracking-wide rounded-full"
            )}
          >
            See How It Works
            <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="h-10 w-[1px] bg-gradient-to-b from-stone-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
