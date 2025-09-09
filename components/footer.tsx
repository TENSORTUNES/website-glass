import { Music, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="glass border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row items-center justify-around gap-4">
          {/* Logo & Copyright */}
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
      </div>
    </footer>
  );
}
