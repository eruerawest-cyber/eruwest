import LogoMark from "./LogoMark";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why-me", label: "Why me" },
  { href: "#contact", label: "Contact" },
  { href: "https://www.linkedin.com/in/eruwest/", label: "LinkedIn", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <LogoMark className="h-7 w-auto text-white" />
          <p className="text-sm text-gray-400">
            © ERU WEST · Strategy &amp; Communications · Tairāwhiti, Gisborne
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="rounded-md text-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
