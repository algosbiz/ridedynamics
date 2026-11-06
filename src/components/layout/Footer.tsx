import type { CSSProperties } from "react";
import Link from "next/link";
import FooterCredit from "@/components/layout/FooterCredit";
import { contactInfo, footerServices } from "@/data/contact";
import { navItems } from "@/data/navigation";
import { toSentenceCase } from "@/lib/text";

export default function Footer() {
  return (
    <footer id="footer" className="mt-auto">
      <div className="footer__tray m-ply">
        <p
          className="footer__mark m-raised"
          style={{ "--len": 14 } as CSSProperties}
        >
          Ride Dynamics.
        </p>
        <span className="footer__crease" aria-hidden="true" />
        <div className="footer__cols">
          <div className="footer__col">
            <p className="m-text-3">The workshop</p>
            <ul className="rd-footer-services">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <nav className="footer__col" aria-label="Footer">
            <p className="m-text-3">Pages</p>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="m-link-2" href={item.href}>
                    {toSentenceCase(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer__col">
            <p className="m-text-3">Contact</p>
            <ul>
              {contactInfo.emails.map((email) => (
                <li key={email}>
                  <a className="m-link-2" href={`mailto:${email}`}>
                    {email}
                  </a>
                </li>
              ))}
              <li>
                <a className="m-link-2" href={contactInfo.phoneHref}>
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="m-text-3">Visit</p>
            <address className="m-text not-italic">
              {contactInfo.address.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>
        <div className="footer__legal">
          <FooterCredit builtInYear={new Date().getFullYear()} />
          <a className="m-link-2" href="#main">
            Back to the top
          </a>
        </div>
      </div>
    </footer>
  );
}
