// A numbered list (01, 02, 03 ...) with a rail down the left. This is the
// one place on the site where numbers mean an order. On wide screens a red
// bar fills the rail as you read down the list (src/lib/motion.ts,
// data-steps).

type NumberedStepsProps = {
  items: { title?: string; text: string }[];
  className?: string;
};

export default function NumberedSteps({ items, className = "" }: NumberedStepsProps) {
  return (
    <div className={`relative ${className}`} data-steps>
      {/* Rail through the centre of the 48px number boxes. */}
      <span aria-hidden="true" className="absolute top-2 bottom-2 left-6 w-px bg-rd-line" />
      <span
        aria-hidden="true"
        data-steps-bar
        className="absolute top-2 bottom-2 left-6 w-px origin-top bg-rd-red"
      />
      <ol className="relative space-y-8">
        {items.map((item, index) => (
          <li key={item.text} className="grid grid-cols-[48px_1fr] gap-4 tablet:gap-6">
            <span
              aria-hidden="true"
              data-step-num
              className="relative z-[1] grid h-12 w-12 place-items-center rounded-[10px] bg-rd-surface font-cond text-[20px] font-bold text-rd-red tabular-nums shadow-[inset_0_0_0_1px_rgba(228,228,230,0.08),0_0_0_8px_var(--color-rd-ink)]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="pt-3">
              {item.title && (
                <h3 className="font-cond text-[20px] leading-[1.2] font-semibold text-rd-light">
                  {item.title}
                </h3>
              )}
              <p className={`max-w-[64ch] text-base leading-[1.7] text-rd-gray ${item.title ? "mt-2" : ""}`}>
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
