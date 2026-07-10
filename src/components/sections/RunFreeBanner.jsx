import React from "react";

export default function RunFreeBanner() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      {/* Centered Heading */}
      <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-black text-center mb-8 leading-tight">
        RUN FREE, PLAY FOREVER
      </h2>

      {/* Single Banner Image — contained */}
      <div className="max-w-7xl mx-auto relative overflow-hidden group">
        <img
          src="/runfree_banner.png"
          alt="Kids playing and running in Nike Free shoes on a green field"
          className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
        />
        {/* Gradient overlay on the bottom left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent pointer-events-none" />
        
        {/* Text overlay on the left side */}
        <div className="absolute bottom-6 left-5 md:bottom-8 md:left-8 z-10 text-white space-y-1.5">
          <p className="text-xs md:text-sm text-zinc-100 max-w-[260px] leading-relaxed font-medium drop-shadow-sm">
            Play outside the lines with Nike Free Ride's flexible innovation, now in fresh new colors.
          </p>
          <div>
            <a
              href="#run-free"
              className="inline-block py-1.5 px-5 bg-white hover:bg-zinc-100 text-black hover:scale-[1.02] transition-all font-semibold rounded-full text-xs shadow-sm"
            >
              Shop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
