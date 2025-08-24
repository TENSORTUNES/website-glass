import { Button } from "@/components/ui/button"
import { Play, Calendar, Tag } from "lucide-react"

const featuredRelease = {
  id: 1,
  title: "Featured Track",
  artist: "TensorTunes",
  releaseDate: "2024",
  genre: ["AI Music"],
  cover: "/placeholder.svg",
  spotifyId: "1gtoJ8uEsPWAIXO9ocHsSJ",
}

export function Releases() {
  return (
    <section id="releases" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Releases</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover our latest AI-generated compositions that are reshaping the music industry one algorithm at a time.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="">
            {/* Spotify Embed */}
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


          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="glass-hover border-white/20 text-white hover:bg-white/10 bg-transparent"
          >
            View All Releases
          </Button>
        </div>
      </div>
    </section>
  )
}
