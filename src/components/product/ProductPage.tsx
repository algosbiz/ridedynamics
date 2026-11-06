import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Faq from "@/components/ui/Faq";
import SectionHeading from "@/components/ui/SectionHeading";
import SpecTable from "@/components/ui/SpecTable";
import HeroStage from "@/components/three/HeroStage";
import { contactInfo } from "@/data/contact";
import { showOnlineStoreLink } from "@/data/navigation";
import type { ProductPageContent } from "@/data/product-pages";

export default function ProductPage({
  content,
}: {
  content: ProductPageContent;
}) {
  const { brand } = content;
  return (
    <div
      className={`rd-page rd-product-page rd-product-page--${content.model}`}
    >
      <PageHero
        eyebrow={brand}
        title={content.title}
        lines={content.title.split(" ")}
        lead={content.lead}
        model
        actions={
          <>
            <a href="#range" className="m-btn">
              See the range
            </a>
            <a href={contactInfo.phoneHref} className="m-link-2">
              Call {contactInfo.phone}
            </a>
          </>
        }
        visual={
          <HeroStage
            name={content.model}
            fallback={content.modelFallback}
            label={`${brand} ${content.title}, 3D view`}
            className="rd-product-stage"
          />
        }
      />
      <section
        id="range"
        className="rd-page-section"
        aria-labelledby="range-title"
      >
        <div className="rd-section-top">
          <SectionHeading
            kicker="The range"
            title={`${brand} parts we stock`}
            id="range-title"
          />
          <a className="m-link-2" href="#brand-story">
            Why {brand}
          </a>
        </div>
        <ul
          className={`rd-range-grid ${content.range.length === 4 ? "rd-range-grid--four" : ""}`}
        >
          {content.range.map((item, index) => (
            <li className="rd-range-item" key={item.image.src} data-reveal>
              <figure className="rd-range-swatch m-surface">
                <div className="rd-range-window">
                  <Image
                    {...item.image}
                    alt={item.image.alt}
                    sizes="(min-width: 768px) 260px, 42vw"
                  />
                </div>
                <span className="rd-range-index m-cut" aria-hidden="true">
                  0{index + 1}
                </span>
              </figure>
              <div className="rd-range-caption">
                <p className="m-text-3">{item.kicker}</p>
                <h3 className="m-title">{item.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section
        id="brand-story"
        className="rd-brand-story"
        aria-labelledby="story-title"
      >
        <div className="rd-brand-story__tray m-ply">
          <SectionHeading
            kicker={`Why ${brand}`}
            title={content.storyTitle}
            id="story-title"
          />
          <div className="rd-brand-story__body">
            {content.story.map((paragraph, index) => (
              <p
                className={index === 0 ? "m-text-2" : "m-text"}
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="rd-brand-specs" aria-label={`${brand} at a glance`}>
            <div
              className={`rd-brand-plate ${content.logoOnDark ? "rd-brand-plate--dark" : ""}`}
            >
              <Image {...content.logo} alt={content.logo.alt} sizes="240px" />
            </div>
            <SpecTable specs={content.specs} caption={`${brand} at a glance`} />
          </aside>
        </div>
      </section>
      {content.gallery.length > 0 && (
        <section
          className="rd-page-section rd-gallery-section"
          aria-label={`${brand} on the bike`}
        >
          <div className="rd-product-gallery">
            {content.gallery.map((image) => (
              <figure className="rd-photo-well" key={image.src} data-reveal>
                <Image
                  {...image}
                  alt={image.alt}
                  sizes="(min-width: 768px) 38vw, 85vw"
                />
                <figcaption className="m-text-3">{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      <section
        className="rd-page-section rd-page-faq"
        aria-labelledby="faq-title"
      >
        <SectionHeading
          kicker="FAQ"
          title="Questions riders ask"
          id="faq-title"
        />
        <Faq items={content.faq} />
      </section>
      <CtaBand title={`Get ${brand} on your bike`}>
        <p>
          {showOnlineStoreLink
            ? content.storeLine
            : `Call or email Ride Dynamics about the ${brand} range.`}
        </p>
      </CtaBand>
    </div>
  );
}
