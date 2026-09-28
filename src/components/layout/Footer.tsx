import Image from "next/image";
import Container from "@/components/ui/Container";
import { contactInfo, footerCredit, footerServices } from "@/data/contact";

// The footer shown at the bottom of every page: the badge, the four
// service words, the phone number, the address, and the red credit bar.
// All of the wording comes from src/data/contact.ts.

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div
        className="bg-[rgba(14,14,15,0.6)]"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.12)" }}
      >
        <Container className="flex flex-col gap-8 pt-[40px] pb-[40px] laptop:flex-row laptop:flex-wrap laptop:gap-x-10 laptop:gap-y-8 desktop:flex-nowrap desktop:gap-0 desktop:pt-[68px] desktop:pb-[48px]">
          {/* Badge and the four service words sit side by side. */}
          <div className="flex flex-wrap items-start justify-center gap-4 tablet:flex-nowrap tablet:justify-start desktop:w-[421px] desktop:flex-none desktop:gap-0">
            <Image
              src="/images/logo/ride-dynamics-logo-small.png"
              alt="Ride Dynamics"
              width={192}
              height={192}
              className="h-[152px] w-[152px] flex-none laptop:h-[192px] laptop:w-[192px]"
            />
            <ul className="font-cond text-rd-yellow text-[24px] leading-[36px] font-bold desktop:mt-[5px] laptop:text-[30px] laptop:leading-[45px]">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Phone number. */}
          <div className="flex items-baseline gap-[12px] desktop:mt-[47px] desktop:w-[400px] desktop:flex-none">
            <span className="font-cond text-rd-gray text-[24px] leading-[36px] font-bold laptop:text-[30px]">
              Phone:
            </span>
            <a
              href={contactInfo.phoneHref}
              className="text-rd-gray hover:text-rd-gray-hover text-[20px] leading-[29px] font-black no-underline laptop:text-[24px]"
            >
              {contactInfo.phone}
            </a>
          </div>

          {/* Postal address. */}
          <div className="desktop:mt-[8px]">
            <p className="font-cond text-rd-gray text-[24px] leading-[36px] font-bold laptop:text-[30px]">
              Address:
            </p>
            <address className="font-cond text-rd-gray text-[20px] leading-[29px] font-bold not-italic laptop:text-[24px]">
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
      <div
        className="bg-rd-red-dark flex h-[35px] items-center justify-center px-4"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <p className="text-center font-plain text-[10px] leading-[15px] font-light tracking-[1px] text-white">
          {footerCredit.text}
          <a
            href={footerCredit.linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rd-yellow"
          >
            {footerCredit.linkLabel}
          </a>
        </p>
      </div>
    </footer>
  );
}
