"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Wallet,
  ArrowRightLeft,
  Shield,
  Copy,
  HelpCircle,
  CheckCircle2,
  Info,
  Link as LinkIcon,
} from "lucide-react";
import Image from "next/image";

import PHANTOM_LOGO from "../public/assets/phantom/Phantom_SVG_Icon.svg";
import SOLFLARE_LOGO from "../public/assets/solflare/Solflare.png";
import BACKPACK_LOGO from "../public/assets/backpack/Backpack_logo.png";
import SOLANA_LOGO from "../public/assets/solana/Solana_logo.png";
import TTT_LOGO from "../public/assets/TTT/TTT.png";
import RAYDIUM_LOGO from "../public/assets/raydium/RAYDIUM_logo.svg";

type Props = { className?: string; contractAddress?: string };

export default function BuyTTTGuide({
  className,
  contractAddress = "TENSORTUNESTOKENMINTADDRESS",
}: Props) {
  const raydiumUrl = `https://raydium.io/launchpad/token/?mint=${contractAddress}`;

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  };

  return (
    <div className={`max-w-4xl mx-auto p-4 xl:p-12 ${className ?? ""}`}>
      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="flex flex-col md:flex-row justify-center gap-5 items-center text-3xl md:text-4xl font-bold mb-3">
          How to Buy{" "}
          <span className="flex align-middle items-center">
            <Image
              src={TTT_LOGO}
              alt="TensorTunes token logo on Solana"
              width={60}
              height={60}
            />
          </span>
        </h1>
        <p className="opacity-80">
          A simple, step-by-step guide to set up a Solana wallet and swap SOL →
          TTT.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8">
        {/* Step 1: Choose a wallet */}
        <Card className="border border-white/30 bg-black/30">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-300 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <CardTitle className="text-xl md:text-2xl">
                  Install a Solana wallet
                </CardTitle>
                <CardDescription>
                  We recommend <b>Solflare</b> or <b>Phantom</b> (browser &
                  mobile).
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Solflare */}
              <div className="text-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <div className="w-16 h-16 mx-auto flex items-center justify-center">
                  <Image
                    className="rounded-2xl"
                    src={SOLFLARE_LOGO}
                    alt="Solflare Wallet logo"
                    width={56}
                    height={56}
                  />
                </div>
                <h3 className="font-semibold mt-2">Solflare</h3>
                <p className="text-sm opacity-75">
                  Extension · Web · iOS · Android
                </p>
                <div className="flex gap-2 justify-center mt-3">
                  <Button asChild size="sm" variant="secondary">
                    <a
                      href="https://solflare.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Solflare <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a
                      href="https://docs.solflare.com/solflare/onboarding/web-app-and-extension/how-to-create-a-new-wallet"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Create wallet <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Phantom */}
              <div className="text-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <div className="w-16 h-16 mx-auto flex items-center justify-center">
                  <Image
                    className="rounded-2xl"
                    src={PHANTOM_LOGO}
                    alt="Phantom Wallet logo (Solana)"
                    width={56}
                    height={56}
                  />
                </div>
                <h3 className="font-semibold mt-2">Phantom</h3>
                <p className="text-sm opacity-75">Extension · iOS · Android</p>
                <div className="flex gap-2 justify-center mt-3">
                  <Button asChild size="sm" variant="secondary">
                    <a
                      href="https://phantom.com/download"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Phantom <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a
                      href="https://phantom.com/learn/guides/how-to-create-a-new-wallet"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Create wallet <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Backpack (optional) */}
              <div className="text-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <div className="w-16 h-16 mx-auto flex items-center justify-center">
                  <Image
                    className="rounded-2xl"
                    src={BACKPACK_LOGO}
                    alt="Backpack wallet logo"
                    width={42}
                    height={42}
                  />
                </div>
                <h3 className="font-semibold mt-2">Backpack</h3>
                <p className="text-sm opacity-75">Multi-chain wallet</p>
                <div className="flex gap-2 justify-center mt-3">
                  <Button asChild size="sm" variant="secondary">
                    <a
                      href="https://www.backpack.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Backpack <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-4 bg-white/10 border border-white/15">
              <p className="text-sm">
                <Wallet className="inline w-4 h-4 mr-2" />
                During setup you’ll get a <b>recovery phrase</b>. Store it
                offline, never share it, and don’t screenshot it. It can recover
                your funds.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Add SOL */}
        <Card className="border border-white/30 bg-black/30">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-300 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <CardTitle className="text-xl md:text-2xl">Add SOL</CardTitle>
                <CardDescription>
                  You need SOL to swap for TTT and to pay tiny network fees.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white/10 border border-white/15">
                <h4 className="font-semibold mb-2">Add SOL in Solflare</h4>
                <ol className="list-decimal pl-5 space-y-1 text-sm opacity-90">
                  <li>
                    Open Solflare → tap <b>Buy</b> or <b>Receive</b>.
                  </li>
                  <li>
                    Choose <b>SOL</b> and follow on-screen steps (fiat or
                    transfer).
                  </li>
                  <li>
                    Copy your address to receive from an exchange if needed.
                  </li>
                </ol>
                <div className="mt-2">
                  <Button asChild size="sm" variant="outline" className="gap-2">
                    <a
                      href="https://www.solflare.com/prices/solana/So11111111111111111111111111111111111111112/how-to-buy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Solflare: Buy SOL <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/10 border border-white/15">
                <h4 className="font-semibold mb-2">Add SOL in Phantom</h4>
                <ol className="list-decimal pl-5 space-y-1 text-sm opacity-90">
                  <li>
                    Open Phantom → tap <b>Deposit</b> / <b>Buy</b>.
                  </li>
                  <li>
                    Select <b>SOL</b>, choose a provider or copy your address.
                  </li>
                  <li>Confirm and wait for the funds to arrive.</li>
                </ol>
                <div className="mt-2 flex gap-2">
                  <Button asChild size="sm" variant="outline" className="gap-2">
                    <a
                      href="https://phantom.com/learn/crypto-101/where-and-how-to-buy-solana-SOL"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Phantom: Buy SOL <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="gap-2">
                    <a
                      href="https://phantom.com/learn/guides/how-to-deposit-eth-matic-and-sol-in-my-phantom-wallet"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deposit guide <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-4 bg-white/10 border border-white/15">
              <p className="text-sm">
                <Info className="inline w-4 h-4 mr-2" />
                Keep a small extra balance of SOL (a few dollars) for future
                swaps and transactions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Open Raydium */}
        <Card className="border border-white/30 bg-black/30">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-300 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <CardTitle className="text-xl md:text-2xl">
                  Open Raydium
                </CardTitle>
                <CardDescription>
                  Use our mint to find the right token.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 text-center bg-white/20 rounded-lg">
              <div className="w-16 h-16 mx-auto flex items-center justify-center">
                <Image
                  className="rounded-1xl"
                  src={RAYDIUM_LOGO}
                  alt="Raydium logo"
                  width={70}
                  height={70}
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-lg">Raydium.io</h3>
                <p className="opacity-75 text-sm">
                  Solana’s leading DEX for swapping tokens.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button asChild>
                  <a href={raydiumUrl} target="_blank" rel="noreferrer">
                    Open Raydium <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => copy(raydiumUrl)}
                  className="gap-2"
                >
                  <LinkIcon className="w-4 h-4" /> Copy link
                </Button>
              </div>
            </div>

            <div className="rounded-lg p-4 bg-white/10 border border-white/15">
              <code className="block text-xs break-all">{raydiumUrl}</code>
            </div>
          </CardContent>
        </Card>

        {/* Step 4: Swap SOL → TTT */}
        <Card className="border border-white/30 bg-black/30">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-300 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <CardTitle className="text-xl md:text-2xl">
                  Swap SOL → TTT
                </CardTitle>
                <CardDescription>
                  Paste the mint to select the correct token.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="p-4 rounded-lg bg-white/10 border border-white/15">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4" />
                Contract (mint) address
              </h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <code className="flex-1 p-2 rounded border border-white/20 text-sm break-all bg-black/30">
                  {contractAddress}
                </code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copy(contractAddress)}
                  className="flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-white/20 rounded-lg">
                <h4 className="font-semibold mb-2">From (You pay)</h4>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src={SOLANA_LOGO}
                      alt="Solana logo"
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="font-medium">Solana (SOL)</span>
                </div>
              </div>
              <div className="p-4 border border-white/20 rounded-lg">
                <h4 className="font-semibold mb-2">To (You receive)</h4>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src={TTT_LOGO}
                      alt="TTT logo"
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="font-medium">TensorTunesToken (TTT)</span>
                </div>
              </div>
            </div>

            <ol className="list-decimal pl-5 text-sm space-y-1 opacity-90">
              <li>
                Click <b>Connect</b> on Raydium and choose your wallet.
              </li>
              <li>
                Select <b>SOL</b> in the “From” field.
              </li>
              <li>
                Paste the <b>contract (mint) address</b> to select TTT.
              </li>
              <li>
                Enter the amount → review slippage → click <b>Swap</b>.
              </li>
              <li>Approve the transaction in your wallet.</li>
            </ol>

            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a
                  href="https://docs.raydium.io/raydium/traders/swapping"
                  target="_blank"
                  rel="noreferrer"
                >
                  Raydium: How to swap <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a
                  href="https://docs.raydium.io/raydium/traders/swapping/trade-and-swap"
                  target="_blank"
                  rel="noreferrer"
                >
                  Swap FAQ <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting / FAQ */}
        <Card className="border border-white/30 bg-black/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Troubleshooting & FAQ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="rounded-lg p-4 bg-white/10 border border-white/15">
              <p className="font-semibold mb-1">
                TTT doesn’t show in my wallet
              </p>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>
                  In Solflare: add the token via <b>Add new asset</b> and paste
                  the mint.
                </li>
                <li>
                  In Phantom: paste the mint in the token search to add it.
                </li>
                <li>
                  Verify on a Solana explorer (e.g., Solscan) that the swap
                  succeeded.
                </li>
              </ul>
            </div>

            <div className="rounded-lg p-4 bg-white/10 border border-white/15">
              <p className="font-semibold mb-1">
                Swap fails or price keeps changing
              </p>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>
                  Increase or decrease <b>slippage</b> slightly and retry.
                </li>
                <li>
                  Ensure you have a little extra <b>SOL</b> for network fees.
                </li>
                <li>
                  Double-check the <b>mint address</b> matches ours exactly.
                </li>
              </ul>
            </div>

            <div className="rounded-lg p-4 bg-white/10 border border-white/15">
              <p className="font-semibold mb-1">
                Wrong network / can’t connect
              </p>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                <li>
                  Make sure your wallet is on <b>Solana</b>, not
                  Ethereum/Base/etc.
                </li>
                <li>
                  Close other wallet popups, reconnect, and approve in your
                  wallet.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="border-2 border-red-200 bg-red-50/90 text-red-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Important Security Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Only use the <b>official wallets</b> (Solflare, Phantom) and
                  the official Raydium site.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Always double-check the <b>contract (mint) address</b> before
                  swapping.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Never share your <b>recovery phrase</b> or private keys.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Start with a <b>small test swap</b>, then increase.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Mini glossary */}
        <Card className="border border-white/30 bg-black/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              Quick Glossary
            </CardTitle>
            <CardDescription>
              Two-line definitions for beginners.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm grid md:grid-cols-2 gap-4">
            <div className="rounded-lg p-3 bg-white/10 border border-white/15">
              <p className="font-semibold">Mint (Contract) Address</p>
              <p className="opacity-80">
                Unique ID of a token on Solana. Paste this in Raydium to pick
                the correct token.
              </p>
            </div>
            <div className="rounded-lg p-3 bg-white/10 border border-white/15">
              <p className="font-semibold">Slippage</p>
              <p className="opacity-80">
                The % price change you accept during a swap. Higher = more
                likely to fill, but worse price.
              </p>
            </div>
            <div className="rounded-lg p-3 bg-white/10 border border-white/15">
              <p className="font-semibold">Gas/Fees</p>
              <p className="opacity-80">
                Tiny SOL fees paid to the network. Keep a few dollars worth in
                your wallet.
              </p>
            </div>
            <div className="rounded-lg p-3 bg-white/10 border border-white/15">
              <p className="font-semibold">DEX</p>
              <p className="opacity-80">
                Decentralized exchange (e.g., Raydium) where swaps happen via
                smart contracts.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Success footer */}
        <Card className="border border-white/30 bg-black/30">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 text-green-400 font-medium">
              <CheckCircle2 className="w-5 h-5" />
              You’re all set — welcome to TensorTunes! 🎧
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
