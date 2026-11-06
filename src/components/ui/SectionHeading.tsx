// A section title with its running number, e.g. "02 — The range".
// The number is decoration, so screen readers only hear the title.

type SectionHeadingProps = {
  number: string;
  kicker: string;
  title: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function SectionHeading({
  number,
  kicker,
  title,
  id,
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-[760px] ${className}`} data-reveal>
      <p className="flex items-center gap-3 font-cond text-[13px] font-bold tracking-[4px] text-rd-red uppercase">
        <span aria-hidden="true">{number}</span>
        <span aria-hidden="true" className="h-px w-10 bg-rd-red/60" />
        {kicker}
      </p>
      <h2
        id={id}
        className="rd-emboss mt-4 font-cond text-[36px] leading-[1.02] font-bold tracking-[-0.5px] uppercase text-balance tablet:text-[48px] desktop:text-[56px]"
      >
        {title}
      </h2>
      {children && (
        <div className="mt-5 max-w-[62ch] text-[17px] leading-[1.6] text-rd-gray">
          {children}
        </div>
      )}
    </div>
  );
}
