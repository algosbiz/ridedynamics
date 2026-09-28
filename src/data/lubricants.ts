import type { PageImage } from "@/types";

// Lubricants page (Rock Oil). Lives at /lubricants,
// the original address was /rock-oil.html.

export const lubricantsLogo: PageImage = {
  src: "/images/lubricants/rock-oil-logo.png",
  alt: "Rock Oil",
  width: 451,
  height: 315,
};

export const lubricantsParagraphs = [
  "Established in 1928, Rock Oil supply high quality lubricants and fuels for all markets. Rock Oil products are manufactured from the finest state of the art synthetic chemicals and oils. They meet and surpass all relevant national and international standards.",
  "Rock Oil has vast racing and motorsport experience enjoying many British & World Championship successes, ensuring that they are at the forefront of lubrication technology. Rock Oil is the official lubricant of the MCE British Superbike Series and puts the brand right at the forefront of one of the largest and most popular motorsport series in the world.",
  "Rock Oil's continued involvement with all forms of two wheeled racing ensures that all products from engine oil through to ancillary products such as chain lube are fully tested in the extremes of competition. With today's modern race and road bikes, lubricants have to work harder than ever to ensure optimum performance and reliability.",
  "To achieve these demanding criteria, Rock Oil has succeeded in developing a sophisticated range of products to cater for every application to include all 2 & 4 stroke machines. The motorcycle range covers road bikes, off road bikes and both modern and classic scooters. Using correct lubricants is essential in ensuring the long term reliability and protection of your engine. Every Rock Oil product is engineered to perform a specific task, assuring you of the highest performance for your individual requirement. Our lubricants meet the very latest approvals including JASO MA & MA2 certified motorcycle only specifications.",
  "Click to go to our online store to see what Rock Oil products are available for your motorcycle",
];

// The pictures down the right-hand side of the page.
export const lubricantsSideImages: PageImage[] = [
  {
    src: "/images/lubricants/rock-oil-road-bike.jpg",
    alt: "Road motorcycle running Rock Oil lubricants",
    width: 361,
    height: 285,
  },
  {
    src: "/images/lubricants/rock-oil-motocross.jpg",
    alt: "Motocross bike running Rock Oil lubricants",
    width: 362,
    height: 296,
  },
];

// The product line-up sits on a white background on the original site.
export const lubricantsProductsImage: PageImage = {
  src: "/images/lubricants/rock-oil-products.png",
  alt: "The Rock Oil motorcycle product range",
  width: 361,
  height: 148,
};
