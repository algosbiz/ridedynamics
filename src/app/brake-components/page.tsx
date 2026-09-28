import type { Metadata } from "next";
import Image from "next/image";
import PagePanel from "@/components/ui/PagePanel";
import {
  brakesDetailImages,
  brakesLogo,
  brakesMainImages,
  brakesParagraphs,
} from "@/data/brakes";

export const metadata: Metadata = {
  title: "Brake Components | Ride Dynamics",
  description:
    "Ride Dynamics stocks Accossato brake and clutch master cylinders, calipers, lines, discs, pads, handlebars and controls for your motorcycle.",
  alternates: { canonical: "/brake-components" },
};

export default function BrakeComponentsPage() {
  return (
    // Content runs 283px to 1142px inside the panel: an 859px column.
    <PagePanel desktopPadding="desktop:pt-[50px] desktop:pr-[103px] desktop:pb-[93px] desktop:pl-[103px]">
      {/* The original page uses a logo image where a heading would
          normally go, so this heading is read out by screen readers
          but not shown on screen. */}
      <h1 className="sr-only">Brake Components</h1>

      {/* ---------- Accossato logo, with the suspension unit alongside ----------
          The logo hangs 12px further left than the text on the original. */}
      <div className="flex items-start justify-between gap-6">
        <Image
          src={brakesLogo.src}
          alt={brakesLogo.alt}
          width={brakesLogo.width}
          height={brakesLogo.height}
          priority
          className="h-auto w-[74.9%] laptop:ml-[-12px] laptop:w-[75.44%]"
        />
        <Image
          src="/images/common/suspension-unit.png"
          alt="Motorcycle suspension unit"
          width={139}
          height={150}
          className="h-auto w-[16%] laptop:mt-[11px] laptop:w-[16.18%]"
        />
      </div>

      {/* ---------- The write-up ---------- */}
      <div className="mt-[28px] space-y-[17px]">
        {brakesParagraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-rd-gray text-justify text-[16px] leading-[19px]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* ---------- Product photographs ----------
          313px + 305px + 204px spread across the 859px column. */}
      <div className="mt-[14px] flex flex-wrap items-start justify-between gap-y-[22px] laptop:ml-[-3px] laptop:w-[calc(100%+3px)]">
        <Image
          src={brakesMainImages[0].src}
          alt={brakesMainImages[0].alt}
          width={brakesMainImages[0].width}
          height={brakesMainImages[0].height}
          className="h-auto w-[48%] laptop:w-[36.44%]"
        />
        <Image
          src={brakesMainImages[1].src}
          alt={brakesMainImages[1].alt}
          width={brakesMainImages[1].width}
          height={brakesMainImages[1].height}
          className="h-auto w-[48%] laptop:w-[35.51%]"
        />

        {/* The three smaller pictures stack into a column of their own. */}
        <div className="flex w-full flex-wrap justify-center gap-[22px] laptop:w-[23.75%] laptop:flex-col laptop:justify-start">
          {brakesDetailImages.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto max-w-full laptop:w-full"
            />
          ))}
        </div>
      </div>
    </PagePanel>
  );
}
