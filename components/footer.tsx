import { Music, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="glass mt-20 border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 glass rounded-xl">
                <Music className="w-5 h-5 text-accent" />
              </div>
              <span className="text-lg font-bold font-mono text-white">TensorTunes</span>
            </div>
            <span className="text-white/40 text-sm">© 2024 TensorTunes. All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://spotify.com/tensortunes"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-xl glass-hover group"
              aria-label="Follow us on Spotify"
            >
              <Music className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://instagram.com/tensortunes"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-xl glass-hover group"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:hello@tensortunes.com"
              className="glass p-3 rounded-xl glass-hover group"
              aria-label="Send us an email"
            >
              <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
