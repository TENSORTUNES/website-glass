"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

type FloatingCoinProps = {
  href?: string;
  className?: string;
  modelUrl?: string;
  coinScale?: number;
  cameraZ?: number;
  fov?: number;
  ariaLabel?: string;

  /** New controls for oscillation */
  yawCenterDeg?: number; // the “front” angle you want visible
  yawAmplitudeDeg?: number; // how far to swing left/right
  oscillateHz?: number; // swings per second (0.8 = gentle)
  tiltDeg?: number; // subtle X tilt to feel 3D
};

function CoinModel({
  position,
  scale,
  rotation,
  modelUrl = "/assets/3d_objects/tt_token_3d_textured.glb",
}: {
  position: [number, number, number];
  scale: number;
  rotation: [number, number, number];
  modelUrl?: string;
}) {
  const { scene } = useGLTF(modelUrl);
  return (
    <primitive
      object={scene.clone()}
      position={position}
      scale={[scale, scale, scale]}
      rotation={rotation}
    />
  );
}

useGLTF.preload("/assets/3d_objects/tt_token_3d_textured.glb");

export default function FloatingCoin({
  href,
  className = "",
  modelUrl,
  coinScale = 1,
  cameraZ = 3.6,
  fov = 60,
  ariaLabel = "Open token on Raydium Launchlab",

  // Oscillation defaults (tweak these)
  yawCenterDeg = 180, // adjust until your good side faces front
  yawAmplitudeDeg = 16, // swing ±16°
  oscillateHz = 0.2, // ~0.8 cycles per second
  tiltDeg = 6, // subtle top/bottom tilt for depth
}: FloatingCoinProps) {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    const deg = (d: number) => (d * Math.PI) / 180;
    let raf = 0;
    let last = performance.now();
    let t = 0;

    const center = deg(yawCenterDeg);
    const amp = deg(yawAmplitudeDeg);
    const omega = 2 * Math.PI * oscillateHz; // radians/sec

    const xTilt = deg(tiltDeg);

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      t += dt;

      // y oscillates: center ± amplitude
      const y = center + amp * Math.sin(omega * t);

      // optional subtle x tilt (also oscillate a hair to feel alive)
      const x = xTilt * 0.85 * Math.sin(omega * t + Math.PI / 2);

      setRotation(([_, __, z]) => [x, y, z]);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [yawCenterDeg, yawAmplitudeDeg, oscillateHz, tiltDeg]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`relative block ${className}`}
      style={{ cursor: "pointer" }}
    >
      <Canvas
        camera={{ position: [0, 0, cameraZ], fov }}
        style={{
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "block",
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: 2,
          outputColorSpace: "srgb",
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 3, 5]} intensity={40} />
          <directionalLight position={[-3, 2, -4]} intensity={10} />
          <pointLight position={[0, 6, 2]} intensity={1.4} />

          <Center>
            <CoinModel
              position={[0, 0, 0]}
              scale={coinScale}
              rotation={rotation}
              modelUrl={modelUrl}
            />
          </Center>
        </Suspense>
      </Canvas>
    </a>
  );
}
