import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const HERO_IMG     = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_174959_337ef494-c1ed-43ed-8479-6f10ccf3680e.png'
const SAT_IMG      = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175009_19fc6154-aab5-4955-b5dc-d16dcac477c1.png'
const REFOREST_IMG = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175000_427a09a9-a320-4d6c-81ef-2c43cd4b7f9e.png'
const AGROFOR_IMG  = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175005_e7dfbf54-39e5-4de4-b11d-58227004bf11.png'
const COOK_IMG     = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175014_477afb67-83bf-496e-9cc3-9039d3d6b61a.png'
const KAZ_IMG      = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175019_8bea7c7e-6b88-419e-ab70-3a36a56c747e.png'

function ArrowRight({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}
function CheckIcon({ color = '#1B4332', size = 15 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}

const STAGES = [
  {
    num: '01',
    tag: 'Pre-Feasibility',
    price: '$500',
    headline: 'Is your land eligible?',
    sub: 'A rapid eligibility screen — before you commit to anything.',
    body: 'We run a satellite-based eligibility check on your land and give you a clear answer: does this location have the potential for a certified carbon project? You get a written summary with the key findings and a recommendation on whether to proceed.',
    timeline: '2–3 business days',
    deliverable: 'Eligibility summary report',
    includes: [
      'Satellite screening of your land parcel',
      'Assessment against Verra VCS, Gold Standard and Plan Vivo criteria',
      'Preliminary CO₂ potential estimate',
      'Clear recommendation: proceed or not',
    ],
    cta: 'Start eligibility check',
    ctaHref: '/pricing#pre-feasibility',
    accent: '#E8F5EE',
    accentBorder: '#B8DECA',
    accentText: '#1B4332',
    img: SAT_IMG,
  },
  {
    num: '02',
    tag: 'Full Feasibility Study',
    price: '$7,500',
    headline: 'Take it to the bank.',
    sub: 'A complete, certification-ready feasibility study.',
    body: 'This is the report that matters. A full in-depth analysis of your project — land history, carbon potential, methodology, certification pathway, and financial projections. Structured to satisfy investors, development finance institutions, and certification bodies.',
    timeline: '5 business days',
    deliverable: 'Full bankable feasibility report',
    includes: [
      'Complete satellite land analysis',
      'Carbon credit potential with supporting methodology',
      'Certification pathway recommendation',
      'Financial projections and estimated credit value',
      'Personal debrief call with your expert',
      'One revision round included',
    ],
    cta: 'Start full feasibility study',
    ctaHref: '/pricing#feasibility',
    accent: '#1B4332',
    accentBorder: '#1B4332',
    accentText: '#fff',
    highlight: true,
    img: AGROFOR_IMG,
  },
  {
    num: '03',
    tag: 'Project Development',
    price: 'By arrangement',
    headline: 'We become your partner.',
    sub: 'Full development, from PDD to first credit issuance — and beyond.',
    body: 'For projects that pass the full feasibility study, we offer to work with you through the entire development process. We bring technical, commercial, and capital resources to the table. This is not available without a completed feasibility study.',
    timeline: '12–36 months',
    deliverable: 'End-to-end project partnership',
    includes: [
      'Project Design Document (PDD) development',
      'Certification and registration support',
      'Carbon credit marketing and sales',
      'Technical implementation and field supervision',
      'Ongoing monitoring and reporting',
      'Capital co-investment for qualifying projects',
    ],
    cta: 'Learn about project development',
    ctaHref: '/pricing#development',
    accent: '#F5ECD7',
    accentBorder: '#D4A017',
    accentText: '#1A1A18',
    img: REFOREST_IMG,
  },
]

const GEG_PROJECTS = [
  { name: 'Sauki Clean Cookstoves',        country: 'Nigeria',    credits: '60,000', img: COOK_IMG,     cert: 'Gold Standard' },
  { name: 'Bulindi Agroforestry & Chimps', country: 'Uganda',     credits: '44,000', img: AGROFOR_IMG,  cert: 'Gold Standard' },
  { name: 'Aral Sea Afforestation',        country: 'Kazakhstan', credits: '31,250', img: KAZ_IMG,      cert: 'Verra VCS' },
  { name: 'Greenzone Reforestation',       country: 'Cameroon',   credits: '13,750', img: REFOREST_IMG, cert: 'Verra VCS' },
]

const USE_CASES = [
  { title: 'Reforestation',  sub: 'Tree planting on degraded land',  img: REFOREST_IMG, href: '/use-cases#reforestation' },
  { title: 'Agroforestry',   sub: 'Trees integrated with farming',   img: AGROFOR_IMG,  href: '/use-cases#agroforestry' },
  { title: 'ARR Projects',   sub: 'Afforestation and revegetation',  img: KAZ_IMG,      href: '/use-cases#arr' },
  { title: 'Cookstoves',     sub: 'Clean cooking technology',        img: COOK_IMG,     href: '/use-cases#cookstoves' },
]

export default function HomePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        {/* HERO — no GEG badge here */}
        <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src={HERO_IMG} alt="Aerial view of African landscape" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,30,18,0.93) 0%, rgba(27,67,50,0.78) 55%, rgba(27,67,50,0.25) 100%)' }} />
          </div>

          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1, padding: '96px 24px 140px' }}>
            <div style={{ maxWidth: 700 }}>
              <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.15)', color: '#D8F3DC', border: '1px solid rgba(255,255,255,0.18)', marginBottom: 28 }}>
                Carbon Project Feasibility Platform
              </div>

              <h1 className="font-display" style={{ fontSize: 'clamp(38px, 5.5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.08, marginBottom: 24 }}>
                From land to<br />bankable carbon project.
              </h1>

              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 14, maxWidth: 580 }}>
                Start with a $500 eligibility check. Proceed to a full $7,500 feasibility study that you can take to investors and certification bodies. For the right projects, we go further — co-developing and co-investing alongside you.
              </p>

              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 36, maxWidth: 560 }}>
                Built by the team that has developed 149,000 verified carbon credits across Africa and Central Asia.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/pricing#pre-feasibility" className="btn-amber" style={{ fontSize: 15, padding: '14px 28px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  Start for $500 — eligibility check <ArrowRight size={15} color="#1A1A18" />
                </Link>
                <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 24px', background: 'rgba(255,255,255,0.09)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.20)' }}>
                  See all options
                </Link>
              </div>

              <p style={{ marginTop: 20, fontSize: 12, color: 'rgba(255,255,255,0.30)', letterSpacing: '0.2px' }}>
                Verra VCS · Gold Standard · Plan Vivo · 50% refund if land does not qualify
              </p>
            </div>
          </div>

          {/* Stats bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1, background: 'rgba(10,30,18,0.92)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="fe-wrap">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', padding: '20px 0' }}>
                {[
                  { value: '$500',           sub: 'Eligibility check — start here' },
                  { value: '$7,500',          sub: 'Full bankable feasibility study' },
                  { value: 'Full partnership', sub: 'For qualifying projects — we invest too' },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none', padding: '0 16px' }}>
                    <div className="font-display" style={{ fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 4 }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.2px' }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* THREE STAGES — the core of the page */}
        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 16 }}>How it works</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, color: '#1A1A18', marginBottom: 14 }}>
                Three stages.<br />One clear path.
              </h2>
              <p style={{ fontSize: 16, color: '#5C5C58', maxWidth: 500, margin: '0 auto', lineHeight: 1.8 }}>
                Begin with a low-cost eligibility screen. If the project has potential, commission a full bankable study. For the strongest projects, we become your development partner — and investor.
              </p>
            </div>

            {/* Stage cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {STAGES.map((stage, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: 20, overflow: 'hidden', border: `1.5px solid ${stage.highlight ? '#1B4332' : stage.accentBorder}`, boxShadow: stage.highlight ? '0 12px 40px rgba(27,67,50,0.18)' : '0 2px 12px rgba(0,0,0,0.06)', position: 'relative' as const }}>
                  {stage.highlight && (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1B4332, #40916C)', zIndex: 1 }} />
                  )}

                  {/* Left: content */}
                  <div style={{ padding: '44px 40px', background: stage.highlight ? '#1B4332' : '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: stage.highlight ? 'rgba(255,255,255,0.12)' : stage.accent, border: `1px solid ${stage.highlight ? 'rgba(255,255,255,0.2)' : stage.accentBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: 13, fontWeight: 800, color: stage.highlight ? '#fff' : '#1B4332' }}>{stage.num}</span>
                      </div>
                      <div>
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' as const, color: stage.highlight ? 'rgba(255,255,255,0.45)' : '#9CA3AF' }}>{stage.tag}</span>
                      </div>
                      <div style={{ marginLeft: 'auto' }}>
                        <span className="font-display" style={{ fontSize: 26, fontWeight: 700, color: stage.highlight ? '#F4C430' : '#1B4332' }}>{stage.price}</span>
                      </div>
                    </div>

                    <h3 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: stage.highlight ? '#fff' : '#1A1A18', marginBottom: 6, lineHeight: 1.15 }}>{stage.headline}</h3>
                    <p style={{ fontSize: 14, fontWeight: 600, color: stage.highlight ? 'rgba(255,255,255,0.55)' : '#40916C', marginBottom: 16 }}>{stage.sub}</p>
                    <p style={{ fontSize: 14, color: stage.highlight ? 'rgba(255,255,255,0.68)' : '#5C5C58', lineHeight: 1.8, marginBottom: 24 }}>{stage.body}</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 28 }}>
                      {stage.includes.map((item, j) => (
                        <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <div style={{ width: 20, height: 20, borderRadius: 6, background: stage.highlight ? 'rgba(255,255,255,0.10)' : '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                            <CheckIcon color={stage.highlight ? '#86C89C' : '#1B4332'} size={11} />
                          </div>
                          <span style={{ fontSize: 13, color: stage.highlight ? 'rgba(255,255,255,0.72)' : '#374151', lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <Link href={stage.ctaHref} className={stage.highlight ? 'btn-amber' : 'btn-primary'} style={{ fontSize: 14, padding: '11px 22px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                        {stage.cta} <ArrowRight size={14} color={stage.highlight ? '#1A1A18' : '#fff'} />
                      </Link>
                      <span style={{ fontSize: 12, color: stage.highlight ? 'rgba(255,255,255,0.35)' : '#9CA3AF' }}>{stage.timeline}</span>
                    </div>
                  </div>

                  {/* Right: image */}
                  <div style={{ position: 'relative', minHeight: 300 }}>
                    <Image src={stage.img} alt={stage.headline} fill style={{ objectFit: 'cover' }} />
                    {!stage.highlight && (
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(27,67,50,0.08)' }} />
                    )}
                    {stage.highlight && (
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,30,18,0.3)' }} />
                    )}
                    {/* Deliverable badge */}
                    <div style={{ position: 'absolute', bottom: 20, left: 20, padding: '8px 14px', background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)' }}>
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' as const, marginBottom: 2 }}>You receive</p>
                      <p style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>{stage.deliverable}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR EXPERIENCE */}
        <section className="fe-section" style={{ background: '#1B4332', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', right: -120, bottom: -100, width: 480, height: 480, borderRadius: '50%', background: 'rgba(255,255,255,0.015)', pointerEvents: 'none' }} />
          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <div>
                <div className="fe-badge" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.14)', marginBottom: 24 }}>
                  Built from real projects
                </div>
                <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 22 }}>
                  We have developed some<br />of the world&apos;s most complex<br />nature-based projects.
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 16 }}>
                  Cookstoves in rural Nigeria. Community agroforestry alongside chimpanzee habitats in Uganda. Large-scale afforestation on the former bed of the Aral Sea in Kazakhstan. Congo Basin reforestation in Cameroon.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 32 }}>
                  When we assess your project, the people doing the analysis are the same people who designed, certified, and operate these projects. That experience is what you are paying for.
                </p>
                <Link href="/use-cases" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#86C89C', fontWeight: 600, textDecoration: 'none' }}>
                  View our project portfolio <ArrowRight size={14} color="#86C89C" />
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {GEG_PROJECTS.map((p, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', borderRadius: 14, overflow: 'hidden', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)' }}>
                    <div style={{ position: 'relative', minHeight: 78 }}>
                      <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '14px 18px' }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{p.name}</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', marginBottom: 8 }}>{p.country}</p>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#86C89C' }}>{p.credits} credits/yr</span>
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', flexShrink: 0 }} />
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.32)' }}>{p.cert}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 14 }}>Project types</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#1A1A18' }}>
                Which type of project<br />are you considering?
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 16 }}>
              {USE_CASES.map((uc, i) => (
                <Link key={i} href={uc.href} className="fe-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ position: 'relative', height: 200 }}>
                    <Image src={uc.img} alt={uc.title} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(10,30,18,0.84) 0%, transparent 55%)' }} />
                    <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{uc.title}</h3>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.58)' }}>{uc.sub}</p>
                    </div>
                  </div>
                  <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 13, color: '#5C5C58', fontWeight: 500 }}>Learn more</span>
                    <ArrowRight size={14} color="#1B4332" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(150deg, #0A1E11 0%, #1B4332 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -100, top: -80, width: 440, height: 440, borderRadius: '50%', background: 'rgba(255,255,255,0.02)', pointerEvents: 'none' }} />
          <div className="fe-wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: 20 }}>
              Start with $500.<br />Find out what your land could become.
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.58)', marginBottom: 42, maxWidth: 520, margin: '0 auto 42px', lineHeight: 1.8 }}>
              An eligibility check takes 2–3 business days and tells you whether there is a real project here. If there is, a full feasibility study gives you something you can take to investors and certification bodies. And for the right projects, we go all the way.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/pricing#pre-feasibility" className="btn-amber" style={{ fontSize: 16, padding: '16px 36px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                Start eligibility check — $500 <ArrowRight size={16} color="#1A1A18" />
              </Link>
              <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 28px', background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)' }}>
                View all options
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
