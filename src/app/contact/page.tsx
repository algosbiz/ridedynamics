import type { Metadata } from "next";
import Image from "next/image";
import PagePanel from "@/components/ui/PagePanel";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact | Ride Dynamics",
  description:
    "Contact Ride Dynamics, motorcycle suspension and brake specialist. 22/55 Commerce Circuit, Yatala, Queensland 4207. Phone 0433 571 482.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    // Logo sits 62px below the top of the panel and 61px above its base.
    <PagePanel desktopPadding="desktop:pt-[62px] desktop:pr-[100px] desktop:pb-[61px] desktop:pl-[100px]">
      {/* The original page uses a logo image where a heading would
          normally go, so this heading is read out by screen readers
          but not shown on screen. */}
      <h1 className="sr-only">Contact</h1>

      {/* The original contact page is just the logo with the contact
          details printed across its top-left corner. The phone number
          and address are also in the footer, where the number is a
          tap-to-call link. */}
      <div className="relative mx-auto w-full max-w-[610px]">
        <Image
          src="/images/logo/ride-dynamics-logo.png"
          alt="Ride Dynamics"
          width={630}
          height={292}
          priority
          className="h-auto w-full"
        />
        <Image
          src="/images/common/contact-details.png"
          alt={`Web: ridedynamics.com.au. Email: ${contactInfo.emails[0]}. Mobile: ${contactInfo.phone}. ABN: ${contactInfo.abn}.`}
          width={485}
          height={78}
          priority
          className="absolute top-[1%] left-0 h-auto w-[42.1%]"
        />
      </div>
    </PagePanel>
  );
}
