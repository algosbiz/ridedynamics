"use client";

// The small credit line in the red bar at the very bottom of the page.
//
// This file needs "use client" for two reasons: it has to know which page
// the visitor is on (the extra credit only shows on the homepage), and it
// reads the visitor's clock so the year is always current.

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { footerCredit } from "@/data/contact";

type FooterCreditProps = {
  // The year at the time the site was built, used while the page is being
  // generated on the server.
  builtInYear: number;
};

// The clock does not change while someone is looking at the page, so there
// is nothing to subscribe to. React still asks for this function.
const nothingToSubscribeTo = () => () => {};

export default function FooterCredit({ builtInYear }: FooterCreditProps) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // The pages are built ahead of time, so the year baked into the HTML is
  // whatever year the site was last deployed. This reads the visitor's own
  // clock instead once the page opens in their browser, which keeps the
  // year correct even if nobody redeploys the site for a year or more.
  const year = useSyncExternalStore(
    nothingToSubscribeTo,
    () => new Date().getFullYear(), // in the browser
    () => builtInYear, // while building the page
  );

  return (
    <p className="text-center font-plain text-[10px] leading-[15px] font-light tracking-[1px] text-white">
      {`© ${year}. ${footerCredit.business}.`}
      {isHomepage && (
        <>
          {" | "}
          {footerCredit.homepageCreditPrefix}
          <a
            href={footerCredit.homepageCreditHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rd-yellow"
          >
            {footerCredit.homepageCreditLink}
          </a>
        </>
      )}
    </p>
  );
}
