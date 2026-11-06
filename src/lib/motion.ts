// Scroll animations for the whole site, driven by data attributes in the
// page markup. This module is never part of the first download: the
// MotionDirector component imports it once the fonts are ready, for
// visitors who have not asked for reduced motion. The home page follows
// the reference's scroll scenes on both desktop and mobile.
//
// Scroll scenes use transform and opacity; the existing reveal animations
// keep the site's power4.out easing.
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
import { initSmoothScroll } from "@/lib/smooth-scroll";

gsap.registerPlugin(ScrollTrigger);

export const MOTION_QUERY =
  "(min-width: 851px) and (prefers-reduced-motion: no-preference)";

const EASE = "power4.out";

export function initMotion(root: HTMLElement): () => void {
  const mm = gsap.matchMedia();

  mm.add(
    "(prefers-reduced-motion: no-preference)",
    () => {
      const home = root.querySelector<HTMLElement>(".rv-home");
      if (!home) return;
      const cleanupScroll = initSmoothScroll();
      const hero = home.querySelector<HTMLElement>("#hero")!;
      const craft = home.querySelector<HTMLElement>("#craft")!;
      const process = home.querySelector<HTMLElement>("#process")!;
      const flap = hero.querySelector(".hero__flap");
      const wash = hero.querySelector(".hero__wash");
      const craftFlap = craft.querySelector(".craft__flap");
      const statement = craft.querySelector<HTMLElement>(".craft__statement")!;
      const lines = gsap.utils.toArray<HTMLElement>(".craft__line", craft);
      const roller = craft.querySelector(".craft__roller");

      // Keep the two full-screen panels composited. Pause the expensive
      // lighting/text-shadow animation while the hero is receding.
      gsap.set([flap, craftFlap], { willChange: "transform", force3D: true });
      const visibility = new IntersectionObserver(([entry]) => {
        hero.toggleAttribute("data-paused", !entry.isIntersecting);
      });
      visibility.observe(hero);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: hero,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) =>
              hero.toggleAttribute("data-sinking", self.progress > 0),
          },
        })
        .fromTo(
          flap,
          { y: 0, scale: 1, transformOrigin: "50% 40%" },
          {
            y: () => hero.offsetHeight,
            scale: () =>
              window.matchMedia("(max-width: 767px)").matches ? 0.9 : 0.86,
            ease: "none",
            force3D: true,
          },
          0,
        )
        .fromTo(wash, { opacity: 0 }, { opacity: 0.42, ease: "none" }, 0);
      gsap.fromTo(
        craftFlap,
        {
          scale: () =>
            window.matchMedia("(max-width: 767px)").matches ? 0.92 : 0.94,
          transformOrigin: "50% 0%",
        },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: craft,
            start: "top bottom",
            end: "top top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );

      craft.setAttribute("data-press", "");
      const press = gsap.timeline({
        scrollTrigger: {
          trigger: craft,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      press
        .fromTo(
          roller,
          { y: -10, opacity: 0 },
          {
            y: () => statement.offsetHeight,
            opacity: 1,
            duration: 1,
            ease: "none",
          },
          0,
        )
        .to(roller, { opacity: 0, duration: 0.06 }, 0.94);
      lines.forEach((line, index) => {
        press.fromTo(
          line,
          { opacity: 0.22 },
          { opacity: 1, duration: 0.16, ease: "none" },
          0.1 + index * 0.2,
        );
      });

      const grid = home.querySelector<HTMLElement>(".finishes__grid")!;
      const swatches = gsap.utils.toArray<HTMLElement>(
        ".finishes__swatch",
        grid,
      );
      const turns = [-9, 6, -3, 8, -6, 4];
      const deal = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          end: "top 15%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      swatches.forEach((swatch, index) => {
        deal.fromTo(
          swatch,
          {
            x: () => {
              const box = grid.getBoundingClientRect(),
                card = swatch.getBoundingClientRect();
              return (
                box.left +
                box.width / 2 -
                card.left -
                card.width / 2 +
                Number(gsap.getProperty(swatch, "x"))
              );
            },
            y: () => {
              const first = swatches[0].getBoundingClientRect(),
                card = swatch.getBoundingClientRect();
              return (
                first.top +
                first.height / 2 -
                card.top -
                card.height / 2 +
                Number(gsap.getProperty(swatch, "y")) -
                Number(gsap.getProperty(swatches[0], "y"))
              );
            },
            rotation: turns[index],
            scale: 0.82,
            zIndex: swatches.length - index,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            ease: "power2.inOut",
            duration: 0.6,
          },
          index * 0.08,
        );
      });

      const channel = process.querySelector<HTMLElement>(".process__channel")!;
      const track = process.querySelector<HTMLElement>(".process__track")!;
      process.setAttribute("data-track", "");
      const distance = () =>
        Math.max(0, track.scrollWidth - channel.clientWidth);
      const measure = () =>
        process.style.setProperty("--process-distance", `${distance()}px`);
      measure();
      ScrollTrigger.addEventListener("refreshInit", measure);
      const travel = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: process,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      process.querySelectorAll(".rd-mechanism").forEach((visual) =>
        gsap.fromTo(
          visual,
          { rotation: -12, scale: 0.85 },
          {
            rotation: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: visual,
              containerAnimation: travel,
              start: "left 90%",
              end: "center 50%",
              scrub: true,
            },
          },
        ),
      );

      home.querySelectorAll<HTMLElement>(".work__item").forEach((item) => {
        const sleeve = item.querySelector<HTMLElement>(".work__sleeve-wrap")!;
        const tray = item.querySelector<HTMLElement>(".work__tray")!;
        const offset = (axis: "x" | "y") => () => {
          const a = sleeve.getBoundingClientRect(),
            b = tray.getBoundingClientRect();
          return (
            (axis === "x" ? a.left - b.left : a.top - b.top) +
            Number(gsap.getProperty(tray, axis))
          );
        };
        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "center 50%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          })
          .fromTo(
            tray,
            { x: offset("x"), y: offset("y") },
            { x: 0, y: 0, ease: "power2.inOut", duration: 1 },
            0,
          )
          .fromTo(
            tray.querySelector("img"),
            { scale: 1.14 },
            { scale: 1, ease: "none", duration: 1 },
            0,
          );
      });

      const disc = home.querySelector<HTMLElement>(".materials__disc")!;
      const socket = home.querySelector<HTMLElement>(".kit__socket")!;
      const lid = home.querySelector<HTMLElement>(".kit__lid")!;
      const materials = home.querySelector<HTMLElement>("#materials")!;
      const target = (axis: "x" | "y") => () => {
        const a = disc.getBoundingClientRect(),
          b = socket.getBoundingClientRect();
        return (
          (axis === "x"
            ? b.left + b.width / 2 - a.left - a.width / 2
            : b.top + b.height / 2 - a.top - a.height / 2) +
          Number(gsap.getProperty(disc, axis)) -
          Number(gsap.getProperty(lid, axis))
        );
      };
      gsap
        .timeline({
          scrollTrigger: {
            trigger: materials,
            start: "bottom bottom",
            end: "bottom 20%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
        .to(disc, { scale: 1.08, duration: 0.2, ease: "power2.out" }, 0)
        .fromTo(
          disc,
          { x: 0, y: 0 },
          {
            x: target("x"),
            y: target("y"),
            ease: "power1.inOut",
            duration: 0.7,
          },
          0.2,
        )
        .to(disc, { scale: 1, duration: 0.1 }, 0.9);
      gsap.fromTo(
        lid,
        { y: () => window.innerHeight * 0.14 },
        {
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: home.querySelector("#kit"),
            start: "top bottom",
            end: "top 20%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
      gsap.fromTo(
        home.querySelector(".contact__light"),
        { x: () => window.innerWidth * 0.55 },
        {
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: home.querySelector("#contact"),
            start: "top bottom",
            end: "top 10%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );

      return () => {
        cleanupScroll();
        visibility.disconnect();
        hero.removeAttribute("data-paused");
        hero.removeAttribute("data-sinking");
        ScrollTrigger.removeEventListener("refreshInit", measure);
        craft.removeAttribute("data-press");
        process.removeAttribute("data-track");
        process.style.removeProperty("--process-distance");
      };
    },
    root,
  );

  mm.add(
    MOTION_QUERY,
    () => {
      const q = (selector: string) =>
        gsap.utils.toArray<HTMLElement>(selector, root);

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

  // All section heights and font metrics are settled before measuring the scenes.
  ScrollTrigger.sort();
  ScrollTrigger.refresh();

  return () => mm.revert();
}
