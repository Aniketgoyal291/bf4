import { createBrowserRouter, Navigate } from 'react-router';
import { Layout } from './components/Layout';
import { LossTree } from './pages/LossTree';
import { IBRMCosts } from './pages/IBRMCosts';
import { FuelCosts } from './pages/FuelCosts';
import { BFConversion } from './pages/BFConversion';
import { Operations } from './pages/Operations';
import { CostSheets } from './pages/CostSheets';
import { OreReceipts } from './pages/OreReceipts';
import { KPIs } from './pages/KPIs';
import { MarginLossTree } from './pages/MarginLossTree';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, element: <Navigate to="/loss-tree" replace /> },
      { path: 'loss-tree', Component: LossTree },
      { path: 'ibrm-costs', Component: IBRMCosts },
      { path: 'fuel-costs', Component: FuelCosts },
      { path: 'bf-conversion', Component: BFConversion },
      { path: 'operations', Component: Operations },
      { path: 'cost-sheets', Component: CostSheets },
      { path: 'ore-receipts', Component: OreReceipts },
      { path: 'kpis', Component: KPIs },
      { path: 'margin-loss-tree', Component: MarginLossTree },
    ],
  },
]);
