import { Oswald, Bebas_Neue } from "next/font/google";
import CountdownTimer from "./CountdownTimer";
import { getCountdown, parseTargetDate } from "@/utils/Launch";

const oswald = Oswald({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const bebasNeu = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export function Hero() {
  const TARGET = "01-11-2025";

  const { launched: isLive, msRemaining } = getCountdown(TARGET);
  return (
    <section id="hero" className="relative min-h-screen flex px-4">
      {/* BIG SCREENS COUNTER */}
      <div className="hidden min-[933px]:block md:absolute md:top-40 md:right-20  lg:absolute lg:top-70 lg:right-50">
        <div className="flex text-center justify-center mb-5">
          <h4 className={`${oswald.className} text-5xl`}>TensorTunes Token</h4>
        </div>
        <CountdownTimer target={parseTargetDate(TARGET)} />
      </div>
      {/* NON-MOBILE COUNTER */}
      <div className="hidden scale-70 min-[640px]:max-[933px]:block absolute top-30 right-0">
        <div className="flex text-center justify-center mb-5">
          <h4 className={`${oswald.className} text-5xl`}>TensorTunes Token</h4>
        </div>
        <CountdownTimer target={parseTargetDate(TARGET)} />
      </div>
      {/* MOBILE COUNTER */}
      <div className="sm:hidden flex justify-center mx-auto">
        <div className="md:hidden flex flex-col text-center top-30 absolute">
          <div className="flex text-center justify-center mb-5">
            <h4 className={`${oswald.className} text-5xl`}>
              TensorTunes Token
            </h4>
          </div>
          <CountdownTimer target={parseTargetDate(TARGET)} />
        </div>
      </div>

      {/* LARGE SCREEN CREATE/PRODUCE */}
      <div className="hidden min-[933px]:block absolute scale-90 bottom-0 ml-20 md:mb-10 flex">
        <h1
          className={`${bebasNeu.className} absolute bottom-78 sm:bottom-90 -left-22 rotate-90 text-gray-200 min-w-max text-7xl backdrop-blur backdrop-saturate-400 leading-tight`}
        >
          We create.
        </h1>

        <h1
          className={`${bebasNeu.className} absolute bottom-35 text-gray-200 min-w-max text-7xl sm:text-9xl backdrop-blur backdrop-saturate-400`}
        >
          We produce.
        </h1>

        <h1
          className={`${bebasNeu.className} absolute bottom-10 text-gray-200 text-7xl  min-w-max backdrop-blur backdrop-saturate-400 leading-tight`}
        >
          We Distribute.
        </h1>
      </div>

      {/* MEDIUM SCREEN CREATE/PRODUCE */}
      <div className="hidden min-[640px]:max-[933px]:block absolute -bottom-20 scale-50 sm:ml-10 lg:ml-20 mb-20 flex">
        <h1
          className={`${bebasNeu.className} absolute bottom-78 sm:bottom-90 -left-22 rotate-90 text-gray-200 min-w-max text-7xl backdrop-blur backdrop-saturate-400 leading-tight`}
        >
          We create.
        </h1>

        <h1
          className={`${bebasNeu.className} absolute bottom-35 text-gray-200 min-w-max text-7xl sm:text-9xl backdrop-blur backdrop-saturate-400`}
        >
          We produce.
        </h1>

        <h1
          className={`${bebasNeu.className} absolute bottom-10 text-gray-200 text-7xl  min-w-max backdrop-blur backdrop-saturate-400 leading-tight`}
        >
          We Distribute.
        </h1>
      </div>
      {/* MOBILE CREATE/PRODUCE */}
      <div className="sm:hidden absolute bottom-0 scale-80 sm:ml-10 lg:ml-20 mb-10 flex">
        <h1
          className={`${bebasNeu.className} absolute bottom-78 sm:bottom-90 -left-22 rotate-90 text-gray-200 min-w-max text-7xl backdrop-blur backdrop-saturate-400 leading-tight`}
        >
          We create.
        </h1>

        <h1
          className={`${bebasNeu.className} absolute bottom-35 text-gray-200 min-w-max text-7xl sm:text-9xl backdrop-blur backdrop-saturate-400`}
        >
          We produce.
        </h1>

        <h1
          className={`${bebasNeu.className} absolute bottom-10 text-gray-200 text-7xl  min-w-max backdrop-blur backdrop-saturate-400 leading-tight`}
        >
          We Distribute.
        </h1>
      </div>
    </section>
  );
}
