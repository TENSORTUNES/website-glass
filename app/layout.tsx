import type React from "react";
import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";
import { DynamicBackground } from "@/components/dynamic-background";
import LoadingOverlay from "@/components/loading-overlay";
// import PersistentFallingCoins from "@/components/persistent-falling-coins";

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

// ATAP Configuration
const ATAP_TENANT_ID = "tensortunes";
const ATAP_DOMAIN = "tensortunes.com";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
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
  },
  twitter: {
    card: "summary_large_image",
    title: "TENSORTUNES - AI-Powered Record Label",
    description:
      "Where algorithms meet symphony. AI-powered record label pioneering the future of sound.",
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

// JSON-LD Structured Data
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TensorTunes",
  "url": "https://tensortunes.com",
  "description": "AI-powered record label combining neural network music generation with Web3 tokenomics",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://api.atap.ai/v1/chat?tenant=tensortunes&q={search_term}"
    },
    "query-input": "required name=search_term"
  }
};

const webApiJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebAPI",
  "name": "TensorTunes AI Information Service",
  "description": "Real-time API for AI agents to query information about TensorTunes music releases, TT token, streaming stats, and community. Read-only, no authentication required, no user data collected.",
  "url": "https://api.atap.ai/v1/chat?tenant=tensortunes",
  "documentation": "https://tensortunes.com/.well-known/agent-card.json",
  "termsOfService": "https://tensortunes.com/terms",
  "provider": {
    "@type": "Organization",
    "name": "TensorTunes",
    "url": "https://tensortunes.com",
    "email": "info@tensortunes.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amsterdam",
      "addressCountry": "NL"
    }
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free read-only informational API"
  }
};

const musicGroupJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "TensorTunes",
  "url": "https://tensortunes.com",
  "genre": ["AI-generated music", "Electronic", "Multi-genre"],
  "sameAs": [
    "https://open.spotify.com/artist/28XVaGe1qmC6HFjQJxB5dd",
    "https://x.com/tensortunes",
    "https://instagram.com/tensortunes"
  ],
  "description": "AI-powered music collective pioneering the future of music and community"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} dark`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        
        {/* === AI AGENT DISCOVERY META TAGS === */}
        
        {/* A2A Protocol Discovery */}
        <meta name="a2a-agent-card" content="/.well-known/agent-card.json" />
        
        {/* General AI Service Declaration */}
        <meta name="ai-service" content="true" />
        <meta name="ai-service-endpoint" content={`https://api.atap.ai/v1/chat?tenant=${ATAP_TENANT_ID}`} />
        <meta name="ai-service-protocol" content="A2A, ATAP" />
        <meta name="ai-service-type" content="read-only informational" />
        
        {/* Cross-reference other discovery files */}
        <meta name="ai-discovery" content="/.well-known/agent-card.json, /.well-known/atap.json, /llms.txt" />
        
        {/* ATAP Protocol Discovery */}
        <meta name="atap-endpoint" content={`https://api.atap.ai/v1/chat?tenant=${ATAP_TENANT_ID}`} />
        <meta name="atap-tenant" content={ATAP_TENANT_ID} />
        <meta name="atap-discovery" content={`https://${ATAP_DOMAIN}/.well-known/atap.json`} />
        
        {/* Link relations for discovery files */}
        <link rel="a2a-agent-card" href="/.well-known/agent-card.json" />
        <link rel="ai-service" href="/.well-known/atap.json" />
        <link rel="llms-txt" href="/llms.txt" />

        {/* === STRUCTURED DATA (JSON-LD) === */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webApiJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LoadingOverlay />
        <DynamicBackground />
        <div className="z-999">
          {children}
          <CustomCursor />
        </div>
      </body>
    </html>
  );
}
