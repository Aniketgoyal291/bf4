BF4 JSW Steel Control system (with prompt for frontend) 


This is a BF4 blast-furnace performance control tower for JSW Steel, not just a dashboard. It is a decision-support layer that compares plan vs actual, finds why costs and output moved, assigns loss ownership, and pushes actions.
What it does exactly:
* Tracks planned vs actual for hot metal cost, throughput, fuel rate, ore receipts, raw-material chemistry, BF conversion, utilities, credits, and shutdowns.
* Breaks variance into drivers. Example. Coke ops, slag variability, blend conversion, market movement, sourcing mix, downtime, process stability.
* Shows root causes and ownership. Market, sourcing, agglomeration, coke ops, BF ops, maintenance, skill gaps.
* Tracks monthly and 30-day trends, plus last-6-month KPI trends.
* Flags status with on-target, warning, critical.
* Surfaces recommended actions. Improve sourcing mix, raise HG ore share, reduce slag variability, reduce coke moisture, improve maintenance reliability.
Complete scope of the system:
* Executive summary KPI layer.
* Cost variance layer.
* Raw-material receipt and inventory layer.
* Ore quality and chemical-composition layer.
* Operations parameter layer.
* Fuel and coke/coal cost layer.
* BF conversion, throughput, losses, downtime layer.
* Margin loss tree and action-planning layer.
* Cost ownership and accountability layer.
Main use case:
* Help plant leadership figure out why BF4 missed plan, where cost leaked, and which lever gives the fastest recovery.
* In this mockup, the big story is. throughput shortfall, Fe grade drop, higher slag variability, higher coke cost, and downtime. Those together drive unit cost up.
Who will use it:
* Plant head and blast furnace leadership.
* Operations managers.
* Raw material and procurement teams.
* Quality and metallurgy teams.
* Maintenance and reliability teams.
* Finance / cost-control teams.
* Possibly senior JSW leadership in review meetings.
Where it will likely be deployed:
* Power BI app or embedded dashboard inside JSW’s internal portal.
* Desktop use first. Plant offices, control-room reviews, management meetings.
* Possibly mobile for quick review, but the design screams desktop-first.
* Backed by internal data sources. ERP, MES, LIMS, weighbridge, dispatch, maintenance, and production logs. That part is inferred from the metrics, not explicitly shown.
Impact:
* Makes losses visible by owner, not just by total.
* Turns one monthly review into a drill-down system.
* Improves decision speed on sourcing, burden mix, coke moisture, downtime, and maintenance.
* Helps prioritize actions by money impact, not by intuition.
What it is not:
* Not a machine-control system.
* Not an ERP replacement.
* Not just a reporting page. It is a management diagnosis and action layer.
Best one-line description:
* “BF4 operational intelligence and cost-variance system for reducing hot metal cost and throughput loss through root-cause analytics.”




prompt: 
# Rebuild this exact JSW Steel BF4 dashboard UI

Build a **pixel-close frontend clone** of the screenshots I provided. This is a **dark enterprise dashboard** for **JSW Steel, BF4**. It must look like a polished internal Power BI style dashboard, but implemented as a real responsive web app in Replit.

## Goal

Create the full frontend for a BF4 steel plant performance system with the same:
- layout
- color system
- card sizes
- spacing
- typography feel
- charts
- tables
- labels
- sample values
- left navigation
- page order
- section order
- summary boxes
- alert styles
- trend cards
- insight cards

This is not a generic dashboard. It is a BF4 operational intelligence app for:
- cost variance analysis
- raw material / ore receipts analysis
- fuel and coke cost analysis
- BF conversion performance
- operations process control
- KPI monitoring
- margin loss tree root-cause analysis

Use the screenshots as the visual source of truth. Match the look and structure as closely as possible.

---

# Tech stack

Use:
- React
- Vite or Next.js
- Tailwind CSS
- Recharts or ECharts for charts
- simple data-driven components
- no backend needed
- no authentication needed
- mock data only

The app should feel like a real internal dashboard, not a template.

---

# Global visual system

## Theme
- Deep navy / midnight blue background
- Slightly lighter panel cards
- Rounded cards, soft corners
- Thin subtle borders
- Very low contrast shadows
- Enterprise dashboard feel
- Dark mode only

## Typography
- Use a clean sans font like Inter or similar
- Big page titles, medium section titles, compact labels
- Numeric values must be large and highly readable
- Secondary text smaller and muted

## Color language
Use these meanings consistently:
- Blue. planned values, navigation highlight, standard data
- Purple. actual values
- Green. savings, positive impact, on-target
- Red. losses, negative variance, critical
- Orange. warning, attention, deviation, problem areas
- Yellow. action, opportunity, highlight
- Gray. base totals, neutral background

## Card styling
- Rounded corners around 12 to 18 px
- Thin borders with colored accents depending on status
- Dark card background slightly lighter than page background
- Cards must have consistent internal padding
- Content should breathe, but remain dense like a management dashboard

## Overall layout
- Fixed left sidebar
- Main content area on the right
- Top header with page title and subtitle
- Main content is vertically scrollable
- All pages have the same shell

---

# App shell and navigation

## Left sidebar
Title at the top:
- `BF4 Dashboard`
- sublabel `April 2025`

Navigation items exactly in this order:
1. Loss Tree
2. IBRM Costs
3. Fuel Costs
4. BF Conversion
5. Operations
6. Cost Sheets
7. Ore Receipts
8. KPIs
9. Margin Loss Tree

Sidebar behavior:
- active page has a bright blue fill
- inactive items are dark with muted icons/text
- icons should be simple line icons
- the selected item should look exactly like the screenshots, with a bright blue pill background and white text

## Top app bar
Inside the dashboard area, each page has:
- page title
- subtitle / descriptive line
- small top-right utility area with compact status boxes or summary chips depending on the page

Do not show browser chrome. Only build the app UI itself.

---

# Pages to create

Create these screens as separate routes or tabs:
- `/loss-tree`
- `/ibrm-costs`
- `/fuel-costs`
- `/bf-conversion`
- `/operations`
- `/cost-sheets` placeholder
- `/ore-receipts`
- `/kpis`
- `/margin-loss-tree`

Default route should open on **Loss Tree**.

---

# Page 1. Loss Tree. Cost Variance Analysis

## Header
Title:
- `Cost Variance Analysis`

Subtitle:
- `BF4 | April 2025 | Plan vs Actual`

Top-right summary cards:
1. `Planned Cost`
   - `₹24,083`
   - `per ton HM`
2. `Actual Cost`
   - `₹24,391`
   - `per ton HM`
3. `Variance`
   - `+₹308`
   - `+1.28%`

## Main chart
Large waterfall chart titled:
- `Cost Waterfall - Planned to Actual`

It should show:
- Planned Cost
- IBRM Cost
- Coal Cost
- Coke Cost
- Flux Cost
- BF Conversion
- Actual Cost

Use the visible values:
- Planned Cost. base at `₹24,083`
- IBRM Cost. `-₹368`
- Coal Cost. `+₹62`
- Coke Cost. `-₹208`
- Flux Cost. `-₹6`
- BF Conversion. `+₹213`
- Actual Cost. end at `₹24,391`

Legend:
- Base/Total
- Savings (Positive)
- Additional Cost (Negative)

## Loss driver cards
Below the chart, show five cards exactly like the screenshot.

1. `IBRM Cost`
   - `-₹368`
   - `per ton`
2. `Coal Cost`
   - `+₹62`
   - `per ton`
3. `Coke Cost`
   - `-₹208`
   - `per ton`
4. `Flux Cost`
   - `-₹6`
   - `per ton`
5. `BF Conversion`
   - `+₹213`
   - `per ton`

Positive values are green. Negative values are red.

## Top 5 Loss Drivers panel
List these entries as full-width cards:

1. `Coke BF Operations`
   - label `Coke Cost`
   - value `₹-218 per ton`
2. `Slag Rate Variability (Coke)`
   - label `Coke Cost`
   - value `₹-148 per ton`
3. `BF Conversion Credits`
   - label `BF Conversion`
   - value `+₹227 per ton`
4. `Coal BF Operations`
   - label `Coal Cost`
   - value `+₹111 per ton`
5. `Blend Conversion Cost`
   - label `IBRM Cost`
   - value `₹-270 per ton`

## Key Insights panel
Three cards:
- `Primary Cost Driver`
  - `Coke BF Operations`
  - `-₹218/ton impacting overall coke cost performance`
- `Biggest Opportunity`
  - `Slag Rate Variability`
  - `-₹148/ton on coke alone. Reduce σ from 11 to 6`
- `Positive Impact`
  - `BF Conversion (+₹213)`
  - `Credits (+₹227) driving positive variance`

---

# Page 2. IBRM Costs

## Header
Title:
- `IBRM Cost Analysis`

Subtitle:
- `Iron Bearing Raw Materials | BF4 | April 2025`

Top-right summary cards:
1. `Planned IBRM Price`
   - `₹4,378`
   - `per MT @ 57.95% Fe`
2. `Actual IBRM Price`
   - `₹4,131`
   - `per MT @ 56.01% Fe`
3. `Total Deviation`
   - `-₹247`
   - `per MT (-5.64%)`

## Top metric cards
Three large cards:

### Quantity Impact
- Planned Qty `2.50 Mn MT`
- Actual Qty `2.10 Mn MT`
- Deviation `-0.40 Mn MT`

### Fe% Grade Impact
- Planned Fe% `57.95%`
- Actual Fe% `56.01%`
- Deviation `-1.94%`

### Price Deviation Split
- Market Movement `-₹204/MT`
- Grade Impact `-₹42/MT`
- Total Deviation `-₹247/MT`

## Source-wise table
Create a dense table with columns:
- Source
- Plan Qty (Mn MT)
- Plan Fe%
- Plan Rate (₹/MT)
- Actual Qty (Mn MT)
- Actual Fe%
- Actual Rate (₹/MT)
- Qty Dev
- Fe Dev
- Rate Dev

Rows exactly:

- NMDC. `0.45 | 64.2% | ₹5,200 | 0.38 | 63.8% | ₹5,100 | -0.07 | -0.4% | ₹-100`
- RPC. `0.55 | 62.5% | ₹4,800 | 0.48 | 61.9% | ₹4,650 | -0.07 | -0.6% | ₹-150`
- Vedanta. `0.35 | 61.8% | ₹4,600 | 0.29 | 60.5% | ₹4,450 | -0.06 | -1.3% | ₹-150`
- Captive Mines. `0.42 | 58.5% | ₹3,900 | 0.37 | 57.2% | ₹3,750 | -0.05 | -1.3% | ₹-150`
- Cat A&B HG. `0.38 | 59.5% | ₹4,100 | 0.32 | 58.8% | ₹3,980 | -0.06 | -0.7% | ₹-120`
- Cat A&B MG. `0.35 | 53.2% | ₹3,500 | 0.26 | 52.1% | ₹3,380 | -0.09 | -1.1% | ₹-120`

## Grade-wise summary table
Rows:
- `HG (>60% Fe)`
  - Plan Qty `1.35 Mn MT`
  - Planned Fe% `62.5%`
  - Planned Rate `₹4,850/MT`
  - Actual Qty `1.08 Mn MT`
  - Actual Fe% `61.8%`
  - Actual Rate `₹4,720/MT`
  - Deviation `₹-130/MT`
- `MG (56-60% Fe)`
  - `0.82 | 58.2% | ₹4,050/MT | 0.71 | 57.5% | ₹3,920/MT | ₹-130/MT`
- `LG (<56% Fe)`
  - `0.23 | 54.1% | ₹3,400/MT | 0.21 | 53.2% | ₹3,280/MT | ₹-120/MT`
- `MnO Bearing`
  - `0.10 | 52.8% | ₹3,800/MT | 0.10 | 52.5% | ₹3,750/MT | ₹-50/MT`
- `TOTAL`
  - `2.50 Mn MT | 57.95% | ₹4,378/MT | 2.10 Mn MT | 56.01% | ₹4,131/MT | ₹-247/MT`

## Chemical composition panel
Bar chart titled:
- `Chemical Composition: Planned vs Actual`

Show these values:
- Fe%. planned `57.95`, actual `56.01`
- SiO2%. planned `4.20`, actual `4.80`
- Al2O3%. planned `2.80`, actual `3.10`
- MnO%. planned `0.42`, actual `0.38`

Key chemical parameters panel:
- Fe%. `Plan: 57.95%`, `Actual: 56.01%`, `vs Planned: -1.94%`
- SiO2%. `Plan: 4.20%`, `Actual: 4.80%`, `vs Planned: +0.60%`
- Al2O3%. `Plan: 2.80%`, `Actual: 3.10%`, `vs Planned: +0.30%`
- MnO%. `Plan: 0.42%`, `Actual: 0.38%`, `vs Planned: -0.04%`

## IBRM Cost Breakdown
Cards:
- `Total IBRM Cost Deviation`
  - `₹-367`
- `Market Movement (Ore)`
  - `₹-96`
- `Grade Impact`
  - `+₹78`
- `Blend Conversion Cost`
  - `₹-270`
- `Blend Mix Impact`
  - `₹-79`

## Key Insights & Actions
- `Primary Issue`
  - `Fe% Grade Drop`
  - `1.94% Fe reduction increased ore consumption and cost`
- `Volume Impact`
  - `-0.40 Mn MT`
  - `Lower ore receipts vs plan across all grades`
- `Action Required`
  - `Improve Sourcing Mix`
  - `Increase HG ore proportion to improve Fe%`

---

# Page 3. Fuel Costs

## Header
Title:
- `Fuel Cost Analysis`

Subtitle:
- `Coal & Coke Cost Breakdown | BF4 | April 2025`

Top-right summary cards:
1. `Coal Cost Impact`
   - `+₹62`
   - `per ton (Savings)`
2. `Coke Cost Impact`
   - `-₹208`
   - `per ton (Loss)`
3. `Net Fuel Impact`
   - `-₹147`
   - `per ton`

## Main charts
Two waterfall charts side by side.

### Coal Cost Waterfall
Title:
- `Coal Cost Waterfall`

Use these labels in order:
- Market Movement
- Slag Rate Impact
- Slag Rate Variability
- BF Operations
- Deviation

Visible numeric logic:
- `0 + 4 - 49 + 111 = +62`
- Show final callout:
  - `Coal Cost Deviation: +₹62/ton`
  - `Sum of components: 0 + 4 - 49 + 111 = +₹62`

### Coke Cost Waterfall
Title:
- `Coke Cost Waterfall`

Labels:
- Market Movement
- Slag Rate Impact
- Slag Rate Variability
- BF Operations
- Deviation

Visible numeric logic:
- `81 + 11 - 148 - 218 = -274`
- Final callout must read:
  - `Coke Cost Deviation: -₹208/ton`
  - `Sum of components: 81 + 11 - 148 - 218 = -₹274 (adjusted to -₹208)`

## Key fuel parameters
Three cards:
1. `Slag Rate (kg/thm)`
   - Planned `410 kg/thm`
   - Actual `420 kg/thm`
   - Target `400 kg/thm`
   - vs Plan `+10.0 kg/thm`
   - vs Target `+20.0 kg/thm`
2. `Coke Moisture (%)`
   - Planned `3.5%`
   - Actual `4.2%`
   - Target `3.0%`
   - vs Plan `+0.7%`
   - vs Target `+1.2%`
3. `Slag Rate Variability (σ)`
   - Planned `8 kg/thm`
   - Actual `11 kg/thm`
   - Target `6 kg/thm`
   - vs Plan `+3.0 kg/thm`
   - vs Target `+5.0 kg/thm`

## Fuel consumption thumbrules
Three compact cards:
- `Slag Rate Impact`
  - `1.2 kg/ton`
  - `10 kg change in slag rate -> 1.2 kg change in fuel rate`
- `Slag Rate Variability`
  - `1.8 kg/ton`
  - `1 kg increase in slag rate σ -> 1.8 kg change in fuel rate`
- `Coke Moisture Impact`
  - `4 kg/ton`
  - `1% increase in coke moisture -> +4 kg fuel rate`

## 30-day fuel trend chart
Title:
- `30-Day Fuel Rate Trend`

Show three smooth lines:
- Total Fuel Rate
- Coke Rate
- Coal Rate

Visible summary values:
- Avg Fuel Rate `519.8 kg/thm`
- Avg Coke Rate `312.2 kg/thm`
- Avg Coal Rate `207.6 kg/thm`
- Fuel Rate Range `499 - 543`

The line trend should be smooth and realistic, with:
- fuel rate around 500 to 540
- coke around 300 to 320
- coal around 190 to 210

## Key Insights & Actions
- `Critical Issue`
  - `Slag Rate Variability`
  - `Combined impact of ~₹197/ton on coal & coke. Reduce σ from 11 to target 6`
- `BF Operations`
  - `-₹218 on Coke`
  - `High coke rate spikes observed. Review burden distribution & thermal state`
- `Quick Win`
  - `Coke Moisture Control`
  - `Reduce from 4.2% to 3.0% target`

---

# Page 4. BF Conversion

## Header
Title:
- `BF Conversion Cost Analysis`

Subtitle:
- `Losses, Utilities, Credits & Throughput Impact | BF4 | April 2025`

Top-right summary cards:
1. `Losses`
   - `-₹86`
   - `per ton`
2. `Utilities`
   - `+₹55`
   - `per ton (Savings)`
3. `Credits`
   - `+₹227`
   - `per ton`
4. `Throughput`
   - `+₹17`
   - `per ton`
5. `Net Impact`
   - `+₹213`
   - `per ton`

## Throughput analysis
Horizontal bar chart titled:
- `Throughput Analysis: Planned vs Actual`

Right-side cards:
- `Monthly Target`
  - `95,000 tons`
  - `Design capacity target`
- `Planned Throughput`
  - `92,000 tons`
  - `3.2% below target due to planned maintenance`
- `Actual Throughput`
  - `74,000 tons`
  - `19.6% below plan`
- `Production Shortfall`
  - `-18,000 tons`
  - `Primary causes: RM variability (5,100) + Operations (12,900)`
- `Cost Impact of Loss`
  - `+₹17/ton`
  - `Higher unit fixed costs due to lower production`

## Unit fixed cost trend
Title:
- `Unit Fixed Cost Trend: Planned vs Actual`

Show Jan, Feb, Mar, Apr bars.

Visible April note:
- `April Impact: ₹2,150/ton vs ₹1,850 planned`
- `+16.2% increase due to 19.6% throughput shortfall. Fixed costs spread over lower production.`

## BF losses table
Title:
- `BF Losses: Planned vs Actual`

Rows:
- `Spillage & Wastage` | Planned `₹52` | Actual `₹68` | Variance `+₹16`
- `Dust Losses` | `₹28` | `₹35` | `+₹7`
- `Slag Losses (Fe)` | `₹18` | `₹25` | `+₹7`
- `Gas Losses` | `₹12` | `₹15` | `+₹3`
- `Other Losses` | `₹8` | `₹11` | `+₹3`
- `TOTAL` | `₹118` | `₹154` | `+₹36`

Bottom callout:
- `Total BF Losses: -₹86/ton`
- `Primary drivers: Spillage & wastage (+₹16 variance)`

## Shutdowns & maintenance table
Rows:
- `Planned Shutdowns` | `48 hrs` | `48 hrs` | `0 hrs`
- `Unplanned Shutdowns` | `0 hrs` | `72 hrs` | `+72 hrs`
- `Maintenance Hours` | `36 hrs` | `42 hrs` | `+6 hrs`
- `Hot Delays` | `8 hrs` | `18 hrs` | `+10 hrs`
- `TOTAL` | `92 hrs` | `180 hrs` | `+88 hrs`

Bottom callout:
- `Unplanned Downtime: 72 hours`
- `Major contributor to throughput loss. Requires immediate attention.`

## Utilities cost table
Rows:
- `Power` | `₹280` | `₹265` | `+₹15`
- `Steam` | `₹120` | `₹110` | `+₹10`
- `Water` | `₹85` | `₹75` | `+₹10`
- `Oxygen` | `₹190` | `₹175` | `+₹15`
- `N2 Gas` | `₹45` | `₹50` | `-₹5`
- `TOTAL` | `₹720` | `₹675` | `+₹45`

Bottom callout:
- `Net Utilities Savings: +₹55/ton`
- `Key drivers: Power optimization (₹15) & Oxygen efficiency (₹15)`

## Credits & by-product sales table
Rows:
- `BF Gas` | `₹450` | `₹520` | `+₹70`
- `BF Slag` | `₹280` | `₹350` | `+₹70`
- `Dust Recovery` | `₹95` | `₹110` | `+₹15`
- `Scrap Sales` | `₹68` | `₹85` | `+₹17`
- `TOTAL` | `₹893` | `₹1065` | `+₹172`

Bottom callout:
- `Additional Credits: +₹227/ton`
- `BF Gas (₹70) & BF Slag (₹70) higher realizations vs plan`

## BF Conversion Cost Summary
Show five summary cards:
- `Losses` `-₹86`
- `Utilities` `+₹55`
- `Credits` `+₹227`
- `Throughput` `+₹17`
- `Net Impact` `+₹213`

## Key Insights & Actions
- `Positive Impact`
  - `Credits +₹227/ton`
  - `Higher BF gas and slag realizations contributing significantly`
- `Critical Issue`
  - `Throughput Loss: 18,000t`
  - `Focus on RM availability and operations stability to recover production`
- `Opportunity`
  - `Utilities Optimization`
  - `Continue power and oxygen efficiency initiatives for savings`

---

# Page 5. Operations

## Header
Title:
- `Operations Parameters`

Subtitle:
- `Burden Quality & Process Control | BF4 | April 2025`

Top-right summary cards:
1. `Avg Slag Rate`
   - `420 kg/thm`
   - `vs 410 target`
2. `Slag Rate σ`
   - `11 kg/thm`
   - `vs 6 target`
3. `Fuel Rate`
   - `528 kg/thm`
   - `vs 510 target`

## Main chart
Large line chart with Bollinger-style bands titled:
- `Slag Rate & Variability (Bollinger Band Style)`

Show:
- Actual Slag Rate line
- Upper bound
- Lower bound
- Target line at 410

Use a tooltip style like the screenshot. Example hover state:
- `D6`
- `Upper Bound (+σ): 438.2`
- `Lower Bound (-σ): 416.2`
- `Actual Slag Rate: 427.2`
- `Target: 410`

## Bottom stat cards
- `Avg Slag Rate` `420 kg/thm`
- `Std Deviation (σ)` `11 kg/thm`
- `Target Slag Rate` `410 kg/thm`
- `Target σ` `6 kg/thm`

## Coke Parameters panel
Use these exact values:
- `Coke Ash (%)`
  - Planned `18.5%`
  - Actual `19.2%`
  - Target `18%`
  - vs Target `+1.2%`
- `Coke Moisture (%)`
  - Planned `3.5%`
  - Actual `4.2%`
  - Target `3%`
  - vs Target `+1.2%`
- `CSR`
  - Planned `65%`
  - Actual `62%`
  - Target `68%`
  - vs Target `-6.0%`
- `CRI`
  - Planned `24%`
  - Actual `26%`
  - Target `22%`
  - vs Target `+4.0%`
- `MICUM (+40mm)`
  - Planned `82%`
  - Actual `79%`
  - Target `85%`
  - vs Target `-6.0%`
- `MPS (mm)`
  - Planned `52 mm`
  - Actual `50 mm`
  - Target `54 mm`
  - vs Target `-4.0 mm`

## Sinter Parameters panel
- `Tumbler Index`
  - Planned `68%`
  - Actual `65%`
  - Target `70%`
  - vs Target `-5.0%`
- `RDI`
  - Planned `25%`
  - Actual `28%`
  - Target `23%`
  - vs Target `+5.0%`
- `FeO (%)`
  - Planned `8.5%`
  - Actual `9.2%`
  - Target `8%`
  - vs Target `+1.2%`
- `Fines (-5mm) %`
  - Planned `4.2%`
  - Actual `5.8%`
  - Target `3.5%`
  - vs Target `+2.3%`

## Pellet Parameters panel
- `CCS (kg/pellet)`
  - Planned `240 kg/p`
  - Actual `228 kg/p`
  - Target `250 kg/p`
  - vs Target `-22.0 kg/p`
- `RDI`
  - Planned `18%`
  - Actual `21%`
  - Target `16%`
  - vs Target `+5.0%`
- `Tumbler Index`
  - Planned `95%`
  - Actual `93%`
  - Target `96%`
  - vs Target `-3.0%`
- `FeO (%)`
  - Planned `0.8%`
  - Actual `1.2%`
  - Target `0.6%`
  - vs Target `+0.6%`

## Burden Usage table
Title:
- `Burden Usage: Planned vs Actual (MT per ton of Hot Metal)`

Rows:
- `Sinter` | Planned `1.280` | Actual `1.350` | Deviation `+0.070`
- `Pellet` | `0.420` | `0.380` | `-0.040`
- `Lump Ore` | `0.180` | `0.220` | `+0.040`
- `Flux (Limestone)` | `0.055` | `0.062` | `+0.007`
- `Flux (Dolomite)` | `0.025` | `0.028` | `+0.003`

Bottom callout text:
- `Key Issue: Sinter Overconsumption`
- `+0.07 MT/thm vs plan (5.5% increase)`
- `Pellet Underconsumption`
- `-0.04 MT/thm vs plan (9.5% decrease)`
- `Flux Overuse`
- `+12.7% vs plan due to ore quality variation`

## Key Insights & Actions
- `Critical Issue`
  - `Slag Rate Variability`
  - `σ=11 vs target of 6. Implement tighter burden control and SPC`
- `Quality Concern`
  - `Coke Moisture at 4.2%`
  - `20% above target. Review coke drying and storage practices`
- `Burden Mix`
  - `Sinter-Pellet Imbalance`
  - `Increase pellet usage to 0.45 MT/thm for better permeability`

---

# Page 6. Ore Receipts

## Header
Title:
- `Ore Receipts Analysis`

Subtitle:
- `Grade-wise Receipts, Quality & Cost Ownership | BF4 | April 2025`

Top-right summary cards:
1. `Planned Receipts`
   - `2.50 Mn MT`
   - `Monthly target`
2. `Actual Receipts`
   - `2.10 Mn MT`
   - `Monthly actual`
3. `Shortfall`
   - `-0.40 Mn MT`
   - `-16.0% vs plan`

## Monthly receipts by grade chart
Title:
- `Monthly Receipts by Grade: Planned vs Actual`

Use grouped bars for:
- HG (>60% Fe)
- MG (56-60% Fe)
- LG (<56% Fe)
- MnO Bearing

Table on the right:
- `HG (>60% Fe)` | Planned `1.35 Mn MT` | Actual `1.08 Mn MT` | Deviation `-0.27 Mn MT`
- `MG (56-60% Fe)` | `0.82` | `0.71` | `-0.11`
- `LG (<56% Fe)` | `0.23` | `0.21` | `-0.02`
- `MnO Bearing` | `0.10` | `0.10` | `+0.00`
- `TOTAL` | `2.50` | `2.10` | `-0.40`

Bottom callout:
- `Critical Shortage: HG Ore`
- `-0.27 Mn MT (20% below plan). Primary contributor to Fe% drop and throughput loss.`

## Monthly consumption by grade chart
Title:
- `Monthly Consumption by Grade: Planned vs Actual`

Show same grade rows with:
- `HG (>60% Fe)` | Planned `1.28 Mn MT` | Actual `1.02 Mn MT` | `-0.26 Mn MT`
- `MG (56-60% Fe)` | `0.78` | `0.68` | `-0.10`
- `LG (<56% Fe)` | `0.22` | `0.20` | `-0.02`
- `MnO Bearing` | `0.10` | `0.10` | `+0.00`
- `TOTAL` | `2.38` | `2.00` | `-0.38`

Bottom note:
- `Lower Consumption due to Throughput Loss`
- `Actual consumption 15.9% below plan driven by production shortfall of 18,000 tons`

## Fe% by grade trend chart
Title:
- `Fe% by Grade: 30-Day Trend`

Show lines for:
- HG Fe%
- MG Fe%
- LG Fe%
- MnO Fe%

Use visually stable daily trend lines.

## Overall chemical composition trends
Title:
- `Overall Chemical Composition Trends`

Lines:
- Fe%
- SiO2%
- Al2O3%
- MnO%

## Inventory status log
Title:
- `Inventory Status Log`

Columns:
- Grade
- Planned Qty (Mn MT)
- Actual Qty (Mn MT)
- Shortfall/Excess
- Current Inventory
- Status

Rows:
- `HG Ore` | `1.35` | `1.08` | `-0.27` | `0.15 Mn MT` | `Shortage`
- `MG Ore` | `0.82` | `0.71` | `-0.11` | `0.08 Mn MT` | `Shortage`
- `LG Ore` | `0.23` | `0.21` | `-0.02` | `0.12 Mn MT` | `Slight Short`
- `MnO Ore` | `0.10` | `0.10` | `+0.00` | `0.05 Mn MT` | `Adequate`

## Cost ownership matrix
Title:
- `Cost Ownership Matrix`

Show this breakdown as stacked colored cards with compact tags:

1. `Market Movement`
   - `₹-204/ton`
   - `Market-driven price changes beyond control`
   - tags: `Ore price changes`, `Coal/Coke market rates`
2. `Sourcing`
   - `₹-168/ton`
   - `Fe grade drop, slag rate variability`
   - tags: `Fe grade impact: -42`, `Slag rate: +15`, `Slag rate var: -197`, `Coke moisture: -5`
3. `Agglo Operations`
   - `₹-79/ton`
   - `Blend quantity impact on agglomeration`
   - tags: `Sinter: -48`, `Pellet: -21`, `Lump: -10`
4. `Coke Operations`
   - `₹-5/ton`
   - `Coke moisture control issues`
   - tag: `Coke moisture impact`
5. `BF Operations`
   - `₹-106/ton`
   - `Net BF operational impact`
   - tags: `Coal BF ops: +111`, `Coke BF ops: -218`, `Slag control: +1`

Bottom total:
- `Total Cost Impact`
  - `-₹562/ton`

## Key Insights & Actions
- `Critical Issue`
  - `HG Ore Shortage`
  - `-0.27 Mn MT shortfall driving Fe% drop and throughput loss`
- `Primary Cost Owner`
  - `Market Movement`
  - `-₹204/ton impact from market price changes`
- `Action Required`
  - `Improve Sourcing Mix`
  - `Secure HG ore contracts to stabilize quality and reduce variance`

---

# Page 7. KPIs

## Header
Title:
- `Key Performance Indicators (KPIs)`

Subtitle:
- `Leading & Sub-KPIs Dashboard | BF4 | April 2025`

Top-right status chips:
- `On Target 2`
- `Warning 3`
- `Critical 3`

## KPI cards layout
Create 2 x 3 large KPI cards in a grid, each with colored border, status icon, main metric, target, deviation, and sub-KPIs with progress bars.

### 1. Throughput
Section label:
- `Production Performance`

Main metric:
- `74,000 tons/month`
- Target `92,000 tons/month`
- Deviation `-19.6%`

Sub-KPIs:
- `Daily Production Rate`
  - `2,467 tons/day`
  - Target `3,067 tons/day`
  - `-19.6%`
- `Availability %`
  - `87.5%`
  - Target `95%`
  - `-7.9%`
- `Utilization %`
  - `78.9%`
  - Target `90%`
  - `-12.3%`

### 2. Unit Hot Metal Cost
Section label:
- `Cost Performance`

Main metric:
- `24,391 ₹/ton`
- Target `24,083 ₹/ton`
- Deviation `+1.3%`

Sub-KPIs:
- `IBRM Cost`
  - `10,250 ₹/ton`
  - Target `10,618 ₹/ton`
  - `-3.5%`
- `Fuel Cost`
  - `7,850 ₹/ton`
  - Target `7,997 ₹/ton`
  - `-1.8%`
- `Conversion Cost`
  - `6,291 ₹/ton`
  - Target `5,468 ₹/ton`
  - `+15.1%`

### 3. Ore Fe%
Section label:
- `Quality Performance`

Main metric:
- `56.01%`
- Target `57.95%`
- Deviation `-3.3%`

Sub-KPIs:
- `HG Ore Fe%`
  - `61.8%`
  - Target `62.5%`
  - `-1.1%`
- Add more visible sub-KPI rows in the same style if needed.

### 4. Fuel Rate
Section label:
- `Fuel Efficiency`

Main metric:
- `528 kg/thm`
- Target `510 kg/thm`
- Deviation `+3.5%`

Sub-KPIs:
- `Coke Rate`
  - use the visible average `312.2 kg/thm`
  - target around `310 kg/thm`
- `Coal Rate`
  - use the visible average `207.6 kg/thm`
  - target around `200 kg/thm`

### 5. Slag Rate
Main metric:
- `420 kg/thm`
- Target `410 kg/thm`
- Deviation `+2.4%`

Sub-KPIs:
- `Slag Rate Variability (σ)`
  - `11 kg/thm`
  - Target `6 kg/thm`
  - `+83.3%`
- `Basicity`
  - `1.18`
  - Target `1.15`
  - `+2.6%`
- `Hot Metal Temperature`
  - `1,485 °C`
  - Target `1,500 °C`
  - `-1.0%`

### 6. Sinter Quality Index
Main metric:
- `72 Index`
- Target `80 Index`
- Deviation `-10.0%`

Sub-KPIs:
- `Tumbler Index`
  - `65%`
  - Target `70%`
  - `-7.1%`
- `RDI`
  - `28%`
  - Target `23%`
  - `+21.7%`
- `FeO`
  - `9.2%`
  - Target `8%`
  - `+15.0%`

### 7. Overall Equipment Effectiveness
Main metric:
- `68.9%`
- Target `85%`
- Deviation `-18.9%`

Sub-KPIs:
- `Availability`
  - `87.5%`
  - Target `95%`
  - `-7.9%`
- `Performance`
  - `78.9%`
  - Target `90%`
  - `-12.3%`
- `Quality Rate`
  - `99.8%`
  - Target `99.5%`
  - `+0.3%`

### 8. Iron Yield
Main metric:
- `91.2%`
- Target `93.5%`
- Deviation `-2.5%`

Sub-KPIs:
- `Metallic Yield`
  - `93.8%`
  - Target `95%`
  - `-1.3%`
- `Slag Fe%`
  - `0.48%`
  - Target `0.35%`
  - `+37.1%`
- `Dust Losses`
  - `1.8%`
  - Target `1.2%`
  - `+50.0%`

## KPI trends section
Title:
- `Key KPI Trends (Last 6 Months)`

Two charts:
1. `Throughput & Unit Cost`
2. `Fuel Rate & Ore Fe%`

Use:
- throughput slightly down from Nov to Apr
- unit cost slightly up
- fuel rate slightly up
- ore Fe% gradually down from around 58 to 56

## Performance summary and recommendations
Three cards:
- `Critical Focus Area`
  - `Throughput Recovery`
  - `19.6% below plan. Address RM availability and operations stability urgently.`
- `Process Stability`
  - `Reduce Variability`
  - `Slag rate σ at 11 vs target 6. Implement SPC and tighter burden control.`
- `Quality Improvement`
  - `Fe% Enhancement`
  - `Increase HG ore proportion from current levels to improve 57.95% target.`

---

# Page 8. Margin Loss Tree

## Header
Title:
- `Margin Loss Tree Analysis`

Subtitle:
- `Throughput Loss Root Cause Analysis | BF4 | April 2025`

Top-right summary cards:
- `Total Throughput Loss`
  - `18,000 tons`
  - `vs Plan: 92,000 tons`
- `Monetary Impact`
  - `₹6300M`
  - `Lost contribution margin`
- `Unit Impact`
  - `₹3500/ton`
  - `Contribution margin`

## Main loss breakdown
Use a MECE-style root-cause block layout.

Top overview:
- `Total Loss`
  - `18,000 tons`
- split into:
  - `RM Variability Impact`
    - `5,100 tons (28.3%)`
  - `Operations Impact`
    - `12,900 tons (71.7%)`

Big horizontal bar:
- orange for RM Variability `28.3%`
- purple for Operations `71.7%`

## RM Variability impact breakdown
Section title:
- `RM Variability Impact Breakdown (5,100 tons)`

Cards:

### Blend Availability Issues
- Throughput Loss `2,800 tons`
- `% of RM Impact 54.9%`
- Monetary Loss `₹9800.0M`
- Root causes:
  - `HG ore shortage: -0.27 Mn MT`
  - `Pellet underproduction`
  - `Sinter plant reliability`

### Consumption Shortfall
- Throughput Loss `1,500 tons`
- `% of RM Impact 29.4%`
- Monetary Loss `₹5250.0M`
- Root causes:
  - `Lower burden consumption due to Fe% drop`
  - `Incorrect burden matrix`
  - `Quality-driven consumption reduction`

### Allocation Issues
- Throughput Loss `450 tons`
- `% of RM Impact 8.8%`
- Monetary Loss `₹1575.0M`
- Root causes:
  - `Incorrect ore allocation to BF4 vs other BFs`
  - `Priority given to other furnaces`
  - `Planning vs execution gap`

### Receipts Problems
Add this card below, same style, with partial visible structure from screenshot.
- Keep same warning card style
- Use consistent root-cause tags
- Make it part of RM variability stack

### Total RM Variability Loss footer
- `5,100 tons`
- `₹17850.0M` total monetary impact

## Operations impact breakdown
Section title:
- `Operations Impact Breakdown (12,900 tons)`

Cards:

### Equipment Downtime
- Throughput Loss `4,800 tons`
- `% of Ops Impact 37.2%`
- Monetary Loss `₹16800.0M`
- Root causes:
  - `Unplanned stoppages: 180 hours`
  - `Charging equipment failures`
  - `Tapping issues`

### Process Stability
- Throughput Loss `3,500 tons`
- `% of Ops Impact 27.1%`
- Monetary Loss `₹12250.0M`
- Root causes:
  - `Slag rate variability (σ=11)`
  - `Thermal state fluctuations`
  - `Burden distribution issues`

### Planned Maintenance
- Throughput Loss `1,600 tons`
- `% of Ops Impact 12.4%`
- Monetary Loss `₹5600.0M`
- Root causes:
  - `Conveyor belt issues`
  - `Stockyard management`
  - `Charging delays`

### Skill Gap
- Throughput Loss `1,200 tons`
- `% of Ops Impact 9.3%`
- Monetary Loss `₹4200.0M`
- Root causes:
  - `Operator errors`
  - `Training gaps`
  - `Process knowledge deficit`

### Total Operations Loss footer
- `12,900 tons`
- `₹45150.0M` total monetary impact

## Priority action plan
Three priority cards:

1. `Priority 1: Equipment Reliability`
   - `-4,800 tons loss`
   - `Implement predictive maintenance`
   - `Reduce unplanned downtime by 50%`
   - `Target recovery: 2,400 tons/month`
2. `Priority 2: Process Stability`
   - `-3,500 tons loss`
   - `Reduce slag rate from 11 to 6`
   - `Implement SPC controls`
   - `Target recovery: 2,000 tons/month`
3. `Priority 3: RM Availability`
   - `-2,800 tons loss`
   - `Secure HG ore supply chain`
   - `Improve blend management`
   - `Target recovery: 2,000 tons/month`

Bottom recovery card:
- `Potential Recovery (Top 3 Actions)`
- `6,400 tons/month`

---

# Data presentation rules

## Tables
- dark table backgrounds
- thin separators
- compact rows
- right aligned numeric columns
- use green for positive, red for negative, blue/purple for planned/actual
- headers should be slightly brighter than body text

## Charts
Use polished enterprise chart styling:
- dark grid
- dashed or dotted grid lines
- smooth line charts
- grouped bars
- waterfall charts with clear delta colors
- progress bars for sub-KPIs
- tooltips on hover

## Numbers
Format all numbers exactly as shown:
- use `₹`
- use `Mn MT`
- use `%`
- use `kg/thm`
- use `hrs`
- use commas for thousands where shown
- keep sign conventions exactly the same as the screenshots

---

# Interaction requirements

- Clicking sidebar items changes the screen
- Selected item stays highlighted
- Charts should show hover tooltips
- Cards should slightly elevate on hover
- The page should scroll vertically
- Keep the layout stable and dense
- No extra decorative elements that are not in the screenshots
- No glassmorphism
- No bright gradients except subtle page section accents
- No unrelated widgets

---

# Responsiveness

Desktop-first.
On smaller screens:
- sidebar can collapse into a drawer
- cards should stack
- charts should scale down
- tables should remain readable
- preserve the dark enterprise style

---

# Content model to use

Use a single mock data file that contains all visible numbers from the screenshots.

The system should feel like a real plant analytics platform for BF4 at JSW Steel, with all pages connected by the same shell and design language.

---

# Final instruction

Build the frontend as closely as possible to the screenshots. Treat the screenshots as the reference design. Recreate:
- the exact page hierarchy
- the exact wording where visible
- the exact numeric values where visible
- the same chart types
- the same section order
- the same alert and insight style
- the same dark industrial look

This should look like a complete operational dashboard suite for BF4 at JSW Steel.