"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const orgTypes = [
  "Foundation / Grant Org",
  "Corporation",
  "NGO",
  "Government",
  "Academic",
  "Other",
];

const helpOptions = [
  "Funding",
  "Technology",
  "Curriculum Development",
  "Deployment / Logistics",
  "Research / Evaluation",
  "Other",
];

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    organizationType: orgTypes[0],
    helpTypes: [] as string[],
    message: "",
  });

  function toggleHelp(option: string) {
    setFormData((prev) => ({
      ...prev,
      helpTypes: prev.helpTypes.includes(option)
        ? prev.helpTypes.filter((h) => h !== option)
        : [...prev.helpTypes, option],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/partner", {
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
          Inquiry Received!
        </h3>
        <p className="mt-2 text-warm-gray">
          We&apos;re excited to explore a partnership. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="orgName" className="mb-1.5 block text-sm font-medium text-warm-black">
            Organization Name *
          </label>
          <Input
            id="orgName"
            required
            value={formData.organizationName}
            onChange={(e) =>
              setFormData({ ...formData, organizationName: e.target.value })
            }
            className="h-11"
          />
        </div>
        <div>
          <label htmlFor="contactName" className="mb-1.5 block text-sm font-medium text-warm-black">
            Contact Name *
          </label>
          <Input
            id="contactName"
            required
            value={formData.contactName}
            onChange={(e) =>
              setFormData({ ...formData, contactName: e.target.value })
            }
            className="h-11"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="partnerEmail" className="mb-1.5 block text-sm font-medium text-warm-black">
            Email *
          </label>
          <Input
            id="partnerEmail"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-11"
          />
        </div>
        <div>
          <label htmlFor="orgType" className="mb-1.5 block text-sm font-medium text-warm-black">
            Organization Type
          </label>
          <select
            id="orgType"
            value={formData.organizationType}
            onChange={(e) =>
              setFormData({ ...formData, organizationType: e.target.value })
            }
            className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {orgTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-warm-black">
          How would you like to help?
        </legend>
        <div className="flex flex-wrap gap-2">
          {helpOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => toggleHelp(option)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                formData.helpTypes.includes(option)
                  ? "bg-teal text-white"
                  : "border border-border bg-white text-warm-gray hover:border-teal/50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="partnerMessage" className="mb-1.5 block text-sm font-medium text-warm-black">
          Message
        </label>
        <Textarea
          id="partnerMessage"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your organization and how you'd like to collaborate."
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
        {status === "loading" ? "Submitting..." : "Submit Partnership Inquiry"}
      </Button>
    </form>
  );
}
