import React from "react";

export default function VaporEdgeBanner() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Centered Heading */}
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-black text-center mb-8 leading-tight">
          NIKE VAPOR EDGE 360
          <br />
          "UNTOUCHABLE"
        </h2>

        {/* Two-Column Photo Grid — contained */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[3px] overflow-hidden">
          {/* Left — side view cleat */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group">
            <img
              src="/assets/banners/vapor_cleat_left.jpg"
              alt="Nike Vapor Edge 360 cleats — side view on field"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            {/* Text overlay */}
            <div className="absolute bottom-6 left-5 md:left-6 z-10 text-white space-y-1.5">
              <p className="text-xs md:text-sm text-zinc-100 max-w-[260px] leading-relaxed font-medium drop-shadow-sm">
                The cleat that took the world by storm, modernized with our
                signature innovations.
              </p>
              <div>
                <a
                  href="#vapor-edge"
                  className="inline-block py-1.5 px-5 bg-white hover:bg-zinc-100 text-black hover:scale-[1.02] transition-all font-semibold rounded-full text-xs shadow-sm"
                >
                  Shop
                </a>
              </div>
            </div>
          </div>

          {/* Right — front view cleats */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group">
            <img
              src="/assets/banners/vapor_cleat_right.png"
              alt="Nike Vapor Edge 360 cleats front view"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
