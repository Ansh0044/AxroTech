import React, { useState, useEffect } from 'react';
import { Activity, Play, Pause, RotateCcw, Cpu, Code2, Sliders, Zap, Check, Copy, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { MotionAxisConfig } from '../types';

interface MotionControlStudioProps {
  onOpenRFQ: () => void;
}

export const MotionControlStudio: React.FC<MotionControlStudioProps> = ({ onOpenRFQ }) => {
  const [motionProfile, setMotionProfile] = useState<'Flying Shear' | 'Electronic Camming' | 'Rotary Knife' | 'Point-to-Point'>('Flying Shear');
  const [driveModel, setDriveModel] = useState<'Simotion S120' | 'Siemens V90' | 'B&R ACOPOS' | 'Siemens G120' | 'Siemens V20'>('Simotion S120');
  
  const [targetPos, setTargetPos] = useState<number>(800);
  const [maxVel, setMaxVel] = useState<number>(1200);
  const [accel, setAccel] = useState<number>(5000);
  const [gearRatio, setGearRatio] = useState<number>(1.25);
  
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [currentPos, setCurrentPos] = useState<number>(0);
  const [currentVel, setCurrentVel] = useState<number>(0);
  const [currentTorque, setCurrentTorque] = useState<number>(45);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Animated loop simulation
  useEffect(() => {
    let animationFrameId: number;
    let startTime = Date.now();

    const updateSimulation = () => {
      if (isRunning) {
        const elapsed = (Date.now() - startTime) / 1000;
        const cyclePeriod = 3.0; // 3 second repeat cycle
        const progress = (elapsed % cyclePeriod) / cyclePeriod;

        let vel = 0;
        let pos = 0;
        let torque = 20;

        if (motionProfile === 'Flying Shear') {
          // Trapezoidal + sync phase
          if (progress < 0.2) {
            vel = (progress / 0.2) * maxVel;
            pos = 0.5 * (vel / 0.2) * Math.pow(progress, 2);
            torque = 85;
          } else if (progress < 0.7) {
            vel = maxVel;
            pos = (0.5 * maxVel * 0.2) + maxVel * (progress - 0.2);
            torque = 45; // Constant sync torque during cut
          } else {
            vel = maxVel * (1 - (progress - 0.7) / 0.3);
            pos = targetPos - (0.5 * vel * (1 - progress));
            torque = -60; // Regenerative braking
          }
        } else if (motionProfile === 'Electronic Camming') {
          // Sinusoidal cam curve
          vel = (Math.sin(progress * Math.PI * 2) + 1) * (maxVel / 2);
          pos = (1 - Math.cos(progress * Math.PI * 2)) * (targetPos / 2);
          torque = Math.cos(progress * Math.PI * 2) * 50 + 40;
        } else if (motionProfile === 'Rotary Knife') {
          // Accelerated cutting window
          if (progress > 0.4 && progress < 0.6) {
            vel = maxVel * 1.4; // Cutting speed boost
            torque = 95;
          } else {
            vel = maxVel * 0.7;
            torque = 30;
          }
          pos = (progress * targetPos) % targetPos;
        } else {
          // Point to Point
          vel = Math.sin(progress * Math.PI) * maxVel;
          pos = progress * targetPos;
          torque = Math.cos(progress * Math.PI) * 70;
        }

        setCurrentVel(Math.round(vel));
        setCurrentPos(Math.round(pos));
        setCurrentTorque(Math.round(torque));
      }
      animationFrameId = requestAnimationFrame(updateSimulation);
    };

    animationFrameId = requestAnimationFrame(updateSimulation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, motionProfile, maxVel, targetPos]);

  // Generate PLC Motion Code snippet
  const generateCodeSnippet = () => {
    if (driveModel.includes('Simotion') || driveModel.includes('Siemens')) {
      return `// Siemens TIA Portal S7-1500T / Simotion Motion Block
PROGRAM Motion_Axis_Control
VAR
    Axis_Shear : DB_ANY;
    fbCamIn    : MC_CamIn;
    fbMoveAbs  : MC_MoveAbsolute;
    Status     : DWORD;
END_VAR

// Execute ${motionProfile} profile on ${driveModel}
fbCamIn(
    Master          := "Line_Master_Axis",
    Slave           := "Cut_Axis_1",
    Execute         := TRUE,
    MasterOffset    := 0.0,
    SlaveOffset     := 0.0,
    MasterScaling   := 1.0,
    SlaveScaling    := ${gearRatio.toFixed(2)},
    CamTable        := "CAM_${motionProfile.toUpperCase().replace(/\s+/g, '_')}",
    Velocity        := ${maxVel}.0, // mm/s
    Acceleration    := ${accel}.0  // mm/s²
);
// PROFINET IRT Cycle: 250 µs | Drive: SINAMICS S120`;
    } else if (driveModel.includes('ACOPOS')) {
      return `// B&R Automation Studio - mapp Motion ACOPOS Code
PROGRAM _CYCLIC
    VAR
        MpAxisFlex : MpAxisBasic;
        MpCamFlex  : MpAxisCamList;
    END_VAR

    // B&R ACOPOS P3 Virtual Master Sync
    MpCamFlex.MpLink     := ADR(gCamList);
    MpCamFlex.MasterAxis := ADR(gLineMaster);
    MpCamFlex.SlaveAxis  := ADR(gSlaveAxis1);
    MpCamFlex.CamID      := 101;
    MpCamFlex.Enable     := TRUE;

    // Cycle Time: 100 µs over POWERLINK
END_PROGRAM`;
    } else {
      return `// VFD Speed & Acceleration Ramp Block
fbVFD_Control(
    Command_Run   := TRUE,
    Setpoint_RPM  := ${maxVel},
    Ramp_Up_Sec   := ${((maxVel / accel)).toFixed(2)},
    Drive_Type    := "${driveModel}"
);`;
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateCodeSnippet());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="motion-studio" className="py-16 bg-[#070F1B] text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>AXTROTECH CORE SPECIALTY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
              Interactive Motion Control & Servo Studio
            </h2>
            <p className="mt-2 text-slate-300 text-sm max-w-2xl">
              Experience our deep motion control engineering capability. Configure multi-axis dynamics, select drive hardware (Siemens Simotion/S120/V90 or B&R ACOPOS), and observe sub-millisecond motion synchronization.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-4 py-2 rounded-md text-xs font-bold font-mono flex items-center gap-2 transition-all ${
                isRunning
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              }`}
            >
              {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isRunning ? 'SIMULATION RUNNING' : 'PAUSED'}</span>
            </button>
            <button
              onClick={onOpenRFQ}
              className="px-4 py-2 rounded-md bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold text-xs tracking-wide transition-all"
            >
              QUOTE THIS MOTION SYSTEM
            </button>
          </div>
        </div>

        {/* Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Controls & Configuration Sidebar */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-xl border border-slate-800 p-5 space-y-6">
            
            {/* Motion Profile Selector */}
            <div>
              <label className="text-xs font-mono uppercase text-amber-400 font-bold block mb-2 flex items-center justify-between">
                <span>1. Motion Profile</span>
                <span className="text-[10px] text-slate-400 font-normal">Kinematic Curve</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['Flying Shear', 'Electronic Camming', 'Rotary Knife', 'Point-to-Point'] as const).map((profile) => (
                  <button
                    key={profile}
                    onClick={() => setMotionProfile(profile)}
                    className={`p-2.5 rounded-md text-left text-xs font-medium transition-all border ${
                      motionProfile === profile
                        ? 'bg-amber-500/15 border-amber-500/50 text-amber-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {profile}
                  </button>
                ))}
              </div>
            </div>

            {/* Hardware & Drive Selection */}
            <div>
              <label className="text-xs font-mono uppercase text-teal-400 font-bold block mb-2">
                2. Servo Drive & Controller Platform
              </label>
              <select
                value={driveModel}
                onChange={(e: any) => setDriveModel(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-md p-2.5 text-xs text-white font-mono focus:border-amber-400 focus:outline-none"
              >
                <option value="Simotion S120">Siemens Simotion D435-2 + SINAMICS S120</option>
                <option value="Siemens V90">Siemens S7-1500T + SINAMICS V90 Servo</option>
                <option value="B&R ACOPOS">B&R Power Panel C70 + ACOPOS P3 Drive</option>
                <option value="Siemens G120">Siemens S7-1200 + SINAMICS G120 VFD</option>
                <option value="Siemens V20">Siemens SINAMICS V20 Basic Inverter</option>
              </select>
            </div>

            {/* Parameter Sliders */}
            <div className="space-y-4 pt-2 border-t border-slate-800">
              
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-400">Target Position:</span>
                  <span className="text-amber-400 font-bold">{targetPos} mm</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="2000"
                  step="50"
                  value={targetPos}
                  onChange={(e) => setTargetPos(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-400">Max Velocity (v_max):</span>
                  <span className="text-teal-400 font-bold">{maxVel} mm/s</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3000"
                  step="100"
                  value={maxVel}
                  onChange={(e) => setMaxVel(Number(e.target.value))}
                  className="w-full accent-teal-400 bg-slate-800"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-400">Acceleration Ramp (a_max):</span>
                  <span className="text-amber-400 font-bold">{accel} mm/s²</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="15000"
                  step="500"
                  value={accel}
                  onChange={(e) => setAccel(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-400">Electronic Gear Ratio:</span>
                  <span className="text-white font-bold">{gearRatio.toFixed(2)} : 1</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3.0"
                  step="0.05"
                  value={gearRatio}
                  onChange={(e) => setGearRatio(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800"
                />
              </div>

            </div>

            {/* Hardware Badges */}
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] space-y-1 font-mono text-slate-400">
              <div className="text-amber-400 font-bold uppercase">Drive Spec Summary</div>
              <div>Bus: PROFINET IRT / POWERLINK (250µs)</div>
              <div>Feedback: Optical Absolute Encoder (24-bit)</div>
              <div>Safety: STO, SS1, SLS (SIL3 / PLe)</div>
            </div>

          </div>

          {/* Right Visualizer & Oscilloscope Output */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Oscilloscope Graph Canvas Card */}
            <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-5 flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-white font-bold">REAL-TIME SERVO AXIS OSCILLOSCOPE</span>
                </div>
                <div className="text-slate-400">
                  PROFILE: <span className="text-amber-400">{motionProfile.toUpperCase()}</span>
                </div>
              </div>

              {/* Dynamic Oscilloscope Display */}
              <div className="relative h-48 my-4 bg-[#050B14] rounded-lg border border-slate-800 p-4 overflow-hidden">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 opacity-15">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className="border-r border-b border-teal-500" />
                  ))}
                </div>

                {/* Simulated Velocity Curve Wave */}
                <div className="relative h-full w-full flex items-end">
                  <svg className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="velGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="torqueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Velocity Waveform */}
                    <path
                      d={`M 0 ${120 - (currentVel / maxVel) * 80} Q 100 ${
                        120 - (currentVel / maxVel) * 90
                      }, 200 40 T 400 ${120 - (currentVel / maxVel) * 70} T 600 130`}
                      fill="none"
                      stroke="#0EA5E9"
                      strokeWidth="3"
                    />

                    {/* Torque Waveform */}
                    <path
                      d={`M 0 ${140 - (currentTorque / 100) * 60} Q 150 ${
                        140 - (currentTorque / 100) * 80
                      }, 300 90 T 600 130`}
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>

                {/* Legend */}
                <div className="absolute top-2 right-3 flex items-center gap-4 text-[10px] font-mono bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
                  <div className="flex items-center gap-1.5 text-teal-400">
                    <span className="w-2.5 h-0.5 bg-teal-400" />
                    <span>Speed (mm/s)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-400">
                    <span className="w-2.5 h-0.5 bg-amber-400" />
                    <span>Torque (%)</span>
                  </div>
                </div>
              </div>

              {/* Telemetry Readouts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Actual Pos</div>
                  <div className="text-lg font-black font-mono text-amber-400">{currentPos} <span className="text-xs">mm</span></div>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Velocity</div>
                  <div className="text-lg font-black font-mono text-teal-400">{currentVel} <span className="text-xs">mm/s</span></div>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Motor Torque</div>
                  <div className="text-lg font-black font-mono text-amber-300">{currentTorque} <span className="text-xs">%</span></div>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Sync Status</div>
                  <div className="text-sm font-bold font-mono text-emerald-400 flex items-center justify-center gap-1 mt-1">
                    <Check className="w-4 h-4" /> LOCK 250µs
                  </div>
                </div>
              </div>

            </div>

            {/* Generated Code Snippet Card */}
            <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-200">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>AUTOGENERATED PLC MOTION LOGIC ({driveModel})</span>
                </div>
                <button
                  onClick={copyCode}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'COPIED!' : 'COPY BLOCK'}</span>
                </button>
              </div>

              <pre className="p-4 bg-[#050B14] rounded-lg border border-slate-800 text-xs font-mono text-amber-300 overflow-x-auto leading-relaxed">
                {generateCodeSnippet()}
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
