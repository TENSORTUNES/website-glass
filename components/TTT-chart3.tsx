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

const build24hData = (currentPrice: number) => {
  const end = Math.floor(Date.now() / HOUR) * HOUR; // snap to hour
  const start = end - 23 * HOUR; // 24 points -> 23h span
  const points: ChartPoint[] = Array.from({ length: 24 }, (_, i) => {
    const timestamp = start + i * HOUR;
    // generate your price… (replace with real data when you have it)
    const basePrice = currentPrice * (1 + (Math.random() - 0.5) * 0.15);
    return {
      time: new Date(timestamp).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      price: basePrice,
      timestamp,
      priceChange: 0,
    };
  });
  return { points, start, end };
};

const getTicks = (start: number, end: number, step = 2 * HOUR) => {
  const arr: number[] = [];
  for (let t = start; t <= end; t += step) arr.push(t);
  return arr;
};

const fmtHHMM = (ms: number, useUTC = false) => {
  const d = new Date(ms);
  const h = (useUTC ? d.getUTCHours() : d.getHours())
    .toString()
    .padStart(2, "0");
  const m = (useUTC ? d.getUTCMinutes() : d.getMinutes())
    .toString()
    .padStart(2, "0");
  return `${h}:${m}`;
};

const niceTicks = (min: number, max: number, count = 5) => {
  if (min === max) return [min];
  const span = max - min;
  const step = Math.pow(10, Math.floor(Math.log10(span / count)));
  const err = span / count / step;
  const mult = err >= 7.5 ? 10 : err >= 3 ? 5 : err >= 1.5 ? 2 : 1;
  const niceStep = mult * step;
  const niceMin = Math.floor(min / niceStep) * niceStep;
  const niceMax = Math.ceil(max / niceStep) * niceStep;
  const ticks: number[] = [];
  for (let v = niceMin; v <= niceMax + 1e-12; v += niceStep) ticks.push(v);
  return ticks;
};

const formatPrice = (v: number) =>
  v >= 1 ? `$${v.toFixed(2)}` : `$${v.toFixed(6)}`;

const formatCompact = (v: number) => {
  const abs = Math.abs(v);
  if (abs >= 1e9) return `$${(v / 1e9).toFixed(2)}B`;
  if (abs >= 1e6) return `$${(v / 1e6).toFixed(2)}M`;
  if (abs >= 1e3) return `$${(v / 1e3).toFixed(2)}K`;
  return `$${v.toFixed(2)}`;
};

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload as ChartPoint;

  return (
    <div className="bg-black border border-cyan-400/20 rounded-lg p-3 shadow-lg">
      <p className="text-cyan-400 text-sm font-medium">
        Time: {fmtHHMM(point.timestamp)}{" "}
        {/* or fmtHHMM(point.timestamp, true) for UTC */}
      </p>
      <p className={`${saira.className} text-white text-lg font-bold`}>
        ${point.price.toFixed(6)}
      </p>
      {!!point.priceChange && (
        <p
          className={`text-sm ${
            point.priceChange > 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {point.priceChange > 0 ? "↗" : "↘"} {point.priceChange > 0 ? "+" : ""}
          {point.priceChange.toFixed(2)}%
        </p>
      )}
    </div>
  );
};

const EnhancedTokenChart: FC = () => {
  const [data, setData] = useState<ChartPoint[]>([]);
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [domain, setDomain] = useState<[number, number] | null>(null);
  const [ticks, setTicks] = useState<number[]>([]);
  const [yDomain, setYDomain] = useState<[number, number] | null>(null);
  const [yTicks, setYTicks] = useState<number[]>([]);
  const [supply, setSupply] = useState<number | null>(null);

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

          const { points, start, end } = build24hData(currentPrice);
          setData(points);
          const prices = points.map((p) => p.price);
          const yMin = Math.min(...prices);
          const yMax = Math.max(...prices);

          // pad 3% so the line doesn't touch edges
          const pad = (yMax - yMin) * 0.03;
          const yDomain: [number, number] = [yMin - pad, yMax + pad];
          setDomain([start, end]);
          setTicks(getTicks(start, end));
          setYDomain(yDomain); // <-- add state below
          setYTicks(niceTicks(...yDomain));
          const supply =
            tokenInfo.price > 0 && tokenInfo.marketCap > 0
              ? tokenInfo.marketCap / tokenInfo.price
              : null;
          setSupply(supply);
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
              domain={domain ?? ["dataMin", "dataMax"]}
              ticks={ticks}
              tickFormatter={(ts: number) =>
                new Date(ts).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
              }
              tick={{ fill: "#ffffff", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              yAxisId="price"
              orientation="left"
              domain={yDomain ?? ["auto", "auto"]}
              ticks={yTicks}
              tickFormatter={formatPrice}
              tick={{ fill: "#ffffff", fontSize: 12 }}
              axisLine={true}
              tickLine={false}
              width={70}
            />
            <Tooltip
              content={<CustomTooltip />}
              labelFormatter={(value) => fmtHHMM(value as number)}
            />

            <Area
              yAxisId="price"
              type="monotone"
              dataKey="price"
              stroke="#22d3ee"
              fill="url(#tensorFill)"
              strokeWidth={1}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EnhancedTokenChart;
