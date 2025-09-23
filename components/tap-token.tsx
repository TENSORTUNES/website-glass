import { ExternalLink } from "lucide-react";
import FloatingCoin from "./floating-TT-coin";
import { Button } from "./ui/button";
import Link from "next/link";
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

export default function TapToken() {
  return (
    <div className="w-full xl:w-1/2 max-h-min text-center">
      <div className={`${saira.className} max-w-full flex justify-center`}>
        <div className="flex flex-col justify-center px-10 glass backdrop-blur backdrop-saturate-300 p-4 max-w-max">
          <div className="text-2xl md:text-3xl ">
            Tap the TT token below to start trading
          </div>
          <div className="text-s flex flex-col md:flex-row justify-end mt-1">
            <div className="mt-1">New to crypto? </div>
            <div className="mt-1 md:mt-0">
              <Link
                href="/more-info-TT-token"
                aria-label="Back to homepage"
                className="inline-flex items-center gap-2"
              >
                <div>
                  <Button className="ml-2 flex" size={"sm"}>
                    Follow our guide! <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Link>
            </div>
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
  );
}
