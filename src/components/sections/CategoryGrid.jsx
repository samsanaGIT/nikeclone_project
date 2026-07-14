import React from "react";
import { categoryCards } from "../../data/products";

export default function CategoryGrid() {
  return (
    <section className="w-full py-12 bg-white">
      {/* Container restricted to ~74% of viewport width and centered */}
      <div className="w-[74vw] mx-auto">
        {/* 3-Column Grid with 12-16px gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
          {categoryCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className="group flex flex-col w-full text-left cursor-pointer"
            >
              {/* Image Frame with aspect-ratio: 4 / 5 */}
              <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-50">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>

              {/* Left-aligned Title below the image */}
              <div className="mt-4">
                <span className="text-lg font-medium text-zinc-900 group-hover:text-black transition-colors block">
                  {card.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
