import type { Metadata } from "next";
import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
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

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

export default function ServicesPage() {
  const photos = [...servicesSideImages.slice(1), ...servicesBottomImages];
  const tallPhoto = servicesSideImages[2];

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="pt-12 pb-16 laptop:pt-16 laptop:pb-20">
        <Container className="grid items-center gap-10 laptop:grid-cols-12">
          <div className="laptop:col-span-7">
            <p className="rd-rise text-sm font-medium text-rd-muted">
              Suspension · Brakes · Custom builds
            </p>
            <h1
              className="rd-emboss rd-rise mt-4 font-cond text-[44px] leading-[0.95] font-bold uppercase tablet:text-[64px] desktop:text-[76px]"
              style={delay(0.05)}
            >
              {servicesHeading}
            </h1>
            <p
              className="rd-rise mt-6 max-w-[36rem] text-lg leading-[1.6] text-rd-gray"
              style={delay(0.1)}
            >
              {servicesIntro}
            </p>
            <div className="rd-rise mt-8 flex flex-wrap gap-3" style={delay(0.15)}>
              <ButtonLink href="#list">What we do</ButtonLink>
              <ButtonLink href={contactInfo.phoneHref} variant="ghost">
                Book on {contactInfo.phone}
              </ButtonLink>
            </div>
          </div>
          <div className="laptop:col-span-5">
            <figure className="rd-surface mx-auto w-full max-w-[340px] rounded-[20px] p-3 laptop:max-w-[420px]">
              <Image
                src={servicesSideImages[0].src}
                alt={servicesSideImages[0].alt}
                width={servicesSideImages[0].width}
                height={servicesSideImages[0].height}
                preload
                sizes="(min-width: 851px) 420px, 340px"
                className="aspect-square h-auto w-full rounded-[8px] object-cover"
              />
            </figure>
          </div>
        </Container>
      </section>

      {/* ---------- The numbered list of services ---------- */}
      <section id="list" className="py-16 laptop:py-20" aria-labelledby="list-title">
        <Container className="grid gap-12 laptop:grid-cols-12">
          <div className="laptop:col-span-4">
            <div className="laptop:sticky laptop:top-[calc(var(--rd-header-h)+32px)]">
              <SectionHeading kicker="What we do" title="Ten jobs, done properly" id="list-title">
                <p>{servicesListIntro}</p>
              </SectionHeading>
            </div>
          </div>
          <div className="laptop:col-span-8">
            <NumberedSteps items={servicesList.map((text) => ({ text }))} />
            {/* Lines up with the step text: 48px number box + gap. */}
            <p className="mt-12 max-w-[60ch] pl-16 text-base leading-[1.7] text-rd-gray tablet:pl-[72px]">
              {servicesOutro}
            </p>
          </div>
        </Container>
      </section>

      {/* ---------- Photos ---------- */}
      <section className="py-8 laptop:py-12" aria-label="Workshop photos">
        <Container>
          {/* The tall custom-build photo stands on the right; the three
              landscape photos stack on the left. */}
          <div className="grid gap-6 tablet:grid-cols-2" data-reveal>
            <div className="grid gap-6">
              {photos
                .filter((image) => image !== tallPhoto)
                .map((image) => (
                  <figure key={image.src} className="rd-surface overflow-hidden rounded-[20px] p-3">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(min-width: 676px) 45vw, 90vw"
                      className="aspect-[16/9] h-auto w-full rounded-[8px] object-cover"
                    />
                  </figure>
                ))}
            </div>
            <figure className="rd-surface overflow-hidden rounded-[20px] p-3">
              <Image
                src={tallPhoto.src}
                alt={tallPhoto.alt}
                width={tallPhoto.width}
                height={tallPhoto.height}
                sizes="(min-width: 676px) 45vw, 90vw"
                className="h-full w-full rounded-[8px] object-cover"
              />
            </figure>
          </div>
        </Container>
      </section>

      <CtaBand title="Book your suspension in" />
    </>
  );
}
