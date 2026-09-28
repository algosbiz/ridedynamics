import type { PageImage } from "@/types";

export const servicesHeading = "Services";

export const servicesIntro =
  "Ride Dynamics offers full Motorcycle Suspension and Brake Servicing, and also Custom Motorcycle Building Services. Ride Dynamics also provides Rider Development and Training Services for its customers who are looking to better their understanding of riding a motorcycle.";

export const servicesListIntro = "These services include, but not limited to:";

// The bulleted list of services. The bullet is drawn by the page,
// so only the wording lives here.
export const servicesList = [
  "Front Fork maintenance & repairs, including disassembly, Re-chroming, Straightening, Replacement Parts, Seals and Bushings.",
  "Front Fork upgrades and alterations, including Springs, Valves and Emulators, Re-shimming, Aftermarket Drop-In Fork Cartridges, Fork Extending and Shortening.",
  "Headset Bearing adjustment and replacement.",
  "Triple Clamp upgrades, straightening and repairs",
  "Rear Shock maintenance & repairs, including disassembly and reassembly, Re-chroming, Replacement Parts, Seals and Bushings.",
  "Rear Shock upgrades and alterations, including Springs, Valves, and Re-shimming, Aftermarket Shock Units, Shock Shortening.",
  "Rear Suspension Swingarm & Linkage maintenance and replacement including Lowering linkages and Bearings.",
  "Swingarm Straightening and Alterations.",
  "Brake Component Servicing and Repairs, including Replacement Rotors, Brake Pads, Master Cylinders and Brake Lines and Brake levers from OEM to Aftermarket.",
  "Custom Motorcycle Building, including Front and Rear end swaps, Tail Swaps, Wheel and Brake Conversions, Handlebar Conversions, Custom Headlights, Racebike Preparations, Café Racers. Ride Dynamics can source the parts or fit the parts you supply.",
];

export const servicesOutro =
  "Go to our Online Store to find out more about the services we can offer you and your motorcycle";

// Pictures down the right-hand side of the Services page.
export const servicesSideImages: PageImage[] = [
  {
    src: "/images/services/services-photo-1.png",
    alt: "Ride Dynamics workshop badge",
    width: 187,
    height: 187,
  },
  {
    src: "/images/services/services-photo-2.png",
    alt: "Motorcycle suspension servicing",
    width: 326,
    height: 188,
  },
  {
    src: "/images/services/services-photo-3.png",
    alt: "Custom motorcycle build",
    width: 326,
    height: 438,
  },
];

// The two pictures below the services list.
export const servicesBottomImages: PageImage[] = [
  {
    src: "/images/services/services-photo-4.png",
    alt: "Motorcycle brake and suspension work",
    width: 213,
    height: 118,
  },
  {
    src: "/images/services/services-photo-5.png",
    alt: "Motorcycle fork servicing",
    width: 214,
    height: 118,
  },
];
