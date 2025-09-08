import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Music, TrendingUp, Heart, Zap } from "lucide-react";
import { Oswald, Saira } from "next/font/google";

const oswald = Oswald({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const saira = Saira({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export function Community() {
  return (
    <section id="community" className={`${oswald.className} mt-80 py-20 px-4`}>
      <div className="container mx-auto mt-5">
        {/* Hero Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Stream the Music, Fuel the Token.
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="-skew-x-12 glass backdrop-blur backdrop-saturate-300 p-8 rounded-2xl text-center">
            <div className="skew-x-12 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h3 className="skew-x-12 text-xl font-bold text-white mb-3">
              AI-Driven Music
            </h3>
            <p className="skew-x-12 text-white/70 leading-relaxed">
              Our advanced neural networks generate unique tracks across
              multiple genres 24/7, creating a constantly evolving catalog of
              fresh sounds. Each track is professionally produced and ready for
              streaming platforms, radio play, and commercial use. The AI learns
              from global music trends while maintaining the distinctive
              TensorTunes sound that resonates with audiences worldwide.
            </p>
          </div>

          <div className="-skew-x-12 glass backdrop-blur backdrop-saturate-300 p-8 rounded-2xl text-center">
            <div className="skew-x-12 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="skew-x-12 text-xl font-bold text-white mb-3">
              Ecosystem Growth
            </h3>
            <p className="skew-x-12 text-white/70 leading-relaxed">
              Every stream directly powers our token ecosystem. A significant
              portion of streaming revenue flows back into the TensorTunesToken
              (TTT) through strategic buybacks, community rewards, and ecosystem
              development initiatives. This creates a sustainable cycle where
              musical success translates into stronger token value and more
              opportunities for our community members to benefit from the
              platform's growth.
            </p>
          </div>

          <div className="skew-x-12 glass backdrop-blur backdrop-saturate-300 p-8 rounded-2xl text-center">
            <div className="-skew-x-12 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="-skew-x-12 text-xl font-bold text-white mb-3">
              Community Powered
            </h3>
            <p className="-skew-x-12 text-white/70 leading-relaxed">
              Our community is the heartbeat of TensorTunes. Fans become active
              stakeholders who help promote, share, and expand our musical
              movement across social platforms and streaming services. Community
              members earn rewards for engagement, receive exclusive access to
              new releases, and participate in governance decisions that shape
              the future direction of both our music and token ecosystem.
            </p>
          </div>

          <div className="skew-x-12 glass backdrop-blur backdrop-saturate-300 p-8 rounded-2xl text-center">
            <div className="-skew-x-12 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="-skew-x-12 text-xl font-bold text-white mb-3">
              Commercial Ready
            </h3>
            <p className="-skew-x-12 text-white/70 leading-relaxed">
              Every TensorTunes track meets professional industry standards for
              streaming, radio broadcast, and commercial licensing. We actively
              pursue brand partnerships, sync licensing opportunities, and
              playlist placements that generate significant revenue streams. All
              commercial success feeds directly back into the TTT ecosystem
              through buybacks and community rewards, ensuring our growth
              benefits every stakeholder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
