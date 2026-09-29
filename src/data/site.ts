// Site-wide settings used for SEO (metadata, sitemap and robots).
// Change productionUrl if the site ever moves to a different domain.
export const site = {
  name: "Ride Dynamics",
  productionUrl: "https://ridedynamics.com.au",
  // The original site uses this same title on every page.
  homeTitle: "Motorcycle Suspension Specialist | Ride Dynamics",
};

// Vercel sets VERCEL_ENV to "production", "preview" or "development".
// Only the real production deployment should be indexed by search
// engines, so preview builds do not compete with the live site.
// Running outside Vercel, we fall back to Next's own NODE_ENV.
export const isProduction = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";
