import { Brain, Globe, Users, Zap } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI-Driven Production",
    description: "Advanced neural networks compose and produce tracks that resonate with global audiences.",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description: "Instant worldwide release across all major streaming platforms and digital stores.",
  },
  {
    icon: Users,
    title: "Creative Community",
    description: "Collaborative ecosystem where human creativity meets artificial intelligence.",
  },
  {
    icon: Zap,
    title: "Commercial Ready",
    description: "Professional-grade masters ready for radio, streaming, and commercial licensing.",
  },
]

export function Highlights() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Future of Music Production</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Combining cutting-edge AI technology with human creativity to produce the next generation of musical
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div key={index} className="glass p-6 md:p-8 text-center glass-hover group">
                <div className="inline-flex items-center justify-center w-16 h-16 glass rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{highlight.title}</h3>
                <p className="text-white/60 leading-relaxed">{highlight.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
