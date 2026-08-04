import React from 'react';
import { COMPANY_DETAILS, BRANDS_DATA } from '../data/mockData';
import { CheckCircle2 } from 'lucide-react';
import heroBgImage from '../assets/images/industrial_motion_hero_1785860233266.jpg';

interface HeroProps {
  onOpenRFQ?: () => void;
  onExploreMotion?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="hero" className="relative text-white overflow-hidden border-b border-slate-800 min-h-[550px] flex items-center">
      {/* Background Image with Commercial Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBgImage})`
        }}
      />
      {/* High-Contrast Corporate Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070E1B] via-[#070E1B]/90 to-[#070E1B]/75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Profile Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs font-mono shadow-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 font-bold tracking-widest uppercase">COMPANY PROFILE</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-200 font-sans font-medium">AxtroTech Solutions LLP</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-sans">
            Precision Motion Control <br />
            <span className="text-amber-400">
              & Industrial Automation
            </span>
          </h1>

          {/* Motto & Tagline */}
          <div className="space-y-2 border-l-4 border-amber-500 pl-4 py-1">
            <p className="text-lg sm:text-xl text-slate-100 font-semibold font-sans">
              "{COMPANY_DETAILS.motto}"
            </p>
            <p className="text-sm text-amber-300 font-mono italic">
              "{COMPANY_DETAILS.tagline}"
            </p>
          </div>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
            Specialist engineering firm delivering custom PLC software development, multi-axis servo motion control, intelligent VFD drive systems, IEC control panels, and Industry 4.0 data telemetry for demanding industrial manufacturing.
          </p>

          {/* Core Ecosystem Badges */}
          <div className="pt-2">
            <div className="text-xs font-mono text-slate-300 mb-2.5 uppercase tracking-wider font-semibold">
              Supported Automation Ecosystems:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {BRANDS_DATA.map((brand) => (
                <div
                  key={brand.id}
                  className="px-3.5 py-1.5 rounded bg-slate-900/90 border border-slate-700/80 text-xs font-mono font-bold text-slate-100 flex items-center gap-2 shadow-sm"
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: brand.colorHex }} />
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-700/80 text-xs">
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Simotion, S120 & ACOPOS Servo Expertise</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>IEC 61131-3 Compliant Control Logic</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Turnkey Control Panels & FAT Testing</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
