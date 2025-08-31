import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Releases } from "@/components/releases"
import { About } from "@/components/about"
import { Community } from "@/components/community"
import { Contact } from "@/components/contact"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="aurora-bg" />
      <ParticleBackground />

      <Navbar />

      <div className="space-y-32">
        <Hero />
        <About />
        <Releases />
        <Community />
        <Contact />
        <Newsletter />
      </div>

      <Footer />
    </main>
  )
}
