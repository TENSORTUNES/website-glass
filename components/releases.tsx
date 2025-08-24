import { Button } from "@/components/ui/button"
import { Play, Calendar, Tag } from "lucide-react"

const releases = [
  {
    id: 1,
    title: "Neural Symphony No. 1",
    artist: "AI Collective",
    releaseDate: "2024-01-15",
    genre: ["Electronic", "Ambient"],
    cover: "/futuristic-electronic-music-album-cover-with-neura.png",
    spotifyId: "4iV5W9uYEdDUQVPaHdpeO0",
  },
  {
    id: 2,
    title: "Digital Dreams",
    artist: "TensorBeats",
    releaseDate: "2024-02-20",
    genre: ["Synthwave", "Cyberpunk"],
    cover: "/cyberpunk-synthwave-album-cover-with-neon-colors.png",
    spotifyId: "4iV5W9uYEdDUQVPaHdpeO0",
  },
  {
    id: 3,
    title: "Quantum Frequencies",
    artist: "Algorithm",
    releaseDate: "2024-03-10",
    genre: ["Techno", "Experimental"],
    cover: "/quantum-physics-inspired-techno-album-cover.png",
    spotifyId: "4iV5W9uYEdDUQVPaHdpeO0",
  },
  {
    id: 4,
    title: "Binary Emotions",
    artist: "Neural Network",
    releaseDate: "2024-04-05",
    genre: ["Downtempo", "Chillout"],
    cover: "/emotional-ai-music-album-cover-with-binary-code-ae.png",
    spotifyId: "4iV5W9uYEdDUQVPaHdpeO0",
  },
  {
    id: 5,
    title: "Machine Learning Blues",
    artist: "Deep Learning Duo",
    releaseDate: "2024-05-12",
    genre: ["Blues", "AI-Jazz"],
    cover: "/ai-blues-jazz-album-cover-with-machine-learning-vi.png",
    spotifyId: "4iV5W9uYEdDUQVPaHdpeO0",
  },
  {
    id: 6,
    title: "Synthetic Serenity",
    artist: "Artificial Harmony",
    releaseDate: "2024-06-18",
    genre: ["New Age", "Meditation"],
    cover: "/serene-ai-meditation-music-album-cover-with-synthe.png",
    spotifyId: "4iV5W9uYEdDUQVPaHdpeO0",
  },
]

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release) => (
            <div
              key={release.id}
              className="glass p-6 glass-hover group"
              itemScope
              itemType="https://schema.org/MusicAlbum"
            >
              {/* Album Cover */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={release.cover || "/placeholder.svg"}
                  alt={`${release.title} album cover`}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="lg" className="neon-glow bg-primary hover:bg-primary/90">
                    <Play className="w-5 h-5 mr-2" />
                    Play
                  </Button>
                </div>
              </div>

              {/* Release Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1" itemProp="name">
                    {release.title}
                  </h3>
                  <p className="text-white/60" itemProp="byArtist">
                    {release.artist}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-white/50">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span itemProp="datePublished">{release.releaseDate}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {release.genre.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 glass rounded-full text-xs text-accent"
                      itemProp="genre"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Spotify Embed */}
                <div className="pt-4">
                  <iframe
                    src={`https://open.spotify.com/embed/track/${release.spotifyId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}
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
