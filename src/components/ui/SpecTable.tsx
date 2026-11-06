// A two-column spec sheet with dashed rules between the rows, like a
// printed parts label.

export type Spec = {
  label: string;
  value: React.ReactNode;
};

type SpecTableProps = {
  specs: Spec[];
  caption?: string;
  className?: string;
};

export default function SpecTable({ specs, caption, className = "" }: SpecTableProps) {
  return (
    <dl
      className={`rd-dash border-t text-[15px] leading-[1.5] ${className}`}
      aria-label={caption}
      data-reveal
    >
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="rd-dash grid grid-cols-1 gap-1 border-b py-4 tablet:grid-cols-[minmax(140px,34%)_1fr] tablet:gap-6"
        >
          <dt className="font-cond text-[13px] font-bold tracking-[3px] text-rd-gray uppercase">
            {spec.label}
          </dt>
          <dd className="text-rd-light">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
