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
import { HoveringCube } from "@/components/3d-cube-TT";
import { RaydiumBuyingGuide } from "@/components/how-to-buy";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="aurora-bg" />
      <ParticleBackground />

      <Navbar />

      <div className="space-y-32">
        <Hero />

        <About />
        <div className="relative p-8 md:my-80 bg-[linear-gradient(to_bottom,transparent_0,theme(colors.gray.950)_12rem,theme(colors.gray.950)_calc(100%-12rem),transparent_100%)]">
          <div className="hidden md:block absolute left-180 -top-100">
            <HoveringCube size="xs" />
          </div>
          <div className="hidden md:block absolute left-80 -top-20">
            <HoveringCube />
          </div>
          <div className="hidden md:block absolute right-80 top-30">
            <HoveringCube size="lg" />
          </div>
          <div>
            <div className="my-25 flex justify-around">
              <div className="min-w-100">
                <EnhancedTokenChart />
              </div>
              {/* <div className="flex justify-center text-center">
                Hier komt nog uitleg over hoe je TTT kunt kopen via Raydium
              </div> */}
            </div>

            {/* <RaydiumBuyingGuide /> */}
          </div>
        </div>

        <Releases />
        <Community />
        <Contact />
        {/* <Newsletter /> */}
      </div>

      <Footer />
    </main>
  );
}
