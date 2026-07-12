import React from "react";
import { Link } from "react-router-dom";
import {
  MenHeroCarousel,
  MenFeaturedCategories,
  MenTrendingNow,
  MenFeaturedFootwear,
  MenShopBySport,
  MenLatestClothing,
  MenShopByCategory,
} from "../components";

export default function MenPage() {
  const secondaryNavLinks = [
    "Shop All",
    "Shoes",
    "Clothing",
    "Accessories",
    "Sale",
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Secondary Navigation */}
      <div className="w-full flex items-center justify-between px-6 md:px-12 py-4 bg-white sticky top-0 z-20 hidden md:flex">
        <h1 className="text-2xl font-medium text-black">Men</h1>
        <nav className="flex space-x-6 text-sm font-medium text-black">
          {secondaryNavLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              className="hover:text-zinc-500 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
        {/* Placeholder spacer to balance the layout if needed */}
        <div className="w-12"></div>
      </div>

      {/* Content */}
      <div className="flex-1 w-full flex flex-col gap-0 md:gap-4">
        <MenHeroCarousel />
        <MenFeaturedCategories />
        <MenTrendingNow />
        <MenFeaturedFootwear />
        <MenShopBySport />
        <MenLatestClothing />
        <MenShopByCategory />
      </div>
    </div>
  );
}
