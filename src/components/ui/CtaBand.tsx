import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import { contactInfo } from "@/data/contact";
import { onlineStoreUrl, showOnlineStoreLink } from "@/data/navigation";

// The "ready to buy" band near the bottom of a page. When the online store
// link is switched on in src/data/navigation.ts the main button goes to
// the store; until then it goes to the contact page.

type CtaBandProps = {
  title: string;
  children?: React.ReactNode;
  // A word stamped into the background, e.g. the brand name.
  stamp?: string;
};

export default function CtaBand({ title, children, stamp = "Ride Dynamics" }: CtaBandProps) {
  return (
    <section className="py-16 laptop:py-24" aria-label="Buy">
      <Container>
        <div className="rd-surface relative overflow-hidden rounded-[24px] px-6 py-12 tablet:px-12 laptop:px-16 laptop:py-16">
          <span
            aria-hidden="true"
            data-drift="-8"
            className="rd-deboss pointer-events-none absolute -bottom-[0.18em] left-0 font-cond text-[120px] leading-none font-bold whitespace-nowrap uppercase select-none laptop:text-[220px]"
          >
            {stamp}
          </span>
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-rd-red" />

          <div className="relative laptop:flex laptop:items-end laptop:justify-between laptop:gap-12">
            <div className="max-w-[640px]" data-reveal>
              <h2 className="rd-emboss font-cond text-[34px] leading-[1.05] font-bold uppercase text-balance tablet:text-[46px]">
                {title}
              </h2>
              {children && (
                <div className="mt-4 space-y-3 text-[17px] leading-[1.6] text-rd-gray">
                  {children}
                </div>
              )}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 laptop:mt-0 laptop:flex-none" data-reveal>
              {showOnlineStoreLink ? (
                <ButtonLink href={onlineStoreUrl}>Online store</ButtonLink>
              ) : (
                <ButtonLink href="/contact">Enquire now</ButtonLink>
              )}
              <ButtonLink href={contactInfo.phoneHref} variant="ghost">
                Call {contactInfo.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
