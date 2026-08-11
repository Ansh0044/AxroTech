import React, { useState } from 'react';
import { MessageCircle, ExternalLink, ChevronRight } from 'lucide-react';

import siemensImg from '../assets/images/Siemens 2026-08-11 184515.png';
import brImg from '../assets/images/BR 2026-08-11 185505.png';
import pilzImg from '../assets/images/PILZ 2026-08-11 190249.png';
import servoImg from '../assets/images/industrial_servo_motor_1785947390638.jpg';
import ioModuleImg from '../assets/images/industrial_io_modules_1785947371906.jpg';
import ipcImg from '../assets/images/industrial_pc_module_1785947346608 (1).jpg';
import driveRackImg from '../assets/images/servo_drive_rack_1785860248984.jpg';

interface BrandProduct {
  id: string;
  name: string;
  modelCode: string;
  type: string;
  tagline: string;
  image: string;
}

interface BrandGroup {
  brandId: string;
  brandName: string;
  shortName: string;
  logoImg: string;
  products: BrandProduct[];
}

const BRAND_PRODUCTS_DATA: BrandGroup[] = [
  {
    brandId: 'siemens',
    brandName: 'Siemens Industrial Automation & Drives',
    shortName: 'Siemens',
    logoImg: siemensImg,
    products: [
      {
        id: 'siemens-s7-1211c',
        name: 'SIMATIC S7-1211C',
        modelCode: 'S7-1211C',
        type: 'PLC Controller',
        tagline: 'Compact CPU, PROFINET & Onboard I/O',
        image: siemensImg,
      },
      {
        id: 'siemens-s7-1214c',
        name: 'SIMATIC S7-1214C',
        modelCode: 'S7-1214C',
        type: 'PLC Controller',
        tagline: 'High Performance Compact PLC CPU',
        image: siemensImg,
      },
      {
        id: 'siemens-g120',
        name: 'SINAMICS G120',
        modelCode: 'G120 VFD',
        type: 'AC Frequency Drive',
        tagline: 'Modular Inverter Drive with Integrated STO',
        image: driveRackImg,
      },
      {
        id: 'siemens-v90',
        name: 'SINAMICS V90',
        modelCode: 'V90 Servo',
        type: 'Servo System',
        tagline: 'High Dynamic Servo Drive & 1FL6 Motor',
        image: servoImg,
      },
      {
        id: 'siemens-v20',
        name: 'SINAMICS V20',
        modelCode: 'V20 Inverter',
        type: 'Basic VFD',
        tagline: 'Rugged Basic Inverter for Pumps & Fans',
        image: driveRackImg,
      },
      {
        id: 'siemens-s120',
        name: 'SINAMICS S120',
        modelCode: 'S120 Servo',
        type: 'Multi-Axis Drive',
        tagline: 'Modular Servo Drive with Common DC Bus',
        image: driveRackImg,
      },
      {
        id: 'siemens-simotion-d',
        name: 'SIMOTION D',
        modelCode: 'Simotion-D',
        type: 'Motion Controller',
        tagline: 'Multi-Axis High Speed Motion Controller',
        image: siemensImg,
      },
    ],
  },
  {
    brandId: 'br',
    brandName: 'B&R Industrial Automation (ABB)',
    shortName: 'B&R',
    logoImg: brImg,
    products: [
      {
        id: 'br-acopos-p3',
        name: 'ACOPOS P3',
        modelCode: 'ACOPOS P3',
        type: 'Servo Drive',
        tagline: 'Ultra-Compact 3-Axis Servo Controller',
        image: brImg,
      },
      {
        id: 'br-power-panel-c70',
        name: 'Power Panel C70',
        modelCode: 'C70 Terminal',
        type: 'HMI / Controller',
        tagline: 'Touch HMI Terminal with Embedded PLC',
        image: brImg,
      },
      {
        id: 'br-apc2100',
        name: 'Automation PC 2100',
        modelCode: 'APC2100',
        type: 'Industrial Box PC',
        tagline: 'Fanless Edge Computing Box PC',
        image: ipcImg,
      },
      {
        id: 'br-x20-io',
        name: 'X20 System Slice I/O',
        modelCode: 'X20 I/O',
        type: 'Remote I/O',
        tagline: 'Modular High Density Distributed I/O',
        image: ioModuleImg,
      },
      {
        id: 'br-acopos-micro',
        name: 'ACOPOS Micro',
        modelCode: 'ACOPOS Micro',
        type: 'Compact Drive',
        tagline: 'Low-Voltage Stepper & Servo Drive',
        image: driveRackImg,
      },
    ],
  },
  {
    brandId: 'pilz',
    brandName: 'PILZ Machinery Safety',
    shortName: 'PILZ',
    logoImg: pilzImg,
    products: [
      {
        id: 'pilz-pnoz-relays',
        name: 'PNOZ Safety Relays',
        modelCode: 'PNOZ Relays',
        type: 'Safety Module',
        tagline: 'SIL3 / PLe Failsafe Safety Relays',
        image: pilzImg,
      },
      {
        id: 'pilz-pnozmulti',
        name: 'PNOZmulti Controllers',
        modelCode: 'PNOZmulti',
        type: 'Safety Controller',
        tagline: 'Modular Configurable Safety Controller',
        image: pilzImg,
      },
      {
        id: 'pilz-psen-sensors',
        name: 'PSEN Safety Sensors',
        modelCode: 'PSEN Switches',
        type: 'RFID Safety Sensor',
        tagline: 'Non-Contact RFID Coded Guard Switches',
        image: pilzImg,
      },
      {
        id: 'pilz-pitestop',
        name: 'PITestop E-Stops',
        modelCode: 'PITestop',
        type: 'E-Stop Pushbutton',
        tagline: 'EN ISO 13850 Emergency Stop Buttons',
        image: pilzImg,
      },
    ],
  },
];

export const ProductsSection: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<string>('all');

  const openWhatsAppRFQ = (productName: string, modelCode: string) => {
    const phoneNumber = '919015660504';
    const message = `Hello AxtroTech Solutions, I am interested in:\nProduct: ${productName}\nModel: ${modelCode}\nPlease share the quote and availability.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const displayedBrands = BRAND_PRODUCTS_DATA.filter(
    (b) => activeBrand === 'all' || b.brandId === activeBrand
  );

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Minimal Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
              Automation & Control <span className="text-amber-600">Hardware Catalog</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
              Siemens, B&R, and PILZ components. Direct WhatsApp quotation at +91 90156 60504.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex items-center gap-1.5 shrink-0 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveBrand('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeBrand === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Brands
            </button>
            <button
              onClick={() => setActiveBrand('siemens')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeBrand === 'siemens'
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-teal-800'
              }`}
            >
              Siemens
            </button>
            <button
              onClick={() => setActiveBrand('br')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeBrand === 'br'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-amber-800'
              }`}
            >
              B&R
            </button>
            <button
              onClick={() => setActiveBrand('pilz')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeBrand === 'pilz'
                  ? 'bg-yellow-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-yellow-800'
              }`}
            >
              PILZ
            </button>
          </div>
        </div>

        {/* Brand Rows */}
        <div className="space-y-10">
          {displayedBrands.map((brand) => (
            <div key={brand.brandId} className="space-y-3">
              
              {/* Compact Brand Header */}
              <div className="flex items-center justify-between bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 p-1 border border-slate-200 flex items-center justify-center shrink-0">
                    <img src={brand.logoImg} alt={brand.brandName} className="max-h-full max-w-full object-contain" />
                  </div>
                  <h2 className="text-base font-black text-slate-900 tracking-tight">
                    {brand.brandName}
                  </h2>
                  <span className="text-[10px] font-mono bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded border border-slate-200 hidden sm:inline-block">
                    {brand.products.length} Items
                  </span>
                </div>

                <button
                  onClick={() => openWhatsAppRFQ(`${brand.shortName} Hardware Inquiry`, 'General Order')}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span>WhatsApp Inquiry</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Horizontal Scroll / One-Line Layout for Products */}
              <div className="flex items-stretch gap-4 overflow-x-auto pb-3 pt-1 no-scrollbar scroll-smooth">
                {brand.products.map((prod) => (
                  <div
                    key={prod.id}
                    className="w-56 sm:w-64 shrink-0 bg-white border border-slate-200 rounded-xl p-3 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Prominent Image Display Area */}
                      <div className="h-36 sm:h-40 w-full rounded-lg bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center p-2 mb-2.5 group relative">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-900/90 text-white font-mono font-bold text-[10px] tracking-wide">
                          {prod.modelCode}
                        </span>
                      </div>

                      {/* Product Minimal Info */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider block">
                          {prod.type}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-1">
                          {prod.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                          {prod.tagline}
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp Action Button */}
                    <button
                      onClick={() => openWhatsAppRFQ(prod.name, prod.modelCode)}
                      className="mt-3 w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Request Quote</span>
                    </button>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Direct WhatsApp Contact Bar */}
        <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Direct Wholesale & Retail Orders</h3>
              <p className="text-xs text-slate-300">Fast quotes and stock availability on WhatsApp at <strong>+91 90156 60504</strong>.</p>
            </div>
          </div>

          <button
            onClick={() => {
              window.open('https://wa.me/919015660504?text=Hello%20AxtroTech%20Solutions,%20I%20have%20an%20inquiry%20regarding%20industrial%20automation%20hardware.', '_blank');
            }}
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5"
          >
            <span>WhatsApp Now</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};