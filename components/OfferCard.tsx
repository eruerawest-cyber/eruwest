import Link from "next/link";
import Arrow from "./Arrow";
import ServiceIcon from "./ServiceIcon";
import { servicePath, type Service } from "@/lib/services";

export default function OfferCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex flex-col rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-teal-accent">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-accent text-white">
        <ServiceIcon slug={service.slug} />
      </span>
      <h3 className="mt-5 font-serif text-xl font-bold text-ink">
        <Link
          href={servicePath(service.slug)}
          className="focus:outline-none after:absolute after:inset-0 after:rounded-xl"
        >
          {service.name}
        </Link>
      </h3>
      <p className="mt-3 font-medium text-ink">{service.summaryLead}</p>
      <p className="mt-2 leading-relaxed text-muted">{service.summary}</p>
      <p className="mt-6 flex items-center gap-2 pt-1 text-sm font-semibold text-teal-accent md:mt-auto md:pt-6">
        <span>Learn more</span>
        <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </p>
    </article>
  );
}
