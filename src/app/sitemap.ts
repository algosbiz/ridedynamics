import type { MetadataRoute } from "next";
import { aboutGallery } from "@/data/about";
import { brakesDetailImages, brakesLogo, brakesMainImages } from "@/data/brakes";
import { homeCategories } from "@/data/home";
import {
  lubricantsLogo,
  lubricantsProductsImage,
  lubricantsSideImages,
} from "@/data/lubricants";
import { navItems } from "@/data/navigation";
import { servicesBottomImages, servicesSideImages } from "@/data/services";
import { site } from "@/data/site";
import {
  suspensionBottomImages,
  suspensionLogo,
  suspensionSideImages,
  suspensionSpringsImage,
} from "@/data/suspension";

// Next.js turns this file into /sitemap.xml automatically.
// The list of pages comes from the same menu as the header, so adding a
// page to src/data/navigation.ts also adds it to the sitemap.

const SUSPENSION_UNIT = "/images/common/suspension-unit.png";

// The badge in the footer appears on every page.
const imagesOnEveryPage = ["/images/logo/ride-dynamics-logo-small.png"];

// The pictures each page shows. The old website listed its pictures in
// its sitemap too, so we keep doing that after the move - it helps them
// stay in Google Images.
const imagesByPage: Record<string, string[]> = {
  "/": [
    "/images/logo/ride-dynamics-logo.png",
    "/images/common/contact-details.png",
    "/images/home/ride-dynamics-racing-suspension-gold-coast.jpg",
    ...homeCategories.map((category) => category.image),
  ],
  "/about": [
    "/images/about/ride-dynamics-emblem.png",
    "/images/about/ride-dynamics-workshop.png",
    ...aboutGallery.map((image) => image.src),
  ],
  "/services": [
    ...servicesSideImages.map((image) => image.src),
    ...servicesBottomImages.map((image) => image.src),
  ],
  "/suspension-parts": [
    suspensionLogo.src,
    SUSPENSION_UNIT,
    ...suspensionSideImages.map((image) => image.src),
    ...suspensionBottomImages.map((image) => image.src),
    suspensionSpringsImage.src,
  ],
  "/brake-components": [
    brakesLogo.src,
    SUSPENSION_UNIT,
    ...brakesMainImages.map((image) => image.src),
    ...brakesDetailImages.map((image) => image.src),
  ],
  "/lubricants": [
    lubricantsLogo.src,
    SUSPENSION_UNIT,
    ...lubricantsSideImages.map((image) => image.src),
    lubricantsProductsImage.src,
  ],
  "/contact": [
    "/images/logo/ride-dynamics-logo.png",
    "/images/common/contact-details.png",
  ],
};

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: item.href === "/" ? site.productionUrl : `${site.productionUrl}${item.href}`,
    lastModified: new Date(),
    // The old sitemap used these same two values on every page.
    changeFrequency: "weekly" as const,
    priority: 0.5,
    images: [...(imagesByPage[item.href] ?? []), ...imagesOnEveryPage].map(
      (path) => `${site.productionUrl}${path}`,
    ),
  }));
}
