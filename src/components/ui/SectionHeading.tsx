// A section title with a small label above it.

type SectionHeadingProps = {
  kicker: string;
  title: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function SectionHeading({
  kicker,
  title,
  id,
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-[760px] ${className}`} data-reveal>
      <p className="text-sm font-medium text-rd-muted">{kicker}</p>
      <h2
        id={id}
        className="rd-emboss mt-3 font-cond text-[32px] leading-[1.05] font-bold uppercase text-balance tablet:text-[44px] desktop:text-[56px]"
      >
        {title}
      </h2>
      {children && (
        <div className="mt-5 max-w-[62ch] text-base leading-[1.7] text-rd-gray">{children}</div>
      )}
    </div>
  );
}
