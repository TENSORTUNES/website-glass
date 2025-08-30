"use client";

import { useEffect, useState, useCallback } from "react";
import IconQueue from "./sliding-icons-no-overlap";

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
      setHiding(true);
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
      className={[
        "fixed inset-0 z-[9999] bg-black",
        "transition-opacity ease-out", // animate opacity
        "duration-[800ms]", // arbitrary Tailwind value
        hiding ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
    >
      <div className="flex items-center align-center content-center justify-center h-full">
        <div className="text-center align-center content-center">
          <div className="w-16 h-16 border-4 border-[var(--neon-cyan)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h1
            className="text-4xl md:text-4xl lg:text-8xl font-bold bg-gradient-to-r from-white/90 via-white/70 to-white/50 bg-clip-text text-transparent leading-tight"
            style={{ fontFamily: "A4SPEED, sans-serif" }}
          >
            TENSORTUNES
          </h1>
          <p className="text-[color:var(--neon-cyan)/0.7]">
            Initializing experience...
          </p>

          <div className="mt-6">
            <IconQueue durationMs={2000} />
          </div>
        </div>
      </div>
    </div>
  );
}
