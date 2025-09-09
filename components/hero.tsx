import { Button } from "@/components/ui/button";
import { Play, Sparkles, ChevronDown } from "lucide-react";
import { Oswald, Saira, Barriecito, Audiowide } from "next/font/google";

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

const barriecito = Barriecito({
  weight: ["400"],
  subsets: ["latin"],
});

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex px-4">
      <div className="relative">
        <h1 className="md:absolute bottom-0 sm:ml-10 lg:ml-20 md:mb-20 flex">
          <div
            className={`${barriecito.className} absolute xs:left-0 sm:bottom-0 md:absolute md:bottom-20 lg:bottom-30 md:text-5xl lg:text-7xl min-w-max`}
          >
            We create.
          </div>
          {/* <div
            className={`${barriecito.className} md:absolute lg:left-76 md:bottom-23 lg:bottom-31 md:text-lg lg:text-3xl min-w-max rotate-x-50 rotate-z-45`}
          >
            art
          </div> */}
          <div
            className={`${barriecito.className} absolute xs:left-0 bottom-10 sm:bottom-0 lg:text-9xl md:text-7xl text-6xl min-w-max`}
          >
            We produce.
          </div>
          {/* <div
            className={`${barriecito.className} md:absolute lg:left-150 md:bottom-23 lg:bottom-20 md:text-lg lg:text-3xl min-w-max rotate-x-20 rotate-z-30`}
          >
            music
          </div> */}
          <div
            className={`${barriecito.className} absolute xs:left-0 sm:bottom- md:absolute left-50 bottom-10 md:left-92 md:bottom-1 lg:left-163 md:text-5xl min-w-max`}
          >
            We Distribute.
          </div>
        </h1>
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
      </div>

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
