// Shared types for the small data files in src/data.
// They are deliberately simple - each one just describes a plain object.

export type NavItem = {
  label: string;
  href: string;
  // Width of the menu button in pixels on large screens. The original
  // site gives each button its own fixed width rather than sizing them
  // to the words, so these are copied from it.
  width: number;
};

// The three picture links on the homepage (Suspension Parts / Brake
// Components / Lubricants). `caption` is an array because the original
// site breaks each caption over two lines.
export type CategoryCard = {
  caption: string[];
  href: string;
  image: string;
  alt: string;
};

// A picture used inside a page. `width`/`height` are the real pixel size
// of the file in public/images, which next/image needs to reserve space.
export type PageImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
