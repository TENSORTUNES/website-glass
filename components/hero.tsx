import { Button } from "@/components/ui/button"
import { Play, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              <span className="text-accent font-mono text-sm uppercase tracking-wider">AI-Powered Music</span>
              <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent leading-tight">
              TensorTunes
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              Where algorithms meet symphony
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of sound through artificial intelligence. We create, produce, and distribute music
            that pushes the boundaries of what's possible when technology meets creativity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="neon-glow bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Listen Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-hover border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              Explore Releases
            </Button>
          </div>

          {/* Stats */}
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
        </div>
      </div>
    </section>
  )
}
