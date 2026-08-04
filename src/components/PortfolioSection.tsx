import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { PortfolioProject } from '../types';
import { FileText, ArrowRight, CheckCircle2, Cpu, Activity, MapPin, Calendar, Tag, Filter } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenRFQ: (projectTitle?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenRFQ }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const industries = ['All', 'Metals', 'Cement', 'Oil & Gas', 'Food & Beverage', 'Packaging', 'Pharmaceutical'];
  const brands = ['All', 'Siemens', 'B&R', 'Rockwell', 'Schneider'];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const matchesIndustry = selectedIndustry === 'All' || proj.industry === selectedIndustry;
    const matchesBrand = selectedBrand === 'All' || proj.brand === selectedBrand;
    return matchesIndustry && matchesBrand;
  });

  return (
    <section id="portfolio" className="py-20 bg-[#08101D] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>PROVEN INDUSTRIAL TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
            Past Automation Projects Portfolio
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore commissioning case studies demonstrating our expertise in multi-axis motion control, custom Siemens/B&R PLC programming, and high-speed industrial machinery.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            
            {/* Industry Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1 font-bold uppercase">
                <Filter className="w-3.5 h-3.5 text-amber-400" /> Industry:
              </span>
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all border ${
                    selectedIndustry === ind
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>

            {/* Brand Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 font-bold uppercase">Brand:</span>
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all border ${
                    selectedBrand === b
                      ? 'bg-teal-400 text-slate-950 font-bold border-teal-300'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/90 rounded-xl border border-slate-800 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all group hover:shadow-xl"
            >
              <div>
                {/* Header Tags */}
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold">
                    {project.industry}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 font-bold">
                    {project.brand} Platform
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Key Metrics */}
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800/80 mb-4 space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Motion Servo Axes:</span>
                    <span className="text-amber-400 font-bold">{project.featuredMotionAxisCount} Axes Synchronized</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Primary Controller:</span>
                    <span className="text-teal-400 truncate max-w-[170px]">{project.hardwareUsed.plc[0]}</span>
                  </div>
                </div>

                {/* Results Bullet */}
                <div className="space-y-1 mb-4 text-xs text-slate-300">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-emerald-300">{project.results[0]}</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <span>CASE STUDY DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenRFQ(project.title)}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono"
                >
                  SIMILAR QUOTE
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Case Study Drawer */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#0A1322] border border-slate-700 rounded-xl max-w-3xl w-full p-6 lg:p-8 space-y-6 text-white relative shadow-2xl">
              
              <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-xs font-mono text-amber-400 font-bold">
                    <span>{activeModalProject.industry.toUpperCase()} SECTOR</span>
                    <span>•</span>
                    <span>{activeModalProject.brand} PLATFORM</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{activeModalProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-950/30 border border-red-500/30 rounded-lg space-y-2">
                  <h4 className="text-xs font-mono font-bold text-red-400 uppercase">The Industrial Challenge</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{activeModalProject.challenge}</p>
                </div>

                <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-lg space-y-2">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase">AxtroTech Engineering Solution</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{activeModalProject.solution}</p>
                </div>
              </div>

              {/* Hardware List */}
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 space-y-3">
                <h4 className="text-xs font-mono font-bold text-amber-400 uppercase">Hardware & Software Ecosystem</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block mb-1">PLC / Controller:</span>
                    <span className="text-white font-bold">{activeModalProject.hardwareUsed.plc.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1">Servo Drives & VFDs:</span>
                    <span className="text-teal-400 font-bold">{activeModalProject.hardwareUsed.drives.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1">HMI / SCADA:</span>
                    <span className="text-amber-300 font-bold">{activeModalProject.hardwareUsed.hmiScada.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">Measured Outcomes</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeModalProject.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded bg-slate-800 text-slate-300 text-xs font-mono"
                >
                  CLOSE
                </button>
                <button
                  onClick={() => {
                    const title = activeModalProject.title;
                    setActiveModalProject(null);
                    onOpenRFQ(title);
                  }}
                  className="px-5 py-2 rounded bg-amber-500 text-slate-950 font-bold text-xs"
                >
                  REQUEST PROJECT INQUIRY
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
