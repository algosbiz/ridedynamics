"use client";

// Start once fonts are ready, without an idle delay that could attach the
// sticky scenes in the middle of the visitor's first scroll gesture.

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const MOTION_QUERY = "(prefers-reduced-motion: no-preference)";

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
      Promise.all([import("@/lib/motion"), document.fonts.ready]).then(
        ([{ initMotion }]) => {
          if (disposed) return;
          const root = document.getElementById("main");
          if (root) cleanup = initMotion(root);
        },
      );
    };

    start();

    // Honor a reduced-motion preference change without reloading the page.
    media.addEventListener("change", start);

    return () => {
      disposed = true;
      media.removeEventListener("change", start);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
