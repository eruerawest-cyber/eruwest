import Link from "next/link";
import LogoMark from "./LogoMark";
import { servicePath, services } from "@/lib/services";

const links = [
  { href: "/#why-me", label: "Why me" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "#contact", label: "Contact" },
  { href: "https://www.linkedin.com/in/eruwest/", label: "LinkedIn", external: true },
];

const linkClass =
  "rounded-md text-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <nav aria-label="Services">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Services
            </p>
            <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={servicePath(service.slug)} className={linkClass}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end md:pt-8">
              {links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-8">
          <LogoMark className="h-7 w-auto text-white" />
          <p className="text-sm text-gray-400">
            © ERU WEST · Strategy &amp; Communications · Tairāwhiti, Gisborne
          </p>
        </div>
      </div>
    </footer>
  );
}
