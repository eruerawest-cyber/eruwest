"use client";

import { useState } from "react";
import LogoMark from "./LogoMark";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why-me", label: "Why me" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:ring-offset-2"
        >
          <LogoMark />
          <span className="font-serif text-lg font-bold tracking-wide text-ink">
            ERU WEST
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md text-sm font-medium text-muted transition-colors hover:text-teal-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:kiaora@eruwest.com"
            className="rounded-lg bg-teal-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:ring-offset-2"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-ink md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md text-base font-medium text-muted hover:text-teal-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:kiaora@eruwest.com"
              className="rounded-lg bg-teal-primary px-5 py-2.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
