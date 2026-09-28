import type { Metadata } from "next";
import Image from "next/image";
import PagePanel from "@/components/ui/PagePanel";
import { aboutGallery, aboutParagraphs } from "@/data/about";

export const metadata: Metadata = {
  title: "About | Ride Dynamics",
  description:
    "Ride Dynamics is a Gold Coast based Motorcycle Suspension Tuning Business, covering all aspects of motorcycle suspension for all types of motorcycles.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    // Padding measured from the original: content runs 281px to 1142px
    // inside the 1065px panel, giving an 861px column.
    <PagePanel desktopPadding="desktop:pt-[64px] desktop:pr-[103px] desktop:pb-[69px] desktop:pl-[101px]">
      {/* The original page uses a logo image where a heading would
          normally go, so this heading is read out by screen readers
          but not shown on screen. */}
      <h1 className="sr-only">About Ride Dynamics</h1>

      {/* The badge and the workshop photograph at the top of the page.
          339px + 68px gap + 454px = the full 861px column. */}
      <div className="flex flex-col items-center gap-[30px] laptop:flex-row laptop:items-start laptop:gap-[7.897%]">
        <Image
          src="/images/about/ride-dynamics-emblem.png"
          alt="Ride Dynamics"
          width={339}
          height={339}
          priority
          className="h-auto w-[60%] laptop:w-[39.37%]"
        />
        <Image
          src="/images/about/ride-dynamics-workshop.png"
          alt="The Ride Dynamics workshop"
          width={454}
          height={347}
          priority
          className="h-auto w-full laptop:w-[52.73%]"
        />
      </div>

      {/* The story of the business. */}
      <div className="mt-[30px] space-y-[17px]">
        {aboutParagraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-rd-gray text-justify text-[16px] leading-[19px]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* The row of photographs along the bottom. */}
      <div className="mt-[37px] flex flex-wrap items-start justify-center gap-[15px] laptop:flex-nowrap laptop:justify-between laptop:gap-0">
        {aboutGallery.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto max-w-full"
          />
        ))}
      </div>
    </PagePanel>
  );
}
