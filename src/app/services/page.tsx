import type { Metadata } from "next";
import Image from "next/image";
import PagePanel from "@/components/ui/PagePanel";
import {
  servicesBottomImages,
  servicesHeading,
  servicesIntro,
  servicesList,
  servicesListIntro,
  servicesOutro,
  servicesSideImages,
} from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Ride Dynamics",
  description:
    "Ride Dynamics offers full Motorcycle Suspension and Brake Servicing, Custom Motorcycle Building, and Rider Development and Training Services.",
  alternates: { canonical: "/services" },
};

// On the original there is a blank line between every service except
// between "Headset Bearing..." and "Triple Clamp...". Those two sit
// directly under the item above them.
const ITEMS_WITHOUT_A_GAP_ABOVE = [0, 3];

export default function ServicesPage() {
  return (
    // Content runs 291px to 1135px inside the panel: an 844px column.
    <PagePanel desktopPadding="desktop:pt-[61px] desktop:pr-[110px] desktop:pb-[121px] desktop:pl-[111px]">
      <div className="laptop:flex laptop:justify-between">
        {/* ---------- Left: the list of services (454 of 844px) ---------- */}
        <div className="laptop:mt-[51px] laptop:w-[53.79%]">
          <h1 className="text-rd-gray text-center text-[30px] leading-[36px]">
            {servicesHeading}
          </h1>

          <p className="text-rd-gray mt-[17px] text-justify text-[16px] leading-[19px]">
            {servicesIntro}
          </p>

          <p className="text-rd-gray mt-[17px] text-justify font-plain text-[14px] leading-[17px]">
            {servicesListIntro}
          </p>

          <ul className="text-rd-gray font-plain text-[14px] leading-[17px]">
            {servicesList.map((service, index) => (
              <li
                key={service}
                className={
                  ITEMS_WITHOUT_A_GAP_ABOVE.includes(index)
                    ? "text-justify"
                    : "mt-[17px] text-justify"
                }
              >
                {/* The bullet is part of the look, so it is hidden from
                    screen readers - the list already announces itself. */}
                <span aria-hidden="true">{"• "}</span>
                {service}
              </li>
            ))}
          </ul>

          <p className="text-rd-gray mt-[17px] text-justify font-plain text-[14px] leading-[17px]">
            {servicesOutro}
          </p>

          {/* The two pictures below the list: 213 + 27 + 214 = 454px. */}
          <div className="mt-[74px] flex flex-wrap items-start justify-between gap-[27px] laptop:flex-nowrap laptop:gap-0">
            <Image
              src={servicesBottomImages[0].src}
              alt={servicesBottomImages[0].alt}
              width={servicesBottomImages[0].width}
              height={servicesBottomImages[0].height}
              className="h-auto w-[46.92%]"
            />
            <Image
              src={servicesBottomImages[1].src}
              alt={servicesBottomImages[1].alt}
              width={servicesBottomImages[1].width}
              height={servicesBottomImages[1].height}
              className="h-auto w-[47.14%]"
            />
          </div>
        </div>

        {/* ---------- Right: the workshop pictures (326 of 844px) ---------- */}
        <div className="mt-[40px] flex flex-col items-end laptop:mt-0 laptop:w-[38.63%]">
          <Image
            src={servicesSideImages[0].src}
            alt={servicesSideImages[0].alt}
            width={servicesSideImages[0].width}
            height={servicesSideImages[0].height}
            className="h-auto w-[42.33%]"
          />
          <Image
            src={servicesSideImages[1].src}
            alt={servicesSideImages[1].alt}
            width={servicesSideImages[1].width}
            height={servicesSideImages[1].height}
            className="mt-[52px] h-auto w-full"
          />
          <Image
            src={servicesSideImages[2].src}
            alt={servicesSideImages[2].alt}
            width={servicesSideImages[2].width}
            height={servicesSideImages[2].height}
            className="mt-[65px] h-auto w-full"
          />
        </div>
      </div>
    </PagePanel>
  );
}
