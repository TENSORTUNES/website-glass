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

function FallingCoins({ stopCreating }: { stopCreating: boolean }) {
  const [coins, setCoins] = useState<FallingCoin[]>([]);

  useEffect(() => {
    let nextId = 0;
    let interval: NodeJS.Timeout;

    // Create initial batch of coins immediately
    const createInitialCoins = () => {
      const initialCoins: FallingCoin[] = [];
      for (let i = 0; i < 2; i++) {
        // Spread coins out more initially to avoid overlap
        const x = (i - 0.5) * 6; // Spread them out: -3, 3
        const y = 12 + i * 3; // Closer to visible area: 12, 15

        initialCoins.push({
          id: nextId++,
          x,
          y,
          size: 0.3 + Math.random() * 0.4, // Match smaller size range
          duration: 4 + Math.random() * 8,
          delay: 0,
          rotationSpeed: [
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
          ],
          initialRotation: [
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
          ],
          tumbleAxis: [
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
          ],
          driftSpeed: (Math.random() - 0.5) * 0.8, // Reduced drift to minimize collision
          fallSpeed: 4.5 + Math.random() * 0.8, // More consistent fall speed
        });
      }
      setCoins(initialCoins);
    };

    // Create new coin function with systematic top spawning
    const createNewCoin = () => {
      setCoins((prevCoins) => {
        // Systematic spawning across the top - divide screen into zones
        const screenWidth = 16; // Total width available
        const zones = 5; // 5 spawning zones across the screen
        const zoneWidth = screenWidth / zones;

        // Find the least crowded zone
        const zoneCounts = new Array(zones).fill(0);
        prevCoins.forEach((coin) => {
          if (coin.y > 15) {
            // Only count coins near the top
            const zoneIndex = Math.floor(
              (coin.x + screenWidth / 2) / zoneWidth
            );
            if (zoneIndex >= 0 && zoneIndex < zones) {
              zoneCounts[zoneIndex]++;
            }
          }
        });

        // Find the zone with fewest coins
        let bestZone = 0;
        let minCount = zoneCounts[0];
        for (let i = 1; i < zones; i++) {
          if (zoneCounts[i] < minCount) {
            minCount = zoneCounts[i];
            bestZone = i;
          }
        }

        // Spawn in the center of the best zone with some randomness
        const zoneCenter =
          bestZone * zoneWidth - screenWidth / 2 + zoneWidth / 2;
        const x = zoneCenter + (Math.random() - 0.5) * (zoneWidth * 0.6); // 60% of zone width
        const y = 14 + Math.random() * 2; // Closer: 14-16 range

        const newCoin: FallingCoin = {
          id: nextId++,
          x,
          y,
          size: 0.3 + Math.random() * 0.4, // Smaller: 0.3 to 0.7 range
          duration: 4 + Math.random() * 8,
          delay: 0,
          rotationSpeed: [
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
          ],
          initialRotation: [
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
          ],
          tumbleAxis: [
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
          ],
          driftSpeed: (Math.random() - 0.5) * 0.8, // Reduced drift
          fallSpeed: 4.5 + Math.random() * 0.8,
        };

        return [...prevCoins, newCoin];
      });
    };

    // Start immediately
    createInitialCoins();

    // Create new coins every 800ms for first 6 seconds (slower rate)
    interval = setInterval(() => {
      if (!stopCreating) {
        createNewCoin();
      }
    }, 800);

    // Stop creating new coins after 6 seconds
    const stopTimer = setTimeout(() => {
      clearInterval(interval);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(stopTimer);
    };
  }, []); // Empty dependency array - only run once on mount

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
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: 2, // ACESFilmicToneMapping for better color reproduction
          outputColorSpace: "srgb",
        }}
        dpr={[1, 1.5]} // Slightly higher pixel ratio for better quality
      >
        <Suspense fallback={null}>
          <ambientLight intensity={4.5} />
          <pointLight position={[10, 10, 10]} intensity={8} />
          <directionalLight position={[-10, -10, -5]} intensity={5} />
          <directionalLight position={[10, 10, 5]} intensity={5} />
          <pointLight position={[-10, -10, -10]} intensity={6} />
          <pointLight position={[0, 15, 5]} intensity={5} />
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
    (Math.random() - 0.5) * 4, // Add Z-depth variation: -2 to 2
  ]);
  const [rotation, setRotation] = useState<[number, number, number]>(
    coin.initialRotation
  );

  useEffect(() => {
    let animationFrame: number;
    let startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000;

      // Continuous falling motion - no resets
      const fallSpeed = 3.0; // Faster fall speed
      const y = coin.y - elapsed * fallSpeed;

      // Horizontal drift with some randomness but controlled
      const x = coin.x + Math.sin(elapsed * 0.3 + coin.id) * 2; // Gentle drift

      // Z-depth movement for more dynamic 3D effect
      const z = position[2] + Math.sin(elapsed * 0.2 + coin.id) * 0.1; // Subtle Z movement

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

      setPosition([x, y, z]);
      setRotation([rotX + wobbleX, rotY + wobbleY, rotZ + wobbleZ]);

      animationFrame = requestAnimationFrame(animate);
    };

    // Start animation immediately
    animate();

    return () => {
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
  const [fadeContent, setFadeContent] = useState(false);

  useEffect(() => {
    // Minimum show time for UX (adjust as you like)
    const minTimer = setTimeout(() => {
      setFadeContent(true); // start fading content after 7 seconds
    }, 7000);

    // Additional timer to completely hide overlay after content fades
    const hideTimer = setTimeout(() => {
      setHiding(true); // start complete fade after additional time
    }, 16000); // 7 seconds + 9 seconds for coins to fall completely off-screen

    const onLoad = () => {
      // When the page finishes loading, trigger fade (but keep min show)
      // Don't set hiding to true immediately - let the 5-second timer handle it
    };

    if (typeof window !== "undefined") {
      window.addEventListener("load", onLoad);
    }

    return () => {
      clearTimeout(minTimer);
      clearTimeout(hideTimer);
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
        "fixed inset-0 z-[9999]",
        "transition-all ease-out duration-[800ms]", // animate all properties
        hiding ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
      style={{
        cursor: "none",
        backgroundColor: fadeContent ? "transparent" : "black",
      }}
    >
      {/* Falling coins - always visible */}
      {/* <FallingCoins stopCreating={fadeContent} /> */}

      {/* Content that fades out */}
      <div
        className={[
          "flex items-center align-center content-center justify-center h-full relative z-10",
          "transition-opacity ease-out duration-[2000ms]", // slower fade for content
          fadeContent ? "opacity-0" : "opacity-100",
        ].join(" ")}
      >
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
