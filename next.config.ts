import type { NextConfig } from "next";
import { legacyImageRedirects } from "./src/data/legacy-image-redirects";

// The old website used addresses ending in .html, and its pictures had
// different file names. Those links still exist out on the web and in
// Google's index, so each one is sent to its new home.
//
// We use permanent (308) redirects rather than rewrites so that search
// engines move their records across to the new address instead of listing
// the same thing twice.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The seven pages of the old website.
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/k-tech.html", destination: "/suspension-parts", permanent: true },
      { source: "/accossato.html", destination: "/brake-components", permanent: true },
      { source: "/rock-oil.html", destination: "/lubricants", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },

      // Its pictures, which were renamed during the move.
      // The list lives in src/data/legacy-image-redirects.ts.
      ...legacyImageRedirects.map((image) => ({
        source: image.from,
        destination: image.to,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
