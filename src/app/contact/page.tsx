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

const linkStyle = "text-rd-light underline decoration-rd-red/60 underline-offset-4 hover:text-white";

export default function ContactPage() {
  const webAddress = site.productionUrl.replace(/^https?:\/\//, "");

  return (
    <section data-hero className="relative overflow-hidden pt-10 pb-20 laptop:pt-16 laptop:pb-28">
      <span
        aria-hidden="true"
        data-drift="-6"
        className="rd-deboss pointer-events-none absolute right-[-4vw] bottom-0 font-cond text-[30vw] leading-[0.8] font-bold whitespace-nowrap uppercase select-none laptop:text-[20vw]"
      >
        Contact
      </span>

      <Container className="relative grid gap-12 laptop:grid-cols-12">
        <div className="laptop:col-span-6">
          <p className="rd-rise flex items-center gap-3 font-cond text-[13px] font-bold tracking-[4px] text-rd-red uppercase">
            <span aria-hidden="true">01</span>
            <span aria-hidden="true" className="h-px w-10 bg-rd-red/60" />
            Motorcycle suspension and brake specialist
          </p>
          <h1
            className="rd-emboss rd-rise mt-5 font-cond text-[64px] leading-[0.92] font-bold uppercase tablet:text-[96px] desktop:text-[120px]"
            style={{ "--d": "0.08s" } as React.CSSProperties}
          >
            Contact
          </h1>
          <div
            className="rd-rise mt-8 flex flex-wrap gap-3"
            style={{ "--d": "0.16s" } as React.CSSProperties}
          >
            <ButtonLink href={contactInfo.phoneHref}>Call {contactInfo.phone}</ButtonLink>
            <ButtonLink href={`mailto:${contactInfo.emails[0]}`} variant="ghost">
              Email us
            </ButtonLink>
          </div>
          <div className="rd-rise mt-12 max-w-[420px]" style={{ "--d": "0.24s" } as React.CSSProperties}>
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
          <div className="rd-surface rounded-[24px] p-6 tablet:p-10">
            <p className="mb-4 font-cond text-[13px] font-bold tracking-[4px] text-rd-red uppercase">
              Details
            </p>
            <SpecTable
              caption="Contact details"
              specs={[
                {
                  label: "Mobile",
                  value: (
                    <a href={contactInfo.phoneHref} className={linkStyle}>
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
                { label: "ABN", value: contactInfo.abn },
              ]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
