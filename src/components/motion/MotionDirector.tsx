"use client";

// Starts the scroll animations once the page has settled.
//
// GSAP is not in the first download. On a wide screen, and only when the
// visitor has not asked for reduced motion, it is fetched while the
// browser is idle. Phones and reduced-motion visitors never load it and
// simply see the finished page. Runs again on every page change so the
// new page's elements are picked up, and tears the old ones down.

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Kept in step with MOTION_QUERY in src/lib/motion.ts. It is repeated
// here so that deciding whether to download GSAP needs no GSAP.
const MOTION_QUERY =
  "(min-width: 851px) and (prefers-reduced-motion: no-preference)";

export default function MotionDirector() {
  const pathname = usePathname();

  useEffect(() => {
    const media = window.matchMedia(MOTION_QUERY);
    let disposed = false;
    let started = false;
    let cleanup: (() => void) | undefined;

    const start = () => {
      if (disposed || started || !media.matches) return;
      started = true;
      import("@/lib/motion").then(({ initMotion }) => {
        if (disposed) return;
        const root = document.getElementById("main");
        if (root) cleanup = initMotion(root);
      });
    };

    // Safari has no requestIdleCallback; a short timeout does the same job.
    const hasIdle = typeof window.requestIdleCallback === "function";
    const idle = hasIdle
      ? window.requestIdleCallback(start, { timeout: 1500 })
      : setTimeout(start, 300);

    // Someone who widens their window later still gets the animations.
    media.addEventListener("change", start);

    return () => {
      disposed = true;
      if (hasIdle) window.cancelIdleCallback(idle as number);
      else clearTimeout(idle);
      media.removeEventListener("change", start);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
