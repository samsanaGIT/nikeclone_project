import React from "react";

export default function JordanTheOneBanner() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Logo */}
        <div className="mb-10 flex justify-center">
          <img
            src="/assets/banners/banners_img_4.png"
            alt="Jordan Brand Presents THE ONE"
            className="h-16 md:h-24 w-auto object-contain"
          />
        </div>

        {/* Two-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left - Portrait */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group">
            <img
              src="/assets/banners/banners_img_5.png"
              alt="One on Anyone"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

            {/* Text & Button */}
            <div className="absolute bottom-8 left-8 z-10 text-white space-y-4">
              <h3 className="text-xl md:text-2xl font-medium tracking-wide drop-shadow-sm">
                One on Anyone
              </h3>
              <div>
                <a
                  href="#explore"
                  className="inline-block py-2 px-6 bg-white hover:bg-zinc-100 text-black hover:scale-[1.02] transition-all font-semibold rounded-full text-sm shadow-sm"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>

          {/* Right - Global Finals Court */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group">
            <img
              src="/assets/banners/banners_img_6.png"
              alt="Global Finals"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
