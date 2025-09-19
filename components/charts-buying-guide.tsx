import { RaydiumBuyingGuide } from "./how-to-buy";
import EnhancedTokenChart from "./TTT-chart3";

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

            <div className="flex justify-center text-center w-full xl:w-1/2 glass backdrop-blur backdrop-saturate-300">
              <div className="flex text-center">
                <RaydiumBuyingGuide />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
