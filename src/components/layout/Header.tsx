"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactInfo } from "@/data/contact";
import { navItems } from "@/data/navigation";
import { toSentenceCase } from "@/lib/text";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const home = pathname === "/";
  const close = () => {
    setOpen(false);
    toggle.current?.focus();
  };

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - previous) > 4) {
        setHidden(y > previous && y > 140);
        previous = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key !== "Tab") return;
      const nodes =
        menu.current?.querySelectorAll<HTMLElement>("a[href], button");
      if (!nodes?.length) return;
      const first = nodes[0],
        last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      id="navigation"
      data-hidden={hidden && !open ? "" : undefined}
      onFocusCapture={() => setHidden(false)}
    >
      <div className="nav__bar m-board">
        <Link
          className="nav__brand"
          href={home ? "#hero" : "/"}
          aria-label="Ride Dynamics home"
        >
          <Image
            src="/images/logo/ride-dynamics-mark.png"
            width={27}
            height={30}
            alt=""
          />
          <span className="m-title">Ride Dynamics.</span>
        </Link>
        <nav aria-label="Main menu">
          <ul className="nav__links">
            {navItems
              .filter((item) => item.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    className="m-link-2"
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {toSentenceCase(item.label)}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <a className="m-btn nav__cta" href={contactInfo.phoneHref}>
          <span className="m-btn__label">{contactInfo.phone}</span>
        </a>
        <button
          ref={toggle}
          className="m-icon-btn nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span className="m-icon-btn__glyph" aria-hidden="true" />
        </button>
      </div>
      <div
        ref={menu}
        className="nav__menu m-ply"
        id="menu"
        data-lenis-prevent
        hidden={!open}
        role={open ? "dialog" : undefined}
        aria-modal={open ? true : undefined}
        aria-label="Main menu"
      >
        <button
          ref={closeButton}
          className="m-icon-btn nav__menu-close"
          type="button"
          aria-expanded="true"
          aria-controls="menu"
          aria-label="Close menu"
          onClick={close}
        >
          <span className="m-icon-btn__glyph" aria-hidden="true" />
        </button>
        <nav aria-label="Mobile menu">
          <ul className="nav__menu-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {toSentenceCase(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className="nav__menu-lang" href={contactInfo.phoneHref}>
          Call {contactInfo.phone}
        </a>
      </div>
    </header>
  );
}
