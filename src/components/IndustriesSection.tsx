import React, { useState, useEffect, useRef } from 'react';
import { INDUSTRIES_DATA } from '../data/mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface IndustriesSectionProps {
  onOpenRFQ?: (industryName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenRFQ }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const totalSlides = INDUSTRIES_DATA.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-play / auto-slide every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Ensure current video plays smoothly when active
  useEffect(() => {
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {
        // Fallback gracefully if browser restricts autoplay
      });
    }
  }, [currentIndex]);

  const currentIndustry = INDUSTRIES_DATA[currentIndex];

  return (
    <section id="industries" className="py-8 sm:py-14 bg-[#FF6600] text-white border-b border-slate-800 w-full overflow-hidden">
      
      {/* 1. Center-aligned Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-5 sm:mb-10">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
          Industries We Serve
        </h2>
        <p className="mt-1.5 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          Tailored industrial automation and motion control solutions designed for high-precision operational requirements.
        </p>
      </div>

      {/* 2. Full-Width Screen Edge-to-Edge Auto-Sliding Banner Stage */}
      <div
        className="relative w-full h-[440px] sm:h-[520px] lg:h-[560px] overflow-hidden bg-slate-950 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Video & Image Layers for All Industries */}
        {INDUSTRIES_DATA.map((ind, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={ind.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Machine Video Background */}
              {ind.videoUrl ? (
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={ind.videoUrl}
                  poster={ind.bgImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover filter brightness-95 contrast-105"
                />
              ) : (
                <img
                  src={ind.bgImage}
                  alt={ind.name}
                  className="w-full h-full object-cover filter brightness-95"
                />
              )}

              {/* Crisp Gradient Overlay for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/35" />
            </div>
          );
        })}

        {/* Side Navigation Arrow: Left */}
        <button
          onClick={handlePrev}
          className="absolute left-1.5 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-1.5 sm:p-3.5 rounded-full bg-slate-950/50 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 transition-all shadow-xl active:scale-90 cursor-pointer backdrop-blur-xs"
          aria-label="Previous Industry"
        >
          <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>

        {/* Side Navigation Arrow: Right */}
        <button
          onClick={handleNext}
          className="absolute right-1.5 sm:left-auto sm:right-6 top-1/2 -translate-y-1/2 z-30 p-1.5 sm:p-3.5 rounded-full bg-slate-950/50 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 transition-all shadow-xl active:scale-90 cursor-pointer backdrop-blur-xs"
          aria-label="Next Industry"
        >
          <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>

        {/* Center-Aligned Overlay Content Container with Generous Spacing */}
        <div className="relative z-20 h-full max-w-4xl mx-auto px-7 sm:px-12 flex flex-col justify-between py-6 sm:py-12 text-center">
          
          {/* Main Industry Title, Tagline, Description & Core Applications */}
          <div className="space-y-3 sm:space-y-6 my-auto">
            
            {/* Industry Title */}
            <h3 className="text-xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans drop-shadow-md">
              {currentIndustry.name}
            </h3>
            
            {/* Tagline */}
            <p className="text-amber-300 font-bold text-[11px] sm:text-base lg:text-lg tracking-wide max-w-2xl mx-auto leading-snug">
              {currentIndustry.tagline}
            </p>

            {/* Description Paragraph */}
            <p className="text-slate-200 text-[11px] sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-xs px-1">
              {currentIndustry.description}
            </p>

            {/* Core Engineering Applications - Styled Heading & Centered Single-Line Stacked Points */}
            <div className="pt-2 sm:pt-4 border-t border-white/10 max-w-2xl mx-auto w-full">
              <div className="text-[10px] sm:text-sm font-sans font-extrabold text-amber-400 uppercase tracking-widest mb-2 sm:mb-4 drop-shadow-sm">
                Core Engineering Applications
              </div>
              
              {/* Stacked Centered Single-Line Points */}
              <div className="flex flex-col items-center justify-center text-center space-y-1.5 sm:space-y-2.5 max-w-2xl mx-auto w-full">
                {currentIndustry.keyApplications.map((app, idx) => (
                  <div
                    key={idx}
                    className="text-slate-100 text-[10px] sm:text-xs lg:text-sm font-sans font-medium leading-normal drop-shadow-md flex items-center justify-center gap-1.5 sm:gap-2 text-center whitespace-nowrap truncate max-w-full"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <span className="truncate">{app}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Slider Indicators / Dots */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-2 sm:pt-4">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <button
                key={ind.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-amber-500 rounded-full shadow-md'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-500/60 hover:bg-slate-300 rounded-full'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};
