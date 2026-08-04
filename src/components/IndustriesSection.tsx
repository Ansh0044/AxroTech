import React from 'react';
import { INDUSTRIES_DATA } from '../data/mockData';
import { ShieldCheck, Hammer, Layers, Flame, Utensils, Package, Factory } from 'lucide-react';

interface IndustriesSectionProps {
  onOpenRFQ?: (industryName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = () => {
  const getIndustryIcon = (name: string) => {
    switch (name) {
      case 'Hammer': return Hammer;
      case 'Layers': return Layers;
      case 'Flame': return Flame;
      case 'Utensils': return Utensils;
      case 'Package': return Package;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="industries" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono mb-3 font-semibold">
            <Factory className="w-3.5 h-3.5 text-amber-600" />
            <span>SECTOR EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Industries We Serve
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Tailored industrial automation and motion control solutions designed to withstand extreme thermal, environmental, and high-speed operational requirements.
          </p>
        </div>

        {/* 6 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = getIndustryIcon(ind.icon);

            return (
              <div
                key={ind.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-amber-400 p-6 flex flex-col justify-between transition-all group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 p-2.5 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                      <Icon className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                        {ind.name}
                      </h3>
                      <p className="text-[11px] font-mono text-amber-700 font-semibold leading-tight">
                        {ind.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  {/* Applications */}
                  <div className="space-y-1.5 mb-6">
                    <div className="text-[11px] font-mono text-slate-500 uppercase font-bold">Key Applications:</div>
                    <ul className="text-xs space-y-1.5 text-slate-700">
                      {ind.keyApplications.map((app, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                    {ind.stats.map((st, i) => (
                      <div key={i} className="p-2 bg-slate-50 rounded border border-slate-200">
                        <div className="text-slate-500 text-[10px]">{st.label}</div>
                        <div className="text-slate-900 font-bold">{st.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
