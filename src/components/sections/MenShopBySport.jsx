import React from "react";

export default function MenShopBySport() {
  const sports = [
    { title: "Shop Soccer", image: "/assets/icons/icons_img_15.png", link: "#soccer" },
    { title: "Shop Baseball", image: "/assets/icons/icons_img_16.png", link: "#baseball" },
    { title: "Shop Golf", image: "/assets/icons/icons_img_17.png", link: "#golf" },
  ];

  return (
    <section className="w-full px-6 md:px-12 py-12 md:py-16 bg-white">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl font-medium text-black">Shop by Sport</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {sports.map((sport, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-square group overflow-hidden bg-gray-100"
          >
            {/* Image */}
            <img
              src={sport.image}
              alt={sport.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none" />

            {/* Button */}
            <div className="absolute bottom-6 left-6 z-10">
              <a
                href={sport.link}
                className="inline-flex items-center justify-center h-10 px-6 bg-white hover:bg-zinc-200 text-black font-medium rounded-full text-sm shadow-md transition-transform hover:scale-105"
              >
                {sport.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
