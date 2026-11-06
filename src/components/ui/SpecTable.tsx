export type Spec = { label: string; value: React.ReactNode };
type SpecTableProps = { specs: Spec[]; caption?: string; className?: string };

export default function SpecTable({
  specs,
  caption,
  className = "",
}: SpecTableProps) {
  return (
    <dl className={`rd-spec-sheet ${className}`} aria-label={caption}>
      {specs.map((spec) => (
        <div key={spec.label}>
          <dt className="m-text-3">{spec.label}</dt>
          <dd className="m-text">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
