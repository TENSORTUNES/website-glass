"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import TTT from "../public/assets/TTT/TENSORTUNESTOKEN.png";

interface HoveringCubeProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

export function HoveringCube({ className, size = "md" }: HoveringCubeProps) {
  const sizeClasses = {
    xs: "w-10 h-10",
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };
  const cubeSide = sizeClasses[size];
  const half =
    size === "xs"
      ? "20px"
      : size === "sm"
      ? "32px"
      : size === "md"
      ? "48px"
      : "64px";

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
            "float 6s ease-in-out infinite, rotate 20s linear infinite",
        }}
      >
        {/* Front */}
        <div
          className={cn(
            "absolute flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-gray-950 to-blue-950 border border-gray-900 [backface-visibility:hidden]",
            cubeSide
          )}
          style={{ transform: `translateZ(${half})` }}
        >
          <Image
            src={TTT}
            width={size === "xs" ? 20 : size === "sm" ? 30 : 50}
            alt="Tensor Tunes - Music with and for AI"
          />
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-blue-950 to-gray-950 border border-gray-900 [backface-visibility:hidden]",
            cubeSide
          )}
          style={{ transform: `translateZ(-${half}) rotateY(180deg)` }}
        >
          <Image
            src={TTT}
            width={size === "xs" ? 20 : size === "sm" ? 30 : 50}
            alt="Tensor Tunes - Music with and for AI"
          />
        </div>

        {/* Right */}
        <div
          className={cn(
            "absolute flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-gray-950 to-blue-950 border border-gray-900 [backface-visibility:hidden]",
            cubeSide
          )}
          style={{ transform: `rotateY(90deg) translateZ(${half})` }}
        >
          <Image
            src={TTT}
            width={size === "xs" ? 20 : size === "sm" ? 30 : 50}
            alt="Tensor Tunes - Music with and for AI"
          />
        </div>

        {/* Left */}
        <div
          className={cn(
            "absolute flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-blue-950 to-gray-950 border border-gray-900 [backface-visibility:hidden]",
            cubeSide
          )}
          style={{ transform: `rotateY(-90deg) translateZ(${half})` }}
        >
          <Image
            src={TTT}
            width={size === "xs" ? 20 : size === "sm" ? 30 : 50}
            alt="Tensor Tunes - Music with and for AI"
          />
        </div>

        {/* Top */}
        <div
          className={cn(
            "absolute flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-gray-950 to-blue-950 border border-gray-900 [backface-visibility:hidden]",
            cubeSide
          )}
          style={{ transform: `rotateX(90deg) translateZ(${half})` }}
        >
          <Image
            src={TTT}
            width={size === "xs" ? 20 : size === "sm" ? 30 : 50}
            alt="Tensor Tunes - Music with and for AI"
          />
        </div>

        {/* Bottom */}
        <div
          className={cn(
            "absolute flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-blue-950 to-gray-950 border border-gray-900 [backface-visibility:hidden]",
            cubeSide
          )}
          style={{ transform: `rotateX(-90deg) translateZ(${half})` }}
        >
          <Image
            src={TTT}
            width={size === "xs" ? 20 : size === "sm" ? 30 : 50}
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
