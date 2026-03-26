"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-black border-b border-stone-800/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="font-serif text-lg font-bold text-white">
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-stone-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#get-involved"
            className={cn(
              buttonVariants({}),
              "bg-white text-warm-black hover:bg-stone-200 font-medium px-5 h-9 text-sm rounded-full"
            )}
          >
            Support
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-stone-400 hover:text-white"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-stone-800/50 bg-warm-black md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-base text-stone-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#get-involved"
              onClick={() => setMobileOpen(false)}
              className={cn(
                buttonVariants({}),
                "mt-3 bg-white text-warm-black hover:bg-stone-200 font-medium h-10 rounded-full"
              )}
            >
              Support the Mission
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
