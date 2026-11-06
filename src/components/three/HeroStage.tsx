import ModelStage from "@/components/three/ModelStage";
import type { PageImage } from "@/types";

// The hero's product stage: the 3D part (or its still picture) standing
// on a soft neutral floor shadow. The part is the one rich thing in the
// hero, so nothing behind it competes for attention.

type HeroStageProps = {
  name: "suspension" | "brake" | "lubricants";
  fallback: PageImage;
  label: string;
  className?: string;
};

export default function HeroStage({ name, fallback, label, className = "" }: HeroStageProps) {
  return (
    <div className={`relative mx-auto aspect-square w-full ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-x-[18%] bottom-[12%] h-[8%] rounded-[50%] bg-black/80 blur-2xl"
      />
      <ModelStage
        name={name}
        fallback={fallback}
        label={label}
        preload
        className="absolute inset-0"
      />
    </div>
  );
}
