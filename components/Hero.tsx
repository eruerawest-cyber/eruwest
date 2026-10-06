import EMonogram from "./EMonogram";
import Eyebrow from "./Eyebrow";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-teal-primary">
      <EMonogram className="pointer-events-none absolute -right-16 top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 text-white opacity-[0.06] lg:block" />
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        <div className="max-w-3xl">
          <Eyebrow variant="white">
            Strategy &amp; Communications · Tairāwhiti
          </Eyebrow>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
            Clear communications, from strategy to delivery.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-teal-muted">
            I help organisations make sense of their communications and get the
            work done. Senior advice, hands-on support and practical systems,
            shaped around your priorities and your team&rsquo;s capacity.
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
              Explore my services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
