import type { Metadata } from "next";
import Image from "next/image";
import PagePanel from "@/components/ui/PagePanel";
import {
  suspensionBottomImages,
  suspensionLogo,
  suspensionParagraphs,
  suspensionSideImages,
  suspensionSpringsImage,
} from "@/data/suspension";

export const metadata: Metadata = {
  title: "Suspension Parts | Ride Dynamics",
  description:
    "Ride Dynamics stocks K-Tech Suspension. Championship winning forks, shocks, springs and cartridges for road bikes, dirt bikes and cruisers.",
  alternates: { canonical: "/suspension-parts" },
};

// The small product pictures on the right sit on a pale background on the
// original, in boxes of these exact heights. The pictures keep their own
// proportions inside them.
const SIDE_BOXES = [
  { background: "#FFFFFF", height: 179 },
  { background: "#F1F0EE", height: 162 },
  { background: "#FFFFFF", height: 118 },
];

export default function SuspensionPartsPage() {
  return (
    // Content runs 268px to 1156px inside the panel: an 888px column.
    <PagePanel desktopPadding="desktop:pt-[53px] desktop:pr-[89px] desktop:pb-[63px] desktop:pl-[88px]">
      {/* The original page uses a logo image where a heading would
          normally go, so this heading is read out by screen readers
          but not shown on screen. */}
      <h1 className="sr-only">Suspension Parts</h1>

      <div className="laptop:flex laptop:justify-between">
        {/* ---------- Left: K-Tech logo and the write-up (695 of 888px) ---------- */}
        <div className="laptop:w-[78.27%]">
          <Image
            src={suspensionLogo.src}
            alt={suspensionLogo.alt}
            width={suspensionLogo.width}
            height={suspensionLogo.height}
            priority
            className="mx-auto h-auto w-[80%] laptop:translate-x-[6px] laptop:w-[60.86%]"
          />

          <div className="mt-[30px] space-y-[17px]">
            {suspensionParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-rd-gray text-justify text-[16px] leading-[19px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* ---------- Right: suspension unit and product pictures (158 of 888px) ---------- */}
        <div className="mt-[40px] flex flex-wrap items-start justify-center gap-[31px] laptop:mt-[9px] laptop:w-[17.79%] laptop:flex-col laptop:items-stretch laptop:justify-start">
          <Image
            src="/images/common/suspension-unit.png"
            alt="Motorcycle suspension unit"
            width={139}
            height={150}
            className="mx-auto h-auto w-[139px] laptop:w-[88%]"
          />

          {suspensionSideImages.map((image, index) => (
            <div
              key={image.src}
              className="flex items-center justify-center"
              style={{
                backgroundColor: SIDE_BOXES[index].background,
                height: `${SIDE_BOXES[index].height}px`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="block h-auto max-w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ---------- The row of pictures along the bottom ----------
          230px + 320px + 288px spread across the 888px column. */}
      <div className="mt-[5px] flex flex-wrap items-start justify-center gap-[26px] laptop:flex-nowrap laptop:justify-between laptop:gap-0">
        <Image
          src={suspensionBottomImages[0].src}
          alt={suspensionBottomImages[0].alt}
          width={suspensionBottomImages[0].width}
          height={suspensionBottomImages[0].height}
          className="h-auto max-w-full laptop:w-[25.9%]"
        />
        <Image
          src={suspensionBottomImages[1].src}
          alt={suspensionBottomImages[1].alt}
          width={suspensionBottomImages[1].width}
          height={suspensionBottomImages[1].height}
          className="h-auto max-w-full laptop:w-[36.04%]"
        />
        <div className="flex items-center justify-center bg-white laptop:w-[32.43%]">
          <Image
            src={suspensionSpringsImage.src}
            alt={suspensionSpringsImage.alt}
            width={suspensionSpringsImage.width}
            height={suspensionSpringsImage.height}
            className="block h-auto max-w-full"
          />
        </div>
      </div>
    </PagePanel>
  );
}
