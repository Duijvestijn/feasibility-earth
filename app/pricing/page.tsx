import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const INCLUDED = [
  { icon: '📅', text: 'Full report delivered in 5 business days' },
  { icon: '👤', text: 'Dedicated expert assigned to your project' },
  { icon: '🛰',  text: 'Satellite land analysis included' },
  { icon: '📊', text: 'CO₂ credit potential estimate' },
  { icon: '📋', text: 'Certification pathway recommendation (Verra VCS, Gold Standard or Plan Vivo)' },
  { icon: '📞', text: 'Personal walkthrough call when report is ready' },
  { icon: '🔄', text: 'One round of revisions included' },
  { icon: '🛡',  text: '50% refund if your land doesn\'t qualify' },
]

const FAQS = [
  {
    q: 'Do I need technical knowledge to get started?',
    a: 'Not at all. You just tell us about your land — where it is, how big it is, and what you have in mind. Our experts ask the right follow-up questions and guide you through the whole process.',
  },
  {
    q: 'What does the 5-business-day timeline include?',
    a: 'From the moment we receive your completed intake form, we deliver a full feasibility report within 5 business days. That includes satellite analysis, expert review, and your personal walkthrough call.',
  },
  {
    q: 'What if my land doesn\'t qualify?',
    a: 'If your land doesn\'t meet the criteria for a viable carbon project, we refund 50% of the study fee and give you a clear explanation of why — and what alternatives might exist.',
  },
  {
    q: 'How accurate is the CO₂ estimate?',
    a: 'Our estimates are based on the same methods used for full project certification — calibrated against the real projects Green Earth Group has developed. We include a range and explain what drives the numbers.',
  },
  {
    q: 'Can I use the report to start certification?',
    a: 'Yes. The report is designed to serve as the foundation for a full project design document. It doesn\'t replace that step, but it significantly reduces the time and cost to get there.',
  },
  {
    q: 'What land size is needed?',
    a: 'We work with projects from 50 hectares upwards. Smaller parcels may still qualify in some circumstances — contact us to discuss.',
  },
  {
    q: 'Which countries do you cover?',
    a: 'We work globally and have specific expertise in Sub-Saharan Africa (Nigeria, Uganda, Kenya, Cameroon) and Central Asia (Kazakhstan). We can assess land anywhere with reliable satellite coverage.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)', padding: '80px 0 64px', textAlign: 'center' }}>
          <div className="fe-wrap">
            <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.15)', color: '#D8F3DC', border: '1px solid rgba(255,255,255,0.2)', marginBottom: 20 }}>
              Simple pricing
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
              One study. One price.<br />One expert on your team.
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
              $7,500 flat fee. No hidden costs. A full feasibility study — guided by experienced practitioners — delivered in 5 business days.
            </p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap" style={{ maxWidth: 880 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="fe-card">

              <div style={{ background: '#1B4332', padding: '52px 44px', borderRadius: '16px 0 0 16px' }}>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: 20 }}>Feasibility Study</p>
                <div className="font-display" style={{ fontSize: 68, fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: 4 }}>$7,500</div>
                <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: 15, marginBottom: 36 }}>flat fee · no surprises</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36, borderTop: '1px solid rgba(255,255,255,0.10)', paddingTop: 28 }}>
                  {[
                    { icon: '📅', label: '5 business days' },
                    { icon: '👤', label: 'Your own dedicated expert' },
                    { icon: '📞', label: 'Personal walkthrough call' },
                    { icon: '🛡',  label: '50% back if land doesn\'t qualify' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontSize: 17 }}>{item.icon}</span>
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.80)' }}>{item.label}</span>
                    </div>
                  ))}
                </div>

                <Link href="https://app.feasibility.earth" target="_blank" className="btn-amber" style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '15px 0' }}>
                  Start your study →
                </Link>
              </div>

              <div style={{ padding: '52px 44px' }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#5C5C58', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 26 }}>Everything included</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {INCLUDED.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.55 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20, padding: '18px 24px', background: '#F5ECD7', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 22 }}>💡</span>
              <p style={{ fontSize: 14, color: '#6B4226', lineHeight: 1.65 }}>
                A traditional feasibility study from a large consultancy costs <strong>$25,000–$75,000 and takes 3–6 months</strong>. We deliver the same depth of analysis — backed by real on-the-ground project experience — in 5 business days.
              </p>
            </div>
          </div>
        </section>

        <section className="fe-section-sm" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 720 }}>
            <h2 className="font-display" style={{ fontSize: 30, fontWeight: 700, color: '#1A1A18', marginBottom: 32, textAlign: 'center' }}>
              Questions we often get
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ background: '#FAFAF8', borderRadius: 12, border: '1px solid #E2DDD6', padding: '22px 26px' }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', marginBottom: 9 }}>{faq.q}</p>
                  <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ background: '#1B4332', borderRadius: 16, padding: '32px', textAlign: 'center', marginTop: 28 }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Still have questions?</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.60)', marginBottom: 20 }}>Our experts are happy to talk through your specific situation — no commitment needed.</p>
              <a href="mailto:feasibility@green.earth" className="btn-amber" style={{ fontSize: 14 }}>Get in touch →</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
