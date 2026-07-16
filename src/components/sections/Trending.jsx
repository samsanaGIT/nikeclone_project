import React from "react";
import { trendingProducts } from "../../data/products";

export default function Trending({ onAddToBag }) {
  // Map clean short names for the design
  const getShortName = (name) => {
    if (name.includes("24.7")) return "24.7 Collection";
    if (name.includes("Graphic Tee")) return "Graphic Tees";
    if (name.includes("Jordan Retro")) return "Jordan Retro";
    if (name.includes("Slide")) return "Rejuven8";
    if (name.includes("Metcon")) return "Metcon";
    if (name.includes("Sabrina")) return "Sabrina 3";
    if (name.includes("Tatum")) return "Tatum 4";
    if (name.includes("Pegasus")) return "Pegasus";
    if (name.includes("Air Jordan 1")) return "Air Jordan 1";
    if (name.includes("Air Max")) return "Air Max";
    if (name.includes("Air Force 1")) return "Air Force 1";
    return name;
  };

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Centered Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black select-none">
            TRENDING
          </h2>
          <p className="text-xs md:text-sm text-zinc-600 font-medium max-w-xl mx-auto tracking-normal leading-relaxed">
            Classic silhouettes and cutting-edge innovation to build your game
            from the ground up.
          </p>
        </div>

        {/* 2 rows x 8 columns Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-8">
          {trendingProducts.map((product) => {
            const shortName = getShortName(product.name);

            return (
              <div
                key={product.id}
                className="group flex flex-col items-center text-center select-none"
              >
                {/* Small circular/square thumbnail frame */}
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 aspect-square flex items-center justify-center relative overflow-hidden group-hover:scale-[1.04] transition-all duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                  />
                  {/* Subtle hover pulse */}
                  <div className="absolute inset-0 bg-black/[0.01] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Centered label below thumbnail */}
                <span className="mt-3 text-[10px] md:text-xs font-semibold text-zinc-900 leading-tight group-hover:text-black tracking-tight uppercase max-w-[100px] md:max-w-none">
                  {shortName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
