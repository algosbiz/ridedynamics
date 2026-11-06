import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import NumberedSteps from "@/components/ui/NumberedSteps";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactInfo } from "@/data/contact";
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

const serviceTitles = [
  "Front fork maintenance",
  "Front fork upgrades",
  "Headset bearings",
  "Triple clamps",
  "Rear shock maintenance",
  "Rear shock upgrades",
  "Swingarm & linkage",
  "Swingarm alterations",
  "Brake servicing",
  "Custom motorcycle building",
];

export default function ServicesPage() {
  const photos = [
    servicesSideImages[1],
    ...servicesBottomImages,
    servicesSideImages[2],
  ];
  return (
    <div className="rd-page rd-services-page">
      <PageHero
        eyebrow="Suspension · Brakes · Custom builds"
        title={servicesHeading}
        lines={[servicesHeading]}
        lead={servicesIntro}
        actions={
          <>
            <a className="m-btn" href="#list">
              What we do
            </a>
            <a className="m-link-2" href={contactInfo.phoneHref}>
              Book on {contactInfo.phone}
            </a>
          </>
        }
        visual={
          <div className="rd-service-seal m-ply">
            <span className="rd-service-seal__ring" aria-hidden="true" />
            <Image
              {...servicesSideImages[0]}
              alt={servicesSideImages[0].alt}
              preload
              sizes="(min-width: 768px) 300px, 220px"
            />
          </div>
        }
      />
      <section
        id="list"
        className="rd-page-section rd-page-split"
        aria-labelledby="list-title"
      >
        <div className="rd-page-sticky">
          <SectionHeading
            kicker="What we do"
            title="Ten jobs, done properly"
            id="list-title"
          >
            <p>{servicesListIntro}</p>
          </SectionHeading>
        </div>
        <div>
          <NumberedSteps
            className="rd-service-chapters"
            items={servicesList.map((text, index) => ({
              title: serviceTitles[index],
              text,
            }))}
          />
          <p className="rd-service-outro m-text">{servicesOutro}</p>
        </div>
      </section>
      <section
        className="rd-page-section rd-gallery-section"
        aria-labelledby="workshop-title"
      >
        <div className="rd-section-top">
          <SectionHeading
            kicker="The workshop"
            title="Suspension. Brakes. Custom builds."
            id="workshop-title"
          />
        </div>
        <div className="rd-workshop-grid">
          {photos.map((image) => (
            <figure className="rd-photo-well" key={image.src} data-reveal>
              <Image
                {...image}
                alt={image.alt}
                sizes="(min-width: 768px) 40vw, 85vw"
              />
              <figcaption className="m-text-3">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CtaBand title="Book your suspension in" />
    </div>
  );
}
