import type React from "react";
import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";
import { DynamicBackground } from "@/components/dynamic-background";
import ScrollComponent from "@/components/scroll-to-bottom";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "TENSORTUNES - AI-Powered Record Label",
  description:
    "Where algorithms meet symphony. AI-powered record label pioneering the future of sound.",
  keywords:
    "AI music, record label, artificial intelligence, music production, electronic music",
  authors: [{ name: "TENSORTUNES" }],
  creator: "TENSORTUNES",
  publisher: "TENSORTUNES",
  openGraph: {
    title: "TENSORTUNES - AI-Powered Record Label",
    description:
      "Where algorithms meet symphony. AI-powered record label pioneering the future of sound.",
    url: "https://tensortunes.com",
    siteName: "TENSORTUNES",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TENSORTUNES - AI-Powered Record Label",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TENSORTUNES - AI-Powered Record Label",
    description:
      "Where algorithms meet symphony. AI-powered record label pioneering the future of sound.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} dark`}>
      <body className="antialiased">
        {/* Dynamic Video Background */}
        <DynamicBackground />
        <ScrollComponent />

        {/* Content with higher z-index */}
        <div className="z-999">
          {children}
          <CustomCursor />
        </div>
      </body>
    </html>
  );
}
