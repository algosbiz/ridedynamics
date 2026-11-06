import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lines: string[];
  lead?: string;
  actions?: ReactNode;
  visual: ReactNode;
  model?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  lines,
  lead,
  actions,
  visual,
  model = false,
}: PageHeroProps) {
  return (
    <section className="rd-page-hero m-board" aria-labelledby="page-title">
      <div className="rd-page-hero__heading">
        <Link className="rd-page-back m-link-2" href="/">
          Ride Dynamics
        </Link>
        <p className="rd-page-eyebrow m-text-3">{eyebrow}</p>
        <h1 className="rd-page-title" id="page-title" aria-label={title}>
          {lines.map((line, index) => (
            <span
              key={line}
              aria-hidden="true"
              className={`rd-page-title__line ${index === 0 ? "rd-page-title__line--raised m-ply" : "rd-page-title__line--cut"}`}
            >
              <span
                className={index === 0 ? "m-raised" : "m-cut"}
                style={{ "--len": line.length } as CSSProperties}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
      </div>
      <div
        className={`rd-page-hero__visual ${model ? "rd-page-hero__visual--model" : ""}`}
      >
        {visual}
      </div>
      <div className="rd-page-hero__body">
        {lead && <p className="m-text-2">{lead}</p>}
        {actions && <div className="rd-page-actions">{actions}</div>}
      </div>
    </section>
  );
}
