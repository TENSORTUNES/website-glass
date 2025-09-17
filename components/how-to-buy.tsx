"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Wallet,
  ArrowRightLeft,
  Shield,
  Copy,
} from "lucide-react";
import Image from "next/image";
import PHANTOM_LOGO from "../public/assets/phantom/Phantom_SVG_Icon.svg";
import SOLFLARE_LOGO from "../public/assets/solflare/Solflare.png";
import BACKPACK_LOGO from "../public/assets/backpack/Backpack_logo.png";
import SOLANA_LOGO from "../public/assets/solana/Solana_logo.png";
import TTT_LOGO from "../public/assets/TTT/TTT.png";
import RAYDIUM_LOGO from "../public/assets/raydium/RAYDIUM_logo.svg";

interface BuyingGuideProps {
  className?: string;
}

export function RaydiumBuyingGuide({ className }: BuyingGuideProps) {
  const contractAddress = "TENSORTUNESTOKENMINTADDRESS";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={`max-w-4xl mx-auto p-4 xl:p-12 ${className}`}>
      <div className="mb-8">
        <h1 className="flex flex-col md:flex-row justify-center gap-5 items-center text-3xl md:text-4xl font-bold mb-6">
          How to Buy{" "}
          <span className="flex align-middle items-center">
            <Image
              src={TTT_LOGO}
              alt="TensorTunes token logo on solana ecosystem"
              width={60}
            />{" "}
          </span>
        </h1>
        {/* <Badge variant="secondary" className="text-lg px-4 py-2">
          Symbol: TTT
        </Badge> */}
      </div>

      <div className="grid gap-6 md:gap-8">
        {/* Step 1 */}
        <Card className="border border-white/30 transition-colors bg-black/30">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-300 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <CardTitle className="text-xl md:text-2xl">
                  Get SOL in Your Wallet
                </CardTitle>
                <CardDescription>
                  Set up a Solana wallet and fund it with SOL
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/20 rounded-lg hover:bg-white/40 transition-colors">
                <div className="w-16 h-16 mx-auto flex items-center justify-center">
                  <Image
                    className="rounded-2xl"
                    src={PHANTOM_LOGO}
                    alt="Phantom Wallet logo (Solana)"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="font-semibold">Phantom</h3>
                <p className="text-sm text-muted-foreground">
                  Popular browser extension
                </p>
              </div>
              <div className="text-center p-4 bg-white/20 rounded-lg hover:bg-white/40 transition-colors">
                <div className="w-16 h-16 mx-auto flex items-center justify-center">
                  <Image
                    className="rounded-2xl"
                    src={SOLFLARE_LOGO}
                    alt="Phantom Wallet logo (Solana)"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="font-semibold">Solflare</h3>
                <p className="text-sm text-muted-foreground">
                  Web & mobile wallet
                </p>
              </div>
              <div className="text-center p-4 bg-white/20 rounded-lg hover:bg-white/40 transition-colors">
                <div className="w-16 h-16 mx-auto flex items-center justify-center">
                  <Image
                    className="rounded-2xl"
                    src={BACKPACK_LOGO}
                    alt="Phantom Wallet logo (Solana)"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-semibold">Backpack</h3>
                <p className="text-sm text-muted-foreground">
                  Multi-chain wallet
                </p>
              </div>
            </div>
            <div className="glass p-4 rounded-lg">
              <p className="text-sm">
                <Wallet className="inline w-4 h-4 mr-2" />
                You'll need SOL to pay for transaction fees and to swap for TTT
                tokens.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="border border-white/30 transition-colors bg-black/30">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-300 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <CardTitle className="text-xl md:text-2xl">
                  Open Raydium DEX
                </CardTitle>
                <CardDescription>
                  Navigate to the decentralized exchange
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 text-center bg-white/20 rounded-lg hover:bg-white/40 transition-colors">
              <div className="w-16 h-16 mx-auto flex items-center justify-center">
                <Image
                  className="rounded-1xl"
                  src={RAYDIUM_LOGO}
                  alt="Phantom Wallet logo (Solana)"
                  width={70}
                  height={70}
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-lg">Raydium.io</h3>
                <p className="text-muted-foreground">
                  The leading DEX on Solana
                </p>
              </div>
              <Button className="flex items-center gap-2">
                Open Raydium
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="border border-white/30 transition-colors bg-black/30">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-300 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <CardTitle className="text-xl md:text-2xl">
                  Swap SOL for TTT
                </CardTitle>
                <CardDescription>
                  Use the contract address to find TensorTunesToken
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4" />
                Contract Address
              </h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <code className="flex-1 glass p-2 rounded border text-sm break-all">
                  {contractAddress}
                </code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(contractAddress)}
                  className="flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-white/30 rounded-lg">
                <h4 className="font-semibold mb-2">From (You Pay)</h4>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      className="rounded-1xl"
                      src={SOLANA_LOGO}
                      alt="Phantom Wallet logo (Solana)"
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="font-medium">Solana (SOL)</span>
                </div>
              </div>
              <div className="p-4 border border-white/30 rounded-lg">
                <h4 className="font-semibold mb-2">To (You Receive)</h4>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      className="rounded-1xl"
                      src={TTT_LOGO}
                      alt="Phantom Wallet logo (Solana)"
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="font-medium">TensorTunesToken (TTT)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Tips */}
        <Card className="border-2 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <Shield className="w-5 h-5" />
              Important Security Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-red-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>
                  Always double-check the contract address before swapping
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Never share your seed phrase with anyone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Start with a small test transaction first</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Verify you're on the official Raydium website</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
