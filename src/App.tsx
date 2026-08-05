import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BrandMatrix } from './components/BrandMatrix';
import { ControlPanelsSection } from './components/ControlPanelsSection';
import { IIoTTelemetrySection } from './components/IIoTTelemetrySection';
import { IndustriesSection } from './components/IndustriesSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">

      {/* Dark Theme Header - Retained as requested */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Layout - Light Commercial Theme */}
      <main>
        {/* 1. Hero Banner / Company Profile Section */}
        <Hero />

        {/* 2. Engineering Services (PLC Programming, Motion, Panels, IIoT) */}
        <ServicesSection />

        {/* 3. Supported Automation Brand Ecosystems (Siemens, B&R, Rockwell, Schneider) */}
        <BrandMatrix />

        {/* 4. Industries We Serve (Metals, Cement, Oil & Gas, Food & Bev, Packaging, Pharma) */}
        <IndustriesSection />

        {/* 5. Electrical & Drive Control Panels (PLC, VFD, MCC, PCC) */}
        <ControlPanelsSection />

        {/* 6. Industrial IoT & Industry 4.0 Telemetry Stream */}
        <IIoTTelemetrySection />
      </main>

      {/* Dark Theme Footer - Retained as requested */}
      <Footer
        setActiveSection={scrollToSection}
      />

    </div>
  );
}