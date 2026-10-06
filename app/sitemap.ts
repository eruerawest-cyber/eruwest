import type { MetadataRoute } from "next";
import { servicePath, services } from "@/lib/services";

export const dynamic = "force-static";

const SITE_URL = "https://eruwest.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/` },
    ...services.map((service) => ({
      url: `${SITE_URL}${servicePath(service.slug)}`,
    })),
  ];
}
