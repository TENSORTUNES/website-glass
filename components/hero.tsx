import { Button } from "@/components/ui/button"
import { Play, Sparkles, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex justify-center px-4">

      <div className="flex flex-col justify-center text-center content-center align-center">

        <h1 className="text-4xl md:text-4xl lg:text-8xl font-bold bg-gradient-to-r from-white/90 via-white/70 to-white/50 bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'A4SPEED, sans-serif' }}>
          TENSORTUNES
        </h1>

        <div className="flex flex-col justify-center w-3/5 self-center absolute bottom-0 pb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Where algorithms meet symphony
          </h2>

          <p className="text-lg text-white/60">
            Pioneering the future of music through artificial intelligence and community-powered growth. We create, produce, and distribute tracks that push the boundaries of what's possible when technology, culture, and creativity come together.
          </p>
        </div>

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
  )
}
