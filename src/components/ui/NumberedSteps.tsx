// A numbered list (01, 02, 03 ...) with a rail down the left. On wide
// screens a red bar fills the rail as you read down the list
// (src/lib/motion.ts, data-steps).

type NumberedStepsProps = {
  items: { title?: string; text: string }[];
  className?: string;
};

export default function NumberedSteps({ items, className = "" }: NumberedStepsProps) {
  return (
    <div className={`relative ${className}`} data-steps>
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[27px] w-px bg-rd-line tablet:left-[35px]"
      />
      <span
        aria-hidden="true"
        data-steps-bar
        className="absolute top-2 bottom-2 left-[27px] w-px origin-top bg-rd-red tablet:left-[35px]"
      />
      <ol className="relative space-y-8">
        {items.map((item, index) => (
          <li key={item.text} className="grid grid-cols-[56px_1fr] gap-4 tablet:grid-cols-[72px_1fr] tablet:gap-6">
            <span
              aria-hidden="true"
              data-step-num
              className="relative z-[1] grid h-[56px] w-[56px] place-items-center rounded-full bg-rd-surface font-cond text-[20px] font-bold text-rd-red shadow-[inset_0_0_0_1px_rgba(237,28,36,0.45),0_0_0_6px_var(--color-rd-ink)] tablet:h-[72px] tablet:w-[72px] tablet:text-[24px]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="pt-3 tablet:pt-5">
              {item.title && (
                <h3 className="font-cond text-[20px] font-bold text-rd-light uppercase">
                  {item.title}
                </h3>
              )}
              <p className="max-w-[64ch] text-[16px] leading-[1.65] text-rd-gray">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
