import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  homeCategories,
  homeIntro,
  homeLead,
  homeStoreLead,
  homeStoreNote,
  homeTagline,
} from "@/data/home";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: site.homeTitle,
  description:
    "Ride Dynamics is a Gold Coast motorcycle suspension tuning shop, specialising in service, repairs and performance modifications to suspension units for all types of motorcycles.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="pt-[40px] pb-[40px] desktop:pt-[74px] desktop:pb-[68px]">
      <Container>
        {/* On a wide screen the text sits on the left and the three
            picture links sit in a column on the right. Below 1151px
            the pictures drop underneath the text. */}
        <div className="desktop:flex desktop:justify-between desktop:pl-[17px] desktop:pr-[19px]">
          {/* ---------- Left: the black panel of text ---------- */}
          <div className="bg-rd-panel p-[5%] desktop:w-[717px] desktop:flex-none desktop:p-[32px]">
            {/* Logo, with the contact details printed over its top-left
                corner, exactly like the original. */}
            <div className="bg-black/[0.17] px-0 pt-[12px] pb-[27px]">
              <div className="relative mx-auto w-[84%]">
                <Image
                  src="/images/logo/ride-dynamics-logo.png"
                  alt="Ride Dynamics"
                  width={630}
                  height={292}
                  priority
                  className="h-auto w-full"
                />
                <Image
                  src="/images/common/contact-details.png"
                  alt="Web: ridedynamics.com.au. Email: contact@ridedynamics.com.au. Mobile: 0433 571 482. ABN: 85 164 273 876."
                  width={485}
                  height={78}
                  priority
                  className="absolute top-[2%] left-0 h-auto w-[57.4%]"
                />
              </div>

              <h1 className="rd-text-glow text-rd-gray mt-[17px] text-center font-plain text-[36px] leading-[43px] tracking-[1px] laptop:text-[48px] laptop:leading-[58px]">
                {homeTagline}
              </h1>
            </div>

            <p className="text-rd-red mt-[48px] text-[18px] leading-[22px] laptop:text-[16px] laptop:leading-[19px]">
              {homeLead}
            </p>

            <div className="mt-[44px] space-y-[19px]">
              {homeIntro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-rd-gray text-justify text-[16px] leading-[19px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="text-rd-red mt-[32px] text-justify text-[16px] leading-[19px]">
              {homeStoreLead}
            </p>
            <p className="text-rd-gray mt-[19px] text-justify text-[16px] leading-[19px]">
              {homeStoreNote}
            </p>

            <Image
              src="/images/home/ride-dynamics-racing-suspension-gold-coast.jpg"
              alt="Ride Dynamics racing suspension, Gold Coast"
              width={655}
              height={202}
              className="mt-[46px] h-auto w-full"
            />
          </div>

          {/* ---------- Right: the three picture links ---------- */}
          <div className="mt-[40px] flex flex-col items-center gap-[26px] tablet:flex-row tablet:justify-center tablet:items-start tablet:gap-[40px] desktop:mt-[49px] desktop:w-[184px] desktop:flex-none desktop:flex-col desktop:justify-start desktop:gap-[69px]">
            {homeCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="block w-[184px] flex-none tablet:w-[159px] laptop:w-[184px]"
              >
                {/* On the original the picture and its caption are two
                    separate boxes sitting flush against each other, each
                    with its own red glow. */}
                <div className="rd-glow bg-rd-panel">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    width={184}
                    height={281}
                    className="block h-auto w-full"
                  />
                </div>
                <div className="rd-glow bg-[rgba(14,14,15,0.6)] px-1 py-[6px] text-center">
                  {category.caption.map((line) => (
                    <span
                      key={line}
                      className="font-cond text-rd-gray block text-[16px] leading-[21px] font-bold"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
