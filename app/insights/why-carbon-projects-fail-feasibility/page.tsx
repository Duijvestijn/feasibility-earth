import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Nature-Based Carbon Projects Fail — Feasibility.Earth',
  description: 'Nature-based carbon projects fail certification at a high rate. The cause is almost always a flawed feasibility assessment. Here is what those failures look like and how to prevent them.',
  openGraph: {
    title: 'Why Nature-Based Carbon Projects Fail — and What Rigorous Feasibility Should Catch',
    description: 'Additionality failures, overcrediting, and leakage risk: the three problems that kill carbon projects — and how to find them before you commit capital.',
  },
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

export default function ArticlePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '72px 0 56px' }}>
          <div className="fe-wrap" style={{ maxWidth: 760 }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <Link href="/insights" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                Insights
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13 }}>/</span>
              <span className="fe-badge" style={{ background: 'rgba(216,243,220,0.12)', color: '#86C89C', border: '1px solid rgba(134,200,156,0.2)', fontSize: 10 }}>Methodology</span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
              Why Nature-Based Carbon Projects Fail — and What a Rigorous Feasibility Assessment Should Catch
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>June 2026 · 8 min read · By the Feasibility.Earth team</p>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, maxWidth: 640 }}>
              Most nature-based carbon projects that fail certification do not fail because the land is wrong. They fail because an assessment missed something at the front end — something that was visible in the data, if the assessor knew where to look.
            </p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 720 }}>
            <div style={{ fontSize: 16, color: '#374151', lineHeight: 1.9 }}>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16, marginTop: 0 }}>The problem the market knows but does not say clearly</h2>
              <p style={{ marginBottom: 20 }}>
                Carbon credit quality has been under sustained scrutiny since 2022. A series of investigative reports — beginning with forest carbon projects in Africa and South America — documented systematic overcrediting, additionality failures, and in some cases credits with no real-world backing being sold to major corporations.
              </p>
              <p style={{ marginBottom: 20 }}>
                The response from certification bodies has been significant. Verra, Gold Standard, and Plan Vivo have all revised their methodologies, tightened their additionality requirements, and raised the evidentiary bar for project registration. Validation and Verification Bodies (VVBs) are applying more scrutiny at each stage.
              </p>
              <p style={{ marginBottom: 36 }}>
                What has not changed is where most failures originate: at the feasibility stage, before a cent of development capital has been committed. The failure mode is almost always the same — an assessment that used standard assumptions rather than project-specific evidence.
              </p>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>Failure mode 1: Additionality not genuinely tested</h2>
              <p style={{ marginBottom: 16 }}>
                Additionality is the most fundamental test in carbon project development. It asks: would the carbon benefit — the forests protected, the trees planted, the cookstoves distributed — have happened anyway, without the carbon project?
              </p>
              <p style={{ marginBottom: 16 }}>
                A project that fails additionality is claiming carbon credits for outcomes that were going to occur regardless. This is the most common and most consequential failure mode, and it is the one most frequently missed in desk-based feasibility work.
              </p>
              <p style={{ marginBottom: 16 }}>
                Under current VCS requirements, additionality is tested through a combination of a regulatory surplus test (the project is not legally required), a performance test (the project performs significantly better than the relevant baseline), and investment analysis or barrier analysis (the project would face financial or technical barriers without carbon revenue).
              </p>
              <p style={{ marginBottom: 36 }}>
                Most desk-based assessments apply these tests at a general level. A rigorous feasibility screen applies them specifically — using current commodity prices, current regulatory data for the jurisdiction, current deforestation pressure data for the region — and documents the evidence behind each conclusion. The difference is what VVBs now test for at validation.
              </p>

              <div style={{ padding: '22px 24px', background: '#F5ECD7', borderRadius: 14, border: '1px solid #E2DDD6', marginBottom: 36 }}>
                <p style={{ fontSize: 14, color: '#6B4226', lineHeight: 1.8, fontStyle: 'italic' }}>
                  &ldquo;In our experience reviewing projects across Africa and Central Asia, additionality is the failure mode we encounter most consistently in assessments produced by parties without on-ground knowledge of the region. The additionality case that works in a high-deforestation pressure context does not automatically translate to lower-pressure geographies — and the investment analysis required differs significantly by country.&rdquo;
                </p>
                <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 10 }}>Nicholas Wall, Head of Project Feasibility, Feasibility.Earth</p>
              </div>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>Failure mode 2: Baseline methodology that inflates credit projections</h2>
              <p style={{ marginBottom: 16 }}>
                The baseline in a carbon project is the counterfactual — what would have happened to carbon stocks in the absence of the project. The difference between actual outcomes and this baseline determines credit volume.
              </p>
              <p style={{ marginBottom: 16 }}>
                Research published in Nature Communications in 2026 documented that forestry carbon projects have systematically overcredited by 5–14 times their stated value due to incorrect baseline assumptions about deforestation rates. The issue is not deliberate fraud — it is methodology: assessments using global or regional average deforestation rates rather than data specific to the project area and time period.
              </p>
              <p style={{ marginBottom: 16 }}>
                For cookstove projects, the equivalent issue is the fraction of non-renewable biomass (fNRB) — the proportion of fuel that would not have been sustainably replaced. The higher the fNRB value, the greater the estimated emission reduction. Industry practice has been to use fNRB values of 80%+ for most African geographies. Independent research consistently places the regional average at 25–35%, and Verra&apos;s current methodology (VM0050, adopted in October 2024) now mandates the use of MoFuSS (Model of Fuelwood Sourcing and Substitution) values rather than project-specific claims.
              </p>
              <p style={{ marginBottom: 36 }}>
                A feasibility assessment that uses outdated or generalised baseline assumptions will produce credit projections that cannot survive validation under current standards. The result is either a dramatically reduced credit volume on registration — changing the project economics — or outright rejection.
              </p>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>Failure mode 3: Leakage and permanence risk underestimated</h2>
              <p style={{ marginBottom: 16 }}>
                Carbon projects do not exist in isolation. A reforestation project in a region with active agricultural expansion may simply displace deforestation to an adjacent area — leakage. A project protecting standing forest in an area with low deforestation pressure may have minimal real-world impact, even before the additionality question is considered.
              </p>
              <p style={{ marginBottom: 16 }}>
                Permanence risk — the likelihood that carbon stored in the project will be reversed — is the other commonly underassessed factor. Wildfire, political instability, land ownership changes, and changes to the economic conditions that made the project viable can all reverse sequestered carbon. Certification standards require buffer pool contributions to address permanence risk, but the buffer pool requirement is calculated from a risk assessment that varies significantly based on geography and project type.
              </p>
              <p style={{ marginBottom: 36 }}>
                Desk-based assessments frequently apply standard leakage and permanence risk factors without the project-specific analysis that current standards require. This is another point of failure at validation — and another that a field-experienced assessment team catches at the feasibility stage.
              </p>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>What rigorous feasibility should actually produce</h2>
              <p style={{ marginBottom: 16 }}>
                A rigorous carbon project feasibility assessment should produce three things:
              </p>
              <ol style={{ paddingLeft: 22, marginBottom: 20 }}>
                <li style={{ marginBottom: 12 }}><strong>A documented additionality case</strong> — not a generic conclusion, but a specific analysis of the applicable regulatory context, financial barriers, and performance baseline, with evidence referenced.</li>
                <li style={{ marginBottom: 12 }}><strong>A carbon potential estimate with documented assumptions</strong> — the methodology used, the data sources, the confidence ranges, and explicit identification of which assumptions drive the most variance in the projection.</li>
                <li style={{ marginBottom: 12 }}><strong>A risk register</strong> — covering leakage, permanence, socioeconomic, and political risks at a project-specific level, with a preliminary buffer pool estimate and documented risk mitigation approaches.</li>
              </ol>
              <p style={{ marginBottom: 36 }}>
                A document that does not contain these three things — in a form that can be scrutinised by a VVB auditor — is not a rigorous feasibility assessment. It is an opinion. And in the current market, opinions do not survive validation.
              </p>

              <div style={{ padding: '28px 28px', background: '#1B4332', borderRadius: 16, marginBottom: 36 }}>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12 }}>What we do differently</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.70)', lineHeight: 1.85, marginBottom: 16 }}>
                  Our assessments are built on the methodology we apply to our own certified projects — 149,000 carbon credits across Nigeria, Uganda, Kazakhstan, and Cameroon. We have been through validation and verification with Verra and Gold Standard auditors. We know what they test for.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.70)', lineHeight: 1.85, marginBottom: 20 }}>
                  Our eligibility assessment ($500) covers additionality, baseline methodology, land use history, and geographic risk factors. Our full feasibility study ($7,500) produces a document structured for VVB review — not a desktop opinion.
                </p>
                <Link href="/contact" className="btn-amber" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                  Tell us about your project <Arrow size={14} color="#1A1A18" />
                </Link>
              </div>

            </div>

            <div style={{ borderTop: '1px solid #E8E4DF', paddingTop: 28, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <Link href="/insights/carbon-feasibility-study-cost" style={{ fontSize: 14, color: '#1B4332', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Next: What Does a Feasibility Study Cost? <Arrow size={13} color="#1B4332" />
              </Link>
              <Link href="/methodology" style={{ fontSize: 14, color: '#5C5C58', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Our methodology <Arrow size={13} color="#5C5C58" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
