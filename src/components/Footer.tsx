import React from 'react';
import { COMPANY_DETAILS } from '../data/mockData';
import { Activity, PhoneCall, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenRFQ?: () => void;
  setActiveSection: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  return (
    <footer className="bg-[#040912] text-slate-400 border-t border-slate-800 text-xs font-sans">
      
      {/* Top Emergency Engineering Support Banner */}
      <div className="bg-[#081222] border-b border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/*
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            
            <div>
              <h4 className="text-white font-bold text-sm">Need Urgent On-Site Emergency Commissioning or Motion Tuning?</h4>
              <p className="text-slate-400 text-xs">AxtroTech application engineers are ready for rapid plant site deployment.</p>
            </div>
            */}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="px-4 py-2 rounded bg-slate-900 border border-slate-700 text-slate-200 font-mono text-xs hover:border-amber-400 transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="px-4 py-2 rounded bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>CONTACT ENGINEERING</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-white font-sans tracking-tight">AxtroTech</span>
                <span className="text-amber-400 font-mono text-xs font-bold">SOLUTIONS LLP</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase mt-0.5">
                INDUSTRIAL AUTOMATION & MOTION CONTROL
              </span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              "{COMPANY_DETAILS.motto}"
            </p>
            <p className="text-amber-400/80 font-mono text-[11px] italic">
              "{COMPANY_DETAILS.tagline}"
            </p>

            <div className="pt-2 text-slate-400 space-y-1 font-mono text-[11px]">
              <div>HQ: {COMPANY_DETAILS.headquarters}</div>
              <div>Email: {COMPANY_DETAILS.email}</div>
              <div>Support: {COMPANY_DETAILS.supportEmail}</div>
            </div>
          </div>

          {/* Navigation Quick Links */}
          <div>
            <h5 className="text-white font-bold font-mono text-xs uppercase mb-3 text-amber-400">Navigation</h5>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><button onClick={() => setActiveSection('home')} className="hover:text-amber-400">Home</button></li>
              <li><button onClick={() => setActiveSection('about')} className="hover:text-amber-400">About Us</button></li>
              <li><button onClick={() => setActiveSection('products')} className="hover:text-amber-400">Products Catalog</button></li>
              <li><button onClick={() => setActiveSection('home')} className="hover:text-amber-400">Engineering Services</button></li>
            </ul>
          </div>

          {/* Supported Hardware */}
          <div>
            <h5 className="text-white font-bold font-mono text-xs uppercase mb-3 text-teal-400">Automation Platforms</h5>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              <li>Siemens (Simotion, S120, S7-1500)</li>
              <li>B&R (ACOPOS, PPC2100, C70)</li>
              <li>Rockwell (Allen-Bradley Kinetix)</li>
              <li>Schneider (Modicon, Lexium)</li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h5 className="text-white font-bold font-mono text-xs uppercase mb-3 text-amber-400">Industries Served</h5>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Metals & Steel Mills</li>
              <li>Cement & Heavy Materials</li>
              <li>Oil & Gas / Petrochemical</li>
              <li>Food & Beverage Bottling</li>
              <li>Packaging & Converting</li>
              <li>Pharmaceutical Mfg</li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-slate-500 text-[11px] font-mono gap-4">
          <div>
            © {new Date().getFullYear()} AxtroTech Solutions LLP. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <span>Precision Automation. Proven Performance.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};