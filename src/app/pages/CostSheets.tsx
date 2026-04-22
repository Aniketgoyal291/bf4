import { FileText, Download, Filter } from 'lucide-react';
import { PageHeader, SectionCard } from '../components/Layout';

const costSheetData = [
  { item: 'Iron Ore (HG)', category: 'IBRM', planned: 10618, actual: 10250, variance: -368, unit: '₹/t HM' },
  { item: 'Coking Coal', category: 'Fuel', planned: 4210, actual: 4272, variance: 62, unit: '₹/t HM' },
  { item: 'PCI Coal', category: 'Fuel', planned: 1540, actual: 1540, variance: 0, unit: '₹/t HM' },
  { item: 'Coke', category: 'Fuel', planned: 2247, actual: 2039, variance: -208, unit: '₹/t HM' },
  { item: 'Limestone', category: 'Flux', planned: 180, actual: 174, variance: -6, unit: '₹/t HM' },
  { item: 'Dolomite', category: 'Flux', planned: 95, actual: 95, variance: 0, unit: '₹/t HM' },
  { item: 'Power', category: 'Utilities', planned: 280, actual: 265, variance: 15, unit: '₹/t HM' },
  { item: 'Oxygen', category: 'Utilities', planned: 190, actual: 175, variance: 15, unit: '₹/t HM' },
  { item: 'Steam', category: 'Utilities', planned: 120, actual: 110, variance: 10, unit: '₹/t HM' },
  { item: 'Water', category: 'Utilities', planned: 85, actual: 75, variance: 10, unit: '₹/t HM' },
  { item: 'Labour & Overheads', category: 'Conversion', planned: 1200, actual: 1320, variance: -120, unit: '₹/t HM' },
  { item: 'Maintenance', category: 'Conversion', planned: 480, actual: 560, variance: -80, unit: '₹/t HM' },
  { item: 'BF Gas Credit', category: 'Credits', planned: -450, actual: -520, variance: 70, unit: '₹/t HM' },
  { item: 'Slag Credit', category: 'Credits', planned: -280, actual: -350, variance: 70, unit: '₹/t HM' },
  { item: 'Dust Recovery', category: 'Credits', planned: -95, actual: -110, variance: 15, unit: '₹/t HM' },
];

const categories = ['All', 'IBRM', 'Fuel', 'Flux', 'Utilities', 'Conversion', 'Credits'];

const categoryColors: Record<string, string> = {
  IBRM: '#3b82f6',
  Fuel: '#f97316',
  Flux: '#8b5cf6',
  Utilities: '#14b8a6',
  Conversion: '#eab308',
  Credits: '#22c55e',
};

export function CostSheets() {
  const totalPlanned = 24083;
  const totalActual = 24391;
  const totalVariance = totalActual - totalPlanned;

  return (
    <div>
      <PageHeader
        title="Cost Sheets"
        subtitle="Full Cost Build-up | BF4 | April 2025"
        summaryCards={[
          { label: 'Planned HM Cost', value: '₹24,083', sub: 'per ton' },
          { label: 'Actual HM Cost', value: '₹24,391', sub: 'per ton' },
          { label: 'Net Variance', value: '+₹308', sub: '+1.28%', negative: true },
        ]}
      />

      <div className="p-6 space-y-5">
        {/* Category summary */}
        <div>
          <div style={{ color: '#94a3b8', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            Cost Category Summary
          </div>
          <div className="grid grid-cols-6 gap-3">
            {[
              { label: 'IBRM Cost', plan: '₹10,618', actual: '₹10,250', var: '-₹368', pos: false },
              { label: 'Fuel Cost', plan: '₹7,997', actual: '₹7,851', var: '-₹146', pos: false },
              { label: 'Flux Cost', plan: '₹275', actual: '₹269', var: '-₹6', pos: false },
              { label: 'Utilities', plan: '₹720', actual: '₹675', var: '+₹45', pos: true },
              { label: 'Conversion', plan: '₹1,680', actual: '₹1,880', var: '-₹200', pos: false },
              { label: 'Credits', plan: '-₹893', actual: '-₹1,065', var: '+₹172', pos: true },
            ].map((c) => (
              <div key={c.label} className="rounded-xl p-3" style={{ background: '#0d1527', border: '1px solid #1a2744', borderTop: `3px solid ${c.pos ? '#22c55e' : '#ef4444'}` }}>
                <div style={{ color: '#94a3b8', fontSize: 10, marginBottom: 4 }}>{c.label}</div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex justify-between">
                    <span style={{ color: '#64748b', fontSize: 10 }}>Plan</span>
                    <span style={{ color: '#3b82f6', fontSize: 11 }}>{c.plan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#64748b', fontSize: 10 }}>Act</span>
                    <span style={{ color: '#8b5cf6', fontSize: 11 }}>{c.actual}</span>
                  </div>
                  <div className="flex justify-between" style={{ marginTop: 4 }}>
                    <span style={{ color: '#64748b', fontSize: 10 }}>Var</span>
                    <span style={{ color: c.pos ? '#22c55e' : '#ef4444', fontSize: 12, fontWeight: 700 }}>{c.var}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost sheet table */}
        <SectionCard title="Detailed Cost Sheet">
          <div className="flex gap-2 mb-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-3 py-1 rounded-full text-xs font-semibold transition-colors"
                style={{
                  background: cat === 'All' ? '#1d4ed8' : `${categoryColors[cat] ?? '#334155'}20`,
                  color: cat === 'All' ? '#fff' : categoryColors[cat] ?? '#94a3b8',
                  border: `1px solid ${cat === 'All' ? '#1d4ed8' : categoryColors[cat] ?? '#334155'}40`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'collapse', fontSize: 12 }}>
              <thead>
                <tr>
                  {['Cost Item', 'Category', 'Planned (₹/t HM)', 'Actual (₹/t HM)', 'Variance', 'Impact'].map((h, i) => (
                    <th key={i} className="py-2 px-3" style={{
                      background: '#111f38', color: '#94a3b8', fontWeight: 600,
                      textAlign: i <= 1 ? 'left' : 'right',
                      borderBottom: '1px solid #1a2744',
                      fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {costSheetData.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : '#0a1221' }}>
                    <td className="py-2 px-3" style={{ color: '#cbd5e1', borderBottom: '1px solid #1a2744' }}>{row.item}</td>
                    <td className="py-2 px-3" style={{ borderBottom: '1px solid #1a2744' }}>
                      <span className="px-2 py-0.5 rounded text-xs" style={{
                        background: `${categoryColors[row.category] ?? '#334155'}20`,
                        color: categoryColors[row.category] ?? '#94a3b8',
                      }}>
                        {row.category}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-right" style={{ color: '#3b82f6', borderBottom: '1px solid #1a2744' }}>
                      ₹{row.planned.toLocaleString()}
                    </td>
                    <td className="py-2 px-3 text-right" style={{ color: '#8b5cf6', borderBottom: '1px solid #1a2744' }}>
                      ₹{row.actual.toLocaleString()}
                    </td>
                    <td className="py-2 px-3 text-right" style={{
                      color: row.variance > 0 ? '#22c55e' : row.variance < 0 ? '#ef4444' : '#94a3b8',
                      fontWeight: 600, borderBottom: '1px solid #1a2744',
                    }}>
                      {row.variance > 0 ? '+' : ''}₹{row.variance}
                    </td>
                    <td className="py-2 px-3 text-right" style={{ borderBottom: '1px solid #1a2744' }}>
                      <div className="flex items-center justify-end gap-1">
                        <div className="rounded-full" style={{
                          width: Math.min(Math.abs(row.variance) / 4, 40),
                          height: 4,
                          background: row.variance > 0 ? '#22c55e' : row.variance < 0 ? '#ef4444' : '#334155',
                          minWidth: 4,
                        }} />
                      </div>
                    </td>
                  </tr>
                ))}
                {/* Total row */}
                <tr style={{ background: '#111f38' }}>
                  <td className="py-2 px-3" style={{ color: '#e2e8f0', fontWeight: 700, borderTop: '2px solid #1a2744' }} colSpan={2}>
                    TOTAL Hot Metal Cost
                  </td>
                  <td className="py-2 px-3 text-right" style={{ color: '#3b82f6', fontWeight: 700, borderTop: '2px solid #1a2744' }}>₹{totalPlanned.toLocaleString()}</td>
                  <td className="py-2 px-3 text-right" style={{ color: '#8b5cf6', fontWeight: 700, borderTop: '2px solid #1a2744' }}>₹{totalActual.toLocaleString()}</td>
                  <td className="py-2 px-3 text-right" style={{ color: '#ef4444', fontWeight: 700, borderTop: '2px solid #1a2744' }}>+₹{totalVariance}</td>
                  <td className="py-2 px-3" style={{ borderTop: '2px solid #1a2744' }}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* Notes */}
        <div className="rounded-xl p-4" style={{ background: '#0d1527', border: '1px solid #1a2744' }}>
          <div className="flex items-center gap-2 mb-2">
            <FileText size={14} style={{ color: '#64748b' }} />
            <span style={{ color: '#64748b', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Notes</span>
          </div>
          <ul className="space-y-1">
            {[
              'All costs are per ton of hot metal (₹/t HM) unless otherwise stated.',
              'Positive variance = actual cost below plan (favorable). Negative = actual above plan (adverse).',
              'Credit items shown as negative planned/actual; positive variance = higher credits received.',
              'Data source: ERP + MES integration. Last updated: April 30, 2025.',
            ].map((note, i) => (
              <li key={i} style={{ color: '#64748b', fontSize: 11 }}>• {note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
