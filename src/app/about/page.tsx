import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
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

const chapters = [
  "From Salter Engineering",
  "Ride Dynamics is born",
  "Brands we raced on",
  "What we offer",
  "Our promise",
];

export default function AboutPage() {
  return (
    <div className="rd-page rd-about-page">
      <PageHero
        eyebrow="Gold Coast based"
        title="About Ride Dynamics"
        lines={["About", "Ride Dynamics"]}
        lead="Ride Dynamics is a Gold Coast based Motorcycle Suspension Tuning Business."
        actions={
          <>
            <a className="m-btn" href="#story">
              Our story
            </a>
            <Link className="m-link-2" href="/services">
              Our services
            </Link>
          </>
        }
        visual={
          <figure className="rd-workshop-portrait">
            <div className="rd-photo-well">
              <Image
                src="/images/about/ride-dynamics-workshop.png"
                alt="The Ride Dynamics workshop"
                width={454}
                height={347}
                preload
                sizes="(min-width: 768px) 40vw, 85vw"
              />
            </div>
            <Image
              className="rd-workshop-emblem"
              src="/images/about/ride-dynamics-emblem.png"
              alt="Ride Dynamics"
              width={339}
              height={339}
              sizes="(min-width: 768px) 140px, 100px"
              preload
            />
          </figure>
        }
      />
      <section
        id="story"
        className="rd-page-section rd-page-split"
        aria-labelledby="story-title"
      >
        <div className="rd-page-sticky">
          <SectionHeading
            kicker="Our story"
            title="How we got here"
            id="story-title"
          />
        </div>
        <NumberedSteps
          items={aboutParagraphs.map((text, index) => ({
            title: chapters[index],
            text: text.trim(),
          }))}
        />
      </section>
      <section
        className="rd-page-section rd-gallery-section"
        aria-labelledby="gallery-title"
      >
        <SectionHeading
          kicker="The workshop"
          title="Suspension work"
          id="gallery-title"
        />
        <ul className="rd-photo-strip">
          {aboutGallery.map((image) => (
            <li key={image.src} data-reveal>
              <figure className="rd-photo-well">
                <Image
                  {...image}
                  alt={image.alt}
                  sizes="(min-width: 768px) 17vw, 40vw"
                />
                <figcaption className="m-text-3">{image.alt}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand title="Talk to the tuners">
        <p>{aboutParagraphs[4]}</p>
      </CtaBand>
    </div>
  );
}
