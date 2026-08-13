import React from 'react';
import { COMPANY_DETAILS } from '../data/mockData';

interface AboutUsSectionProps {
  onOpenRFQ?: (subject?: string) => void;
  onNavigateToProducts?: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = () => {
  const directorInfo = {
    name: 'SHAVEZ KHAN',
    title: 'Director – Technical',
    experience: '14+ Years Industry Experience (Ex-Siemens, Ex-B&R)',
    credentials: [
      'Ex-Head Technical Support (North India), Siemens Motion Controls',
      'Certified Siemens SIMOTION & SINAMICS S120 Specialist',
      'B&R Automation Studio & ACOPOS Motion Expert',
    ],
    summary:
      "As Director – Technical at AxtroTech Solutions LLP, Shavez Khan directs the company's engineering roadmap and technological excellence through innovative automation & motion control architectures that address the rigorous demands of modern industrial plants. With an uncompromising dedication to measurable operational ROI, he ensures robust modular software design, sub-millisecond motion synchronization, rapid site commissioning, and enduring client partnerships.",
    priorExperience:
      'Prior to co-founding AxtroTech Solutions, Mr. Khan served as Head – Technical Support for Northern India in the Motion Controls Products Division at Siemens. In this role, he provided critical architectural guidance to Siemens direct sales teams, key OEMs, and channel partners for high-complexity motion control and automation rollouts across heavy metals, high-speed converting, and process plants.',
    reputation:
      'Over the course of his 14+ year industrial engineering career, Mr. Khan has earned an esteemed reputation across the Indian manufacturing corridor for exceptional technical rigor, meticulous attention to detail, and rapid fault diagnosis in critical uptime scenarios.',
    specialties: [
      'Multi-Axis Servo Synchronization (Electronic Camming, Flying Shear & Rotary Knives)',
      'Siemens SIMOTION D4x5-2 & SINAMICS S120 Multi-Bay Drive Lineups',
      'B&R Automation Studio, ACOPOS Multi & POWERLINK Real-Time Networks',
      'Legacy Automation Migration (S7-300 / S7-400 to TIA Portal S7-1500 & Safety PLCs)',
    ],
  };

  const applications = [
    {
      title: 'Tube Mills & High-Speed Cutting Lines',
      desc: 'Flying shear and cut-of-carriage synchronized cut-to-length loops with high-speed electronic cam profiles.',
    },
    {
      title: 'Cut of Carriage (COC) Systems',
      desc: 'High-dynamics acceleration curves with sub-millisecond positioning accuracy and motion synchronization.',
    },
    {
      title: 'Slitting Machines & Rotary Shears',
      desc: 'Tension-controlled continuous coil splitting with precise edge guide and web synchronization.',
    },
    {
      title: 'Winder - Rewinder & Tension Loops',
      desc: 'Closed-loop dancer and load-cell web handling with taper tension compensation and diameter calculation.',
    },
    {
      title: 'Labelling & High-Speed Packaging',
      desc: 'Optical registration mark capture with microsecond hardware interrupt position latching.',
    },
    {
      title: 'Converting, Printing & Pouching',
      desc: 'Multi-axis electronic line shafting replacing mechanical gearboxes and traditional shafts.',
    },
    {
      title: 'Plastic & Aluminum Extrusion Lines',
      desc: 'Synchronized puller-cutter drives and melt pressure closed-loop regulation.',
    },
    {
      title: 'Automated Assembly & Robotic Cells',
      desc: 'Coordinated multi-station pick and place systems integrated with safety PLCs.',
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-amber-400 selection:text-slate-950">
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14">

        {/* 1. COMPANY HEADER */}
        <section className="bg-white rounded-3xl p-7 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-200/80 relative overflow-hidden">
          {/* Subtle Corner Accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-100/40 via-transparent to-transparent pointer-events-none rounded-tr-3xl" />
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-sans">
                AxtroTech Solutions LLP
              </h1>
            </div>
            
            <p className="text-sm sm:text-base font-semibold text-amber-700 font-mono tracking-wide">
              Precision Motion Control & Industrial Automation Engineering
            </p>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl pt-2">
              AxtroTech Solutions LLP is an industrial automation and precision motion control engineering firm. Directed by Tier-1 veterans with extensive tenure at Siemens and B&R (ABB), we engineer high-performance drive systems, custom PLC architectures, and turnkey electrical control panels for demanding manufacturing plants.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8 mt-8 border-t border-slate-100">
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-amber-50/50 to-slate-50 border border-amber-200/50 text-center transition-all hover:shadow-xs">
              <div className="text-2xl sm:text-3xl font-black text-amber-700 font-mono">14+ Yrs</div>
              <div className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1 uppercase tracking-wide">Industry Experience</div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-center transition-all hover:shadow-xs">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">350+</div>
              <div className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1 uppercase tracking-wide">Axes Commissioned</div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-center transition-all hover:shadow-xs">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">120+</div>
              <div className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1 uppercase tracking-wide">Turnkey Projects</div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-center transition-all hover:shadow-xs">
              <div className="text-2xl sm:text-3xl font-black text-emerald-700 font-mono">99.95%</div>
              <div className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1 uppercase tracking-wide">Uptime Standard</div>
            </div>
          </div>
        </section>

        {/* 2. TECHNICAL LEADERSHIP - CENTER ALIGNED & BOLD */}
        <section className="bg-white rounded-3xl p-7 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-200/80 relative overflow-hidden space-y-8">
          {/* Centered Director Name & Title */}
          <div className="text-center space-y-3 border-b border-slate-100 pb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-sans">
              {directorInfo.name}
            </h2>
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm font-medium text-slate-800">
              <span className="text-amber-700 font-bold font-mono uppercase tracking-wider">{directorInfo.title}</span>
              <span className="text-slate-300">•</span>
              <span>{directorInfo.experience}</span>
            </div>
          </div>

          {/* Credentials Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {directorInfo.credentials.map((cred, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-xs font-semibold text-slate-800 text-center leading-snug hover:bg-amber-50/30 hover:border-amber-300 transition-all flex items-center justify-center min-h-[64px]"
              >
                {cred}
              </div>
            ))}
          </div>

          {/* Narrative Overview */}
          <div className="space-y-6 pt-2">
            <div className="space-y-3 p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/70">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                Background & Domain Expertise
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {directorInfo.priorExperience}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {directorInfo.summary}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                Core Competencies
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
                {directorInfo.specialties.map((item, sIdx) => (
                  <li
                    key={sIdx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 hover:bg-white hover:border-amber-300 hover:shadow-xs transition-all"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 border-l-4 border-l-amber-500">
              <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed font-serif">
                "{directorInfo.reputation}"
              </p>
            </div>
          </div>
        </section>

        {/* 3. APPLICATIONS */}
        <section className="bg-white rounded-3xl p-7 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-200/80 space-y-6">
          <div className="border-b border-slate-100 pb-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Motion Control & Machine Applications
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Proven engineering implementations across high-speed packaging, converting, metal processing, and extrusion plants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2 hover:bg-white hover:border-amber-400 hover:shadow-xs transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform shrink-0" />
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-amber-800 transition-colors">
                    {app.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pl-4.5">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. OFFICE & CONTACT INFORMATION */}
        <section className="bg-white rounded-3xl p-7 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-200/80 space-y-6">
          <div className="border-b border-slate-100 pb-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Office & Facilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Registered office and operations base in Faridabad, Haryana.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-5 text-xs sm:text-sm text-slate-700">
            <div>
              <span className="font-bold text-slate-900 block text-xs uppercase font-mono tracking-wider text-slate-500 mb-1.5">
                Registered Address
              </span>
              <span className="text-slate-800 font-medium leading-relaxed block text-sm sm:text-base">
                {COMPANY_DETAILS.address}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500 uppercase font-bold">Phone</span>
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="text-amber-700 font-mono font-bold text-sm sm:text-base hover:text-amber-800 transition-colors"
                >
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500 uppercase font-bold">Email</span>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-amber-700 font-mono font-bold text-sm sm:text-base hover:text-amber-800 transition-colors"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
