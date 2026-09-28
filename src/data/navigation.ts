import type { NavItem } from "@/types";

// The main menu, in the same order as the original website.
// The desktop header and the mobile menu both read this one list,
// so adding or renaming a link here updates both.
export const navItems: NavItem[] = [
  { label: "HOME", href: "/", width: 80 },
  { label: "ABOUT", href: "/about", width: 80 },
  { label: "SERVICES", href: "/services", width: 90 },
  { label: "SUSPENSION PARTS", href: "/suspension-parts", width: 165 },
  { label: "BRAKE COMPONENTS", href: "/brake-components", width: 175 },
  { label: "LUBRICANTS", href: "/lubricants", width: 110 },
  { label: "CONTACT", href: "/contact", width: 90 },
];

// The original site has an "ONLINE STORE / CART" menu item, but it is
// commented out in the live HTML, so visitors never actually see it.
// We match the live site and keep it hidden. Change this to `true` to
// show it again - but confirm the store address below is still correct.
export const showOnlineStoreLink = false;

export const onlineStoreUrl = "http://shop.ridedynamics.com.au";
export const onlineStoreLabel = "ONLINE STORE / CART";
