import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
  LineChart, Line, Legend, ResponsiveContainer,
} from 'recharts';
import { PageHeader, InsightCard, SectionCard } from '../components/Layout';
import { fuelTrendData } from '../data/mockData';

const WaterfallTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    const d = payload.find((p: any) => p.dataKey === 'value')?.payload;
    if (!d) return null;
    const color = d.type === 'total' ? '#4f6ef7' : d.type === 'pos' ? '#22c55e' : '#ef4444';
    return (
      <div style={{ background: '#0d1527', border: '1px solid #1a2744', borderRadius: 8, padding: '8px 12px' }}>
        <div style={{ color: '#94a3b8', fontSize: 11 }}>{label}</div>
        <div style={{ color, fontSize: 14, fontWeight: 700 }}>{d.display ?? ''}</div>
      </div>
    );
  }
  return null;
};

function WaterfallChart({ data, title, callout }: { data: any[]; title: string; callout: string }) {
  const yMin = Math.min(...data.map((d) => Math.min(d.value, 0))) - 15;
  const yMax = Math.max(...data.map((d) => Math.max(d.value, 0))) + 15;

  return (
    <SectionCard title={title}>
      <div style={{ height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 10, bottom: 0, left: -10 }} barCategoryGap="30%">
            <CartesianGrid vertical={false} stroke="#1a2744" strokeDasharray="4 2" />
            <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={{ stroke: '#1a2744' }} tickLine={false} />
            <YAxis domain={[yMin, yMax]} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip content={<WaterfallTooltip />} />
            <Bar dataKey="value" radius={[3, 3, 0, 0]}>
              {data.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.type === 'total' ? '#4f6ef7' : entry.value >= 0 ? '#22c55e' : '#ef4444'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 rounded-lg px-3 py-2" style={{ background: '#111f38', fontSize: 11, color: '#94a3b8' }}>
        {callout}
      </div>
    </SectionCard>
  );
}

const coalData = [
  { name: 'Market Mvmt', value: 4, type: 'pos', display: '+4' },
  { name: 'Slag Rate', value: -49, type: 'neg', display: '-49' },
  { name: 'Slag Variability', value: 0, type: 'zero', display: '0' },
  { name: 'BF Ops', value: 111, type: 'pos', display: '+111' },
  { name: 'Total', value: 62, type: 'total', display: '+₹62' },
];

const cokeData = [
  { name: 'Market Mvmt', value: 81, type: 'pos', display: '+81' },
  { name: 'Slag Rate', value: 11, type: 'pos', display: '+11' },
  { name: 'Slag Variability', value: -148, type: 'neg', display: '-148' },
  { name: 'BF Ops', value: -218, type: 'neg', display: '-218' },
  { name: 'Total', value: -208, type: 'total', display: '-₹208' },
];

const fuelParams = [
  {
    title: 'Slag Rate (kg/thm)',
    planned: '410 kg/thm', actual: '420 kg/thm', target: '400 kg/thm',
    vsPlan: '+10.0 kg/thm', vsTarget: '+20.0 kg/thm', worse: true,
  },
  {
    title: 'Coke Moisture (%)',
    planned: '3.5%', actual: '4.2%', target: '3.0%',
    vsPlan: '+0.7%', vsTarget: '+1.2%', worse: true,
  },
  {
    title: 'Slag Rate Variability (σ)',
    planned: '8 kg/thm', actual: '11 kg/thm', target: '6 kg/thm',
    vsPlan: '+3.0 kg/thm', vsTarget: '+5.0 kg/thm', worse: true,
  },
];

const thumbrules = [
  { title: 'Slag Rate Impact', value: '1.2 kg/ton', desc: '10 kg change in slag rate → 1.2 kg change in fuel rate' },
  { title: 'Slag Rate Variability', value: '1.8 kg/ton', desc: '1 kg increase in slag rate σ → 1.8 kg change in fuel rate' },
  { title: 'Coke Moisture Impact', value: '4 kg/ton', desc: '1% increase in coke moisture → +4 kg fuel rate' },
];

export function FuelCosts() {
  return (
    <div>
      <PageHeader
        title="Fuel Cost Analysis"
        subtitle="Coal & Coke Cost Breakdown | BF4 | April 2025"
        summaryCards={[
          { label: 'Coal Cost Impact', value: '+₹62', sub: 'per ton (Savings)', positive: true },
          { label: 'Coke Cost Impact', value: '-₹208', sub: 'per ton (Loss)', negative: true },
          { label: 'Net Fuel Impact', value: '-₹147', sub: 'per ton', negative: true },
        ]}
      />

      <div className="p-6 space-y-5">
        {/* Two waterfall charts */}
        <div className="grid grid-cols-2 gap-5">
          <WaterfallChart
            data={coalData}
            title="Coal Cost Waterfall"
            callout="Coal Cost Deviation: +₹62/ton  |  Sum: 0 + 4 - 49 + 111 = +₹62"
          />
          <WaterfallChart
            data={cokeData}
            title="Coke Cost Waterfall"
            callout="Coke Cost Deviation: -₹208/ton  |  Sum: 81 + 11 - 148 - 218 = -₹274 (adjusted -₹208)"
          />
        </div>

        {/* Fuel parameters */}
        <div>
          <div style={{ color: '#94a3b8', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            Key Fuel Parameters
          </div>
          <div className="grid grid-cols-3 gap-4">
            {fuelParams.map((p) => (
              <div key={p.title} className="rounded-xl p-4" style={{ background: '#0d1527', border: '1px solid #1a2744' }}>
                <div style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 600, marginBottom: 10 }}>{p.title}</div>
                <div className="space-y-2">
                  {[
                    { label: 'Planned', value: p.planned, color: '#3b82f6' },
                    { label: 'Actual', value: p.actual, color: '#8b5cf6' },
                    { label: 'Target', value: p.target, color: '#22c55e' },
                    { label: 'vs Plan', value: p.vsPlan, color: '#ef4444' },
                    { label: 'vs Target', value: p.vsTarget, color: '#ef4444' },
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between">
                      <span style={{ color: '#64748b', fontSize: 11 }}>{r.label}</span>
                      <span style={{ color: r.color, fontSize: 12, fontWeight: 600 }}>{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thumbrules */}
        <div>
          <div style={{ color: '#94a3b8', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            Fuel Consumption Thumb Rules
          </div>
          <div className="grid grid-cols-3 gap-4">
            {thumbrules.map((t) => (
              <div key={t.title} className="rounded-xl p-4" style={{ background: '#0d1527', border: '1px solid #eab30830', borderLeft: '3px solid #eab308' }}>
                <div style={{ color: '#eab308', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>{t.title}</div>
                <div style={{ color: '#e2e8f0', fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{t.value}</div>
                <div style={{ color: '#64748b', fontSize: 11 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 30-day fuel trend */}
        <SectionCard title="30-Day Fuel Rate Trend">
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[
              { label: 'Avg Fuel Rate', value: '519.8 kg/thm', color: '#f97316' },
              { label: 'Avg Coke Rate', value: '312.2 kg/thm', color: '#ef4444' },
              { label: 'Avg Coal Rate', value: '207.6 kg/thm', color: '#3b82f6' },
              { label: 'Fuel Rate Range', value: '499 – 543', color: '#94a3b8' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg p-3 text-center" style={{ background: '#111f38' }}>
                <div style={{ color: '#64748b', fontSize: 10 }}>{s.label}</div>
                <div style={{ color: s.color, fontSize: 14, fontWeight: 700 }}>{s.value}</div>
              </div>
            ))}
          </div>
          <div style={{ height: 220 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={fuelTrendData} margin={{ top: 5, right: 20, bottom: 0, left: -10 }}>
                <CartesianGrid stroke="#1a2744" strokeDasharray="4 2" />
                <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 9 }} axisLine={{ stroke: '#1a2744' }} tickLine={false}
                  interval={4} />
                <YAxis domain={[180, 560]} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#0d1527', border: '1px solid #1a2744', borderRadius: 8, fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} />
                <Line type="monotone" dataKey="fuelRate" name="Total Fuel Rate" stroke="#f97316" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="cokeRate" name="Coke Rate" stroke="#ef4444" strokeWidth={1.5} dot={false} />
                <Line type="monotone" dataKey="coalRate" name="Coal Rate" stroke="#3b82f6" strokeWidth={1.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        {/* Insights */}
        <div className="flex gap-4">
          <InsightCard
            type="critical"
            title="Critical Issue"
            headline="Slag Rate Variability"
            body="Combined impact of ~₹197/ton on coal & coke. Reduce σ from 11 to target 6"
          />
          <InsightCard
            type="warning"
            title="BF Operations"
            headline="-₹218 on Coke"
            body="High coke rate spikes observed. Review burden distribution & thermal state"
          />
          <InsightCard
            type="opportunity"
            title="Quick Win"
            headline="Coke Moisture Control"
            body="Reduce from 4.2% to 3.0% target"
          />
        </div>
      </div>
    </div>
  );
}