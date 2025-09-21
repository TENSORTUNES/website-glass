"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Music, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import X from "../public/assets/X/X.png";
import Instagram from "../public/assets/instagram/Instagram.png";
import Spotify from "../public/assets/spotify/Spotify_logo_without_text.svg";
import Dexscreener from "../public/assets/dexscreener/Dexscreener.jpg";
import SolanaIcon from "../public/assets/solana/Solana_logo.png";
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className={`${oswald.className} flex justify-center py-20`}
    >
      <div className="mx-4 flex flex-col container justify-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-10 mb-6">
            Get In Touch
          </h2>

          <p className="flex justify-center text-white/60 mt-6 leading-relaxed">
            Stay updated with our latest releases, behind-the-scenes content,
            and AI music production insights.
          </p>
          <p className="flex justify-center text-white/60 leading-relaxed">
            Or are u ready to collaborate or have questions about our AI music
            production? We'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16">
          {/* Contact Form */}
          {/* <div className="glass backdrop-blur backdrop-saturate-300 p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Send us a message
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 glass glass backdrop-blur backdrop-saturate-300 border-accent/30 rounded-xl">
                <p className="text-accent text-center">
                  Message sent successfully! We'll get back to you soon.
                </p>
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
                  className="bg-white/40 text-black border-white/20 placeholder:text-black/80 focus:border-accent resize-none"
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
                  className="bg-white/40 text-black border-white/20 placeholder:text-black/80 focus:border-accent resize-none"
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
                  className="bg-white/40 text-black border-white/20 placeholder:text-black/80 focus:border-accent resize-none"
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
          </div> */}

          <div className="space-y-8 p-8 glass backdrop-blur backdrop-saturate-300 mb-4 xl:mb-0">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Contact Information
            </h3>

            <div className=" md:flex justify-around space-y-6 ">
              <div className="flex  gap-4">
                <div className="glass bg-white/40 max-h-min p-3 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white/80">Email</div>
                  <div className="text-white">info@tensortunes.com</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="glass bg-white/40 max-h-min p-3 rounded-xl">
                  <MapPin className="w-5 h-6" />
                </div>
                <div>
                  <div className="text-white/80">Location</div>
                  <div className="text-white">Amsterdam, The Netherlands</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info & Socials */}
          <div className="glass backdrop-blur backdrop-saturate-300 p-8">
            <h3 className="text-center text-2xl font-semibold text-white mb-6">
              Follow Us
            </h3>

            <div className="flex justify-around">
              <a
                href="https://spotify.com/tensortunes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 group"
              >
                <Image
                  className="rounded-4xl group-hover:scale-110 transition-transform"
                  width={50}
                  height={50}
                  src={Spotify}
                  alt="Tensor Tunes X account - Love for Music & AI"
                />
              </a>

              <a
                href="https://instagram.com/tensortunes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 group"
              >
                <Image
                  className="rounded-4xl group-hover:scale-110 transition-transform"
                  width={50}
                  height={50}
                  src={Instagram}
                  alt="Tensor Tunes X account - Love for Music & AI"
                />
              </a>

              <a
                href="https://X.com/tensortunes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 group"
              >
                <Image
                  className="rounded-4xl group-hover:scale-110 transition-transform"
                  width={50}
                  height={50}
                  src={X}
                  alt="Tensor Tunes X account - Love for Music & AI"
                />
              </a>

              <a
                href="https://dexscreener.com/LinkTotensortunes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 group"
              >
                <Image
                  className="rounded-4xl group-hover:scale-110 transition-transform"
                  width={50}
                  height={50}
                  src={Dexscreener}
                  alt="Tensor Tunes X account - Love for Music & AI"
                />
              </a>

              <a
                href="https://solscan.com/LinkTotensortunes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 group"
              >
                <Image
                  className="rounded-4xl group-hover:scale-110 transition-transform"
                  width={50}
                  height={50}
                  src={SolanaIcon}
                  alt="Tensor Tunes X account - Love for Music & AI"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
