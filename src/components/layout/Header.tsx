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

const linkStyle =
  "relative flex h-[40px] items-center px-[10px] font-cond text-[14px] font-bold tracking-[1.5px] whitespace-nowrap transition-colors after:absolute after:right-[10px] after:bottom-[4px] after:left-[10px] after:h-[2px] after:origin-left after:bg-rd-red after:transition-transform after:duration-300";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-[var(--rd-header-h)] border-b border-white/[0.06] bg-rd-black/95 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.9)]">
      <Container className="flex h-full items-center gap-4">
        <Link href="/" aria-label="Ride Dynamics home" className="flex flex-none items-center gap-3">
          <span className="grid h-[40px] w-[40px] place-items-center rounded-full bg-rd-surface shadow-[inset_0_0_0_1.5px_var(--color-rd-red)]">
            <Image
              src="/images/logo/ride-dynamics-mark.png"
              alt=""
              width={27}
              height={30}
              className="h-[22px] w-auto"
            />
          </span>
          <span className="font-cond text-[17px] leading-none font-bold tracking-[3px] text-rd-light uppercase">
            Ride <span className="text-rd-red">Dynamics</span>
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
                  isCurrent
                    ? "text-white after:scale-x-100"
                    : "text-rd-gray after:scale-x-0 hover:text-rd-light hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {showOnlineStoreLink && (
            <a
              href={onlineStoreUrl}
              className={`${linkStyle} text-rd-yellow after:scale-x-0 hover:after:scale-x-100`}
            >
              {onlineStoreLabel}
            </a>
          )}
        </nav>

        <a
          href={contactInfo.phoneHref}
          className="hidden h-[40px] flex-none items-center rounded-full bg-rd-red px-5 font-cond text-[14px] font-bold tracking-[1.5px] text-white transition-colors hover:bg-[#ff2a32] min-[1300px]:inline-flex"
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
