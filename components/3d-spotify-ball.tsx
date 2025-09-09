"use client";
import { cn } from "@/lib/utils";

interface SpotifyBallProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  logoSrc?: string;
}

export function SpotifyBall({
  size = "md",
  className,
  logoSrc,
}: SpotifyBallProps) {
  const sizeClasses = { sm: "w-12 h-12", md: "w-16 h-16", lg: "w-24 h-24" };
  const logoSize = { sm: "w-6 h-6", md: "w-8 h-8", lg: "w-12 h-12" }[size];

  return (
    <div className={cn("relative inline-block", className)}>
      {/* Ball shell + static shading */}
      <div
        className={cn(
          "relative rounded-full overflow-hidden",
          "shadow-[0_8px_30px_rgba(29,185,84,0.35)]",
          sizeClasses[size]
        )}
        style={{
          // base green + radial shading (light at top-left, darker rim)
          background:
            "radial-gradient(120% 120% at 30% 25%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.15) 20%, rgba(29,185,84,1) 40%, rgba(7,61,22,1) 100%)",
        }}
      >
        {/* Moving “texture” to fake rotation */}
        <div
          className="absolute inset-0 rounded-full mix-blend-multiply opacity-70"
          style={{
            // horizontal stripes that scroll to simulate rotation
            background:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.06) 0 6px, rgba(255,255,255,0.06) 6px 12px)",
            animation: "texture-scroll 3.5s linear infinite",
          }}
        />

        {/* Center logo – does NOT rotate */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "pointer-events-none"
          )}
        >
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="Spotify"
              className={cn("rounded-full object-contain", logoSize)}
            />
          ) : (
            <div
              className={cn(
                "bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-xs",
                logoSize
              )}
            >
              ♪
            </div>
          )}
        </div>

        {/* Specular highlight that stays put */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(40% 40% at 28% 22%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.0) 60%)",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes texture-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-48px);
          }
        }
      `}</style>
    </div>
  );
}
