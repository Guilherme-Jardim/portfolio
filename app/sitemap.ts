import type { MetadataRoute } from "next";
import { projetos } from "@/data/projetos";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    ...projetos.map((p) => ({
      url: `${siteUrl}/projetos/${p.nome}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
