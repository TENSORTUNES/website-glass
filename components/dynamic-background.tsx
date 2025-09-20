"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function DynamicBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();
  const currentSrcRef = useRef("/assets/videos/contact_v.mp4");

  // helper to set src + play safely
  const setVideo = (src: string) => {
    if (!videoRef.current) return;
    if (currentSrcRef.current === src) return;

    currentSrcRef.current = src;
    const v = videoRef.current;

    // swap source without remount
    v.pause();
    v.src = src;
    v.load();

    const tryPlay = () =>
      v.play().catch(() => {
        /* ignored: mobile will require a tap */
      });
    if (v.readyState >= 2) tryPlay();
    else {
      const onCanPlay = () => {
        v.removeEventListener("canplay", onCanPlay);
        tryPlay();
      };
      v.addEventListener("canplay", onCanPlay, { once: true });
    }
  };

  useEffect(() => {
    // one-time user interaction fallback for strict mobiles
    const onFirstTouch = () => {
      videoRef.current?.play().catch(() => {});
      window.removeEventListener("touchstart", onFirstTouch);
    };
    window.addEventListener("touchstart", onFirstTouch, { passive: true });
    return () => window.removeEventListener("touchstart", onFirstTouch);
  }, []);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    if (pathname !== "/") {
      setVideo("/assets/videos/contact_v.mp4");
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        let mostVisible: string | null = null;
        let highest = 0;
        for (const e of entries) {
          if (e.intersectionRatio > highest) {
            highest = e.intersectionRatio;
            mostVisible = e.target.id;
          }
        }
        if (highest > 0.2 && mostVisible) {
          switch (mostVisible) {
            case "hero":
              setVideo("/assets/videos/contact_v.mp4");
              break;
            case "about":
              setVideo("/assets/videos/bv_1.mp4");
              break;
            case "releases":
              setVideo("/assets/videos/bv_2.mp4");
              break;
            case "community":
              setVideo("/assets/videos/bv_3.mp4");
              break;
            case "contact":
              setVideo("/assets/videos/1080p_mainpage_video_loop.mp4");
              break;
            default:
              setVideo("/assets/videos/contact_v.mp4");
          }
        }
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1], rootMargin: "-10% 0px -10% 0px" }
    );

    const ids = ["hero", "about", "releases", "community", "contact"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [pathname]);

  return (
    <video
      ref={videoRef}
      className="fixed top-0 left-0 w-full h-full object-cover"
      muted
      autoPlay
      loop
      playsInline
      // Safari quirks
      webkit-playsinline="true"
      preload="auto"
      // optional poster for faster first paint
      // poster="/assets/videos/poster.jpg"
      style={{ opacity: 0.7, zIndex: -1 }}
      src={currentSrcRef.current}
      // safety: retry play on visibility changes
      onLoadedMetadata={() => videoRef.current?.play().catch(() => {})}
      onSuspend={() => videoRef.current?.play().catch(() => {})}
    />
  );
}
