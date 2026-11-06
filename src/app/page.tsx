import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/ui/CtaBand";
import DiecutCard from "@/components/ui/DiecutCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ModelStage from "@/components/three/ModelStage";
import { contactInfo } from "@/data/contact";
import {
  homeCategories,
  homeIntro,
  homeLead,
  homeStoreLead,
  homeStoreNote,
  homeTagline,
} from "@/data/home";
import { brakesLogo } from "@/data/brakes";
import { lubricantsLogo } from "@/data/lubricants";
import { suspensionLogo } from "@/data/suspension";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: site.homeTitle,
  description:
    "Ride Dynamics is a Gold Coast motorcycle suspension tuning shop, specialising in service, repairs and performance modifications to suspension units for all types of motorcycles.",
  alternates: { canonical: "/" },
};

// The three brands, each linked to its product page. The Accossato logo
// file has its own black background, so it sits on a dark plate.
const brands = [
  { logo: suspensionLogo, href: "/suspension-parts", dark: false },
  { logo: brakesLogo, href: "/brake-components", dark: true },
  { logo: lubricantsLogo, href: "/lubricants", dark: false },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section data-hero className="relative overflow-hidden pt-10 pb-16 laptop:pt-14 laptop:pb-24">
        {/* The scratched backdrop of the original site, kept as texture. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[300px] bg-[url(/images/common/site-backdrop.jpg)] bg-top bg-repeat-x opacity-60 [mask-image:linear-gradient(#000,transparent)]"
        />
        <span
          aria-hidden="true"
          data-drift="-5"
          className="rd-deboss pointer-events-none absolute right-[-6vw] bottom-0 font-cond text-[30vw] leading-[0.78] font-bold whitespace-nowrap uppercase select-none laptop:text-[19vw]"
        >
          Suspension
        </span>

        <Container className="relative grid items-center gap-10 laptop:grid-cols-12 laptop:gap-8">
          <div className="laptop:col-span-7">
            <p className="rd-rise flex items-center gap-3 font-cond text-[13px] font-bold tracking-[4px] text-rd-red uppercase">
              <span aria-hidden="true" className="h-px w-10 bg-rd-red/60" />
              Gold Coast · Yatala QLD
            </p>
            <h1
              className="rd-emboss rd-rise mt-5 font-cond text-[52px] leading-[0.94] font-bold tracking-[-1px] uppercase text-balance tablet:text-[76px] desktop:text-[96px]"
              style={{ "--d": "0.08s" } as React.CSSProperties}
            >
              {homeTagline}
            </h1>
            <p
              className="rd-rise mt-6 max-w-[52ch] text-[19px] leading-[1.55] text-rd-red"
              style={{ "--d": "0.16s" } as React.CSSProperties}
            >
              {homeLead}
            </p>
            <div
              className="rd-rise mt-8 flex flex-wrap gap-3"
              style={{ "--d": "0.24s" } as React.CSSProperties}
            >
              <ButtonLink href="#products">Shop by product</ButtonLink>
              <ButtonLink href={contactInfo.phoneHref} variant="ghost">
                Call {contactInfo.phone}
              </ButtonLink>
            </div>
          </div>

          <div className="laptop:col-span-5" data-hero-stage>
            <div className="relative mx-auto aspect-square w-full max-w-[360px] laptop:max-w-[520px]">
              <div
                aria-hidden="true"
                className="absolute inset-[6%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(237,28,36,0.24), transparent 62%), repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.045) 0 1px, transparent 1px 22px)",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              />
              <ModelStage
                name="suspension"
                fallback={{
                  src: homeCategories[0].image,
                  alt: homeCategories[0].alt,
                  width: 184,
                  height: 281,
                }}
                label="K-Tech suspension, 3D view"
                preload
                className="absolute inset-0"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- 01 Products: die-cut cards ---------- */}
      <section id="products" className="py-16 laptop:py-24" aria-labelledby="products-title">
        <Container>
          <SectionHeading
            number="01"
            kicker="Products"
            title="Suspension, brakes and lubricants"
            id="products-title"
          >
            <p>{homeStoreNote}</p>
          </SectionHeading>

          <div className="mt-24 grid gap-x-6 gap-y-24 tablet:grid-cols-2 laptop:grid-cols-3">
            {homeCategories.map((category, index) => (
              <DiecutCard
                key={category.href}
                href={category.href}
                image={{ src: category.image, alt: category.alt, width: 184, height: 281 }}
                title={category.caption.join(" ")}
                kicker={["K-Tech", "Accossato", "Rock Oil"][index]}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- 02 About the shop ---------- */}
      <section className="py-16 laptop:py-24" aria-labelledby="shop-title">
        <Container className="grid gap-12 laptop:grid-cols-12">
          <div className="laptop:col-span-5">
            <SectionHeading
              number="02"
              kicker="The workshop"
              title="Suspension tuning, first and foremost"
              id="shop-title"
            />
          </div>
          <div className="space-y-5 laptop:col-span-7 laptop:pt-10">
            {homeIntro.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "text-[19px] leading-[1.6] text-rd-light/90"
                    : "text-[16px] leading-[1.7]"
                }
                data-reveal
              >
                {paragraph}
              </p>
            ))}
            <ButtonLink href="/services" variant="ghost" className="mt-4">
              Our services
            </ButtonLink>
          </div>
        </Container>

        <Container className="mt-16">
          <figure className="rd-surface overflow-hidden rounded-[20px] p-3" data-reveal>
            <div data-parallax="0.04">
              <Image
                src="/images/home/ride-dynamics-racing-suspension-gold-coast.jpg"
                alt="Ride Dynamics racing suspension, Gold Coast"
                width={655}
                height={202}
                sizes="(min-width: 1240px) 1176px, 95vw"
                className="h-auto w-full rounded-[12px]"
              />
            </div>
          </figure>
        </Container>
      </section>

      {/* ---------- 03 Brands ---------- */}
      <section className="py-16 laptop:py-24" aria-labelledby="brands-title">
        <Container>
          <SectionHeading
            number="03"
            kicker="Our brands"
            title="Proven winners the world over"
            id="brands-title"
          />
          <ul className="mt-12 grid gap-4 tablet:grid-cols-3">
            {brands.map((brand) => (
              <li key={brand.href} data-reveal>
                <Link
                  href={brand.href}
                  className={`group flex h-[150px] items-center justify-center rounded-[18px] px-8 shadow-[inset_0_3px_10px_rgba(0,0,0,0.45),0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-300 hover:-translate-y-1 ${
                    brand.dark ? "bg-black" : "bg-rd-paper"
                  }`}
                >
                  <Image
                    src={brand.logo.src}
                    alt={brand.logo.alt}
                    width={brand.logo.width}
                    height={brand.logo.height}
                    sizes="300px"
                    className="h-auto max-h-[90px] w-auto max-w-full"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title="Browse, choose, ride">
        <p className="text-rd-red">{homeStoreLead}</p>
      </CtaBand>
    </>
  );
}
