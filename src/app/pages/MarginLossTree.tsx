import { PageHeader, InsightCard, SectionCard } from '../components/Layout';
import { AlertTriangle, Package, Wrench, TrendingDown, Users, Zap } from 'lucide-react';

interface LossCard {
  title: string;
  loss: string;
  pct: string;
  monetary: string;
  causes: string[];
  color: string;
  icon: React.ReactNode;
}

function LossCategoryCard({ card }: { card: LossCard }) {
  return (
    <div className="rounded-xl p-4" style={{ background: '#111f38', border: `1px solid ${card.color}30`, borderLeft: `3px solid ${card.color}` }}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="rounded-lg p-1.5" style={{ background: `${card.color}20` }}>
            {card.icon}
          </div>
          <div>
            <div style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 700 }}>{card.title}</div>
            <div style={{ color: '#64748b', fontSize: 10 }}>Throughput loss</div>
          </div>
        </div>
        <div className="text-right">
          <div style={{ color: card.color, fontSize: 18, fontWeight: 800 }}>{card.loss}</div>
          <div style={{ color: '#64748b', fontSize: 10 }}>{card.pct}</div>
        </div>
      </div>
      <div className="mb-3">
        <div className="flex justify-between mb-1">
          <span style={{ color: '#64748b', fontSize: 10 }}>Monetary Impact</span>
          <span style={{ color: '#ef4444', fontSize: 12, fontWeight: 700 }}>{card.monetary}</span>
        </div>
        {/* Mini progress bar */}
        <div style={{ height: 3, background: '#1a2744', borderRadius: 9999 }}>
          <div style={{
            height: '100%',
            width: card.pct,
            background: card.color,
            borderRadius: 9999,
          }} />
        </div>
      </div>
      <div>
        <div style={{ color: '#64748b', fontSize: 10, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Root Causes</div>
        <div className="space-y-1">
          {card.causes.map((c) => (
            <div key={c} className="flex items-center gap-2">
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: card.color, flexShrink: 0 }} />
              <span style={{ color: '#94a3b8', fontSize: 11 }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const rmLossCards: LossCard[] = [
  {
    title: 'Blend Availability Issues',
    loss: '2,800 tons',
    pct: '54.9%',
    monetary: '₹9,800M',
    causes: ['HG ore shortage: -0.27 Mn MT', 'Pellet underproduction', 'Sinter plant reliability'],
    color: '#ef4444',
    icon: <Package size={14} style={{ color: '#ef4444' }} />,
  },
  {
    title: 'Consumption Shortfall',
    loss: '1,500 tons',
    pct: '29.4%',
    monetary: '₹5,250M',
    causes: ['Lower burden consumption due to Fe% drop', 'Incorrect burden matrix', 'Quality-driven consumption reduction'],
    color: '#f97316',
    icon: <TrendingDown size={14} style={{ color: '#f97316' }} />,
  },
  {
    title: 'Allocation Issues',
    loss: '450 tons',
    pct: '8.8%',
    monetary: '₹1,575M',
    causes: ['Incorrect ore allocation to BF4 vs other BFs', 'Priority given to other furnaces', 'Planning vs execution gap'],
    color: '#eab308',
    icon: <AlertTriangle size={14} style={{ color: '#eab308' }} />,
  },
  {
    title: 'Receipts Problems',
    loss: '350 tons',
    pct: '6.9%',
    monetary: '₹1,225M',
    causes: ['Delayed rail dispatches', 'Weighbridge downtime', 'Grade shortfall at source'],
    color: '#8b5cf6',
    icon: <Package size={14} style={{ color: '#8b5cf6' }} />,
  },
];

const opsLossCards: LossCard[] = [
  {
    title: 'Equipment Downtime',
    loss: '4,800 tons',
    pct: '37.2%',
    monetary: '₹16,800M',
    causes: ['Unplanned stoppages: 180 hours', 'Charging equipment failures', 'Tapping issues'],
    color: '#ef4444',
    icon: <Wrench size={14} style={{ color: '#ef4444' }} />,
  },
  {
    title: 'Process Stability',
    loss: '3,500 tons',
    pct: '27.1%',
    monetary: '₹12,250M',
    causes: ['Slag rate variability (σ=11)', 'Thermal state fluctuations', 'Burden distribution issues'],
    color: '#f97316',
    icon: <Zap size={14} style={{ color: '#f97316' }} />,
  },
  {
    title: 'Planned Maintenance',
    loss: '1,600 tons',
    pct: '12.4%',
    monetary: '₹5,600M',
    causes: ['Conveyor belt issues', 'Stockyard management', 'Charging delays'],
    color: '#eab308',
    icon: <Wrench size={14} style={{ color: '#eab308' }} />,
  },
  {
    title: 'Skill Gap',
    loss: '1,200 tons',
    pct: '9.3%',
    monetary: '₹4,200M',
    causes: ['Operator errors', 'Training gaps', 'Process knowledge deficit'],
    color: '#8b5cf6',
    icon: <Users size={14} style={{ color: '#8b5cf6' }} />,
  },
];

const priorityActions = [
  {
    rank: 1,
    title: 'Equipment Reliability',
    loss: '-4,800 tons loss',
    actions: ['Implement predictive maintenance', 'Reduce unplanned downtime by 50%', 'Target recovery: 2,400 tons/month'],
    color: '#ef4444',
    recovery: '2,400 t/month',
  },
  {
    rank: 2,
    title: 'Process Stability',
    loss: '-3,500 tons loss',
    actions: ['Reduce slag rate σ from 11 to 6', 'Implement SPC controls', 'Target recovery: 2,000 tons/month'],
    color: '#f97316',
    recovery: '2,000 t/month',
  },
  {
    rank: 3,
    title: 'RM Availability',
    loss: '-2,800 tons loss',
    actions: ['Secure HG ore supply chain', 'Improve blend management', 'Target recovery: 2,000 tons/month'],
    color: '#eab308',
    recovery: '2,000 t/month',
  },
];

export function MarginLossTree() {
  return (
    <div>
      <PageHeader
        title="Margin Loss Tree Analysis"
        subtitle="Throughput Loss Root Cause Analysis | BF4 | April 2025"
        summaryCards={[
          { label: 'Total Throughput Loss', value: '18,000 t', sub: 'vs Plan: 92,000 tons', negative: true },
          { label: 'Monetary Impact', value: '₹6,300M', sub: 'Lost contribution margin', negative: true },
          { label: 'Unit Impact', value: '₹3,500/ton', sub: 'Contribution margin' },
        ]}
      />

      <div className="p-6 space-y-5">
        {/* Total loss breakdown */}
        <SectionCard title="Total Loss Breakdown: 18,000 tons">
          <div className="flex gap-4 mb-4">
            <div className="rounded-xl px-4 py-3 flex-1 text-center" style={{ background: '#111f38' }}>
              <div style={{ color: '#94a3b8', fontSize: 11 }}>Total Throughput Loss</div>
              <div style={{ color: '#ef4444', fontSize: 28, fontWeight: 800 }}>18,000</div>
              <div style={{ color: '#64748b', fontSize: 11 }}>tons</div>
            </div>
            <div className="flex items-center" style={{ color: '#334155', fontSize: 24 }}>→</div>
            <div className="rounded-xl px-4 py-3 flex-1 text-center" style={{ background: '#1a0e0033', border: '1px solid #f9731630' }}>
              <div style={{ color: '#f97316', fontSize: 11 }}>RM Variability Impact</div>
              <div style={{ color: '#f97316', fontSize: 24, fontWeight: 800 }}>5,100</div>
              <div style={{ color: '#64748b', fontSize: 11 }}>tons (28.3%)</div>
            </div>
            <div className="flex items-center" style={{ color: '#334155', fontSize: 18 }}>+</div>
            <div className="rounded-xl px-4 py-3 flex-1 text-center" style={{ background: '#1a000033', border: '1px solid #ef444430' }}>
              <div style={{ color: '#ef4444', fontSize: 11 }}>Operations Impact</div>
              <div style={{ color: '#ef4444', fontSize: 24, fontWeight: 800 }}>12,900</div>
              <div style={{ color: '#64748b', fontSize: 11 }}>tons (71.7%)</div>
            </div>
          </div>

          {/* Split bar */}
          <div className="flex rounded-full overflow-hidden" style={{ height: 14 }}>
            <div style={{ width: '28.3%', background: '#f97316' }} title="RM Variability 28.3%" />
            <div style={{ width: '71.7%', background: '#ef4444' }} title="Operations 71.7%" />
          </div>
          <div className="flex justify-between mt-1">
            <span style={{ color: '#f97316', fontSize: 10 }}>RM Variability 28.3%</span>
            <span style={{ color: '#ef4444', fontSize: 10 }}>Operations 71.7%</span>
          </div>
        </SectionCard>

        {/* RM Variability Breakdown */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div style={{ color: '#f97316', fontSize: 13, fontWeight: 700 }}>RM Variability Impact Breakdown</div>
            <div className="flex items-center gap-3">
              <span style={{ color: '#94a3b8', fontSize: 12 }}>Total: 5,100 tons</span>
              <span className="px-2 py-0.5 rounded" style={{ background: '#f9731620', color: '#f97316', fontSize: 11, fontWeight: 600 }}>₹17,850M</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {rmLossCards.map((card) => (
              <LossCategoryCard key={card.title} card={card} />
            ))}
          </div>
        </div>

        {/* Operations Breakdown */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div style={{ color: '#ef4444', fontSize: 13, fontWeight: 700 }}>Operations Impact Breakdown</div>
            <div className="flex items-center gap-3">
              <span style={{ color: '#94a3b8', fontSize: 12 }}>Total: 12,900 tons</span>
              <span className="px-2 py-0.5 rounded" style={{ background: '#ef444420', color: '#ef4444', fontSize: 11, fontWeight: 600 }}>₹45,150M</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {opsLossCards.map((card) => (
              <LossCategoryCard key={card.title} card={card} />
            ))}
          </div>
        </div>

        {/* Priority Action Plan */}
        <SectionCard title="Priority Action Plan">
          <div className="grid grid-cols-3 gap-4">
            {priorityActions.map((a) => (
              <div key={a.rank} className="rounded-xl p-4" style={{
                background: '#111f38',
                border: `1px solid ${a.color}30`,
                borderTop: `3px solid ${a.color}`,
              }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="rounded-full flex items-center justify-center" style={{
                    width: 24, height: 24, background: `${a.color}20`, color: a.color, fontSize: 12, fontWeight: 800,
                  }}>
                    {a.rank}
                  </div>
                  <div>
                    <div style={{ color: a.color, fontSize: 12, fontWeight: 700 }}>Priority {a.rank}</div>
                    <div style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 700 }}>{a.title}</div>
                  </div>
                </div>
                <div style={{ color: '#ef4444', fontSize: 12, marginBottom: 10 }}>{a.loss}</div>
                <div className="space-y-1.5 mb-3">
                  {a.actions.map((act) => (
                    <div key={act} className="flex items-start gap-2">
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: a.color, marginTop: 5, flexShrink: 0 }} />
                      <span style={{ color: '#94a3b8', fontSize: 11 }}>{act}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg px-3 py-1.5 text-center" style={{ background: `${a.color}15` }}>
                  <span style={{ color: a.color, fontSize: 11, fontWeight: 600 }}>Recovery Target: {a.recovery}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recovery summary */}
          <div className="mt-4 rounded-xl p-4 flex items-center justify-between" style={{ background: '#0d1527', border: '1px solid #22c55e40' }}>
            <div>
              <div style={{ color: '#22c55e', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Potential Recovery (Top 3 Actions)
              </div>
              <div style={{ color: '#94a3b8', fontSize: 11 }}>Combined recovery potential from priority actions</div>
            </div>
            <div style={{ color: '#22c55e', fontSize: 32, fontWeight: 800 }}>6,400 t/month</div>
          </div>
        </SectionCard>

        {/* Insights */}
        <div className="flex gap-4">
          <InsightCard type="critical" title="Immediate Priority" headline="Equipment Reliability" body="37.2% of ops loss from equipment downtime. Predictive maintenance program needed urgently" />
          <InsightCard type="warning" title="Process Stability" headline="Slag Rate σ = 11 vs 6" body="Second largest operations driver. SPC implementation will yield 2,000t/month recovery" />
          <InsightCard type="action" title="RM Availability" headline="HG Ore Shortage" body="Secure contracts, expedite sourcing. 2,800 ton loss recoverable with right supply chain fix" />
        </div>
      </div>
    </div>
  );
}
