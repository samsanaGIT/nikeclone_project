import React from "react";
import { categoryCards } from "../../data/products";

export default function CategoryGrid() {
  return (
    <section className="w-full py-12 px-6 md:px-12 bg-white">
      <div className="w-full">
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categoryCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className="group flex flex-col w-full text-left cursor-pointer"
            >
              {/* Image Frame */}
              <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-50">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>

              {/* Left-aligned Title */}
              <div className="mt-4">
                <span className="text-lg font-medium text-zinc-900 group-hover:text-black group-hover:underline transition-colors block">
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
