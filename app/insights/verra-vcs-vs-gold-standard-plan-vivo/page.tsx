import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verra VCS vs. Gold Standard vs. Plan Vivo — Feasibility.Earth',
  description: 'Choosing the wrong certification standard early is one of the most correctable mistakes in carbon project development. Here is how the three main nature-based standards compare and how to decide.',
  openGraph: {
    title: 'Verra VCS, Gold Standard, or Plan Vivo: Which Standard Fits Your Carbon Project?',
    description: 'A practical comparison of the three main voluntary carbon certification standards for nature-based projects — and how to choose the right one at the feasibility stage.',
  },
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Verra VCS, Gold Standard, or Plan Vivo: Which Standard Fits Your Carbon Project?',
    description: 'A practical comparison of the three main voluntary carbon certification standards for nature-based projects.',
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
    author: { '@type': 'Organization', name: 'Feasibility.Earth', url: 'https://feasibility.earth' },
    publisher: { '@type': 'Organization', name: 'Feasibility.Earth', url: 'https://feasibility.earth' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://feasibility.earth/insights/verra-vcs-vs-gold-standard-plan-vivo' },
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
              <span className="fe-badge" style={{ background: 'rgba(216,243,220,0.12)', color: '#86C89C', border: '1px solid rgba(134,200,156,0.2)', fontSize: 10 }}>Certification</span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
              Verra VCS, Gold Standard, or Plan Vivo: Which Standard Fits Your Carbon Project?
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>July 2026 · 7 min read · By the Feasibility.Earth team</p>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, maxWidth: 640 }}>
              Choosing the wrong certification standard at the feasibility stage is one of the most common and most correctable mistakes in carbon project development. The choice determines your methodology library, your buyer pool, your development timeline, and in many cases your per-credit price. Here is how to make it.
            </p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 720 }}>
            <div style={{ fontSize: 16, color: '#374151', lineHeight: 1.9 }}>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16, marginTop: 0 }}>Why the choice matters at the feasibility stage</h2>
              <p style={{ marginBottom: 20 }}>
                The standard you choose determines everything downstream: which methodology governs your baseline calculations, which additionality tests apply, which validators can audit your project, and which buyers will accept your credits. Getting this wrong at the feasibility stage means either re-engineering the project later — expensive — or proceeding under a standard that does not fit the project type, geography, or land tenure arrangement.
              </p>
              <p style={{ marginBottom: 36 }}>
                The three principal voluntary standards for nature-based carbon projects — Verra VCS, Gold Standard, and Plan Vivo — cover largely overlapping project types but differ meaningfully in their methodology libraries, governance requirements, and market positioning. The right standard is rarely obvious from project type alone. It depends on the interaction of project type, geography, land tenure, developer capacity, and target buyer.
              </p>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>Verra VCS — scale, liquidity, and methodological depth</h2>
              <p style={{ marginBottom: 16 }}>
                The Verified Carbon Standard (VCS), administered by Verra, is the largest voluntary carbon market standard by volume. As of 2025, Verra has issued over 1.3 billion credits and has a methodology library covering approximately 120 distinct project types — the broadest of any voluntary standard.
              </p>
              <p style={{ marginBottom: 16 }}>
                For nature-based projects, the key methodologies are VM0047 (Afforestation, Reforestation, and Revegetation), VM0009 (Avoided Ecosystem Conversion for REDD+), VM0017 (Adoption of Sustainable Agricultural Land Management), and the cookstove suite including VM0041 and VM0044. Each methodology specifies applicable conditions, baseline procedures, monitoring requirements, and additionality tests with a level of precision that has increased significantly since 2022.
              </p>
              <p style={{ marginBottom: 20 }}>
                VCS credits — Verified Carbon Units (VCUs) — trade at higher volumes than other voluntary standards and have the deepest buyer pool. Institutional buyers, corporates purchasing at scale, and development finance institutions are all primarily active in the VCS market. Liquidity is highest here.
              </p>
              <p style={{ marginBottom: 36 }}>
                The tradeoff is regulatory intensity. VCS methodology requirements are demanding, VVB oversight is rigorous, and the additionality evidence bar is high. Projects in geographies with ambiguous land tenure, low deforestation pressure, or limited regional baseline data face the highest development risk under VCS.
              </p>

              <div style={{ padding: '22px 24px', background: '#F5ECD7', borderRadius: 14, border: '1px solid #E2DDD6', marginBottom: 36 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#1A1A18', marginBottom: 8 }}>When VCS fits best</p>
                <ul style={{ paddingLeft: 18, margin: 0, fontSize: 14, color: '#374151', lineHeight: 2 }}>
                  <li>Large-scale reforestation, REDD+, or ARR projects (500+ ha)</li>
                  <li>Projects targeting corporate buyers or institutional investors</li>
                  <li>Cookstove projects using GS-rejected or high-fNRB geographies</li>
                  <li>Jurisdictions with documented deforestation pressure and satellite-verifiable land history</li>
                  <li>Developers with experience navigating technical methodology requirements</li>
                </ul>
              </div>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>Gold Standard — co-benefits, community development, and premium pricing</h2>
              <p style={{ marginBottom: 16 }}>
                Gold Standard (GS), now operating as the Gold Standard for the Global Goals (GS4GG), was established in 2003 as a higher-stringency alternative to early CDM credits. Its defining characteristic is the requirement for documented sustainable development co-benefits alongside carbon reduction — typically measured against a set of UN Sustainable Development Goals.
              </p>
              <p style={{ marginBottom: 16 }}>
                Gold Standard credits — Verified Emission Reductions (VERs) — typically trade at a premium to VCS credits due to the co-benefit narrative, which appeals to buyers purchasing for communications, ESG reporting, or impact-focused mandates. The premium varies by geography and project type but has historically ranged from 10–40% above equivalent VCS credits.
              </p>
              <p style={{ marginBottom: 16 }}>
                Gold Standard&apos;s methodology library is smaller than VCS — roughly 30 approved methods — but covers the core nature-based and technology project types: cookstoves, biogas, water purification, agroforestry, and selected afforestation types. Projects must demonstrate additionality, pass a Gold Standard Stakeholder Consultation process (which is more structured than VCS requirements), and report against at least three SDG indicators with quantified outcomes.
              </p>
              <p style={{ marginBottom: 36 }}>
                The stakeholder and community engagement requirements make Gold Standard particularly well-suited to projects with genuine community benefit structures — smallholder cookstove distribution programs, community-managed agroforestry, and similar designs. Projects where community engagement is formulaic rather than substantive face scrutiny at the stakeholder consultation stage.
              </p>

              <div style={{ padding: '22px 24px', background: '#F5ECD7', borderRadius: 14, border: '1px solid #E2DDD6', marginBottom: 36 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#1A1A18', marginBottom: 8 }}>When Gold Standard fits best</p>
                <ul style={{ paddingLeft: 18, margin: 0, fontSize: 14, color: '#374151', lineHeight: 2 }}>
                  <li>Cookstove and clean energy projects with direct household impact</li>
                  <li>Community-based land management with substantive local benefit</li>
                  <li>Projects where buyer profile includes impact-focused corporates or foundations</li>
                  <li>Geographies with strong NGO and community partner networks</li>
                  <li>Developers prepared for structured stakeholder consultation and SDG reporting</li>
                </ul>
              </div>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>Plan Vivo — community tenure, smallholder systems, and mosaic landscapes</h2>
              <p style={{ marginBottom: 16 }}>
                Plan Vivo was designed from the outset for community-based land management systems where land tenure is communal, project boundaries are not single parcels, and carbon activities are integrated into existing smallholder livelihoods. It is the most flexible of the three standards in terms of land structure — a Plan Vivo project can span a mosaic of smallholder plots across a landscape without requiring formal boundaries on each parcel.
              </p>
              <p style={{ marginBottom: 16 }}>
                The Project Validator Document (PVD) — Plan Vivo&apos;s equivalent of the PDD — is typically less technically demanding than VCS or GS documentation requirements, which makes Plan Vivo accessible to community-based organisations and local NGOs that lack the technical capacity for full VCS/GS certification. Development timelines are shorter: 12–18 months from start to first issuance, compared to 18–36 months for VCS.
              </p>
              <p style={{ marginBottom: 20 }}>
                The tradeoffs are market liquidity and buyer pool. Plan Vivo credits trade at lower volumes and are less widely accepted by major corporate buyers. The market is primarily mission-aligned buyers, foundations, and high-impact-focused purchasers. Per-credit prices have ranged from $8–$25 depending on project geography and co-benefit narrative, but liquidity is thinner.
              </p>
              <p style={{ marginBottom: 36 }}>
                Plan Vivo is genuinely the right standard for projects where community land tenure is the dominant structural feature — not as a simplification, but as a design decision that reflects what the project actually is.
              </p>

              <div style={{ padding: '22px 24px', background: '#F5ECD7', borderRadius: 14, border: '1px solid #E2DDD6', marginBottom: 36 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#1A1A18', marginBottom: 8 }}>When Plan Vivo fits best</p>
                <ul style={{ paddingLeft: 18, margin: 0, fontSize: 14, color: '#374151', lineHeight: 2 }}>
                  <li>Community-owned or community-managed land across a mosaic landscape</li>
                  <li>Smallholder agroforestry integrated into agricultural livelihoods</li>
                  <li>Projects where formal individual land titles are not available</li>
                  <li>Shorter development timeline is a priority</li>
                  <li>Mission-aligned or development finance buyers are the target market</li>
                </ul>
              </div>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>The four decision factors</h2>
              <p style={{ marginBottom: 16 }}>
                In practice, the standard choice comes down to four factors assessed at the feasibility stage:
              </p>
              <ol style={{ paddingLeft: 22, marginBottom: 36 }}>
                <li style={{ marginBottom: 16 }}><strong>Project type and applicable methodology.</strong> Some project types have strong methodology coverage under one standard and weak coverage under another. Improved Forest Management (IFM) is best covered by Verra VCS. Cookstoves with documented community distribution networks can go either VCS or Gold Standard — and the choice depends on factors 2 and 4. Mosaic smallholder systems are typically Plan Vivo.</li>
                <li style={{ marginBottom: 16 }}><strong>Geography and additionality evidence availability.</strong> The strength of a project&apos;s additionality case depends on the quality of regional deforestation data, land tenure documentation, and economic baseline data. VCS&apos;s more demanding evidence requirements are easier to meet in geographies with high-quality satellite coverage and documented deforestation pressure.</li>
                <li style={{ marginBottom: 16 }}><strong>Land tenure and community structure.</strong> Single-title or formally-documented land access suits VCS and Gold Standard. Communal, customary, or mosaic tenure structures suit Plan Vivo. Getting this wrong creates structural problems that cannot be fixed during PDD development.</li>
                <li style={{ marginBottom: 16 }}><strong>Target buyer and pricing expectations.</strong> Corporate buyers purchasing at scale want VCS. Impact buyers want Gold Standard co-benefit documentation. Development finance and mission-driven buyers can go either way. Setting project economics on a buyer profile that does not match the project&apos;s natural standard is a commercial planning error.</li>
              </ol>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>The feasibility study as the deciding test</h2>
              <p style={{ marginBottom: 20 }}>
                The right standard is not always determinable from a project description alone. A full <Link href="/methodology" style={{ color: '#1B4332', textDecoration: 'underline' }}>feasibility assessment</Link> resolves ambiguity by testing the project against the applicable conditions of each candidate standard — the additionality pathway, the land data quality, the methodology fit — and recommending the standard with the strongest overall development case.
              </p>
              <p style={{ marginBottom: 36 }}>
                Our full feasibility study explicitly includes a certification pathway recommendation as one of its seven sections: which standard to pursue, the applicable methodology, a gap analysis against current requirements, and the development timeline implications of that choice. The goal is to arrive at PDD development with a clear standard recommendation and a documented rationale — not to discover a standard mismatch six months into development.
              </p>

              <div style={{ padding: '28px 28px', background: '#1B4332', borderRadius: 16, marginBottom: 36 }}>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Standard recommendation is part of every study</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.70)', lineHeight: 1.85, marginBottom: 16 }}>
                  Our full feasibility study includes a certification pathway section that covers standard selection, applicable methodology, gap analysis against current requirements, and development timeline. We have certified projects under Verra VCS and Gold Standard — we assess what actually fits, not what is easiest to recommend.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.70)', lineHeight: 1.85, marginBottom: 20 }}>
                  Eligibility assessment from $500. Full study from $7,500.
                </p>
                <Link href="/pricing" className="btn-amber" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                  See what is included <Arrow size={14} color="#1A1A18" />
                </Link>
              </div>

            </div>

            <div style={{ borderTop: '1px solid #E8E4DF', paddingTop: 28, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <Link href="/insights/additionality-failure-carbon-projects" style={{ fontSize: 14, color: '#1B4332', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Related: The Additionality Problem <Arrow size={13} color="#1B4332" />
              </Link>
              <Link href="/use-cases" style={{ fontSize: 14, color: '#5C5C58', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Project types we assess <Arrow size={13} color="#5C5C58" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
