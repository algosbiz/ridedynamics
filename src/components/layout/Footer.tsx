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
        {/* The business name stamped into the footer: the one decorative
            word on the site. */}
        <span
          aria-hidden="true"
          className="rd-deboss pointer-events-none absolute right-0 -bottom-[0.2em] font-cond text-[22vw] leading-none font-bold whitespace-nowrap uppercase select-none desktop:text-[240px]"
        >
          Ride Dynamics
        </span>

        <Container className="relative grid gap-10 pt-16 pb-16 laptop:grid-cols-12 laptop:gap-8 laptop:pt-20 laptop:pb-24">
          <div className="flex items-start gap-6 laptop:col-span-5">
            <Image
              src="/images/logo/ride-dynamics-logo-small.png"
              alt="Ride Dynamics"
              width={192}
              height={192}
              className="h-28 w-28 flex-none laptop:h-36 laptop:w-36"
            />
            <ul className="font-cond text-[20px] leading-[1.4] font-bold text-rd-yellow laptop:text-[24px]">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="laptop:col-span-3">
            <p className="text-sm font-medium text-rd-muted">Phone</p>
            <a
              href={contactInfo.phoneHref}
              className="mt-2 inline-block font-cond text-[32px] leading-none font-bold text-rd-light tabular-nums no-underline transition-colors duration-150 ease-rd hover:text-white"
            >
              {contactInfo.phone}
            </a>
          </div>

          <div className="laptop:col-span-4">
            <p className="text-sm font-medium text-rd-muted">Address</p>
            <address className="mt-2 text-base leading-[1.6] text-rd-light not-italic">
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
      <div className="flex min-h-10 items-center justify-center bg-rd-red-dark px-4 py-2">
        <FooterCredit builtInYear={new Date().getFullYear()} />
      </div>
    </footer>
  );
}
