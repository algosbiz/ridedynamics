import type { Metadata } from "next";
import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SpecTable from "@/components/ui/SpecTable";
import { contactInfo } from "@/data/contact";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Ride Dynamics",
  description:
    "Contact Ride Dynamics, motorcycle suspension and brake specialist. 22/55 Commerce Circuit, Yatala, Queensland 4207. Phone 0433 571 482.",
  alternates: { canonical: "/contact" },
};

const linkStyle =
  "text-rd-light underline decoration-rd-muted underline-offset-4 transition-colors duration-150 ease-rd hover:text-white hover:decoration-rd-light";

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

export default function ContactPage() {
  const webAddress = site.productionUrl.replace(/^https?:\/\//, "");

  return (
    <section className="pt-12 pb-20 laptop:pt-16 laptop:pb-24">
      <Container className="grid gap-12 laptop:grid-cols-12">
        <div className="laptop:col-span-6">
          <p className="rd-rise text-sm font-medium text-rd-muted">
            Motorcycle suspension and brake specialist
          </p>
          <h1
            className="rd-emboss rd-rise mt-4 font-cond text-[44px] leading-[0.95] font-bold uppercase tablet:text-[64px] desktop:text-[76px]"
            style={delay(0.05)}
          >
            Contact
          </h1>
          <div className="rd-rise mt-8 flex flex-wrap gap-3" style={delay(0.1)}>
            <ButtonLink href={contactInfo.phoneHref}>Call {contactInfo.phone}</ButtonLink>
            <ButtonLink href={`mailto:${contactInfo.emails[0]}`} variant="ghost">
              Email us
            </ButtonLink>
          </div>
          <div className="rd-rise mt-12 max-w-[420px]" style={delay(0.15)}>
            <Image
              src="/images/logo/ride-dynamics-logo.png"
              alt="Ride Dynamics"
              width={630}
              height={292}
              preload
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="laptop:col-span-6 laptop:pt-8">
          <div className="rd-surface rounded-[20px] p-6 tablet:p-10">
            <p className="mb-4 text-sm font-medium text-rd-muted">Details</p>
            <SpecTable
              caption="Contact details"
              specs={[
                {
                  label: "Mobile",
                  value: (
                    <a href={contactInfo.phoneHref} className={`${linkStyle} tabular-nums`}>
                      {contactInfo.phone}
                    </a>
                  ),
                },
                {
                  label: "Email",
                  value: (
                    <span className="flex flex-col gap-1">
                      {contactInfo.emails.map((email) => (
                        <a key={email} href={`mailto:${email}`} className={linkStyle}>
                          {email}
                        </a>
                      ))}
                    </span>
                  ),
                },
                {
                  label: "Address",
                  value: (
                    <address className="not-italic">
                      {contactInfo.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  ),
                },
                { label: "Web", value: webAddress },
                { label: "ABN", value: <span className="tabular-nums">{contactInfo.abn}</span> },
              ]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
