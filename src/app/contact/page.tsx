import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { Separator } from "@/components/ui/separator";
import { CONTACT_EMAIL } from "@/lib/constants";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Seeds for Tomorrow. Reach out about partnerships, volunteering, donations, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            label="Contact"
            title="Let's Talk"
            description="Whether you want to partner, volunteer, or just learn more — we'd love to hear from you."
          />

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex items-center gap-2 text-warm-gray">
              <Mail className="h-4 w-4 text-teal" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm hover:text-teal transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="hidden sm:block text-border">|</div>
            <div className="flex items-center gap-2 text-warm-gray">
              <MapPin className="h-4 w-4 text-teal" />
              <span className="text-sm">Rio de Janeiro, Brazil</span>
            </div>
          </div>
        </div>
      </section>

      {/* General Contact */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-2xl font-bold text-warm-black">
            General Contact
          </h2>
          <ContactForm />
        </div>
      </section>

      <Separator className="mx-auto max-w-2xl" />

      {/* Partnership Inquiry */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 font-serif text-2xl font-bold text-warm-black">
            Partnership Inquiry
          </h2>
          <p className="mb-8 text-warm-gray">
            For foundations, corporations, NGOs, and organizations interested in
            collaboration.
          </p>
          <PartnerForm />
        </div>
      </section>

      <Separator className="mx-auto max-w-2xl" />

      {/* Volunteer Signup */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 font-serif text-2xl font-bold text-warm-black">
            Volunteer With Us
          </h2>
          <p className="mb-8 text-warm-gray">
            Developers, educators, translators, and anyone passionate about
            educational access.
          </p>
          <VolunteerForm />
        </div>
      </section>
    </div>
  );
}
