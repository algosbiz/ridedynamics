"use client";

// The drop-down menu used below 1151px wide, exactly like the original
// site. This file needs "use client" because it remembers whether the
// menu is open, which only the browser can do.

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  navItems,
  onlineStoreLabel,
  onlineStoreUrl,
  showOnlineStoreLink,
} from "@/data/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Let the Escape key close the menu, which keyboard users expect.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="desktop:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="flex h-[36px] w-[50px] cursor-pointer items-center justify-center"
      >
        <Image
          src="/images/common/menu-icon-red.png"
          alt=""
          width={50}
          height={30}
          className="h-[30px] w-[50px]"
        />
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main menu"
          className="fixed top-[52px] right-0 left-0 z-40 flex flex-col gap-px"
        >
          {navItems.map((item) => {
            const isCurrent = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={isCurrent ? "page" : undefined}
                className={`bg-rd-black flex h-[41px] items-center justify-center font-plain text-[14px] tracking-[2px] ${
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
              onClick={() => setIsOpen(false)}
              className="bg-rd-black text-rd-gray hover:text-rd-gray-hover flex h-[41px] items-center justify-center font-plain text-[14px] tracking-[2px]"
            >
              {onlineStoreLabel}
            </a>
          )}
        </nav>
      )}
    </div>
  );
}
