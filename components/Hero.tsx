import EMonogram from "./EMonogram";
import Eyebrow from "./Eyebrow";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-teal-primary">
      <EMonogram className="pointer-events-none absolute -right-16 top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 text-white opacity-[0.06] lg:block" />
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        <div className="max-w-2xl">
          <Eyebrow variant="white">
            Strategy &amp; Communications · Tairāwhiti
          </Eyebrow>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
            Communications that cut through, without the agency overhead.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-teal-muted">
            I help organisations strengthen their communication methodologies.
            Senior strategy and hands-on delivery, with a calm approach and a
            strong focus on getting things done.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-teal-primary transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-primary"
            >
              Book a free chat
            </a>
            <a
              href="#services"
              className="rounded-lg border border-white px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-primary"
            >
              See what I offer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
