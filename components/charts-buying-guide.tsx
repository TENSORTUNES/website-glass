import Image from "next/image";
import SwapButton from "./swap-button";
import EnhancedTokenChart from "./TTT-chart3";
import TT_TOKEN from "../public/assets/TTT/TTT.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function ChartsWithBuyingGuide() {
  return (
    <div className="relative p-4 md:my-80 bg-[linear-gradient(to_bottom,transparent_0,theme(colors.gray.450)_12rem,theme(colors.gray.950)_calc(100%-12rem),transparent_100%)]">
      <div className="flex justify-center">
        <div className="my-25 flex justify-around container ">
          <div className="flex flex-col xl:flex-row min-w-full space-x-10 space-y-10">
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
                <SwapButton />
              </div>
            </div> */}

            <div className="place-content-center max-w-xl justify-center mx-auto flex-col-reverse">
              <Image
                className="mx-auto"
                src={TT_TOKEN}
                width={500}
                alt="rotating logo - tensortunes AI music label logo"
              />
              <div className="flex flex-col text-center">
                <p>
                  Are u new in the crypto space but wanna join the TENSORTUNES
                  Community and buy the TENSORTUNES Token? <br />
                  Check out our guide in creating ur wallet and making ur first
                  transaction on the Solana ecosystem.
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="px-2 ml-2 border bg-black/40 mt-1"
                >
                  <Link
                    href="/more-info-TT-token"
                    aria-label="Back to homepage"
                    className="inline-flex items-center gap-2"
                  >
                    <span className="hidden sm:inline">Click here</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
