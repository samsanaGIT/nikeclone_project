import React from "react";

export default function KDBanner() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* KD Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/banners/banners_img_7.png"
            alt="KD Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Single Contained Banner Image */}
        <div className="relative w-full overflow-hidden group">
          <img
            src="/assets/banners/kd_shoe.png"
            alt="KD Basketball Shoe — Nothing Sweet About It"
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          />
          {/* Text overlay */}
          <div className="absolute bottom-6 left-6 z-10 text-white space-y-1.5">
            <h3 className="text-xl md:text-3xl font-black uppercase leading-tight tracking-tight drop-shadow-md">
              NOTHING
              <br />
              SWEET ABOUT IT
            </h3>
            <p className="text-xs md:text-sm text-zinc-200 font-medium drop-shadow-sm">
              KD 18 Basketweave Stones
            </p>
            <div className="pt-1">
              <a
                href="#kd"
                className="inline-block py-1.5 px-5 bg-white hover:bg-zinc-100 text-black hover:scale-[1.02] transition-all font-semibold rounded-full text-xs shadow-sm"
              >
                Shop KD
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
