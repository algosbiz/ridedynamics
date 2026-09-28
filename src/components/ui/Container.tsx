// Centres page content and keeps it the same width as the original site.
//
// The original is 1065px wide on a large screen and roughly 74% of the
// window on smaller ones, which is what the two width classes below do.

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-[74%] max-w-[1065px] desktop:w-[1065px] ${className}`}>
      {children}
    </div>
  );
}
