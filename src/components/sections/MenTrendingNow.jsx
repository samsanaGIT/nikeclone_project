import React from "react";

export default function MenTrendingNow() {
  const promos = [
    {
      subtitle: "Look of Soccer",
      title: "Off-Pitch Style",
      image: "/assets/products/products_img_1.png",
      link: "#shop-soccer",
    },
    {
      subtitle: "All Conditions Gear",
      title: "Seek All Conditions",
      image: "/assets/products/products_img_2.png",
      link: "#shop-acg",
    },
  ];

  return (
    <section className="w-full px-6 md:px-12 py-8 md:py-12 bg-white">
      <h2 className="text-2xl font-medium text-black mb-6 md:mb-8">
        Trending Now
      </h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {promos.map((promo, idx) => (
          <div
            key={idx}
            className="relative w-full md:w-1/2 aspect-[4/5] group overflow-hidden bg-gray-100"
          >
            {/* Image */}
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

            {/* Text Overlay */}
            <div className="absolute bottom-8 left-8 z-10 flex flex-col items-start text-white">
              <span className="text-sm font-medium mb-1 drop-shadow-md">
                {promo.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 drop-shadow-md">
                {promo.title}
              </h2>
              <a
                href={promo.link}
                className="inline-flex items-center justify-center h-10 px-6 bg-white hover:bg-zinc-200 text-black font-medium rounded-full text-sm shadow-md transition-transform hover:scale-105"
              >
                Shop
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
