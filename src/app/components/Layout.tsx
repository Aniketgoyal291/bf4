import { NavLink, Outlet, useLocation } from 'react-router';
import { useState } from 'react';
import {
  BarChart2, DollarSign, Flame, Activity, Settings2,
  FileText, Package, Target, GitBranch, ChevronLeft, ChevronRight, Menu
} from 'lucide-react';

const navItems = [
  { path: '/loss-tree', label: 'Loss Tree', icon: BarChart2 },
  { path: '/ibrm-costs', label: 'IBRM Costs', icon: DollarSign },
  { path: '/fuel-costs', label: 'Fuel Costs', icon: Flame },
  { path: '/bf-conversion', label: 'BF Conversion', icon: Activity },
  { path: '/operations', label: 'Operations', icon: Settings2 },
  { path: '/cost-sheets', label: 'Cost Sheets', icon: FileText },
  { path: '/ore-receipts', label: 'Ore Receipts', icon: Package },
  { path: '/kpis', label: 'KPIs', icon: Target },
  { path: '/margin-loss-tree', label: 'Margin Loss Tree', icon: GitBranch },
];

export function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: '#070d1a', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside
        className="flex flex-col shrink-0 transition-all duration-200"
        style={{
          width: collapsed ? 56 : 220,
          background: '#0a1221',
          borderRight: '1px solid #1a2744',
        }}
      >
        {/* Logo / Title */}
        <div className="flex items-center justify-between px-3 py-4" style={{ borderBottom: '1px solid #1a2744' }}>
          {!collapsed && (
            <div>
              <div style={{ color: '#3b82f6', fontSize: 13, fontWeight: 700, letterSpacing: '0.05em' }}>BF4 Dashboard</div>
              <div style={{ color: '#64748b', fontSize: 11 }}>April 2025</div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded hover:bg-white/5 transition-colors ml-auto"
            style={{ color: '#64748b' }}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-2 overflow-y-auto">
          {navItems.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className="flex items-center gap-3 mx-2 my-0.5 px-3 py-2 rounded-lg transition-all duration-150"
              style={({ isActive }) => ({
                background: isActive ? '#1d4ed8' : 'transparent',
                color: isActive ? '#fff' : '#94a3b8',
                textDecoration: 'none',
              })}
              title={collapsed ? label : undefined}
            >
              <Icon size={16} className="shrink-0" />
              {!collapsed && (
                <span style={{ fontSize: 13, fontWeight: 500 }}>{label}</span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div className="px-3 py-3" style={{ borderTop: '1px solid #1a2744', color: '#334155', fontSize: 11 }}>
            JSW Steel · BF4 · v2.1
          </div>
        )}
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto" style={{ background: '#070d1a' }}>
        <Outlet />
      </main>
    </div>
  );
}

// ─── Shared sub-components ───────────────────────────────────────────────────

interface PageHeaderProps {
  title: string;
  subtitle: string;
  summaryCards: { label: string; value: string; sub?: string; positive?: boolean; negative?: boolean }[];
}

export function PageHeader({ title, subtitle, summaryCards }: PageHeaderProps) {
  return (
    <div
      className="sticky top-0 z-10 flex items-center justify-between px-6 py-3"
      style={{ background: '#0a1221', borderBottom: '1px solid #1a2744' }}
    >
      <div>
        <h1 style={{ color: '#e2e8f0', fontSize: 18, fontWeight: 700, margin: 0 }}>{title}</h1>
        <p style={{ color: '#64748b', fontSize: 12, margin: 0 }}>{subtitle}</p>
      </div>
      <div className="flex gap-3">
        {summaryCards.map((card, i) => (
          <div
            key={i}
            className="rounded-lg px-3 py-2 text-right"
            style={{ background: '#0d1527', border: '1px solid #1a2744', minWidth: 110 }}
          >
            <div style={{ color: '#64748b', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{card.label}</div>
            <div
              style={{
                color: card.positive ? '#22c55e' : card.negative ? '#ef4444' : '#e2e8f0',
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              {card.value}
            </div>
            {card.sub && <div style={{ color: '#64748b', fontSize: 10 }}>{card.sub}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

interface InsightCardProps {
  type: 'critical' | 'opportunity' | 'positive' | 'action' | 'warning' | 'info';
  title: string;
  headline: string;
  body: string;
}

export function InsightCard({ type, title, headline, body }: InsightCardProps) {
  const colors = {
    critical: { border: '#ef4444', accent: '#ef4444', bg: '#1a0a0a' },
    opportunity: { border: '#eab308', accent: '#eab308', bg: '#1a1500' },
    positive: { border: '#22c55e', accent: '#22c55e', bg: '#091a0d' },
    action: { border: '#f97316', accent: '#f97316', bg: '#1a0e00' },
    warning: { border: '#f97316', accent: '#f97316', bg: '#1a1000' },
    info: { border: '#3b82f6', accent: '#3b82f6', bg: '#060f1a' },
  };
  const c = colors[type];

  return (
    <div
      className="rounded-xl p-4 flex-1"
      style={{ background: c.bg, border: `1px solid ${c.border}33`, borderLeft: `3px solid ${c.border}` }}
    >
      <div style={{ color: c.accent, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
        {title}
      </div>
      <div style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 600, marginBottom: 3 }}>{headline}</div>
      <div style={{ color: '#94a3b8', fontSize: 11 }}>{body}</div>
    </div>
  );
}

interface SectionCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionCard({ title, children, className }: SectionCardProps) {
  return (
    <div
      className={`rounded-xl p-4 ${className ?? ''}`}
      style={{ background: '#0d1527', border: '1px solid #1a2744' }}
    >
      {title && (
        <h3 style={{ color: '#94a3b8', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

interface KVRowProps {
  label: string;
  plan: string;
  actual: string;
  vsTarget: string;
  worse?: boolean;
}

export function KVRow({ label, plan, actual, vsTarget, worse }: KVRowProps) {
  return (
    <div className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid #1a2744' }}>
      <span style={{ color: '#94a3b8', fontSize: 12, flex: 1 }}>{label}</span>
      <span style={{ color: '#3b82f6', fontSize: 12, width: 72, textAlign: 'right' }}>{plan}</span>
      <span style={{ color: '#8b5cf6', fontSize: 12, width: 72, textAlign: 'right' }}>{actual}</span>
      <span
        style={{ color: worse ? '#ef4444' : '#22c55e', fontSize: 12, width: 80, textAlign: 'right', fontWeight: 600 }}
      >
        {vsTarget}
      </span>
    </div>
  );
}

// Table component
interface TableProps {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
  totalRow?: boolean;
}

export function DataTable({ headers, rows, totalRow }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full" style={{ borderCollapse: 'collapse', fontSize: 12 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="py-2 px-3"
                style={{
                  background: '#111f38',
                  color: '#94a3b8',
                  fontWeight: 600,
                  textAlign: i === 0 ? 'left' : 'right',
                  borderBottom: '1px solid #1a2744',
                  whiteSpace: 'nowrap',
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => {
            const isTotal = totalRow && ri === rows.length - 1;
            return (
              <tr
                key={ri}
                style={{ background: isTotal ? '#111f38' : ri % 2 === 0 ? 'transparent' : '#0a1221' }}
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="py-2 px-3"
                    style={{
                      color: isTotal ? '#e2e8f0' : '#cbd5e1',
                      fontWeight: isTotal ? 700 : 400,
                      textAlign: ci === 0 ? 'left' : 'right',
                      borderBottom: '1px solid #1a2744',
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// Status badge
export function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    Shortage: { bg: '#ef444420', text: '#ef4444' },
    'Slight Short': { bg: '#f9731620', text: '#f97316' },
    Adequate: { bg: '#22c55e20', text: '#22c55e' },
    Critical: { bg: '#ef444420', text: '#ef4444' },
    Warning: { bg: '#f9731620', text: '#f97316' },
    'On Target': { bg: '#22c55e20', text: '#22c55e' },
  };
  const c = colors[status] ?? { bg: '#3b82f620', text: '#3b82f6' };
  return (
    <span
      className="px-2 py-0.5 rounded text-xs font-semibold"
      style={{ background: c.bg, color: c.text }}
    >
      {status}
    </span>
  );
}

// Progress bar for sub-KPIs
export function ProgressBar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="rounded-full overflow-hidden" style={{ height: 4, background: '#1a2744' }}>
      <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 9999 }} />
    </div>
  );
}
