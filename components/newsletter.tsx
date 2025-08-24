"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Sparkles } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubscribed(true)
    setEmail("")

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="glass p-8 md:p-12 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <span className="text-accent font-mono text-sm uppercase tracking-wider">Stay Connected</span>
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the AI Music Revolution</h2>

          <p className="text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get exclusive access to new releases, behind-the-scenes AI insights, and early previews of our latest neural
            compositions.
          </p>

          {isSubscribed && (
            <div className="mb-6 p-4 glass border-accent/30 rounded-xl max-w-md mx-auto">
              <p className="text-accent">✨ Successfully subscribed! Welcome to the future of music.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="glass border-white/20 text-white placeholder:text-white/40 focus:border-accent pl-12"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="neon-glow bg-primary hover:bg-primary/90 disabled:opacity-50 px-8"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-white/40 text-sm mt-4">No spam, just pure AI-generated beats. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
