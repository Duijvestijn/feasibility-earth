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
function CheckIcon({ color = '#1B4332', size = 14 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}

const STAGES = [
  {
    num: '01',
    label: 'Eligibility Assessment',
    headline: 'Understand your project\'s potential.',
    body: 'Before committing resources to full project development, you need to know whether your land qualifies. We run a rigorous satellite-based eligibility screen — assessing land history, certification criteria, and preliminary carbon potential — and give you a clear, expert-reviewed assessment.',
    outcome: 'A written eligibility assessment with a clear recommendation on how to proceed.',
    img: SAT_IMG,
  },
  {
    num: '02',
    label: 'Full Feasibility Study',
    headline: 'A report that stands up to scrutiny.',
    body: 'Our full feasibility study is structured to meet the standards expected by investors, development finance institutions, and international certification bodies. It is a complete technical and commercial assessment — grounded in the same methodology we use for our own projects.',
    outcome: 'A bankable feasibility report with carbon potential, certification pathway, and financial projections.',
    img: AGROFOR_IMG,
    highlight: true,
  },
  {
    num: '03',
    label: 'Project Development',
    headline: 'We become your partner.',
    body: 'For projects that demonstrate strong fundamentals, we offer to work alongside you — or take the lead — through the full development cycle. This includes PDD development, certification, credit marketing, technical implementation, and for qualifying projects, capital co-investment. We only engage at this stage following a completed feasibility study.',
    outcome: 'End-to-end project development. For the right projects, we also invest alongside you.',
    img: REFOREST_IMG,
  },
]

const GEG_PROJECTS = [
  { name: 'Sauki Clean Cookstoves',        country: 'Nigeria',    credits: '60,000', img: COOK_IMG },
  { name: 'Bulindi Agroforestry & Chimps', country: 'Uganda',     credits: '44,000', img: AGROFOR_IMG },
  { name: 'Aral Sea Afforestation',        country: 'Kazakhstan', credits: '31,250', img: KAZ_IMG },
  { name: 'Greenzone Reforestation',       country: 'Cameroon',   credits: '13,750', img: REFOREST_IMG },
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

        {/* HERO */}
        <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src={HERO_IMG} alt="Nature-based carbon project landscape" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,24,14,0.92) 0%, rgba(27,67,50,0.78) 55%, rgba(27,67,50,0.22) 100%)' }} />
          </div>

          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1, padding: '100px 24px 100px' }}>
            <div style={{ maxWidth: 680 }}>
              <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.12)', color: '#D8F3DC', border: '1px solid rgba(255,255,255,0.16)', marginBottom: 32 }}>
                Carbon Project Feasibility
              </div>

              <h1 className="font-display" style={{ fontSize: 'clamp(40px, 5.5vw, 66px)', fontWeight: 700, color: '#fff', lineHeight: 1.06, marginBottom: 28 }}>
                Know what your land<br />is capable of — before<br />
                <span style={{ color: '#86C89C' }}>you commit to anything.</span>
              </h1>

              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.70)', lineHeight: 1.85, marginBottom: 40, maxWidth: 560 }}>
                We assess the real potential of land for certified carbon projects — reforestation, agroforestry, ARR, and clean energy. Our team has developed these projects. That experience is what goes into every assessment.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/how-it-works" className="btn-primary" style={{ fontSize: 15, padding: '14px 28px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  How it works <ArrowRight size={15} color="#fff" />
                </Link>
                <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 24px', background: 'rgba(255,255,255,0.09)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.18)' }}>
                  View our services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO — three stages, outcome-first */}
        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'flex-start' }}>
              {/* Left: intro */}
              <div style={{ position: 'sticky', top: 100 }}>
                <div className="fe-badge fe-badge-green" style={{ marginBottom: 18 }}>What we do</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.2, marginBottom: 18 }}>
                  From first assessment to full project development.
                </h2>
                <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.85, marginBottom: 24 }}>
                  Three services, structured to match where you are in the process. Start with an eligibility assessment. Commission a full bankable study if the project has merit. For the strongest projects, we go further — developing and co-investing alongside you.
                </p>
                <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#1B4332', fontWeight: 700, textDecoration: 'none' }}>
                  See pricing and what is included <ArrowRight size={14} color="#1B4332" />
                </Link>
              </div>

              {/* Right: three stage cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {STAGES.map((stage, i) => (
                  <div key={i} style={{
                    borderRadius: 16,
                    border: stage.highlight ? '2px solid #1B4332' : '1px solid #E2DDD6',
                    overflow: 'hidden',
                    background: '#fff',
                    boxShadow: stage.highlight ? '0 8px 32px rgba(27,67,50,0.12)' : '0 1px 6px rgba(0,0,0,0.04)',
                  }}>
                    {/* Image strip */}
                    <div style={{ position: 'relative', height: 200 }}>
                      <Image src={stage.img} alt={stage.label} fill style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: stage.highlight ? 'rgba(10,30,18,0.55)' : 'rgba(27,67,50,0.45)' }} />
                      <div style={{ position: 'absolute', top: 18, left: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 9, background: stage.highlight ? '#1B4332' : 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>{stage.num}</span>
                        </div>
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.1px', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.75)' }}>{stage.label}</span>
                      </div>
                      <div style={{ position: 'absolute', bottom: 18, left: 20 }}>
                        <h3 className="font-display" style={{ fontSize: 24, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{stage.headline}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '26px 28px' }}>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.8, marginBottom: 20 }}>{stage.body}</p>
                      <div style={{ padding: '14px 16px', background: stage.highlight ? '#EBF5EE' : '#F9FAFB', borderRadius: 10, border: `1px solid ${stage.highlight ? '#C5E8D3' : '#E8E4DF'}`, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <div style={{ width: 20, height: 20, borderRadius: 6, background: stage.highlight ? '#D8F3DC' : '#ECEAE6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          <CheckIcon color="#1B4332" size={11} />
                        </div>
                        <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.6, fontWeight: 500 }}>{stage.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE — the credibility section */}
        <section className="fe-section" style={{ background: '#1B4332', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', right: -140, bottom: -120, width: 520, height: 520, borderRadius: '50%', background: 'rgba(255,255,255,0.015)', pointerEvents: 'none' }} />
          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <div>
                <div className="fe-badge" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.72)', border: '1px solid rgba(255,255,255,0.12)', marginBottom: 24 }}>
                  Our track record
                </div>
                <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 22 }}>
                  We do not only assess<br />these projects — we build them.
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.9, marginBottom: 16 }}>
                  The team behind Feasibility.Earth has developed nature-based carbon projects in four of the world&apos;s most demanding environments: rural Nigeria, Uganda&apos;s agroforestry zones, the dried bed of the Aral Sea in Kazakhstan, and the Congo Basin in Cameroon.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.9, marginBottom: 32 }}>
                  Our assessments are shaped by what we have seen succeed and fail in practice. When you commission a study, the people reviewing your land have been in the field.
                </p>
                <Link href="/use-cases" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#86C89C', fontWeight: 600, textDecoration: 'none' }}>
                  View our project portfolio <ArrowRight size={14} color="#86C89C" />
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {GEG_PROJECTS.map((p, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', borderRadius: 13, overflow: 'hidden', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ position: 'relative', minHeight: 76 }}>
                      <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '14px 18px' }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{p.name}</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.36)', marginBottom: 8 }}>{p.country}</p>
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#86C89C' }}>{p.credits} credits per year</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT TYPES */}
        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, alignItems: 'center' }}>
              <div>
                <div className="fe-badge fe-badge-green" style={{ marginBottom: 16 }}>Scope</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.2, marginBottom: 16 }}>
                  Four project categories.<br />All major certification standards.
                </h2>
                <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.85 }}>
                  We assess reforestation, agroforestry, ARR, and clean cookstove projects against Verra VCS, Gold Standard, and Plan Vivo criteria. Each project type has distinct methodology requirements — our team has direct experience with all of them.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {USE_CASES.map((uc, i) => (
                  <Link key={i} href={uc.href} className="fe-card" style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ position: 'relative', height: 165 }}>
                      <Image src={uc.img} alt={uc.title} fill style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(10,30,18,0.80) 0%, transparent 55%)' }} />
                      <div style={{ position: 'absolute', bottom: 14, left: 14 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{uc.title}</h3>
                        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>{uc.sub}</p>
                      </div>
                    </div>
                    <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 13, color: '#5C5C58' }}>Learn more</span>
                      <ArrowRight size={13} color="#1B4332" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA — outcome focused, price at the bottom */}
        <section style={{ background: 'linear-gradient(150deg, #0A1810 0%, #1B4332 100%)', padding: '104px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -100, top: -80, width: 420, height: 420, borderRadius: '50%', background: 'rgba(255,255,255,0.018)', pointerEvents: 'none' }} />
          <div className="fe-wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 22 }}>
              Understand your project&apos;s potential<br />before you commit to developing it.
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.58)', marginBottom: 44, maxWidth: 560, margin: '0 auto 44px', lineHeight: 1.85 }}>
              Begin with an eligibility assessment. If the land qualifies, commission a full feasibility study you can take to investors and certification bodies. For the projects that stand out, we go all the way.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/pricing" className="btn-amber" style={{ fontSize: 15, padding: '15px 32px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                View our services <ArrowRight size={15} color="#1A1A18" />
              </Link>
              <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 26px', background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.14)' }}>
                How it works
              </Link>
            </div>
            <p style={{ marginTop: 28, fontSize: 13, color: 'rgba(255,255,255,0.28)' }}>
              Eligibility assessment from $500 · Full feasibility study from $7,500
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
