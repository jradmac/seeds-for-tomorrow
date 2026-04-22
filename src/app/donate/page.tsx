"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Heart } from "lucide-react";

const tiers = [
  {
    amount: 2000,
    url: "https://buy.stripe.com/fZu6oH5ve0wIdL34073Ru03",
    description: "Seed the work.",
  },
  {
    amount: 3000,
    url: "https://buy.stripe.com/28EfZhaPybbm36p0NV3Ru02",
    description: "Extend our reach.",
  },
  {
    amount: 4000,
    url: "https://buy.stripe.com/4gMeVd4ra5R2gXf7cj3Ru01",
    description: "Fund a full cohort.",
    highlight: true,
  },
  {
    amount: 5000,
    url: "https://buy.stripe.com/aFaeVd6zigvG5ex7cj3Ru00",
    description: "Launch a new site.",
  },
];

export default function DonatePage() {
  const [selected, setSelected] = useState<number | null>(null);

  const selectedTier = tiers.find((t) => t.amount === selected);

  function handleDonate() {
    if (!selectedTier) return;
    window.location.href = selectedTier.url;
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-warm-black py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-teal-light"
          >
            Donate
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            Fund the Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-4 max-w-xl text-stone-400 text-lg"
          >
            Choose an amount below. Every dollar goes directly to platform
            operations, community deployment, and expanding access.
          </motion.p>
        </div>
      </section>

      {/* Amount selection */}
      <section className="bg-warm-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier, i) => (
              <motion.button
                key={tier.amount}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelected(tier.amount)}
                className={cn(
                  "relative rounded-2xl border-2 p-8 text-left transition-all hover:-translate-y-1",
                  selected === tier.amount
                    ? "border-teal bg-teal/5 shadow-lg"
                    : tier.highlight
                      ? "border-amber/30 bg-white shadow-md"
                      : "border-border bg-white hover:border-stone-300"
                )}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-amber px-3 py-0.5 text-xs font-semibold text-warm-black">
                    Most Impact
                  </span>
                )}

                {selected === tier.amount && (
                  <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-teal">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}

                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-bold text-warm-black">
                    ${tier.amount.toLocaleString()}
                  </span>
                </div>

                <p className="mt-3 text-sm text-warm-gray leading-relaxed">
                  {tier.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-12 max-w-md text-center"
          >
            <Button
              onClick={handleDonate}
              disabled={!selected}
              className="bg-teal hover:bg-teal-dark text-white font-semibold h-12 px-10 text-base rounded-full w-full sm:w-auto disabled:opacity-40"
            >
              <Heart className="mr-2 h-5 w-5" />
              {selected
                ? `Donate $${selected.toLocaleString()}`
                : "Select an amount"}
            </Button>
            <p className="mt-4 text-xs text-warm-gray">
              Secure payment processing via Stripe. Tax-deductible where
              applicable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-warm-black py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-serif text-xl text-stone-200 italic">
            &ldquo;Every dollar goes directly to platform operations and
            community deployment. We publish our spending openly.&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-stone-700" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-stone-500">
              Full transparency, always
            </span>
            <div className="h-px w-12 bg-stone-700" />
          </div>
        </div>
      </section>
    </div>
  );
}
