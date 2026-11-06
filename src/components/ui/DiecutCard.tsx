import Image from "next/image";
import Link from "next/link";
import type { PageImage } from "@/types";

// A card with a window cut out of its face. The picture sits behind the
// face and shows through the window; on hover (and, on wide screens, as
// the card scrolls up) it lifts out over the top edge, like a part being
// taken out of its box. This is the site's signature detail, so it is
// only used for products. The look lives in globals.css (.rd-diecut*),
// the scroll movement in src/lib/motion.ts (data-diecut).

type DiecutCardProps = {
  image: PageImage;
  title: string;
  kicker?: string;
  href?: string;
  // Small product photos look best left near their real size.
  imageScale?: "fit" | "native";
  className?: string;
};

export default function DiecutCard({
  image,
  title,
  kicker,
  href,
  imageScale = "fit",
  className = "",
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

      <div className="rd-diecut-body flex h-full items-end justify-between gap-4 p-6 pt-0">
        <div>
          {kicker && <p className="text-sm font-medium text-rd-muted">{kicker}</p>}
          <h3 className="mt-1 font-cond text-[20px] leading-[1.2] font-semibold text-rd-light">
            {title}
          </h3>
        </div>
        {href && (
          <span
            aria-hidden="true"
            className="pb-0.5 text-rd-muted transition-colors duration-150 ease-rd group-hover:text-rd-light"
          >
            →
          </span>
        )}
      </div>
    </>
  );

  const classes = `rd-diecut block aspect-[4/5] ${className}`;

  if (href) {
    return (
      <Link href={href} className={`group ${classes}`} data-diecut data-reveal>
        {body}
      </Link>
    );
  }

  return (
    <article className={classes} data-diecut data-reveal>
      {body}
    </article>
  );
}
