import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const INCLUDED = [
  'Automated eligibility check (<2 min)',
  'Satellite imagery analysis (NDVI, crown cover)',
  '10-year land use history review',
  'CO₂ potential estimate (tCO₂e/year)',
  'Certification pathway recommendation',
  'Market value estimate at current prices',
  'Additionality and baseline assessment',
  'Expert review by certified carbon specialist',
  'PDF report ready for certification submission',
  'One round of revisions included',
]

const FAQS = [
  { q: 'What happens if my land is not eligible?', a: 'If the eligibility check determines your land does not qualify for a carbon project, we will refund 50% of the study fee and provide a detailed explanation of the disqualifying factors.' },
  { q: 'How accurate is the CO₂ estimate?', a: 'Our estimates are within ±15% of final certified figures, based on validation against Green Earth\'s active portfolio. The full report includes confidence intervals.' },
  { q: 'Can I use the report for Verra VCS certification?', a: 'Yes. The report is structured to serve as the foundation for a full Project Design Document (PDD) under Verra VCS, Gold Standard, or Plan Vivo.' },
  { q: 'What land size is required?', a: 'We support projects from 50 hectares upward. Smaller parcels may still qualify — contact us to discuss.' },
  { q: 'Do I need to visit my land?', a: 'No fieldwork is required for the feasibility study. We rely entirely on satellite data and the information you provide in the intake form.' },
]

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)', padding: '80px 0 64px', textAlign: 'center' }}>
          <div className="fe-wrap">
            <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.15)', color: '#D8F3DC', border: '1px solid rgba(255,255,255,0.2)', marginBottom: 20 }}>Simple pricing</div>
            <h1 className="font-display" style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
              One study. One price.
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 460, margin: '0 auto', lineHeight: 1.7 }}>
              No hourly rates. No hidden fees. $7,500 flat for a full feasibility study — delivered in 24 hours.
            </p>
          </div>
        </section>

        {/* Pricing card */}
        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap" style={{ maxWidth: 860 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="fe-card">

              {/* Price panel */}
              <div style={{ background: '#1B4332', padding: '48px 40px', borderRadius: '16px 0 0 16px' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 24 }}>Feasibility Study</p>
                <div className="font-display" style={{ fontSize: 64, fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: 6 }}>$7,500</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, marginBottom: 32 }}>flat fee per study</p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 28, marginBottom: 28 }}>
                  {[
                    { icon: '⏱', text: 'Report in 24 hours' },
                    { icon: '🛰', text: 'Satellite analysis included' },
                    { icon: '📋', text: 'Certification-ready output' },
                    { icon: '🌍', text: 'All project types & countries' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
                      <span style={{ fontSize: 16 }}>{item.icon}</span>
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link href="https://app.feasibility.earth" target="_blank" className="btn-amber" style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '14px 0' }}>
                  Start a Study →
                </Link>
                <p style={{ marginTop: 12, fontSize: 12, color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>
                  50% refund if land is not eligible
                </p>
              </div>

              {/* What's included */}
              <div style={{ padding: '48px 40px' }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#5C5C58', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 24 }}>What&apos;s included</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {INCLUDED.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <div style={{ width: 20, height: 20, borderRadius: 100, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <span style={{ fontSize: 10, color: '#1B4332', fontWeight: 700 }}>✓</span>
                      </div>
                      <span style={{ fontSize: 14, color: '#3D3D3A', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* vs. traditional */}
            <div style={{ marginTop: 24, padding: '20px 24px', background: '#F5ECD7', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 20 }}>💡</span>
              <p style={{ fontSize: 14, color: '#6B4226' }}>
                <strong>Compare:</strong> Traditional feasibility studies by consulting firms cost $25,000 – $75,000+ and take 3–6 months. Feasibility.Earth delivers the same depth of analysis in 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="fe-section-sm" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 700 }}>
            <h2 className="font-display" style={{ fontSize: 30, fontWeight: 700, color: '#1A1A18', marginBottom: 36, textAlign: 'center' }}>Common questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ borderRadius: 12, border: '1px solid #E2DDD6', padding: '20px 24px', background: '#FAFAF8' }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', marginBottom: 8 }}>{faq.q}</p>
                  <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
