import type { Metadata } from "next";
import Image from "next/image";
import PagePanel from "@/components/ui/PagePanel";
import {
  lubricantsLogo,
  lubricantsParagraphs,
  lubricantsProductsImage,
  lubricantsSideImages,
} from "@/data/lubricants";

export const metadata: Metadata = {
  title: "Lubricants | Ride Dynamics",
  description:
    "Ride Dynamics supplies Rock Oil motorcycle lubricants. Established in 1928, Rock Oil is the official lubricant of the MCE British Superbike Series.",
  alternates: { canonical: "/lubricants" },
};

export default function LubricantsPage() {
  return (
    // Content runs 291px to 1135px inside the panel: an 844px column.
    <PagePanel desktopPadding="desktop:pt-[61px] desktop:pr-[110px] desktop:pb-[133px] desktop:pl-[111px]">
      {/* The original page uses a logo image where a heading would
          normally go, so this heading is read out by screen readers
          but not shown on screen. */}
      <h1 className="sr-only">Lubricants</h1>

      <div className="laptop:flex laptop:justify-between">
        {/* ---------- Left: Rock Oil logo and the write-up (451 of 844px) ---------- */}
        <div className="laptop:mt-[70px] laptop:w-[53.44%]">
          <Image
            src={lubricantsLogo.src}
            alt={lubricantsLogo.alt}
            width={lubricantsLogo.width}
            height={lubricantsLogo.height}
            priority
            className="mx-auto h-auto w-full max-w-[451px]"
          />

          {/* The text tucks up slightly under the logo on the original. */}
          <div className="mt-[10px] space-y-[17px] laptop:mt-[-6px]">
            {lubricantsParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-rd-gray text-justify text-[16px] leading-[19px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* ---------- Right: suspension unit and the product photographs (362 of 844px) ---------- */}
        <div className="mt-[40px] laptop:mt-0 laptop:w-[42.89%]">
          <Image
            src="/images/common/suspension-unit.png"
            alt="Motorcycle suspension unit"
            width={139}
            height={150}
            className="mx-auto h-auto w-[139px] laptop:mr-0 laptop:ml-auto"
          />

          <Image
            src={lubricantsSideImages[0].src}
            alt={lubricantsSideImages[0].alt}
            width={lubricantsSideImages[0].width}
            height={lubricantsSideImages[0].height}
            className="mt-[36px] h-auto w-full"
          />
          <Image
            src={lubricantsSideImages[1].src}
            alt={lubricantsSideImages[1].alt}
            width={lubricantsSideImages[1].width}
            height={lubricantsSideImages[1].height}
            className="mt-[26px] h-auto w-full"
          />

          {/* The product line-up sits on white on the original. */}
          <div className="mt-[26px] bg-white">
            <Image
              src={lubricantsProductsImage.src}
              alt={lubricantsProductsImage.alt}
              width={lubricantsProductsImage.width}
              height={lubricantsProductsImage.height}
              className="mx-auto block h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </PagePanel>
  );
}
