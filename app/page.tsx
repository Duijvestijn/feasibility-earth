import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import TeamSection from '@/components/TeamSection'
import Link from 'next/link'
import Image from 'next/image'

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
    body: 'Before resources are allocated, you need an independent answer: does this land actually qualify for a certified carbon project under current standards? We run a rigorous eligibility screen — drawing on satellite data and direct methodology experience — and give you a documented assessment you can build a decision on.',
    img: SAT_IMG,
    outcome: 'A written eligibility assessment. Clear recommendation on whether to proceed.',
  },
  {
    num: '02',
    label: 'Full Feasibility Study',
    headline: 'A study built to withstand the scrutiny it will face.',
    body: 'Our full feasibility study is structured for the standards required by investors, development finance institutions, and international certification bodies — Verra VCS, Gold Standard, Plan Vivo. It is not a template exercise. It is built on the same methodology we apply to our own projects, by the same people who develop them.',
    img: AGROFOR_IMG,
    outcome: 'A bankable report with carbon potential, certification pathway, and financial projections.',
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
        <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src={HERO_IMG} alt="Nature-based carbon project landscape" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(6,18,10,0.95) 0%, rgba(18,50,32,0.82) 50%, rgba(27,67,50,0.20) 100%)' }} />
          </div>

          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1, padding: '100px 24px 100px' }}>
            <div style={{ maxWidth: 720 }}>

              <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.10)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.14)', marginBottom: 36, letterSpacing: '0.3px' }}>
                Carbon Project Feasibility
              </div>

              <h1 className="font-display" style={{ fontSize: 'clamp(38px, 5vw, 62px)', fontWeight: 700, color: '#fff', lineHeight: 1.08, marginBottom: 28 }}>
                Most nature-based carbon<br />projects fail — not because<br />
                <span style={{ color: '#86C89C' }}>of the land, but the assessment.</span>
              </h1>

              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.68)', lineHeight: 1.85, marginBottom: 16, maxWidth: 600 }}>
                The voluntary carbon market has a documented quality problem. Flawed feasibility work is costing developers certifications, costing corporates credibility, and costing investors capital.
              </p>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, marginBottom: 40, maxWidth: 600, fontWeight: 500 }}>
                Our team has developed and certified 149,000 carbon credits across Africa and Central Asia. We assess projects the same way we develop them — and we know exactly what the market is now demanding.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/pricing" className="btn-primary" style={{ fontSize: 15, padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  Tell us about your project <Arrow size={15} color="#fff" />
                </Link>
                <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 24px', background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.16)' }}>
                  How we work
                </Link>
              </div>

              <p style={{ marginTop: 22, fontSize: 12, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.3px' }}>
                Verra VCS · Gold Standard · Plan Vivo · Eligibility assessment from $500 · Full study from $7,500
              </p>
            </div>
          </div>
        </section>

        {/* THE PROBLEM — named, specific, financial */}
        <section className="fe-section" style={{ background: '#0F2016' }}>
          <div className="fe-wrap">
            <div style={{ maxWidth: 680, marginBottom: 52 }}>
              <div className="fe-badge" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.10)', marginBottom: 20 }}>
                Why this matters
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#fff', lineHeight: 1.18, marginBottom: 16 }}>
                The quality crisis in carbon markets starts at feasibility.
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85 }}>
                Three things the strongest buyers and certification bodies now know — and are testing for.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 16 }}>
              {MARKET_FAILURES.map((item, i) => (
                <div key={i} style={{ padding: '32px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(134,200,156,0.15)', border: '1px solid rgba(134,200,156,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#86C89C' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: 12 }}>{item.headline}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.52)', lineHeight: 1.8, marginBottom: 16 }}>{item.body}</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontStyle: 'italic' }}>{item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DO — outcome framing, sticky left panel */}
        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'flex-start' }}>

              {/* Sticky left */}
              <div style={{ position: 'sticky', top: 96 }}>
                <div className="fe-badge fe-badge-green" style={{ marginBottom: 18 }}>Our services</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.25, marginBottom: 18 }}>
                  From first assessment to full project development.
                </h2>
                <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.85, marginBottom: 28 }}>
                  Three services at different stages of commitment. Start with an eligibility assessment. If the project is sound, commission the full bankable study. For the strongest projects, we develop and invest alongside you.
                </p>
                <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#1B4332', fontWeight: 700, textDecoration: 'none' }}>
                  Pricing and full scope <Arrow size={14} color="#1B4332" />
                </Link>
              </div>

              {/* Stage cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {STAGES.map((stage, i) => (
                  <div key={i} style={{ borderRadius: 16, border: stage.highlight ? '2px solid #1B4332' : '1px solid #E2DDD6', overflow: 'hidden', background: '#fff', boxShadow: stage.highlight ? '0 8px 32px rgba(27,67,50,0.12)' : '0 1px 6px rgba(0,0,0,0.04)' }}>
                    {stage.highlight && <div style={{ height: 3, background: 'linear-gradient(90deg, #1B4332, #40916C)' }} />}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 260 }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              <div>
                <div className="fe-badge" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.10)', marginBottom: 24 }}>
                  Track record
                </div>
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
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {GEG_PROJECTS.map((p, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', borderRadius: 13, overflow: 'hidden', background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ position: 'relative', minHeight: 76 }}>
                      <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '14px 18px' }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{p.name}</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>{p.country}</p>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: '#86C89C' }}>{p.credits} credits/yr</span>
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.30)' }}>{p.cert}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <TeamSection />

        {/* PROJECT TYPES */}
        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, alignItems: 'center' }}>
              <div>
                <div className="fe-badge fe-badge-green" style={{ marginBottom: 16 }}>Scope</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.25, marginBottom: 16 }}>
                  Four project types. All major standards.
                </h2>
                <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.85 }}>
                  We assess reforestation, agroforestry, ARR, and cookstove projects against Verra VCS, Gold Standard, and Plan Vivo. Each type has distinct methodology requirements. Our team has direct development experience across all four.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {USE_CASES.map((uc, i) => (
                  <Link key={i} href={uc.href} className="fe-card" style={{ textDecoration: 'none', display: 'block' }}>
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
              <Link href="/pricing" className="btn-amber" style={{ fontSize: 15, padding: '15px 34px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                Get in touch <Arrow size={15} color="#1A1A18" />
              </Link>
              <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 26px', background: 'rgba(255,255,255,0.07)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)' }}>
                How we work
              </Link>
            </div>
            <p style={{ marginTop: 28, fontSize: 12, color: 'rgba(255,255,255,0.22)' }}>
              Eligibility assessment from $500 · Full feasibility study from $7,500 · Project development by arrangement
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
