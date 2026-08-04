import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import TeamSection from '@/components/TeamSection'
import ReportPreviewSection from '@/components/ReportPreviewSection'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feasibility.Earth — Carbon Project Feasibility for Serious Developers',
  description: 'Expert-led carbon project pre-feasibility assessments. Eligibility assessment from $500, full study from $7,500. Verra VCS · Gold Standard · Plan Vivo. Built by practitioners with certified project experience worldwide.',
}

const HERO_IMG     = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_174959_337ef494-c1ed-43ed-8479-6f10ccf3680e.png'
const SAT_IMG      = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175009_19fc6154-aab5-4955-b5dc-d16dcac477c1.png'
const REFOREST_IMG = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175000_427a09a9-a320-4d6c-81ef-2c43cd4b7f9e.png'
const AGROFOR_IMG  = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175005_e7dfbf54-39e5-4de4-b11d-58227004bf11.png'
const COOK_IMG     = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175014_477afb67-83bf-496e-9cc3-9039d3d6b61a.png'
const KAZ_IMG      = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175019_8bea7c7e-6b88-419e-ab70-3a36a56c747e.png'

function Arrow({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}
function Check({ color = '#1B4332', size = 14 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}

// The three stages — described by what they DO for the buyer, not what we deliver
const STAGES = [
  {
    num: '01',
    label: 'Eligibility Assessment',
    headline: 'Confirm the opportunity exists before committing to it.',
    body: 'Before resources are allocated, you need an expert-led answer: does this land actually qualify for a certified carbon project under current standards? We run a rigorous eligibility screen — drawing on satellite data and direct methodology experience — and give you a documented assessment you can build a decision on.',
    img: SAT_IMG,
    outcome: 'A written eligibility assessment. Clear recommendation on whether to proceed.',
  },
  {
    num: '02',
    label: 'Full Feasibility Study',
    headline: 'A study built to withstand the scrutiny it will face.',
    body: 'Our full feasibility study is structured for the standards required by investors, development finance institutions, and international certification bodies — Verra VCS, Gold Standard, Plan Vivo. It is not a template exercise. It is built on the same methodology we apply to our own projects, by the same people who develop them.',
    img: AGROFOR_IMG,
    outcome: 'A 70+ page pre-feasibility report — land analysis, additionality, carbon potential, risk register, financial projections, and development roadmap. Structured for investor review and certification pathway planning. Core assessment remote; field validation identified where required.',
    highlight: true,
  },
  {
    num: '03',
    label: 'Project Development',
    headline: 'For the right projects, we become your partner.',
    body: 'Where the feasibility study confirms a strong opportunity, we offer to lead or co-develop the full project — from Project Design Document through certification, credit sales, technical implementation, and ongoing monitoring. For qualifying projects, we also consider direct capital investment. This stage is only available following a completed feasibility study.',
    img: REFOREST_IMG,
    outcome: 'End-to-end development partnership. Capital co-investment for qualifying projects.',
  },
]

// What the market gets wrong — the problem section
const MARKET_FAILURES = [
  {
    headline: 'Most feasibility studies are built on the same flawed assumptions.',
    body: 'The voluntary carbon market has documented quality failures at scale — systematic overcrediting, projects that fail additionality tests years after certification, credits sold to major corporations that turned out to be worth significantly less than stated. In most cases, the problem started at the feasibility stage.',
    source: 'ERM / Thomson Reuters / Nature Communications',
  },
  {
    headline: 'Corporate exposure from a failed project is not just financial.',
    body: 'KPMG\'s 2024 ESG due diligence study found that over 50% of investors who encountered material ESG findings faced a deal-stopper. For corporates associated with failed or challenged carbon projects, the reputational consequence extends well beyond the write-down.',
    source: 'KPMG Global ESG Due Diligence Study 2024',
  },
  {
    headline: 'Rigorous methodology is now the differentiator, not the baseline.',
    body: 'The buyers and certification bodies that matter have raised their standards significantly. An assessment that would have passed scrutiny in 2020 will not pass it today. The team you commission needs to work to current standards — and to know from experience what those standards actually require in practice.',
    source: 'Verra VCS VM0047 / Gold Standard 2024 revisions',
  },
]

const GEG_PROJECTS = [
  { name: 'Sauki Clean Cookstoves',        country: 'Nigeria',    credits: '60,000',  img: COOK_IMG,     cert: 'Gold Standard' },
  { name: 'Bulindi Agroforestry',          country: 'Uganda',     credits: '44,000',  img: AGROFOR_IMG,  cert: 'Gold Standard' },
  { name: 'Aral Sea Afforestation',        country: 'Kazakhstan', credits: '31,250',  img: KAZ_IMG,      cert: 'Verra VCS' },
  { name: 'Greenzone Reforestation',       country: 'Cameroon',   credits: '13,750',  img: REFOREST_IMG, cert: 'Verra VCS' },
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

        {/* HERO — financial risk framing, not sustainability virtue */}
        <section className="fe-hero" style={{ position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src={HERO_IMG} alt="Nature-based carbon project landscape" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(6,18,10,0.95) 0%, rgba(18,50,32,0.82) 50%, rgba(27,67,50,0.20) 100%)' }} />
          </div>

          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1, padding: '100px 24px 100px' }}>
            <div style={{ maxWidth: 720 }}>

              <h1 className="font-display" style={{ fontSize: 'clamp(48px, 7.5vw, 92px)', fontWeight: 800, color: '#fff', lineHeight: 0.98, letterSpacing: '-0.025em', marginBottom: 28 }}>
                Assess before<br />you invest.
              </h1>

              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.70)', lineHeight: 1.75, marginBottom: 36, maxWidth: 560 }}>
                Bad feasibility work is costing developers certifications and investors capital. We are active across Africa, Asia, and Latin America — and we assess projects the same way we build them.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="https://app.feasibility.earth" target="_blank" rel="noopener noreferrer" className="btn-amber" style={{ fontSize: 15, padding: '15px 32px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  Start assessment now <Arrow size={15} color="#1A1A18" />
                </a>
                <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 24px', background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.16)' }}>
                  How we work
                </Link>
              </div>

              <p style={{ marginTop: 16, fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.2px' }}>
                Opens app.feasibility.earth — self-service, takes 15 minutes
              </p>
              <p style={{ marginTop: 10, fontSize: 12, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.3px' }}>
                Verra VCS · Gold Standard · Plan Vivo · Eligibility assessment from $500 · Full study from $7,500
              </p>
            </div>
          </div>
        </section>

        {/* TRUST BADGE STRIP */}
        <div style={{ background: '#fff', borderBottom: '1px solid #E2DDD6', padding: '13px 0' }}>
          <div className="fe-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Verra VCS', 'Gold Standard', 'Plan Vivo'].map(cert => (
                <span key={cert} style={{ fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 100, background: '#EBF5EE', color: '#1B4332', border: '1px solid #C5E8D3', whiteSpace: 'nowrap' as const }}>
                  {cert}
                </span>
              ))}
            </div>
            <p style={{ fontSize: 12, color: '#9CA3AF', whiteSpace: 'nowrap' as const }}>4 countries · 149k tCO₂e assessed</p>
          </div>
        </div>

        <ReportPreviewSection />

        {/* WHAT WE DO — outcome framing, sticky left panel */}
        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap">
            <div className="fe-2col" style={{ alignItems: 'flex-start' }}>

              {/* Sticky left */}
              <div className="fe-sticky-left">
                <h2 className="font-display" style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.25, marginBottom: 18 }}>
                  A 70+ page report you can take to investors and certification bodies.
                </h2>
                <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.85, marginBottom: 28 }}>
                  If your project has real carbon potential, you need more than an estimate. Our full feasibility study documents every material factor — land, additionality, carbon potential, risk, financials — in a format built for the scrutiny it will face. Start with a $500 eligibility check. If it qualifies, we produce the full report.
                </p>
                <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#1B4332', fontWeight: 700, textDecoration: 'none' }}>
                  Pricing and full scope <Arrow size={14} color="#1B4332" />
                </Link>
              </div>

              {/* Stage cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

                {/* Lifecycle progression strip */}
                <div data-reveal style={{ padding: '18px 24px', borderRadius: 12, background: '#F0F4F1', border: '1px solid #DDE5E0', marginBottom: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                    {[
                      { n: '01', label: 'Eligibility Check', price: '$500', active: false },
                      { n: '02', label: 'Full Feasibility Study', price: '$7,500', active: true },
                      { n: '03', label: 'Project Development', price: 'by arrangement', active: false },
                    ].map((step, i, arr) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < arr.length - 1 ? 1 : 'none' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                          <div style={{ width: 34, height: 34, borderRadius: '50%', background: step.active ? '#1B4332' : '#fff', border: `2px solid ${step.active ? '#1B4332' : '#C8D4CC'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <span style={{ fontSize: 11, fontWeight: 800, color: step.active ? '#fff' : '#5C7A65' }}>{step.n}</span>
                          </div>
                          <span style={{ fontSize: 10, fontWeight: 700, color: step.active ? '#1B4332' : '#7A9480', whiteSpace: 'nowrap', letterSpacing: '0.3px' }}>{step.label}</span>
                          <span style={{ fontSize: 9.5, color: step.active ? '#40916C' : '#9AAB9F', fontWeight: 600 }}>{step.price}</span>
                        </div>
                        {i < arr.length - 1 && (
                          <div style={{ flex: 1, height: 2, background: 'linear-gradient(90deg, #C8D4CC, #DDE5E0)', margin: '0 8px', marginBottom: 28 }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {STAGES.map((stage, i) => (
                  <div key={i} data-reveal data-reveal-delay={String(i * 80)} style={{ borderRadius: 16, border: stage.highlight ? '2px solid #1B4332' : '1px solid #E2DDD6', overflow: 'hidden', background: '#fff', boxShadow: stage.highlight ? '0 8px 32px rgba(27,67,50,0.12)' : '0 1px 6px rgba(0,0,0,0.04)' }}>
                    {stage.highlight && <div style={{ height: 3, background: 'linear-gradient(90deg, #1B4332, #40916C)' }} />}
                    <div className="fe-stage-card-inner">
                      <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                          <div style={{ width: 30, height: 30, borderRadius: 8, background: stage.highlight ? '#1B4332' : '#EBF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <span style={{ fontSize: 12, fontWeight: 800, color: stage.highlight ? '#fff' : '#1B4332' }}>{stage.num}</span>
                          </div>
                          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' as const, color: '#9CA3AF' }}>{stage.label}</span>
                        </div>
                        <h3 style={{ fontSize: 19, fontWeight: 700, color: '#1A1A18', lineHeight: 1.3, marginBottom: 12 }}>{stage.headline}</h3>
                        <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.8, marginBottom: 18 }}>{stage.body}</p>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                          <div style={{ width: 18, height: 18, borderRadius: 5, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                            <Check color="#1B4332" size={10} />
                          </div>
                          <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.55, fontWeight: 500 }}>{stage.outcome}</p>
                        </div>
                      </div>
                      <div style={{ position: 'relative' }}>
                        <Image src={stage.img} alt={stage.headline} fill style={{ objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(27,67,50,0.18)' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRACK RECORD — credibility, not description */}
        <section className="fe-section" style={{ background: '#1B4332', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', right: -120, bottom: -100, width: 480, height: 480, borderRadius: '50%', background: 'rgba(255,255,255,0.012)', pointerEvents: 'none' }} />
          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="fe-2col-equal" style={{ alignItems: 'center' }}>
              <div>
                <h2 className="font-display" style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 22 }}>
                  We assess projects the same way we develop them.
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.60)', lineHeight: 1.9, marginBottom: 16 }}>
                  The team behind Feasibility.Earth has developed and certified nature-based carbon projects across four countries. Cookstoves in rural Nigeria. Community agroforestry protecting chimpanzee habitat in Uganda. Afforestation on the restored banks of the Aral Sea in Kazakhstan. Reforestation in the Congo Basin in Cameroon.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.60)', lineHeight: 1.9, marginBottom: 32 }}>
                  When we conduct a feasibility assessment, it reflects how we evaluate projects for our own portfolio — with the same methodology standards we are held to by Verra and Gold Standard auditors.
                </p>
                <Link href="/use-cases" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#86C89C', fontWeight: 600, textDecoration: 'none' }}>
                  View our project portfolio <Arrow size={14} color="#86C89C" />
                </Link>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', lineHeight: 1.6, marginTop: 20 }}>
                  Credit volumes are estimated annual potential. Registry status and verified issuance volumes vary by project and development stage.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {GEG_PROJECTS.map((p, i) => (
                  <div key={i} data-reveal data-reveal-delay={String(i * 70)} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', borderRadius: 13, overflow: 'hidden', background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ position: 'relative', minHeight: 76 }}>
                      <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '14px 18px' }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{p.name}</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>{p.country}</p>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: '#86C89C' }}>{p.credits} tCO₂e/yr (est.)</span>
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>{p.cert}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY RIGOROUS — the quality problem in carbon markets */}
        <section className="fe-section" style={{ background: '#060A07' }}>
          <div className="fe-wrap">
            <div style={{ maxWidth: 680, marginBottom: 52 }}>
              <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#fff', lineHeight: 1.18, marginBottom: 16 }}>
                The quality crisis in carbon markets starts at feasibility.
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85 }}>
                Three things the strongest buyers and certification bodies now know — and are testing for.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 16 }}>
              {MARKET_FAILURES.map((item, i) => (
                <div key={i} data-reveal data-reveal-delay={String(i * 80)} style={{ padding: '32px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(134,200,156,0.15)', border: '1px solid rgba(134,200,156,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#86C89C' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: 12 }}>{item.headline}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.52)', lineHeight: 1.8, marginBottom: 16 }}>{item.body}</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', fontStyle: 'italic' }}>{item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <TeamSection />

        {/* OPEN CALL BANNER */}
        <section style={{ background: '#F4C430', padding: '24px 0' }}>
          <div className="fe-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.94-1.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15z"/></svg>
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18' }}>Green Earth is actively seeking carbon projects.</p>
                <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)' }}>Submit yours through Feasibility.Earth — Green Earth covers the assessment cost.</p>
              </div>
            </div>
            <Link href="/open-call" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 22px', background: '#1B4332', color: '#fff', fontWeight: 700, fontSize: 14, borderRadius: 8, textDecoration: 'none', flexShrink: 0 }}>
              View open call <Arrow size={14} color="#fff" />
            </Link>
          </div>
        </section>

        {/* PROJECT TYPES */}
        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div className="fe-2col" style={{ alignItems: 'center' }}>
              <div>
                <h2 className="font-display" style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.25, marginBottom: 16 }}>
                  Four core project types. Three leading standards.
                </h2>
                <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.85 }}>
                  We assess reforestation, agroforestry, ARR, and cookstove projects against Verra VCS, Gold Standard, and Plan Vivo. Each type has distinct methodology requirements. Our team has direct development experience across all four.
                </p>
              </div>
              <div className="fe-usecase-grid">
                {USE_CASES.map((uc, i) => (
                  <Link key={i} href={uc.href} data-reveal data-reveal-delay={String(i * 60)} className="fe-card" style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ position: 'relative', height: 170 }}>
                      <Image src={uc.img} alt={uc.title} fill style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(6,18,10,0.82) 0%, transparent 55%)' }} />
                      <div style={{ position: 'absolute', bottom: 14, left: 14 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{uc.title}</h3>
                        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>{uc.sub}</p>
                      </div>
                    </div>
                    <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 13, color: '#5C5C58' }}>Learn more</span>
                      <Arrow size={13} color="#1B4332" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA — relationship-first, no price headline */}
        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '108px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -80, top: -60, width: 380, height: 380, borderRadius: '50%', background: 'rgba(255,255,255,0.018)', pointerEvents: 'none' }} />
          <div className="fe-wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
              Tell us about your project.
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '0 auto 44px', lineHeight: 1.85 }}>
              We will tell you honestly whether it has merit, what the risks are, and what it would take to develop it. Our team has been through this process — on both sides of the assessment.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-amber" style={{ fontSize: 15, padding: '15px 34px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                Tell us about your project <Arrow size={15} color="#1A1A18" />
              </Link>
              <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 26px', background: 'rgba(255,255,255,0.07)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)' }}>
                How we work
              </Link>
            </div>
            <p style={{ marginTop: 28, fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>
              Eligibility assessment from $500 · Full feasibility study from $7,500 · Project development by arrangement
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
