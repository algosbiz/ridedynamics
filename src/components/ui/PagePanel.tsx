import Container from "@/components/ui/Container";

// The solid black panel that every page's content sits on, floating on
// top of the dark backdrop.
//
// The panel starts and ends in the same place on every page, but the
// original site uses slightly different padding *inside* it on each one.
// So each page passes its own `desktopPadding`, with the pixel values
// measured from the original.

type PagePanelProps = {
  children: React.ReactNode;
  // Tailwind padding classes for large screens, e.g.
  // "desktop:pt-[64px] desktop:pr-[103px] desktop:pb-[69px] desktop:pl-[101px]"
  desktopPadding: string;
};

export default function PagePanel({ children, desktopPadding }: PagePanelProps) {
  return (
    <div className="pt-[40px] pb-[40px] desktop:pt-[73px] desktop:pb-[68px]">
      <Container>
        <div className={`bg-rd-panel px-[5%] py-8 ${desktopPadding}`}>
          {children}
        </div>
      </Container>
    </div>
  );
}
