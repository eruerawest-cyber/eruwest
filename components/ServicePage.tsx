import Link from "next/link";
import Arrow from "./Arrow";
import CTABand from "./CTABand";
import EMonogram from "./EMonogram";
import Eyebrow from "./Eyebrow";
import Footer from "./Footer";
import Nav from "./Nav";
import ServiceIcon from "./ServiceIcon";
import {
  CONTACT_EMAIL,
  getService,
  servicePath,
  type Service,
} from "@/lib/services";

const h2 = "font-serif text-2xl font-bold leading-tight text-ink md:text-3xl";

function Blocks({ blocks }: { blocks: Service["blocks"] }) {
  return (
    <>
      {blocks.map((block) => (
        <div key={block.heading}>
          <h2 className={h2}>{block.heading}</h2>
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </>
  );
}

export default function ServicePage({ service }: { service: Service }) {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Free chat: ${service.label}`
  )}`;
  const related = service.related
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item));
  const hasParts = Boolean(service.help.parts);

  return (
    <>
      <Nav />
      <main>
        {/* Label, headline, introduction and primary action */}
        <section className="relative overflow-hidden bg-teal-primary">
          <EMonogram className="pointer-events-none absolute -right-16 top-1/2 hidden h-[400px] w-[400px] -translate-y-1/2 text-white opacity-[0.06] lg:block" />
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
            <div className="max-w-2xl">
              <Eyebrow variant="white">{service.label}</Eyebrow>
              <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
                {service.headline}
              </h1>
              {service.intro.map((paragraph, i) => (
                <p
                  key={paragraph}
                  className={`${
                    i === 0 ? "mt-6" : "mt-4"
                  } text-lg leading-relaxed text-teal-muted`}
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-8">
                <a
                  href={mailto}
                  className="inline-block rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-teal-primary transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-primary"
                >
                  Book a free chat
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What I can help with, and what you receive or how we work */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
            {hasParts ? (
              <>
                <h2 className={h2}>{service.help.heading}</h2>
                {service.help.intro && (
                  <p className="mt-4 leading-relaxed text-muted">
                    {service.help.intro}
                  </p>
                )}
                <ol className="mt-8 grid gap-6 md:grid-cols-3">
                  {service.help.parts!.map((part, i) => (
                    <li key={part.title} className="rounded-xl bg-bg-light p-8">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-primary font-serif text-lg font-bold text-white"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <h3 className="mt-5 font-serif text-xl font-bold text-ink">
                        {part.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted">
                        {part.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </>
            ) : (
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <div>
                  <h2 className={h2}>{service.help.heading}</h2>
                  <ul className="mt-6 space-y-4">
                    {service.help.items?.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-accent/10 text-teal-accent">
                          <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </span>
                        <span className="leading-relaxed text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-10">
                  <Blocks blocks={service.blocks} />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Process steps, where a service has them */}
        {service.steps && (
          <section className="bg-bg-light">
            <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
              <h2 className={h2}>{service.steps.heading}</h2>
              <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {service.steps.items.map((step, i) => (
                  <li key={step.title} className="flex gap-4 lg:block">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-primary font-serif text-lg font-bold text-white"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-ink lg:mt-4">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted lg:mt-2">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              {service.steps.note && (
                <p className="mt-8 leading-relaxed text-muted">
                  {service.steps.note}
                </p>
              )}
              {hasParts && service.blocks.length > 0 && (
                <div className="mt-12 border-t border-teal-muted pt-12">
                  <div className="max-w-2xl space-y-10">
                    <Blocks blocks={service.blocks} />
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Short questions and answers, where a service has them */}
        {service.faqs && (
          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
              <h2 className={h2}>Common questions</h2>
              <dl className="mt-8 grid gap-8 md:grid-cols-3">
                {service.faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="font-serif text-lg font-bold text-ink">
                      {faq.question}
                    </dt>
                    <dd className="mt-3 leading-relaxed text-muted">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* Links to relevant other services */}
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-accent">
              Related services
            </h2>
            <ul
              className={`mt-6 grid gap-6 ${
                related.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {related.map((item) => (
                <li
                  key={item.slug}
                  className="group relative flex items-start gap-4 rounded-xl bg-bg-light p-6 transition-shadow hover:shadow-sm focus-within:ring-2 focus-within:ring-teal-accent"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-accent text-white">
                    <ServiceIcon slug={item.slug} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-ink">
                      <Link
                        href={servicePath(item.slug)}
                        className="focus:outline-none after:absolute after:inset-0 after:rounded-xl"
                      >
                        {item.name}
                      </Link>
                      <Arrow className="h-4 w-4 text-teal-accent transition-transform group-hover:translate-x-1" />
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.summaryLead}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTABand heading={service.closing.heading} text={service.closing.text} />
      </main>
      <Footer />
    </>
  );
}
