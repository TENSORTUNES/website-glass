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
    <div className="relative p-4 md:my-80 bg-[linear-gradient(to_bottom,transparent_0,theme(colors.gray.450)_12rem,theme(colors.gray.950)_calc(100%-12rem),transparent_100%)]">
      <div className="flex justify-center">
        <div className="my-25 flex justify-around container ">
          <div className="flex flex-col-reverse xl:flex-row min-w-full space-x-10 space-y-10">
            <div className="w-full xl:w-1/2 glass max-h-min backdrop-blur backdrop-saturate-300">
              <EnhancedTokenChart />
            </div>

            {/* <div className="flex justify-center text-center w-full xl:w-1/2 glass backdrop-blur backdrop-saturate-300">
                  <div className="flex text-center">
                  <SwapExplanation />
                  </div>
                  </div> */}

            {/* <div className="flex justify-center text-center w-full xl:w-1/2 glass backdrop-blur backdrop-saturate-300">
              <div className="flex text-center">
                <RaydiumBuyingGuide />
              </div>
            </div> */}
            <div className="place-content-center min-w-100 justify-center mx-auto flex-col-reverse text-center">
              <div
                className={`${saira.className} glass p-8 backdrop-blur backdrop-saturate-300`}
              >
                <div className="flex flex-col justify-center">
                  <div className="text-3xl ">
                    Tap the TT token below to start trading
                  </div>
                  <div className="text-white/60">
                    U will be redirected to Raydium.io
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
    </div>
  );
}
