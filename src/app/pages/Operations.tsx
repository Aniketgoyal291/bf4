import {
  ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,
} from 'recharts';
import { PageHeader, InsightCard, SectionCard } from '../components/Layout';
import { slagRateData, cokeParams, sinterParams, pelletParams, burdenUsageData } from '../data/mockData';

const SlagTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    const vals: any = {};
    payload.forEach((p: any) => { vals[p.dataKey] = p.value; });
    return (
      <div style={{ background: '#0d1527', border: '1px solid #1a2744', borderRadius: 8, padding: '8px 12px', fontSize: 11 }}>
        <div style={{ color: '#e2e8f0', fontWeight: 700, marginBottom: 4 }}>{label}</div>
        {vals.upper !== undefined && <div style={{ color: '#f97316' }}>Upper Bound (+σ): {vals.upper?.toFixed(1)}</div>}
        {vals.lower !== undefined && <div style={{ color: '#f97316' }}>Lower Bound (-σ): {vals.lower?.toFixed(1)}</div>}
        {vals.actual !== undefined && <div style={{ color: '#8b5cf6' }}>Actual Slag Rate: {vals.actual?.toFixed(1)}</div>}
        <div style={{ color: '#22c55e' }}>Target: 410</div>
      </div>
    );
  }
  return null;
};

function ParamGrid({ title, params }: { title: string; params: { param: string; planned: any; actual: any; target: any; vsTarget: string; worse: boolean }[] }) {
  return (
    <SectionCard title={title}>
      <div className="mb-2 flex gap-4" style={{ fontSize: 11 }}>
        {[{ color: '#3b82f6', label: 'Planned' }, { color: '#8b5cf6', label: 'Actual' }, { color: '#22c55e', label: 'Target' }].map((l) => (
          <span key={l.label} className="flex items-center gap-1">
            <span style={{ color: l.color }}>■</span>
            <span style={{ color: '#64748b' }}>{l.label}</span>
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {params.map((p) => (
          <div key={p.param} className="rounded-lg p-3" style={{ background: '#111f38', border: '1px solid #1a2744' }}>
            <div style={{ color: '#e2e8f0', fontSize: 12, fontWeight: 600, marginBottom: 6 }}>{p.param}</div>
            <div className="flex gap-3 mb-2">
              <span style={{ color: '#3b82f6', fontSize: 12 }}>{p.planned}</span>
              <span style={{ color: '#64748b', fontSize: 11 }}>→</span>
              <span style={{ color: '#8b5cf6', fontSize: 12, fontWeight: 600 }}>{p.actual}</span>
              <span style={{ color: '#64748b', fontSize: 11 }}>(tgt: <span style={{ color: '#22c55e' }}>{p.target}</span>)</span>
            </div>
            <div className="flex items-center justify-between">
              <span style={{ color: '#64748b', fontSize: 11 }}>vs Target</span>
              <span style={{ color: p.worse ? '#ef4444' : '#22c55e', fontSize: 12, fontWeight: 700 }}>{p.vsTarget}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export function Operations() {
  return (
    <div>
      <PageHeader
        title="Operations Parameters"
        subtitle="Burden Quality & Process Control | BF4 | April 2025"
        summaryCards={[
          { label: 'Avg Slag Rate', value: '420 kg/thm', sub: 'vs 410 target', negative: true },
          { label: 'Slag Rate σ', value: '11 kg/thm', sub: 'vs 6 target', negative: true },
          { label: 'Fuel Rate', value: '528 kg/thm', sub: 'vs 510 target', negative: true },
        ]}
      />

      <div className="p-6 space-y-5">
        {/* Bollinger band chart */}
        <SectionCard title="Slag Rate & Variability (Bollinger Band Style)">
          <div style={{ height: 250 }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={slagRateData} margin={{ top: 10, right: 20, bottom: 0, left: -10 }}>
                <defs>
                  <linearGradient id="bollBand" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#1a2744" strokeDasharray="4 2" />
                <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 9 }} axisLine={{ stroke: '#1a2744' }} tickLine={false} interval={4} />
                <YAxis domain={[390, 450]} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip content={<SlagTooltip />} />
                {/* Band area between upper and lower */}
                <Area type="monotone" dataKey="upper" stroke="#f97316" strokeWidth={1} strokeDasharray="3 3" fill="url(#bollBand)" fillOpacity={1} dot={false} />
                <Area type="monotone" dataKey="lower" stroke="#f97316" strokeWidth={1} strokeDasharray="3 3" fill="#0d1527" fillOpacity={1} dot={false} />
                <Line type="monotone" dataKey="actual" stroke="#8b5cf6" strokeWidth={2} dot={false} name="Actual Slag Rate" />
                <ReferenceLine y={410} stroke="#22c55e" strokeDasharray="5 3" strokeWidth={1.5} label={{ value: 'Target 410', fill: '#22c55e', fontSize: 10, position: 'right' }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-3">
            {[
              { label: 'Avg Slag Rate', value: '420 kg/thm', color: '#8b5cf6' },
              { label: 'Std Deviation (σ)', value: '11 kg/thm', color: '#ef4444' },
              { label: 'Target Slag Rate', value: '410 kg/thm', color: '#22c55e' },
              { label: 'Target σ', value: '6 kg/thm', color: '#22c55e' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg p-3 text-center" style={{ background: '#111f38' }}>
                <div style={{ color: '#64748b', fontSize: 10 }}>{s.label}</div>
                <div style={{ color: s.color, fontSize: 16, fontWeight: 700 }}>{s.value}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Param grids */}
        <div className="grid grid-cols-3 gap-5">
          <ParamGrid title="Coke Parameters" params={cokeParams} />
          <ParamGrid title="Sinter Parameters" params={sinterParams} />
          <ParamGrid title="Pellet Parameters" params={pelletParams} />
        </div>

        {/* Burden Usage */}
        <SectionCard title="Burden Usage: Planned vs Actual (MT per ton of Hot Metal)">
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'collapse', fontSize: 12 }}>
              <thead>
                <tr>
                  {['Material', 'Planned (MT/thm)', 'Actual (MT/thm)', 'Deviation'].map((h, i) => (
                    <th key={i} className="py-2 px-4" style={{
                      background: '#111f38', color: '#94a3b8', fontWeight: 600, textAlign: i === 0 ? 'left' : 'right',
                      borderBottom: '1px solid #1a2744', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {burdenUsageData.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : '#0a1221' }}>
                    <td className="py-2 px-4" style={{ color: '#cbd5e1', borderBottom: '1px solid #1a2744' }}>{row.material}</td>
                    <td className="py-2 px-4 text-right" style={{ color: '#3b82f6', borderBottom: '1px solid #1a2744' }}>{row.planned.toFixed(3)}</td>
                    <td className="py-2 px-4 text-right" style={{ color: '#8b5cf6', borderBottom: '1px solid #1a2744' }}>{row.actual.toFixed(3)}</td>
                    <td className="py-2 px-4 text-right" style={{
                      color: row.deviation > 0 ? '#ef4444' : row.deviation < 0 ? '#22c55e' : '#94a3b8',
                      fontWeight: 600, borderBottom: '1px solid #1a2744',
                    }}>
                      {row.deviation > 0 ? '+' : ''}{row.deviation.toFixed(3)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {[
              { label: 'Key Issue', text: 'Sinter Overconsumption: +0.07 MT/thm vs plan (5.5% increase)', color: '#ef4444' },
              { label: 'Pellet Under-use', text: 'Pellet Underconsumption: -0.04 MT/thm vs plan (9.5% decrease)', color: '#eab308' },
              { label: 'Flux Overuse', text: '+12.7% vs plan due to ore quality variation', color: '#f97316' },
            ].map((c) => (
              <div key={c.label} className="rounded-lg px-3 py-2" style={{ background: '#111f38', borderLeft: `3px solid ${c.color}` }}>
                <div style={{ color: c.color, fontSize: 11, fontWeight: 600 }}>{c.label}</div>
                <div style={{ color: '#94a3b8', fontSize: 11 }}>{c.text}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Insights */}
        <div className="flex gap-4">
          <InsightCard type="critical" title="Critical Issue" headline="Slag Rate Variability" body="σ=11 vs target of 6. Implement tighter burden control and SPC" />
          <InsightCard type="warning" title="Quality Concern" headline="Coke Moisture at 4.2%" body="20% above target. Review coke drying and storage practices" />
          <InsightCard type="action" title="Burden Mix" headline="Sinter-Pellet Imbalance" body="Increase pellet usage to 0.45 MT/thm for better permeability" />
        </div>
      </div>
    </div>
  );
}
