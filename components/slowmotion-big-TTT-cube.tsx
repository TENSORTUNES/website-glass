"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import TTT from "../public/assets/TTT/TENSORTUNESTOKEN.png";

interface HoveringCubeProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xxl";
}

export function BigHoveringCube({ className, size = "md" }: HoveringCubeProps) {
  const sizeClasses = {
    xs: "w-5 h-5",
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xxl: "w-60 h-60",
  };
  const cubeSide = sizeClasses[size];
  const half =
    size === "xs"
      ? "10px"
      : size === "sm"
      ? "32px"
      : size === "md"
      ? "48px"
      : size === "lg"
      ? "64px"
      : "121px";

  return (
    // 1) Perspective must be on a parent of the transformed element
    <div className={cn("[perspective:1000px]", className)}>
      <div
        // 2) Preserve the 3D context for children
        className={cn(
          "relative [transform-style:preserve-3d] hover:animate-pulse transition-all duration-300 hover:scale-110",
          cubeSide
        )}
        style={{
          animation:
            "float 150s ease-in-out infinite, rotate 150s linear infinite",
        }}
      >
        {/* Front */}
        <div
          className={cn(
            "absolute flex items-center justify-center text-white font-bold text-xl glass-cube backdrop-blur backdrop-saturate-400 [backface-visibility:hidden]",
            cubeSide
          )}
          style={{ transform: `translateZ(${half})` }}
        >
          <Image
            src={TTT}
            width={
              size === "xs"
                ? 10
                : size === "sm"
                ? 30
                : size === "md" || size === "lg"
                ? 50
                : 200
            }
            alt="Tensor Tunes - Music with and for AI"
          />
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute flex items-center justify-center text-white font-bold text-xl glass-cube backdrop-blur backdrop-saturate-400 [backface-visibility:hidden]",
            cubeSide
          )}
          style={{ transform: `translateZ(-${half}) rotateY(180deg)` }}
        >
          <Image
            src={TTT}
            width={
              size === "xs"
                ? 10
                : size === "sm"
                ? 30
                : size === "md" || size === "lg"
                ? 50
                : 200
            }
            alt="Tensor Tunes - Music with and for AI"
          />
        </div>

        {/* Right */}
        <div
          className={cn(
            "absolute flex items-center justify-center text-white font-bold text-xl glass-cube backdrop-blur backdrop-saturate-400  [backface-visibility:hidden]",
            cubeSide
          )}
          style={{ transform: `rotateY(90deg) translateZ(${half})` }}
        >
          <Image
            src={TTT}
            width={
              size === "xs"
                ? 10
                : size === "sm"
                ? 30
                : size === "md" || size === "lg"
                ? 50
                : 200
            }
            alt="Tensor Tunes - Music with and for AI"
          />
        </div>

        {/* Left */}
        <div
          className={cn(
            "absolute flex items-center justify-center text-white font-bold text-xl glass-cube backdrop-blur backdrop-saturate-400 [backface-visibility:hidden]",
            cubeSide
          )}
          style={{ transform: `rotateY(-90deg) translateZ(${half})` }}
        >
          <Image
            src={TTT}
            width={
              size === "xs"
                ? 10
                : size === "sm"
                ? 30
                : size === "md" || size === "lg"
                ? 50
                : 200
            }
            alt="Tensor Tunes - Music with and for AI"
          />
        </div>

        {/* Top */}
        <div
          className={cn(
            "absolute flex items-center justify-center text-white font-bold text-xl glass-cube backdrop-blur backdrop-saturate-400 [backface-visibility:hidden]",
            cubeSide
          )}
          style={{ transform: `rotateX(90deg) translateZ(${half})` }}
        >
          <Image
            src={TTT}
            width={
              size === "xs"
                ? 10
                : size === "sm"
                ? 30
                : size === "md" || size === "lg"
                ? 50
                : 200
            }
            alt="Tensor Tunes - Music with and for AI"
          />
        </div>

        {/* Bottom */}
        <div
          className={cn(
            "absolute flex items-center justify-center text-white font-bold text-xl glas-cubes backdrop-blur backdrop-saturate-400  [backface-visibility:hidden]",
            cubeSide
          )}
          style={{ transform: `rotateX(-90deg) translateZ(${half})` }}
        >
          <Image
            src={TTT}
            width={
              size === "xs"
                ? 10
                : size === "sm"
                ? 30
                : size === "md" || size === "lg"
                ? 50
                : 200
            }
            alt="Tensor Tunes - Music with and for AI"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotateX(0) rotateY(0);
          }
          50% {
            transform: translateY(-20px) rotateX(10deg) rotateY(180deg);
          }
        }
        @keyframes rotate {
          from {
            transform: rotateX(0) rotateY(0);
          }
          to {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
}
