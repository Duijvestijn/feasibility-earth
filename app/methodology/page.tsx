import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Methodology — Feasibility.Earth',
  description: 'The full technical methodology behind our carbon project feasibility assessments. Additionality, baseline analysis, satellite data sources, carbon stock modelling, and certification standards.',
}

const SAT_IMG  = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175009_19fc6154-aab5-4955-b5dc-d16dcac477c1.png'
const REFOREST = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175000_427a09a9-a320-4d6c-81ef-2c43cd4b7f9e.png'

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}
function Check({ color = '#1B4332', size = 12 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}

// Table of contents / 7 report sections with full detail
const REPORT_SECTIONS = [
  {
    num: '01',
    title: 'Land & Baseline Characterisation',
    pages: '8–12 pages',
    color: '#1B4332',
    intro: 'Every assessment begins with a complete characterisation of the land parcel — its current state, its history, and its biophysical context. We do not use regional averages. We build the baseline from project-specific satellite data.',
    dataSource: 'Sentinel-2 (10m resolution), Landsat archive (30m, 1985–present), JAXA PALSAR-2 forest/non-forest, GFW Hansen deforestation layers',
    subsections: [
      { title: 'Land parcel boundary verification', desc: 'Satellite-derived confirmation of stated land coordinates. Identification of overlapping designations (protected areas, concessions, conservation easements) via WDPA and national registry cross-check.' },
      { title: 'NDVI time-series analysis (10-year minimum)', desc: 'Normalised Difference Vegetation Index calculated from Sentinel-2 imagery across the full historical archive. Seasonal variation modelled separately from structural degradation trends. Used to establish vegetation productivity baseline and identify historical clearance events.' },
      { title: 'Tree crown cover classification', desc: 'Random Forest classifier applied to multi-spectral imagery to produce land cover map at project-relevant categories: dense forest, open forest, scrubland, grassland, cropland, bare land, water. Minimum mapping unit: 0.5 ha. Accuracy assessed via confusion matrix with minimum 85% overall accuracy requirement.' },
      { title: 'Above-ground biomass estimation', desc: 'Above-ground biomass (AGB) derived from JAXA PALSAR-2 L-band SAR backscatter, calibrated against national biomass datasets and published allometric equations for the relevant forest type and geography. Below-ground biomass estimated via root:shoot ratio per IPCC Tier 1 or regional equations where available.' },
      { title: 'Historical deforestation rate analysis', desc: 'Annual deforestation rates calculated for the project area and a 50km reference region for the most recent 10 years, using Hansen et al. forest cover change data. Rates compared to national and subnational benchmarks. Critically: we use project-area-specific rates, not country averages — a methodological distinction that determines additionality validity.' },
      { title: 'Soil carbon assessment', desc: 'For reforestation and agroforestry projects, soil organic carbon (SOC) estimated from SoilGrids 2.0 (250m) calibrated where available against national soil surveys. SOC change modelling applied per RothC or IPCC Tier 2 approach based on project type.' },
    ],
  },
  {
    num: '02',
    title: 'Additionality Assessment',
    pages: '10–15 pages',
    color: '#2D6A4F',
    intro: 'Additionality is the most consequential test in carbon project development and the most frequently failed at certification. Our additionality analysis is built on current project-specific evidence — not generic conclusions from standard templates.',
    dataSource: 'Current national legislation database, commodity price feeds, financing cost benchmarks, land tenure registries, VCS/GS approved additionality tools',
    subsections: [
      { title: 'Regulatory surplus test', desc: 'Assessment of whether the project activity is legally mandated at local, national, or international level. We check: national REDD+ policies and NDC commitments, national forest codes, land use regulations, renewable energy mandates. Critically assessed against the legislation in force at the time of assessment — not historical versions.' },
      { title: 'Investment barrier analysis', desc: 'Financial model demonstrating that the project cannot proceed without carbon revenue. Inputs: current commodity prices (timber, agriculture) for the specific crop/species and regional market, current land acquisition costs, current local financing rates, country risk premium, and the carbon revenue required to achieve a market-comparable internal rate of return. Sensitivity analysis performed across commodity price and discount rate assumptions.' },
      { title: 'Institutional and technology barrier analysis', desc: 'For project types where financial analysis alone is insufficient (typically for community-based or smallholder projects), assessment of barriers including: land tenure insecurity, lack of technical expertise, absence of carbon market access, political/governance instability. Each barrier documented with current supporting evidence.' },
      { title: 'Common practice analysis', desc: 'Assessment of whether comparable activities — reforestation, agroforestry, cookstove distribution — are occurring without carbon finance in the same geographic and socioeconomic context. Data sources include national land use statistics, NGO programme databases, and local government agricultural records. Used to determine whether the project activity represents a departure from common practice.' },
      { title: 'Additionality risk rating', desc: 'Conclusion expressed as a structured risk rating (High / Medium / Low / Insufficient evidence) with full evidence trail. Where additionality is marginal or uncertain, the specific conditions that would need to be satisfied for a stronger case are documented.' },
    ],
  },
  {
    num: '03',
    title: 'Carbon Potential Quantification',
    pages: '12–18 pages',
    color: '#40916C',
    intro: 'Carbon potential is calculated per the applicable methodology with full transparency of assumptions. Every variable that materially drives the estimate is documented with its source, its uncertainty range, and its sensitivity contribution.',
    dataSource: 'IPCC Emission Factor Database, Verra Methodology Tool databases, regional allometric equation libraries, national GHG inventory data',
    subsections: [
      { title: 'Gross removal / avoidance calculation', desc: 'Annual carbon sequestration (for reforestation/agroforestry/ARR) or emission avoidance (for cookstoves) calculated per the applicable VCS, Gold Standard, or Plan Vivo methodology. For forestry: growth curves applied per species and climate zone from national or regional yield tables. For cookstoves: emission reduction per stove calculated using fuel consumption surveys and validated combustion efficiency data.' },
      { title: 'Leakage deduction', desc: 'Activity-shifting leakage assessed where the project displaces carbon-emitting activities to outside the project boundary. Leakage belt defined per methodology requirements. Market leakage assessed for timber/agricultural commodity projects using commodity supply elasticity data. Net leakage deduction calculated per methodology — typically 10–40% of gross removals depending on project type and geography.' },
      { title: 'Buffer pool contribution', desc: 'Non-permanence risk rating calculated per Verra\'s Non-Permanence Risk Tool (or equivalent for other standards). Factors assessed: project risk, natural risk (fire, disease, climate), and socioeconomic risk. Buffer pool contribution typically 10–30% of net removals. Documented with full risk tool scores.' },
      { title: 'Net credit projection', desc: 'Annual net credits (tCO₂e) calculated over full project lifetime (typically 20–40 years). Projections presented at: Year 1 (expected), Years 1–5 (cumulative), Years 1–10, full lifetime. Confidence ranges expressed as P10/P50/P90 based on sensitivity analysis of key growth / emission factor assumptions.' },
      { title: 'fNRB validation (cookstove projects)', desc: 'For cookstove and biomass projects, the fraction of non-renewable biomass (fNRB) is validated against current regional data. We do not use the industry-average assumption of 80%+ that has driven systematic overcrediting. We apply MoFuSS values per Verra\'s VM0050 (October 2024) or equivalent Gold Standard methodology, supplemented by available national energy surveys and field data.' },
    ],
  },
  {
    num: '04',
    title: 'Certification & Compliance Analysis',
    pages: '8–12 pages',
    color: '#6B4226',
    intro: 'We assess the project against the current version of each applicable standard — not historical methodology documents. Standards are updated regularly; projects developed against outdated requirements may not satisfy current registration criteria.',
    dataSource: 'Verra VCS Standard v4.0, Verra methodology versions current at assessment date, Gold Standard 2024, Plan Vivo 2026 Standard, ICVCM Core Carbon Principles',
    subsections: [
      { title: 'Standard selection and rationale', desc: 'Assessment of which standard(s) the project can credibly pursue, based on: project type, geographic eligibility criteria, community benefit requirements, credit market preferences, and timeline/cost trade-offs. For projects that could satisfy multiple standards, a comparison is provided.' },
      { title: 'Methodology applicability confirmation', desc: 'Detailed assessment of whether the project meets the applicability conditions of the proposed methodology — including land eligibility, ecological parameters, geographic constraints, and legal requirements. Non-conformances are documented with their materiality.' },
      { title: 'Gap analysis against current requirements', desc: 'Systematic comparison of project current state against what is required for registration. Gaps identified across: project design, documentation, stakeholder consultation, monitoring plan, and legal basis. Each gap rated by materiality and by the effort required to close it.' },
      { title: 'Validation and verification pathway', desc: 'Recommended VVB (Validation/Verification Body) from the list of currently accredited VVBs with active capacity in the relevant standard and geography. Indicative VVB cost range and timeline to validation. Key areas of VVB scrutiny identified based on project type.' },
      { title: 'ICVCM Core Carbon Principles alignment', desc: 'Assessment against the ICVCM\'s Core Carbon Principles (CCPs) — the emerging institutional benchmark for high-quality credits. Projects aligned with CCPs command premium pricing and are preferred by institutional buyers. CCP alignment mapped against project design.' },
    ],
  },
  {
    num: '05',
    title: 'Risk Register',
    pages: '8–10 pages',
    color: '#1B4332',
    intro: 'Every material risk to project viability, credit integrity, and long-term permanence is documented with a risk rating, supporting evidence, and — where mitigants exist — recommended risk mitigation approaches.',
    dataSource: 'INFORM Risk Index, Climate Hazards Group InfraRed Precipitation with Station (CHIRPS), fire weather indices, FAO land tenure databases, World Bank governance indicators',
    subsections: [
      { title: 'Permanence risk — natural', desc: 'Assessment of natural risks that could reverse sequestered carbon: wildfire (based on historical fire frequency and projected climate trends), drought (CHIRPS precipitation data, SPEI drought index), pest/disease (species-specific vulnerability, regional outbreak data), storm events (tropical cyclone track data for relevant geographies). Mapped against the Verra non-permanence risk tool scoring criteria.' },
      { title: 'Permanence risk — socioeconomic', desc: 'Assessment of human-driven permanence risks: land tenure security (documented ownership structure, dispute history), local economic pressures (agricultural commodity prices, population density trends), governance stability (INFORM score, World Bank governance indicators). Leakage belt assessment included where applicable.' },
      { title: 'Additionality risk', desc: 'Residual additionality risk after the main additionality assessment — specifically, the risk that changed conditions (commodity prices, policy changes, improved financing access) could undermine the additionality case during the project lifetime. Scenarios documented.' },
      { title: 'Methodology risk', desc: 'Risk that the applicable methodology is revised in ways that materially affect credit volumes or eligibility. Relevant pending methodology revisions documented. Impact assessment for the most likely revision scenarios.' },
      { title: 'Market risk', desc: 'Carbon price sensitivity analysis: credit revenue projections at P10/P50/P90 carbon price scenarios using current VCM price data by credit type and standard. Breakeven carbon price calculated.' },
    ],
  },
  {
    num: '06',
    title: 'Financial Projections',
    pages: '10–12 pages',
    color: '#2D6A4F',
    intro: 'Financial projections are built from the carbon potential estimates in Section 03, current market pricing by credit type, and indicative development cost benchmarks from comparable certified projects.',
    dataSource: 'Xpansiv/CBL spot price data, ACX exchange pricing, broker quote data, benchmarked development cost data from GEG certified project portfolio',
    subsections: [
      { title: 'Carbon revenue model', desc: 'Annual and cumulative carbon revenue projected over project lifetime at: Bear case (P10 carbon price), Base case (P50 current market price for the applicable credit type), Bull case (P90 forward curve / analyst consensus). Revenue net of estimated royalties, buffer pool contributions, and transaction costs.' },
      { title: 'Development cost estimates', desc: 'Indicative cost estimates for PDD development ($15,000–$30,000 depending on methodology complexity), VVB validation ($15,000–$25,000 for first validation), initial project implementation (land preparation, community engagement, monitoring infrastructure). Based on comparable projects in the region and project type.' },
      { title: 'Timeline to first credit issuance', desc: 'Estimated timeline from today to first credit issuance: PDD development, VVB validation, standard registration, first monitoring period, first verification. Typically 18–36 months depending on project type and geography. Critical path identified.' },
      { title: 'Net present value analysis', desc: 'NPV of projected credit revenue less development costs at bear/base/bull scenarios. IRR calculated at base case. Breakeven analysis: minimum credit volume required to recover development costs. Breakeven carbon price at expected credit volume.' },
      { title: 'Sensitivity analysis', desc: 'Tornado chart showing contribution of each key assumption to NPV variance. Top 5 drivers identified. Scenarios modelled: ±30% carbon price, ±15% credit volume, ±50% development cost, timeline scenarios (12/18/24/36 months to first credit).' },
    ],
  },
  {
    num: '07',
    title: 'Development Pathway & Recommendations',
    pages: '6–8 pages',
    color: '#40916C',
    intro: 'The final section translates assessment findings into a concrete development roadmap — what needs to happen, in what order, at what cost, and with what expected outcome.',
    dataSource: 'Assessment findings from Sections 01–06, VVB capacity data, registry pipeline data',
    subsections: [
      { title: 'Go / No-go recommendation', desc: 'Clear recommendation with supporting rationale. Where the recommendation is "go with conditions", the conditions are documented specifically — what needs to be resolved before committing to PDD development.' },
      { title: 'Recommended certification pathway', desc: 'Specific methodology and standard recommended, with rationale. Alternative pathways documented where more than one is viable. Key decision points and their timing identified.' },
      { title: 'PDD development scope', desc: 'Summary of what the PDD will need to contain based on the methodology applicability and gap analysis. Estimated PDD development scope and cost. Recommended approach to VVB selection and engagement timing.' },
      { title: 'Monitoring, Reporting and Verification plan outline', desc: 'Summary of ongoing MRV requirements: monitoring parameters, monitoring frequency, data management requirements, verification periodicity, estimated ongoing MRV cost per year.' },
      { title: 'Next steps and timeline', desc: 'Recommended immediate next steps following report delivery, with indicative timelines. Where Feasibility.Earth is able to support the development phase, scope and terms outlined.' },
    ],
  },
]

export default function MethodologyPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '88px 0 72px' }}>
          <div className="fe-wrap">
            <div style={{ maxWidth: 760 }}>
              <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.10)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.14)', marginBottom: 24 }}>Methodology</div>
              <h1 className="font-display" style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.08, marginBottom: 22 }}>
                What our 70+ page report<br />actually contains — and how<br />we produce it.
              </h1>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.60)', lineHeight: 1.85, maxWidth: 620, marginBottom: 28 }}>
                Our feasibility assessment covers seven distinct areas of analysis, each producing a dedicated report section. Every section is built from project-specific satellite data and expert analysis — not from standard templates applied to generic regional inputs. Below is what each section contains, where the data comes from, and why it matters.
              </p>
              {/* Report overview stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                {[
                  { value: '70+', label: 'pages per report' },
                  { value: '7', label: 'assessment areas' },
                  { value: '30+', label: 'data sources' },
                  { value: '100%', label: 'remote — no site visit' },
                ].map((s, i) => (
                  <div key={i} style={{ padding: '16px 18px', background: 'rgba(255,255,255,0.06)', borderRadius: i === 0 ? '10px 0 0 10px' : i === 3 ? '0 10px 10px 0' : 0, border: '1px solid rgba(255,255,255,0.08)', borderLeft: i > 0 ? 'none' : '1px solid rgba(255,255,255,0.08)' }}>
                    <p className="font-display" style={{ fontSize: 26, fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: 4 }}>{s.value}</p>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.40)', letterSpacing: '0.3px' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why methodology matters — brief */}
        <section style={{ background: '#0F1E13', padding: '48px 0' }}>
          <div className="fe-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, marginBottom: 16 }}>
                  Forestry carbon projects have been documented to overcredit by 5–14× their stated value due to incorrect baseline assumptions. For cookstoves, systematic use of fNRB values of 80%+ against a regional benchmark of 25–35% has produced over-crediting documented at 6× average by UC Berkeley (Nature Sustainability, 2024).
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, fontWeight: 500 }}>
                  These are methodology failures — and they start at the feasibility assessment stage. Our methodology is designed to identify them before you commit capital.
                </p>
              </div>
              <div style={{ position: 'relative', height: 260, borderRadius: 14, overflow: 'hidden' }}>
                <Image src={SAT_IMG} alt="Satellite analysis" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,14,8,0.35)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Seven sections — full detail */}
        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap">
            <div style={{ marginBottom: 48 }}>
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 16 }}>Report structure</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.2 }}>
                Seven sections. Every material factor covered.
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {REPORT_SECTIONS.map((section, si) => (
                <div key={si} style={{ borderRadius: 14, border: '1px solid #E2DDD6', overflow: 'hidden', background: '#fff' }}>

                  {/* Section header */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 20, alignItems: 'center', padding: '24px 28px', background: '#FAFAF8', borderBottom: '1px solid #E8E4DF' }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: section.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: '#fff' }}>{section.num}</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1A1A18', marginBottom: 3 }}>{section.title}</h3>
                      <p style={{ fontSize: 12, color: '#9CA3AF' }}>{section.pages}</p>
                    </div>
                    <div style={{ padding: '4px 12px', borderRadius: 100, background: '#F0F0EC', border: '1px solid #E2DDD6' }}>
                      <p style={{ fontSize: 11, fontWeight: 600, color: '#5C5C58' }}>{section.subsections.length} components</p>
                    </div>
                  </div>

                  {/* Section body */}
                  <div style={{ padding: '24px 28px' }}>
                    <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.8, marginBottom: 20 }}>{section.intro}</p>

                    {/* Data sources */}
                    <div style={{ padding: '10px 14px', background: '#F9FAFB', borderRadius: 8, border: '1px solid #E8E4DF', marginBottom: 22 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginRight: 8 }}>Data sources</span>
                      <span style={{ fontSize: 12, color: '#5C5C58' }}>{section.dataSource}</span>
                    </div>

                    {/* Subsections */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      {section.subsections.map((sub, i) => (
                        <div key={i} style={{ padding: '16px 18px', borderRadius: 10, background: '#FAFAF8', border: '1px solid #E8E4DF' }}>
                          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                            <div style={{ width: 18, height: 18, borderRadius: 5, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                              <Check color="#1B4332" size={10} />
                            </div>
                            <p style={{ fontSize: 13, fontWeight: 700, color: '#1A1A18', lineHeight: 1.35 }}>{sub.title}</p>
                          </div>
                          <p style={{ fontSize: 12.5, color: '#5C5C58', lineHeight: 1.7, paddingLeft: 26 }}>{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="fe-section" style={{ background: '#1B4332' }}>
          <div className="fe-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <div>
                <div className="fe-badge" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.12)', marginBottom: 22 }}>
                  Current standards
                </div>
                <h2 className="font-display" style={{ fontSize: 'clamp(24px,3.5vw,36px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
                  Assessed against standards as they are today — not as they were.
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.60)', lineHeight: 1.9, marginBottom: 16 }}>
                  Verra VCS, Gold Standard, and Plan Vivo all revised their methodology requirements significantly in 2024. Projects assessed against earlier versions may not satisfy current registration criteria. We work from the current published methodology version at the date of each assessment.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { name: 'Verra VCS', version: 'v4.0 (current)', note: 'VM0047, VM0042, AMS-II.G, VM0050 (cookstoves, Oct 2024)' },
                    { name: 'Gold Standard', version: '2024 revision', note: 'TPDDTEC, LUF Activity Requirements, revised fNRB requirements' },
                    { name: 'Plan Vivo', version: '2026 Standard', note: 'Community benefit-sharing, PV Carbon Standard v2.2' },
                    { name: 'ICVCM Core Carbon Principles', version: 'April 2023+', note: 'CCP eligibility assessment for institutional buyer alignment' },
                  ].map((std, i) => (
                    <div key={i} style={{ padding: '14px 18px', borderRadius: 10, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{std.name}</span>
                        <span style={{ fontSize: 11, color: '#86C89C', fontWeight: 600 }}>{std.version}</span>
                      </div>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.40)' }}>{std.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative', height: 400, borderRadius: 16, overflow: 'hidden' }}>
                <Image src={REFOREST} alt="Carbon project field" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,30,18,0.4)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* What we do differently — specific, not claimed */}
        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 820 }}>
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 14 }}>Where our methodology differs</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.2 }}>
                Specific differences from standard<br />desk-based assessment practice
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                {
                  standard: 'Country or regional average deforestation rates',
                  ours: 'Project-area-specific deforestation rates from 10-year Hansen forest cover change analysis',
                  impact: 'Prevents additionality claims based on high-deforestation benchmarks applied to low-pressure areas',
                },
                {
                  standard: 'Industry-average fNRB values (80%+) for cookstove projects',
                  ours: 'MoFuSS-aligned regional fNRB values validated against national energy surveys, per VM0050 (Oct 2024)',
                  impact: 'Prevents the 2–6× overcrediting documented in UC Berkeley and Calyx Global research',
                },
                {
                  standard: 'Investment analysis based on generalised commodity price assumptions',
                  ours: 'Current regional commodity prices, current local financing rates, country-specific risk premium',
                  impact: 'Additionality case reflects current economic conditions, not conditions from when a template was written',
                },
                {
                  standard: 'Tree crown cover estimated from global 30m datasets',
                  ours: 'Sentinel-2 10m classification with project-specific validation — accuracy assessed via confusion matrix',
                  impact: 'Biomass and carbon stock estimates 3–5× more precise than 30m-based estimates for small parcels',
                },
                {
                  standard: 'Buffer pool estimated at standard 10% without full risk tool',
                  ours: 'Full Verra Non-Permanence Risk Tool scoring with project-specific natural, project, and socioeconomic risk inputs',
                  impact: 'Buffer pool accurately reflects actual permanence risk — avoiding both under- and over-reserving',
                },
                {
                  standard: 'Leakage deducted at fixed percentage without activity-shifting analysis',
                  ours: 'Activity-shifting leakage modelled from land use pressure data in the leakage belt; market leakage assessed via commodity supply elasticity',
                  impact: 'Net credit estimate reflects real displacement risk rather than a formulaic deduction',
                },
              ].map((item, i) => (
                <div key={i} style={{ borderRadius: 14, border: '1px solid #E2DDD6', overflow: 'hidden', background: '#FAFAF8' }}>
                  <div style={{ padding: '16px 18px', borderBottom: '1px solid #E8E4DF' }}>
                    <p style={{ fontSize: 10, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 4 }}>Standard practice</p>
                    <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.55 }}>{item.standard}</p>
                  </div>
                  <div style={{ padding: '16px 18px', borderBottom: '1px solid #E8E4DF', background: '#F0FDF4' }}>
                    <p style={{ fontSize: 10, fontWeight: 700, color: '#1B4332', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 4 }}>Our approach</p>
                    <p style={{ fontSize: 13, color: '#1B4332', lineHeight: 1.55, fontWeight: 500 }}>{item.ours}</p>
                  </div>
                  <div style={{ padding: '12px 18px' }}>
                    <p style={{ fontSize: 11, color: '#5C5C58', lineHeight: 1.6, fontStyle: 'italic' }}>{item.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fe-section-sm" style={{ background: '#F5ECD7', textAlign: 'center' }}>
          <div className="fe-wrap">
            <h2 className="font-display" style={{ fontSize: 32, fontWeight: 700, color: '#1A1A18', marginBottom: 14 }}>
              Ready to assess your project?
            </h2>
            <p style={{ fontSize: 15, color: '#5C5C58', marginBottom: 28, maxWidth: 460, margin: '0 auto 28px' }}>
              Start with a $500 eligibility check or go straight to the full 70+ page feasibility study.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://app.feasibility.earth" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                Start assessment now <Arrow size={14} color="#fff" />
              </a>
              <Link href="/pricing" className="btn-outline" style={{ fontSize: 15, padding: '12px 24px' }}>
                View pricing
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
