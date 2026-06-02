import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Feasibility.Earth',
  description: 'Tell us about your carbon project. We respond within one business day.',
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const WHAT_TO_INCLUDE = [
  'Location of the land (country and region)',
  'Approximate size in hectares',
  'Project type you have in mind (or "unsure")',
  'Your role — developer, investor, landowner, aggregator',
  'Number of projects in your pipeline (if more than one)',
]

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '80px 0 64px' }}>
          <div className="fe-wrap">
            <div style={{ maxWidth: 640 }}>
              <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.10)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.14)', marginBottom: 24 }}>
                Get in touch
              </div>
              <h1 className="font-display" style={{ fontSize: 'clamp(30px,5vw,50px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
                Tell us about your project.
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.62)', lineHeight: 1.8 }}>
                We respond within one business day. If your project is suitable for a feasibility assessment, we will confirm which service applies and what happens next.
              </p>
            </div>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap" style={{ maxWidth: 860 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'flex-start' }}>

              {/* Form side */}
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 8 }}>Start the conversation</h2>
                <p style={{ fontSize: 14, color: '#5C5C58', marginBottom: 28, lineHeight: 1.7 }}>
                  This form goes directly to our feasibility team. Not a sales queue.
                </p>

                {/* HubSpot form embed — replace with real HubSpot form ID when configured */}
                <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E2DDD6', padding: '32px 28px' }}>
                  <form style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.3px' }}>First name</label>
                        <input type="text" placeholder="Your first name" style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #D1D5DB', fontSize: 14, color: '#1A1A18', outline: 'none', boxSizing: 'border-box' as const }} />
                      </div>
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.3px' }}>Last name</label>
                        <input type="text" placeholder="Your last name" style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #D1D5DB', fontSize: 14, color: '#1A1A18', outline: 'none', boxSizing: 'border-box' as const }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.3px' }}>Work email</label>
                      <input type="email" placeholder="you@organisation.com" style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #D1D5DB', fontSize: 14, color: '#1A1A18', outline: 'none', boxSizing: 'border-box' as const }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.3px' }}>Organisation</label>
                      <input type="text" placeholder="Company or fund name" style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #D1D5DB', fontSize: 14, color: '#1A1A18', outline: 'none', boxSizing: 'border-box' as const }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.3px' }}>Your role</label>
                      <select style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #D1D5DB', fontSize: 14, color: '#1A1A18', outline: 'none', background: '#fff', boxSizing: 'border-box' as const }}>
                        <option value="">Select your role</option>
                        <option value="developer">Project developer</option>
                        <option value="investor">Investor / fund manager</option>
                        <option value="landowner">Landowner</option>
                        <option value="aggregator">Carbon aggregator</option>
                        <option value="dfi">Development finance institution</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.3px' }}>Tell us about your project</label>
                      <textarea placeholder="Location, land size, project type, number of projects — whatever you know at this stage" rows={5} style={{ width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #D1D5DB', fontSize: 14, color: '#1A1A18', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' as const }} />
                    </div>
                    <button type="submit" className="btn-primary" style={{ justifyContent: 'center', display: 'flex', gap: 8, fontSize: 15, padding: '14px 0' }}>
                      Send — we will respond within one business day <Arrow size={15} color="#fff" />
                    </button>
                    <p style={{ fontSize: 11, color: '#9CA3AF', textAlign: 'center' as const, lineHeight: 1.6 }}>
                      This goes directly to our feasibility team. We do not pass your details to third parties.
                    </p>
                  </form>
                </div>
              </div>

              {/* Info side */}
              <div>
                <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E2DDD6', padding: '28px 24px', marginBottom: 16 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', marginBottom: 14 }}>What to include</h3>
                  <p style={{ fontSize: 13, color: '#5C5C58', marginBottom: 14, lineHeight: 1.7 }}>
                    The more context you give us, the faster we can assess fit. At minimum:
                  </p>
                  {WHAT_TO_INCLUDE.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginBottom: 10 }}>
                      <div style={{ width: 18, height: 18, borderRadius: 5, background: '#EBF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#1B4332', borderRadius: 16, padding: '24px 24px', marginBottom: 16 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Evaluating a portfolio?</h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 14 }}>
                    If you are screening multiple projects — whether 5 or 50 — we work with institutional buyers to structure batch assessment programmes. Mention the portfolio size in your message and we will outline how that works.
                  </p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.40)' }}>Typically 10+ projects</p>
                </div>

                <div style={{ padding: '20px 22px', borderRadius: 14, background: '#F5ECD7', border: '1px solid #E2DDD6' }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#1A1A18', marginBottom: 6 }}>Direct email</p>
                  <a href="mailto:feasibility@green.earth" style={{ fontSize: 14, color: '#1B4332', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                    feasibility@green.earth <Arrow size={13} color="#1B4332" />
                  </a>
                  <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 8 }}>Responded to by the feasibility team within one business day</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
