// components/SwapButton.tsx
"use client";
import { useEffect } from "react";

const SOL_MINT = "So11111111111111111111111111111111111111112";
const TT_MINT = "TENSORTUNESTOKENMINTADDRESS";

// If you really want to force an RPC from the client, expose it via NEXT_PUBLIC_*
const ENDPOINT = process.env.NEXT_PUBLIC_HELIUS_RPC_ENDPOINT;

export default function SwapButton() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).Jupiter) {
      (window as any).Jupiter.init({
        displayMode: "modal",
        endpoint: ENDPOINT, // optional: omit to use default/wallet
        defaultInputMint: SOL_MINT,
        defaultOutputMint: TT_MINT,
        fixedOutputMint: TT_MINT, // lock to your token
        enableWalletPassthrough: true, // if using Wallet Adapter providers
      });
    }
  }, []);

  const openTerminal = async () => {
    const { Jupiter } = window as any;
    if (!Jupiter) return;
    await Jupiter.init({
      displayMode: "modal",
      endpoint: ENDPOINT, // optional
      defaultInputMint: SOL_MINT,
      defaultOutputMint: TT_MINT,
      fixedOutputMint: TT_MINT,
      enableWalletPassthrough: true,
    });
    Jupiter.open();
  };

  return (
    <button
      onClick={openTerminal}
      aria-label="Swap SOL to TT"
      className="inline-flex items-center rounded-md bg-cyan-500 px-4 py-2 font-medium text-white hover:bg-cyan-600 z-[999]"
    >
      Swap SOL → TT
    </button>
  );
}
