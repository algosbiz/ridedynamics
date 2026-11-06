// Questions and answers using the browser's own <details> element, so
// opening and closing them needs no JavaScript and works with a keyboard.

export type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="rd-dash border-t">
      {items.map((item) => (
        <details key={item.question} className="rd-faq rd-dash border-b">
          <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-4 text-lg leading-[1.4] font-medium text-rd-light transition-colors duration-150 ease-rd hover:text-white">
            {item.question}
            <span
              aria-hidden="true"
              className="rd-faq-icon flex-none text-[20px] leading-none text-rd-muted transition-transform duration-200 ease-rd"
            >
              +
            </span>
          </summary>
          <p className="max-w-[68ch] pb-6 text-base leading-[1.7] text-rd-gray">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
