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

interface BuyingGuideProps {
  className?: string;
}

export function RaydiumBuyingGuide({ className }: BuyingGuideProps) {
  const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={`max-w-4xl mx-auto p-4 ${className}`}>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          How to Buy <span className="text-blue-600">TensorTunesToken</span>
        </h1>
        <Badge variant="secondary" className="text-lg px-4 py-2">
          Symbol: TTT
        </Badge>
      </div>

      <div className="grid gap-6 md:gap-8">
        {/* Step 1 */}
        <Card className="border-2 hover:border-blue-200 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
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
              <div className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Phantom Logo</span>
                </div>
                <h3 className="font-semibold">Phantom</h3>
                <p className="text-sm text-muted-foreground">
                  Popular browser extension
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Solflare Logo</span>
                </div>
                <h3 className="font-semibold">Solflare</h3>
                <p className="text-sm text-muted-foreground">
                  Web & mobile wallet
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Backpack Logo</span>
                </div>
                <h3 className="font-semibold">Backpack</h3>
                <p className="text-sm text-muted-foreground">
                  Multi-chain wallet
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <Wallet className="inline w-4 h-4 mr-2" />
                You'll need SOL to pay for transaction fees and to swap for TTT
                tokens.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="border-2 hover:border-blue-200 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
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
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg">
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-500">Raydium Logo</span>
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
        <Card className="border-2 hover:border-blue-200 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
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
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4" />
                Contract Address
              </h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <code className="flex-1 bg-white p-2 rounded border text-sm break-all">
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
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">From (You Pay)</h4>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs">SOL</span>
                  </div>
                  <span className="font-medium">Solana (SOL)</span>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">To (You Receive)</h4>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">TTT</span>
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
