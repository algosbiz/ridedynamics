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
    <div className={`rd-page-section-heading ${className}`} data-reveal>
      <p className="m-text-3">{kicker}</p>
      <h2 id={id} className="m-cut">
        {title}
      </h2>
      {children && <div className="m-text">{children}</div>}
    </div>
  );
}
