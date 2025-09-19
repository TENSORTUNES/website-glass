export default function RevenueCards() {
  return (
    <section id="revenue" className="mb-20 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`lg:relative lg:absolute grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16 items-stretch`}
        >
          {/* Left Column - Mission Text */}
          <div className="lg:origin-top-left lg:-left-5 lg:-rotate-8 lg:absolute lg:w-1/2">
            <div className="glass backdrop-blur backdrop-saturate-300 p-10 xl:p-8 text-center min-h-[400px] xl:min-h-[450px] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Where AI Meets Artistry
                </h3>

                <p className="text-white/70 text-sm leading-relaxed text-left">
                  At TensorTunes, we believe that the intersection of artificial
                  intelligence, human creativity, and blockchain represents the
                  next step in music's evolution. Our advanced neural networks
                  don't replace artistry — they amplify it, generating tracks
                  that resonate globally across genres and cultures. Every
                  composition is a testament to the harmony between human
                  emotion and machine precision.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 mt-8">
                  Economic Innovation
                </h3>
                <p className="text-white/70 text-sm leading-relaxed text-left">
                  Beyond music creation, we're pioneering a new economic model
                  where streaming revenue directly fuels token value through
                  strategic buybacks and community rewards. This creates a
                  sustainable ecosystem where artistic innovation drives
                  financial growth, benefiting creators, listeners, and token
                  holders alike. Our transparent approach ensures every
                  stakeholder participates in the value we create together.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Card */}
          <div className="lg:origin-bottom-left lg:rotate-8 lg:absolute right-10 lg:w-1/2">
            <div className="glass backdrop-blur backdrop-saturate-300 p-6 xl:p-8 text-center min-h-[400px] xl:min-h-[450px] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  United by Sound, Driven by Vision
                </h3>

                <p className="text-white/70 text-sm leading-relaxed text-left mb-6">
                  Our ecosystem thrives on transparency, innovation, and
                  community participation. Every metric represents our
                  commitment to revolutionizing how music creates value for
                  artists and fans alike.
                </p>

                <div className="grid grid-cols-2 gap-4 xl:gap-6 text-center mb-6">
                  <div>
                    <div className="text-2xl font-bold text-white mb-2 stat-glow">
                      50%
                    </div>
                    <div className="text-white/60 text-xs">
                      Revenue reinvested back into TensorTunesToken(TTT)
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-2 stat-glow">
                      24/7
                    </div>
                    <div className="text-white/60 text-xs">
                      AI-powered music creation using custom build models
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-2 stat-glow">
                      ∞
                    </div>
                    <div className="text-white/60 text-xs">
                      Community-driven opportunities & rewards
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-2 stat-glow">
                      1M+
                    </div>
                    <div className="text-white/60 text-xs">
                      Streams targeted in first growth phase
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-white/70 text-sm leading-relaxed text-left">
                  Through strategic reinvestment and cutting-edge AI technology,
                  we're building a sustainable music ecosystem where every
                  stream contributes to long-term value creation for our entire
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
