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
  size?: number;
  color?: string;
  durationMs?: number;
  startDelayMs?: number;
};

export default function IconQueue({
  size = 20,
  color = "var(--neon-cyan)",
  durationMs = 3000,
  startDelayMs = 500,
}: Props) {
  const [idx, setIdx] = useState(2); // Start with MicVocal to avoid duplicates
  const [animationKey, setAnimationKey] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Start the first animation
    const startTimer = setTimeout(() => {
      setAnimationKey(1);
    }, startDelayMs);

    return () => clearTimeout(startTimer);
  }, [startDelayMs]);

  useEffect(() => {
    if (animationKey === 0) return;

    // Set timer for next icon
    timerRef.current = window.setTimeout(() => {
      setIdx((i) => (i + 1) % ICONS.length);
      setAnimationKey((k) => k + 1);
    }, durationMs);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [animationKey, durationMs]);

  const Icon = ICONS[idx];

  return (
    <div className="relative w-full h-16 overflow-hidden">
      {animationKey > 0 && (
        <Icon
          key={animationKey}
          size={size}
          className="absolute top-1/2 -translate-y-1/2 drop-shadow-[0_0_5px_var(--neon-cyan)] pointer-events-none"
          style={{
            left: "100%",
            color,
            animation: `smooth-slide ${durationMs}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
            willChange: "left, transform",
          }}
        />
      )}
    </div>
  );
}
