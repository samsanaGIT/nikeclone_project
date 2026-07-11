import React from "react";
import { Link } from "react-router-dom";

export default function MenFeaturedFootwear() {
  const footwearCategories = [
    { name: "All Shoes", image: "/shoesicon.png", link: "#all-shoes" },
    { name: "Basketball", image: "/shoesicon2.png", link: "#basketball" },
    { name: "Jordan", image: "/image copy 2.png", link: "#jordan" },
    { name: "Lifestyle", image: "/shoesicon4.png", link: "#lifestyle" },
    { name: "Running", image: "/shoesicon5.png", link: "#running" },
    { name: "Soccer", image: "/shoesicon6.png", link: "#soccer" },
    { name: "ACG", image: "/shoesicon7.png", link: "#acg" },
    { name: "Training", image: "/shoesicon8.png", link: "#training" },
  ];

  return (
    <section className="w-full px-4 md:px-12 py-16 md:py-24 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-center mb-16 uppercase">
        Featured Footwear
      </h2>
      
      <div className="flex overflow-x-auto w-full max-w-7xl justify-start md:justify-center gap-6 md:gap-12 pb-6 hide-scrollbar px-4 md:px-0">
        {footwearCategories.map((category, idx) => (
          <a
            key={idx}
            href={category.link}
            className="flex flex-col items-center group min-w-[80px]"
          >
            <div className="w-24 h-24 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-auto object-contain"
              />
            </div>
            <span className="text-sm font-medium text-black text-center">
              {category.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
