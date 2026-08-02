import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Satellite Data Changed Carbon Project Feasibility — Feasibility.Earth',
  description: 'Remote sensing has replaced site visits in carbon project feasibility assessment. Here is what satellite data can tell you, what it cannot, and why a $7,500 remote study can cover the same ground as a $75,000 field-based one.',
  openGraph: {
    title: 'How Satellite Data Replaced Site Visits in Carbon Project Feasibility',
    description: 'Remote sensing, NDVI, and global forest datasets have made rigorous carbon project assessment possible without field teams. Here is what the technology actually tells you.',
  },
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Satellite Data Replaced Site Visits in Carbon Project Feasibility',
    description: 'Remote sensing has replaced site visits in carbon project feasibility. Here is what the technology actually tells you.',
    datePublished: '2026-08-01',
    dateModified: '2026-08-01',
    author: { '@type': 'Organization', name: 'Feasibility.Earth', url: 'https://feasibility.earth' },
    publisher: { '@type': 'Organization', name: 'Feasibility.Earth', url: 'https://feasibility.earth' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://feasibility.earth/insights/satellite-data-carbon-project-assessment' },
  }

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '72px 0 56px' }}>
          <div className="fe-wrap" style={{ maxWidth: 760 }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <Link href="/insights" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                Insights
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>/</span>
              <span className="fe-badge" style={{ background: 'rgba(216,243,220,0.12)', color: '#86C89C', border: '1px solid rgba(134,200,156,0.2)', fontSize: 10 }}>Methodology</span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
              How Satellite Data Replaced Site Visits in Carbon Project Feasibility
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>August 2026 · 5 min read · By the Feasibility.Earth team</p>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, maxWidth: 640 }}>
              Ten years ago, a credible carbon project feasibility assessment required field teams on the ground for weeks. Today, the same analysis — in most cases, a more accurate one — is produced remotely in days using satellite imagery and global forest databases. Here is what changed and what it means for project economics.
            </p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 720 }}>
            <div style={{ fontSize: 16, color: '#374151', lineHeight: 1.9 }}>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16, marginTop: 0 }}>The problem with traditional site visits</h2>
              <p style={{ marginBottom: 20 }}>
                Traditional feasibility assessments relied on field surveys because there was no alternative source of ground-level data. A team would travel to the land parcel, collect soil samples, conduct tree inventories, document land use, interview community members, and compile findings into an assessment that represented a snapshot of the land at a single point in time.
              </p>
              <p style={{ marginBottom: 36 }}>
                The cost and time requirement of this approach — $25,000–$75,000 and three to six months — was not the only problem. A field survey produces high-resolution data about the land on the day of the survey. It tells you almost nothing about what the land looked like five years ago, what the deforestation trajectory has been, or how the carbon stock has changed over the project baseline period. These are precisely the things that carbon methodologies require you to know.
              </p>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>What satellite data actually measures</h2>
              <p style={{ marginBottom: 16 }}>
                The shift to satellite-based assessment was made possible by three converging developments: the global rollout of open-access satellite imagery archives (particularly Landsat and Sentinel-2), the construction of processed forest datasets from that imagery (Global Forest Watch, Hansen Forest Cover Change), and a decade of methodological development in converting raw satellite data into the specific metrics that carbon standards require.
              </p>
              <p style={{ marginBottom: 16 }}>
                <strong>Land use history.</strong> The Hansen Global Forest Change dataset — derived from Landsat imagery at 30-metre resolution from 2000 to present — provides a complete annual record of forest cover, forest gain, and forest loss for every land parcel on Earth. For a feasibility assessment, this allows us to reconstruct exactly what has happened to the land over a ten-year baseline period: how much forest cover existed, how it changed, when losses occurred, and at what rate. This is data no field visit can produce.
              </p>
              <p style={{ marginBottom: 16 }}>
                <strong>Vegetation health (NDVI).</strong> The Normalised Difference Vegetation Index measures the density and health of vegetation using the difference between near-infrared and red light reflectance. High NDVI values indicate dense, healthy vegetation. NDVI time series — available at monthly resolution — reveal seasonal patterns, stress events, and long-term trends in vegetation condition that inform carbon stock estimation and deforestation risk.
              </p>
              <p style={{ marginBottom: 16 }}>
                <strong>Biomass and carbon stock estimation.</strong> Above-ground biomass can be estimated from a combination of NDVI, elevation data (SRTM), and regional allometric equations that relate forest structure to carbon content. These estimates carry confidence ranges — typically ±15–25% — that are explicitly included in our carbon potential projections. We do not present point estimates as certainties.
              </p>
              <p style={{ marginBottom: 36 }}>
                <strong>Deforestation rate and pressure.</strong> Regional deforestation rate — a key input to the baseline calculation under most Verra and Gold Standard methodologies — is derived from the Hansen dataset and cross-referenced against Global Forest Watch monitoring data. We calculate both the historical rate for the specific project geography and the reference region deforestation rate required by the applicable methodology.
              </p>

              <div style={{ padding: '22px 24px', background: '#F5ECD7', borderRadius: 14, border: '1px solid #E2DDD6', marginBottom: 36 }}>
                <p style={{ fontSize: 14, color: '#6B4226', lineHeight: 1.8, fontStyle: 'italic' }}>
                  &ldquo;The satellite record is in some respects more reliable than field data for baseline purposes. A field team visiting a site today cannot tell you what the forest cover was in 2015. The Hansen dataset can — with documented methodology, verifiable sources, and the ability for a VVB auditor to reproduce every data point independently.&rdquo;
                </p>
                <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 10 }}>Vaseem Khan, Remote Sensing & GIS Lead, Feasibility.Earth</p>
              </div>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>The tools behind remote assessment</h2>
              <p style={{ marginBottom: 16 }}>
                A rigorous satellite-based feasibility assessment draws on a stack of complementary datasets, each validated against ground-truth data for the relevant biome and geography:
              </p>
              <ul style={{ paddingLeft: 22, marginBottom: 36 }}>
                <li style={{ marginBottom: 12 }}><strong>Landsat 7/8/9 and Sentinel-2</strong> — multispectral imagery at 10–30m resolution, monthly to biweekly cadence, global coverage from 1984 to present. The archive is the backbone of historical land use analysis.</li>
                <li style={{ marginBottom: 12 }}><strong>Global Forest Watch / Hansen Forest Cover Change</strong> — annual global forest cover change data at 30m resolution, with documented methodology and peer review (Hansen et al., Science 2013). Used for forest gain/loss quantification and reference region calculations.</li>
                <li style={{ marginBottom: 12 }}><strong>SRTM elevation data</strong> — 30m resolution global elevation model used in biomass allometric calculations and terrain analysis.</li>
                <li style={{ marginBottom: 12 }}><strong>National Forest Inventories</strong> — country-level carbon stock data published by national agencies and used to validate satellite-derived biomass estimates against ground-truth measurements.</li>
                <li style={{ marginBottom: 12 }}><strong>MoFuSS (Model of Fuelwood Sourcing and Substitution)</strong> — Verra&apos;s adopted tool for fNRB calculation in cookstove projects, replacing project-specific fNRB claims since VM0050&apos;s adoption in October 2024.</li>
              </ul>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>What remote assessment cannot replace</h2>
              <p style={{ marginBottom: 16 }}>
                Remote assessment does not eliminate the need for field engagement — it changes when field engagement is required and what it needs to accomplish.
              </p>
              <p style={{ marginBottom: 16 }}>
                <strong>Community consent and FPIC.</strong> Free, prior, and informed consent — required by Verra VCS, Gold Standard, and Plan Vivo — cannot be conducted remotely. Community engagement, consultation meetings, and consent documentation require direct interaction with land-adjacent communities. This happens at the PDD development stage, not the feasibility stage.
              </p>
              <p style={{ marginBottom: 16 }}>
                <strong>Soil carbon validation.</strong> For projects with significant below-ground carbon components, field-level soil sampling provides validation that satellite-derived estimates cannot. This applies primarily to peatland and soil carbon projects — the project types where below-ground carbon is the dominant credit source.
              </p>
              <p style={{ marginBottom: 36 }}>
                <strong>Boundary verification.</strong> GPS-confirmed project boundaries — required at the PDD stage — need field verification. Satellite imagery can identify boundaries from aerial features, but legal parcel boundaries are confirmed on the ground.
              </p>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>What this means for project economics</h2>
              <p style={{ marginBottom: 16 }}>
                The shift to remote assessment fundamentally changes the economics of the pre-development phase. A traditional field-based feasibility study costs $25,000–$75,000 and takes three to six months. Our <Link href="/pricing" style={{ color: '#1B4332', textDecoration: 'underline' }}>full feasibility study</Link>, built on satellite data and field-calibrated databases, is delivered in five business days at $7,500.
              </p>
              <p style={{ marginBottom: 20 }}>
                This is not a trade-off of depth for speed. For the assessment components that matter most to certification bodies — land use history, deforestation baseline, carbon stock estimation, additionality evidence — remote analysis using global datasets is more reproducible, more auditable, and often more accurate than a field-team snapshot taken at a single point in time.
              </p>
              <p style={{ marginBottom: 36 }}>
                The economics matter because they change what is rational to do at the feasibility stage. At $25,000–$75,000, a feasibility study is only viable for projects that have already committed development capital. At $7,500, it becomes the first filter — the thing you do before committing anything beyond the study cost. That is the right sequence: assess before you invest, not after.
              </p>

              <div style={{ padding: '28px 28px', background: '#1B4332', borderRadius: 16, marginBottom: 36 }}>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Remote. Rigorous. Bankable.</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.70)', lineHeight: 1.85, marginBottom: 16 }}>
                  Our full feasibility study is produced entirely from satellite data, regional databases, and methodology expertise. No site visit required. All data sources are documented and reproducible — the same standard a VVB auditor applies at validation.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.70)', lineHeight: 1.85, marginBottom: 20 }}>
                  See what the <Link href="/methodology" style={{ color: '#86C89C', textDecoration: 'underline' }}>seven assessment sections</Link> cover, or start with a $500 eligibility check.
                </p>
                <Link href="/pricing" className="btn-amber" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                  See pricing and scope <Arrow size={14} color="#1A1A18" />
                </Link>
              </div>

            </div>

            <div style={{ borderTop: '1px solid #E8E4DF', paddingTop: 28, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <Link href="/insights/why-carbon-projects-fail-feasibility" style={{ fontSize: 14, color: '#1B4332', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Related: Why Carbon Projects Fail <Arrow size={13} color="#1B4332" />
              </Link>
              <Link href="/how-it-works" style={{ fontSize: 14, color: '#5C5C58', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                How our assessment works <Arrow size={13} color="#5C5C58" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
