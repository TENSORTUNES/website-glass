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
    <section id="community" className={`${oswald.className} py-20 px-4`}>
      <div className="container mx-auto">
        <div className="glass text-center mb-16 p-10">
          <h2 className="text-left text-3xl md:text-4xl font-bold text-white mb-4">
            Stream the Music, Fuel the Token.
          </h2>
          <p className="text-left text-xl text-white /70 max-w-3xl leading-relaxed">
            At TensorTunes, every stream matters. The music we create with AI
            doesn't just entertain, it powers our entire ecosystem. A portion of
            streaming revenue is reinvested into the TensorTunesToken (TTT)
            through community initiatives, buybacks, and sustainability
            measures. This means that as our music reaches more listeners, the
            TTT ecosystem becomes stronger, creating new opportunities, rewards,
            and experiences for our community. With TensorTunes, fans are more
            than listeners — they are active contributors to the future of
            music.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              AI-Driven Music
            </h3>
            <p className="text-white/60 leading-relaxed">
              Our AI creates unique tracks across genres, fueling the
              TensorTunes movement with fresh sounds for a global audience.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Ecosystem Growth
            </h3>
            <p className="text-white/60 leading-relaxed">
              Every stream contributes to strengthening the TensorTunesToken
              (TTT) through reinvestment and community initiatives.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Community Powered
            </h3>
            <p className="text-white/60 leading-relaxed">
              Fans are more than listeners — they're active contributors,
              helping promote, share, and expand the movement.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Commercial Ready
            </h3>
            <p className="text-white/60 leading-relaxed">
              All tracks are professional-grade, ready for streaming, radio, and
              brand partnerships that drive value back into the ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
