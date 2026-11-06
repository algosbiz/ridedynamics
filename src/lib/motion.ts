// Scroll animations for the whole site, driven by data attributes in the
// page markup. This module is never part of the first download: the
// MotionDirector component imports it after the page is idle, and only on
// wide screens for visitors who have not asked for reduced motion. Phones
// therefore never download GSAP at all.
//
// Motion is kept to what explains something. Only `transform` and
// `opacity` are animated, with one easing curve ("power4.out", the same
// shape as --ease-rd in globals.css).
//
// Attributes understood:
//   data-reveal       a section heading or a group of cards fades and
//                     rises in once, when scrolled into view
//   data-diecut       die-cut card: its part rises out of the card as the
//                     card travels up the screen (the site's signature)
//   data-steps / data-steps-bar / data-step-num
//                     numbered list whose rail fills as you read down

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MOTION_QUERY =
  "(min-width: 851px) and (prefers-reduced-motion: no-preference)";

const EASE = "power4.out";

export function initMotion(root: HTMLElement): () => void {
  const mm = gsap.matchMedia();

  mm.add(
    MOTION_QUERY,
    () => {
      const q = (selector: string) => gsap.utils.toArray<HTMLElement>(selector, root);

      // ---- Reveal on scroll ------------------------------------------
      // Anything already on screen when this runs is left alone, so the
      // page never blinks out and back in.
      const fold = window.innerHeight * 0.92;
      const reveal = q("[data-reveal]").filter(
        (el) => el.getBoundingClientRect().top > fold,
      );
      if (reveal.length) {
        gsap.set(reveal, { opacity: 0, y: 12 });
        ScrollTrigger.batch(reveal, {
          start: "top 94%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: EASE,
              stagger: 0.05,
              overwrite: true,
            }),
        });
      }

      // ---- Die-cut cards: the part rises out of its box ----------------
      // Starts tucked low in the box and ends poking out over the top
      // edge of the card by the time the card nears the top of the screen.
      q("[data-diecut]").forEach((card) => {
        const lift = card.querySelector(".rd-diecut-lift");
        if (!lift) return;
        gsap.fromTo(
          lift,
          { yPercent: 14 },
          {
            yPercent: -60,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top 20%",
              scrub: 0.6,
            },
          },
        );
      });

      // ---- Numbered steps: a rail fills as you read down ----------------
      q("[data-steps]").forEach((list) => {
        const bar = list.querySelector("[data-steps-bar]");
        if (bar) {
          gsap.fromTo(
            bar,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              transformOrigin: "top center",
              scrollTrigger: {
                trigger: list,
                start: "top 70%",
                end: "bottom 70%",
                scrub: true,
              },
            },
          );
        }
        list.querySelectorAll<HTMLElement>("[data-step-num]").forEach((num) => {
          gsap.fromTo(
            num,
            { opacity: 0.35 },
            {
              opacity: 1,
              duration: 0.3,
              ease: EASE,
              scrollTrigger: {
                trigger: num,
                start: "top 72%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      });
    },
    root,
  );

  // Web fonts swap in after first paint and can change heights slightly.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());

  return () => mm.revert();
}
