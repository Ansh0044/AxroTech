import React, { useState } from 'react';
import { Home, Info, Package, Menu, X, PhoneCall } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenRFQ?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'products', label: 'Products', icon: Package },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A1322] border-b border-slate-800 text-slate-100 shadow-xl">
      {/* Utility Bar */}
      <div className="hidden lg:block bg-[#060D18] border-b border-slate-800/80 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-400 font-sans">
          <div className="flex items-center space-x-4">
            <span className="text-amber-400 font-semibold tracking-wide flex items-center gap-1.5">
              {/*
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              PRECISION MOTION CONTROL & INDUSTRIAL AUTOMATION
              */}
              </span>
              
          </div>

          <div className="flex items-center space-x-6 text-xs font-mono">
            <a href={`tel:${COMPANY_DETAILS.phone}`} className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-slate-300 hover:text-white transition-colors">
              {COMPANY_DETAILS.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity - No Square Logo, Only clean typography */}
          <div className="flex flex-col justify-center cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight font-sans">
                AxtroTech Solutions LLP
              </span>
              <span className="text-amber-400 font-bold text-sm tracking-widest font-mono">
                
              </span>
            </div>
            {/*
            <span className="text-[11px] text-slate-300 font-mono tracking-wider uppercase">
              INDUSTRIAL AUTOMATION & MOTION CONTROL
            </span>
            */}
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1322] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium ${
                  isActive ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{link.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
