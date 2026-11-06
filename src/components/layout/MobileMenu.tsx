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
import { toSentenceCase } from "@/lib/text";

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
        className="relative grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-rd-surface shadow-[inset_0_0_0_1px_rgba(228,228,230,0.08)]"
      >
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span
            className={`absolute left-0 h-0.5 w-full bg-rd-light transition-transform duration-200 ease-rd ${
              isOpen ? "top-[5px] rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-full bg-rd-light transition-transform duration-200 ease-rd ${
              isOpen ? "top-[5px] -rotate-45" : "top-[10px]"
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main menu"
          className="fixed top-[var(--rd-header-h)] right-0 left-0 z-40 max-h-[calc(100dvh-var(--rd-header-h))] overflow-y-auto border-b border-white/[0.06] bg-rd-black px-4 pt-2 pb-6 tablet:px-6"
        >
          <ul>
            {navItems.map((item) => {
              const isCurrent = pathname === item.href;
              return (
                <li key={item.href} className="rd-dash border-b">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`flex min-h-12 items-center gap-3 text-lg font-medium ${
                      isCurrent ? "text-rd-light" : "text-rd-gray hover:text-rd-light"
                    }`}
                  >
                    {isCurrent && <span aria-hidden="true" className="h-4 w-0.5 bg-rd-red" />}
                    {toSentenceCase(item.label)}
                  </Link>
                </li>
              );
            })}
            {showOnlineStoreLink && (
              <li className="rd-dash border-b">
                <a
                  href={onlineStoreUrl}
                  onClick={close}
                  className="flex min-h-12 items-center text-lg font-medium text-rd-gray hover:text-rd-light"
                >
                  {toSentenceCase(onlineStoreLabel)}
                </a>
              </li>
            )}
          </ul>
          <a
            href={contactInfo.phoneHref}
            className="mt-6 flex h-12 items-center justify-center rounded-[10px] bg-rd-red text-base font-semibold text-white"
          >
            Call {contactInfo.phone}
          </a>
        </nav>
      )}
    </div>
  );
}
