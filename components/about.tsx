"use client";

import {
  Cpu,
  Music,
  Sparkles,
  Brain,
  Headphones,
  Zap,
  Globe,
  Users,
  Mic,
} from "lucide-react";
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

//checken 2

export function About() {
  return (
    <section id="about" className="mt-80 py-20 px-4">
      <style jsx>{`
        @keyframes iconPulse {
          0%,
          70%,
          100% {
            transform: scale(1);
          }
          35% {
            transform: scale(1.2);
          }
        }

        @keyframes statGlow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
            transform: scale(1);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.4);
            transform: scale(1.05);
          }
        }

        .icon-animate {
          animation: iconPulse 3s ease-in-out infinite;
        }

        .stat-glow {
          animation: statGlow 2s ease-in-out infinite;
        }

        .icon-animate:nth-child(1) {
          animation-delay: 0s;
        }
        .icon-animate:nth-child(2) {
          animation-delay: 0.2s;
        }
        .icon-animate:nth-child(3) {
          animation-delay: 0.4s;
        }
        .icon-animate:nth-child(4) {
          animation-delay: 0.6s;
        }
        .icon-animate:nth-child(5) {
          animation-delay: 0.8s;
        }
        .icon-animate:nth-child(6) {
          animation-delay: 1s;
        }
        .icon-animate:nth-child(7) {
          animation-delay: 1.2s;
        }
        .icon-animate:nth-child(8) {
          animation-delay: 1.4s;
        }
        .icon-animate:nth-child(9) {
          animation-delay: 1.6s;
        }
      `}</style>
      <div className="container mx-auto mt-16 max-w-7xl">
        <div className="h-screen">
          {/* Main Heading */}
          <div className={`${saira.className} text-center mb-16`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white lg:mb-8">
              An AI-powered collective pioneering the future of music and
              community.
            </h2>
          </div>

          {/* Icons Section - Full Width */}
          <div className="md:flex hidden md:mb-14 lg:mb-30 flex items-center justify-center">
            <div className="flex items-center justify-around w-full max-w-none">
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Music className="w-7 h-7 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Headphones className="w-7 h-7 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="glass p-3 rounded-2xl flex items-center justify-center icon-animate">
                <Mic className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative hidden xl:block">
          <div className="relative lg:origin-top-right lg:rotate-70 lg:-skew-40 lg:absolute lg:left-60 lg:-top-40 lg:w-10 lg:h-10">
            <div className="glass backdrop-blur backdrop-saturate-400 text-center  min-h-[20px] " />
          </div>

          <div className="lg:origin-top-right lg:rotate-180 lg:-skew-15 lg:absolute lg:right-100 lg:-top-70 lg:w-20 lg:h-15">
            <div className="glass backdrop-blur backdrop-saturate-400 p-6 xl:p-8 text-center  min-h-[100px] " />
          </div>

          <div className="lg:origin-top-left lg:-rotate-30 lg:-skew-40 lg:absolute lg:-left-100 lg:-top-100 lg:w-32 lg:h-24">
            <div className="glass backdrop-blur backdrop-saturate-400 p-6 xl:p-8 text-center  min-h-[200px]" />
          </div>

          <div className="lg:origin-top-right lg:rotate-90 lg:-skew-60 lg:absolute lg:-right-70 lg:-top-100 lg:w-32 lg:h-24">
            <div className="glass backdrop-blur backdrop-saturate-400 p-6 xl:p-8 text-center  min-h-[200px]" />
          </div>
        </div> */}

        <div className="relative hidden lg:block pointer-events-none">
          {/* left mid floating square */}
          <div className="absolute left-30 -top-150 w-16 h-12 lg:rotate-60 lg:-skew-60">
            <div className="glass backdrop-blur backdrop-saturate-400 w-full h-full rounded-lg" />
          </div>

          {/* right mid floating square */}
          <div className="absolute right-15 -top-20 w-20 h-16 lg:rotate-80 lg:-skew-50">
            <div className="glass backdrop-blur backdrop-saturate-400 w-full h-full rounded-lg" />
          </div>

          {/* Left bottom floating square */}
          <div className="hidden xl:block absolute -left-0 top-120 w-24 h-20 lg:rotate-80 lg:-skew-20">
            <div className="glass backdrop-blur backdrop-saturate-400 w-full h-full rounded-lg" />
          </div>

          {/* Right bottom floating square */}
          <div className="absolute -right-15 top-150 w-28 h-24 lg:-rotate-20 lg:-skew-24">
            <div className="glass backdrop-blur backdrop-saturate-400 w-full h-full rounded-lg" />
          </div>

          {/* left top floating squares */}
          <div className="absolute -left-12 bottom-20 w-20 h-16 lg:rotate-75 lg:skew-12">
            <div className="glass backdrop-blur backdrop-saturate-400 w-full h-full rounded-lg" />
          </div>

          {/* right top floating squares */}
          <div className="absolute right-40 bottom-100 w-24 h-18 lg:-rotate-45 lg:skew-6">
            <div className="glass backdrop-blur backdrop-saturate-400 w-full h-full rounded-lg" />
          </div>
        </div>

        <div
          className={`lg:relative lg:absolute grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16 items-stretch h-screen`}
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

          {/* <div className="hidden xl:block">
            <div className="lg:origin-top-right lg:rotate-70 lg:-skew-15 lg:absolute lg:left-60 lg:-top-40 lg:w-10 lg:h-10">
              <div className="glass backdrop-blur backdrop-saturate-300 text-center  min-h-[20px] " />
            </div>

            <div className="lg:origin-top-right lg:rotate-180 lg:-skew-15 lg:absolute lg:right-100 lg:-top-70 lg:w-20 lg:h-15">
              <div className="glass backdrop-blur backdrop-saturate-300 p-6 xl:p-8 text-center  min-h-[100px] " />
            </div>

            <div className="lg:origin-top-left lg:-rotate-30 lg:-skew-40 lg:absolute lg:-left-100 lg:-top-100 lg:w-32 lg:h-24">
              <div className="glass backdrop-blur backdrop-saturate-300 p-6 xl:p-8 text-center  min-h-[200px]" />
            </div>

            <div className="lg:origin-top-right lg:rotate-90 lg:-skew-60 lg:absolute lg:-right-100 lg:-top-100 lg:w-32 lg:h-24">
              <div className="glass backdrop-blur backdrop-saturate-300 p-6 xl:p-8 text-center  min-h-[200px]" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
