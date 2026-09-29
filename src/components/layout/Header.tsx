"use client";

// The menu bar that sits across the top of every page.
// It is fixed to the top of the window, 52px tall. This file needs
// "use client" so it can read the current address and colour the current
// page's link red.

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import {
  navItems,
  onlineStoreLabel,
  onlineStoreUrl,
  showOnlineStoreLink,
} from "@/data/navigation";

// Each button starts at the width of its own label, like the original
// site, and then the leftover space is shared out between them so the row
// fills the bar. That keeps the buttons proportional to their words while
// still reaching both edges. `flex-auto` is what does the stretching -
// `flex-1` would force them all to the same width instead.
const buttonStyle =
  "border-rd-red bg-rd-black flex h-[36px] flex-auto items-center justify-center border-2 px-[5px] font-plain text-[12px] tracking-[2px] whitespace-nowrap";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="bg-rd-black fixed top-0 right-0 left-0 z-50 h-[52px]"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
    >
      {/* On a large screen this is exactly the same width as the page
          content and the footer, so the menu lines up with them. On a
          phone it is wider, which keeps the hamburger button near the
          edge of the screen where it is easy to reach - the same as the
          original site. */}
      <div className="mx-auto flex h-full w-full items-center gap-[5px] px-[22px] desktop:w-[1065px] desktop:px-0">
        {/* The small badge on the far left links back to the homepage. */}
        <Link
          href="/"
          aria-label="Ride Dynamics home"
          className="border-rd-red bg-rd-black flex h-[36px] w-[41px] flex-none items-center justify-center border-2"
        >
          <Image
            src="/images/logo/ride-dynamics-mark.png"
            alt=""
            width={27}
            height={30}
            className="h-[30px] w-[27px]"
          />
        </Link>

        {/* Full menu on wide screens. */}
        <nav
          aria-label="Main menu"
          className="hidden flex-1 gap-[5px] desktop:flex"
        >
          {navItems.map((item) => {
            const isCurrent = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`${buttonStyle} ${
                  isCurrent ? "text-rd-red" : "text-rd-gray hover:text-rd-gray-hover"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {showOnlineStoreLink && (
            <a
              href={onlineStoreUrl}
              className={`${buttonStyle} text-rd-gray hover:text-rd-gray-hover`}
            >
              {onlineStoreLabel}
            </a>
          )}
        </nav>

        {/* Hamburger button on narrow screens. Pushed to the right. */}
        <div className="ml-auto desktop:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
