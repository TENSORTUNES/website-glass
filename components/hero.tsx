import { Button } from "@/components/ui/button"
import { Play, Sparkles, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="mx-auto">
          {/* Main Headline */}
          <div className="">
            <h1 className="mt-70 mb-50 text-6xl md:text-8xl lg:text-9xl font-bold font-curved-square bg-gradient-to-r from-white/90 via-white/70 to-white/50 bg-clip-text text-transparent leading-tight tracking-wider">
              TENSORTUNES
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Where algorithms meet symphony
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed mt-2">
            Pioneering the future of music through artificial intelligence and community-powered growth. We create, produce, and distribute tracks that push the boundaries of what's possible when technology, culture, and creativity come together.
          </p>


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
        </div>
      </div>
    </section>
  )
}
