"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

interface FallingCoin {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotationSpeed: [number, number, number];
  initialRotation: [number, number, number];
  tumbleAxis: [number, number, number];
  driftSpeed: number;
  fallSpeed: number;
}

function CoinModel({
  position,
  scale,
  rotation,
}: {
  position: [number, number, number];
  scale: number;
  rotation: [number, number, number];
}) {
  const { scene } = useGLTF("/assets/3d_objects/tt_token_3d_textured.glb");

  return (
    <primitive
      object={scene.clone()}
      position={position}
      scale={[scale, scale, scale]}
      rotation={rotation}
    />
  );
}

function FallingCoins() {
  const [coins, setCoins] = useState<FallingCoin[]>([]);

  useEffect(() => {
    const newCoins: FallingCoin[] = [];
    for (let i = 0; i < 20; i++) {
      // Space coins vertically to prevent overlapping
      const verticalSpacing = (35 / 15) * i; // Spread over 35 units for 15 coins
      newCoins.push({
        id: i,
        x: (Math.random() - 0.5) * 18, // -9 to 9 (slightly wider for more coins)
        y: 9 + verticalSpacing, // Start closer to visible area
        size: 0.4 + Math.random() * 0.6, // 0.4 to 1.0 scale (slightly smaller range)
        duration: 8 + Math.random() * 8, // 8-16 seconds
        delay: i * 0.005, // Near-instant stagger delays
        rotationSpeed: [
          (Math.random() - 0.5) * 8, // Random X rotation speed
          (Math.random() - 0.5) * 8, // Random Y rotation speed
          (Math.random() - 0.5) * 8, // Random Z rotation speed
        ],
        initialRotation: [
          Math.random() * Math.PI * 2, // Random initial X rotation
          Math.random() * Math.PI * 2, // Random initial Y rotation
          Math.random() * Math.PI * 2, // Random initial Z rotation
        ],
        tumbleAxis: [
          Math.random() * 2 - 1, // Random tumble axis X
          Math.random() * 2 - 1, // Random tumble axis Y
          Math.random() * 2 - 1, // Random tumble axis Z
        ],
        driftSpeed: (Math.random() - 0.5) * 1.5, // Random horizontal drift (reduced)
        fallSpeed: 0.8 + Math.random() * 0.4, // Random fall speed variation
      });
    }
    setCoins(newCoins);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{
          background: "transparent",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={2.0} />
          <pointLight position={[10, 10, 10]} intensity={3} />
          <directionalLight position={[-10, -10, -5]} intensity={2} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={2.5} />
          <pointLight position={[0, 15, 5]} intensity={2} />
          {coins.map((coin) => (
            <FallingCoin3D key={coin.id} coin={coin} />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}

function FallingCoin3D({ coin }: { coin: FallingCoin }) {
  const [position, setPosition] = useState<[number, number, number]>([
    coin.x,
    coin.y,
    0,
  ]);
  const [rotation, setRotation] = useState<[number, number, number]>(
    coin.initialRotation
  );

  useEffect(() => {
    const startTime = Date.now() + coin.delay * 1000;
    let animationFrame: number;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000;

      if (elapsed > 0) {
        // Continuous falling motion - no resets
        const fallSpeed = 2.0; // Moderate fall speed
        const y = coin.y - elapsed * fallSpeed;

        // Horizontal drift with some randomness but controlled
        const x = coin.x + Math.sin(elapsed * 0.3 + coin.id) * 2; // Gentle drift

        // Realistic tumbling rotation
        const rotX =
          coin.initialRotation[0] + elapsed * coin.rotationSpeed[0] * 0.3;
        const rotY =
          coin.initialRotation[1] + elapsed * coin.rotationSpeed[1] * 0.3;
        const rotZ =
          coin.initialRotation[2] + elapsed * coin.rotationSpeed[2] * 0.3;

        // Add some wobble
        const wobbleX = Math.sin(elapsed * 1.5 + coin.id) * 0.1;
        const wobbleY = Math.cos(elapsed * 1.2 + coin.id) * 0.08;
        const wobbleZ = Math.sin(elapsed * 2 + coin.id) * 0.06;

        setPosition([x, y, 0]);
        setRotation([rotX + wobbleX, rotY + wobbleY, rotZ + wobbleZ]);
      }
      animationFrame = requestAnimationFrame(animate);
    };

    const timeout = setTimeout(animate, coin.delay * 1000);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [coin]);

  return (
    <CoinModel position={position} scale={coin.size} rotation={rotation} />
  );
}

export default function LoadingOverlay() {
  const [mounted, setMounted] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Minimum show time for UX (adjust as you like)
    const minTimer = setTimeout(() => {
      setHiding(true); // start fading after min time
    }, 5000);

    const onLoad = () => {
      // When the page finishes loading, trigger fade (but keep min show)
      // Don't set hiding to true immediately - let the 5-second timer handle it
    };

    if (typeof window !== "undefined") {
      window.addEventListener("load", onLoad);
    }

    return () => {
      clearTimeout(minTimer);
      if (typeof window !== "undefined") {
        window.removeEventListener("load", onLoad);
      }
    };
  }, []);

  // When the transition finishes, unmount
  const handleTransitionEnd = useCallback(() => {
    if (hiding) setMounted(false);
  }, [hiding]);

  if (!mounted) return null;

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      data-loading-overlay
      className={[
        "fixed inset-0 z-[9999] bg-black",
        "transition-opacity ease-out", // animate opacity
        "duration-[800ms]", // arbitrary Tailwind value
        hiding ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
      style={{ cursor: "none" }}
    >
      {/* Falling coins */}
      <FallingCoins />

      <div className="flex items-center align-center content-center justify-center h-full relative z-10">
        <div className="text-center align-center content-center relative">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            {/* TT Logo element at center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/assets/images/tt_token.png"
                alt="TT"
                className="w-14 h-14 object-contain opacity-80 animate-spin"
                style={{
                  filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
                }}
              />
            </div>
          </div>
          <h1
            className="text-4xl md:text-4xl lg:text-8xl font-bold bg-gradient-to-r from-white/90 via-white/70 to-white/50 bg-clip-text text-transparent leading-tight"
            style={{
              fontFamily: "A4SPEED, sans-serif",
              animation: "heartbeat 1.5s ease-in-out infinite",
            }}
          >
            TENSORTUNES
          </h1>
          <p className="text-[color:var(--neon-cyan)/0.7]">
            Initializing experience...
          </p>
        </div>
      </div>
    </div>
  );
}
