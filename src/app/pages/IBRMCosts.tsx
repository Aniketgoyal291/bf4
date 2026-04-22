import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { PageHeader, InsightCard, SectionCard, DataTable } from '../components/Layout';
import { ibrmSourceData, ibrmGradeData, chemCompositionData } from '../data/mockData';

const fmt = (v: number, sign = false) => `${sign && v > 0 ? '+' : ''}${v.toLocaleString()}`;

function ChemTable() {
  const params = [
    { label: 'Fe%', plan: '57.95%', actual: '56.01%', vs: '-1.94%', worse: true },
    { label: 'SiO2%', plan: '4.20%', actual: '4.80%', vs: '+0.60%', worse: true },
    { label: 'Al2O3%', plan: '2.80%', actual: '3.10%', vs: '+0.30%', worse: true },
    { label: 'MnO%', plan: '0.42%', actual: '0.38%', vs: '-0.04%', worse: false },
  ];
  return (
    <div className="space-y-2 mt-2">
      {params.map((p) => (
        <div key={p.label} className="flex items-center gap-2 py-1.5" style={{ borderBottom: '1px solid #1a2744' }}>
          <span style={{ color: '#94a3b8', fontSize: 12, width: 70 }}>{p.label}</span>
          <span style={{ color: '#3b82f6', fontSize: 12, width: 60, textAlign: 'right' }}>{p.plan}</span>
          <span style={{ color: '#8b5cf6', fontSize: 12, width: 60, textAlign: 'right' }}>{p.actual}</span>
          <span style={{ color: p.worse ? '#ef4444' : '#22c55e', fontSize: 12, width: 64, textAlign: 'right', fontWeight: 600 }}>{p.vs}</span>
        </div>
      ))}
    </div>
  );
}

export function IBRMCosts() {
  const sourceRows = ibrmSourceData.map((r) => [
    r.source,
    r.planQty.toFixed(2),
    `${r.planFe}%`,
    `₹${r.planRate.toLocaleString()}`,
    r.actQty.toFixed(2),
    `${r.actFe}%`,
    `₹${r.actRate.toLocaleString()}`,
    <span style={{ color: '#ef4444' }} key="qd">{r.qtyDev.toFixed(2)}</span>,
    <span style={{ color: r.feDev < 0 ? '#ef4444' : '#22c55e' }} key="fd">{r.feDev > 0 ? '+' : ''}{r.feDev}%</span>,
    <span style={{ color: '#ef4444' }} key="rd">₹{r.rateDev}</span>,
  ]);

  const gradeRows = ibrmGradeData.map((r) => [
    <span style={{ fontWeight: r.grade === 'TOTAL' ? 700 : 400 }} key="g">{r.grade}</span>,
    r.planQty.toFixed(2),
    `${r.planFe}%`,
    `₹${r.planRate.toLocaleString()}`,
    r.actQty.toFixed(2),
    `${r.actFe}%`,
    `₹${r.actRate.toLocaleString()}`,
    <span style={{ color: '#ef4444' }} key="dv">₹{r.dev}</span>,
  ]);

  return (
    <div>
      <PageHeader
        title="IBRM Cost Analysis"
        subtitle="Iron Bearing Raw Materials | BF4 | April 2025"
        summaryCards={[
          { label: 'Planned IBRM Price', value: '₹4,378', sub: 'per MT @ 57.95% Fe' },
          { label: 'Actual IBRM Price', value: '₹4,131', sub: 'per MT @ 56.01% Fe' },
          { label: 'Total Deviation', value: '-₹247', sub: 'per MT (-5.64%)', negative: true },
        ]}
      />

      <div className="p-6 space-y-5">
        {/* Top 3 metric cards */}
        <div className="grid grid-cols-3 gap-4">
          {/* Quantity Impact */}
          <div className="rounded-xl p-4" style={{ background: '#0d1527', border: '1px solid #1a2744' }}>
            <div style={{ color: '#64748b', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Quantity Impact</div>
            <div className="space-y-2">
              {[
                { label: 'Planned Qty', value: '2.50 Mn MT', color: '#3b82f6' },
                { label: 'Actual Qty', value: '2.10 Mn MT', color: '#8b5cf6' },
                { label: 'Deviation', value: '-0.40 Mn MT', color: '#ef4444' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between">
                  <span style={{ color: '#94a3b8', fontSize: 12 }}>{r.label}</span>
                  <span style={{ color: r.color, fontSize: 13, fontWeight: 700 }}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fe% Grade Impact */}
          <div className="rounded-xl p-4" style={{ background: '#0d1527', border: '1px solid #1a2744' }}>
            <div style={{ color: '#64748b', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Fe% Grade Impact</div>
            <div className="space-y-2">
              {[
                { label: 'Planned Fe%', value: '57.95%', color: '#3b82f6' },
                { label: 'Actual Fe%', value: '56.01%', color: '#8b5cf6' },
                { label: 'Deviation', value: '-1.94%', color: '#ef4444' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between">
                  <span style={{ color: '#94a3b8', fontSize: 12 }}>{r.label}</span>
                  <span style={{ color: r.color, fontSize: 13, fontWeight: 700 }}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Deviation Split */}
          <div className="rounded-xl p-4" style={{ background: '#0d1527', border: '1px solid #1a2744' }}>
            <div style={{ color: '#64748b', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Price Deviation Split</div>
            <div className="space-y-2">
              {[
                { label: 'Market Movement', value: '-₹204/MT', color: '#ef4444' },
                { label: 'Grade Impact', value: '-₹42/MT', color: '#ef4444' },
                { label: 'Total Deviation', value: '-₹247/MT', color: '#ef4444' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between">
                  <span style={{ color: '#94a3b8', fontSize: 12 }}>{r.label}</span>
                  <span style={{ color: r.color, fontSize: 13, fontWeight: 700 }}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Source-wise table */}
        <SectionCard title="Source-wise Analysis">
          <DataTable
            headers={['Source', 'Plan Qty', 'Plan Fe%', 'Plan Rate', 'Act Qty', 'Act Fe%', 'Act Rate', 'Qty Dev', 'Fe Dev', 'Rate Dev']}
            rows={sourceRows}
          />
        </SectionCard>

        {/* Grade-wise summary */}
        <SectionCard title="Grade-wise Summary">
          <DataTable
            headers={['Grade', 'Plan Qty', 'Plan Fe%', 'Plan Rate', 'Act Qty', 'Act Fe%', 'Act Rate', 'Dev']}
            rows={gradeRows}
            totalRow
          />
        </SectionCard>

        {/* Chemical composition + cost breakdown */}
        <div className="grid grid-cols-2 gap-5">
          <SectionCard title="Chemical Composition: Planned vs Actual">
            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chemCompositionData} margin={{ top: 10, right: 10, bottom: 0, left: -10 }} barGap={4}>
                  <CartesianGrid vertical={false} stroke="#1a2744" strokeDasharray="4 2" />
                  <XAxis dataKey="param" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={{ stroke: '#1a2744' }} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: '#0d1527', border: '1px solid #1a2744', borderRadius: 8, fontSize: 12 }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} />
                  <Bar dataKey="plan" name="Planned" fill="#3b82f6" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="actual" name="Actual" fill="#8b5cf6" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{ borderTop: '1px solid #1a2744', marginTop: 8 }}>
              <div className="flex gap-4 pt-2" style={{ fontSize: 11, color: '#64748b' }}>
                <span style={{ color: '#3b82f6' }}>■ Planned</span>
                <span style={{ color: '#8b5cf6' }}>■ Actual</span>
              </div>
              <ChemTable />
            </div>
          </SectionCard>

          <div className="space-y-4">
            <SectionCard title="IBRM Cost Breakdown">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Total IBRM Cost Dev.', value: '-₹367', neg: true },
                  { label: 'Market Movement', value: '-₹96', neg: true },
                  { label: 'Grade Impact', value: '+₹78', neg: false },
                  { label: 'Blend Conv. Cost', value: '-₹270', neg: true },
                  { label: 'Blend Mix Impact', value: '-₹79', neg: true },
                ].map((c) => (
                  <div key={c.label} className="rounded-lg p-3 text-center" style={{ background: '#111f38', border: '1px solid #1a2744' }}>
                    <div style={{ color: '#64748b', fontSize: 10 }}>{c.label}</div>
                    <div style={{ color: c.neg ? '#ef4444' : '#22c55e', fontSize: 16, fontWeight: 700 }}>{c.value}</div>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Key Insights & Actions">
              <div className="space-y-3">
                <InsightCard
                  type="critical"
                  title="Primary Issue"
                  headline="Fe% Grade Drop"
                  body="1.94% Fe reduction increased ore consumption and cost"
                />
                <InsightCard
                  type="warning"
                  title="Volume Impact"
                  headline="-0.40 Mn MT"
                  body="Lower ore receipts vs plan across all grades"
                />
                <InsightCard
                  type="action"
                  title="Action Required"
                  headline="Improve Sourcing Mix"
                  body="Increase HG ore proportion to improve Fe%"
                />
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
