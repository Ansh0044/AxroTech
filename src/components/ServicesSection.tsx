import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import ipcImg from '../assets/images/istockphoto-1139588963-1024x1024.jpg';
import ioImg from '../assets/images/industrial_io_modules_1785947371906.jpg';
import plcImg from '../assets/images/gettyimages-1459535120-170667a.jpg'
import motionImg from '../assets/images/industrial_servo_motor_1785947390638.jpg';
import automationImg from '../assets/images/automation_software_blocks_1785947410468.jpg';

interface ServicesSectionProps {
  onOpenRFQ?: (serviceId?: string) => void;
}

interface ServiceCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  serviceRef: ServiceItem;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Map the 4 core company automation services using the studio image layout
  const cards: ServiceCardData[] = [
    {
      id: 'plc-programming',
      title: 'PLC Programming Services',
      subtitle: 'Siemens, Rockwell, B&R, Schneider',
      description: 'Custom PLC software engineering, legacy PLC migration, safety programming, and IEC 61131-3 logic architecture.',
      image: ioImg,
      serviceRef: SERVICES_DATA.find((s) => s.id === 'plc-programming') || SERVICES_DATA[0],
    },
    {
      id: 'motion-control-drives',
      title: 'Motion Control & Servo Drives',
      subtitle: 'Multi-Axis & High Speed Servo',
      description: 'Multi-axis servo positioning, electronic camming, flying shear, robotic sync, and high-dynamic VFD drive line tuning.',
      image: motionImg,
      serviceRef: SERVICES_DATA.find((s) => s.id === 'motion-control-drives') || SERVICES_DATA[1],
    },
    {
      id: 'control-panels',
      title: 'Control Panel Manufacturing',
      subtitle: 'PLC, VFD, MCC & PCC Panels',
      description: 'Turnkey PLC, VFD, MCC, and PCC electrical control panels engineered to IEC/UL standards with 100% FAT testing.',
      image: ipcImg,
      serviceRef: SERVICES_DATA.find((s) => s.id === 'control-panels') || SERVICES_DATA[2],
    },
    {
      id: 'industrial-iot',
      title: 'Industrial IoT & SCADA',
      subtitle: 'Cloud, Edge & ERP Integration',
      description: 'IT-OT connectivity, real-time SCADA telemetry dashboards, edge MQTT gateways, and automated SAP/ERP integration.',
      image: plcImg,
      serviceRef: SERVICES_DATA.find((s) => s.id === 'industrial-iot') || SERVICES_DATA[3],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Engineering Services
          </h2>
          <p className="mt-1 text-slate-600 text-xs sm:text-sm font-medium">
            Specialist PLC software development, servo motion control, control panel building, and Industry 4.0 integration.
          </p>
        </div>

        {/* Responsive Studio Grid Layout (Horizontal Compact Rows on Mobile, 4-Column Cards on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group cursor-pointer flex flex-row sm:flex-col items-start sm:items-stretch gap-3.5 sm:gap-0 justify-between pb-4 sm:pb-0 border-b border-slate-100 sm:border-0"
              onClick={() => setActiveModalService(card.serviceRef)}
            >
              {/* Product Studio Image Container */}
              <div className="w-24 h-24 sm:w-full sm:h-auto sm:aspect-[4/3] bg-[#dbe0e6] rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content Box */}
              <div className="flex-1 flex flex-col justify-between sm:justify-start">
                <div>
                  {/* Title */}
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 sm:mt-3.5 mb-1 sm:mb-1.5 leading-snug group-hover:text-red-600 transition-colors">
                    {card.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-snug sm:leading-relaxed font-sans line-clamp-3 sm:line-clamp-none">
                    {card.description}
                  </p>
                </div>

                {/* Action Link */}
                <div className="mt-2 sm:mt-3.5">
                  <span className="text-red-600 hover:text-red-700 font-semibold text-xs inline-flex items-center gap-1 group-hover:underline">
                    Learn more &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications Modal */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white border border-slate-200 rounded-lg max-w-xl w-full p-5 sm:p-6 space-y-4 text-slate-900 relative shadow-2xl animate-in fade-in zoom-in-95 duration-150">

              <div className="flex items-start justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{activeModalService.title}</h3>
                  <p className="text-xs font-mono text-amber-600 font-semibold mt-0.5">{activeModalService.subtitle}</p>
                </div>
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-600">
                <p className="leading-relaxed">{activeModalService.description}</p>

                <div>
                  <h4 className="font-mono text-slate-900 font-bold text-[11px] uppercase tracking-wider mb-2">Capabilities & Engineering Scope</h4>
                  <ul className="space-y-1.5 list-disc pl-4 text-slate-700">
                    {activeModalService.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <h5 className="font-mono text-[11px] text-teal-700 font-bold uppercase mb-1">Supported Hardware</h5>
                    <ul className="text-[11px] space-y-0.5 font-mono text-slate-700">
                      {activeModalService.hardwareSupported.map((h, i) => (
                        <li key={i}>• {h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <h5 className="font-mono text-[11px] text-amber-700 font-bold uppercase mb-1">Software Environments</h5>
                    <ul className="text-[11px] space-y-0.5 font-mono text-slate-700">
                      {activeModalService.softwareTools.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-900 font-mono text-[11px]">
                  <strong>Value Proposition:</strong> {activeModalService.keyBenefit}
                </div>
              </div>

              <div className="flex justify-end pt-3 border-t border-slate-100">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-1.5 rounded bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold transition-colors"
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

