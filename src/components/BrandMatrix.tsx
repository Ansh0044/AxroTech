import React, { useState } from 'react';
import { BRANDS_DATA } from '../data/mockData';
import { Layers, CheckCircle2, Cpu, Activity, Wrench, Shield } from 'lucide-react';

interface BrandMatrixProps {
  onOpenRFQ?: (brandName?: string) => void;
}

export const BrandMatrix: React.FC<BrandMatrixProps> = () => {
  const [activeBrandId, setActiveBrandId] = useState<string>('siemens');

  const selectedBrand = BRANDS_DATA.find((b) => b.id === activeBrandId) || BRANDS_DATA[0];

  // Vector / Styled Brand Logos for the 4 Makes
  const renderBrandLogo = (brandId: string) => {
    switch (brandId) {
      case 'siemens':
        return (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#009999] rounded text-white flex items-center justify-center font-black font-sans text-xs tracking-tighter">
              S
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-[#009999] tracking-widest text-base font-sans leading-none">SIEMENS</span>
              <span className="text-[9px] text-slate-500 font-mono tracking-wider">Simotion & S7-1500</span>
            </div>
          </div>
        );
      case 'br':
        return (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#FF6600] rounded text-white flex items-center justify-center font-black font-mono text-xs">
              B&R
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-[#FF6600] tracking-wider text-base font-sans leading-none">B&R</span>
              <span className="text-[9px] text-slate-500 font-mono tracking-wider">PERFECTION IN AUTOMATION</span>
            </div>
          </div>
        );
      case 'rockwell':
        return (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#CD2027] rounded text-white flex items-center justify-center font-extrabold font-sans text-xs">
              AB
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-[#CD2027] tracking-tight text-sm font-sans leading-none">Allen-Bradley</span>
              <span className="text-[9px] text-slate-500 font-mono tracking-wider">Rockwell Automation</span>
            </div>
          </div>
        );
      case 'schneider':
        return (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#3DCD58] rounded text-slate-950 flex items-center justify-center font-black font-sans text-xs">
              SE
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-[#208038] tracking-tight text-sm font-sans leading-none">Schneider Electric</span>
              <span className="text-[9px] text-slate-500 font-mono tracking-wider">Modicon & Lexium</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="brands" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono mb-3 font-semibold">
            <Layers className="w-3.5 h-3.5 text-teal-600" />
            <span>GLOBAL HARDWARE PLATFORMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Supported Industrial Automation Brands
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            AxtroTech Solutions LLP brings multi-platform engineering expertise across international automation leaders. We eliminate single-vendor lock-in by supporting Siemens, B&R, Rockwell, and Schneider hardware ecosystem integration.
          </p>
        </div>

        {/* Brand Selector Cards with Manufacturer Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {BRANDS_DATA.map((brand) => {
            const isActive = brand.id === activeBrandId;
            return (
              <button
                key={brand.id}
                onClick={() => setActiveBrandId(brand.id)}
                className={`p-5 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between shadow-sm cursor-pointer ${
                  isActive
                    ? 'bg-slate-50 border-amber-500 ring-2 ring-amber-500/20 shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="mb-2">
                  {renderBrandLogo(brand.id)}
                </div>

                <div className="text-xs font-semibold text-slate-600 mt-2">{brand.name}</div>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Brand Deep Dive Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{selectedBrand.name}</h3>
                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  FULL ENGINEERING SUPPORT
                </span>
              </div>
              <p className="text-slate-600 text-sm mt-2 max-w-3xl">
                {selectedBrand.description}
              </p>
            </div>
          </div>

          {/* Grid Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            
            {/* PLC Controllers */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700">
                <Cpu className="w-4 h-4 text-amber-600" />
                <span>PLC CONTROLLERS</span>
              </div>
              <ul className="text-xs space-y-2 text-slate-700 font-mono">
                {selectedBrand.plcModels.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servo Drives & VFDs */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-teal-700">
                <Activity className="w-4 h-4 text-teal-600" />
                <span>MOTION DRIVES & VFDS</span>
              </div>
              <ul className="text-xs space-y-2 text-slate-700 font-mono">
                {selectedBrand.drivesSupported.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Engineering Tools */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900">
                <Wrench className="w-4 h-4 text-amber-600" />
                <span>SOFTWARE SUITES</span>
              </div>
              <ul className="text-xs space-y-2 text-slate-700 font-mono">
                {selectedBrand.software.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Motion Capabilities */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>MOTION CAPABILITIES</span>
              </div>
              <ul className="text-xs space-y-2 text-slate-700 font-mono">
                {selectedBrand.motionCapabilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
