import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/ui/CtaBand";
import DiecutCard from "@/components/ui/DiecutCard";
import Faq from "@/components/ui/Faq";
import SectionHeading from "@/components/ui/SectionHeading";
import SpecTable from "@/components/ui/SpecTable";
import HeroStage from "@/components/three/HeroStage";
import { contactInfo } from "@/data/contact";
import { showOnlineStoreLink } from "@/data/navigation";
import type { ProductPageContent } from "@/data/product-pages";

// The shared layout of the three product pages (Suspension Parts, Brake
// Components, Lubricants): hero with the 3D part, the range as die-cut
// cards, the brand story with its spec sheet, photos, FAQ, and a buy band.

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

export default function ProductPage({ content }: { content: ProductPageContent }) {
  const { brand } = content;
  const [firstStory, ...restStory] = content.story;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="pt-12 pb-16 laptop:pt-16 laptop:pb-20">
        <Container className="grid items-center gap-10 laptop:grid-cols-12 laptop:gap-8">
          <div className="laptop:col-span-6">
            <p className="rd-rise text-sm font-medium text-rd-muted">{brand}</p>
            <h1
              className="rd-emboss rd-rise mt-4 font-cond text-[44px] leading-[0.95] font-bold tracking-[-0.5px] uppercase text-balance tablet:text-[64px] desktop:text-[76px]"
              style={delay(0.05)}
            >
              {content.title}
            </h1>
            <p
              className="rd-rise mt-6 max-w-[36rem] text-lg leading-[1.6] text-rd-gray"
              style={delay(0.1)}
            >
              {content.lead}
            </p>
            <div className="rd-rise mt-8 flex flex-wrap items-center gap-3" style={delay(0.15)}>
              <ButtonLink href="#range">See the range</ButtonLink>
              <ButtonLink href={contactInfo.phoneHref} variant="ghost">
                Call {contactInfo.phone}
              </ButtonLink>
            </div>
          </div>

          <div className="laptop:col-span-6">
            <HeroStage
              name={content.model}
              fallback={content.modelFallback}
              label={`${brand} ${content.title}, 3D view`}
              className="max-w-[380px] laptop:max-w-[560px]"
            />
          </div>
        </Container>
      </section>

      {/* ---------- The range ---------- */}
      <section id="range" className="py-16 laptop:py-20" aria-labelledby="range-title">
        <Container>
          <SectionHeading kicker="The range" title={`${brand} parts we stock`} id="range-title" />
          {/* Extra room above each row: the parts lift out over the top
              edge of their cards. */}
          <div
            className={`mt-16 grid gap-x-6 gap-y-16 tablet:grid-cols-2 laptop:mt-20 laptop:gap-y-20 ${
              content.range.length === 4 ? "desktop:grid-cols-4" : "laptop:grid-cols-3"
            }`}
          >
            {content.range.map((item) => (
              <DiecutCard
                key={item.image.src}
                image={item.image}
                title={item.title}
                kicker={item.kicker}
                imageScale="native"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Story + spec sheet ---------- */}
      <section className="py-16 laptop:py-20" aria-labelledby="story-title">
        <Container>
          <SectionHeading kicker={`Why ${brand}`} title={content.storyTitle} id="story-title" />
          <div className="mt-12 grid gap-12 laptop:grid-cols-12">
            <div className="space-y-5 laptop:col-span-7">
              <p className="text-lg leading-[1.65] text-rd-light">{firstStory}</p>
              {restStory.map((paragraph) => (
                <p key={paragraph} className="text-base leading-[1.7] text-rd-gray">
                  {paragraph}
                </p>
              ))}
            </div>
            <aside className="laptop:col-span-5" aria-label={`${brand} at a glance`}>
              <div className="laptop:sticky laptop:top-[calc(var(--rd-header-h)+32px)]">
                {/* The brand's own logo heads its spec sheet, like the
                    maker's label on a parts box. */}
                <div
                  className={`flex h-24 items-center justify-center rounded-[16px] px-6 shadow-[inset_0_2px_6px_rgba(0,0,0,0.35)] ${
                    content.logoOnDark ? "bg-black" : "bg-rd-paper"
                  }`}
                >
                  <Image
                    src={content.logo.src}
                    alt={content.logo.alt}
                    width={content.logo.width}
                    height={content.logo.height}
                    sizes="240px"
                    className="h-auto max-h-16 w-auto max-w-full"
                  />
                </div>
                <SpecTable className="mt-6" specs={content.specs} caption={`${brand} at a glance`} />
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
            <div className="flex flex-wrap items-center justify-center gap-6" data-reveal>
              {content.gallery.map((image) => (
                <figure
                  key={image.src}
                  className="rd-surface rounded-[20px] p-3"
                  style={{ width: `min(100%, ${Math.round(image.width * 1.5) + 24}px)` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes={`${Math.round(image.width * 1.5)}px`}
                    className="h-auto w-full rounded-[8px]"
                  />
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ---------- FAQ ---------- */}
      <section className="py-16 laptop:py-20" aria-labelledby="faq-title">
        <Container className="grid gap-10 laptop:grid-cols-12">
          <div className="laptop:col-span-5">
            <SectionHeading kicker="FAQ" title="Questions riders ask" id="faq-title" />
          </div>
          <div className="laptop:col-span-7">
            <Faq items={content.faq} />
          </div>
        </Container>
      </section>

      <CtaBand title={`Get ${brand} on your bike`}>
        <p>
          {showOnlineStoreLink
            ? content.storeLine
            : `Call or email Ride Dynamics about the ${brand} range.`}
        </p>
      </CtaBand>
    </>
  );
}
