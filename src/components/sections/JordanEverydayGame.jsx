import React from "react";
import { Jumpman } from "../common/BrandIcons";

export default function JordanEverydayGame() {
  return (
    <section className="w-full px-6 md:px-12 py-12 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header - Jumpman Logo */}
        <div className="flex justify-center mb-12">
          <Jumpman className="h-10 w-10 text-black" />
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column (with Text Overlay) */}
          <div className="relative aspect-[4/5] overflow-hidden group cursor-pointer bg-zinc-100">
            <img
              src="/assets/banners/banners_img_1.png"
              alt="Everyday Game"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Overlay Text & Button */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <h3 className="text-white text-xl md:text-2xl font-medium leading-snug mb-6 max-w-[250px]">
                Bring serious style to their everyday game.
              </h3>
              <button className="bg-white text-black text-sm font-medium px-6 py-2 rounded-full w-fit hover:bg-gray-200 transition-colors">
                Shop
              </button>
            </div>
          </div>

          {/* Middle Column */}
          <div className="relative aspect-[4/5] overflow-hidden group cursor-pointer bg-zinc-100">
            <img
              src="/assets/banners/banners_img_2.png"
              alt="Jordan Shoes"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right Column */}
          <div className="relative aspect-[4/5] overflow-hidden group cursor-pointer bg-zinc-100">
            <img
              src="/assets/banners/banners_img_3.png"
              alt="Jordan Lifestyle"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
