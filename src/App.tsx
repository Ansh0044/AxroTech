import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BrandMatrix } from './components/BrandMatrix';
import { ControlPanelsSection } from './components/ControlPanelsSection';
import { IIoTTelemetrySection } from './components/IIoTTelemetrySection';
import { IndustriesSection } from './components/IndustriesSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ProductsSection } from './components/ProductsSection';
import { Footer } from './components/Footer';
import { RFQEstimatorModal } from './components/RFQEstimatorModal';
import { Calculator } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'products'>('home');
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [rfqSubject, setRfqSubject] = useState<string | undefined>(undefined);

  const handleOpenRFQ = (subject?: string) => {
  const phoneNumber = '919015660504';
  const message = subject
    ? `Hello AxtroTech Solutions, I would like to request an official quote regarding: ${subject}`
    : `Hello AxtroTech Solutions, I would like to request an official quote and project estimation.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

  const handleNavChange = (section: string) => {
    if (section === 'about' || section === 'about-us') {
      setActiveSection('about');
    } else if (section === 'products') {
      setActiveSection('products');
    } else {
      setActiveSection('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col justify-between">

      {/* Dark Theme Header with Home, About Us, Products */}
      <Header
        activeSection={activeSection}
        setActiveSection={handleNavChange}
        onOpenRFQ={() => handleOpenRFQ()}
      />

      {/* Main Content View Switcher */}
      <main className="flex-grow">
        {activeSection === 'home' && (
          <>
            {/* 1. Hero Banner */}
            <Hero onOpenRFQ={() => handleOpenRFQ('General Engineering Consultation')} />

            {/* Quick Feature Banner leading to About Us & Products */}
            {/*
            <div className="bg-slate-950 border-y border-slate-800 py-6 px-4">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center md:text-left">
                  <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                    Siemens & B&R Certified Motion Experts
                  </span>
                  <h3 className="text-white font-bold text-base sm:text-lg">
                    Directed by Ex-Siemens & Ex-B&R Technical Leadership (14+ Yrs Exp)
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleNavChange('about')}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-400 font-bold text-xs font-mono transition-colors"
                  >
                    Meet Technical Director →
                  </button>
                  <button
                    onClick={() => handleNavChange('products')}
                    className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono transition-colors"
                  >
                    View Hardware Catalog →
                  </button>
                </div>
              </div>
            </div>
            */}

            {/* 2. Engineering Services */}
            <ServicesSection onOpenRFQ={(svc) => handleOpenRFQ(svc)} />

            {/* 3. Supported Automation Brand Ecosystems */}
            <BrandMatrix onOpenRFQ={(brand) => handleOpenRFQ(brand)} />

            {/* 4. Industries We Serve */}
            <IndustriesSection />

            {/* 5. Electrical & Drive Control Panels */}
            <ControlPanelsSection onOpenRFQ={() => handleOpenRFQ('Control Panels')} />

            {/* 6. Industrial IoT & Industry 4.0 Telemetry Stream */}
            <IIoTTelemetrySection />
          </>
        )}

        {activeSection === 'about' && (
          <AboutUsSection
            onOpenRFQ={() => handleOpenRFQ('Technical Director Consultation')}
            onNavigateToProducts={() => handleNavChange('products')}
          />
        )}

        {activeSection === 'products' && (
          <ProductsSection
            onOpenRFQ={(prodName) => handleOpenRFQ(prodName)}
          />
        )}
      </main>

      {/* Floating RFQ Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenRFQ('Quick Estimate')}
          className="px-4 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-2xl flex items-center gap-2 border-2 border-slate-950 transition-all hover:scale-105"
        >
          <Calculator className="w-4 h-4" />
          <span className="hidden sm:inline">Request Quote</span>
        </button>
      </div>

      {/* Dark Theme Footer */}
      <Footer
        setActiveSection={handleNavChange}
        onOpenRFQ={() => handleOpenRFQ()}
      />

      {/* Interactive RFQ Estimator Modal */}
      <RFQEstimatorModal
        isOpen={isRFQOpen}
        onClose={() => setIsRFQOpen(false)}
        initialServiceOrBrand={rfqSubject}
      />

    </div>
  );
}