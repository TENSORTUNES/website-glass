import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Releases } from "@/components/releases";
import { About } from "@/components/about";
import { Community } from "@/components/community";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
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

        <div id="about" />
        <About />
        <RevenueCards />
        {/* <RevenuePostIt /> */}
        <Releases />
        <Community />
        <div id="tt-token" />
        <div className="h-[1px]" />
        <ChartsWithBuyingGuide />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
