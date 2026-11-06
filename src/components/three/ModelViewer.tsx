"use client";

// Shows a still picture of a product, and swaps in a live 3D model you can
// turn by dragging, but only when all of these are true:
//   - a model file exists (ModelStage checks this at build time)
//   - the screen is wide (851px+) and the visitor has not asked for
//     reduced motion
//   - the viewer has scrolled close to the screen
// Otherwise the still picture simply stays, which is also what search
// engines, phones and anyone without WebGL see.

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import type { Viewer } from "@/lib/three-viewer";

const QUERY = "(min-width: 851px) and (prefers-reduced-motion: no-preference)";

function subscribe(callback: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const canUse3D = () => window.matchMedia(QUERY).matches;
const notOnServer = () => false;

export type ModelPoster = {
  src: string;
  alt: string;
  // A file from public/models has no known size, so it fills its box;
  // a regular product photo passes its real size.
  width?: number;
  height?: number;
};

type ModelViewerProps = {
  model: string | null;
  poster: ModelPoster;
  label: string;
  preload?: boolean;
  className?: string;
};

export default function ModelViewer({
  model,
  poster,
  label,
  preload = false,
  className = "relative",
}: ModelViewerProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewerRef = useRef<Viewer | null>(null);
  const [ready, setReady] = useState(false);
  const enabled = useSyncExternalStore(subscribe, canUse3D, notOnServer);

  useEffect(() => {
    const frameEl = frameRef.current;
    const canvas = canvasRef.current;
    if (!model || !enabled || !frameEl || !canvas) return;

    let disposed = false;
    let onScreen = false;
    const controller = new AbortController();

    const syncActive = () =>
      viewerRef.current?.setActive(onScreen && document.visibilityState === "visible");

    const load = async () => {
      try {
        const response = await fetch(model, { signal: controller.signal });
        if (!response.ok) return; // no model yet: keep the still picture
        const buffer = await response.arrayBuffer();
        const { createViewer } = await import("@/lib/three-viewer");
        if (disposed) return;
        const viewer = await createViewer(canvas, buffer);
        if (disposed) {
          viewer.dispose();
          return;
        }
        viewerRef.current = viewer;
        setReady(true);
        syncActive();
      } catch (error) {
        // Network error, no WebGL, or a broken file: the still picture stays.
        if (!disposed) console.warn("3D viewer unavailable, showing still image.", error);
      }
    };

    let requested = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen && !requested) {
          requested = true;
          load();
        }
        syncActive();
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(frameEl);
    document.addEventListener("visibilitychange", syncActive);

    return () => {
      disposed = true;
      controller.abort();
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncActive);
      viewerRef.current?.dispose();
      viewerRef.current = null;
      setReady(false);
    };
  }, [model, enabled]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!viewerRef.current) return;
    if (event.key === "ArrowLeft") viewerRef.current.nudge(-0.25);
    else if (event.key === "ArrowRight") viewerRef.current.nudge(0.25);
    else return;
    event.preventDefault();
  };

  const sized = poster.width && poster.height;

  return (
    <div
      ref={frameRef}
      // Pass a positioned class (relative / absolute); defaults to relative.
      className={className}
      role="group"
      aria-label={label}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      >
        {sized ? (
          <Image
            src={poster.src}
            alt={poster.alt}
            width={poster.width}
            height={poster.height}
            preload={preload}
            // Product photos are small files, so they are allowed to grow
            // to at most 1.5x their real size to fill the stage.
            style={{ height: `min(78%, ${Math.round(poster.height! * 1.5)}px)` }}
            className="w-auto max-w-full object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.6)]"
          />
        ) : (
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            preload={preload}
            sizes="(min-width: 851px) 40vw, 90vw"
            className="object-contain"
          />
        )}
      </div>

      {model && (
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={`${poster.alt}, 3D model. Use the left and right arrow keys to turn it.`}
          aria-hidden={ready ? undefined : true}
          tabIndex={ready ? 0 : -1}
          onKeyDown={onKeyDown}
          className={`absolute inset-0 h-full w-full cursor-grab touch-pan-y transition-opacity duration-700 active:cursor-grabbing ${
            ready ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
      )}

      {ready && (
        <p className="pointer-events-none absolute right-0 bottom-0 left-0 text-center font-cond text-[12px] tracking-[3px] text-rd-gray uppercase">
          Drag to rotate
        </p>
      )}
    </div>
  );
}
