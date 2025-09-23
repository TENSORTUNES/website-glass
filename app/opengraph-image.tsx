// app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { headers } from "next/headers";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  // headers() is async in your setup — await it
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = host.includes("localhost") ? "http" : "https";
  const origin = `${proto}://${host}`;

  const logoUrl = `${origin}/TTT.png`; // file in /public/TTT.png

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex", // <-- required (multiple children)
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          padding: 48,
          background: "linear-gradient(135deg,#04070A,#0B1B26)",
          color: "white",
        }}
      >
        <img
          src={logoUrl}
          width={128}
          height={128}
          style={{ borderRadius: 16 }}
        />

        {/* Column with three lines -> needs display:flex */}
        <div
          style={{
            display: "flex", // <-- required
            flexDirection: "column",
            lineHeight: 1.1,
            gap: 8,
          }}
        >
          {/* Title line has text + span -> needs display:flex */}
          <div
            style={{
              display: "flex", // <-- required
              alignItems: "baseline",
              fontSize: 72,
              fontWeight: 800,
              gap: 8,
            }}
          >
            <span>TENSORTUNES</span>
          </div>

          <div style={{ color: "#22d3ee", fontSize: 30, opacity: 0.9 }}>
            AI-Powered Record Label
          </div>
          <div style={{ fontSize: 26, opacity: 0.7 }}>www.tensortunes.com</div>
        </div>
      </div>
    ),
    size
  );
}
