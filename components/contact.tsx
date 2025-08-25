"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Music, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-10 mb-6">Get In Touch</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ready to collaborate or have questions about our AI music production? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-white mb-8">Send us a message</h3>

            {isSubmitted && (
              <div className="mb-6 p-4 glass border-accent/30 rounded-xl">
                <p className="text-accent text-center">✨ Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="glass border-white/20 text-white placeholder:text-white/40 focus:border-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="glass border-white/20 text-white placeholder:text-white/40 focus:border-accent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="glass border-white/20 text-white placeholder:text-white/40 focus:border-accent resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full neon-glow bg-primary hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <div className="glass p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="glass p-3 rounded-xl">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-white/80">Email</div>
                    <div className="text-white">hello@tensortunes.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="glass p-3 rounded-xl">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-white/80">Phone</div>
                    <div className="text-white">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="glass p-3 rounded-xl">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-white/80">Location</div>
                    <div className="text-white">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Us</h3>

              <div className="flex gap-4">
                <a
                  href="https://spotify.com/tensortunes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 rounded-xl glass-hover group"
                >
                  <Music className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://instagram.com/tensortunes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 rounded-xl glass-hover group"
                >
                  <Instagram className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <p className="text-white/60 mt-6 leading-relaxed">
                Stay updated with our latest releases, behind-the-scenes content, and AI music production insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
