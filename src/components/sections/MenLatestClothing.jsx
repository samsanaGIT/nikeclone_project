import React from "react";

export default function MenLatestClothing() {
  const categories = [
    { title: "All Clothing", image: "/assets/icons/icons_img_7.png" },
    { title: "Hoodies & Sweatshirts", image: "/assets/icons/icons_img_8.png" },
    { title: "Jackets & Vests", image: "/assets/icons/icons_img_9.png" },
    { title: "ACG", image: "/assets/icons/icons_img_10.png" },
    { title: "Pants", image: "/assets/icons/icons_img_11.png" },
    { title: "Shorts", image: "/assets/icons/icons_img_12.png" },
    { title: "Tops & Graphic Tees", image: "/assets/icons/icons_img_13.png" },
    { title: "Fan Gear", image: "/assets/icons/icons_img_14.png" },
  ];

  return (
    <section className="w-full px-6 md:px-12 py-12 md:py-16 bg-white">
      {/* Header */}
      <div className="mb-8 md:mb-10 text-center">
        <h2 
          className="text-5xl md:text-6xl font-black text-black uppercase tracking-tighter"
          style={{ fontFamily: "'Impact', sans-serif", transform: "scaleY(1.2)" }}
        >
          Latest in Clothing
        </h2>
      </div>

      {/* Scrollable Container */}
      <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex justify-start md:justify-center items-end min-w-max mx-auto gap-6 md:gap-10">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer w-[100px] md:w-[120px]"
            >
              <div className="w-full aspect-square mb-3 flex items-end justify-center transition-transform duration-300 group-hover:-translate-y-2">
                <img
                  src={category.image}
                  alt={category.title}
                  className="max-h-full max-w-full object-contain drop-shadow-sm"
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-black text-center leading-tight">
                {category.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
