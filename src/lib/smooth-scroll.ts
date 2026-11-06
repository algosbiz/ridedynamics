import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Use the reference's wheel damping and the same clock as the scroll scenes.
// Touch scrolling remains native. This runs only on the animated home page.
export function initSmoothScroll(): () => void {
  const lenis = new Lenis({
    lerp: 0.085,
    wheelMultiplier: 0.9,
    anchors: true,
    stopInertiaOnNavigate: true,
    autoRaf: false,
  });
  const tick = (time: number) => lenis.raf(time * 1000);
  const resize = () => lenis.resize();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  ScrollTrigger.addEventListener("refresh", resize);

  // The menu can scroll independently while the background stays still.
  const menu = document.getElementById("menu");
  const syncMenu = () => {
    if (menu && !menu.hidden) lenis.stop();
    else lenis.start();
  };
  const observer = new MutationObserver(syncMenu);
  if (menu)
    observer.observe(menu, { attributes: true, attributeFilter: ["hidden"] });
  syncMenu();

  return () => {
    observer.disconnect();
    ScrollTrigger.removeEventListener("refresh", resize);
    gsap.ticker.remove(tick);
    gsap.ticker.lagSmoothing(500, 33);
    lenis.destroy();
  };
}
