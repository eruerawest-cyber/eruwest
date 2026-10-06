import EMonogram from "./EMonogram";
import { CONTACT_EMAIL } from "@/lib/services";

export default function CTABand({
  heading = "Let’s talk about your communications.",
  text = "If you’re stretched, unsure where to focus, or have a project in mind, get in touch for a free, no-obligation chat.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section id="contact" className="scroll-mt-20 bg-bg-light">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-teal-primary px-8 py-12 md:px-14 md:py-16">
          <EMonogram className="pointer-events-none absolute -right-10 top-1/2 hidden h-[320px] w-[320px] -translate-y-1/2 text-white opacity-[0.06] md:block" />
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
              {heading}
            </h2>
            <p className="mt-5 leading-relaxed text-teal-muted">{text}</p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-teal-primary transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-primary"
              >
                {CONTACT_EMAIL}
              </a>
              <span className="text-sm font-medium text-teal-muted">
                Tairāwhiti · Gisborne
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
