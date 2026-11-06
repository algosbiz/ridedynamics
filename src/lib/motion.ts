// Scroll animations for the whole site, driven by data attributes in the
// page markup. This module is never part of the first download: the
// MotionDirector component imports it after the page is idle, and only on
// wide screens for visitors who have not asked for reduced motion. Phones
// therefore never download GSAP at all.
//
// Only `transform` and `opacity` are animated, so nothing here causes the
// browser to recalculate layout while scrolling.
//
// Attributes understood:
//   data-reveal              fade and rise in when scrolled into view
//   data-diecut              die-cut card: its picture rises out of the
//                            card as the card travels up the screen
//   data-parallax="0.15"     drifts at a different speed while scrolling
//   data-drift="-12"         sideways drift (xPercent) for decorative words
//   data-hero / data-hero-stage
//                            the hero's 3D stage sinks back as you leave
//   data-steps / data-steps-bar / data-step
//                            numbered list with a progress rail

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MOTION_QUERY =
  "(min-width: 851px) and (prefers-reduced-motion: no-preference)";

export function initMotion(root: HTMLElement): () => void {
  const mm = gsap.matchMedia();

  mm.add(
    MOTION_QUERY,
    () => {
      const q = <T extends Element = HTMLElement>(selector: string) =>
        gsap.utils.toArray<T>(selector, root);

      // ---- Reveal on scroll ------------------------------------------
      // Anything already on screen when this runs is left alone, so the
      // page never blinks out and back in.
      const fold = window.innerHeight * 0.92;
      const reveal = q("[data-reveal]").filter(
        (el) => el.getBoundingClientRect().top > fold,
      );
      if (reveal.length) {
        gsap.set(reveal, { opacity: 0, y: 28 });
        ScrollTrigger.batch(reveal, {
          start: "top 94%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.06,
              overwrite: true,
            }),
        });
      }

      // ---- Die-cut cards: the part rises out of its box ----------------
      q("[data-diecut]").forEach((card) => {
        const lift = card.querySelector(".rd-diecut-lift");
        if (!lift) return;
        // Starts tucked low in the box and ends poking out over the top
        // edge of the card by the time the card nears the top of the screen.
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

      // ---- Parallax -----------------------------------------------------
      q("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.15");
        gsap.fromTo(
          el,
          { yPercent: speed * 100 },
          {
            yPercent: -speed * 100,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      q("[data-drift]").forEach((el) => {
        const amount = parseFloat(el.dataset.drift || "-10");
        gsap.to(el, {
          xPercent: amount,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // ---- Hero: the stage sinks back as the visitor scrolls away -------
      q("[data-hero]").forEach((hero) => {
        const stage = hero.querySelector("[data-hero-stage]");
        if (!stage) return;
        gsap.to(stage, {
          yPercent: 10,
          scale: 0.92,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
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
            { opacity: 0.3 },
            {
              opacity: 1,
              duration: 0.4,
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
