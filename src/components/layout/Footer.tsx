import Image from "next/image";
import Container from "@/components/ui/Container";
import FooterCredit from "@/components/layout/FooterCredit";
import { contactInfo, footerServices } from "@/data/contact";

// The footer shown at the bottom of every page: the badge, the four
// service words, the phone number, the address, and the red credit bar.
// All of the wording comes from src/data/contact.ts.

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="rd-surface relative overflow-hidden border-t border-white/[0.05]">
        <span
          aria-hidden="true"
          className="rd-deboss pointer-events-none absolute right-0 -bottom-[0.2em] font-cond text-[22vw] leading-none font-bold whitespace-nowrap uppercase select-none desktop:text-[240px]"
        >
          Ride Dynamics
        </span>

        <Container className="relative grid gap-10 pt-14 pb-16 laptop:grid-cols-12 laptop:gap-8 laptop:pt-20 laptop:pb-24">
          <div className="flex items-start gap-6 laptop:col-span-5">
            <Image
              src="/images/logo/ride-dynamics-logo-small.png"
              alt="Ride Dynamics"
              width={192}
              height={192}
              className="h-[120px] w-[120px] flex-none laptop:h-[152px] laptop:w-[152px]"
            />
            <ul className="font-cond text-[24px] leading-[1.35] font-bold text-rd-yellow uppercase laptop:text-[30px]">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="laptop:col-span-3">
            <p className="font-cond text-[13px] font-bold tracking-[4px] text-rd-red uppercase">
              Phone:
            </p>
            <a
              href={contactInfo.phoneHref}
              className="mt-2 inline-block font-cond text-[28px] font-bold text-rd-light no-underline transition-colors hover:text-white"
            >
              {contactInfo.phone}
            </a>
          </div>

          <div className="laptop:col-span-4">
            <p className="font-cond text-[13px] font-bold tracking-[4px] text-rd-red uppercase">
              Address:
            </p>
            <address className="mt-2 font-cond text-[22px] leading-[1.35] font-bold text-rd-light not-italic">
              {contactInfo.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </Container>
      </div>

      {/* The thin red bar at the very bottom. */}
      <div className="flex min-h-[40px] items-center justify-center bg-rd-red-dark px-4 py-2">
        <FooterCredit builtInYear={new Date().getFullYear()} />
      </div>
    </footer>
  );
}
