import Image from "next/image";
import { RaydiumBuyingGuide } from "./how-to-buy";
import EnhancedTokenChart from "./TTT-chart3";
import TT_TOKEN from "../public/assets/TTT/TTT.png";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import FloatingCoin from "./floating-TT-coin";
import { SUSE, Saira } from "next/font/google";

const susu = SUSE({
  weight: "800",
  subsets: ["latin"],
});

const saira = Saira({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ChartsWithBuyingGuide() {
  return (
    <div id="tt-token" className="flex justify-center p-4 md:my-80">
      <div className="my-25 flex justify-around container ">
        <div className="flex flex-col-reverse xl:flex-row min-w-full space-x-10 space-y-10">
          <div className="w-full xl:w-1/2 glass max-h-min backdrop-blur backdrop-saturate-300">
            <EnhancedTokenChart />
          </div>
          <div className="w-full xl:w-1/2 max-h-min text-center">
            <div
              className={`${saira.className} max-w-full flex justify-center`}
            >
              <div className="flex flex-col justify-center px-10 glass backdrop-blur backdrop-saturate-300 p-4 max-w-max">
                <div className="text-2xl md:text-3xl ">
                  Tap the TT token below to start trading
                </div>
                <div className="text-white/60">
                  You’ll be redirected to Raydium.
                </div>
              </div>
            </div>
            <div>
              <FloatingCoin
                href="https://raydium.io/your-launchlab-url"
                className="h-[55vh] lg:h-[55vh] w-full" // ← bigger field: half the screen wide, tall
                coinScale={1.4} // ← big coin
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
