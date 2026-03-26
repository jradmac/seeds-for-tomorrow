"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    availability: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal/20 bg-teal/5 p-10 text-center">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-teal" />
        <h3 className="font-serif text-2xl font-bold text-warm-black">
          Welcome Aboard!
        </h3>
        <p className="mt-2 text-warm-gray">
          Thank you for volunteering. We&apos;ll reach out with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="volName" className="mb-1.5 block text-sm font-medium text-warm-black">
            Name *
          </label>
          <Input
            id="volName"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="h-11"
          />
        </div>
        <div>
          <label htmlFor="volEmail" className="mb-1.5 block text-sm font-medium text-warm-black">
            Email *
          </label>
          <Input
            id="volEmail"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-11"
          />
        </div>
      </div>

      <div>
        <label htmlFor="skills" className="mb-1.5 block text-sm font-medium text-warm-black">
          Skills & Expertise
        </label>
        <Input
          id="skills"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          placeholder="e.g., Software development, Teaching, Portuguese translation"
          className="h-11"
        />
      </div>

      <div>
        <label htmlFor="availability" className="mb-1.5 block text-sm font-medium text-warm-black">
          Availability
        </label>
        <Input
          id="availability"
          value={formData.availability}
          onChange={(e) =>
            setFormData({ ...formData, availability: e.target.value })
          }
          placeholder="e.g., 5 hours/week, weekends only"
          className="h-11"
        />
      </div>

      <div>
        <label htmlFor="volMessage" className="mb-1.5 block text-sm font-medium text-warm-black">
          Message
        </label>
        <Textarea
          id="volMessage"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about yourself and why you'd like to help."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="bg-teal hover:bg-teal-dark text-white font-semibold h-11 px-8"
      >
        {status === "loading" ? "Submitting..." : "Join the Team"}
      </Button>
    </form>
  );
}
