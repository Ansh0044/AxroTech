import React from 'react';
import { Award, CheckCircle2, Cpu, FileCode2, Layers, ShieldCheck, Wrench, Terminal, ArrowRight } from 'lucide-react';

interface AboutUsSectionProps {
  onOpenRFQ?: () => void;
  onNavigateToProducts?: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onOpenRFQ, onNavigateToProducts }) => {
  const directorInfo = {
    name: 'SHAVEZ KHAN',
    title: 'Director – Technical',
    experience: '14+ Years Ex-Siemens, Ex-B&R (ABB)',
    summary:
      "As Director – Technical at AxtroTech Solutions LLP, Shavez Khan is committed to driving the company's growth and engineering excellence through innovative automation & motion control solutions that address the evolving requirements of industrial clients. With a strong passion for leveraging technology to deliver measurable business outcomes, he emphasizes exceptional engineering support, rapid site commissioning, and long-term client partnerships.",
    priorExperience:
      'Prior to joining AxtroTech Solutions, Mr. Khan served as Head – Technical Support for Northern India in the Motion Controls Products Division at Siemens. In this role, he provided critical support to Siemens sales teams and channel partners for complex automation and motion control projects across diverse industrial sectors. Leveraging his deep technical expertise, he successfully delivered numerous multi-axis servo and drive projects that consistently met and often exceeded client performance expectations.',
    reputation:
      'Over the course of his 14+ year career, Mr. Khan has built a solid reputation for his technical expertise, meticulous attention to detail, and robust technical abilities. Known for his capability to manage complex automation projects and lead cross-functional engineering teams, he ensures that every system delivered by AxtroTech Solutions is executed on time, within budget, and with the highest quality standards.',
    coreStrengths: {
      platforms: [
        {
          category: 'PLC & CNC Systems',
          items: ['Siemens S7-1500', 'Siemens S7-1200', 'Siemens S7-300 / 400', 'Siemens C70', 'B&R PPC2100', 'B&R X20 IOs'],
        },
        {
          category: 'Drive Systems',
          items: ['Siemens SIMOTION', 'SINAMICS S120', 'SINAMICS G120', 'SINAMICS S200', 'SINAMICS V90', 'B&R ACOPOS'],
        },
        {
          category: 'Automation Software & IDEs',
          items: ['Siemens TIA Portal', 'Simatic Manager', 'SIMOTION Scout', 'B&R Automation Studio'],
        },
      ],
      applications: [
        'Tube Mills & High-Speed Cutting Lines',
        'Cut of Carriage (COC) Systems',
        'Slitting Machines & Shear Controls',
        'Winder - Rewinder & Tension Control Loops',
        'Labelling & High-Speed Packaging Machines',
        'Converting, Printing & Pouching Machinery',
        'Plastic & Aluminum Extrusion Lines',
        'Automated Assembly Lines & Robotic Cells',
      ],
    },
  };

  return (
    <div className="bg-white text-slate-700 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Header / Banner */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-black">
            About <span className="text-400">AxtroTech Solutions</span>
          </h1>
          <p className="text-black text-base sm:text-lg leading-relaxed">
            Delivering high-precision motion control, custom PLC architectures, and turnkey industrial automation. Directed by industry veterans with deep expertise in Siemens and B&R automation platforms.
          </p>
        </div>

        {/* Director Profile Section (Strictly Info from PDF - No Photo, No VA mention) */}
<div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
  {/* Changed flex-col md:flex-row to just flex-col, and added items-center text-center */}
  <div className="border-b border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col items-center text-center justify-center gap-6">
    {/* Changed space-y-2 to flex flex-col items-center space-y-2 */}
    <div className="flex flex-col items-center space-y-2">
      <h2 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
        {directorInfo.name}
      </h2>
      {/* Changed flex-wrap to justify-center to keep the row badges centered */}
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-amber-400 font-bold font-mono">{directorInfo.title}</span>
        <span className="text-slate-600">•</span>
        <span className="text-white font-mono font-medium flex items-center gap-1">
          <Award className="w-4 h-4" />
          {directorInfo.experience}
        </span>
      </div>
    </div>

            {/*
            {onOpenRFQ && (
              <button
                onClick={onOpenRFQ}
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 self-start md:self-auto shadow-lg shadow-amber-500/10"
              >
                <span>Consult Technical Director</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )} */}
          </div> 

          <div className="p-6 sm:p-8 space-y-8">
            {/* Overview & Prior Background */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-2 space-y-5 text-slate-300 text-sm leading-relaxed">
                <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-5 space-y-3">
                  <h3 className="text-white font-bold text-base flex items-center gap-2 font-sans">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Director's Vision & Commitment
                  </h3>
                  <p>{directorInfo.summary}</p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-5 space-y-3">
                  <h3 className="text-white font-bold text-base flex items-center gap-2 font-sans">
                    <Cpu className="w-4 h-4 text-teal-400" />
                    Industrial Track Record & Background
                  </h3>
                  <p>{directorInfo.priorExperience}</p>
                  <p className="pt-2 text-slate-400 italic border-t border-slate-800/60 mt-2">
                    {directorInfo.reputation}
                  </p>
                </div>
              </div>

              {/* Quick Key Highlights Card */}
              <div className="bg-slate-900/80 border border-amber-500/20 rounded-xl p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    Leadership Key Points
                  </div>

                  <ul className="space-y-3 text-xs text-slate-300 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span><strong>14+ Years</strong> of Tier-1 motion control experience at Siemens and B&R (ABB).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>Ex-Head of Technical Support for Northern India in Siemens Motion Controls Division.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>Specialist in multi-axis servo positioning, flying shears, tube mills, and electronic camming.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>Proven track record managing complex projects, cross-functional teams, and zero-downtime commissioning.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  Directing engineering projects across Metals, Cement, Oil & Gas, Packaging, and Converting plants.
                </div>
              </div>

            </div>

            {/* Core Area of Strength Grid */}
            <div className="pt-6 border-t border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white font-sans tracking-tight flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-amber-400" />
                    Core Areas of Technical Strength
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Ex-Siemens & Ex-B&R Hardware, Drive Systems, Software, and Industrial Motion Applications
                  </p>
                </div>
              </div>

              {/* Hardware & Software Platforms */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {directorInfo.coreStrengths.platforms.map((group, idx) => (
                  <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-3 hover:border-slate-700 transition-all">
                    <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" />
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item, itemIdx) => (
                        <span key={itemIdx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Motion Control Applications */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-4">
                <div className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                  <FileCode2 className="w-4 h-4" />
                  Motion Control Applications & Solutions Portfolio
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {directorInfo.coreStrengths.applications.map((app, appIdx) => (
                    <div key={appIdx} className="bg-slate-950 border border-slate-800/80 rounded-lg p-3 flex items-center gap-3 hover:border-amber-500/40 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                      <span className="text-xs font-medium text-slate-200">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Company Engineering Approach */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h3 className="text-2xl font-black text-white font-sans tracking-tight">
              Why Partner with AxtroTech Solutions?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We bridge the gap between complex multi-vendor hardware and flawless machine execution. Our team provides end-to-end electrical design, control panel fabrication, drive parameterization, PLC programming, and field startup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-sm">OEM & Machine Builder Support</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Turnkey software architecture and electrical engineering for high-speed automated machinery with sub-millisecond motion sync.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-2">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-sm">Legacy Migration & Retrofits</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Upgrading obsolete Simatic S7-300/400 and legacy DC drives to modern Siemens S7-1500 and SINAMICS S120 drives without production downtime.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-sm">100% Quality & Testing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rigorous Factory Acceptance Testing (FAT), hardware loop simulation, and on-site commissioning by experienced field engineers.
              </p>
            </div>
          </div>

          {onNavigateToProducts && (
            <div className="pt-4 flex justify-center">
              <button
                onClick={onNavigateToProducts}
                className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all border border-slate-700 flex items-center gap-2"
              >
                <span>Explore Our Products & Hardware Catalog</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};