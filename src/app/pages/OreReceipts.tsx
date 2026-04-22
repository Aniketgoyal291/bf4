import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, ResponsiveContainer,
} from 'recharts';
import { PageHeader, InsightCard, SectionCard, StatusBadge } from '../components/Layout';
import {
  oreReceiptsByGrade, oreConsumptionByGrade,
  feTrendData, chemTrendData, inventoryStatusData,
} from '../data/mockData';

const GRADE_COLORS = {
  hg: '#3b82f6',
  mg: '#8b5cf6',
  lg: '#f97316',
  mno: '#22c55e',
};

function GradeBarChart({ data, title }: { data: any[]; title: string }) {
  return (
    <SectionCard title={title}>
      <div style={{ height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: -15 }} barGap={4}>
            <CartesianGrid vertical={false} stroke="#1a2744" strokeDasharray="4 2" />
            <XAxis dataKey="grade" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={{ stroke: '#1a2744' }} tickLine={false} />
            <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ background: '#0d1527', border: '1px solid #1a2744', borderRadius: 8, fontSize: 12 }}
              formatter={(v: any) => [`${v.toFixed(2)} Mn MT`, '']}
            />
            <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} />
            <Bar dataKey="planned" name="Planned" fill="#3b82f6" radius={[3, 3, 0, 0]} />
            <Bar dataKey="actual" name="Actual" fill="#8b5cf6" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Grade table */}
      <div className="mt-3">
        <div className="grid grid-cols-4 gap-1 mb-1" style={{ fontSize: 10, color: '#64748b', textTransform: 'uppercase' }}>
          <span>Grade</span><span className="text-right">Planned</span><span className="text-right">Actual</span><span className="text-right">Deviation</span>
        </div>
        {data.map((r) => (
          <div key={r.grade} className="grid grid-cols-4 gap-1 py-1" style={{ borderTop: '1px solid #1a2744', fontSize: 12 }}>
            <span style={{ color: '#94a3b8' }}>{r.grade}</span>
            <span style={{ color: '#3b82f6', textAlign: 'right' }}>{r.planned.toFixed(2)}</span>
            <span style={{ color: '#8b5cf6', textAlign: 'right' }}>{r.actual.toFixed(2)}</span>
            <span style={{ color: r.dev < 0 ? '#ef4444' : r.dev > 0 ? '#22c55e' : '#94a3b8', textAlign: 'right', fontWeight: 600 }}>
              {r.dev > 0 ? '+' : ''}{r.dev.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

const costOwnershipData = [
  {
    owner: 'Market Movement', value: '-₹204/ton', desc: 'Market-driven price changes beyond control',
    tags: ['Ore price changes', 'Coal/Coke market rates'], color: '#ef4444', icon: '📉',
  },
  {
    owner: 'Sourcing', value: '-₹168/ton', desc: 'Fe grade drop, slag rate variability',
    tags: ['Fe grade impact: -42', 'Slag rate: +15', 'Slag rate var: -197', 'Coke moisture: -5'], color: '#f97316', icon: '⛏',
  },
  {
    owner: 'Agglo Operations', value: '-₹79/ton', desc: 'Blend quantity impact on agglomeration',
    tags: ['Sinter: -48', 'Pellet: -21', 'Lump: -10'], color: '#eab308', icon: '🏭',
  },
  {
    owner: 'Coke Operations', value: '-₹5/ton', desc: 'Coke moisture control issues',
    tags: ['Coke moisture impact'], color: '#8b5cf6', icon: '🔥',
  },
  {
    owner: 'BF Operations', value: '-₹106/ton', desc: 'Net BF operational impact',
    tags: ['Coal BF ops: +111', 'Coke BF ops: -218', 'Slag control: +1'], color: '#3b82f6', icon: '⚙️',
  },
];

export function OreReceipts() {
  return (
    <div>
      <PageHeader
        title="Ore Receipts Analysis"
        subtitle="Grade-wise Receipts, Quality & Cost Ownership | BF4 | April 2025"
        summaryCards={[
          { label: 'Planned Receipts', value: '2.50 Mn MT', sub: 'Monthly target' },
          { label: 'Actual Receipts', value: '2.10 Mn MT', sub: 'Monthly actual' },
          { label: 'Shortfall', value: '-0.40 Mn MT', sub: '-16.0% vs plan', negative: true },
        ]}
      />

      <div className="p-6 space-y-5">
        {/* Two bar charts */}
        <div className="grid grid-cols-2 gap-5">
          <GradeBarChart data={oreReceiptsByGrade} title="Monthly Receipts by Grade: Planned vs Actual" />
          <GradeBarChart data={oreConsumptionByGrade} title="Monthly Consumption by Grade: Planned vs Actual" />
        </div>

        {/* Trend charts */}
        <div className="grid grid-cols-2 gap-5">
          <SectionCard title="Fe% by Grade: 30-Day Trend">
            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={feTrendData} margin={{ top: 5, right: 10, bottom: 0, left: -10 }}>
                  <CartesianGrid stroke="#1a2744" strokeDasharray="4 2" />
                  <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 9 }} axisLine={{ stroke: '#1a2744' }} tickLine={false} interval={5} />
                  <YAxis domain={[51, 64]} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: '#0d1527', border: '1px solid #1a2744', borderRadius: 8, fontSize: 11 }}
                    formatter={(v: any) => [`${v.toFixed(2)}%`, '']} />
                  <Legend wrapperStyle={{ fontSize: 10, color: '#94a3b8' }} />
                  <Line type="monotone" dataKey="hg" name="HG Fe%" stroke={GRADE_COLORS.hg} strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="mg" name="MG Fe%" stroke={GRADE_COLORS.mg} strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="lg" name="LG Fe%" stroke={GRADE_COLORS.lg} strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="mno" name="MnO Fe%" stroke={GRADE_COLORS.mno} strokeWidth={1.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard title="Overall Chemical Composition Trends">
            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chemTrendData} margin={{ top: 5, right: 10, bottom: 0, left: -10 }}>
                  <CartesianGrid stroke="#1a2744" strokeDasharray="4 2" />
                  <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 9 }} axisLine={{ stroke: '#1a2744' }} tickLine={false} interval={5} />
                  <YAxis domain={[0, 60]} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: '#0d1527', border: '1px solid #1a2744', borderRadius: 8, fontSize: 11 }}
                    formatter={(v: any) => [`${v.toFixed(2)}%`, '']} />
                  <Legend wrapperStyle={{ fontSize: 10, color: '#94a3b8' }} />
                  <Line type="monotone" dataKey="fe" name="Fe%" stroke="#3b82f6" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="sio2" name="SiO2%" stroke="#f97316" strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="al2o3" name="Al2O3%" stroke="#8b5cf6" strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="mno" name="MnO%" stroke="#22c55e" strokeWidth={1.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
        </div>

        {/* Inventory status log */}
        <SectionCard title="Inventory Status Log">
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'collapse', fontSize: 12 }}>
              <thead>
                <tr>
                  {['Grade', 'Planned Qty (Mn MT)', 'Actual Qty (Mn MT)', 'Shortfall / Excess', 'Current Inventory', 'Status'].map((h, i) => (
                    <th key={i} className="py-2 px-3" style={{
                      background: '#111f38', color: '#94a3b8', fontWeight: 600,
                      textAlign: i === 0 ? 'left' : 'center',
                      borderBottom: '1px solid #1a2744', fontSize: 11,
                      textTransform: 'uppercase', letterSpacing: '0.05em',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {inventoryStatusData.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : '#0a1221' }}>
                    <td className="py-2 px-3" style={{ color: '#e2e8f0', fontWeight: 600, borderBottom: '1px solid #1a2744' }}>{row.grade}</td>
                    <td className="py-2 px-3 text-center" style={{ color: '#3b82f6', borderBottom: '1px solid #1a2744' }}>{row.plannedQty.toFixed(2)}</td>
                    <td className="py-2 px-3 text-center" style={{ color: '#8b5cf6', borderBottom: '1px solid #1a2744' }}>{row.actualQty.toFixed(2)}</td>
                    <td className="py-2 px-3 text-center" style={{
                      color: row.shortfall < 0 ? '#ef4444' : '#22c55e', fontWeight: 600, borderBottom: '1px solid #1a2744',
                    }}>{row.shortfall > 0 ? '+' : ''}{row.shortfall.toFixed(2)}</td>
                    <td className="py-2 px-3 text-center" style={{ color: '#94a3b8', borderBottom: '1px solid #1a2744' }}>{row.inventory.toFixed(2)} Mn MT</td>
                    <td className="py-2 px-3 text-center" style={{ borderBottom: '1px solid #1a2744' }}>
                      <StatusBadge status={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* Cost Ownership Matrix */}
        <SectionCard title="Cost Ownership Matrix">
          <div className="space-y-3">
            {costOwnershipData.map((item) => (
              <div key={item.owner} className="rounded-xl p-4" style={{ background: '#111f38', border: `1px solid ${item.color}30`, borderLeft: `3px solid ${item.color}` }}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div style={{ color: item.color, fontSize: 13, fontWeight: 700 }}>{item.owner}</div>
                    <div style={{ color: '#94a3b8', fontSize: 11 }}>{item.desc}</div>
                  </div>
                  <div style={{ color: '#ef4444', fontSize: 18, fontWeight: 800 }}>{item.value}</div>
                </div>
                <div className="flex gap-2 flex-wrap mt-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-xs" style={{ background: `${item.color}15`, color: item.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl px-4 py-3" style={{ background: '#0d1527', border: '1px solid #ef444440', borderLeft: '4px solid #ef4444' }}>
            <span style={{ color: '#e2e8f0', fontSize: 14, fontWeight: 700 }}>Total Cost Impact</span>
            <span style={{ color: '#ef4444', fontSize: 22, fontWeight: 800 }}>-₹562/ton</span>
          </div>
        </SectionCard>

        {/* Insights */}
        <div className="flex gap-4">
          <InsightCard type="critical" title="Critical Issue" headline="HG Ore Shortage" body="-0.27 Mn MT shortfall driving Fe% drop and throughput loss" />
          <InsightCard type="info" title="Primary Cost Owner" headline="Market Movement" body="-₹204/ton impact from market price changes" />
          <InsightCard type="action" title="Action Required" headline="Improve Sourcing Mix" body="Secure HG ore contracts to stabilize quality and reduce variance" />
        </div>
      </div>
    </div>
  );
}
