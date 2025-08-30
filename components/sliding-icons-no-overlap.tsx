"use client";

import { useEffect, useRef, useState } from "react";
import {
  Headphones,
  SquareActivity,
  MicVocal,
  Bot,
  GitGraph,
  Braces,
} from "lucide-react";

const ICONS = [Headphones, SquareActivity, MicVocal, Bot, GitGraph, Braces];

type Props = {
  size?: number; // px
  color?: string; // CSS color
  durationMs?: number; // total time for one icon (right -> center -> left)
  startDelayMs?: number;
};

export default function IconQueue({
  size = 44,
  color = "var(--neon-cyan)",
  durationMs = 2600,
  startDelayMs = 100,
}: Props) {
  const [idx, setIdx] = useState(0);
  const [k, setK] = useState(0); // force re-run of CSS animation
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // kick off after optional delay
    const t = window.setTimeout(() => {
      setK((v) => v + 1);
    }, startDelayMs);
    return () => clearTimeout(t);
  }, [startDelayMs]);

  useEffect(() => {
    if (k === 0) return;
    // after this icon finishes, advance to next
    timerRef.current = window.setTimeout(() => {
      setIdx((i) => (i + 1) % ICONS.length);
      setK((v) => v + 1); // retrigger animation
    }, durationMs);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [k, durationMs]);

  const Icon = ICONS[idx];

  return (
    <div className="relative w-full h-16 overflow-hidden">
      <Icon
        key={k} // re-mounts to restart CSS animation
        className="absolute top-1/2 -translate-y-1/2 drop-shadow-[0_0_10px_var(--neon-cyan)] pointer-events-none"
        style={{
          // initial = off-screen right (prevents flash)
          left: "110%",
          opacity: 0,
          transform: "translateY(-50%) scale(0.96)",
          // name duration timing delay iteration fill-mode
          animation: `tt-icon-queue ${durationMs}ms linear 0ms 1 both`,
          willChange: "left, transform, opacity",
          color,
          fontSize: `${size}px`,
        }}
      />
    </div>
  );
}
