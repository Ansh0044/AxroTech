export interface ServiceItem {
  id: string;
  title: string;
  category: 'plc' | 'motion' | 'panels' | 'iiot';
  subtitle: string;
  description: string;
  highlights: string[];
  hardwareSupported: string[];
  softwareTools: string[];
  keyBenefit: string;
  iconName: string;
}

export interface BrandInfo {
  id: string;
  name: string;
  logoText: string;
  colorHex: string;
  badgeBg: string;
  description: string;
  plcModels: string[];
  drivesSupported: string[];
  software: string[];
  motionCapabilities: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  industry: 'Metals' | 'Cement' | 'Oil & Gas' | 'Food & Beverage' | 'Packaging' | 'Pharmaceutical';
  brand: 'Siemens' | 'B&R' | 'Rockwell' | 'Schneider';
  clientLocation: string;
  yearCompleted: number;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  hardwareUsed: {
    plc: string[];
    drives: string[];
    hmiScada: string[];
  };
  featuredMotionAxisCount: number;
  tags: string[];
  imageUrl?: string;
}

export interface IndustrySector {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  keyApplications: string[];
  featuredProjectTitle: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface MotionAxisConfig {
  axisId: string;
  axisName: string;
  driveModel: 'Simotion S120' | 'Siemens G120' | 'Siemens V90' | 'B&R ACOPOS' | 'Siemens V20';
  targetPosMm: number;
  maxVelMmS: number;
  accelMmS2: number;
  camProfile: 'Linear' | 'Sinusoidal' | 'Polynomial' | 'Flying Shear';
  synchronizationRatio: number; // e.g., 1.0 = 1:1 master ratio
}

export interface RFQFormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  primaryBrand: string;
  requiredServices: string[];
  axisCount: number;
  controlPanelType: string;
  iiotIntegration: boolean;
  projectDescription: string;
  estimatedTimeline: string;
}
