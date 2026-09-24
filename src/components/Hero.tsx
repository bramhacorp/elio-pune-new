import React from 'react';
import { ArrowRight } from 'lucide-react';
import { heroModelImg } from '@/src/data/products';

interface HeroProps {
  onExploreCollections: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollections }) => {
  return (
    <section className="relative pt-24 md:pt-28 pb-12 md:pb-20 overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center pt-4 lg:pt-0">
            {/* Top Subtitle */}
            <div className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-[#55504A] font-medium leading-relaxed mb-4 md:mb-6">
              <p>TIMELESS STYLE</p>
              <p>MODERN YOU</p>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[5.2rem] xl:text-[6rem] leading-[0.98] font-normal text-[#1A1918] tracking-tight mb-6">
              Elegance <br />
              Lives Here
            </h1>

            {/* Paragraph Description */}
            <p className="text-sm md:text-base text-[#524C46] font-light leading-relaxed max-w-sm mb-7 md:mb-8">
              A curated world of clothing and custom jewellery for the modern woman.
            </p>

            {/* Horizontal Line Accent */}
            <div className="w-16 h-[1px] bg-[#1A1918] mb-8" />

            {/* Call to Action Button */}
            <div>
              <button
                onClick={onExploreCollections}
                className="group inline-flex items-center gap-3 border border-[#1A1918] px-7 py-3 text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-[#1A1918] hover:bg-[#1A1918] hover:text-[#FAF7F2] transition-all duration-300 cursor-pointer"
              >
                <span>EXPLORE OUR COLLECTIONS</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 inline" />
                </span>
              </button>
            </div>

            {/* Brand Pillars Subline */}
            <div className="mt-12 md:mt-16 text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#78716A] font-normal">
              <span>STYLE</span>
              <span className="mx-2.5 text-[#B8AFA6]">|</span>
              <span>CRAFTSMANSHIP</span>
              <span className="mx-2.5 text-[#B8AFA6]">|</span>
              <span>YOU</span>
            </div>
          </div>

          {/* Right Imagery Column */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Main Editorial Image */}
              <div className="relative overflow-hidden aspect-[4/3] md:aspect-[14/10] bg-[#EBE5DC] shadow-sm">
                <img
                  src={heroModelImg}
                  alt="ELIO Luxury Clothing and Custom Jewellery Collection Model in Pune"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Subtle vignette / warm sunlight glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Poetic Vertical Typography (as shown in the mockup) */}
              <div className="hidden sm:block absolute top-6 right-6 md:top-8 md:right-8 text-right pointer-events-none select-none">
                <div className="text-[11px] md:text-xs uppercase tracking-[0.28em] font-medium text-[#403B36] leading-[1.8] bg-[#FAF7F2]/60 backdrop-blur-xs p-3 md:p-4 border-l border-white/40">
                  <p>CLOTHES</p>
                  <p>JEWELLERY</p>
                  <p>A MORE</p>
                  <p>BEAUTIFUL</p>
                  <p>YOU</p>
                  <div className="w-8 h-[1px] bg-[#403B36] ml-auto mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
