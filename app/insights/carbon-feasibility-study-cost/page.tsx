import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Does a Carbon Project Feasibility Study Cost — Feasibility.Earth',
  description: 'Carbon project feasibility studies range from $500 eligibility checks to $75,000+ consultant reports. Here is what drives the cost, what you are actually buying, and how to evaluate what rigorous assessment is worth.',
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
              <span className="fe-badge" style={{ background: 'rgba(216,243,220,0.12)', color: '#86C89C', border: '1px solid rgba(134,200,156,0.2)', fontSize: 10 }}>Due Diligence</span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
              What Does a Carbon Project Feasibility Study Cost — and What Are You Actually Buying?
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>May 2026 · 6 min read · By the Feasibility.Earth team</p>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, maxWidth: 640 }}>
              Feasibility study costs vary enormously — from a few hundred dollars to $75,000 or more. The price is not the most important variable. What matters is what you are buying: genuine risk elimination, or a document that satisfies a checkbox.
            </p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 720 }}>
            <div style={{ fontSize: 16, color: '#374151', lineHeight: 1.9 }}>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16, marginTop: 0 }}>The range and what drives it</h2>
              <p style={{ marginBottom: 20 }}>
                In the voluntary carbon market, feasibility study costs exist across a wide spectrum:
              </p>

              {/* Comparison table */}
              <div style={{ borderRadius: 14, border: '1px solid #E2DDD6', overflow: 'hidden', marginBottom: 32 }}>
                {[
                  { type: 'Eligibility screen (automated tools)', cost: '$0–$500', timeline: '< 24 hours', depth: 'Basic geographic screening. No expert review. No additionality analysis. Useful for rapid pipeline triage — not for capital commitment.' },
                  { type: 'Pre-feasibility assessment (specialist services)', cost: '$500–$2,000', timeline: '2–5 days', depth: 'Satellite analysis plus expert review of key risk factors. Documents whether a project warrants full development. Structured for a go/no-go decision.' },
                  { type: 'Full feasibility study (specialist services)', cost: '$7,500–$25,000', timeline: '5–30 days', depth: 'Complete technical and commercial assessment. Carbon potential with documented methodology. Risk register. Certification pathway. Structured for investor and DFI use.' },
                  { type: 'Full feasibility study (large consultancy)', cost: '$25,000–$75,000+', timeline: '3–6 months', depth: 'Equivalent or similar technical depth to specialist services. Cost premium reflects consulting overhead, not methodology superiority.' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 3fr', borderBottom: i < 3 ? '1px solid #F0EDE8' : 'none', background: i === 1 ? '#EBF5EE' : i === 2 ? '#F0FDF8' : '#fff' }}>
                    <div style={{ padding: '14px 16px', fontSize: 13, fontWeight: 600, color: '#1A1A18', borderRight: '1px solid #F0EDE8' }}>{row.type}</div>
                    <div style={{ padding: '14px 14px', fontSize: 13, color: '#1B4332', fontWeight: 700, borderRight: '1px solid #F0EDE8' }}>{row.cost}</div>
                    <div style={{ padding: '14px 14px', fontSize: 12, color: '#9CA3AF', borderRight: '1px solid #F0EDE8' }}>{row.timeline}</div>
                    <div style={{ padding: '14px 16px', fontSize: 12, color: '#5C5C58', lineHeight: 1.6 }}>{row.depth}</div>
                  </div>
                ))}
              </div>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>What you are actually buying</h2>
              <p style={{ marginBottom: 16 }}>
                A feasibility study is not a document. It is a risk assessment. The question you are asking is: if I commit $150,000–$500,000 to developing this project, what is the probability that it fails at validation, produces significantly fewer credits than projected, or creates reputational exposure for the buyers of those credits?
              </p>
              <p style={{ marginBottom: 16 }}>
                A study that produces an optimistic projection using standard assumptions does not answer this question. A study that has interrogated additionality against current regulatory data for the specific jurisdiction, validated baseline carbon assumptions against regional field data, and documented a risk register that a VVB auditor can scrutinise — that answers the question.
              </p>
              <p style={{ marginBottom: 36 }}>
                The cost difference between a $7,500 specialist study and a $75,000 consultancy study does not typically reflect a difference in methodological depth. It reflects consulting overhead. The question to ask any provider is not what they charge — it is what their conclusions are based on, and whether that evidence will survive independent review.
              </p>

              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>The risk you are eliminating</h2>
              <p style={{ marginBottom: 20 }}>
                A carbon project that reaches PDD development and fails at validation has typically spent:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 28 }}>
                {[
                  { label: 'PDD development', range: '$15,000–$40,000' },
                  { label: 'VVB validation fee', range: '$15,000–$30,000' },
                  { label: 'Project team time', range: '$50,000–$200,000' },
                ].map((item, i) => (
                  <div key={i} style={{ padding: '16px 18px', background: '#FEF9EE', borderRadius: 12, border: '1px solid #FDDEA5' }}>
                    <p style={{ fontSize: 11, color: '#92400E', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' as const, marginBottom: 6 }}>{item.label}</p>
                    <p style={{ fontSize: 18, fontWeight: 800, color: '#1A1A18', fontFamily: 'Fraunces, Georgia, serif' }}>{item.range}</p>
                  </div>
                ))}
              </div>
              <p style={{ marginBottom: 36 }}>
                Total wasted development spend on a failed project: $80,000–$270,000 direct costs, plus opportunity cost of 18–24 months and the internal resources allocated. For institutional buyers, there is also the reputational cost of being associated with a failed project — which KPMG&apos;s 2024 ESG due diligence study identified as a deal-stopper in over 50% of transactions where material ESG findings surfaced.
              </p>

              <div style={{ padding: '28px 28px', background: '#1B4332', borderRadius: 16, marginBottom: 32 }}>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Our pricing structure</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 20 }}>
                  We offer a $500 eligibility assessment (2–3 business days) for rapid go/no-go decisions, and a $7,500 full feasibility study (5 business days) producing a bankable report for investor and DFI use. Both are built on the same methodology we apply to our own certified projects. For qualifying projects, we also offer full development support and capital co-investment.
                </p>
                <Link href="/pricing" className="btn-amber" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                  View pricing and what is included <Arrow size={14} color="#1A1A18" />
                </Link>
              </div>

            </div>

            <div style={{ borderTop: '1px solid #E8E4DF', paddingTop: 28, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <Link href="/insights/additionality-failure-carbon-projects" style={{ fontSize: 14, color: '#1B4332', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Next: The Additionality Problem <Arrow size={13} color="#1B4332" />
              </Link>
              <Link href="/insights" style={{ fontSize: 14, color: '#5C5C58', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                All insights <Arrow size={13} color="#5C5C58" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
