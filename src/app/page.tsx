import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/home/ContactForm";
import { contactInfo, footerServices } from "@/data/contact";
import {
  homeCategories,
  homeIntro,
  homeLead,
  homeStoreLead,
  homeStoreNote,
  homeTagline,
} from "@/data/home";
import {
  suspensionPage,
  brakesPage,
  lubricantsPage,
} from "@/data/product-pages";
import {
  servicesIntro,
  servicesList,
  servicesSideImages,
} from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: site.homeTitle,
  description:
    "Ride Dynamics is a Gold Coast motorcycle suspension tuning shop, specialising in service, repairs and performance modifications to suspension units for all types of motorcycles.",
  alternates: { canonical: "/" },
};

const length = (text: string) => ({ "--len": text.length }) as CSSProperties;
const brands = [suspensionPage, brakesPage, lubricantsPage];
const categories = [
  ...homeCategories.map((category, index) => ({
    title: category.caption.join(" "),
    href: category.href,
    image: { src: category.image, alt: category.alt, width: 184, height: 281 },
    description: brands[index].lead,
  })),
  ...footerServices.slice(1).map((title, index) => ({
    title,
    href: "/services",
    image: servicesSideImages[index],
    description: servicesList[[0, 1, 5][index]],
  })),
];
const work = [
  {
    page: suspensionPage,
    item: suspensionPage.range[0],
    href: "/suspension-parts",
  },
  {
    page: suspensionPage,
    item: suspensionPage.range[2],
    href: "/suspension-parts",
  },
  { page: brakesPage, item: brakesPage.range[0], href: "/brake-components" },
  { page: lubricantsPage, item: lubricantsPage.range[0], href: "/lubricants" },
];
const faq = [
  ...suspensionPage.faq.slice(0, 2),
  ...brakesPage.faq.slice(0, 2),
  lubricantsPage.faq[0],
];

export default function HomePage() {
  return (
    <div className="rv-home">
      <section id="hero" aria-labelledby="hero-title">
        <div className="hero__flap m-board">
          <span className="hero__light" aria-hidden="true" />
          <div className="hero__inner">
            <h1
              className="hero__title"
              id="hero-title"
              aria-label={homeTagline}
            >
              {["Motorcycle", "suspension", "and brake", "specialist"].map(
                (word, index) => (
                  <span
                    key={word}
                    className={`hero__line hero__line--${index < 2 ? "raised" : "cut"}`}
                    aria-hidden="true"
                  >
                    {index < 2 ? (
                      <span className="hero__channel m-ply">
                        <span
                          className="hero__word m-raised"
                          style={length(word)}
                        >
                          {word}
                        </span>
                      </span>
                    ) : (
                      <span className="hero__word m-cut" style={length(word)}>
                        {word}
                      </span>
                    )}
                  </span>
                ),
              )}
            </h1>
            <div className="hero__aside">
              <p className="m-text-2">{homeLead}</p>
              <div className="hero__actions">
                <a className="m-btn" href="#finishes">
                  <span className="m-btn__label">Browse products</span>
                </a>
                <a className="m-link-2" href={contactInfo.phoneHref}>
                  Call {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
          <span className="hero__wash" aria-hidden="true" />
        </div>
      </section>

      <section id="craft" aria-labelledby="craft-title">
        <div className="craft__stage">
          <div className="craft__flap m-board">
            <h2 className="craft__statement" id="craft-title">
              {footerServices.map((word) => (
                <span
                  className="craft__line m-cut"
                  style={length(word)}
                  key={word}
                >
                  {word}.
                </span>
              ))}
              <span className="craft__roller" aria-hidden="true" />
            </h2>
            <div className="craft__note">
              <p className="m-text-2">{homeIntro[0]}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="finishes" aria-labelledby="finishes-title">
        <span id="products" className="rd-anchor" />
        <div className="finishes__head">
          <h2 className="finishes__title m-cut" id="finishes-title">
            Suspension, brakes and lubricants
          </h2>
          <p className="m-text-2">{homeStoreNote}</p>
        </div>
        <ul className="finishes__grid">
          {categories.map((category) => (
            <li className="finishes__item" key={category.title}>
              <Link
                href={category.href}
                className="finishes__swatch m-surface"
                aria-label={category.title}
              >
                <Image
                  {...category.image}
                  alt={category.image.alt}
                  sizes="(max-width: 767px) 43vw, 27vw"
                  className="rd-swatch-image"
                />
              </Link>
              <h3 className="m-title">
                <Link href={category.href}>{category.title}</Link>
              </h3>
              <p className="m-text">{category.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="process" aria-labelledby="process-title">
        <div className="process__stage">
          <div className="process__head">
            <h2 className="process__title m-cut" id="process-title">
              Suspension tuning, first and foremost
            </h2>
            <p className="m-text-2">{servicesIntro}</p>
          </div>
          <div className="process__channel m-ply">
            <div className="process__track">
              <div className="process__intro">
                <p className="m-text-2">{homeLead}</p>
                <Link className="m-link-2" href="/services">
                  Our services
                </Link>
              </div>
              <ol className="process__steps">
                {footerServices.map((title, index) => (
                  <li className="process__step m-surface" key={title}>
                    <span className="m-text-3">0{index + 1}</span>
                    <h3 className="m-title">{title}</h3>
                    <p className="m-text">
                      {servicesList[[0, 4, 1, 5][index]]}
                    </p>
                    <div className="process__visual" aria-hidden="true">
                      <span className={`rd-mechanism rd-mechanism--${index}`}>
                        <span />
                        <span />
                        <span />
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="process__end">
                <p className="m-title">
                  Motorcycle suspension and brake specialist
                </p>
                <Link className="m-link-2" href="/contact">
                  Enquire now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" aria-labelledby="work-title">
        <div className="work__head">
          <h2 className="work__title m-cut" id="work-title">
            Proven winners the world over
          </h2>
          <p className="m-text-2">{homeIntro[2]}</p>
        </div>
        <ol className="work__list">
          {work.map(({ page, item, href }) => (
            <li className="work__item" key={item.title}>
              <span className="work__floor" aria-hidden="true" />
              <div className="work__sleeve-wrap" aria-hidden="true">
                <div className="work__sleeve m-surface">
                  <span className="work__client m-title">{page.brand}</span>
                </div>
                <span className="work__rim" />
              </div>
              <Link
                className="work__tray m-well"
                href={href}
                aria-label={item.title}
              >
                <Image
                  {...item.image}
                  alt={item.image.alt}
                  sizes="(max-width: 767px) 43vw, 27vw"
                />
              </Link>
              <div className="work__info">
                <h3 className="m-title">{item.title}</h3>
                <p className="m-text">{page.lead}</p>
                <dl className="work__specs">
                  {page.specs.slice(0, 3).map((spec) => (
                    <div key={spec.label}>
                      <dt className="m-text-3">{spec.label}</dt>
                      <dd className="m-text">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="studio" aria-labelledby="studio-title">
        <div className="studio__tray m-ply">
          <h2 className="studio__title m-raised" id="studio-title">
            The workshop
          </h2>
          <p className="studio__lead m-text-2">Gold Coast · Yatala QLD</p>
          <figure className="studio__photo studio__photo--bench">
            <Image
              src="/images/home/ride-dynamics-racing-suspension-gold-coast.jpg"
              width={655}
              height={202}
              sizes="(max-width: 767px) 90vw, 50vw"
              alt="Ride Dynamics racing suspension, Gold Coast"
            />
          </figure>
          <div className="studio__story">
            <p className="m-text">{homeIntro[1]}</p>
            <Link href="/about" className="m-link-2">
              About Ride Dynamics
            </Link>
          </div>
          <blockquote className="studio__quote">
            <p className="m-title">
              We use everything ourselves, giving us the confidence to provide
              our customers with the best service and advice possible.
            </p>
            <footer className="m-text-3">Ride Dynamics</footer>
          </blockquote>
          <figure className="studio__photo studio__photo--type">
            <Image
              {...servicesSideImages[2]}
              alt={servicesSideImages[2].alt}
              sizes="(max-width: 767px) 90vw, 30vw"
            />
          </figure>
        </div>
      </section>

      <section id="materials" aria-labelledby="materials-title">
        <div className="materials__head">
          <h2 className="materials__title m-cut" id="materials-title">
            Our brands
          </h2>
          <figure className="materials__photo">
            <Image
              {...servicesSideImages[1]}
              alt={servicesSideImages[1].alt}
              sizes="(max-width: 767px) 90vw, 40vw"
            />
          </figure>
          <p className="m-text-2">
            K-Tech Suspension, Accossato Brakes and Controls and Rock oils are
            proven winners and are highly reputable companies the world over.
          </p>
        </div>
        <ul className="materials__list">
          {brands.map((brand, index) => (
            <li className="materials__item" key={brand.brand}>
              <span className="materials__crease" aria-hidden="true" />
              <Link
                href={homeCategories[index].href}
                className={`rd-brand-plate ${brand.logoOnDark ? "rd-brand-plate--dark" : ""}`}
              >
                <Image
                  {...brand.logo}
                  alt={brand.logo.alt}
                  sizes="(max-width: 767px) 60vw, 25vw"
                />
              </Link>
              <div className="materials__name">
                <h3 className="m-title">{brand.brand}</h3>
                <Link className="m-link-2" href={homeCategories[index].href}>
                  {brand.title}
                </Link>
              </div>
              <p className="m-text">{brand.lead}</p>
            </li>
          ))}
        </ul>
        <div className="materials__punch">
          <div className="materials__punch-text">
            <h3 className="m-title">Browse, choose, ride</h3>
            <p className="m-text">{homeStoreLead}</p>
          </div>
          <div className="materials__die" aria-hidden="true">
            <span className="materials__hole" />
            <span className="materials__disc m-board">
              <Image
                src="/images/logo/ride-dynamics-mark.png"
                width={27}
                height={30}
                alt=""
              />
            </span>
          </div>
        </div>
      </section>

      <section id="kit" aria-labelledby="kit-title">
        <div className="kit__lid m-surface">
          <span className="kit__socket m-well" aria-hidden="true" />
          <p className="kit__name m-cut">Ride Dynamics</p>
          <p className="m-text-2">Motorcycle suspension and brake specialist</p>
          <p className="m-text">Gold Coast · Yatala QLD</p>
        </div>
        <div className="kit__slip m-surface">
          <h2 className="kit__title m-cut" id="kit-title">
            Browse, choose, ride
          </h2>
          <ul className="kit__rows">
            {brands.map((brand, index) => (
              <li className="kit__row" key={brand.brand}>
                <h3 className="m-title">
                  <Link href={homeCategories[index].href}>{brand.title}</Link>
                </h3>
                <p className="m-text">{brand.lead}</p>
                <span className="kit__price m-cut" aria-hidden="true">
                  0{index + 1}
                </span>
              </li>
            ))}
          </ul>
          <div className="kit__actions">
            <Link className="m-btn" href="/contact">
              <span className="m-btn__label">Enquire now</span>
            </Link>
            <a className="m-link-2" href={contactInfo.phoneHref}>
              Call {contactInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-title">
        <div className="faq__head">
          <h2 className="faq__title m-cut" id="faq-title">
            Before you ask
          </h2>
          <p className="m-text">
            Motorcycle suspension, brake components and lubricants.
          </p>
        </div>
        <div className="faq__list">
          {faq.map((item) => (
            <div className="faq__item" key={item.question}>
              <span className="faq__crease" aria-hidden="true" />
              <details className="faq__details">
                <summary className="faq__summary">
                  <span className="m-title">{item.question}</span>
                  <span className="faq__mark" aria-hidden="true" />
                </summary>
                <p className="faq__answer m-text">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title">
        <span className="contact__light" aria-hidden="true" />
        <h2 className="contact__title" id="contact-title">
          <span className="contact__line contact__line--raised">
            <span className="contact__channel m-ply">
              <span className="contact__word m-raised" style={length("Ride")}>
                Ride
              </span>
            </span>
          </span>
          <span className="contact__line contact__line--cut">
            <span className="contact__word m-cut" style={length("Dynamics.")}>
              Dynamics.
            </span>
          </span>
        </h2>
        <div className="contact__body">
          <ContactForm />
          <div className="contact__details">
            <div>
              <span className="m-text-3">Write</span>
              {contactInfo.emails.map((email) => (
                <a key={email} className="m-link-2" href={`mailto:${email}`}>
                  {email}
                </a>
              ))}
            </div>
            <div>
              <span className="m-text-3">Call</span>
              <a className="m-link-2" href={contactInfo.phoneHref}>
                {contactInfo.phone}
              </a>
            </div>
            <div>
              <span className="m-text-3">Visit</span>
              <address className="m-text">
                {contactInfo.address.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <div>
              <span className="m-text-3">ABN</span>
              <p className="m-text">{contactInfo.abn}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
