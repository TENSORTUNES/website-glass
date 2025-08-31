"use client";

import { useEffect, useState } from "react";

const COLORS = [
  "#b549ea", // purple
  "#ff6c3d", // orange
  "#00ffe0", // cyan
  "#ff0080", // hot pink
  "#00bfff", // electric blue
  "#39ff14", // neon green
  "#ffff00", // bright yellow
  "#da70d6", // orchid
  "#ff69b4", // hot pink
  "#00ffff", // aqua
  "#ff1493", // deep pink
  "#7fff00", // chartreuse
  "#ff4500", // orange red
  "#9370db", // medium purple
]; // expanded vaporwave palette

interface FloatingCursor {
  id: number;
  x: number;
  y: number;
  color: string;
  color2: string;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingBgIcons() {
  const [cursors, setCursors] = useState<FloatingCursor[]>([]);

  useEffect(() => {
    // Generate random floating cursors
    const generateCursors = () => {
      const newCursors: FloatingCursor[] = [];
      for (let i = 0; i < 70; i++) {
        newCursors.push({
          id: i,
          x: Math.random() * 100, // percentage
          y: -10 - Math.random() * 10, // start above screen
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          color2: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 10 + Math.random() * 20, // 12-28px
          duration: 3 + Math.random() * 15, // 3-7 seconds
          delay: 0, // No delay - start immediately
        });
      }
      setCursors(newCursors);
    };

    generateCursors();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {cursors.map((cursor) => {
        const { id, x, y, color, color2, size, duration, delay } = cursor;
        return (
          <div
            key={id}
            className="absolute opacity-10"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size + 8}px`,
              height: `${size + 8}px`,
              animation: `float-down-trail ${duration}s linear ${delay}s infinite, color-shift-${id % 3} 2s ease-in-out infinite alternate`,
            }}
          >
            <div
              className="cursor-text-floating"
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: `${size}px`,
                fontWeight: 700,
                background: `linear-gradient(45deg, ${color}, ${color2}, ${color})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              TT
            </div>
          </div>
        );
      })}
    </div>
  );
}