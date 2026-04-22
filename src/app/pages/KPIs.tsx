import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { PageHeader, InsightCard, SectionCard, ProgressBar } from '../components/Layout';
import { kpiTrendData } from '../data/mockData';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface SubKPI {
  label: string;
  actual: string;
  target: string;
  deviation: string;
  progress: number;
  targetProgress: number;
  worse: boolean;
}

interface KPICardProps {
  section: string;
  title: string;
  actual: string;
  target: string;
  deviation: string;
  deviationColor: string;
  status: 'critical' | 'warning' | 'on-target';
  subKPIs: SubKPI[];
}

const STATUS_CONFIG = {
  critical: { color: '#ef4444', bg: '#ef444415', icon: XCircle, label: 'Critical' },
  warning: { color: '#f97316', bg: '#f9731615', icon: AlertTriangle, label: 'Warning' },
  'on-target': { color: '#22c55e', bg: '#22c55e15', icon: CheckCircle, label: 'On Target' },
};

function KPICard({ section, title, actual, target, deviation, deviationColor, status, subKPIs }: KPICardProps) {
  const cfg = STATUS_CONFIG[status];
  const Icon = cfg.icon;
  return (
    <div className="rounded-xl p-4" style={{ background: '#0d1527', border: `1px solid ${cfg.color}40`, borderTop: `3px solid ${cfg.color}` }}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <div style={{ color: '#64748b', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{section}</div>
          <div style={{ color: '#e2e8f0', fontSize: 14, fontWeight: 700 }}>{title}</div>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: cfg.bg }}>
          <Icon size={11} style={{ color: cfg.color }} />
          <span style={{ color: cfg.color, fontSize: 10, fontWeight: 600 }}>{cfg.label}</span>
        </div>
      </div>

      {/* Main metric */}
      <div className="rounded-lg p-3 mb-3" style={{ background: '#111f38' }}>
        <div style={{ color: '#e2e8f0', fontSize: 22, fontWeight: 800 }}>{actual}</div>
        <div className="flex items-center justify-between mt-1">
          <span style={{ color: '#64748b', fontSize: 11 }}>Target: <span style={{ color: '#22c55e' }}>{target}</span></span>
          <span style={{ color: deviationColor, fontSize: 12, fontWeight: 700 }}>{deviation}</span>
        </div>
      </div>

      {/* Sub KPIs */}
      <div className="space-y-2">
        {subKPIs.map((sub) => (
          <div key={sub.label}>
            <div className="flex items-center justify-between mb-1">
              <span style={{ color: '#94a3b8', fontSize: 11 }}>{sub.label}</span>
              <div className="flex items-center gap-2">
                <span style={{ color: '#8b5cf6', fontSize: 11, fontWeight: 600 }}>{sub.actual}</span>
                <span style={{ color: sub.worse ? '#ef4444' : '#22c55e', fontSize: 10 }}>{sub.deviation}</span>
              </div>
            </div>
            <div className="relative" style={{ height: 4, background: '#1a2744', borderRadius: 9999 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${sub.progress}%`, background: sub.worse ? '#ef4444' : '#22c55e', borderRadius: 9999 }} />
              <div style={{ position: 'absolute', left: `${sub.targetProgress}%`, top: -2, height: 8, width: 2, background: '#22c55e', borderRadius: 1 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const kpiCards: KPICardProps[] = [
  {
    section: 'Production Performance',
    title: 'Throughput',
    actual: '74,000 t/month',
    target: '92,000 t/month',
    deviation: '-19.6%',
    deviationColor: '#ef4444',
    status: 'critical',
    subKPIs: [
      { label: 'Daily Production Rate', actual: '2,467 t/day', target: '3,067 t/day', deviation: '-19.6%', progress: 80, targetProgress: 100, worse: true },
      { label: 'Availability %', actual: '87.5%', target: '95%', deviation: '-7.9%', progress: 92, targetProgress: 100, worse: true },
      { label: 'Utilization %', actual: '78.9%', target: '90%', deviation: '-12.3%', progress: 88, targetProgress: 100, worse: true },
    ],
  },
  {
    section: 'Cost Performance',
    title: 'Unit Hot Metal Cost',
    actual: '₹24,391/ton',
    target: '₹24,083/ton',
    deviation: '+1.3%',
    deviationColor: '#ef4444',
    status: 'warning',
    subKPIs: [
      { label: 'IBRM Cost', actual: '₹10,250/t', target: '₹10,618/t', deviation: '-3.5%', progress: 97, targetProgress: 100, worse: false },
      { label: 'Fuel Cost', actual: '₹7,850/t', target: '₹7,997/t', deviation: '-1.8%', progress: 98, targetProgress: 100, worse: false },
      { label: 'Conversion Cost', actual: '₹6,291/t', target: '₹5,468/t', deviation: '+15.1%', progress: 100, targetProgress: 87, worse: true },
    ],
  },
  {
    section: 'Quality Performance',
    title: 'Ore Fe%',
    actual: '56.01%',
    target: '57.95%',
    deviation: '-3.3%',
    deviationColor: '#ef4444',
    status: 'critical',
    subKPIs: [
      { label: 'HG Ore Fe%', actual: '61.8%', target: '62.5%', deviation: '-1.1%', progress: 99, targetProgress: 100, worse: true },
      { label: 'MG Ore Fe%', actual: '57.5%', target: '58.2%', deviation: '-1.2%', progress: 99, targetProgress: 100, worse: true },
      { label: 'Blend Fe%', actual: '56.01%', target: '57.95%', deviation: '-1.94%', progress: 97, targetProgress: 100, worse: true },
    ],
  },
  {
    section: 'Fuel Efficiency',
    title: 'Fuel Rate',
    actual: '528 kg/thm',
    target: '510 kg/thm',
    deviation: '+3.5%',
    deviationColor: '#ef4444',
    status: 'warning',
    subKPIs: [
      { label: 'Coke Rate', actual: '312.2 kg/thm', target: '310 kg/thm', deviation: '+0.7%', progress: 100, targetProgress: 99, worse: true },
      { label: 'Coal Rate', actual: '207.6 kg/thm', target: '200 kg/thm', deviation: '+3.8%', progress: 100, targetProgress: 97, worse: true },
      { label: 'Slag Rate', actual: '420 kg/thm', target: '410 kg/thm', deviation: '+2.4%', progress: 100, targetProgress: 98, worse: true },
    ],
  },
  {
    section: 'Process Stability',
    title: 'Slag Rate',
    actual: '420 kg/thm',
    target: '410 kg/thm',
    deviation: '+2.4%',
    deviationColor: '#ef4444',
    status: 'warning',
    subKPIs: [
      { label: 'Slag Rate Variability (σ)', actual: '11 kg/thm', target: '6 kg/thm', deviation: '+83.3%', progress: 100, targetProgress: 55, worse: true },
      { label: 'Basicity', actual: '1.18', target: '1.15', deviation: '+2.6%', progress: 100, targetProgress: 97, worse: true },
      { label: 'Hot Metal Temp', actual: '1,485°C', target: '1,500°C', deviation: '-1.0%', progress: 99, targetProgress: 100, worse: true },
    ],
  },
  {
    section: 'Burden Quality',
    title: 'Sinter Quality Index',
    actual: '72 Index',
    target: '80 Index',
    deviation: '-10.0%',
    deviationColor: '#ef4444',
    status: 'critical',
    subKPIs: [
      { label: 'Tumbler Index', actual: '65%', target: '70%', deviation: '-7.1%', progress: 93, targetProgress: 100, worse: true },
      { label: 'RDI', actual: '28%', target: '23%', deviation: '+21.7%', progress: 100, targetProgress: 82, worse: true },
      { label: 'FeO', actual: '9.2%', target: '8%', deviation: '+15.0%', progress: 100, targetProgress: 87, worse: true },
    ],
  },
  {
    section: 'Equipment Effectiveness',
    title: 'OEE',
    actual: '68.9%',
    target: '85%',
    deviation: '-18.9%',
    deviationColor: '#ef4444',
    status: 'critical',
    subKPIs: [
      { label: 'Availability', actual: '87.5%', target: '95%', deviation: '-7.9%', progress: 92, targetProgress: 100, worse: true },
      { label: 'Performance', actual: '78.9%', target: '90%', deviation: '-12.3%', progress: 88, targetProgress: 100, worse: true },
      { label: 'Quality Rate', actual: '99.8%', target: '99.5%', deviation: '+0.3%', progress: 100, targetProgress: 99, worse: false },
    ],
  },
  {
    section: 'Yield',
    title: 'Iron Yield',
    actual: '91.2%',
    target: '93.5%',
    deviation: '-2.5%',
    deviationColor: '#ef4444',
    status: 'warning',
    subKPIs: [
      { label: 'Metallic Yield', actual: '93.8%', target: '95%', deviation: '-1.3%', progress: 99, targetProgress: 100, worse: true },
      { label: 'Slag Fe%', actual: '0.48%', target: '0.35%', deviation: '+37.1%', progress: 100, targetProgress: 73, worse: true },
      { label: 'Dust Losses', actual: '1.8%', target: '1.2%', deviation: '+50.0%', progress: 100, targetProgress: 67, worse: true },
    ],
  },
];

export function KPIs() {
  const critical = kpiCards.filter((k) => k.status === 'critical').length;
  const warning = kpiCards.filter((k) => k.status === 'warning').length;
  const onTarget = kpiCards.filter((k) => k.status === 'on-target').length;

  return (
    <div>
      <PageHeader
        title="Key Performance Indicators (KPIs)"
        subtitle="Leading & Sub-KPIs Dashboard | BF4 | April 2025"
        summaryCards={[
          { label: 'On Target', value: `${onTarget}`, sub: 'KPIs on track', positive: true },
          { label: 'Warning', value: `${warning}`, sub: 'Needs attention' },
          { label: 'Critical', value: `${critical}`, sub: 'Immediate action', negative: true },
        ]}
      />

      <div className="p-6 space-y-5">
        {/* KPI grid */}
        <div className="grid grid-cols-2 gap-4">
          {kpiCards.map((kpi) => (
            <KPICard key={kpi.title} {...kpi} />
          ))}
        </div>

        {/* KPI Trends */}
        <div className="grid grid-cols-2 gap-5">
          <SectionCard title="KPI Trends: Throughput & Unit Cost (Last 6 Months)">
            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={kpiTrendData} margin={{ top: 5, right: 20, bottom: 0, left: -10 }}>
                  <CartesianGrid stroke="#1a2744" strokeDasharray="4 2" />
                  <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={{ stroke: '#1a2744' }} tickLine={false} />
                  <YAxis yAxisId="left" domain={[70000, 95000]} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis yAxisId="right" orientation="right" domain={[23000, 25000]} tickFormatter={(v) => `₹${(v / 1000).toFixed(1)}k`} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: '#0d1527', border: '1px solid #1a2744', borderRadius: 8, fontSize: 11 }} />
                  <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} />
                  <Line yAxisId="left" type="monotone" dataKey="throughput" name="Throughput (t)" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3, fill: '#3b82f6' }} />
                  <Line yAxisId="right" type="monotone" dataKey="unitCost" name="Unit Cost (₹/t)" stroke="#ef4444" strokeWidth={2} dot={{ r: 3, fill: '#ef4444' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard title="KPI Trends: Fuel Rate & Ore Fe% (Last 6 Months)">
            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={kpiTrendData} margin={{ top: 5, right: 20, bottom: 0, left: -10 }}>
                  <CartesianGrid stroke="#1a2744" strokeDasharray="4 2" />
                  <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={{ stroke: '#1a2744' }} tickLine={false} />
                  <YAxis yAxisId="left" domain={[500, 540]} tickFormatter={(v) => `${v}`} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis yAxisId="right" orientation="right" domain={[55, 59]} tickFormatter={(v) => `${v}%`} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: '#0d1527', border: '1px solid #1a2744', borderRadius: 8, fontSize: 11 }} />
                  <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} />
                  <Line yAxisId="left" type="monotone" dataKey="fuelRate" name="Fuel Rate (kg/thm)" stroke="#f97316" strokeWidth={2} dot={{ r: 3, fill: '#f97316' }} />
                  <Line yAxisId="right" type="monotone" dataKey="oreFe" name="Ore Fe%" stroke="#22c55e" strokeWidth={2} dot={{ r: 3, fill: '#22c55e' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
        </div>

        {/* Performance summary */}
        <div className="flex gap-4">
          <InsightCard type="critical" title="Critical Focus Area" headline="Throughput Recovery" body="19.6% below plan. Address RM availability and operations stability urgently." />
          <InsightCard type="warning" title="Process Stability" headline="Reduce Variability" body="Slag rate σ at 11 vs target 6. Implement SPC and tighter burden control." />
          <InsightCard type="action" title="Quality Improvement" headline="Fe% Enhancement" body="Increase HG ore proportion from current levels to improve 57.95% target." />
        </div>
      </div>
    </div>
  );
}
