import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer,
} from 'recharts';
import { PageHeader, InsightCard, SectionCard } from '../components/Layout';
import { lossTreeWaterfall, top5LossDrivers } from '../data/mockData';

const COLORS = {
  total: '#4f6ef7',
  pos: '#22c55e',
  neg: '#ef4444',
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const entry = payload.find((p: any) => p.dataKey === 'value');
    if (!entry) return null;
    const data = entry.payload;
    const display = data.display ?? '';
    const color = data.type === 'total' ? '#4f6ef7' : data.type === 'pos' ? '#22c55e' : '#ef4444';
    return (
      <div style={{ background: '#0d1527', border: '1px solid #1a2744', borderRadius: 8, padding: '8px 12px' }}>
        <div style={{ color: '#94a3b8', fontSize: 11 }}>{label}</div>
        <div style={{ color, fontSize: 15, fontWeight: 700 }}>{display}</div>
        <div style={{ color: '#64748b', fontSize: 10 }}>₹ per ton HM</div>
      </div>
    );
  }
  return null;
};

const CustomLabel = (props: any) => {
  const { x, y, width, display, type } = props;
  if (!display) return null;
  const color = type === 'total' ? '#c4b5fd' : type === 'pos' ? '#86efac' : '#fca5a5';
  return (
    <text x={x + width / 2} y={y - 6} fill={color} textAnchor="middle" fontSize={10} fontWeight={700}>
      {display}
    </text>
  );
};

export function LossTree() {
  return (
    <div>
      <PageHeader
        title="Cost Variance Analysis"
        subtitle="BF4 | April 2025 | Plan vs Actual"
        summaryCards={[
          { label: 'Planned Cost', value: '₹24,083', sub: 'per ton HM' },
          { label: 'Actual Cost', value: '₹24,391', sub: 'per ton HM' },
          { label: 'Variance', value: '+₹308', sub: '+1.28%', negative: true },
        ]}
      />

      <div className="p-6 space-y-5">
        {/* Waterfall chart */}
        <SectionCard title="Cost Waterfall — Planned to Actual">
          <div style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={lossTreeWaterfall} margin={{ top: 24, right: 20, bottom: 10, left: 30 }} barCategoryGap="30%">
                <CartesianGrid vertical={false} stroke="#1a2744" strokeDasharray="4 2" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: '#64748b', fontSize: 11 }}
                  axisLine={{ stroke: '#1a2744' }}
                  tickLine={false}
                />
                <YAxis
                  domain={[23600, 24700]}
                  tickFormatter={(v) => `₹${(v / 1000).toFixed(1)}k`}
                  tick={{ fill: '#64748b', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                {/* Invisible base bar */}
                <Bar dataKey="base" stackId="a" fill="transparent" isAnimationActive={false} />
                {/* Visible delta bar */}
                <Bar dataKey="value" stackId="a" radius={[3, 3, 0, 0]} label={<CustomLabel />}>
                  {lossTreeWaterfall.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.type === 'total' ? COLORS.total : entry.type === 'pos' ? COLORS.pos : COLORS.neg}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="flex gap-6 mt-3 justify-center">
            {[
              { color: COLORS.total, label: 'Base / Total' },
              { color: COLORS.pos, label: 'Savings (Positive)' },
              { color: COLORS.neg, label: 'Additional Cost (Negative)' },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <div className="rounded-sm" style={{ width: 12, height: 12, background: l.color }} />
                <span style={{ color: '#94a3b8', fontSize: 11 }}>{l.label}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Loss driver cards */}
        <div>
          <div style={{ color: '#94a3b8', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            Cost Component Breakdown
          </div>
          <div className="grid grid-cols-5 gap-3">
            {[
              { label: 'IBRM Cost', value: '-₹368', unit: 'per ton', positive: false },
              { label: 'Coal Cost', value: '+₹62', unit: 'per ton', positive: true },
              { label: 'Coke Cost', value: '-₹208', unit: 'per ton', positive: false },
              { label: 'Flux Cost', value: '-₹6', unit: 'per ton', positive: false },
              { label: 'BF Conversion', value: '+₹213', unit: 'per ton', positive: true },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-xl p-3 text-center hover:scale-105 transition-transform"
                style={{
                  background: '#0d1527',
                  border: `1px solid ${card.positive ? '#22c55e33' : '#ef444433'}`,
                  borderTop: `3px solid ${card.positive ? '#22c55e' : '#ef4444'}`,
                }}
              >
                <div style={{ color: '#94a3b8', fontSize: 11, marginBottom: 4 }}>{card.label}</div>
                <div style={{ color: card.positive ? '#22c55e' : '#ef4444', fontSize: 22, fontWeight: 800 }}>
                  {card.value}
                </div>
                <div style={{ color: '#64748b', fontSize: 10 }}>{card.unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 2-col */}
        <div className="grid grid-cols-2 gap-5">
          {/* Top 5 Loss Drivers */}
          <SectionCard title="Top 5 Loss Drivers">
            <div className="space-y-2">
              {top5LossDrivers.map((d, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5"
                  style={{ background: '#111f38', border: '1px solid #1a2744' }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded flex items-center justify-center shrink-0"
                      style={{ width: 22, height: 22, background: d.positive ? '#22c55e20' : '#ef444420', color: d.positive ? '#22c55e' : '#ef4444', fontSize: 10, fontWeight: 700 }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div style={{ color: '#e2e8f0', fontSize: 12, fontWeight: 600 }}>{d.name}</div>
                      <div style={{ color: '#64748b', fontSize: 10 }}>{d.category}</div>
                    </div>
                  </div>
                  <div
                    style={{ color: d.positive ? '#22c55e' : '#ef4444', fontSize: 13, fontWeight: 700 }}
                  >
                    {d.value}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Key Insights */}
          <SectionCard title="Key Insights">
            <div className="space-y-3">
              <InsightCard
                type="critical"
                title="Primary Cost Driver"
                headline="Coke BF Operations"
                body="-₹218/ton impacting overall coke cost performance"
              />
              <InsightCard
                type="opportunity"
                title="Biggest Opportunity"
                headline="Slag Rate Variability"
                body="-₹148/ton on coke alone. Reduce σ from 11 to 6"
              />
              <InsightCard
                type="positive"
                title="Positive Impact"
                headline="BF Conversion (+₹213)"
                body="Credits (+₹227) driving positive variance"
              />
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}