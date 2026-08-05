import React, { useEffect, useRef, useState } from 'react';
import { COMPANY_DETAILS, BRANDS_DATA } from '../data/mockData';
import heroVideo from '../assets/images/mixkit-automated-machine-places-parts-on-circuit-boards-47266-hd-ready.mp4';

interface HeroProps {
  onOpenRFQ?: () => void;
  onExploreMotion?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force autoplay with gesture fallbacks
    const startPlayback = async () => {
      try {
        video.muted = true;
        video.defaultMuted = true;
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Autoplay waiting for user gesture:', err);
      }
    };

    startPlayback();

    const handleUserInteraction = () => {
      if (video && video.paused) {
        video.play().then(() => setIsPlaying(true)).catch(() => { });
      }
    };

    window.addEventListener('click', handleUserInteraction, { once: true });
    window.addEventListener('scroll', handleUserInteraction, { once: true });
    window.addEventListener('touchstart', handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <section id="hero" className="relative text-white overflow-hidden border-b border-slate-800 min-h-[480px] sm:min-h-[520px] flex items-center justify-center bg-slate-950">

      {/* Background Video Layer - Full View SMT Pick & Place Machinery */}
      <div className="absolute inset-0 overflow-hidden select-none pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onPlay={() => setIsPlaying(true)}
          className="w-full h-full object-cover opacity-85 filter brightness-95 contrast-110 scale-105 transition-opacity duration-500"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Minimal Vignette Shadow for Edge Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/70" />
      </div>

      {/* Hero Content Overlay (Directly on Video) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 w-full text-center">
        <div className="space-y-4 flex flex-col items-center">

          {/* Company Profile Badge */}
          {/*  
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-amber-500/50 text-[11px] font-mono shadow-xl backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 ${isPlaying ? 'opacity-100' : 'opacity-40'}`} />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span className="text-amber-400 font-bold tracking-wider uppercase">COMPANY PROFILE</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-200 font-medium">AxtroTech Solutions LLP</span>
          </div>
          */}
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-2xl drop-shadow-md">
            Precision Motion Control <br className="hidden sm:inline" />
            <span className="text-amber-400">
              & Industrial Automation
            </span>
          </h1>

          {/* Tagline */}
          {/*
          <p className="text-xs sm:text-sm text-slate-200 font-medium italic max-w-xl drop-shadow-sm">
            "{COMPANY_DETAILS.tagline}"
          </p>
          */}

          {/* Concise Summary Description */}
          <br></br>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-lg font-sans drop-shadow-sm">
            Specialist engineering firm delivering custom PLC software, multi-axis motion control, VFD drives, and Industry 4.0 automation solutions.
          </p>

          {/* Supported Automation Ecosystems */}
          <div className="pt-3 flex flex-col items-center w-full">
            <span className="text-[10px] font-mono text-slate-300 mb-2 uppercase tracking-widest font-semibold drop-shadow-xs">
              Supported Automation Ecosystems:
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {BRANDS_DATA.map((brand) => (
                <div
                  key={brand.id}
                  className="px-3 py-1 rounded-md bg-slate-900/85 border border-slate-700/80 text-[11px] font-mono font-semibold text-slate-100 flex items-center gap-1.5 shadow-md backdrop-blur-xs hover:border-amber-400 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.colorHex }} />
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
