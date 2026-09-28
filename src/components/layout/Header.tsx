"use client";

// The menu bar that sits across the top of every page.
// It is fixed to the top of the window, 52px tall, exactly like the
// original site. This file needs "use client" so it can read the current
// address and colour the current page's link red.

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import {
  navItems,
  onlineStoreLabel,
  onlineStoreUrl,
  showOnlineStoreLink,
} from "@/data/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="bg-rd-black fixed top-0 right-0 left-0 z-50 h-[52px]"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
    >
      <Container className="flex h-full items-center gap-[5px] desktop:pl-[7px]">
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
        <nav aria-label="Main menu" className="hidden gap-[5px] desktop:flex">
          {navItems.map((item) => {
            const isCurrent = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                style={{ width: `${item.width}px` }}
                className={`border-rd-red bg-rd-black flex h-[36px] flex-none items-center justify-center border-2 font-plain text-[12px] tracking-[2px] whitespace-nowrap ${
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
              className="border-rd-red bg-rd-black text-rd-gray hover:text-rd-gray-hover flex h-[36px] items-center justify-center border-2 px-[5px] font-plain text-[12px] tracking-[2px] whitespace-nowrap min-w-[80px]"
            >
              {onlineStoreLabel}
            </a>
          )}
        </nav>

        {/* Hamburger button on narrow screens. Pushed to the right. */}
        <div className="ml-auto desktop:hidden">
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
