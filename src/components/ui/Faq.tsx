// Questions and answers using the browser's own <details> element, so
// opening and closing them needs no JavaScript and works with a keyboard.

export type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="rd-dash border-t" data-reveal>
      {items.map((item) => (
        <details key={item.question} className="rd-faq rd-dash group border-b">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-cond text-[20px] leading-[1.25] font-bold text-rd-light uppercase transition-colors hover:text-white tablet:text-[22px]">
            {item.question}
            <span
              aria-hidden="true"
              className="rd-faq-icon grid h-9 w-9 flex-none place-items-center rounded-full text-[22px] text-rd-red shadow-[inset_0_0_0_1px_rgba(237,28,36,0.5)] transition-transform duration-300"
            >
              +
            </span>
          </summary>
          <p className="max-w-[68ch] pb-6 text-[16px] leading-[1.65] text-rd-gray">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
