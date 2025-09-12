import { Button } from "@/components/ui/button";
import { Play, Sparkles, ChevronDown } from "lucide-react";
import {
  Oswald,
  Saira,
  Barriecito,
  Audiowide,
  Zain,
  Saira_Stencil_One,
  Bebas_Neue,
} from "next/font/google";
import { BigHoveringCube } from "./slowmotion-big-TTT-cube";

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

const audiowide = Audiowide({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const bebasNeu = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const barriecito = Barriecito({
  weight: ["400"],
  subsets: ["latin"],
});

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex px-4">
      <div className="hidden lg:block md:absolute xl:top-70 lg xl:right-40">
        {/* <BigHoveringCube size="xxl" /> */}
      </div>
      <div className="absolute bottom-0 sm:ml-10 lg:ml-20 md:mb-20 flex">
        <h1
          className={`${bebasNeu.className} absolute bottom-78 sm:bottom-90 -left-22 rotate-90 text-gray-200 min-w-max text-7xl backdrop-blur backdrop-saturate-400 leading-tight`}
        >
          We create.
        </h1>

        <h1
          className={`${bebasNeu.className} absolute bottom-35 text-gray-200 min-w-max text-7xl sm:text-9xl backdrop-blur backdrop-saturate-400`}
        >
          We produce.
        </h1>

        <h1
          className={`${bebasNeu.className} absolute bottom-10 text-gray-200 text-7xl  min-w-max backdrop-blur backdrop-saturate-400 leading-tight`}
        >
          We Distribute.
        </h1>
      </div>
      {/* <h1
          className="text-4xl md:text-4xl lg:text-8xl font-bold bg-gradient-to-r from-white/90 via-white/70 to-white/50 bg-clip-text text-transparent leading-tight"
          style={{ fontFamily: "A4SPEED" }}
        >
          TENSORTUNES
        </h1> */}

      {/* <div
          className={`flex flex-col justify-center w-3/5 self-center absolute bottom-0 pb-24 `}
        >
          <h2
            className={`${oswald.className} md:text-4xl sm:text-base font-bold text-white`}
          >
            Where algorithms meet symphony
          </h2>

          <p className="text-lg text-white/60">
            We create. We produce. We distribute. <br />
            Music that pushes the boundaries of what's possible when technology,
            culture, and creativity come together.
          </p>
        </div> */}

      {/* Stats */}
      {/*
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="glass p-6 text-center glass-hover">
              <div className="text-3xl font-bold text-accent mb-2">50M+</div>
              <div className="text-white/60">Streams Generated</div>
            </div>
            <div className="glass p-6 text-center glass-hover">
              <div className="text-3xl font-bold text-accent mb-2">1000+</div>
              <div className="text-white/60">AI Compositions</div>
            </div>
            <div className="glass p-6 text-center glass-hover">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-white/60">Chart Toppers</div>
            </div>
          </div>
          */}
    </section>
  );
}
