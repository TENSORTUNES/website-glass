"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import TT_TOKEN from "../public/assets/TTT/TTT.png";

type FloatingCoinProps = {
  href: string;
  className?: string; // controls the Canvas SIZE (w/h) from outside
  modelUrl?: string;
  rotationSpeed?: number; // radians/sec
  coinScale?: number; // 3D model scale
  cameraZ?: number; // camera distance on Z
  fov?: number; // camera fov
  ariaLabel?: string;
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
  rotationSpeed = 0.1,
  coinScale = 1, // make it big by default
  cameraZ = 3.6, // move camera back a touch to avoid clipping
  fov = 60, // a little wider view
  ariaLabel = "Open token on Raydium Launchlab",
}: FloatingCoinProps) {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setRotation(([x, y, z]) => [x, y + rotationSpeed * dt, z]);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [rotationSpeed]);

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

          {/* Center ensures the model sits nicely in view */}
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
