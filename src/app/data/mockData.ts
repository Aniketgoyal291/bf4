// BF4 JSW Steel - Mock Data

// Color system
export const COLORS = {
  bg: '#070d1a',
  card: '#0d1527',
  card2: '#111f38',
  border: '#1a2744',
  borderLight: '#243554',
  textPrimary: '#e2e8f0',
  textSecondary: '#94a3b8',
  textMuted: '#64748b',
  blue: '#3b82f6',
  purple: '#8b5cf6',
  green: '#22c55e',
  red: '#ef4444',
  orange: '#f97316',
  yellow: '#eab308',
  gray: '#6b7280',
  teal: '#14b8a6',
};

// Loss Tree waterfall
export const lossTreeWaterfall = [
  { name: 'Planned', base: 0, value: 24083, type: 'total', display: '₹24,083' },
  { name: 'IBRM Cost', base: 24083, value: 368, type: 'neg', display: '-₹368' },
  { name: 'Coal Cost', base: 24389, value: 62, type: 'pos', display: '+₹62' },
  { name: 'Coke Cost', base: 24389, value: 208, type: 'neg', display: '-₹208' },
  { name: 'Flux Cost', base: 24597, value: 6, type: 'neg', display: '-₹6' },
  { name: 'BF Conv.', base: 24390, value: 213, type: 'pos', display: '+₹213' },
  { name: 'Actual', base: 0, value: 24391, type: 'total', display: '₹24,391' },
];

export const lossDriverCards = [
  { label: 'IBRM Cost', value: '-₹368', unit: 'per ton', positive: false },
  { label: 'Coal Cost', value: '+₹62', unit: 'per ton', positive: true },
  { label: 'Coke Cost', value: '-₹208', unit: 'per ton', positive: false },
  { label: 'Flux Cost', value: '-₹6', unit: 'per ton', positive: false },
  { label: 'BF Conversion', value: '+₹213', unit: 'per ton', positive: true },
];

export const top5LossDrivers = [
  { name: 'Coke BF Operations', category: 'Coke Cost', value: '₹-218 per ton', positive: false },
  { name: 'Slag Rate Variability (Coke)', category: 'Coke Cost', value: '₹-148 per ton', positive: false },
  { name: 'BF Conversion Credits', category: 'BF Conversion', value: '+₹227 per ton', positive: true },
  { name: 'Coal BF Operations', category: 'Coal Cost', value: '+₹111 per ton', positive: true },
  { name: 'Blend Conversion Cost', category: 'IBRM Cost', value: '₹-270 per ton', positive: false },
];

// IBRM source table
export const ibrmSourceData = [
  { source: 'NMDC', planQty: 0.45, planFe: 64.2, planRate: 5200, actQty: 0.38, actFe: 63.8, actRate: 5100, qtyDev: -0.07, feDev: -0.4, rateDev: -100 },
  { source: 'RPC', planQty: 0.55, planFe: 62.5, planRate: 4800, actQty: 0.48, actFe: 61.9, actRate: 4650, qtyDev: -0.07, feDev: -0.6, rateDev: -150 },
  { source: 'Vedanta', planQty: 0.35, planFe: 61.8, planRate: 4600, actQty: 0.29, actFe: 60.5, actRate: 4450, qtyDev: -0.06, feDev: -1.3, rateDev: -150 },
  { source: 'Captive Mines', planQty: 0.42, planFe: 58.5, planRate: 3900, actQty: 0.37, actFe: 57.2, actRate: 3750, qtyDev: -0.05, feDev: -1.3, rateDev: -150 },
  { source: 'Cat A&B HG', planQty: 0.38, planFe: 59.5, planRate: 4100, actQty: 0.32, actFe: 58.8, actRate: 3980, qtyDev: -0.06, feDev: -0.7, rateDev: -120 },
  { source: 'Cat A&B MG', planQty: 0.35, planFe: 53.2, planRate: 3500, actQty: 0.26, actFe: 52.1, actRate: 3380, qtyDev: -0.09, feDev: -1.1, rateDev: -120 },
];

export const ibrmGradeData = [
  { grade: 'HG (>60% Fe)', planQty: 1.35, planFe: 62.5, planRate: 4850, actQty: 1.08, actFe: 61.8, actRate: 4720, dev: -130 },
  { grade: 'MG (56-60% Fe)', planQty: 0.82, planFe: 58.2, planRate: 4050, actQty: 0.71, actFe: 57.5, actRate: 3920, dev: -130 },
  { grade: 'LG (<56% Fe)', planQty: 0.23, planFe: 54.1, planRate: 3400, actQty: 0.21, actFe: 53.2, actRate: 3280, dev: -120 },
  { grade: 'MnO Bearing', planQty: 0.10, planFe: 52.8, planRate: 3800, actQty: 0.10, actFe: 52.5, actRate: 3750, dev: -50 },
  { grade: 'TOTAL', planQty: 2.50, planFe: 57.95, planRate: 4378, actQty: 2.10, actFe: 56.01, actRate: 4131, dev: -247 },
];

export const chemCompositionData = [
  { param: 'Fe%', plan: 57.95, actual: 56.01 },
  { param: 'SiO2%', plan: 4.20, actual: 4.80 },
  { param: 'Al2O3%', plan: 2.80, actual: 3.10 },
  { param: 'MnO%', plan: 0.42, actual: 0.38 },
];

// Fuel Cost waterfall data
export const coalWaterfallData = [
  { name: 'Market Mvmt', base: 0, value: 4, type: 'pos', display: '+4' },
  { name: 'Slag Rate', base: 4, value: 49, type: 'neg', display: '-49' },
  { name: 'Slag Variability', base: 4-49+49, value: 0, type: 'zero', display: '0' },
  // adjusted to show correct visual
  { name: 'BF Operations', base: 0, value: 111, type: 'pos', display: '+111' },
  { name: 'Total', base: 0, value: 62, type: 'total', display: '+₹62' },
];

// Simplified fuel waterfall
export const coalWaterfall = [
  { name: 'Market Mvmt', base: 0, value: 4, type: 'pos', display: '+4' },
  { name: 'Slag Rate', base: 4, value: 49, type: 'neg', display: '-49' },
  { name: 'Slag Variability', base: -45, value: 0, type: 'zero', display: '0' },
  { name: 'BF Ops', base: -45, value: 111, type: 'pos', display: '+111' },
  { name: 'Total', base: 0, value: 62, type: 'total', display: '+₹62' },
];

export const cokeWaterfall = [
  { name: 'Market Mvmt', base: 0, value: 81, type: 'pos', display: '+81' },
  { name: 'Slag Rate', base: 81, value: 11, type: 'pos', display: '+11' },
  { name: 'Slag Variability', base: 92, value: 148, type: 'neg', display: '-148' },
  { name: 'BF Ops', base: -56, value: 218, type: 'neg', display: '-218' },
  { name: 'Total', base: 0, value: 208, type: 'total', display: '-₹208' },
];

// 30-day fuel trend
export const fuelTrendData = Array.from({ length: 30 }, (_, i) => ({
  day: `D${i + 1}`,
  fuelRate: 500 + Math.sin(i * 0.4) * 18 + Math.random() * 8,
  cokeRate: 302 + Math.sin(i * 0.3) * 10 + Math.random() * 5,
  coalRate: 198 + Math.sin(i * 0.5) * 8 + Math.random() * 4,
}));

// Operations - Bollinger band data
export const slagRateData = Array.from({ length: 30 }, (_, i) => {
  const base = 420 + Math.sin(i * 0.4) * 8;
  const sigma = 11;
  return {
    day: `D${i + 1}`,
    actual: base + (Math.random() - 0.5) * 10,
    upper: base + sigma,
    lower: base - sigma,
    target: 410,
  };
});

// BF Conversion tables
export const bfLossesData = [
  { item: 'Spillage & Wastage', planned: 52, actual: 68, variance: 16 },
  { item: 'Dust Losses', planned: 28, actual: 35, variance: 7 },
  { item: 'Slag Losses (Fe)', planned: 18, actual: 25, variance: 7 },
  { item: 'Gas Losses', planned: 12, actual: 15, variance: 3 },
  { item: 'Other Losses', planned: 8, actual: 11, variance: 3 },
  { item: 'TOTAL', planned: 118, actual: 154, variance: 36, isTotal: true },
];

export const shutdownsData = [
  { item: 'Planned Shutdowns', planned: 48, actual: 48, variance: 0 },
  { item: 'Unplanned Shutdowns', planned: 0, actual: 72, variance: 72 },
  { item: 'Maintenance Hours', planned: 36, actual: 42, variance: 6 },
  { item: 'Hot Delays', planned: 8, actual: 18, variance: 10 },
  { item: 'TOTAL', planned: 92, actual: 180, variance: 88, isTotal: true },
];

export const utilitiesData = [
  { item: 'Power', planned: 280, actual: 265, variance: 15 },
  { item: 'Steam', planned: 120, actual: 110, variance: 10 },
  { item: 'Water', planned: 85, actual: 75, variance: 10 },
  { item: 'Oxygen', planned: 190, actual: 175, variance: 15 },
  { item: 'N2 Gas', planned: 45, actual: 50, variance: -5 },
  { item: 'TOTAL', planned: 720, actual: 675, variance: 45, isTotal: true },
];

export const creditsData = [
  { item: 'BF Gas', planned: 450, actual: 520, variance: 70 },
  { item: 'BF Slag', planned: 280, actual: 350, variance: 70 },
  { item: 'Dust Recovery', planned: 95, actual: 110, variance: 15 },
  { item: 'Scrap Sales', planned: 68, actual: 85, variance: 17 },
  { item: 'TOTAL', planned: 893, actual: 1065, variance: 172, isTotal: true },
];

// Unit fixed cost trend
export const fixedCostTrend = [
  { month: 'Jan', planned: 1820, actual: 1790 },
  { month: 'Feb', planned: 1840, actual: 1855 },
  { month: 'Mar', planned: 1850, actual: 1920 },
  { month: 'Apr', planned: 1850, actual: 2150 },
];

// Throughput bars
export const throughputData = [
  { name: 'Monthly Target', value: 95000, color: '#3b82f6' },
  { name: 'Planned', value: 92000, color: '#8b5cf6' },
  { name: 'Actual', value: 74000, color: '#f97316' },
];

// Ore receipts by grade
export const oreReceiptsByGrade = [
  { grade: 'HG (>60%)', planned: 1.35, actual: 1.08, dev: -0.27 },
  { grade: 'MG (56-60%)', planned: 0.82, actual: 0.71, dev: -0.11 },
  { grade: 'LG (<56%)', planned: 0.23, actual: 0.21, dev: -0.02 },
  { grade: 'MnO Bearing', planned: 0.10, actual: 0.10, dev: 0.00 },
];

export const oreConsumptionByGrade = [
  { grade: 'HG (>60%)', planned: 1.28, actual: 1.02, dev: -0.26 },
  { grade: 'MG (56-60%)', planned: 0.78, actual: 0.68, dev: -0.10 },
  { grade: 'LG (<56%)', planned: 0.22, actual: 0.20, dev: -0.02 },
  { grade: 'MnO Bearing', planned: 0.10, actual: 0.10, dev: 0.00 },
];

// Fe% trend for 30 days
export const feTrendData = Array.from({ length: 30 }, (_, i) => ({
  day: `D${i + 1}`,
  hg: 61.8 + Math.sin(i * 0.3) * 0.5 + (Math.random() - 0.5) * 0.4,
  mg: 57.5 + Math.sin(i * 0.4) * 0.4 + (Math.random() - 0.5) * 0.3,
  lg: 53.2 + Math.sin(i * 0.35) * 0.3 + (Math.random() - 0.5) * 0.2,
  mno: 52.5 + Math.sin(i * 0.2) * 0.2 + (Math.random() - 0.5) * 0.1,
}));

export const chemTrendData = Array.from({ length: 30 }, (_, i) => ({
  day: `D${i + 1}`,
  fe: 56.01 + Math.sin(i * 0.3) * 0.4 + (Math.random() - 0.5) * 0.3,
  sio2: 4.80 + Math.sin(i * 0.4) * 0.2 + (Math.random() - 0.5) * 0.15,
  al2o3: 3.10 + Math.sin(i * 0.35) * 0.1 + (Math.random() - 0.5) * 0.08,
  mno: 0.38 + Math.sin(i * 0.2) * 0.03 + (Math.random() - 0.5) * 0.02,
}));

export const inventoryStatusData = [
  { grade: 'HG Ore', plannedQty: 1.35, actualQty: 1.08, shortfall: -0.27, inventory: 0.15, status: 'Shortage' },
  { grade: 'MG Ore', plannedQty: 0.82, actualQty: 0.71, shortfall: -0.11, inventory: 0.08, status: 'Shortage' },
  { grade: 'LG Ore', plannedQty: 0.23, actualQty: 0.21, shortfall: -0.02, inventory: 0.12, status: 'Slight Short' },
  { grade: 'MnO Ore', plannedQty: 0.10, actualQty: 0.10, shortfall: 0.00, inventory: 0.05, status: 'Adequate' },
];

// KPI 6-month trend
export const kpiTrendData = [
  { month: 'Nov', throughput: 88500, unitCost: 23450, fuelRate: 514, oreFe: 58.1 },
  { month: 'Dec', throughput: 86200, unitCost: 23680, fuelRate: 516, oreFe: 57.8 },
  { month: 'Jan', throughput: 85000, unitCost: 23850, fuelRate: 519, oreFe: 57.5 },
  { month: 'Feb', throughput: 82400, unitCost: 24020, fuelRate: 521, oreFe: 57.2 },
  { month: 'Mar', throughput: 79800, unitCost: 24180, fuelRate: 525, oreFe: 56.6 },
  { month: 'Apr', throughput: 74000, unitCost: 24391, fuelRate: 528, oreFe: 56.01 },
];

// Burden usage
export const burdenUsageData = [
  { material: 'Sinter', planned: 1.280, actual: 1.350, deviation: 0.070 },
  { material: 'Pellet', planned: 0.420, actual: 0.380, deviation: -0.040 },
  { material: 'Lump Ore', planned: 0.180, actual: 0.220, deviation: 0.040 },
  { material: 'Flux (Limestone)', planned: 0.055, actual: 0.062, deviation: 0.007 },
  { material: 'Flux (Dolomite)', planned: 0.025, actual: 0.028, deviation: 0.003 },
];

// Coke parameters
export const cokeParams = [
  { param: 'Coke Ash (%)', planned: 18.5, actual: 19.2, target: 18.0, vsTarget: '+1.2%', worse: true },
  { param: 'Coke Moisture (%)', planned: 3.5, actual: 4.2, target: 3.0, vsTarget: '+1.2%', worse: true },
  { param: 'CSR', planned: 65, actual: 62, target: 68, vsTarget: '-6.0%', worse: true },
  { param: 'CRI', planned: 24, actual: 26, target: 22, vsTarget: '+4.0%', worse: true },
  { param: 'MICUM (+40mm)', planned: 82, actual: 79, target: 85, vsTarget: '-6.0%', worse: true },
  { param: 'MPS (mm)', planned: 52, actual: 50, target: 54, vsTarget: '-4.0 mm', worse: true },
];

export const sinterParams = [
  { param: 'Tumbler Index', planned: 68, actual: 65, target: 70, vsTarget: '-5.0%', worse: true },
  { param: 'RDI', planned: 25, actual: 28, target: 23, vsTarget: '+5.0%', worse: true },
  { param: 'FeO (%)', planned: 8.5, actual: 9.2, target: 8.0, vsTarget: '+1.2%', worse: true },
  { param: 'Fines (-5mm) %', planned: 4.2, actual: 5.8, target: 3.5, vsTarget: '+2.3%', worse: true },
];

export const pelletParams = [
  { param: 'CCS (kg/pellet)', planned: 240, actual: 228, target: 250, vsTarget: '-22.0 kg/p', worse: true },
  { param: 'RDI', planned: 18, actual: 21, target: 16, vsTarget: '+5.0%', worse: true },
  { param: 'Tumbler Index', planned: 95, actual: 93, target: 96, vsTarget: '-3.0%', worse: true },
  { param: 'FeO (%)', planned: 0.8, actual: 1.2, target: 0.6, vsTarget: '+0.6%', worse: true },
];
