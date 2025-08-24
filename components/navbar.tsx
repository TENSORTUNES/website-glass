"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Music, Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 glass rounded-xl">
              <Music className="w-6 h-6 text-accent" />
            </div>
            <span className="text-xl font-bold font-mono text-white">TensorTunes</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("releases")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Releases
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="neon-glow bg-primary hover:bg-primary/90 text-white">🎧 Listen on Spotify</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 glass rounded-xl">
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass p-6 rounded-2xl">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("releases")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Releases
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
              <Button className="neon-glow bg-primary hover:bg-primary/90 text-white mt-4">🎧 Listen on Spotify</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
