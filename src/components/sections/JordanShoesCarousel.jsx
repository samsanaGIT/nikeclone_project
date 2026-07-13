import React from "react";

export default function JordanShoesCarousel() {
  // Using placeholder shoe images until the new ones are added to the public folder
  const shoes = [
    "/assets/icons/icons_img_2.png",
    "/assets/icons/icons_img_3.png",
    "/assets/icons/icons_img_4.png",
    "/assets/icons/icons_img_5.png",
  ];

  return (
    <section className="w-full bg-white py-4 px-6 md:px-12 mb-12">
      <div className="w-full flex flex-col items-center">
        {/* 4-Shoe Grid - No titles, just images */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {shoes.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] md:aspect-square bg-white flex items-center justify-center p-4 group"
            >
              <img
                src={src}
                alt={`Jordan Shoe ${idx + 1}`}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Centered Button */}
        <a
          href="#shop-jordan-basketball"
          className="inline-block py-2 px-6 bg-black hover:bg-zinc-800 text-white font-medium rounded-full text-sm transition-colors"
        >
          Shop Jordan Basketball
        </a>
      </div>
    </section>
  );
}
