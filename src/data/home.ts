import type { CategoryCard } from "@/types";

// All of the homepage wording. Edit the text here and the page updates.

export const homeTagline = "Motorcycle suspension and brake specialist";

// The red opening line, directly under the logo panel.
export const homeLead =
  "Welcome to Ride Dynamics.  We are first and foremost a Motorcycle Suspension Tuning Shop.";

// The grey paragraphs that follow the opening line.
export const homeIntro = [
  "Specialising in Service, Repairs and Performance Modifications to suspension units for all types of motorcycles and for all types of riding. We also provide Motorcycle Braking components to service or upgrade your motorcycles stopping abilities.",
  "Ride Dynamics can provide you with all your motorcycle fluids including Engine Oils, Brake Fluids, Chain Lube, Coolant and Cleaning Products. Ride Dynamics carefully selects the brands it chooses to use and recommend.",
  "We use everything ourselves, giving us the confidence to provide our customers with the best service and advice possible. K-Tech Suspension, Accossato Brakes and Controls and Rock oils are proven winners and are highly reputable companies the world over.",
];

// The second red line, further down the page.
export const homeStoreLead =
  "This website acts as an online store, where you can browse what we have to offer and make quick easy purchases.";

export const homeStoreNote =
  "Click on any of our product tabs, to find out more about the Services we offer & also further information about the brands and their exceptional products that we are excited to share with you.";

// The three picture links down the right-hand side of the homepage.
export const homeCategories: CategoryCard[] = [
  {
    caption: ["Suspension", "Parts"],
    href: "/suspension-parts",
    image: "/images/home/category-suspension-parts.png",
    alt: "K-Tech suspension parts",
  },
  {
    caption: ["Brake Components", "Controls & Accessories"],
    href: "/brake-components",
    image: "/images/home/category-brake-components.png",
    alt: "Accossato brake components, controls and accessories",
  },
  {
    caption: ["Lubricants &", "Cleaning Products"],
    href: "/lubricants",
    image: "/images/home/category-lubricants.png",
    alt: "Rock Oil lubricants and cleaning products",
  },
];
