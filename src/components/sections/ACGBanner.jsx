import React from "react";

export default function ACGBanner() {
  return (
    <section className="w-full bg-white py-12">
      <div className="w-[74vw] mx-auto flex flex-col items-center">
        {/* ACG Logo */}
        <div className="mb-10 flex justify-center">
          <img
            src="/assets/banners/acg_logo.png"
            alt="Nike ACG"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Three-Column Photo Grid */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-[14px] overflow-hidden">
          {/* Photo 1 — left column with text overlay */}
          <div className="relative aspect-[4/5] overflow-hidden group">
            <img
              src="/assets/banners/acg_photo1.png"
              alt="ACG Radical AirFlow — model with mesh tank"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            {/* Gradient + text overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-6 z-10 text-white space-y-1.5">
              <h3 className="text-lg md:text-xl font-bold leading-tight">
                ACG Radical AirFlow
              </h3>
              <p className="text-xs md:text-sm text-zinc-200 leading-relaxed max-w-[220px] font-medium">
                Keep the A/C running while you have fun on your run in the sun.
              </p>
            </div>
          </div>

          {/* Photo 2 — center column */}
          <div className="relative aspect-[4/5] overflow-hidden group">
            <img
              src="/assets/banners/acg_photo2.png"
              alt="ACG Radical AirFlow — perforated shoe detail"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>

          {/* Photo 3 — right column */}
          <div className="relative aspect-[4/5] overflow-hidden group">
            <img
              src="/assets/banners/acg_photo3.png"
              alt="ACG Radical AirFlow — model with bucket hat"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
