import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/ui/CtaBand";
import NumberedSteps from "@/components/ui/NumberedSteps";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutGallery, aboutParagraphs } from "@/data/about";

export const metadata: Metadata = {
  title: "About | Ride Dynamics",
  description:
    "Ride Dynamics is a Gold Coast based Motorcycle Suspension Tuning Business, covering all aspects of motorcycle suspension for all types of motorcycles.",
  alternates: { canonical: "/about" },
};

// Short labels for each chapter of the story, taken from what that
// paragraph is about.
const chapters = [
  "From Salter Engineering",
  "Ride Dynamics is born",
  "Brands we raced on",
  "What we offer",
  "Our promise",
];

export default function AboutPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section data-hero className="relative overflow-hidden pt-10 pb-16 laptop:pt-16 laptop:pb-24">
        <Container className="relative grid items-center gap-10 laptop:grid-cols-12">
          <div className="laptop:col-span-6">
            <p className="rd-rise flex items-center gap-3 font-cond text-[13px] font-bold tracking-[4px] text-rd-red uppercase">
              <span aria-hidden="true">01</span>
              <span aria-hidden="true" className="h-px w-10 bg-rd-red/60" />
              Gold Coast based
            </p>
            <h1
              className="rd-emboss rd-rise mt-5 font-cond text-[56px] leading-[0.92] font-bold uppercase text-balance tablet:text-[84px] desktop:text-[104px]"
              style={{ "--d": "0.08s" } as React.CSSProperties}
            >
              About Ride Dynamics
            </h1>
            <div
              className="rd-rise mt-8 w-[180px] laptop:w-[220px]"
              style={{ "--d": "0.16s" } as React.CSSProperties}
            >
              <Image
                src="/images/about/ride-dynamics-emblem.png"
                alt="Ride Dynamics"
                width={339}
                height={339}
                preload
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="laptop:col-span-6" data-hero-stage>
            <figure className="rd-surface overflow-hidden rounded-[24px] p-3">
              <Image
                src="/images/about/ride-dynamics-workshop.png"
                alt="The Ride Dynamics workshop"
                width={454}
                height={347}
                preload
                sizes="(min-width: 851px) 45vw, 95vw"
                className="h-auto w-full rounded-[16px]"
              />
            </figure>
          </div>
        </Container>
      </section>

      {/* ---------- 02 The story, as numbered chapters ---------- */}
      <section className="py-16 laptop:py-24" aria-labelledby="story-title">
        <Container className="grid gap-12 laptop:grid-cols-12">
          <div className="laptop:col-span-4">
            <div className="laptop:sticky laptop:top-[calc(var(--rd-header-h)+32px)]">
              <SectionHeading number="02" kicker="Our story" title="How we got here" id="story-title" />
            </div>
          </div>
          <div className="laptop:col-span-8">
            <NumberedSteps
              items={aboutParagraphs.map((text, index) => ({
                title: chapters[index],
                text: text.trim(),
              }))}
            />
          </div>
        </Container>
      </section>

      {/* ---------- Gallery ---------- */}
      <section className="py-8 laptop:py-12" aria-label="Suspension work">
        <Container>
          <ul className="flex flex-wrap items-end justify-center gap-4 laptop:justify-between">
            {aboutGallery.map((image) => (
              <li key={image.src} className="rd-surface rounded-[16px] p-2" data-reveal>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="block h-auto max-w-full rounded-[10px]"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title="Talk to the tuners">
        <p>{aboutParagraphs[4]}</p>
      </CtaBand>
    </>
  );
}
