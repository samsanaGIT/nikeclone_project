import React from "react";

export default function MenFeaturedCategories() {
  const categories = [
    {
      title: "New Arrivals",
      image: "/assets/categories/menshoes.png",
      link: "#new-arrivals",
    },
    {
      title: "Best Sellers",
      image: "/assets/categories/menshoes1.png",
      link: "#best-sellers",
    },
    {
      title: "Latest Drops",
      image: "/assets/categories/mensheos2.png",
      link: "#latest-drops",
    },
  ];

  return (
    <section className="w-full px-4 md:px-6 py-8 md:py-12 bg-white">
      <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-2 md:gap-3 pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar">
        {categories.map((cat, idx) => (
          <a
            key={idx}
            href={cat.link}
            className="relative flex-none w-[85%] md:w-auto aspect-[4/3] snap-start group overflow-hidden bg-gray-100"
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none" />

            {/* Text Overlay */}
            <div className="absolute bottom-4 left-6 z-10">
              <span className="text-white text-lg md:text-xl font-medium tracking-tight">
                {cat.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
