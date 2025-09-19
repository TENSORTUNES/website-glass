import { Archivo_Black, Fjalla_One } from "next/font/google";

const archivo_black = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

const fjalla_one = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
});

export default function RevenuePostIt() {
  return (
    <section id="revenue-post-it" className="">
      <div className="flex flex-col md:flex-row justify-center align-middle container">
        <div
          className={`${fjalla_one.className} text-[175px] md:text-[200px] lg:text-[350px] stat-glow-2 text-center`}
        >
          50%
        </div>

        <div className="flex flex-col justify-center align-middle">
          <div className="text-xs">create value for the artist</div>
          <div
            className={`${archivo_black.className} md:text-2xl text-center inline-block align-middle stat-glow-2`}
          >
            Revenue reinvested <br /> back into the <br /> TensorTunes Token
            (TTT)
          </div>
          <div className="flex flex-end">DRAAIENDE PIJL</div>
        </div>
      </div>
    </section>
  );
}
