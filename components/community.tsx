import { Users, Music, TrendingUp, Heart, Zap } from "lucide-react";

export function Community() {
  return (
    <section id="community" className="font-['Saira'] font-light mt-80 py-20 px-4">
      <div className="mt-5 px-10 mb-16">
        {/* Hero Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Stream the Music, Fuel the Token.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 - AI-Driven Music */}
          <div className="glass backdrop-blur backdrop-saturate-300 p-6 lg:p-8 rounded-2xl text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              AI-Driven Music
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Our advanced neural networks generate unique tracks across
              multiple genres 24/7, creating a constantly evolving catalog of
              fresh sounds. Each track is professionally produced and ready for
              streaming platforms, radio play, and commercial use.
            </p>
          </div>

          {/* Card 2 - Ecosystem Growth */}
          <div className="glass backdrop-blur backdrop-saturate-300 p-6 lg:p-8 rounded-2xl text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Ecosystem Growth
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Every stream directly powers our token ecosystem. A significant
              portion of streaming revenue flows back into the TensorTunesToken
              (TTT) through strategic buybacks, community rewards, and ecosystem
              development initiatives.
            </p>
          </div>

          {/* Card 3 - Community Powered */}
          <div className="glass backdrop-blur backdrop-saturate-300 p-6 lg:p-8 rounded-2xl text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Community Powered
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Our community is the heartbeat of TensorTunes. Fans become active
              stakeholders who help promote, share, and expand our musical
              movement across social platforms and streaming services.
            </p>
          </div>

          {/* Card 4 - Commercial Ready */}
          <div className="glass backdrop-blur backdrop-saturate-300 p-6 lg:p-8 rounded-2xl text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Commercial Ready
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Every TensorTunes track meets professional industry standards for
              streaming, radio broadcast, and commercial licensing. We actively
              pursue brand partnerships, sync licensing opportunities, and
              playlist placements.
            </p>
          </div>
        </div>

        {/* Wide Card - Token Rewards */}
        <div className="max-w-7xl mx-auto mt-12">
          <div className="glass backdrop-blur backdrop-saturate-300 p-8 lg:p-12 rounded-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/images/discord_icon.png"
                    alt="Discord"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Join Our Discord Community
                </h3>
                <p className="text-white/70 leading-relaxed text-base lg:text-lg">
                  Whether you're a music producer, token investor, content creator, or simply passionate about AI-generated music,
                  our Discord server is the heart of the TensorTunes ecosystem. Connect with like-minded individuals, get early access
                  to new releases, participate in governance decisions, receive exclusive token rewards, and be part of shaping the
                  future of music and blockchain technology. Join thousands of community members who are already building the next
                  generation of music streaming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
