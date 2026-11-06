import Link from "next/link";
import { contactInfo } from "@/data/contact";
import { onlineStoreUrl, showOnlineStoreLink } from "@/data/navigation";

type CtaBandProps = { title: string; children?: React.ReactNode };

export default function CtaBand({ title, children }: CtaBandProps) {
  return (
    <section className="rd-page-cta" aria-label={title}>
      <div className="rd-page-cta__tray m-ply" data-reveal>
        <div>
          <h2 className="m-raised">{title}</h2>
          {children && (
            <div className="rd-page-cta__copy m-text">{children}</div>
          )}
        </div>
        <div className="rd-page-actions">
          {showOnlineStoreLink ? (
            <a href={onlineStoreUrl} className="m-btn">
              Online store
            </a>
          ) : (
            <Link href="/contact" className="m-btn">
              Enquire now
            </Link>
          )}
          <a href={contactInfo.phoneHref} className="m-link-2">
            Call {contactInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
