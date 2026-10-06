import Link from "next/link";
import Arrow from "./Arrow";
import Eyebrow from "./Eyebrow";
import OfferCard from "./OfferCard";
import ServiceIcon from "./ServiceIcon";
import { servicePath, services } from "@/lib/services";

export default function WhatIOffer() {
  const core = services.filter((service) => service.slug !== "ai-visibility");
  const ai = services.find((service) => service.slug === "ai-visibility")!;

  return (
    <section id="services" className="scroll-mt-20 bg-bg-light">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-ink md:text-4xl">
            What working together can look like
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            You might need a clearer plan, help keeping content moving, or
            someone to work through a specific challenge. We can start with a
            focused project or agree an ongoing rhythm of support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {core.map((service) => (
            <OfferCard key={service.slug} service={service} />
          ))}
        </div>

        <article className="group relative mt-6 flex flex-col gap-6 rounded-xl border border-teal-muted bg-white p-8 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-teal-accent md:flex-row md:items-center md:gap-8 md:px-10">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-primary text-white">
            <ServiceIcon slug={ai.slug} />
          </span>
          <div className="flex-1">
            <h3 className="font-serif text-xl font-bold text-ink">
              <Link
                href={servicePath(ai.slug)}
                className="focus:outline-none after:absolute after:inset-0 after:rounded-xl"
              >
                {ai.name}
              </Link>
            </h3>
            <p className="mt-3 font-medium text-ink">{ai.summaryLead}</p>
            <p className="mt-2 leading-relaxed text-muted">{ai.summary}</p>
          </div>
          <p className="flex shrink-0 items-center gap-2 text-sm font-semibold text-teal-accent">
            <span>Learn more</span>
            <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </p>
        </article>
      </div>
    </section>
  );
}
