import { Button } from "@/components/ui/button";
import { Play, Calendar, Tag, ArrowRight } from "lucide-react";
import {
  Oswald,
  Saira,
  Barriecito,
  Audiowide,
  Bebas_Neue,
} from "next/font/google";
import { SpotifyBall } from "./3d-spotify-ball";

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

const audiowide = Audiowide({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const barriecito = Barriecito({
  weight: ["400"],
  subsets: ["latin"],
});

const featuredRelease = {
  id: 1,
  title: "Featured Track",
  artist: "TensorTunes",
  releaseDate: "2024",
  genre: ["AI Music"],
  cover: "/placeholder.svg",
  spotifyId: "1gtoJ8uEsPWAIXO9ocHsSJ",
};

const bebasNeu = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export function Releases() {
  return (
    <section id="releases" className="mt-40 pb-32 py-20 px-4">
      <div
        className="container mx-auto mt-20
      "
      >
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2
            className={`${bebasNeu.className} text-6xl md:text-5xl font-bold text-white mb-8`}
          >
            Latest Releases
          </h2>
        </div>

        {/* <SpotifyBall /> */}

        {/* Combined Content Container */}
        <div className="glass backdrop-blur backdrop-saturate-300 p-8 mb-16 max-w-4xl mx-auto">
          {/* Spotify Widget */}
          <div className="mb-8">
            <iframe
              src={`https://open.spotify.com/embed/track/${featuredRelease.spotifyId}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            />
          </div>

          {/* View All Releases Button */}
          <div className="text-center mb-8">
            <Button
              size="lg"
              variant="outline"
              className="glass-hover border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              View All Releases
            </Button>
          </div>

          {/* Bottom Description */}
          <div className="border-t border-white/20 pt-6 text-center">
            {/* <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover our latest AI-generated compositions that are reshaping
              the music industry one algorithm at a time.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
