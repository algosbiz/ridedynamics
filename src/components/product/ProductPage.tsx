import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/ui/CtaBand";
import DiecutCard from "@/components/ui/DiecutCard";
import Faq from "@/components/ui/Faq";
import SectionHeading from "@/components/ui/SectionHeading";
import SpecTable from "@/components/ui/SpecTable";
import ModelStage from "@/components/three/ModelStage";
import { contactInfo } from "@/data/contact";
import { showOnlineStoreLink } from "@/data/navigation";
import type { ProductPageContent } from "@/data/product-pages";

// The shared layout of the three product pages (Suspension Parts, Brake
// Components, Lubricants): hero with the 3D part, the range as die-cut
// cards, the brand story with a spec sheet, photos, FAQ, and a buy band.

export default function ProductPage({ content }: { content: ProductPageContent }) {
  const { brand } = content;
  const [firstStory, ...restStory] = content.story;

  return (
    <>
      {/* ---------- 01 Hero ---------- */}
      <section data-hero className="relative overflow-hidden pt-10 pb-16 laptop:pt-16 laptop:pb-24">
        <span
          aria-hidden="true"
          data-drift="-6"
          className="rd-deboss pointer-events-none absolute top-6 right-[-4vw] font-cond text-[28vw] leading-[0.8] font-bold whitespace-nowrap uppercase select-none laptop:text-[18vw]"
        >
          {brand}
        </span>

        <Container className="relative grid items-center gap-10 laptop:grid-cols-12 laptop:gap-8">
          <div className="laptop:col-span-6">
            <p className="rd-rise flex items-center gap-3 font-cond text-[13px] font-bold tracking-[4px] text-rd-red uppercase">
              <span aria-hidden="true">01</span>
              <span aria-hidden="true" className="h-px w-10 bg-rd-red/60" />
              {brand}
            </p>
            <h1
              className="rd-emboss rd-rise mt-5 font-cond text-[56px] leading-[0.92] font-bold tracking-[-1px] uppercase text-balance tablet:text-[84px] desktop:text-[104px]"
              style={{ "--d": "0.08s" } as React.CSSProperties}
            >
              {content.title}
            </h1>
            <p
              className="rd-rise mt-6 max-w-[46ch] text-[19px] leading-[1.55] text-rd-light/85"
              style={{ "--d": "0.16s" } as React.CSSProperties}
            >
              {content.lead}
            </p>

            <div
              className="rd-rise mt-8 flex flex-wrap items-center gap-3"
              style={{ "--d": "0.24s" } as React.CSSProperties}
            >
              <ButtonLink href="#range">See the range</ButtonLink>
              <ButtonLink href={contactInfo.phoneHref} variant="ghost">
                Call {contactInfo.phone}
              </ButtonLink>
            </div>

            <div
              className={`rd-rise mt-10 inline-flex items-center rounded-[14px] px-6 py-4 shadow-[inset_0_2px_6px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.06)] ${
                content.logoOnDark ? "bg-black" : "bg-rd-paper"
              }`}
              style={{ "--d": "0.32s" } as React.CSSProperties}
            >
              <Image
                src={content.logo.src}
                alt={content.logo.alt}
                width={content.logo.width}
                height={content.logo.height}
                className="h-[56px] w-auto"
              />
            </div>
          </div>

          <div className="laptop:col-span-6" data-hero-stage>
            <div className="relative mx-auto aspect-square w-full max-w-[380px] laptop:max-w-[560px]">
              {/* The turntable the part sits on. */}
              <div
                aria-hidden="true"
                className="absolute inset-[6%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(237,28,36,0.22), transparent 62%), repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.045) 0 1px, transparent 1px 22px)",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              />
              <ModelStage
                name={content.model}
                fallback={content.modelFallback}
                label={`${brand} ${content.title}, 3D view`}
                preload
                className="absolute inset-0"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- 02 The range ---------- */}
      <section id="range" className="py-16 laptop:py-24" aria-labelledby="range-title">
        <Container>
          <SectionHeading
            number="02"
            kicker="The range"
            title={`${brand} parts we stock`}
            id="range-title"
          />
          <div
            className={`mt-20 grid gap-x-6 gap-y-20 tablet:grid-cols-2 ${
              content.range.length === 4 ? "desktop:grid-cols-4" : "laptop:grid-cols-3"
            }`}
          >
            {content.range.map((item, index) => (
              <DiecutCard
                key={item.image.src}
                image={item.image}
                title={item.title}
                kicker={item.kicker}
                number={String(index + 1).padStart(2, "0")}
                imageScale="native"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- 03 Story + spec sheet ---------- */}
      <section className="py-16 laptop:py-24" aria-labelledby="story-title">
        <Container>
          <SectionHeading
            number="03"
            kicker={`Why ${brand}`}
            title={`Proven on the track. Built for your bike.`}
            id="story-title"
          />
          <div className="mt-12 grid gap-12 laptop:grid-cols-12">
            <div className="space-y-5 laptop:col-span-7">
              <p className="text-[19px] leading-[1.6] text-rd-light/90" data-reveal>
                {firstStory}
              </p>
              {restStory.map((paragraph) => (
                <p key={paragraph} className="text-[16px] leading-[1.7]" data-reveal>
                  {paragraph}
                </p>
              ))}
            </div>
            <aside className="laptop:col-span-5" aria-label={`${brand} at a glance`}>
              <div className="laptop:sticky laptop:top-[calc(var(--rd-header-h)+32px)]">
                <p className="mb-4 font-cond text-[13px] font-bold tracking-[4px] text-rd-red uppercase">
                  Spec sheet
                </p>
                <SpecTable specs={content.specs} caption={`${brand} at a glance`} />
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ---------- Photos ---------- */}
      {content.gallery.length > 0 && (
        <section className="py-8 laptop:py-12" aria-label={`${brand} on the bike`}>
          <Container>
            {/* The photo files are small, so each frame is sized to the
                photo (at most 1.5x) instead of stretching it. */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {content.gallery.map((image, index) => (
                <figure
                  key={image.src}
                  className="rd-surface rounded-[20px] p-3"
                  style={{ width: `min(100%, ${Math.round(image.width * 1.5) + 24}px)` }}
                  data-reveal
                  data-parallax={index % 2 ? "0.08" : "0.03"}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes={`${Math.round(image.width * 1.5)}px`}
                    className="h-auto w-full rounded-[12px]"
                  />
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ---------- 04 FAQ ---------- */}
      <section className="py-16 laptop:py-24" aria-labelledby="faq-title">
        <Container className="grid gap-10 laptop:grid-cols-12">
          <div className="laptop:col-span-5">
            <SectionHeading number="04" kicker="FAQ" title="Questions riders ask" id="faq-title" />
          </div>
          <div className="laptop:col-span-7">
            <Faq items={content.faq} />
          </div>
        </Container>
      </section>

      <CtaBand title={`Get ${brand} on your bike`} stamp={brand}>
        <p>
          {showOnlineStoreLink
            ? content.storeLine
            : `Call or email Ride Dynamics about the ${brand} range.`}
        </p>
      </CtaBand>
    </>
  );
}
