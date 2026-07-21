import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#technology`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/#about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/#contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
  ];
}
