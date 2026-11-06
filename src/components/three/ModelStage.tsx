import fs from "node:fs";
import path from "node:path";
import ModelViewer, { type ModelPoster } from "@/components/three/ModelViewer";
import type { PageImage } from "@/types";

// Decides, when the page is built, which files a product's 3D stage uses.
//
// The 3D files are made separately and dropped into public/models:
//   public/models/<name>.glb    the interactive model
//   public/models/<name>.webp   a still render of the same model
// Until they exist, the stage shows `fallback` (an existing product photo)
// and no 3D code or model request happens at all. Once they are added,
// the next build picks them up with no code change.

type ModelName = "suspension" | "brake" | "lubricants";

type ModelStageProps = {
  name: ModelName;
  fallback: PageImage;
  label: string;
  preload?: boolean;
  className?: string;
};

const modelsDir = path.join(process.cwd(), "public", "models");

function exists(file: string) {
  try {
    return fs.statSync(path.join(modelsDir, file)).isFile();
  } catch {
    return false;
  }
}

export default function ModelStage({
  name,
  fallback,
  label,
  preload,
  className,
}: ModelStageProps) {
  const model = exists(`${name}.glb`) ? `/models/${name}.glb` : null;
  const poster: ModelPoster = exists(`${name}.webp`)
    ? { src: `/models/${name}.webp`, alt: fallback.alt }
    : fallback;

  return (
    <ModelViewer
      model={model}
      poster={poster}
      label={label}
      preload={preload}
      className={className}
    />
  );
}
