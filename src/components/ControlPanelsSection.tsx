import React, { useState } from 'react';
import { PANEL_TYPES } from '../data/mockData';
import { Sliders, CheckCircle2 } from 'lucide-react';

interface ControlPanelsProps {
  onOpenRFQ?: (panelType?: string) => void;
}

export const ControlPanelsSection: React.FC<ControlPanelsProps> = () => {
  const [activePanelId, setActivePanelId] = useState<string>('plc-panel');

  const selectedPanel = PANEL_TYPES.find((p) => p.id === activePanelId) || PANEL_TYPES[0];

  return (
    <section id="panels" className="py-8 sm:py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[10px] sm:text-xs font-mono mb-2 font-semibold">
            <Sliders className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600" />
            <span>CUSTOM HARDWARE FABRICATION</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Electrical & Drive Control Panels
          </h2>
          <p className="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Custom engineered, hand-wired, and 100% FAT tested electrical panels built strictly according to IEC standards.
          </p>
        </div>

        {/* 1-Line Filter Tab Buttons across ALL screens */}
        <div className="grid grid-cols-4 gap-1 sm:gap-3 mb-5 sm:mb-8">
          {PANEL_TYPES.map((panel) => {
            const isActive = panel.id === activePanelId;
            return (
              <button
                key={panel.id}
                onClick={() => setActivePanelId(panel.id)}
                className={`py-1.5 px-1 sm:py-3 sm:px-3 rounded-lg sm:rounded-xl border text-center transition-all cursor-pointer flex items-center justify-center ${
                  isActive
                    ? 'bg-slate-900 border-amber-500 text-amber-400 shadow-md ring-1 sm:ring-2 ring-amber-500/20'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <span className="font-bold text-[8px] min-[360px]:text-[9px] min-[400px]:text-[10px] sm:text-xs md:text-sm leading-tight text-center">
                  {panel.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Image & Compact Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center bg-white rounded-xl sm:rounded-2xl border border-slate-200 p-4 sm:p-6 lg:p-8 shadow-xs">
          
          {/* Panel Image - Clean & Direct (No dark blue background, no EPLAN / FAT text) */}
          <div className="lg:col-span-6 relative">
            <div className="h-48 sm:h-64 lg:h-72 w-full relative rounded-lg sm:rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100">
              <img
                src={selectedPanel.imageUrl}
                alt={selectedPanel.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          {/* Core Components Only */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            
            <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-2">
              {selectedPanel.name}
            </h3>

            <div>
              <h4 className="text-[11px] sm:text-xs font-mono font-bold text-amber-700 uppercase tracking-wider mb-2.5">
                Core Components
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedPanel.components.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-800 font-medium text-[11px] sm:text-xs shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};