import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";

export default function MenHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const totalSlides = 2;

  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const nextSlide = () => setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  useEffect(() => setProgress(0), [currentSlide]);

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
    <section className="relative w-full h-[60vh] md:h-[85vh] min-h-[600px] overflow-hidden select-none bg-zinc-150">
      
      {/* Slide 0: Tennis (Centered Layout) */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          currentSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <img
          src="/assets/hero/herosession.png"
          alt="A Striking Approach"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient from bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
        
        {/* Text Overlay: Centered */}
        <div className="absolute inset-x-0 bottom-24 md:bottom-32 z-20 flex flex-col items-center justify-end text-center text-white pb-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-lg mb-3">
            A STRIKING APPROACH
          </h1>
          <p className="text-sm md:text-base font-medium drop-shadow-md mb-6">
            NikeCourt's performance tennis gear is built for champions.
          </p>
          <Link
            to="/responsive-cushioning"
            className="inline-flex items-center justify-center h-10 px-8 bg-white hover:bg-zinc-200 text-black font-bold rounded-full text-sm shadow-lg transition-transform hover:scale-105"
          >
            Shop
          </Link>
        </div>

        {/* Pagination dots for Slide 0: Center bottom */}
        {currentSlide === 0 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {[0, 1].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "w-2 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Slide 1: Run Free (Single Image Layout) */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          currentSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <img
          src="/assets/hero/herosession1.png"
          alt="Run Free"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

        {/* Text Overlay: Centered */}
        <div className="absolute inset-x-0 bottom-24 md:bottom-32 z-20 flex flex-col items-center justify-end text-center text-white pb-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-lg mb-3">
            PEGASUS 42
          </h1>
          <p className="text-sm md:text-base font-medium drop-shadow-md mb-6">
            Feel the power of full-length, curved Air Zoom.
          </p>
          <div>
            <Link
              to="/responsive-cushioning"
              className="inline-flex items-center justify-center h-10 px-8 bg-white hover:bg-zinc-200 text-black font-bold rounded-full text-sm shadow-lg transition-transform hover:scale-105"
            >
              Shop
            </Link>
          </div>
        </div>

        {/* Pagination dots for Slide 1: bottom-center-left */}
        {currentSlide === 1 && (
          <div className="absolute bottom-8 left-1/2 ml-6 md:ml-12 z-20 flex space-x-2">
            {[0, 1].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Carousel controls: Bottom-right corner (Visible on both slides) */}
      <div className="absolute bottom-6 right-6 md:right-12 z-20 flex items-center space-x-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer border border-white/10 backdrop-blur-sm"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" />
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
          <div className="relative z-10 flex items-center justify-center">
            {isPlaying ? (
              <Pause className="h-4 w-4 fill-white text-white" />
            ) : (
              <Play className="h-4 w-4 fill-white text-white ml-0.5" />
            )}
          </div>
        </button>

        <button
          onClick={() => {
            prevSlide();
            setProgress(0);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white text-black transition-colors shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
        </button>

        <button
          onClick={() => {
            nextSlide();
            setProgress(0);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white text-black transition-colors shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-5 w-5 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
}
