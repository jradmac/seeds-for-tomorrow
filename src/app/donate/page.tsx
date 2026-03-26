"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Heart } from "lucide-react";

const tiers = [
  {
    id: "child",
    name: "Educate a Child",
    amount: 1,
    period: "/month",
    description: "Fund one child's AI-powered education for an entire month.",
    features: [
      "Personalized AI tutoring sessions",
      "Reading, writing & language lessons",
      "Progress tracking & assessments",
      "Monthly impact update",
    ],
    highlight: false,
  },
  {
    id: "platform",
    name: "Power the Platform",
    amount: 20,
    period: "/month",
    description:
      "Cover a full month of software infrastructure — the engine behind every lesson.",
    features: [
      "AI hosting & API costs for a month",
      "Device maintenance support",
      "Curriculum development",
      "Quarterly impact report",
    ],
    highlight: true,
  },
  {
    id: "founding",
    name: "Founding Donor",
    amount: 2000,
    period: "one-time",
    description:
      "Join our founding circle. Your name permanently tied to the launch that proved AI education works.",
    features: [
      "Listed as Founding Donor on our site",
      "Direct updates from the field",
      "Input on pilot priorities",
      "Invitation to annual impact review",
      "Tax-deductible receipt",
    ],
    highlight: false,
  },
];

const customAmounts = [5, 10, 25, 50, 100];

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<number | null>(null);
  const [customInput, setCustomInput] = useState("");

  function handleDonate() {
    // Phase 2: integrate with Stripe/Donorbox
    const amount = selectedTier
      ? tiers.find((t) => t.id === selectedTier)?.amount
      : customAmount || Number(customInput);
    alert(
      `Donation processing coming soon! Amount: $${amount}. Thank you for your generosity.`
    );
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
            Every dollar goes directly to platform operations, community
            deployment, and expanding access. Choose how you want to help.
          </motion.p>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-warm-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.button
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => {
                  setSelectedTier(tier.id);
                  setCustomAmount(null);
                  setCustomInput("");
                }}
                className={cn(
                  "relative text-left rounded-2xl border-2 p-8 transition-all hover:-translate-y-1",
                  selectedTier === tier.id
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

                {selectedTier === tier.id && (
                  <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-teal">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}

                <h3 className="font-serif text-xl font-bold text-warm-black">
                  {tier.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-bold text-warm-black">
                    ${tier.amount.toLocaleString()}
                  </span>
                  <span className="text-sm text-warm-gray">{tier.period}</span>
                </div>

                <p className="mt-4 text-sm text-warm-gray leading-relaxed">
                  {tier.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-warm-gray"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.button>
            ))}
          </div>

          {/* Custom amount */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-16 max-w-2xl"
          >
            <div className="border-t border-border pt-12">
              <h3 className="text-center font-serif text-xl font-bold text-warm-black mb-6">
                Or choose your own amount
              </h3>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {customAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setCustomAmount(amount);
                      setSelectedTier(null);
                      setCustomInput("");
                    }}
                    className={cn(
                      "rounded-full px-5 py-2 text-sm font-medium transition-all",
                      customAmount === amount
                        ? "bg-teal text-white"
                        : "border border-border bg-white text-warm-gray hover:border-teal/50"
                    )}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-gray font-mono">
                    $
                  </span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Other"
                    value={customInput}
                    onChange={(e) => {
                      setCustomInput(e.target.value);
                      setCustomAmount(null);
                      setSelectedTier(null);
                    }}
                    className="h-11 w-32 rounded-lg border border-border bg-white pl-7 pr-3 text-sm font-mono text-warm-black outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-12 max-w-md text-center"
          >
            <Button
              onClick={handleDonate}
              disabled={!selectedTier && !customAmount && !customInput}
              className="bg-teal hover:bg-teal-dark text-white font-semibold h-12 px-10 text-base rounded-full w-full sm:w-auto disabled:opacity-40"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
            <p className="mt-4 text-xs text-warm-gray">
              Secure payment processing. Tax-deductible where applicable.
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
