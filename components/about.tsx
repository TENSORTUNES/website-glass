import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Music, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Mission Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-10 mb-6">
                An AI-powered collective pioneering the future of music and community.
              </h2>
            </div>

            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                At TensorTunes, we believe that the intersection of artificial intelligence, human creativity, and blockchain represents the next step in music's evolution. Our advanced neural networks don't replace artistry — they amplify it, generating tracks that resonate globally across genres and cultures.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="neon-glow bg-primary hover:bg-primary/90">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-hover border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Our Process
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Card */}
          <div className="relative">
            <div className="glass p-8 md:p-12 text-center">
              {/* Background Image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
                <img
                  src="/ai-neural-network-visualization-with-music-wavefor.png"
                  alt="AI Music Visualization"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-8">
                <div className="flex justify-center gap-8 mb-8">
                  <div className="glass p-4 rounded-2xl">
                    <Cpu className="w-8 h-8 text-accent" />
                  </div>
                  <div className="glass p-4 rounded-2xl">
                    <Music className="w-8 h-8 text-primary" />
                  </div>
                  <div className="glass p-4 rounded-2xl">
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">The Numbers Behind the Movement</h3>

                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent mb-2">20%</div>
                      <div className="text-white/60 text-sm">Streaming revenue reinvested into TTT ecosystem</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent mb-2">24/7</div>
                      <div className="text-white/60 text-sm">AI-powered music creation</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent mb-2">∞</div>
                      <div className="text-white/60 text-sm">Community-driven opportunities & rewards</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent mb-2">1M+</div>
                      <div className="text-white/60 text-sm">Streams targeted in first growth phase</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
