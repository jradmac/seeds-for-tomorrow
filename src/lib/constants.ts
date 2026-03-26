export const SITE_NAME = "Seeds for Tomorrow";
export const SITE_DESCRIPTION =
  "AI-powered learning for children the school system will never reach. Starting in Rio de Janeiro.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://seedsfortomorrow.org";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Get Involved", href: "/#get-involved" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  instagram: "#",
  linkedin: "#",
  twitter: "#",
} as const;

export const CONTACT_EMAIL = "hello@seedsfortomorrow.org";
