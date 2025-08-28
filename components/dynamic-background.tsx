"use client"

import { useEffect, useState, useRef } from "react"

export function DynamicBackground() {
  const [currentVideo, setCurrentVideo] = useState("/assets/videos/1080p_mainpage_video_loop.mp4")
  const videoRef = useRef<HTMLVideoElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Create a new Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        let mostVisibleSection: string | null = null
        let highestRatio = 0

        entries.forEach((entry) => {
          if (entry.intersectionRatio > highestRatio) {
            highestRatio = entry.intersectionRatio
            mostVisibleSection = entry.target.id
          }
        })

        // Only change video if a section is significantly visible
        if (highestRatio > 0.3 && mostVisibleSection) {
          switch (mostVisibleSection) {
            case "hero":
              setCurrentVideo("/assets/videos/contact_v.mp4")
              break
            case "community":
              setCurrentVideo("/assets/videos/bv_1.mp4")
              break
            case "releases":
              setCurrentVideo("/assets/videos/bv_2.mp4")
              break
            case "about":
              setCurrentVideo("/assets/videos/bv_3.mp4")
              break
            case "contact":
              setCurrentVideo("/assets/videos/1080p_mainpage_video_loop.mp4")
              break
            default:
              setCurrentVideo("/assets/videos/contact_v.mp4")
          }
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-20% 0px -20% 0px"
      }
    )

    // Observe all sections
    const observeSections = () => {
      const sections = ["hero", "community", "releases", "about", "contact"]
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section && observerRef.current) {
          observerRef.current.observe(section)
        }
      })
    }

    // Wait for DOM to be ready
    if (typeof window !== "undefined") {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", observeSections)
      } else {
        observeSections()
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <video
      key={currentVideo}
      ref={videoRef}
      className="fixed top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      style={{ opacity: 0.7, zIndex: -1 }}
    >
      <source src={currentVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}