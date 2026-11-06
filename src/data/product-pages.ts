import type { PageImage } from "@/types";
import {
  suspensionBottomImages,
  suspensionLogo,
  suspensionParagraphs,
  suspensionSideImages,
  suspensionSpringsImage,
} from "@/data/suspension";
import {
  brakesDetailImages,
  brakesLogo,
  brakesMainImages,
  brakesParagraphs,
} from "@/data/brakes";
import {
  lubricantsLogo,
  lubricantsParagraphs,
  lubricantsProductsImage,
  lubricantsSideImages,
} from "@/data/lubricants";

// How the three product pages are laid out in the redesign.
//
// The long wording still lives in suspension.ts, brakes.ts and
// lubricants.ts and is used unchanged. What is added here is only the
// short text the new layout needs (a one-line lead, spec rows, FAQ), and
// every fact in it is taken from those same paragraphs or from the
// Services page - nothing new is claimed.

export type ProductPageContent = {
  title: string; // the page's h1
  brand: string;
  model: "suspension" | "brake" | "lubricants";
  modelFallback: PageImage; // shown until the 3D files exist
  logo: PageImage;
  logoOnDark: boolean; // the logo file has its own black background
  lead: string;
  story: string[];
  storeLine: string; // the "go to our online store" sentence
  range: { image: PageImage; title: string; kicker: string }[];
  gallery: PageImage[];
  specs: { label: string; value: string }[];
  faq: { question: string; answer: string }[];
};

const lastOf = (list: string[]) => list[list.length - 1];

export const suspensionPage: ProductPageContent = {
  title: "Suspension Parts",
  brand: "K-Tech",
  model: "suspension",
  modelFallback: {
    src: "/images/home/category-suspension-parts.png",
    alt: "K-Tech forks and rear shock absorber",
    width: 184,
    height: 281,
  },
  logo: suspensionLogo,
  logoOnDark: false,
  lead: "Championship winning forks, shocks, springs and cartridges for road bikes, dirt bikes and cruisers.",
  story: suspensionParagraphs.slice(0, -1),
  storeLine: lastOf(suspensionParagraphs),
  range: [
    { image: suspensionSideImages[0], title: "Rear shock absorbers", kicker: "Shocks" },
    { image: suspensionSideImages[1], title: "Fork internals", kicker: "Forks" },
    { image: suspensionSideImages[2], title: "Fork cartridges", kicker: "Cartridges" },
    { image: suspensionSpringsImage, title: "Suspension springs", kicker: "Springs" },
  ],
  gallery: suspensionBottomImages,
  specs: [
    { label: "Brand", value: "K-Tech Suspension" },
    { label: "Track record", value: "Over 20 years in global road racing and motocross championships" },
    { label: "Race series", value: "ASBK, NZSBK, BSB, Moto America, WSS and motocross worldwide" },
    { label: "Made for", value: "Road bikes, dirt bikes and cruisers" },
    { label: "Quality", value: "ISO9001 accredited" },
    { label: "Fitted by", value: "Ride Dynamics, Gold Coast suspension tuning shop" },
  ],
  faq: [
    {
      question: "Why does Ride Dynamics stock K-Tech?",
      answer:
        "After many years using multiple brands of suspension we got to know the pros and cons of each brand. When the time came to make the choice, there was only one to be made: K-Tech, for its uncompromising approach and relentless evolution.",
    },
    {
      question: "Is K-Tech only for racing?",
      answer:
        "No. K-Tech offers the same know how and technology to riders of road bikes, dirt bikes and cruisers.",
    },
    {
      question: "Can Ride Dynamics fit and set up the parts?",
      answer:
        "Yes. Ride Dynamics is first and foremost a suspension tuning shop, with full front fork and rear shock maintenance, repairs, upgrades and alterations. See the Services page for the full list.",
    },
  ],
};

export const brakesPage: ProductPageContent = {
  title: "Brake Components",
  brand: "Accossato",
  model: "brake",
  modelFallback: {
    src: "/images/home/category-brake-components.png",
    alt: "Accossato brake components and controls",
    width: 184,
    height: 281,
  },
  logo: brakesLogo,
  logoOnDark: true,
  lead: "Italian brake, clutch and control components, made since 1969 and raced in MOTO 2, MOTO 3, WSBK and WSS.",
  story: brakesParagraphs.slice(0, -1),
  storeLine: lastOf(brakesParagraphs),
  range: [
    { image: brakesDetailImages[0], title: "Brake calipers", kicker: "Stopping" },
    { image: brakesDetailImages[1], title: "Master cylinders", kicker: "Brake & clutch" },
    { image: brakesDetailImages[2], title: "Controls", kicker: "Levers & bars" },
  ],
  gallery: brakesMainImages,
  specs: [
    { label: "Brand", value: "Accossato, Italy" },
    { label: "Since", value: "1969" },
    { label: "Raced in", value: "MOTO 2, MOTO 3, WSBK and WSS" },
    {
      label: "Range",
      value:
        "Brake & clutch master cylinders, calipers, lines, discs and pads, clip-on and one piece handlebars, lever protectors, bar ends, axle sliders",
    },
    { label: "Serviced by", value: "Ride Dynamics brake component servicing and repairs" },
  ],
  faq: [
    {
      question: "What Accossato parts can I get?",
      answer:
        "Brake & Clutch Master Cylinders, Brake Calipers, Brake Lines, Brake Discs and Brake Pads, Clip On and one piece Handlebars, Lever Protectors, Bar ends, Axle Sliders, and much more.",
    },
    {
      question: "Are these the same parts the racers use?",
      answer:
        "Yes. The products are used by riders such as Tom Luthi, Kenan Sofuoglu, Xavi Fores and Michelle Piro in the very top tiers of racing, and the same products can be bought for your motorcycle at very reasonable prices.",
    },
    {
      question: "Can Ride Dynamics service my brakes?",
      answer:
        "Yes. Brake component servicing and repairs, including replacement rotors, brake pads, master cylinders, brake lines and brake levers from OEM to aftermarket.",
    },
  ],
};

export const lubricantsPage: ProductPageContent = {
  title: "Lubricants",
  brand: "Rock Oil",
  model: "lubricants",
  modelFallback: {
    src: "/images/home/category-lubricants.png",
    alt: "Rock Oil lubricants and cleaning products",
    width: 184,
    height: 281,
  },
  logo: lubricantsLogo,
  logoOnDark: false,
  lead: "High quality lubricants since 1928 and the official lubricant of the MCE British Superbike Series.",
  story: lubricantsParagraphs.slice(0, -1),
  storeLine: lastOf(lubricantsParagraphs),
  range: [
    { image: lubricantsProductsImage, title: "The motorcycle range", kicker: "Oils & care" },
    { image: lubricantsSideImages[0], title: "Road bikes", kicker: "On road" },
    { image: lubricantsSideImages[1], title: "Off road bikes", kicker: "Motocross" },
  ],
  gallery: [],
  specs: [
    { label: "Brand", value: "Rock Oil" },
    { label: "Established", value: "1928" },
    { label: "Racing", value: "Official lubricant of the MCE British Superbike Series" },
    { label: "Approvals", value: "JASO MA & MA2 certified motorcycle only specifications" },
    { label: "Covers", value: "All 2 & 4 stroke machines: road, off road, modern and classic scooters" },
    {
      label: "From Ride Dynamics",
      value: "Engine oils, brake fluids, chain lube, coolant and cleaning products",
    },
  ],
  faq: [
    {
      question: "Which bikes is Rock Oil made for?",
      answer:
        "The range caters for every application including all 2 & 4 stroke machines. The motorcycle range covers road bikes, off road bikes and both modern and classic scooters.",
    },
    {
      question: "Which approvals do the oils meet?",
      answer:
        "Rock Oil lubricants meet the very latest approvals including JASO MA & MA2 certified motorcycle only specifications, and surpass all relevant national and international standards.",
    },
    {
      question: "What else can Ride Dynamics supply?",
      answer:
        "All your motorcycle fluids, including Engine Oils, Brake Fluids, Chain Lube, Coolant and Cleaning Products.",
    },
  ],
};
