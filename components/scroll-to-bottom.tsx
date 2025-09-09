"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollComponent() {
  const sectionIds = [
    "hero",
    "about",
    "releases",
    "community",
    "contact",
    "newsletter",
  ];
  let currentSectionIndex = 0;

  const scrollDown = () => {
    const nextIndex = (currentSectionIndex + 1) % sectionIds.length;
    const nextSectionId = sectionIds[nextIndex];

    const nextElement = document.getElementById(nextSectionId);
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: "smooth" });
      currentSectionIndex = nextIndex;
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-bounce">
      <button
        onClick={scrollDown}
        className="relative group"
        aria-label="Scroll down"
      >
        {/* The background container that grows smoothly */}
        <div
          className="absolute  bottom-0 bg-white/40 right-0 backdrop-blur backdrop-saturate-300 hover:backdrop-blur hover:backdrop-saturate-300 rounded-full shadow-lg
          transition-all duration-500 ease-in-out
          w-10 h-10 group-hover:h-[260px]"
        />

        {/* Extended content - text and arrow */}
        <div
          className="absolute bottom-0 right-0 flex flex-col items-center justify-center w-10 px-4 py-4
          opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out
          pointer-events-none"
        >
          <span className="text-xs font-medium text-stone-950 transition-all duration-500 delay-100">
            s
          </span>
          <span className="text-xs font-medium text-stone-950 transition-all duration-500 delay-125">
            c
          </span>
          <span className="text-xs font-medium text-stone-950 transition-all duration-500 delay-150">
            r
          </span>
          <span className="text-xs font-medium text-stone-950 transition-all duration-500 delay-175">
            o
          </span>
          <span className="text-xs font-medium text-stone-950 transition-all duration-500 delay-200">
            l
          </span>
          <span className="text-xs font-medium text-stone-950 transition-all duration-500 delay-225">
            l
          </span>
          <br />
          <span className="text-xs font-medium text-stone-950 transition-all duration-500 delay-250">
            d
          </span>
          <span className="text-xs font-medium text-stone-950 transition-all duration-500 delay-275">
            o
          </span>
          <span className="text-xs font-medium text-stone-950 transition-all duration-500 delay-300">
            w
          </span>
          <span className="text-xs font-medium text-stone-950 transition-all duration-500 delay-325">
            n
          </span>
          <br />
          <ChevronDown
            size={20}
            color="black"
            className="flex items-center justify-center transition-all duration-500 delay-350"
          />
        </div>

        {/* Default state - small circular button with arrow */}
        <div
          className="relative flex items-center justify-center w-10 h-10
          opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out"
        >
          <ChevronDown size={20} className="" color="black" />
        </div>
      </button>
    </div>
  );
}
