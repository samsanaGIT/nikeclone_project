import React from "react";
import { Swoosh } from "../common/BrandIcons";

export default function PromoBanner() {
  return (
    <section className="w-full bg-white py-12">
      {/* Top Centered Swoosh */}
      <div className="mb-8 flex justify-center text-black" title="Nike">
        <Swoosh className="h-8 w-auto text-black hover:scale-105 transition-transform cursor-pointer" />
      </div>

      {/* Promo Image Container - Same width as 3-col grids */}
      <div className="w-[74vw] mx-auto">
        <div className="relative w-full overflow-hidden bg-zinc-950 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
          <img
            src="/assets/banners/promo_sweatproof.png"
            alt="SWEAT. PROOF."
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          />
          <div className="absolute bottom-10 left-6 md:left-12 z-20 text-left text-white space-y-2 md:space-y-3">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-md">
              SWEAT. PROOF.
            </h2>
            <p className="text-sm md:text-base text-zinc-100 max-w-lg leading-relaxed drop-shadow-sm font-medium">
              Show the work, not the sweat in Nike<br />
              Universa with Stealth Evaporation.
            </p>
            <div className="pt-2">
              <a
                href="#performance"
                className="inline-block py-2 px-6 bg-white hover:bg-zinc-100 text-black hover:scale-[1.02] transition-all font-semibold rounded-full text-xs md:text-sm shadow-sm"
              >
                Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
