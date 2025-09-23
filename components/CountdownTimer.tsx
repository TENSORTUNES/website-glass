"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import FloatingCoin from "./floating-TT-coin";

type Props = {
  target: Date | string | number;
  doneText?: string;
  onComplete?: () => void;
  variant?: "large" | "compact";
  showLabels?: boolean;
  className?: string;
};

function toMs(input: Date | string | number) {
  if (input instanceof Date) return input.getTime();
  if (typeof input === "string") return new Date(input).getTime();
  return Number(input);
}
function getParts(diffMs: number) {
  const total = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { total, days, hours, minutes, seconds };
}

export default function CountdownTimer({
  target,
  doneText = "Launching now ✨",
  onComplete,
  variant = "large",
  showLabels = true,
  className = "",
}: Props) {
  const targetMs = useMemo(() => toMs(target), [target]);

  // SSR-safe: don't use Date.now() on the server render
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(() => targetMs); // static on server
  const firedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now()); // first tick after mount
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const { total, days, hours, minutes, seconds } = getParts(targetMs - now);

  useEffect(() => {
    if (mounted && !firedRef.current && total === 0) {
      firedRef.current = true;
      onComplete?.();
    }
  }, [mounted, total, onComplete]);

  // Server (not mounted yet): render a stable placeholder so SSR === hydration
  if (!mounted) {
    return (
      <div role="timer" className={`w-full ${className}`}>
        {variant === "compact" ? (
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white">
            <span className="opacity-80">Launch in</span>
            <span className="tabular-nums font-semibold">--d --h --m --s</span>
          </div>
        ) : (
          <div className="mx-auto flex items-center justify-center gap-2 md:gap-4">
            {["Days", "Hours", "Minutes", "Seconds"].map((lbl) => (
              <div
                key={lbl}
                className="flex flex-col items-center justify-center rounded-2xl bg-white/10 border border-white/15 px-4 py-3 md:px-6 md:py-4"
              >
                <div className="tabular-nums text-2xl md:text-4xl font-bold text-white">
                  --
                </div>
                {showLabels && (
                  <div className="mt-1 text-[10px] md:text-xs uppercase tracking-wide text-white/70">
                    {lbl}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (total === 0) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`text-center text-white/90 ${className}`}
      >
        {doneText}
      </div>
    );
  }

  // number box component (suppress hydration warnings on rapidly changing text)
  const Box = ({ value, label }: { value: number | string; label: string }) => (
    <div className="backdrop-blur backdrop-saturate-300 flex flex-col items-center justify-center rounded-2xl bg-white/10 border border-white/15 px-4 py-3 md:px-6 md:py-4">
      <div
        className="tabular-nums text-2xl md:text-4xl font-bold text-white"
        suppressHydrationWarning
      >
        {String(value).padStart(2, "0")}
      </div>
      {showLabels && (
        <div className="mt-1 text-[10px] md:text-xs uppercase tracking-wide text-white/70">
          {label}
        </div>
      )}
    </div>
  );

  if (variant === "compact") {
    return (
      <div
        role="timer"
        aria-live="polite"
        className={`inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white ${className}`}
      >
        <span className="opacity-80">Launch in</span>
        <span className="tabular-nums font-semibold" suppressHydrationWarning>
          {days}d {String(hours).padStart(2, "0")}h{" "}
          {String(minutes).padStart(2, "0")}m {String(seconds).padStart(2, "0")}
          s
        </span>
      </div>
    );
  }

  return (
    <div role="timer" aria-live="polite" className={`w-full ${className}`}>
      <div className="md:hidden text-xl mb-2 uppercase tracking-wide text-white/70 mr-1">
        Launch in
      </div>
      <div className="mx-auto flex items-center justify-center gap-2 md:gap-4">
        <div className="hidden md:block text-sm uppercase tracking-wide text-white/70 mr-1">
          Launch in
        </div>
        <Box value={days} label="Days" />
        <span className="text-white/50 font-semibold">:</span>
        <Box value={hours} label="Hours" />
        <span className="text-white/50 font-semibold">:</span>
        <Box value={minutes} label="Minutes" />
        <span className="text-white/50 font-semibold">:</span>
        <Box value={seconds} label="Seconds" />
      </div>
    </div>
  );
}
