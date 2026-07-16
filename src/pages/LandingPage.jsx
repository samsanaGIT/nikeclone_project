import React from "react";
import {
  HeroCarousel,
  CategoryGrid,
  PromoBanner,
  ACGBanner,
  RunFreeBanner,
  VaporEdgeBanner,
  KDBanner,
  StrikingApproachBanner,
  JordanTheOneBanner,
  JordanShoesCarousel,
  JordanEverydayGame,
  Trending,
} from "../components";

export default function LandingPage({
  onAddToBag,
  onToggleWishlist,
  wishlist,
}) {
  return (
    <>
      {/* Hero Showcase Section */}
      <HeroCarousel />

      {/* Categories Grid */}
      <CategoryGrid />

      {/* Secondary Promo Section */}
      <PromoBanner />

      {/* ACG Radical AirFlow Section */}
      <ACGBanner />

      {/* Run Free, Play Forever Section */}
      <RunFreeBanner />

      {/* Nike Vapor Edge 360 Section */}
      <VaporEdgeBanner />

      {/* KD Nothing Sweet About It Section */}
      <KDBanner />

      {/* A Striking Approach Tennis Section */}
      <StrikingApproachBanner />

      {/* Jordan THE ONE Section */}
      <JordanTheOneBanner />

      {/* Jordan Shoes Carousel (4 shoes) */}
      <JordanShoesCarousel />

      {/* Jordan Everyday Game Section */}
      <JordanEverydayGame />

      {/* Trending Products Catalog */}
      <Trending />
    </>
  );
}
