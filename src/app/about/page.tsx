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

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

export default function AboutPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="pt-12 pb-16 laptop:pt-16 laptop:pb-20">
        <Container className="grid items-center gap-10 laptop:grid-cols-12">
          <div className="laptop:col-span-6">
            <p className="rd-rise text-sm font-medium text-rd-muted">Gold Coast based</p>
            <h1
              className="rd-emboss rd-rise mt-4 font-cond text-[44px] leading-[0.95] font-bold uppercase text-balance tablet:text-[64px] desktop:text-[76px]"
              style={delay(0.05)}
            >
              About Ride Dynamics
            </h1>
            <div className="rd-rise mt-8 w-40 laptop:w-48" style={delay(0.1)}>
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
          <div className="laptop:col-span-6">
            <figure className="rd-surface overflow-hidden rounded-[20px] p-3">
              <Image
                src="/images/about/ride-dynamics-workshop.png"
                alt="The Ride Dynamics workshop"
                width={454}
                height={347}
                preload
                sizes="(min-width: 851px) 45vw, 95vw"
                className="h-auto w-full rounded-[8px]"
              />
            </figure>
          </div>
        </Container>
      </section>

      {/* ---------- The story, as numbered chapters ---------- */}
      <section className="py-16 laptop:py-20" aria-labelledby="story-title">
        <Container className="grid gap-12 laptop:grid-cols-12">
          <div className="laptop:col-span-4">
            <div className="laptop:sticky laptop:top-[calc(var(--rd-header-h)+32px)]">
              <SectionHeading kicker="Our story" title="How we got here" id="story-title" />
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
          <ul
            className="flex flex-wrap items-end justify-center gap-4 laptop:justify-between"
            data-reveal
          >
            {aboutGallery.map((image) => (
              <li key={image.src} className="rd-surface rounded-[16px] p-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="block h-auto max-w-full rounded-[8px]"
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
