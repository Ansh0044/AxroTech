import React, { useState } from 'react';
import { RFQFormState } from '../types';
import { Calculator, CheckCircle2, ArrowRight, X, Send, ShieldCheck, Cpu, Activity, Sliders, Globe } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceOrBrand?: string;
}

export const RFQEstimatorModal: React.FC<RFQModalProps> = ({ isOpen, onClose, initialServiceOrBrand }) => {
  const [step, setStep] = useState<'calculator' | 'contact' | 'success'>('calculator');

  const [form, setForm] = useState<RFQFormState>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: 'Metals',
    primaryBrand: initialServiceOrBrand?.includes('Siemens') ? 'Siemens' : initialServiceOrBrand?.includes('B&R') ? 'B&R' : 'Siemens',
    requiredServices: ['PLC Programming Services', 'Motion Control & Drives'],
    axisCount: 4,
    controlPanelType: 'PLC Control Panel',
    iiotIntegration: true,
    projectDescription: initialServiceOrBrand ? `Inquiry regarding ${initialServiceOrBrand}` : '',
    estimatedTimeline: '1-3 Months',
  });

  if (!isOpen) return null;

  const toggleService = (svc: string) => {
    setForm((prev) => {
      const exists = prev.requiredServices.includes(svc);
      if (exists) {
        return { ...prev, requiredServices: prev.requiredServices.filter((s) => s !== svc) };
      } else {
        return { ...prev, requiredServices: [...prev.requiredServices, svc] };
      }
    });
  };

  const calculateEstimateComplexity = () => {
    let baseDays = 10;
    baseDays += form.axisCount * 3;
    if (form.requiredServices.includes('Motion Control & Drives')) baseDays += 8;
    if (form.controlPanelType !== 'None') baseDays += 10;
    if (form.iiotIntegration) baseDays += 5;
    return {
      estimatedCommissioningDays: baseDays,
      recommendedCpu: form.primaryBrand === 'Siemens' ? 'S7-1515T / Simotion D435' : form.primaryBrand === 'B&R' ? 'Power Panel PPC2100' : 'ControlLogix 5580',
      busProtocol: form.primaryBrand === 'Siemens' ? 'PROFINET IRT (250µs)' : form.primaryBrand === 'B&R' ? 'POWERLINK (100µs)' : 'EtherNet/IP CIP',
    };
  };

  const est = calculateEstimateComplexity();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0A1322] border border-slate-700 rounded-2xl max-w-3xl w-full p-6 lg:p-8 text-white relative shadow-2xl space-y-6">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 p-2 flex items-center justify-center text-amber-400">
              <Calculator className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Engineering Project RFQ Estimator</h3>
              <p className="text-xs font-mono text-amber-400">{COMPANY_DETAILS.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'calculator' && (
          <div className="space-y-6">
            
            {/* Step 1: Technical Scope Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Primary Brand */}
              <div>
                <label className="text-xs font-mono uppercase text-amber-400 font-bold block mb-2">
                  1. Automation Brand Ecosystem
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Siemens', 'B&R', 'Rockwell', 'Schneider'].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setForm({ ...form, primaryBrand: b })}
                      className={`p-2.5 rounded-md text-xs font-mono font-bold border transition-all ${
                        form.primaryBrand === b
                          ? 'bg-amber-500 text-slate-950 border-amber-400'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="text-xs font-mono uppercase text-teal-400 font-bold block mb-2">
                  2. Industry Sector
                </label>
                <select
                  value={form.industry}
                  onChange={(e) => setForm({ ...form, industry: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md p-2.5 text-xs text-white font-mono focus:border-amber-400 focus:outline-none"
                >
                  <option value="Metals">Metals & Steel Processing</option>
                  <option value="Cement">Cement & Heavy Materials</option>
                  <option value="Oil & Gas">Oil & Gas / Petrochemicals</option>
                  <option value="Food & Beverage">Food & Beverage Bottling</option>
                  <option value="Packaging">Packaging & Converting</option>
                  <option value="Pharmaceutical">Pharmaceutical Manufacturing</option>
                </select>
              </div>

            </div>

            {/* Services Checkboxes */}
            <div>
              <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-2">
                3. Required Engineering Services
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'PLC Programming Services',
                  'Motion Control & Drives',
                  'Custom Electrical Control Panels',
                  'IIoT & Industry 4.0 Telemetry',
                ].map((svc) => {
                  const isChecked = form.requiredServices.includes(svc);
                  return (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => toggleService(svc)}
                      className={`p-3 rounded-lg border text-left text-xs font-mono flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-amber-500/10 border-amber-500/50 text-amber-300 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{svc}</span>
                      {isChecked && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Motion Axis Count */}
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-amber-400 font-bold">4. Motion Servo Axes Count:</span>
                <span className="text-white font-bold">{form.axisCount} Servo Axis / Drives</span>
              </div>
              <input
                type="range"
                min="0"
                max="24"
                step="1"
                value={form.axisCount}
                onChange={(e) => setForm({ ...form, axisCount: Number(e.target.value) })}
                className="w-full accent-amber-500 bg-slate-800"
              />
            </div>

            {/* Control Panel Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-2">
                  5. Electrical Panel Requirement
                </label>
                <select
                  value={form.controlPanelType}
                  onChange={(e) => setForm({ ...form, controlPanelType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md p-2.5 text-xs text-white font-mono focus:border-amber-400 focus:outline-none"
                >
                  <option value="PLC Control Panel">PLC Control Panel</option>
                  <option value="VFD & Servo Panel">VFD & Servo Drive Panel</option>
                  <option value="MCC Panel">MCC Intelligent Motor Control Center</option>
                  <option value="PCC Panel">PCC Power Control Center Panel</option>
                  <option value="None">Software Only (No Panel)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-2">
                  6. SAP / ERP Data Logging
                </label>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, iiotIntegration: !form.iiotIntegration })}
                  className={`w-full p-2.5 rounded-md border text-xs font-mono font-bold flex items-center justify-between ${
                    form.iiotIntegration
                      ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>{form.iiotIntegration ? 'YES (OPC UA & SAP Bridge)' : 'NO (Standalone Machine)'}</span>
                  <Globe className="w-4 h-4 text-teal-400" />
                </button>
              </div>
            </div>

            {/* Instant Scope Output */}
            <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/30 text-xs font-mono space-y-2">
              <div className="text-amber-400 font-bold uppercase">Estimated Technical Blueprint Scope</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-300">
                <div>Est. Engineering: <strong className="text-white">{est.estimatedCommissioningDays} Days</strong></div>
                <div>Recommended Controller: <strong className="text-amber-300">{est.recommendedCpu}</strong></div>
                <div>Bus Network: <strong className="text-teal-300">{est.busProtocol}</strong></div>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setStep('contact')}
                className="px-6 py-3 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wide flex items-center gap-2"
              >
                <span>PROCEED TO SUBMIT RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {step === 'contact' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-xs font-mono text-amber-400 font-bold">
              STEP 2: ENTER COMPANY CONTACT DETAILS FOR PROPOSAL RECEIPT
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="e.g. Ansh Kakkar"
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-white font-mono focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Company / Organization *</label>
                <input
                  type="text"
                  required
                  value={form.companyName}
                  onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  placeholder="e.g. Steel Mill Ltd"
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-white font-mono focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-white font-mono focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-white font-mono focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">Project Description & Specific Requirements</label>
              <textarea
                rows={3}
                value={form.projectDescription}
                onChange={(e) => setForm({ ...form, projectDescription: e.target.value })}
                placeholder="Mention specific PLC model (e.g. Siemens S7-1500, B&R ACOPOS, S120, flying shear, line speed...)"
                className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-white font-mono focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setStep('calculator')}
                className="px-4 py-2 rounded bg-slate-800 text-slate-300 text-xs font-mono"
              >
                BACK TO CALCULATOR
              </button>

              <button
                type="submit"
                className="px-6 py-3 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs font-mono flex items-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>SUBMIT OFFICIAL RFQ</span>
              </button>
            </div>

          </form>
        )}

        {step === 'success' && (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 p-3 mx-auto flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-white">RFQ Proposal Submitted Successfully</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{form.fullName}</strong>. AxtroTech's senior motion control application engineering team will review your project specs for <strong>{form.companyName}</strong> and send an official proposal to <strong>{form.email}</strong> within 24 hours.
            </p>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-400 inline-block text-left">
              <div>Ref Code: <strong className="text-amber-400">AXT-RFQ-{Math.floor(100000 + Math.random() * 900000)}</strong></div>
              <div>Platform: {form.primaryBrand} ({form.axisCount} Servo Axes)</div>
              <div>Direct Line: {COMPANY_DETAILS.phone}</div>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded bg-amber-500 text-slate-950 font-bold text-xs"
              >
                RETURN TO HOMEPAGE
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
