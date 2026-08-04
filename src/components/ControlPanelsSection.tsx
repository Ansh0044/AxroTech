import React, { useState } from 'react';
import { PANEL_TYPES } from '../data/mockData';
import { Sliders, CheckCircle2 } from 'lucide-react';
import panelRackImg from '../assets/images/servo_drive_rack_1785860248984.jpg';

interface ControlPanelsProps {
  onOpenRFQ?: (panelType?: string) => void;
}

export const ControlPanelsSection: React.FC<ControlPanelsProps> = () => {
  const [activePanelId, setActivePanelId] = useState<string>('plc-panel');

  const selectedPanel = PANEL_TYPES.find((p) => p.id === activePanelId) || PANEL_TYPES[0];

  return (
    <section id="panels" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono mb-3 font-semibold">
            <Sliders className="w-3.5 h-3.5 text-amber-600" />
            <span>CUSTOM HARDWARE FABRICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Electrical & Drive Control Panels
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Custom engineered, hand-wired, and 100% FAT tested electrical panels built strictly according to IEC standards, complete with EPLAN drawing documentation.
          </p>
        </div>

        {/* Panel Tabs - No AXT Codes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {PANEL_TYPES.map((panel) => {
            const isActive = panel.id === activePanelId;
            return (
              <button
                key={panel.id}
                onClick={() => setActivePanelId(panel.id)}
                className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white border-amber-500 text-slate-900 shadow-md ring-2 ring-amber-500/20'
                    : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <div className="font-extrabold text-sm sm:text-base text-slate-900">{panel.name}</div>
              </button>
            );
          })}
        </div>

        {/* CAD Layout & Panel Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
          
          {/* Left Panel CAD Wireframe / Photo Graphic - No Hover Flicker */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 p-3 shadow-sm">
              
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2 border-b border-slate-800 pb-2">
                <span>EPLAN CAD PANEL LAYOUT</span>
                <span className="text-emerald-400 font-bold">100% FAT TESTED</span>
              </div>

              <div className="aspect-square relative rounded bg-slate-950 border border-slate-800 flex items-center justify-center p-2">
                
                <img
                  src={panelRackImg}
                  alt="Industrial Panel Wiring Rack"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded shadow"
                />

                {/* Hotspot Badges */}
                <div className="absolute top-6 left-6 px-2 py-1 rounded bg-amber-500 text-slate-950 font-mono text-[10px] font-bold shadow">
                  MAIN PLC CPU
                </div>
                <div className="absolute top-1/2 right-6 px-2 py-1 rounded bg-teal-400 text-slate-950 font-mono text-[10px] font-bold shadow">
                  DRIVE RACK
                </div>
                <div className="absolute bottom-6 left-12 px-2 py-1 rounded bg-emerald-400 text-slate-950 font-mono text-[10px] font-bold shadow">
                  TERMINAL BLOCKS
                </div>

              </div>

            </div>
          </div>

          {/* Right Panel Technical Spec Breakdown - No AXT Heading */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="text-xs font-mono text-amber-700 font-bold uppercase tracking-wider mb-1">
                PANEL SPECIFICATIONS
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {selectedPanel.name}
              </h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {selectedPanel.description}
              </p>
            </div>

            {/* Enclosure & Certification */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 block mb-1">ENCLOSURE SPECIFICATION:</span>
                <span className="text-amber-700 font-bold">{selectedPanel.enclosure}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 block mb-1 font-sans">QUALITY TESTING MANDATE:</span>
                <span className="text-emerald-700 font-bold">{selectedPanel.testing}</span>
              </div>
            </div>

            {/* Component List */}
            <div>
              <h4 className="text-xs font-mono font-bold text-slate-500 uppercase mb-3">
                Included High-Grade Components:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedPanel.components.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded border border-slate-200 text-slate-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
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
