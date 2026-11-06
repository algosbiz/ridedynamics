// Centres page content: full width with a side gutter on phones, up to
// 1240px on large screens. The header and footer use the same width so
// everything lines up.

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-4 tablet:px-6 desktop:px-8 ${className}`}>
      {children}
    </div>
  );
}
