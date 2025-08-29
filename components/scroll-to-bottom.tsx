"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollComponent() {
  // Show button when page is scrolled down

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollDown}
      className="fixed bottom-20 right-20 z-50 group bg-white/80 hover:bg-white text-white rounded-full 
      transition-all duration-300 ease-in-out shadow-lg"
      aria-label="Scroll down"
    >
      <div className="hidden group-hover:flex flex flex-col items-center w-20 px-4 py-10">
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

      <div className="flex items-center justify-center w-20 h-20 group-hover:hidden">
        <ChevronDown size={30} className="" color="black" />
      </div>
    </button>
  );
}
