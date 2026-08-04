import React, { useState, useEffect } from 'react';
import { CloudLightning, Server, Database, RefreshCw, Layers, ShieldCheck, Activity, Cpu, Radio, Network } from 'lucide-react';

export const IIoTTelemetrySection: React.FC = () => {
  const [sapSyncStatus, setSapSyncStatus] = useState<'SYNCED' | 'SYNCING'>('SYNCED');

  const [metrics, setMetrics] = useState({
    motorSpeedRpm: 1450,
    motorTempC: 58.4,
    vibrationMmS: 1.2,
    powerKw: 42.8,
    oeePercent: 94.2,
    totalProductionCount: 14820,
  });

  // Dynamic live metric simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setMetrics((prev) => ({
        motorSpeedRpm: 1445 + Math.floor(Math.random() * 15),
        motorTempC: parseFloat((58.0 + Math.random() * 1.5).toFixed(1)),
        vibrationMmS: parseFloat((1.1 + Math.random() * 0.3).toFixed(2)),
        powerKw: parseFloat((42.0 + Math.random() * 2.0).toFixed(1)),
        oeePercent: parseFloat((93.8 + Math.random() * 1.2).toFixed(1)),
        totalProductionCount: prev.totalProductionCount + 1,
      }));
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const triggerSapSync = () => {
    setSapSyncStatus('SYNCING');
    setTimeout(() => setSapSyncStatus('SYNCED'), 1500);
  };

  return (
    <section id="iiot" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono mb-3 font-semibold">
            <CloudLightning className="w-3.5 h-3.5 text-teal-600" />
            <span>IT-OT INTEGRATION & DATA LOGGING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Industrial IoT & Industry 4.0 Solutions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Bridging shop-floor PLC machine controllers with enterprise IT databases. Real-time OPC UA data logging, SAP/ERP automated order sync, and web SCADA telemetry.
          </p>
        </div>

        {/* Dashboard Live Telemetry Demonstration */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
          
          {/* Top Bar Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-slate-200 text-xs font-mono shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-600">OPC UA SERVER: <strong className="text-slate-900">opc.tcp://192.168.1.100:4840</strong></span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-slate-200 text-xs font-mono shadow-sm">
                <Server className="w-3.5 h-3.5 text-teal-600" />
                <span className="text-slate-600">IT-OT GATEWAY: <strong className="text-teal-700">ACTIVE</strong></span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={triggerSapSync}
                className="px-3.5 py-1.5 rounded bg-amber-500 hover:bg-amber-600 text-slate-950 font-mono text-xs font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${sapSyncStatus === 'SYNCING' ? 'animate-spin text-slate-950' : ''}`} />
                <span>REFRESH TELEMETRY SYNC</span>
              </button>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-6 border-b border-slate-200">
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Motor Speed</div>
              <div className="text-xl font-black font-mono text-amber-600 mt-1">{metrics.motorSpeedRpm} <span className="text-xs text-slate-500">RPM</span></div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">S120 Servo Loop</div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Motor Temp</div>
              <div className="text-xl font-black font-mono text-teal-700 mt-1">{metrics.motorTempC} <span className="text-xs text-slate-500">°C</span></div>
              <div className="text-[10px] text-emerald-600 font-mono mt-1 font-semibold">Normal Range</div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Vibration (RMS)</div>
              <div className="text-xl font-black font-mono text-amber-700 mt-1">{metrics.vibrationMmS} <span className="text-xs text-slate-500">mm/s</span></div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">ISO 10816 Class II</div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Power Draw</div>
              <div className="text-xl font-black font-mono text-slate-900 mt-1">{metrics.powerKw} <span className="text-xs text-slate-500">kW</span></div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">Cos φ = 0.94</div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Line OEE Index</div>
              <div className="text-xl font-black font-mono text-emerald-600 mt-1">{metrics.oeePercent} <span className="text-xs text-slate-500">%</span></div>
              <div className="text-[10px] text-emerald-700 font-mono mt-1 font-semibold">World Class Target</div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Shift Output</div>
              <div className="text-xl font-black font-mono text-amber-600 mt-1">{metrics.totalProductionCount}</div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">Units Completed</div>
            </div>
          </div>

          {/* IT-OT Architecture Diagram & Corporate Overview */}
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
                <Database className="w-5 h-5 text-amber-600" />
                <span>Enterprise SAP / ERP Data Logging Architecture</span>
              </h4>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                AxtroTech deploys edge IoT gateways (Siemens IOT2050 / B&R Orange Box) that query shop-floor PLCs over PROFINET or OPC UA, format data payloads in MQTT/JSON, and securely post production logs directly into corporate SAP/ERP databases without risking OT network security.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <span className="text-amber-700 font-bold block mb-1">AUTOMATED SHIFT REPORTS</span>
                  <span className="text-slate-600">Auto-generates PDF/Excel reports sent directly to plant managers at end of shift.</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <span className="text-teal-700 font-bold block mb-1">PREDICTIVE MAINTENANCE</span>
                  <span className="text-slate-600">Continuous FFT vibration & temperature trend monitoring to predict bearing wear.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-4 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 text-xs font-mono space-y-3 shadow-md">
              <div className="text-amber-400 font-bold uppercase border-b border-slate-800 pb-2 flex items-center justify-between">
                <span>LIVE TELEMETRY STREAM</span>
                <span className="text-[10px] text-emerald-400">CONNECTIVITY: 100%</span>
              </div>
              <div className="space-y-1.5 text-[11px] text-slate-300">
                <div className="text-emerald-400">[14:32:01] OPC_UA: Node S7_1500.Axis1.ActualPos = {metrics.motorSpeedRpm}</div>
                <div className="text-teal-300">[14:32:03] MQTT_PUB: topic/axtrotech/telemetry {"{"}"power": {metrics.powerKw}{"}"}</div>
                <div className="text-amber-300">[14:32:05] SAP_BRIDGE: POST /api/v1/production_orders HTTP/1.1 200 OK</div>
                <div className="text-slate-400">[14:32:07] REPORT_GEN: Shift_Log_2026_08_04.pdf generated</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
