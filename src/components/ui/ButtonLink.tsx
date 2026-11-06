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
  "group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full px-6 font-cond text-[15px] font-bold tracking-[2px] uppercase transition-[background-color,color,box-shadow] duration-200";

const variants = {
  primary:
    "bg-rd-red text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_24px_-10px_rgba(237,28,36,0.8)] hover:bg-[#ff2a32]",
  ghost:
    "text-rd-light shadow-[inset_0_0_0_1px_rgba(214,214,214,0.28)] hover:bg-white/5 hover:shadow-[inset_0_0_0_1px_rgba(214,214,214,0.6)]",
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
      className="transition-transform duration-200 group-hover:translate-x-1"
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
