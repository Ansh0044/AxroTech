import React from 'react';
import { CloudLightning, Server, Database, Activity } from 'lucide-react';

export const IIoTTelemetrySection: React.FC = () => {
  return (
    <section id="iiot" className="py-12 sm:py-16 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono mb-3 font-semibold">
            <CloudLightning className="w-3.5 h-3.5 text-teal-600" />
            <span>IT-OT INTEGRATION & DATA LOGGING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Industrial IoT & Industry 4.0 Solutions
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            Bridging shop-floor PLC machine controllers with enterprise IT databases. Real-time OPC UA data logging, SAP/ERP automated order sync, and web SCADA telemetry.
          </p>
        </div>

        {/* IT-OT Architecture & Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <div className="p-5 sm:p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-800">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-sans">
              Enterprise SAP / ERP Integration
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Query shop-floor PLCs over PROFINET or OPC UA, format payloads in MQTT/JSON, and securely post production logs directly into corporate SAP/ERP databases without risking OT network security.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-sans">
              Automated Shift Reports
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Auto-generate PDF/Excel production & downtime reports sent directly to plant managers and quality assurance teams at the end of every operational shift.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-sans">
              Predictive Maintenance
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Continuous FFT vibration and thermal trend monitoring for critical motor drives and bearings, predicting equipment wear before failure occurs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
