import React from "react";

export default function MenShopByCategory() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      {/* Header with page padding */}
      <div className="px-6 md:px-12 mb-6 md:mb-8">
        <h2 className="text-2xl font-medium text-black">Shop By Category</h2>
      </div>

      {/* Full-bleed Grid Layout with 4px gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4px] w-full">
        {/* Left Column - Clothing with aspect-[4/3] */}
        <div className="relative w-full aspect-[4/3] group cursor-pointer overflow-hidden bg-zinc-50">
          <img
            src="/assets/categories/categories_img_1.png"
            alt="Clothing"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 z-10">
            <a
              href="#clothing"
              className="inline-flex items-center justify-center h-10 px-6 bg-white hover:bg-zinc-200 text-black font-medium rounded-full text-sm shadow-md transition-transform hover:scale-105"
            >
              Clothing
            </a>
          </div>
        </div>

        {/* Right Column - Split vertically into two, matching left column's height */}
        <div className="grid grid-rows-2 gap-[4px] h-full">
          {/* Top Right - Shoes */}
          <div className="relative w-full h-full group cursor-pointer overflow-hidden bg-zinc-50">
            <img
              src="/assets/categories/categories_img_2.png"
              alt="Shoes"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <a
                href="#shoes"
                className="inline-flex items-center justify-center h-10 px-6 bg-white hover:bg-zinc-200 text-black font-medium rounded-full text-sm shadow-md transition-transform hover:scale-105"
              >
                Shoes
              </a>
            </div>
          </div>

          {/* Bottom Right - Accessories */}
          <div className="relative w-full h-full group cursor-pointer overflow-hidden bg-zinc-50">
            <img
              src="/assets/categories/categories_img_3.png"
              alt="Accessories"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <a
                href="#accessories"
                className="inline-flex items-center justify-center h-10 px-6 bg-white hover:bg-zinc-200 text-black font-medium rounded-full text-sm shadow-md transition-transform hover:scale-105"
              >
                Accessories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
