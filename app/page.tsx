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
import SwapExplanation from "@/components/swap-explanation";

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

        <div className="relative p-4 md:my-80 bg-[linear-gradient(to_bottom,transparent_0,theme(colors.gray.450)_12rem,theme(colors.gray.950)_calc(100%-12rem),transparent_100%)]">
          {/* <div className="hidden lg:block absolute left-180 -top-100">
            <HoveringCube size="xs" />
          </div>
          <div className="hidden lg:block absolute left-80 -top-20">
            <HoveringCube />
          </div>
          <div className="hidden lg:block absolute right-30 top-10">
            <HoveringCube size="lg" />
          </div> */}

          <div>
            <div className="my-25 flex justify-around">
              <div className="flex flex-col xl:flex-row min-w-full space-x-10">
                <div className="w-full xl:w-1/2 glass">
                  <EnhancedTokenChart />
                </div>

                <div className="flex justify-center text-center w-full xl:w-1/2 glass">
                  <div className="flex text-center">
                    <SwapExplanation />
                  </div>
                </div>
              </div>
            </div>
            <RaydiumBuyingGuide />
          </div>
        </div>

        <Contact />
      </div>

      <Footer />
    </main>
  );
}
