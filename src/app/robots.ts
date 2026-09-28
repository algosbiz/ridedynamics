import type { MetadataRoute } from "next";
import { isProduction, site } from "@/data/site";

// Next.js turns this file into /robots.txt automatically.
// Only the real production site invites search engines in; preview and
// local builds are closed off so they never show up in search results
// as a duplicate copy of the live site.
export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.productionUrl}/sitemap.xml`,
  };
}
