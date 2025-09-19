"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("cursor-ready");
    const onMove = (e: MouseEvent) =>
      setPos({ x: e.clientX - 16, y: e.clientY - 16 });
    document.addEventListener("mousemove", onMove);

    const enter = () => setHover(true);
    const leave = () => setHover(false);
    const interactive = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, .cursor-hover"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.documentElement.classList.remove("cursor-ready");
      document.removeEventListener("mousemove", onMove);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hover ? "hover" : ""}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <div className="cursor-text">TT</div>
    </div>
  );
}
