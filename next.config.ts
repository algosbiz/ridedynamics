import type { NextConfig } from "next";

// The old website used addresses ending in .html. Those links still exist
// out on the web, so each one is redirected to its new clean address.
//
// We use a permanent (301) redirect rather than a rewrite so that search
// engines move their records across to the new address instead of listing
// the same page twice, once under each address.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/k-tech.html", destination: "/suspension-parts", permanent: true },
      { source: "/accossato.html", destination: "/brake-components", permanent: true },
      { source: "/rock-oil.html", destination: "/lubricants", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
