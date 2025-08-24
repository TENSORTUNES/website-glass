import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { Releases } from "@/components/releases";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
import BorderLine from "../public/borderLine.png";

import BorderLineUpsideDown from "../public/borderLineUpsideDown.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="aurora-bg" />
      <ParticleBackground />

      <Navbar />

      <div className="">
        <Hero />
        <div>
          <Image src={BorderLine} alt="something" />
        </div>

        <div className="flex justify-center items-center bg-black h-lvh ">
          <Highlights />
        </div>

        <div>
          <Image src={BorderLineUpsideDown} alt="something" />
        </div>
        <Releases />

        <About />

        <Contact />

        <Newsletter />
      </div>

      <Footer />
    </main>
  );
}
