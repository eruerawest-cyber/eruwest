import EMonogram from "./EMonogram";

export default function CTABand() {
  return (
    <section id="contact" className="scroll-mt-20 bg-bg-light">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-teal-primary px-8 py-12 md:px-14 md:py-16">
          <EMonogram className="pointer-events-none absolute -right-10 top-1/2 hidden h-[320px] w-[320px] -translate-y-1/2 text-white opacity-[0.06] md:block" />
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
              Let&rsquo;s talk about your communications.
            </h2>
            <p className="mt-5 leading-relaxed text-teal-muted">
              If you&rsquo;re stretched, unsure where to focus, or just want a
              steady pair of hands, get in touch for a free, no-obligation
              chat.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:kiaora@eruwest.com"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-teal-primary transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-primary"
              >
                kiaora@eruwest.com
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
