import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

function IconCheck({ color = '#1B4332' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}
function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  )
}
function IconUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  )
}
function IconSatellite() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  )
}
function IconDocument() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}

const INCLUDED = [
  { Icon: IconCalendar,  text: 'Full feasibility report in 5 business days' },
  { Icon: IconUser,      text: 'Dedicated expert assigned to your project' },
  { Icon: IconSatellite, text: 'Satellite land analysis across all key criteria' },
  { Icon: IconDocument,  text: 'Certification pathway recommendation (Verra VCS, Gold Standard or Plan Vivo)' },
  { Icon: IconPhone,     text: 'Personal debrief call upon report delivery' },
  { Icon: IconDocument,  text: 'CO₂ credit potential estimate with supporting methodology' },
  { Icon: IconShield,    text: 'One revision round included' },
  { Icon: IconShield,    text: '50% refund if land does not qualify' },
]

const FAQS = [
  { q: 'Do I need technical knowledge to get started?', a: 'Not at all. You provide basic information about your land — location, size, and project intent. Our experts ask the right follow-up questions and manage the technical assessment entirely.' },
  { q: 'What is included in the 5-business-day timeline?', a: 'From the moment we receive your completed intake submission, we deliver a full feasibility report within five business days. This includes satellite analysis, expert review, and scheduling your personal debrief call.' },
  { q: 'What if my land does not qualify?', a: 'If the assessment determines your land does not meet the criteria for a viable carbon project, we refund 50% of the study fee and provide a clear, written explanation of the specific barriers identified.' },
  { q: 'How accurate is the carbon credit estimate?', a: 'Our estimates are calibrated against the real projects Green Earth Group has developed and certified. We include a range with supporting methodology notes, structured for use in subsequent certification documents.' },
  { q: 'Can the report be used to proceed with certification?', a: 'The report is designed to serve as the technical foundation for a full project design document. It does not replace formal validation, but substantially reduces the time and cost required to reach that stage.' },
  { q: 'What minimum land size is required?', a: 'We assess projects from 50 hectares upward. Smaller parcels may qualify in certain circumstances — contact us to discuss your situation.' },
  { q: 'Which geographies do you cover?', a: 'We work globally, with particular expertise in Sub-Saharan Africa (Nigeria, Uganda, Kenya, Cameroon) and Central Asia (Kazakhstan). We assess land anywhere with reliable satellite coverage.' },
]

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #1B4332 0%, #2D6A4F 100%)', padding: '88px 0 64px', textAlign: 'center' }}>
          <div className="fe-wrap">
            <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.15)', color: '#D8F3DC', border: '1px solid rgba(255,255,255,0.18)', marginBottom: 22 }}>Pricing</div>
            <h1 className="font-display" style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
              One study. One price.<br />One expert on your project.
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.68)', maxWidth: 480, margin: '0 auto', lineHeight: 1.8 }}>
              $7,500 flat fee. A full feasibility study guided by practitioners with direct project experience, delivered in five business days.
            </p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap" style={{ maxWidth: 880 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="fe-card">
              <div style={{ background: '#1B4332', padding: '52px 44px', borderRadius: '16px 0 0 16px' }}>
                <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 11, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase' as const, marginBottom: 20 }}>Feasibility Study</p>
                <div className="font-display" style={{ fontSize: 68, fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: 6 }}>$7,500</div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 36 }}>flat fee · no hidden costs</p>
                <Link href="https://app.feasibility.earth" target="_blank" className="btn-amber" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  Start your study
                </Link>
                <p style={{ marginTop: 14, fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center' as const }}>50% refund if land does not qualify</p>
              </div>
              <div style={{ padding: '52px 44px' }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#5C5C58', letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: 28 }}>Everything included</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {INCLUDED.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: '#EBF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <item.Icon />
                      </div>
                      <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.55, paddingTop: 6 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop: 18, padding: '20px 26px', background: '#F5ECD7', borderRadius: 12, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: '#E8D5B0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B4226" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <p style={{ fontSize: 14, color: '#6B4226', lineHeight: 1.75 }}>
                A traditional feasibility study from a large consultancy typically costs <strong>$25,000–$75,000 and takes 3–6 months</strong>. We deliver equivalent rigour — grounded in live project experience across four countries — in five business days.
              </p>
            </div>
          </div>
        </section>

        <section className="fe-section-sm" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 720 }}>
            <h2 className="font-display" style={{ fontSize: 32, fontWeight: 700, color: '#1A1A18', marginBottom: 36, textAlign: 'center' }}>
              Common questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ background: '#FAFAF8', borderRadius: 12, border: '1px solid #E2DDD6', padding: '22px 26px' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10 }}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <IconCheck color="#1B4332" />
                    </div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18' }}>{faq.q}</p>
                  </div>
                  <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.8, paddingLeft: 34 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ background: '#1B4332', borderRadius: 16, padding: '34px', textAlign: 'center', marginTop: 28 }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Have a question we have not answered?</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 22, lineHeight: 1.7 }}>Our experts are available to discuss your specific situation — no commitment required.</p>
              <a href="mailto:feasibility@green.earth" className="btn-amber" style={{ fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
