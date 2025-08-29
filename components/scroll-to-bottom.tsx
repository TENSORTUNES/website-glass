"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollComponent() {
  const sectionIds = [
    "hero",
    "community",
    "releases",
    "about",
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
    <button
      onClick={scrollDown}
      className="fixed bottom-10 right-10 z-50 group bg-white/80 hover:bg-white text-white rounded-full 
      transition-all duration-300 ease-in-out shadow-lg"
      aria-label="Scroll down"
    >
      <div className="hidden group-hover:flex flex-col items-center transition-opacity ease-in-out  w-20 px-4 py-10">
        <span className="text-sm font-medium text-stone-950">s</span>
        <span className="text-sm font-medium text-stone-950">c</span>
        <span className="text-sm font-medium text-stone-950">r</span>
        <span className="text-sm font-medium text-stone-950">o</span>
        <span className="text-sm font-medium text-stone-950">l</span>
        <span className="text-sm font-medium text-stone-950">l</span>
        <br />
        <span className="text-sm font-medium text-stone-950">d</span>
        <span className="text-sm font-medium text-stone-950">o</span>
        <span className="text-sm font-medium text-stone-950">w</span>
        <span className="text-sm font-medium text-stone-950">n</span>
        <br />
        <ChevronDown
          size={30}
          color="black"
          className="flex items-center justify-center"
        />
      </div>

      <div className="flex items-center justify-center w-20 h-20 transition-opacity ease-in-out group-hover:hidden">
        <ChevronDown size={30} className="" color="black" />
      </div>
    </button>
  );
}
