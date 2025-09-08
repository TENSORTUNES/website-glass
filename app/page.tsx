import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Releases } from "@/components/releases";
import { About } from "@/components/about";
import { Community } from "@/components/community";
import { Contact } from "@/components/contact";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
import EnhancedTokenChart from "@/components/TTT-chart3";

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
        <div className="bg-gray-950 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white text-4xl font-bold text-center"></h1>
            <EnhancedTokenChart />
          </div>
        </div>

        <Contact />
        <Newsletter />
      </div>

      <Footer />
    </main>
  );
}
