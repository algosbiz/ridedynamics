import type { PageImage } from "@/types";

// Brake Components page (Accossato). Lives at /brake-components,
// the original address was /accossato.html.

export const brakesLogo: PageImage = {
  src: "/images/brakes/accossato-logo.jpg",
  alt: "Accossato",
  width: 769,
  height: 203,
};

export const brakesParagraphs = [
  "Accossato may be a relatively new or unheard of company here in Australia. However, the Italian brand Accossato began making motorcycle components in 1969, specialising in forging and welding of aluminum and steel components for the Italian motorcycle manufacturers. Since 1969, Accossato has gone on to develop many class leading products. Accossato carries a commitment to providing the very best to all customers. The products are used by riders such as Tom Luthi, Kenan Sofuoglu, Xavi Fores and Michelle Piro in the very top tiers of racing. These same products can be bought to use on your motorcycle at very reasonable prices.",
  "The Accossato product line has a wide variety of components to improve your motorcycle. From the race winning components used in international competitions such as MOTO 2, MOTO 3, WSBK, and WSS, to components that improve the visual aspects and performance of your street bike. These products include Brake & Clutch Master Cylinders, Brake Calipers, Brake Lines, Brake Discs and Brake Pads, Clip On and one piece Handlebars, Lever Protectors, Bar ends, Axle Sliders, and much more.",
  "Please check our online store to find out more about the Accossato products we have to offer.",
];

// The two tall pictures below the text.
export const brakesMainImages: PageImage[] = [
  {
    src: "/images/brakes/accossato-race-bike.jpg",
    alt: "Race motorcycle fitted with Accossato components",
    width: 313,
    height: 429,
  },
  {
    src: "/images/brakes/accossato-street-bike.jpg",
    alt: "Street motorcycle fitted with Accossato components",
    width: 305,
    height: 429,
  },
];

// The three smaller product pictures stacked beside them.
export const brakesDetailImages: PageImage[] = [
  {
    src: "/images/brakes/accossato-brake-caliper.jpg",
    alt: "Accossato brake caliper",
    width: 204,
    height: 118,
  },
  {
    src: "/images/brakes/accossato-master-cylinder.jpg",
    alt: "Accossato brake master cylinder",
    width: 204,
    height: 141,
  },
  {
    src: "/images/brakes/accossato-controls.jpg",
    alt: "Accossato motorcycle controls",
    width: 204,
    height: 126,
  },
];
