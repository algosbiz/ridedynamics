export type FaqItem = { question: string; answer: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="rd-faq-list">
      {items.map((item) => (
        <details key={item.question} className="rd-faq-item">
          <summary>
            <span className="m-title">{item.question}</span>
            <span className="rd-faq-toggle" aria-hidden="true" />
          </summary>
          <p className="m-text">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
