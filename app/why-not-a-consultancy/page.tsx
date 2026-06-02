import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Not a Consultancy? — Feasibility.Earth',
  description: 'How Feasibility.Earth compares to traditional environmental consultancies for carbon project feasibility. What is the same, what is different, and why it matters.',
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}
function Check({ color = '#1B4332', size = 13 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}
function X({ color = '#DC2626', size = 13 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
}

const COMPARISON = [
  {
    dimension: 'Methodology depth',
    consultancy: 'Variable. Large firms apply rigorous methodology. Mid-size firms may use standardised templates with limited project-specific adaptation.',
    us: 'Built on the methodology we apply to our own certified projects. Additionality, baseline, and risk analysis based on project-specific evidence, not standard assumptions.',
  },
  {
    dimension: 'Field experience in your geography',
    consultancy: 'Large consultancies have broad geographic coverage but may not have direct development experience in the specific region.',
    us: 'We have developed and certified projects in Nigeria, Uganda, Kazakhstan, and Cameroon. Our assessors have been on the ground in the geographies we assess.',
  },
  {
    dimension: 'Timeline',
    consultancy: '3–6 months for a full feasibility study. Driven by internal review processes and capacity constraints, not the complexity of the work.',
    us: '5 business days for a full feasibility study. 2–3 business days for eligibility assessment.',
  },
  {
    dimension: 'Cost',
    consultancy: '$25,000–$75,000+ for a full feasibility study from a major consultancy.',
    us: '$7,500 for a full feasibility study. $500 for an eligibility assessment.',
  },
  {
    dimension: 'What happens after the study',
    consultancy: 'A consultancy produces a document and invoices. If you proceed to development, you engage a separate developer.',
    us: 'For projects that clear our assessment, we offer to co-develop and co-invest. The study is the filter for a potential development partnership.',
  },
  {
    dimension: 'Post-study accountability',
    consultancy: 'A consultancy has no stake in whether the project succeeds after delivery of the report.',
    us: 'Where we take a development stake, our methodology accuracy is directly tied to our own financial returns.',
  },
]

export default function WhyNotConsultancyPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '80px 0 64px' }}>
          <div className="fe-wrap" style={{ maxWidth: 680 }}>
            <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.10)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.14)', marginBottom: 22 }}>
              An honest comparison
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(28px,5vw,50px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
              Why not use a large consultancy?
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, maxWidth: 560 }}>
              A fair question. Here is an honest answer — including where traditional consultancies are stronger, where we are, and why it matters for your decision.
            </p>
          </div>
        </section>

        <section className="fe-section-sm" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap" style={{ maxWidth: 840 }}>

            <div style={{ padding: '28px 32px', background: '#fff', borderRadius: 16, border: '1px solid #E2DDD6', marginBottom: 20 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1A1A18', marginBottom: 10 }}>Where traditional consultancies are stronger</h2>
              <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.85, marginBottom: 14 }}>
                We should be honest about this. A large, established environmental consultancy has advantages that we do not:
              </p>
              {[
                'Institutional name recognition — a McKinsey or EY report carries a reputational weight that an independent assessment service does not.',
                'Breadth of geographic coverage — major consultancies have offices in more countries and can draw on local expertise more readily for less common geographies.',
                'Full-service scope — large consultancies can bundle feasibility work with regulatory advisory, government engagement, and multi-disciplinary services that fall outside carbon assessment.',
                'ESIA and social impact assessment — some project types require Environmental and Social Impact Assessments that are beyond the scope of carbon-specific feasibility.',
              ].map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: 5, background: '#FEF9EE', border: '1px solid #FDDEA5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1" fill="#D97706"/></svg>
                  </div>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{point}</p>
                </div>
              ))}
            </div>

            {/* Comparison table */}
            <div style={{ borderRadius: 14, border: '1px solid #E2DDD6', overflow: 'hidden', background: '#fff', marginBottom: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 2fr', background: '#1B4332' }}>
                <div style={{ padding: '14px 18px' }} />
                <div style={{ padding: '14px 18px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.8px', textTransform: 'uppercase' as const }}>Traditional consultancy</p>
                </div>
                <div style={{ padding: '14px 18px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#86C89C', letterSpacing: '0.8px', textTransform: 'uppercase' as const }}>Feasibility.Earth</p>
                </div>
              </div>
              {COMPARISON.map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 2fr', borderTop: '1px solid #F0EDE8', background: i % 2 === 0 ? '#FAFAF8' : '#fff' }}>
                  <div style={{ padding: '16px 18px', borderRight: '1px solid #F0EDE8' }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#1A1A18' }}>{row.dimension}</p>
                  </div>
                  <div style={{ padding: '16px 16px', borderRight: '1px solid #F0EDE8' }}>
                    <p style={{ fontSize: 13, color: '#5C5C58', lineHeight: 1.65 }}>{row.consultancy}</p>
                  </div>
                  <div style={{ padding: '16px 16px' }}>
                    <p style={{ fontSize: 13, color: '#1B4332', lineHeight: 1.65, fontWeight: 500 }}>{row.us}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: '28px 32px', background: '#1B4332', borderRadius: 16, marginBottom: 20 }}>
              <h2 className="font-display" style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 14 }}>
                The question that matters
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 16 }}>
                The relevant question for a carbon project buyer or developer is not which provider has a more recognisable name. It is: which provider&apos;s assessment will identify the specific failure modes that are costing developers $150,000–$500,000 in wasted capital — and will their conclusions survive independent review?
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 24 }}>
                Our answer: we assess projects the same way we develop them — using current project-specific data, applying current methodology standards, and documenting the evidence behind every conclusion. That is what our certified projects have been validated against. It is what your feasibility assessment will be based on.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-amber" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                  Tell us about your project <Arrow size={14} color="#1A1A18" />
                </Link>
                <Link href="/methodology" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontWeight: 600 }}>
                  Read our methodology <Arrow size={14} color="rgba(255,255,255,0.75)" />
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
