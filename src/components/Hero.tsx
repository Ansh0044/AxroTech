import React, { useEffect, useRef, useState } from 'react';
import { COMPANY_DETAILS, BRANDS_DATA } from '../data/mockData';
// 1. IMPORT A REAL IMAGE FOR THE POSTER (Create this file or use an existing jpg/png)
import heroPoster from '../assets/images/mixkit-automated-machine-places-parts-on-circuit-boards-47266-hd-ready.mp4'; 
// 2. IMPORT THE ACTUAL LOCAL VIDEO ACCURATELY
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

    // Strict attributes configuration to bypass aggressive browser policies
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const startPlayback = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Autoplay blocked. Awaiting user interaction event:', err);
      }
    };

    // Trigger initial play loop
    startPlayback();

    const handleUserInteraction = () => {
      if (video && video.paused) {
        video.play()
          .then(() => setIsPlaying(true))
          .catch((e) => console.error("Playback failed on event:", e));
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

      {/* Background Video & Image Fallback Layer */}
      <div className="absolute inset-0 overflow-hidden select-none pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster} // Uses valid static image asset
          onPlay={() => setIsPlaying(true)}
          className="w-full h-full object-cover opacity-85 filter brightness-145 contrast-110 scale-105 transition-opacity duration-500"
        >
          {/* Feed your locally bundled, safe asset file straight to the source layer */}
          <source src={heroVideo} type="video/mp4" />
          
          {/* Native HTML5 fallback string if the browser doesn't support video tags entirely */}
          Your browser does not support the video tag.
        </video>

        {/* Minimal Vignette Shadow for Edge Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/80" />
      </div>

      {/* Hero Content Overlay */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 w-full text-center">
        <div className="space-y-4 flex flex-col items-center">

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-2xl drop-shadow-md">
            Precision Motion Control <br className="hidden sm:inline" />
            <span className="text-amber-400">
              & Industrial Automation
            </span>
          </h1>

          <br />
          {/* Concise Summary Description */}
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

