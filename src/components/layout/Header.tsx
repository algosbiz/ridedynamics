"use client";

// The menu bar fixed across the top of every page. It needs "use client"
// to read the current address and mark the current page's link.

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import Container from "@/components/ui/Container";
import { contactInfo } from "@/data/contact";
import {
  navItems,
  onlineStoreLabel,
  onlineStoreUrl,
  showOnlineStoreLink,
} from "@/data/navigation";
import { toSentenceCase } from "@/lib/text";

// The current page is the one link marked in red.
const linkStyle =
  "relative flex h-9 items-center px-3 text-sm font-medium whitespace-nowrap transition-colors duration-150 ease-rd after:absolute after:right-3 after:bottom-0.5 after:left-3 after:h-0.5 after:bg-rd-red";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-[var(--rd-header-h)] border-b border-white/[0.06] bg-rd-black/95">
      <Container className="flex h-full items-center gap-4">
        <Link href="/" aria-label="Ride Dynamics home" className="flex flex-none items-center gap-3">
          <Image
            src="/images/logo/ride-dynamics-mark.png"
            alt=""
            width={27}
            height={30}
            className="h-7 w-auto"
          />
          <span className="font-cond text-lg leading-none font-bold text-rd-light">
            Ride Dynamics
          </span>
        </Link>

        <nav aria-label="Main menu" className="ml-auto hidden items-center desktop:flex">
          {navItems.map((item) => {
            const isCurrent = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`${linkStyle} ${
                  isCurrent ? "text-rd-light after:block" : "text-rd-gray after:hidden hover:text-rd-light"
                }`}
              >
                {toSentenceCase(item.label)}
              </Link>
            );
          })}

          {showOnlineStoreLink && (
            <a href={onlineStoreUrl} className={`${linkStyle} text-rd-gray after:hidden hover:text-rd-light`}>
              {toSentenceCase(onlineStoreLabel)}
            </a>
          )}
        </nav>

        <a
          href={contactInfo.phoneHref}
          className="hidden h-9 flex-none items-center rounded-[8px] bg-rd-surface-2 px-4 text-sm font-medium text-rd-light tabular-nums shadow-[inset_0_0_0_1px_rgba(228,228,230,0.1)] transition-colors duration-150 ease-rd hover:bg-[#252529] min-[1300px]:inline-flex"
        >
          {contactInfo.phone}
        </a>

        <div className="ml-auto desktop:hidden">
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
