import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getService, servicePath, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

// One static page per service in lib/services.ts.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.label,
    description: service.metaDescription,
    alternates: { canonical: servicePath(service.slug) },
    openGraph: {
      title: `${service.label} · Eru West`,
      description: service.metaDescription,
      url: servicePath(service.slug),
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return <ServicePage service={service} />;
}
