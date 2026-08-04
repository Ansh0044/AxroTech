import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import { Cpu, Activity, Box, CloudLightning, ArrowRight, CheckCircle2, Wrench, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onOpenRFQ?: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'plc' | 'motion' | 'panels' | 'iiot'>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return Cpu;
      case 'Activity': return Activity;
      case 'Box': return Box;
      case 'CloudLightning': return CloudLightning;
      default: return Wrench;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono mb-3 font-semibold">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>ENGINEERING CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
            Industrial Automation & Motion Engineering Services
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From low-level motion drive timing to enterprise cloud SAP integration, AxtroTech Solutions LLP provides comprehensive, validated engineering services across leading international automation standards.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'motion', label: 'Motion Control & Drives (Specialty)' },
            { id: 'plc', label: 'PLC Programming' },
            { id: 'panels', label: 'Electrical Control Panels' },
            { id: 'iiot', label: 'IIoT & Industry 4.0' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-md text-xs font-mono font-bold transition-all border ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const Icon = getIcon(service.iconName);
            const isMotion = service.category === 'motion';

            return (
              <div
                key={service.id}
                className={`relative rounded-xl bg-white border p-6 flex flex-col justify-between transition-all group hover:shadow-lg ${
                  isMotion
                    ? 'border-amber-400 shadow-amber-500/5 ring-1 ring-amber-400/30'
                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {isMotion && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2 px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-mono font-black uppercase tracking-wider shadow-sm">
                    CORE SPECIALTY
                  </div>
                )}

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 p-2.5 flex items-center justify-center flex-shrink-0 text-amber-600">
                      <Icon className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-amber-700 font-mono mt-0.5 font-semibold">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-6 text-xs text-slate-700">
                    {service.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Hardware Badges */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-mono text-slate-500 mb-2 uppercase font-semibold">Supported Platforms:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.hardwareSupported.map((hw, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200 text-[11px] font-mono font-medium">
                          {hw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-mono font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5"
                  >
                    <span>VIEW DETAILED TECHNICAL SPECIFICATIONS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Detailed Modal Drawer */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white border border-slate-200 rounded-xl max-w-2xl w-full p-6 space-y-6 text-slate-900 relative shadow-2xl">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{activeModalService.title}</h3>
                  <p className="text-xs font-mono text-amber-600 font-semibold mt-1">{activeModalService.subtitle}</p>
                </div>
                <button
                  onClick={() => setActiveModalService(null)}
                  className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <p>{activeModalService.description}</p>
                
                <div>
                  <h4 className="font-mono text-slate-900 font-bold text-xs uppercase mb-2">Key Engineering Capabilities</h4>
                  <ul className="space-y-1.5 list-disc pl-5 text-slate-700">
                    {activeModalService.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <h5 className="font-mono text-xs text-teal-700 font-bold uppercase mb-1">Controllers & Hardware</h5>
                    <ul className="text-xs space-y-1 font-mono text-slate-700">
                      {activeModalService.hardwareSupported.map((h, i) => (
                        <li key={i}>• {h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <h5 className="font-mono text-xs text-amber-700 font-bold uppercase mb-1">Engineering Tools</h5>
                    <ul className="text-xs space-y-1 font-mono text-slate-700">
                      {activeModalService.softwareTools.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-900 font-mono text-xs font-medium">
                  <strong>Value Proposition:</strong> {activeModalService.keyBenefit}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-5 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold"
                >
                  CLOSE
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
