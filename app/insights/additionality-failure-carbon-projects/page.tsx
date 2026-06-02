import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Additionality Problem in Carbon Projects — Feasibility.Earth',
  description: 'Nearly half of top voluntary carbon projects carry additionality risk. This is what additionality means, why it fails, and how rigorous pre-development assessment should address it.',
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
              <span className="fe-badge" style={{ background: 'rgba(216,243,220,0.12)', color: '#86C89C', border: '1px solid rgba(134,200,156,0.2)', fontSize: 10 }}>Certification</span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
              The Additionality Problem: Why Half of Top Carbon Projects Carry Certification Risk
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>April 2026 · 7 min read · By the Feasibility.Earth team</p>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, maxWidth: 640 }}>
              Additionality is the most consequential test in carbon project development. It is also the most consistently missed in early-stage feasibility work. Using third-party ratings data, analysis from 2024 found that nearly half of the 47 largest projects by retirement volume carried legitimate or high additionality risk.
            </p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 720 }}>
            <div style={{ fontSize: 16, color: '#374151', lineHeight: 1.9 }}>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16, marginTop: 0 }}>What additionality means — precisely</h2>
              <p style={{ marginBottom: 20 }}>
                A carbon project is additional if the carbon benefits — the emissions avoided, the carbon sequestered — would not have occurred in the absence of the project. If a forest was not going to be cut down anyway, protecting it does not generate additional carbon benefit. If a region&apos;s agricultural frontier was not expanding, reforestation on land that would not have been cleared does not generate additional sequestration relative to the baseline.
              </p>
              <p style={{ marginBottom: 36 }}>
                This seems simple. In practice, it requires project-specific evidence that most feasibility assessments do not produce. The result is projects that look additional on paper but cannot withstand scrutiny when carbon credit buyers, journalists, or academic researchers apply independent analysis.
              </p>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>How additionality is tested under current standards</h2>
              <p style={{ marginBottom: 16 }}>Under VCS and Gold Standard requirements, a project must demonstrate additionality through a combination of:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                {[
                  { name: 'Regulatory surplus test', desc: 'The project goes beyond what is legally mandated. If a country has legislation requiring reforestation, a reforestation project does not automatically pass this test.' },
                  { name: 'Performance test', desc: 'The project performs significantly better than the relevant benchmark for similar activities. Benchmarks must use current data — not data from when a project was originally designed.' },
                  { name: 'Investment analysis or barrier analysis', desc: 'The project faces financial, technological, or institutional barriers that would prevent it from being implemented without carbon revenue. The analysis must be based on current conditions — current commodity prices, current financing costs, current regulatory environment.' },
                ].map((item, i) => (
                  <div key={i} style={{ padding: '18px 20px', background: '#FAFAF8', borderRadius: 12, border: '1px solid #E2DDD6' }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#1A1A18', marginBottom: 6 }}>{item.name}</p>
                    <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ marginBottom: 36 }}>
                The current regulatory environment is the critical phrase in each of these tests. Carbon standards have tightened their additionality requirements substantially since 2020. Feasibility work based on additionality analysis from previous methodology versions may not satisfy current registration requirements.
              </p>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>Where assessments fail</h2>
              <p style={{ marginBottom: 16 }}>
                The most common additionality failure mode we observe in projects we are asked to review is what practitioners call &ldquo;low-hanging fruit&rdquo; claims — projects in regions where deforestation pressure is demonstrably low, but where historical deforestation rates from a higher-pressure period have been used to justify additionality.
              </p>
              <p style={{ marginBottom: 20 }}>
                A reforestation project in a region where agricultural expansion has slowed — perhaps due to commodity price changes or government land use policy — may not pass an investment analysis at current conditions. The same project, assessed using five-year-old deforestation data, might appear to pass easily.
              </p>
              <div style={{ padding: '20px 22px', background: '#F5ECD7', borderRadius: 12, border: '1px solid #E2DDD6', marginBottom: 28 }}>
                <p style={{ fontSize: 14, color: '#6B4226', lineHeight: 1.8, fontStyle: 'italic' }}>
                  &ldquo;We have reviewed projects where the additionality case was built on deforestation data from a period of peak agricultural expansion in the region, and the project was now located in a protected area with a 10-year land use change rate of near zero. The additionality case was not just weak — it was not there.&rdquo;
                </p>
                <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 10 }}>Angel Daniel Armas, Senior Carbon Analyst, Feasibility.Earth</p>
              </div>
              <p style={{ marginBottom: 36 }}>
                The second common failure mode is investment analysis based on commodity prices and financing costs from a different economic environment than the one in which the project is now being assessed. A project that faced genuine investment barriers in 2020 — when timber prices were lower and carbon prices were higher — may not face the same barriers in 2026. The additionality case needs to be built on current conditions.
              </p>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>What rigorous additionality assessment requires</h2>
              <p style={{ marginBottom: 16 }}>
                A rigorous additionality assessment for a nature-based carbon project requires:
              </p>
              <ol style={{ paddingLeft: 22, marginBottom: 28 }}>
                <li style={{ marginBottom: 10 }}>Current land use change data for the specific project geography — not regional or national averages from a database that may be 2–5 years old.</li>
                <li style={{ marginBottom: 10 }}>Investment analysis based on current commodity prices, current financing costs, and current regulatory framework for the jurisdiction — not generic financial modelling.</li>
                <li style={{ marginBottom: 10 }}>Regulatory surplus assessment against current legislation — including any changes to national policies on land use, forest protection, or renewable energy that may have altered what is legally required.</li>
                <li style={{ marginBottom: 10 }}>Documentation of the evidence behind each conclusion, in a form that a VVB auditor can review and challenge.</li>
              </ol>
              <p style={{ marginBottom: 36 }}>
                Most desk-based feasibility work produces a conclusion — &ldquo;the project is additional&rdquo; — without the underlying evidence chain that the conclusion requires. This is not a fraudulent conclusion: the assessor may genuinely believe it. But it does not survive independent review.
              </p>

              <div style={{ padding: '28px 28px', background: '#1B4332', borderRadius: 16, marginBottom: 32 }}>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12 }}>How we approach additionality</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 20 }}>
                  Our eligibility assessment ($500) includes a documented additionality screen — not a generic conclusion, but a specific analysis of the applicable regulatory context, current land use change data for the region, and a preliminary investment barrier analysis. If the additionality case is not there, we say so clearly — before you commit capital to development.
                </p>
                <Link href="/contact" className="btn-amber" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                  Tell us about your project <Arrow size={14} color="#1A1A18" />
                </Link>
              </div>

            </div>

            <div style={{ borderTop: '1px solid #E8E4DF', paddingTop: 28, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <Link href="/insights/why-carbon-projects-fail-feasibility" style={{ fontSize: 14, color: '#1B4332', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Why Projects Fail <Arrow size={13} color="#1B4332" />
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
