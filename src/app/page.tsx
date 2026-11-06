import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/ui/CtaBand";
import DiecutCard from "@/components/ui/DiecutCard";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroStage from "@/components/three/HeroStage";
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

const categoryBrands = ["K-Tech", "Accossato", "Rock Oil"];

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pt-12 pb-16 laptop:pt-16 laptop:pb-20">
        {/* The scratched backdrop of the original site, kept as texture. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[300px] bg-[url(/images/common/site-backdrop.jpg)] bg-top bg-repeat-x opacity-50 [mask-image:linear-gradient(#000,transparent)]"
        />

        <Container className="relative grid items-center gap-10 laptop:grid-cols-12 laptop:gap-8">
          <div className="laptop:col-span-7">
            <p className="rd-rise text-sm font-medium text-rd-muted">Gold Coast · Yatala QLD</p>
            <h1
              className="rd-emboss rd-rise mt-4 font-cond text-[44px] leading-[0.95] font-bold tracking-[-0.5px] uppercase text-balance tablet:text-[60px] desktop:text-[72px]"
              style={delay(0.05)}
            >
              {homeTagline}
            </h1>
            <p
              className="rd-rise mt-6 max-w-[36rem] text-lg leading-[1.6] text-rd-gray"
              style={delay(0.1)}
            >
              {homeLead}
            </p>
            <div className="rd-rise mt-8 flex flex-wrap gap-3" style={delay(0.15)}>
              <ButtonLink href="#products">Browse products</ButtonLink>
              <ButtonLink href={contactInfo.phoneHref} variant="ghost">
                Call {contactInfo.phone}
              </ButtonLink>
            </div>
          </div>

          <div className="laptop:col-span-5">
            <HeroStage
              name="suspension"
              fallback={{
                src: homeCategories[0].image,
                alt: homeCategories[0].alt,
                width: 184,
                height: 281,
              }}
              label="K-Tech suspension, 3D view"
              className="max-w-[360px] laptop:max-w-[520px]"
            />
          </div>
        </Container>
      </section>

      {/* ---------- Products: die-cut cards ---------- */}
      <section id="products" className="py-16 laptop:py-20" aria-labelledby="products-title">
        <Container>
          <SectionHeading
            kicker="Products"
            title="Suspension, brakes and lubricants"
            id="products-title"
          >
            <p>{homeStoreNote}</p>
          </SectionHeading>

          <div className="mt-16 grid gap-x-6 gap-y-16 tablet:grid-cols-2 laptop:mt-20 laptop:grid-cols-3 laptop:gap-y-20">
            {homeCategories.map((category, index) => (
              <DiecutCard
                key={category.href}
                href={category.href}
                image={{ src: category.image, alt: category.alt, width: 184, height: 281 }}
                title={category.caption.join(" ")}
                kicker={categoryBrands[index]}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- The workshop ---------- */}
      <section className="py-16 laptop:py-20" aria-labelledby="shop-title">
        <Container className="grid gap-12 laptop:grid-cols-12">
          <div className="laptop:col-span-5">
            <SectionHeading
              kicker="The workshop"
              title="Suspension tuning, first and foremost"
              id="shop-title"
            />
          </div>
          <div className="space-y-5 laptop:col-span-7 laptop:pt-8">
            {homeIntro.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "text-lg leading-[1.65] text-rd-light"
                    : "text-base leading-[1.7] text-rd-gray"
                }
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
            <Image
              src="/images/home/ride-dynamics-racing-suspension-gold-coast.jpg"
              alt="Ride Dynamics racing suspension, Gold Coast"
              width={655}
              height={202}
              sizes="(min-width: 1240px) 1176px, 95vw"
              className="h-auto w-full rounded-[8px]"
            />
          </figure>
        </Container>
      </section>

      {/* ---------- Brands ---------- */}
      <section className="py-16 laptop:py-20" aria-labelledby="brands-title">
        <Container>
          <SectionHeading
            kicker="Our brands"
            title="Proven winners the world over"
            id="brands-title"
          />
          <ul className="mt-12 grid gap-4 tablet:grid-cols-3" data-reveal>
            {brands.map((brand) => (
              <li key={brand.href}>
                <Link
                  href={brand.href}
                  className={`flex h-36 items-center justify-center rounded-[16px] px-8 shadow-[inset_0_2px_6px_rgba(0,0,0,0.35)] transition-opacity duration-150 ease-rd hover:opacity-90 ${
                    brand.dark ? "bg-black" : "bg-rd-paper"
                  }`}
                >
                  <Image
                    src={brand.logo.src}
                    alt={brand.logo.alt}
                    width={brand.logo.width}
                    height={brand.logo.height}
                    sizes="300px"
                    className="h-auto max-h-20 w-auto max-w-full"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title="Browse, choose, ride">
        <p>{homeStoreLead}</p>
      </CtaBand>
    </>
  );
}
