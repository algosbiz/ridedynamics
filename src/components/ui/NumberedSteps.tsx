// Numbered chapters are separated by the same pressed creases as the reference.
type NumberedStepsProps = {
  items: { title?: string; text: string }[];
  className?: string;
};

export default function NumberedSteps({
  items,
  className = "",
}: NumberedStepsProps) {
  return (
    <ol className={`rd-chapters ${className}`} data-steps>
      {items.map((item, index) => (
        <li className="rd-chapter" key={item.text}>
          <span className="rd-crease" aria-hidden="true" />
          <span
            className="rd-chapter__number m-cut"
            data-step-num
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="rd-chapter__body">
            {item.title && <h3 className="m-title">{item.title}</h3>}
            <p className="m-text">{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
