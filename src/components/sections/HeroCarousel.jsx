import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { heroSlides } from "../../data/products";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  // Reset progress on manual slide change
  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  // Autoplay linked to circular progress increment
  useEffect(() => {
    if (!isPlaying) return;
    const step = (50 / 7000) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-zinc-150 overflow-hidden select-none">
      {/* Slides */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover object-center"
          />

          {/* Details Overlay */}
          <div className="absolute bottom-16 left-6 md:left-16 right-6 z-20 max-w-2xl text-left text-white space-y-3.5 md:space-y-4">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none drop-shadow-md">
              {slide.headline}
            </h1>
            <p className="text-xs md:text-sm text-zinc-100 font-medium leading-relaxed drop-shadow-sm max-w-md">
              {slide.subheadline}
            </p>
            <div className="pt-2">
              <a
                href={slide.link}
                className="inline-block py-3 px-6 md:py-3.5 md:px-8 bg-white hover:bg-zinc-100 text-black hover:scale-[1.02] transition-all font-bold rounded-full text-xs md:text-sm shadow-md"
              >
                {slide.ctaText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Progress Dots Bottom-Center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
            title={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause & Nav Arrows Bottom-Right - Separate Circles matching Mockup 2 */}
      <div className="absolute bottom-6 right-6 md:right-16 z-20 flex items-center space-x-3">
        {/* Autoplay Progress & Play/Pause Circle */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-black/10 hover:bg-black/25 text-white transition-colors cursor-pointer"
          title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
        >
          {/* Circular Progress SVG */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90"
            viewBox="0 0 36 36"
          >
            {/* Background track */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth="2"
            />
            {/* Animated active progress */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeDasharray="100.5"
              strokeDashoffset={100.5 - (isPlaying ? progress : 0)}
              strokeLinecap="round"
              className="transition-all duration-75 ease-linear"
            />
          </svg>
          {/* Pause / Play Icon */}
          <div className="relative z-10 flex items-center justify-center">
            {isPlaying ? (
              <Pause className="h-4 w-4 fill-white text-white" />
            ) : (
              <Play className="h-4 w-4 fill-white text-white ml-0.5" />
            )}
          </div>
        </button>

        {/* Prev Arrow Circle */}
        <button
          onClick={() => {
            prevSlide();
            setProgress(0);
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5e5e5]/95 hover:bg-[#d5d5d5] text-black transition-colors cursor-pointer"
          title="Previous Slide"
        >
          <ChevronLeft className="h-5 w-5 text-black stroke-[2]" />
        </button>

        {/* Next Arrow Circle */}
        <button
          onClick={() => {
            nextSlide();
            setProgress(0);
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5e5e5]/95 hover:bg-[#d5d5d5] text-black transition-colors cursor-pointer"
          title="Next Slide"
        >
          <ChevronRight className="h-5 w-5 text-black stroke-[2]" />
        </button>
      </div>
    </section>
  );
}
