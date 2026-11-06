import Image from "next/image";
import Link from "next/link";
import type { PageImage } from "@/types";

// A card with a window cut out of its face. The picture sits behind the
// face and shows through the window; on hover (and, on wide screens, as
// the card scrolls up) it lifts out over the top edge, like a part being
// taken out of its box. The look lives in globals.css (.rd-diecut*),
// the scroll movement in src/lib/motion.ts (data-diecut).

type DiecutCardProps = {
  image: PageImage;
  title: string;
  kicker?: string;
  number?: string;
  href?: string;
  // How tall the picture may be inside the window, as a share of it.
  // Small product photos look best left near their real size.
  imageScale?: "fit" | "native";
  className?: string;
  children?: React.ReactNode;
};

export default function DiecutCard({
  image,
  title,
  kicker,
  number,
  href,
  imageScale = "fit",
  className = "",
  children,
}: DiecutCardProps) {
  const body = (
    <>
      <div className="rd-diecut-media" aria-hidden={href ? true : undefined}>
        <div className="rd-diecut-lift">
          <div className="rd-diecut-img">
            <Image
              src={image.src}
              alt={href ? "" : image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 851px) 300px, 70vw"
              className={imageScale === "native" ? "max-w-full" : "h-full max-w-full"}
              style={
                imageScale === "native"
                  ? { width: Math.min(image.width * 1.2, 240) }
                  : undefined
              }
            />
          </div>
        </div>
      </div>
      <div className="rd-diecut-face">
        <div className="rd-diecut-window" />
      </div>

      <div className="rd-diecut-body flex h-full flex-col justify-end p-6 pt-0">
        <div className="flex items-end justify-between gap-4">
          <div>
            {kicker && (
              <p className="font-cond text-[12px] font-bold tracking-[3px] text-rd-red uppercase">
                {kicker}
              </p>
            )}
            <h3 className="mt-1 font-cond text-[22px] leading-[1.1] font-bold text-rd-light uppercase">
              {title}
            </h3>
          </div>
          {number && (
            <span
              aria-hidden="true"
              className="rd-deboss font-cond text-[44px] leading-none font-bold"
            >
              {number}
            </span>
          )}
        </div>
        {children && <div className="mt-3 text-[15px] leading-[1.55]">{children}</div>}
      </div>
    </>
  );

  const classes = `rd-diecut block aspect-[4/5] ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} data-diecut data-reveal>
        {body}
        {/* The arrow lives inside the face so it reads as printed on the card. */}
        <span
          aria-hidden="true"
          className="absolute top-4 right-4 z-[2] grid h-9 w-9 place-items-center rounded-full bg-rd-red text-white"
        >
          ↗
        </span>
      </Link>
    );
  }

  return (
    <article className={classes} data-diecut data-reveal>
      {body}
    </article>
  );
}
