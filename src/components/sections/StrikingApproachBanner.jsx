import React from "react";

export default function StrikingApproachBanner() {
  return (
    <section className="w-full bg-white py-12">
      <div className="w-full flex flex-col items-center">
        {/* Cross/Plus Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/banners/banners_img_8.png"
            alt="NikeCourt Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Single Contained Banner Image */}
        <div className="relative w-full overflow-hidden group">
          <img
            src="/assets/banners/tennis_striking.png"
            alt="Nike Tennis — A Striking Approach — athletes in white on green"
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          {/* Text overlay */}
          <div className="absolute bottom-6 left-6 z-10 text-white space-y-1.5">
            <h3 className="text-xl md:text-3xl font-black uppercase leading-tight tracking-tight drop-shadow-md">
              A STRIKING
              <br />
              APPROACH
            </h3>
            <p className="text-xs md:text-sm text-zinc-200 font-medium drop-shadow-sm max-w-[280px]">
              NikeCourt clothing & footwear inspired by the grass.
            </p>
            <div className="pt-1">
              <a
                href="#tennis"
                className="inline-block py-1.5 px-5 bg-white hover:bg-zinc-100 text-black hover:scale-[1.02] transition-all font-semibold rounded-full text-xs shadow-sm"
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
