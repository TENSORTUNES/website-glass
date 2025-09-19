"use client";

import {
  Cpu,
  Music,
  Sparkles,
  Brain,
  Headphones,
  Zap,
  Globe,
  Users,
  Mic,
} from "lucide-react";
import { Oswald, Saira } from "next/font/google";

const oswald = Oswald({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const saira = Saira({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

//checken 2

export function About() {
  return (
    <section id="about" className="mt-80 mb-20 px-4">
      <div className="container mx-auto mt-16 max-w-7xl">
        <div className="h-auto">
          {/* Main Heading */}
          <div className={`${saira.className} text-center mb-16`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white lg:mb-8">
              An AI-powered collective pioneering the future of music and
              community.
            </h2>
          </div>

          {/* Icons Section - Full Width */}
          <div className="md:flex hidden md:mb-14 lg:mb-50 flex items-center justify-center">
            <div className="flex items-center justify-around w-full max-w-none">
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Music className="w-7 h-7 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Headphones className="w-7 h-7 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Mic className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* floating blocks */}
        {/* <div className="relative hidden lg:block pointer-events-none">
          <div className="hidden xl:block absolute -left-0 top-120 w-24 h-20 lg:rotate-80 lg:-skew-20">
            <div className="glass backdrop-blur backdrop-saturate-400 w-full h-full rounded-lg" />
          </div>

          <div className="absolute right-20 top-150 w-28 h-24 lg:-rotate-20 lg:-skew-24">
            <div className="glass backdrop-blur backdrop-saturate-400 w-full h-full rounded-lg" />
          </div>

          <div className="absolute -left-12 bottom-20 w-20 h-16 lg:rotate-75 lg:skew-12">
            <div className="glass backdrop-blur backdrop-saturate-400 w-full h-full rounded-lg" />
          </div>

          <div className="absolute right-40 bottom-10 w-24 h-18 lg:-rotate-45 lg:skew-6">
            <div className="glass backdrop-blur backdrop-saturate-400 w-full h-full rounded-lg" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
