import React from 'react';
import { BRANDS_DATA } from '../data/mockData';

interface BrandMatrixProps {
  onOpenRFQ?: (brandName?: string) => void;
}

export const BrandMatrix: React.FC<BrandMatrixProps> = () => {
  // Official Vector Brand Logos for Supported Automation Leaders
  const renderBrandLogo = (brandId: string) => {
    switch (brandId) {
      case 'siemens':
        return (
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#009999] rounded-xs text-white flex items-center justify-center font-black font-sans text-[10px] sm:text-xs tracking-tighter shadow-2xs flex-shrink-0">
              S
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="font-extrabold text-[#009999] tracking-widest text-[11px] sm:text-xs font-sans leading-none truncate">SIEMENS</span>
              <span className="text-[8px] sm:text-[9px] text-slate-500 font-mono tracking-wider truncate mt-0.5">TIA Portal</span>
            </div>
          </div>
        );
      case 'br':
        return (
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#FF6600] rounded-xs text-white flex items-center justify-center font-black font-mono text-[9px] sm:text-xs shadow-2xs flex-shrink-0">
              B&R
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="font-black text-[#FF6600] tracking-wider text-[11px] sm:text-xs font-sans leading-none truncate">B&R</span>
              <span className="text-[8px] sm:text-[9px] text-slate-500 font-mono tracking-wider truncate mt-0.5">ABB Group</span>
            </div>
          </div>
        );
      case 'rockwell':
        return (
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#CD2027] rounded-xs text-white flex items-center justify-center font-extrabold font-sans text-[9px] sm:text-xs shadow-2xs flex-shrink-0">
              AB
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="font-extrabold text-[#CD2027] tracking-tight text-[10px] sm:text-xs font-sans leading-none truncate">Allen-Bradley</span>
              <span className="text-[8px] sm:text-[9px] text-slate-500 font-mono tracking-wider truncate mt-0.5">Rockwell</span>
            </div>
          </div>
        );
      case 'schneider':
        return (
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#009F4D] rounded-xs text-white flex items-center justify-center font-black font-sans text-[9px] sm:text-xs shadow-2xs flex-shrink-0">
              SE
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="font-bold text-[#009F4D] tracking-tight text-[10px] sm:text-xs font-sans leading-none truncate">Schneider</span>
              <span className="text-[8px] sm:text-[9px] text-slate-500 font-mono tracking-wider truncate mt-0.5">Electric</span>
            </div>
          </div>
        );
      case 'pilz':
        return (
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#F2AC00] rounded-xs text-slate-950 flex items-center justify-center font-black font-sans text-[8px] sm:text-[10px] shadow-2xs border border-yellow-600/30 flex-shrink-0">
              PILZ
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="font-black text-slate-900 tracking-wider text-[11px] sm:text-xs font-sans leading-none truncate">PILZ</span>
              <span className="text-[8px] sm:text-[9px] text-slate-500 font-mono tracking-wider truncate mt-0.5">Safety System</span>
            </div>
          </div>
        );
      case 'keyence':
        return (
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#E60012] rounded-xs text-white flex items-center justify-center font-black italic font-sans text-[10px] sm:text-xs shadow-2xs flex-shrink-0">
              K
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="font-black text-[#E60012] italic tracking-tight text-[10px] sm:text-xs font-sans leading-none truncate">KEYENCE</span>
              <span className="text-[8px] sm:text-[9px] text-slate-500 font-mono tracking-wider truncate mt-0.5">PLC & Vision</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="brands" className="py-8 sm:py-16 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <h2 className="text-lg sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
            Supported Industrial Automation Brands
          </h2>
        </div>

        {/* Brand Cards Grid with Centered Content on Mobile & Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {BRANDS_DATA.map((brand) => (
            <div
              key={brand.id}
              className="p-2.5 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-100/80 hover:border-slate-300 transition-all flex flex-col items-center text-center justify-between shadow-2xs w-full"
            >
              <div className="w-full flex justify-center">
                {renderBrandLogo(brand.id)}
              </div>

              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-2 sm:mt-2.5 truncate w-full text-center">
                {brand.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};