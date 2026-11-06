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
};

export default function CtaBand({ title, children }: CtaBandProps) {
  return (
    <section className="py-16 laptop:py-20" aria-label="Buy">
      <Container>
        <div
          className="rd-surface rounded-[20px] px-6 py-12 tablet:px-12 laptop:flex laptop:items-end laptop:justify-between laptop:gap-12 laptop:px-16 laptop:py-16"
          data-reveal
        >
          <div className="max-w-[640px]">
            <h2 className="rd-emboss font-cond text-[32px] leading-[1.05] font-bold uppercase text-balance tablet:text-[44px]">
              {title}
            </h2>
            {children && (
              <div className="mt-4 space-y-3 text-base leading-[1.7] text-rd-gray">{children}</div>
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 laptop:mt-0 laptop:flex-none">
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
      </Container>
    </section>
  );
}
