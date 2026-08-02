import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Call — Submit Your Carbon Project to Green Earth',
  description: 'Green Earth is actively seeking carbon projects across all types and geographies. Submit your project through Feasibility.Earth — free, no commitment, 5 business days.',
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

function Check({ size = 16, color = '#40916C' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}

const WHAT_WE_LOOK_FOR = [
  { title: 'Project type', body: 'REDD+, ARR, improved cookstoves, blue carbon, soil carbon, improved forest management. All VCS/Gold Standard/Plan Vivo eligible methodologies.' },
  { title: 'Geography', body: 'Global. We have active pipelines in Sub-Saharan Africa, Southeast Asia, and Latin America, but we evaluate projects anywhere.' },
  { title: 'Scale', body: 'Minimum 500 hectares for land-based projects. Cookstove and technology projects evaluated by household or unit count.' },
  { title: 'Stage', body: 'Pre-feasibility is enough. You do not need a PDD or a registered project. A land parcel and a project type is sufficient to start.' },
  { title: 'Your role', body: 'Developer, landowner, investor, aggregator, DFI, or community — we work with any counterparty who controls access to a project.' },
]

const WHAT_HAPPENS_NEXT = [
  { step: '01', title: 'Submit via Feasibility.Earth', body: 'Run your project through our assessment platform. It is free. You get a 70+ page prefeasibility study within 5 business days. Keep it regardless of what we decide.' },
  { step: '02', title: 'We review your results', body: 'Our project team reviews the feasibility output. We assess partnership fit, development path, and commercial terms — usually within one week of receiving the report.' },
  { step: '03', title: 'We reach out directly', body: 'If the project meets our criteria, we contact you to discuss the next stage: a full feasibility study, PDD development, or a direct development partnership.' },
  { step: '04', title: 'Partnership terms', body: 'We structure each engagement differently — co-development, offtake, equity, or a simple service contract. We adapt to what makes sense for the project.' },
]

const SECTORS = ['REDD+', 'ARR', 'Cookstoves', 'Blue Carbon', 'Soil Carbon', 'IFM', 'Biochar', 'Agroforestry', 'Peatland', 'Mangrove']

export default function OpenCallPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        {/* ── HERO ── */}
        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 60%, #2D6A4F 100%)', padding: '96px 0 80px', position: 'relative', overflow: 'hidden' }}>
          {/* Background texture dots */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

          <div className="fe-wrap" style={{ position: 'relative' }}>
            <div className="fe-2col" style={{ alignItems: 'center', gap: 64 }}>
              <div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
                  <span className="fe-badge" style={{ background: 'rgba(216,243,220,0.15)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.18)' }}>
                    Open Call — Green Earth Group
                  </span>
                  <span className="fe-badge" style={{ background: 'rgba(244,196,48,0.18)', color: '#F4C430', border: '1px solid rgba(244,196,48,0.3)' }}>
                    Free to submit
                  </span>
                </div>
                <h1 className="font-display" style={{ fontSize: 'clamp(34px,5.5vw,60px)', fontWeight: 700, color: '#fff', lineHeight: 1.08, marginBottom: 24, letterSpacing: '-0.5px' }}>
                  Green Earth is<br />open for projects.
                </h1>
                <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
                  No gatekeeping, no formal RFP process. If you have a land parcel, a project type, and a counterparty — submit it. We evaluate every project that comes through Feasibility.Earth and reach out if it fits.
                </p>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href="https://app.feasibility.earth" target="_blank" className="btn-amber" style={{ fontSize: 16, padding: '15px 32px' }}>
                    Submit your project — it is free <Arrow size={16} color="#1A1A18" />
                  </Link>
                </div>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.60)', marginTop: 14, letterSpacing: '0.2px' }}>
                  70+ page prefeasibility report · 5 business days · No commitment required
                </p>
              </div>

              {/* Right: sector grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {SECTORS.map(s => (
                  <div key={s} style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#40916C', flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{s}</span>
                  </div>
                ))}
                <div style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(244,196,48,0.12)', border: '1px solid rgba(244,196,48,0.25)', display: 'flex', alignItems: 'center', gap: 8, gridColumn: 'span 2' }}>
                  <span style={{ fontSize: 13, color: '#F4C430', fontWeight: 600 }}>+ all other eligible methodologies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT THIS IS ── */}
        <section style={{ background: '#fff', padding: '72px 0', borderBottom: '1px solid #E8E4DF' }}>
          <div className="fe-wrap" style={{ maxWidth: 860 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, background: '#E8E4DF', borderRadius: 16, overflow: 'hidden', border: '1px solid #E8E4DF' }}>
              {[
                { label: 'Not a formal RFP', sub: 'No RFP document, no procurement committee, no six-month response cycle.' },
                { label: 'Open to all project types', sub: 'If the methodology exists and the land is real, submit it. We will tell you if it does not fit.' },
                { label: 'Free assessment included', sub: 'Every submission goes through Feasibility.Earth at no cost. You keep the report.' },
                { label: 'Direct response', sub: 'Our project team reviews and contacts you personally — not a form auto-reply.' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#fff', padding: '28px 24px' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <Check size={16} />
                  </div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontSize: 13, color: '#5C5C58', lineHeight: 1.7 }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE LOOK FOR ── */}
        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap">
            <div className="fe-2col" style={{ alignItems: 'flex-start' }}>
              <div className="fe-sticky-left">
                <h2 className="font-display" style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.2, marginBottom: 16 }}>
                  What we look for.
                </h2>
                <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.85, marginBottom: 24 }}>
                  We do not filter projects before assessment. Submit what you have — the feasibility study will surface what is viable and what is not. We review the results and take it from there.
                </p>
                <p style={{ fontSize: 13, color: '#9CA3AF', lineHeight: 1.7 }}>
                  If you are unsure whether your project qualifies, submit it anyway. We have seen projects succeed that looked marginal on paper, and fail that looked strong. The data tells a different story than the pitch.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {WHAT_WE_LOOK_FOR.map((item, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: 14, border: '1px solid #E2DDD6', padding: '22px 24px', display: 'flex', gap: 16 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 7, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <Check size={14} />
                    </div>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', marginBottom: 5 }}>{item.title}</p>
                      <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.75 }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="fe-section" style={{ background: '#fff', borderTop: '1px solid #E8E4DF' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 56px' }}>
              <h2 className="font-display" style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.2 }}>
                What happens when you submit.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {WHAT_HAPPENS_NEXT.map((item, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  {i < WHAT_HAPPENS_NEXT.length - 1 && (
                    <div style={{ position: 'absolute', top: 22, left: 'calc(50% + 28px)', right: '-10px', height: 1, background: '#E2DDD6', zIndex: 0 }} className="hidden md:block" />
                  )}
                  <div style={{ background: '#FAFAF8', borderRadius: 16, border: '1px solid #E2DDD6', padding: '28px 24px', position: 'relative', zIndex: 1 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: '#1B4332', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: '0.5px' }}>{item.step}</span>
                    </div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', marginBottom: 10, lineHeight: 1.4 }}>{item.title}</p>
                    <p style={{ fontSize: 13, color: '#5C5C58', lineHeight: 1.75 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTNERSHIP MODEL ── */}
        <section className="fe-section" style={{ background: 'linear-gradient(160deg, #060E08 0%, #1B4332 100%)' }}>
          <div className="fe-wrap" style={{ maxWidth: 800 }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 className="font-display" style={{ fontSize: 'clamp(24px,4vw,42px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 18 }}>
                What Green Earth brings.
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 580, margin: '0 auto' }}>
                We are not a consulting firm charging you for every deliverable. We structure deals where we share in the outcome — which means we only commit to projects we believe in.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 48 }}>
              {[
                { title: 'Prefeasibility', body: 'Free through Feasibility.Earth. You walk away with a 70+ page expert report regardless of what we decide.' },
                { title: 'Full feasibility', body: 'We take this on jointly. We fund the full study against a future revenue share or equity position.' },
                { title: 'PDD development', body: 'If the project passes full feasibility, we can co-develop the Project Design Document under VCS, GS, or Plan Vivo.' },
                { title: 'Carbon offtake', body: 'For projects we develop, we structure offtake arrangements directly — connecting your credits to our buyer network.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.12)', padding: '24px 20px' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#40916C', marginBottom: 14 }} />
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>{item.body}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="https://app.feasibility.earth" target="_blank" className="btn-amber" style={{ fontSize: 16, padding: '16px 36px' }}>
                Start your free assessment <Arrow size={16} color="#1A1A18" />
              </Link>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.60)', marginTop: 16 }}>
                No sales call required to start. Submit the project, get the report, then talk.
              </p>
            </div>
          </div>
        </section>

        {/* ── CONTEXT / ABOUT GE ── */}
        <section className="fe-section" style={{ background: '#FAFAF8', borderTop: '1px solid #E8E4DF' }}>
          <div className="fe-wrap" style={{ maxWidth: 800 }}>
            <div className="fe-2col-equal" style={{ alignItems: 'flex-start', gap: 56 }}>
              <div>
                <h2 className="font-display" style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.25, marginBottom: 16 }}>
                  Green Earth Group N.V.
                </h2>
                <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.85, marginBottom: 16 }}>
                  Green Earth is a carbon project development firm operating across Sub-Saharan Africa, Southeast Asia, and Latin America. We develop, verify, and bring to market voluntary carbon credits under VCS, Gold Standard, and Plan Vivo.
                </p>
                <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.85, marginBottom: 24 }}>
                  Feasibility.Earth is our internal assessment platform, now open to external project developers. It gives any project developer access to the same rigorous prefeasibility methodology we apply to our own pipeline.
                </p>
                <Link href="https://green.earth" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#1B4332', fontWeight: 700, textDecoration: 'none' }}>
                  Visit green.earth <Arrow size={14} color="#1B4332" />
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #E2DDD6', padding: '20px 22px' }}>
                  <p style={{ fontSize: 18, fontWeight: 800, color: '#1B4332', marginBottom: 4 }}>Worldwide active</p>
                  <p style={{ fontSize: 13, color: '#5C5C58' }}>Projects across Sub-Saharan Africa, Southeast Asia, Latin America, and beyond — our experts know the geographies they assess</p>
                </div>
                <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #E2DDD6', padding: '20px 22px' }}>
                  <p style={{ fontSize: 18, fontWeight: 800, color: '#1B4332', marginBottom: 4 }}>Deep expert team</p>
                  <p style={{ fontSize: 13, color: '#5C5C58' }}>Satellite analysts, carbon economists, and field practitioners — not generalist consultants</p>
                </div>
                <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #E2DDD6', padding: '20px 22px' }}>
                  <p style={{ fontSize: 18, fontWeight: 800, color: '#1B4332', marginBottom: 4 }}>VCS · GS · PV</p>
                  <p style={{ fontSize: 13, color: '#5C5C58' }}>Standards our team has active experience developing against</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ background: '#fff', padding: '64px 0', borderTop: '1px solid #E8E4DF' }}>
          <div className="fe-wrap" style={{ maxWidth: 640, textAlign: 'center' }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.15, marginBottom: 18 }}>
              Have a project? Submit it.
            </h2>
            <p style={{ fontSize: 17, color: '#5C5C58', lineHeight: 1.75, marginBottom: 36 }}>
              The assessment is free. You get a 70+ page expert report within 5 business days. If it is a fit for us, we will be in touch.
            </p>
            <Link href="https://app.feasibility.earth" target="_blank" className="btn-primary" style={{ fontSize: 16, padding: '16px 36px' }}>
              Start free assessment <Arrow size={16} color="#fff" />
            </Link>
            <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 16 }}>
              Questions? <Link href="/contact" style={{ color: '#1B4332', fontWeight: 600, textDecoration: 'none' }}>Contact our project team</Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
