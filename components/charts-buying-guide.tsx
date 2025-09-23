import EnhancedTokenChart from "./TTT-chart3";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import FloatingCoin from "./floating-TT-coin";
import { SUSE, Saira, Oswald } from "next/font/google";
import TapToken from "./tap-token";
import CountdownTimer from "./CountdownTimer";
import { getCountdown, parseTargetDate } from "@/utils/Launch";

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

const oswald = Oswald({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ChartsWithBuyingGuide() {
  const TARGET = "10-10-2025";

  const { launched: isLive, msRemaining } = getCountdown(TARGET);

  return (
    <div className="flex flex-col justify-center p-4 md:my-40 text-center container mx-auto">
      <div>
        <h1 className={`${oswald.className} text-7xl`}>TensorTunes Token</h1>
      </div>

      {isLive ? (
        <div className="my-25 flex justify-around container ">
          <div className="flex flex-col-reverse xl:flex-row min-w-full space-x-10 space-y-10">
            <div className="w-full xl:w-1/2 glass max-h-min backdrop-blur backdrop-saturate-300">
              <EnhancedTokenChart />
            </div>

            <TapToken />
          </div>
        </div>
      ) : (
        <div className="container mt-20">
          <CountdownTimer target={parseTargetDate(TARGET)} />
          <div>
            <FloatingCoin
              className="h-[55vh] lg:h-[55vh] w-full" // ← bigger field: half the screen wide, tall
              coinScale={1.4} // ← big coin
            />
          </div>
        </div>
      )}
    </div>
  );
}
