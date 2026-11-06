import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/home/ContactForm";
import SpecTable from "@/components/ui/SpecTable";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactInfo } from "@/data/contact";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Ride Dynamics",
  description:
    "Contact Ride Dynamics, motorcycle suspension and brake specialist. 22/55 Commerce Circuit, Yatala, Queensland 4207. Phone 0433 571 482.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const webAddress = site.productionUrl.replace(/^https?:\/\//, "");
  return (
    <div className="rd-page rd-contact-page">
      <PageHero
        eyebrow="Motorcycle suspension and brake specialist"
        title="Contact"
        lines={["Contact"]}
        actions={
          <>
            <a className="m-btn" href={contactInfo.phoneHref}>
              Call {contactInfo.phone}
            </a>
            <a className="m-link-2" href={`mailto:${contactInfo.emails[0]}`}>
              Email us
            </a>
          </>
        }
        visual={
          <div className="rd-contact-logo m-ply">
            <Image
              src="/images/logo/ride-dynamics-logo.png"
              alt="Ride Dynamics"
              width={630}
              height={292}
              preload
              sizes="(min-width: 768px) 40vw, 85vw"
            />
          </div>
        }
      />
      <section
        id="enquiry"
        className="rd-page-section rd-contact"
        aria-labelledby="details-title"
      >
        <div className="rd-contact__header">
          <SectionHeading
            kicker="Details"
            title="Ride Dynamics"
            id="details-title"
          />
          <a className="rd-contact-phone m-cut" href={contactInfo.phoneHref}>
            {contactInfo.phone}
          </a>
        </div>
        <div className="rd-contact__body">
          <ContactForm />
          <aside>
            <SpecTable
              caption="Contact details"
              specs={[
                {
                  label: "Mobile",
                  value: (
                    <a className="m-link-2" href={contactInfo.phoneHref}>
                      {contactInfo.phone}
                    </a>
                  ),
                },
                {
                  label: "Email",
                  value: (
                    <div className="rd-contact-emails">
                      {contactInfo.emails.map((email) => (
                        <a
                          key={email}
                          className="m-link-2"
                          href={`mailto:${email}`}
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  ),
                },
                {
                  label: "Address",
                  value: (
                    <address>
                      {contactInfo.address.map((line) => (
                        <span className="block" key={line}>
                          {line}
                        </span>
                      ))}
                    </address>
                  ),
                },
                {
                  label: "Web",
                  value: (
                    <a className="m-link-2" href={site.productionUrl}>
                      {webAddress}
                    </a>
                  ),
                },
                { label: "ABN", value: contactInfo.abn },
              ]}
            />
          </aside>
        </div>
      </section>
    </div>
  );
}
