import { Brain, Globe, Users, Zap } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI-Driven Music",
    description: "Our AI creates unique tracks across genres, fueling the TensorTunes movement with fresh sounds for a global audience.",
  },
  {
    icon: Globe,
    title: "Ecosystem Growth",
    description: "Every stream contributes to strengthening the TensorTunesToken (TTT) through reinvestment and community initiatives.",
  },
  {
    icon: Users,
    title: "Community Powered",
    description: "Fans are more than listeners — they're active contributors, helping promote, share, and expand the movement.",
  },
  {
    icon: Zap,
    title: "Commercial Ready",
    description: "All tracks are professional-grade, ready for streaming, radio, and brand partnerships that drive value back into the ecosystem.",
  },
]

export function Highlights() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stream the Music, Fuel the Token.</h2>
          <p className="text-white/60 max-w-3xl mx-auto leading-relaxed">
            At TensorTunes, every stream matters. The music we create with AI doesn't just entertain — it powers our entire ecosystem. A portion of streaming revenue is reinvested into the TensorTunesToken (TTT) through community initiatives, buybacks, and sustainability measures. This means that as our music reaches more listeners, the TTT ecosystem becomes stronger, creating new opportunities, rewards, and experiences for our community. With TensorTunes, fans are more than listeners — they are active contributors to the future of music.
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
