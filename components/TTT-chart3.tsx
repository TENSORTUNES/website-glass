"use client";
import { type FC, useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import axios from "axios";
import { Oswald, Saira } from "next/font/google";
import { CopyToClipboard } from "./copy-to-clipboard";

const oswald = Oswald({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const saira = Saira({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

interface ChartPoint {
  time: string;
  price: number;
  timestamp: number;
  priceChange?: number;
}

interface TokenData {
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  liquidity: number;
  priceChange24h: number;
}

const DEXSCREENER_API =
  "https://api.dexscreener.com/latest/dex/pairs/solana/HMvLCFT6Posj5ABL2VjLVokJYbpbqzK8oBKm4sEeRrcC";

// helper to make evenly spaced ticks (every 2 hours over 24h)
const HOUR = 60 * 60 * 1000;
const getTicks = (points: ChartPoint[]) => {
  if (!points.length) return [];
  const start = points[0].timestamp; // oldest point
  // snap to exact hour if you want:
  // const start = Math.floor(points[0].timestamp / HOUR) * HOUR;
  return Array.from({ length: 13 }, (_, i) => start + i * 2 * HOUR); // 0..24h by 2h
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const price = payload[0].value;
    const priceChange = data.priceChange || 0;

    return (
      <div className="bg-black border border-cyan-400/20 rounded-lg p-3 shadow-lg">
        <p className="text-cyan-400 text-sm font-medium">{`Time: ${label}`}</p>
        <p
          className={`${saira.className} text-white text-lg font-bold`}
        >{`$${price.toFixed(6)}`}</p>
        {priceChange !== 0 && (
          <p
            className={`text-sm ${
              priceChange > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {priceChange > 0 ? "↗" : "↘"} {priceChange > 0 ? "+" : ""}
            {priceChange.toFixed(2)}%
          </p>
        )}
      </div>
    );
  }
  return null;
};

const EnhancedTokenChart: FC = () => {
  const [data, setData] = useState<ChartPoint[]>([]);
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(DEXSCREENER_API);
        const pair = res.data?.pair;

        if (pair) {
          const currentPrice = Number.parseFloat(pair.priceUsd);
          const tokenInfo: TokenData = {
            name: pair.baseToken?.name || "Unknown Token",
            symbol: pair.baseToken?.symbol || "UNK",
            price: currentPrice,
            marketCap: pair.marketCap || 0,
            liquidity: pair.liquidity?.usd || 0,
            priceChange24h: pair.priceChange?.h24 || 0,
          };

          setTokenData(tokenInfo);

          const now = Date.now();
          const mockData = Array.from({ length: 24 }, (_, i) => {
            const timestamp = now - (23 - i) * 60 * 60 * 1000; // 24 hours of hourly data
            const date = new Date(timestamp);
            const basePrice = currentPrice * (1 + (Math.random() - 0.5) * 0.15);
            const prevPrice =
              i > 0 ? data[i - 1]?.price || basePrice : basePrice;
            const priceChange = ((basePrice - prevPrice) / prevPrice) * 100;

            return {
              time: date.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }),
              price: basePrice,
              timestamp,
              priceChange: i > 0 ? priceChange : 0,
            };
          });

          setData(mockData);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data from DexScreener:", err);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30_000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  if (loading) {
    return (
      <div className="bg-black rounded-lg p-6 border border-cyan-400/20">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${saira.className}"rounded-lg p-6 py-14 border border-cyan-400/20 shadow-xl`}
    >
      {tokenData && (
        <div className={`${saira.className} mb-6`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-white text-2xl font-bold">
                {tokenData.name}
              </h2>
              <p className="text-cyan-400 text-lg">{tokenData.symbol}</p>
            </div>
            <div className="text-right">
              <p className="text-white text-3xl font-bold">
                ${tokenData.price.toFixed(6)}
              </p>
              <p
                className={`text-lg ${
                  tokenData.priceChange24h >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {tokenData.priceChange24h >= 0 ? "+" : ""}
                {tokenData.priceChange24h.toFixed(2)}% (24h)
              </p>
            </div>
          </div>

          <div className="grid my-8">
            <div className="bg-gray-900/50 rounded-lg p-3 border border-cyan-400/10 flex items-center justify-between gap-4">
              <p className="text-xl text-foreground break-all">
                TENSORTUNESTOKENMINTADDRESS
              </p>
              <CopyToClipboard text="TENSORTUNESTOKENMINTADDRESS" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-900/50 rounded-lg p-3 border border-cyan-400/10">
              <p className="text-cyan-400 text-sm">Market Cap</p>
              <p className="text-white text-lg font-semibold">
                {formatNumber(tokenData.marketCap)}
              </p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-3 border border-cyan-400/10">
              <p className="text-cyan-400 text-sm">Liquidity</p>
              <p className="text-white text-lg font-semibold">
                {formatNumber(tokenData.liquidity)}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className={`${saira.className} text-white h-64`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="tensorFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="timestamp"
              type="number"
              scale="time"
              domain={["dataMin", "dataMax"]} // or [start, start + 24*HOUR]
              ticks={getTicks(data)}
              tickFormatter={(ts: number) =>
                new Date(ts).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
              }
              axisLine={false}
              minTickGap={8}
            />
            <YAxis
              hide
              domain={["dataMin - dataMin * 0.01", "dataMax + dataMax * 0.01"]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#22d3ee"
              fill="url(#tensorFill)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EnhancedTokenChart;
