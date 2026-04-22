import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
  ResponsiveContainer, Legend,
} from 'recharts';
import { PageHeader, InsightCard, SectionCard, DataTable } from '../components/Layout';
import { bfLossesData, shutdownsData, utilitiesData, creditsData, fixedCostTrend, throughputData } from '../data/mockData';

function TableWithFootnote({ title, data, footerLines, unitLabel }: {
  title: string;
  data: { item: string; planned: number; actual: number; variance: number; isTotal?: boolean }[];
  footerLines: string[];
  unitLabel: string;
}) {
  return (
    <SectionCard title={title}>
      <div className="overflow-x-auto">
        <table className="w-full" style={{ borderCollapse: 'collapse', fontSize: 12 }}>
          <thead>
            <tr>
              {['Item', `Planned (${unitLabel})`, `Actual (${unitLabel})`, 'Variance'].map((h, i) => (
                <th key={i} className="py-2 px-3" style={{
                  background: '#111f38', color: '#94a3b8', fontWeight: 600,
                  textAlign: i === 0 ? 'left' : 'right', borderBottom: '1px solid #1a2744',
                  fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} style={{ background: row.isTotal ? '#111f38' : i % 2 === 0 ? 'transparent' : '#0a1221' }}>
                <td className="py-2 px-3" style={{ color: row.isTotal ? '#e2e8f0' : '#cbd5e1', fontWeight: row.isTotal ? 700 : 400, borderBottom: '1px solid #1a2744' }}>
                  {row.item}
                </td>
                <td className="py-2 px-3 text-right" style={{ color: '#3b82f6', fontWeight: row.isTotal ? 700 : 400, borderBottom: '1px solid #1a2744' }}>
                  {unitLabel === 'hrs' ? `${row.planned} hrs` : `₹${row.planned}`}
                </td>
                <td className="py-2 px-3 text-right" style={{ color: '#8b5cf6', fontWeight: row.isTotal ? 700 : 400, borderBottom: '1px solid #1a2744' }}>
                  {unitLabel === 'hrs' ? `${row.actual} hrs` : `₹${row.actual}`}
                </td>
                <td className="py-2 px-3 text-right" style={{
                  color: row.variance > 0 ? '#ef4444' : row.variance < 0 ? '#22c55e' : '#94a3b8',
                  fontWeight: row.isTotal ? 700 : 400, borderBottom: '1px solid #1a2744',
                }}>
                  {row.variance > 0 ? '+' : ''}{unitLabel === 'hrs' ? `${row.variance} hrs` : `₹${row.variance}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 rounded-lg px-3 py-2 space-y-0.5" style={{ background: '#111f38' }}>
        {footerLines.map((l, i) => (
          <div key={i} style={{ color: i === 0 ? '#e2e8f0' : '#94a3b8', fontSize: 11 }}>{l}</div>
        ))}
      </div>
    </SectionCard>
  );
}

export function BFConversion() {
  return (
    <div>
      <PageHeader
        title="BF Conversion Cost Analysis"
        subtitle="Losses, Utilities, Credits & Throughput Impact | BF4 | April 2025"
        summaryCards={[
          { label: 'Losses', value: '-₹86', sub: 'per ton', negative: true },
          { label: 'Utilities', value: '+₹55', sub: 'per ton (Savings)', positive: true },
          { label: 'Credits', value: '+₹227', sub: 'per ton', positive: true },
          { label: 'Throughput', value: '+₹17', sub: 'per ton', positive: true },
          { label: 'Net Impact', value: '+₹213', sub: 'per ton', positive: true },
        ]}
      />

      <div className="p-6 space-y-5">
        {/* Throughput + Fixed Cost side by side */}
        <div className="grid grid-cols-5 gap-5">
          {/* Throughput */}
          <SectionCard title="Throughput Analysis: Planned vs Actual" className="col-span-3">
            <div style={{ height: 160 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={throughputData} layout="vertical" margin={{ top: 0, right: 60, bottom: 0, left: 20 }}>
                  <CartesianGrid horizontal={false} stroke="#1a2744" strokeDasharray="4 2" />
                  <XAxis type="number" tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={{ stroke: '#1a2744' }} tickLine={false} />
                  <YAxis type="category" dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
                  <Tooltip
                    formatter={(v: any) => [`${v.toLocaleString()} tons`, '']}
                    contentStyle={{ background: '#0d1527', border: '1px solid #1a2744', borderRadius: 8, fontSize: 12 }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {throughputData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {[
                { label: 'Monthly Target', value: '95,000 t', sub: 'Design capacity', color: '#3b82f6' },
                { label: 'Planned', value: '92,000 t', sub: '3.2% below target', color: '#8b5cf6' },
                { label: 'Actual', value: '74,000 t', sub: '19.6% below plan', color: '#f97316' },
              ].map((c) => (
                <div key={c.label} className="rounded-lg p-2 text-center" style={{ background: '#111f38' }}>
                  <div style={{ color: '#64748b', fontSize: 10 }}>{c.label}</div>
                  <div style={{ color: c.color, fontSize: 15, fontWeight: 700 }}>{c.value}</div>
                  <div style={{ color: '#64748b', fontSize: 10 }}>{c.sub}</div>
                </div>
              ))}
            </div>
            <div className="mt-2 rounded-lg px-3 py-2" style={{ background: '#1a0e0033', border: '1px solid #ef444433' }}>
              <div style={{ color: '#ef4444', fontSize: 12, fontWeight: 600 }}>Production Shortfall: -18,000 tons</div>
              <div style={{ color: '#94a3b8', fontSize: 11 }}>Primary causes: RM variability (5,100t) + Operations (12,900t) | Cost Impact: +₹17/ton</div>
            </div>
          </SectionCard>

          {/* Unit Fixed Cost Trend */}
          <SectionCard title="Unit Fixed Cost Trend" className="col-span-2">
            <div style={{ height: 180 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fixedCostTrend} margin={{ top: 10, right: 10, bottom: 0, left: -10 }} barGap={4}>
                  <CartesianGrid vertical={false} stroke="#1a2744" strokeDasharray="4 2" />
                  <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={{ stroke: '#1a2744' }} tickLine={false} />
                  <YAxis domain={[1700, 2300]} tickFormatter={(v) => `₹${v}`} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: '#0d1527', border: '1px solid #1a2744', borderRadius: 8, fontSize: 12 }} />
                  <Bar dataKey="planned" name="Planned" fill="#3b82f6" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="actual" name="Actual" fill="#8b5cf6" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 rounded-lg px-3 py-2" style={{ background: '#111f38', fontSize: 11 }}>
              <div style={{ color: '#ef4444', fontWeight: 600 }}>April Impact: ₹2,150/ton vs ₹1,850 planned</div>
              <div style={{ color: '#94a3b8' }}>+16.2% increase due to 19.6% throughput shortfall</div>
            </div>
          </SectionCard>
        </div>

        {/* 4 tables: losses, shutdowns, utilities, credits */}
        <div className="grid grid-cols-2 gap-5">
          <TableWithFootnote
            title="BF Losses: Planned vs Actual"
            data={bfLossesData}
            footerLines={[
              'Total BF Losses: -₹86/ton',
              'Primary drivers: Spillage & wastage (+₹16 variance)',
            ]}
            unitLabel="₹"
          />
          <TableWithFootnote
            title="Shutdowns & Maintenance"
            data={shutdownsData}
            footerLines={[
              'Unplanned Downtime: 72 hours',
              'Major contributor to throughput loss. Requires immediate attention.',
            ]}
            unitLabel="hrs"
          />
          <TableWithFootnote
            title="Utilities Cost"
            data={utilitiesData}
            footerLines={[
              'Net Utilities Savings: +₹55/ton',
              'Key drivers: Power optimization (₹15) & Oxygen efficiency (₹15)',
            ]}
            unitLabel="₹"
          />
          <TableWithFootnote
            title="Credits & By-product Sales"
            data={creditsData}
            footerLines={[
              'Additional Credits: +₹227/ton',
              'BF Gas (₹70) & BF Slag (₹70) higher realizations vs plan',
            ]}
            unitLabel="₹"
          />
        </div>

        {/* Summary cards */}
        <div>
          <div style={{ color: '#94a3b8', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            BF Conversion Cost Summary
          </div>
          <div className="grid grid-cols-5 gap-3">
            {[
              { label: 'Losses', value: '-₹86', pos: false },
              { label: 'Utilities', value: '+₹55', pos: true },
              { label: 'Credits', value: '+₹227', pos: true },
              { label: 'Throughput', value: '+₹17', pos: true },
              { label: 'Net Impact', value: '+₹213', pos: true },
            ].map((c) => (
              <div key={c.label} className="rounded-xl p-3 text-center" style={{
                background: '#0d1527',
                border: `1px solid ${c.pos ? '#22c55e33' : '#ef444433'}`,
                borderTop: `3px solid ${c.pos ? '#22c55e' : '#ef4444'}`,
              }}>
                <div style={{ color: '#64748b', fontSize: 11 }}>{c.label}</div>
                <div style={{ color: c.pos ? '#22c55e' : '#ef4444', fontSize: 20, fontWeight: 800 }}>{c.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="flex gap-4">
          <InsightCard type="positive" title="Positive Impact" headline="Credits +₹227/ton" body="Higher BF gas and slag realizations contributing significantly" />
          <InsightCard type="critical" title="Critical Issue" headline="Throughput Loss: 18,000t" body="Focus on RM availability and operations stability to recover production" />
          <InsightCard type="opportunity" title="Opportunity" headline="Utilities Optimization" body="Continue power and oxygen efficiency initiatives for savings" />
        </div>
      </div>
    </div>
  );
}
