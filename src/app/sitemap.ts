import type { MetadataRoute } from "next";
import { site } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/terms", "/privacy"].map((p) => ({ url: site.url + p, lastModified: new Date() }));
}
