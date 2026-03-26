"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-teal-light font-medium">
        Thank you! You&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-stone-800 border-stone-700 text-white placeholder:text-stone-500 h-9"
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className="bg-amber hover:bg-amber-dark text-warm-black font-semibold h-9 px-4 shrink-0"
      >
        {status === "loading" ? "..." : "Subscribe"}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-400 mt-1">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
