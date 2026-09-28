import type { MetadataRoute } from "next";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";

// Next.js turns this file into /sitemap.xml automatically.
// It is built from the same menu list as the header, so adding a page to
// src/data/navigation.ts also adds it to the sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: item.href === "/" ? site.productionUrl : `${site.productionUrl}${item.href}`,
    lastModified: new Date(),
  }));
}
