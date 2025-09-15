"use client";

import { useEffect, useState, Suspense } from "react";
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
  let spawnCounter = 0; // Use a simple counter instead of state

  useEffect(() => {
    // Create a continuous stream of coins for the main page
    const createNewCoin = () => {
      // Calculate screen width and divide into 4 sections, spawn randomly within each
      const getRandomSpawnInSection = (sectionIndex: number) => {
        if (typeof window === 'undefined') {
          // Default fallback for server-side rendering
          const defaultWidth = 16;
          const sectionWidth = defaultWidth / 4;
          const sectionStart = -defaultWidth/2 + (sectionIndex * sectionWidth);
          const sectionEnd = sectionStart + sectionWidth;
          return sectionStart + Math.random() * (sectionEnd - sectionStart);
        }

        const aspectRatio = window.innerWidth / window.innerHeight;
        const cameraDistance = 10;
        const fovRadians = (75 * Math.PI) / 180;
        const visibleHeight = 2 * cameraDistance * Math.tan(fovRadians / 2);
        const visibleWidth = visibleHeight * aspectRatio;
        const usableWidth = visibleWidth * 0.8; // Use 80% of visible width

        // Calculate section boundaries
        const sectionWidth = usableWidth / 4;
        const totalOffset = -usableWidth / 2; // Center the usable area
        const sectionStart = totalOffset + (sectionIndex * sectionWidth);
        const sectionEnd = sectionStart + sectionWidth;

        // Return random point within this section
        return sectionStart + Math.random() * (sectionEnd - sectionStart);
      };

      // Use current counter value and increment it synchronously
      const currentSection = spawnCounter % 4;
      const spawnX = getRandomSpawnInSection(currentSection);
      spawnCounter = (spawnCounter + 1) % 4; // Increment counter synchronously

      const newCoin: FallingCoin = {
        id: Date.now() + Math.random(),
        x: spawnX, // Use calculated spawn point
        y: 8 + Math.random() * 4, // Spawn closer to visible area for immediate falling
        size: 0.3 + Math.random() * 0.4, // Smaller size range
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
        driftSpeed: (Math.random() - 0.5) * 0.8,
        fallSpeed: 2.5, // Slower fall speed
      };

      setCoins(prevCoins => {
        // Keep only recent coins to avoid performance issues
        const recentCoins = prevCoins.filter(coin => coin.y > -10);
        return [...recentCoins, newCoin].slice(-15); // Keep max 15 coins
      });
    };

    // Create coins continuously
    const interval = setInterval(createNewCoin, 1200); // Every 1.2 seconds

    return () => clearInterval(interval);
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
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: 2,
          outputColorSpace: "srgb"
        }}
        dpr={[1, 1.5]}
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
    (Math.random() - 0.5) * 4,
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

      const fallSpeed = 2.5;
      const y = coin.y - elapsed * fallSpeed;
      const x = coin.x + Math.sin(elapsed * 0.3 + coin.id) * 2;
      const z = position[2] + Math.sin(elapsed * 0.2 + coin.id) * 0.1;

      const rotX = coin.initialRotation[0] + elapsed * coin.rotationSpeed[0] * 0.3;
      const rotY = coin.initialRotation[1] + elapsed * coin.rotationSpeed[1] * 0.3;
      const rotZ = coin.initialRotation[2] + elapsed * coin.rotationSpeed[2] * 0.3;

      const wobbleX = Math.sin(elapsed * 1.5 + coin.id) * 0.1;
      const wobbleY = Math.cos(elapsed * 1.2 + coin.id) * 0.08;
      const wobbleZ = Math.sin(elapsed * 2 + coin.id) * 0.06;

      setPosition([x, y, z]);
      setRotation([rotX + wobbleX, rotY + wobbleY, rotZ + wobbleZ]);

      // Continue animation indefinitely for smooth falling
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [coin]);

  return (
    <CoinModel position={position} scale={coin.size} rotation={rotation} />
  );
}

export default function PersistentFallingCoins() {
  return <FallingCoins />;
}