import Link from "next/link";

// The two button styles used across the site. Internal addresses go
// through next/link; anything starting with http, tel: or mailto: is a
// plain link.

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

const base =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-[10px] px-5 text-base font-semibold transition-[background-color,color,box-shadow,transform] duration-150 ease-rd active:scale-[0.98]";

const variants = {
  // The one red thing in a section: the main action.
  primary:
    "bg-rd-red text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-[#d8141c]",
  ghost:
    "bg-rd-surface-2 text-rd-light shadow-[inset_0_0_0_1px_rgba(228,228,230,0.1)] hover:bg-[#252529]",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const arrow = (
    <span
      aria-hidden="true"
      className="transition-transform duration-150 ease-rd group-hover:translate-x-0.5"
    >
      →
    </span>
  );

  if (/^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={classes}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
