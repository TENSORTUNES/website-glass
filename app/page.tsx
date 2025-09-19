import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Releases } from "@/components/releases";
import { About } from "@/components/about";
import { Community } from "@/components/community";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
import EnhancedTokenChart from "@/components/TTT-chart3";
import { RaydiumBuyingGuide } from "@/components/how-to-buy";
import RevenueCards from "@/components/revenue-cards";
import ChartsWithBuyingGuide from "@/components/charts-buying-guide";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="aurora-bg" />
      <ParticleBackground />

      <Navbar />

      <div className="space-y-32">
        <Hero />

        <About />

        <RevenueCards />

        <Releases />
        <Community />

        <ChartsWithBuyingGuide />

        <Contact />
      </div>

      <Footer />
    </main>
  );
}
