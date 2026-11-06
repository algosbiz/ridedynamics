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

export default function ServicesPage() {
  const photos = [...servicesSideImages.slice(1), ...servicesBottomImages];
  const tallPhoto = servicesSideImages[2];

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section data-hero className="relative overflow-hidden pt-10 pb-16 laptop:pt-16 laptop:pb-24">
        <span
          aria-hidden="true"
          data-drift="-6"
          className="rd-deboss pointer-events-none absolute top-4 right-[-4vw] font-cond text-[30vw] leading-[0.8] font-bold whitespace-nowrap uppercase select-none laptop:text-[20vw]"
        >
          Workshop
        </span>

        <Container className="relative grid items-center gap-10 laptop:grid-cols-12">
          <div className="laptop:col-span-7">
            <p className="rd-rise flex items-center gap-3 font-cond text-[13px] font-bold tracking-[4px] text-rd-red uppercase">
              <span aria-hidden="true">01</span>
              <span aria-hidden="true" className="h-px w-10 bg-rd-red/60" />
              Suspension · Brakes · Custom builds
            </p>
            <h1
              className="rd-emboss rd-rise mt-5 font-cond text-[64px] leading-[0.92] font-bold uppercase tablet:text-[96px] desktop:text-[120px]"
              style={{ "--d": "0.08s" } as React.CSSProperties}
            >
              {servicesHeading}
            </h1>
            <p
              className="rd-rise mt-6 max-w-[56ch] text-[19px] leading-[1.6] text-rd-light/85"
              style={{ "--d": "0.16s" } as React.CSSProperties}
            >
              {servicesIntro}
            </p>
            <div
              className="rd-rise mt-8 flex flex-wrap gap-3"
              style={{ "--d": "0.24s" } as React.CSSProperties}
            >
              <ButtonLink href="#list">What we do</ButtonLink>
              <ButtonLink href={contactInfo.phoneHref} variant="ghost">
                Book on {contactInfo.phone}
              </ButtonLink>
            </div>
          </div>
          <div className="laptop:col-span-5" data-hero-stage>
            <div className="rd-surface relative mx-auto aspect-square w-full max-w-[340px] rounded-full p-10 laptop:max-w-[420px]">
              <Image
                src={servicesSideImages[0].src}
                alt={servicesSideImages[0].alt}
                width={servicesSideImages[0].width}
                height={servicesSideImages[0].height}
                preload
                className="h-full w-full rounded-full object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- 02 The numbered list of services ---------- */}
      <section id="list" className="py-16 laptop:py-24" aria-labelledby="list-title">
        <Container className="grid gap-12 laptop:grid-cols-12">
          <div className="laptop:col-span-4">
            <div className="laptop:sticky laptop:top-[calc(var(--rd-header-h)+32px)]">
              <SectionHeading number="02" kicker="What we do" title="Ten jobs, done properly" id="list-title">
                <p>{servicesListIntro}</p>
              </SectionHeading>
            </div>
          </div>
          <div className="laptop:col-span-8">
            <NumberedSteps items={servicesList.map((text) => ({ text }))} />
            <p className="mt-12 max-w-[60ch] pl-[72px] text-[16px] leading-[1.65] tablet:pl-[96px]" data-reveal>
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
          <div className="grid gap-6 tablet:grid-cols-2">
            <div className="grid gap-6">
              {photos
                .filter((image) => image !== tallPhoto)
                .map((image) => (
                  <figure key={image.src} className="rd-surface overflow-hidden rounded-[20px] p-3" data-reveal>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(min-width: 676px) 45vw, 90vw"
                      className="aspect-[16/9] h-auto w-full rounded-[12px] object-cover"
                    />
                  </figure>
                ))}
            </div>
            <figure className="rd-surface overflow-hidden rounded-[20px] p-3" data-reveal>
              <Image
                src={tallPhoto.src}
                alt={tallPhoto.alt}
                width={tallPhoto.width}
                height={tallPhoto.height}
                sizes="(min-width: 676px) 45vw, 90vw"
                className="h-full w-full rounded-[12px] object-cover"
              />
            </figure>
          </div>
        </Container>
      </section>

      <CtaBand title="Book your suspension in" stamp="Service">
        <p>{servicesOutro}</p>
      </CtaBand>
    </>
  );
}
