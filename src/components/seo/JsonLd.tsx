import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from "@/lib/constants";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "AI-powered education for children in underserved communities worldwide.",
    email: CONTACT_EMAIL,
    areaServed: {
      "@type": "Place",
      name: "Rio de Janeiro, Brazil",
    },
    foundingDate: "2024",
    nonprofitStatus: "Nonprofit501c3",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
