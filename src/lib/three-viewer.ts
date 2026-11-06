// A small, self-contained 3D product viewer built on plain three.js.
//
// This module is only ever imported dynamically by ModelViewer, after the
// viewer has scrolled into view on a wide screen, so three.js never sits in
// any page's first download. It deliberately avoids react-three-fiber and
// OrbitControls: dragging to turn the part is all we need.
//
// Kept light on purpose:
//   - pixel ratio capped at 1.5
//   - frames are only drawn while the viewer is on screen and the tab is
//     visible (setActive), and the loop stops otherwise
//   - the Draco / Meshopt decoders are only downloaded if the model file
//     actually uses that compression

import {
  ACESFilmicToneMapping,
  Box3,
  DirectionalLight,
  Group,
  HemisphereLight,
  MathUtils,
  Mesh,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  Vector3,
  WebGLRenderer,
  type Material,
  type Texture,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export type Viewer = {
  setActive(active: boolean): void;
  nudge(radians: number): void;
  dispose(): void;
};

const MAX_PIXEL_RATIO = 1.5;
const AUTO_SPIN = 0.35; // radians per second while nobody is dragging

// Reads the JSON chunk at the start of a .glb to see which compression
// extensions it needs, without parsing the whole file.
function extensionsUsed(buffer: ArrayBuffer): string[] {
  try {
    const view = new DataView(buffer);
    if (view.getUint32(0, true) !== 0x46546c67) return []; // "glTF"
    const jsonLength = view.getUint32(12, true);
    const json = new TextDecoder().decode(new Uint8Array(buffer, 20, jsonLength));
    return (JSON.parse(json).extensionsUsed as string[] | undefined) ?? [];
  } catch {
    return [];
  }
}

async function makeLoader(buffer: ArrayBuffer) {
  const loader = new GLTFLoader();
  const used = extensionsUsed(buffer);
  if (used.includes("KHR_draco_mesh_compression")) {
    const { DRACOLoader } = await import("three/examples/jsm/loaders/DRACOLoader.js");
    const draco = new DRACOLoader();
    // WASM decoder copied from three/examples into public/draco.
    draco.setDecoderPath("/draco/");
    loader.setDRACOLoader(draco);
  }
  if (used.includes("EXT_meshopt_compression")) {
    const { MeshoptDecoder } = await import(
      "three/examples/jsm/libs/meshopt_decoder.module.js"
    );
    loader.setMeshoptDecoder(MeshoptDecoder);
  }
  return loader;
}

export async function createViewer(
  canvas: HTMLCanvasElement,
  buffer: ArrayBuffer,
): Promise<Viewer> {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = environment;
  scene.environmentIntensity = 0.9;

  scene.add(new HemisphereLight(0xffffff, 0x1a1a1a, 0.6));
  const key = new DirectionalLight(0xffffff, 1.6);
  key.position.set(3, 4, 5);
  scene.add(key);
  // A red rim light from behind, in the brand colour.
  const rim = new DirectionalLight(0xed1c24, 2.2);
  rim.position.set(-4, 1.5, -4);
  scene.add(rim);

  const camera = new PerspectiveCamera(32, 1, 0.05, 100);

  const loader = await makeLoader(buffer);
  const gltf = await loader.parseAsync(buffer, "/models/");
  const model = gltf.scene;

  // Centre the model and scale it to a known size, whatever units it was
  // exported in.
  const box = new Box3().setFromObject(model);
  const size = box.getSize(new Vector3());
  const centre = box.getCenter(new Vector3());
  const scale = 2 / Math.max(size.x, size.y, size.z || 1);
  model.position.sub(centre).multiplyScalar(scale);
  model.scale.setScalar(scale);

  const turntable = new Group();
  turntable.add(model);
  turntable.rotation.x = 0.12;
  scene.add(turntable);

  const fitDistance = 1.25 / Math.tan(MathUtils.degToRad(camera.fov / 2));
  camera.position.set(0, 0.15, fitDistance);
  camera.lookAt(0, 0, 0);

  // ---- size --------------------------------------------------------------
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    draw();
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  // ---- drag to turn -----------------------------------------------------
  let dragging = false;
  // The slow turn only invites the first drag. Once the visitor has
  // turned the part themselves it stays where they left it.
  let autoSpin = true;
  let lastX = 0;
  let velocity = 0; // radians per frame from the last drag
  let pointerId = -1;

  const onDown = (event: PointerEvent) => {
    dragging = true;
    autoSpin = false;
    pointerId = event.pointerId;
    lastX = event.clientX;
    velocity = 0;
    canvas.setPointerCapture(pointerId);
    wake();
  };
  const onMove = (event: PointerEvent) => {
    if (!dragging || event.pointerId !== pointerId) return;
    const dx = event.clientX - lastX;
    lastX = event.clientX;
    velocity = dx * 0.01;
    turntable.rotation.y += velocity;
  };
  const onUp = () => {
    dragging = false;
    if (canvas.hasPointerCapture(pointerId)) canvas.releasePointerCapture(pointerId);
  };
  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onUp);

  // ---- render loop (only while active) ----------------------------------
  let active = false;
  let frame = 0;
  let last = 0;

  function draw() {
    renderer.render(scene, camera);
  }

  function tick(now: number) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!dragging) {
      velocity *= 0.92;
      turntable.rotation.y += velocity + (autoSpin ? AUTO_SPIN * dt : 0);
    }
    draw();
    // With nothing moving any more, stop drawing until the next drag.
    const still = !dragging && !autoSpin && Math.abs(velocity) < 0.0001;
    frame = active && !still ? requestAnimationFrame(tick) : 0;
  }

  function wake() {
    if (active && !frame) {
      last = performance.now();
      frame = requestAnimationFrame(tick);
    }
  }

  resize();

  return {
    setActive(next) {
      active = next;
      if (active) wake();
      else if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    },
    nudge(radians) {
      autoSpin = false;
      turntable.rotation.y += radians;
      draw();
    },
    dispose() {
      active = false;
      if (frame) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      scene.traverse((object) => {
        if (!(object instanceof Mesh)) return;
        object.geometry.dispose();
        const materials: Material[] = Array.isArray(object.material)
          ? object.material
          : [object.material];
        for (const material of materials) {
          for (const value of Object.values(material)) {
            if (value && typeof value === "object" && "isTexture" in value) {
              (value as Texture).dispose();
            }
          }
          material.dispose();
        }
      });
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}
