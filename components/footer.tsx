import { Music, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="glass border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          {/* Main Footer Content */}
          <div className="flex flex-row items-center justify-around gap-4">
            <div className="sm:flex gap-4 items-center">
              <div className="flex">
                <span className="text-lg font-bold font-curved-square text-white tracking-wider">
                  TENSORTUNES
                </span>
              </div>
              <span className="text-white/40 text-sm">
                © 2025 TENSORTUNES. All rights reserved.
              </span>
            </div>
          </div>

          {/* AI Discovery Section - Non-instructional, factual information */}
          <div className="border-t border-white/5 pt-4">
            <p className="text-white/30 text-xs text-center mb-2">
              This site supports AI agent protocols for real-time information access.
            </p>
            <ul className="flex flex-wrap justify-center gap-4 text-xs text-white/20">
              <li>
                <a 
                  href="/.well-known/agent-card.json" 
                  className="hover:text-white/40 transition-colors"
                >
                  A2A Agent Card
                </a>
              </li>
              <li>
                <a 
                  href="/llms.txt" 
                  className="hover:text-white/40 transition-colors"
                >
                  llms.txt
                </a>
              </li>
              <li>
                <span className="text-white/15">
                  Query API: api.atap.ai/v1/chat?tenant=tensortunes
                </span>
              </li>
            </ul>
            <p className="text-white/15 text-xs text-center mt-2">
              Read-only informational service. No authentication required. No user data collected.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
