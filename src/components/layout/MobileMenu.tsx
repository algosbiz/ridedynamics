"use client";

// The drop-down menu used below 1151px wide. It needs "use client"
// because it remembers whether the menu is open.

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactInfo } from "@/data/contact";
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

  const close = () => setIsOpen(false);

  return (
    <div className="desktop:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="relative grid h-[44px] w-[44px] cursor-pointer place-items-center rounded-full bg-rd-surface shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
      >
        <span aria-hidden="true" className="relative block h-[12px] w-[20px]">
          <span
            className={`absolute left-0 h-[2px] w-full bg-rd-red transition-transform duration-300 ${
              isOpen ? "top-[5px] rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 h-[2px] w-full bg-rd-red transition-transform duration-300 ${
              isOpen ? "top-[5px] -rotate-45" : "top-[10px]"
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main menu"
          className="rd-grain fixed top-[var(--rd-header-h)] right-0 left-0 z-40 max-h-[calc(100dvh-var(--rd-header-h))] overflow-y-auto border-b border-white/[0.06] bg-rd-black px-4 pt-2 pb-6 shadow-[0_24px_40px_-12px_rgba(0,0,0,0.9)] tablet:px-6"
        >
          <ul>
            {navItems.map((item, index) => {
              const isCurrent = pathname === item.href;
              return (
                <li key={item.href} className="rd-dash border-b">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`flex min-h-[52px] items-center gap-4 font-cond text-[20px] font-bold tracking-[1.5px] ${
                      isCurrent ? "text-white" : "text-rd-gray hover:text-rd-light"
                    }`}
                  >
                    <span aria-hidden="true" className="w-7 text-[13px] text-rd-red">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
            {showOnlineStoreLink && (
              <li className="rd-dash border-b">
                <a
                  href={onlineStoreUrl}
                  onClick={close}
                  className="flex min-h-[52px] items-center pl-11 font-cond text-[20px] font-bold tracking-[1.5px] text-rd-yellow"
                >
                  {onlineStoreLabel}
                </a>
              </li>
            )}
          </ul>
          <a
            href={contactInfo.phoneHref}
            className="mt-5 flex min-h-[52px] items-center justify-center rounded-full bg-rd-red font-cond text-[17px] font-bold tracking-[2px] text-white"
          >
            Call {contactInfo.phone}
          </a>
        </nav>
      )}
    </div>
  );
}
