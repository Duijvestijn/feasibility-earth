import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

// Higgsfield-generated images
const HERO_IMG     = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_174959_337ef494-c1ed-43ed-8479-6f10ccf3680e.png'
const SAT_IMG      = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175009_19fc6154-aab5-4955-b5dc-d16dcac477c1.png'
const REFOREST_IMG = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175000_427a09a9-a320-4d6c-81ef-2c43cd4b7f9e.png'
const AGROFOR_IMG  = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175005_e7dfbf54-39e5-4de4-b11d-58227004bf11.png'
const COOK_IMG     = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175014_477afb67-83bf-496e-9cc3-9039d3d6b61a.png'
const KAZ_IMG      = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175019_8bea7c7e-6b88-419e-ab70-3a36a56c747e.png'

// Research-verified failure rates (sources: Calyx Global, BeZero Carbon, UC Berkeley)
const MARKET_FACTS = [
  { stat: '~50%', desc: 'of top VCM projects carry non-additionality risk', source: 'BeZero Carbon, 2024' },
  { stat: '70%',  desc: 'of cookstove projects over-credit due to inflated fNRB values', source: 'Calyx Global / Oeko-Institut' },
  { stat: '6.3×', desc: 'average over-crediting in cookstove projects', source: 'UC Berkeley, Nature Sustainability 2024' },
]

const STEPS = [
  {
    n: '01', title: 'Additionality Screening',
    body: 'The #1 reason projects fail certification. We check whether your land would have been protected or restored anyway — using 10-year deforestation baselines, land tenure history, and geographic proximity to financial barriers. Most consultants skip this at feasibility stage.',
    img: SAT_IMG,
    badge: 'Catches ~50% of disqualifying issues early',
  },
  {
    n: '02', title: 'Satellite Land Analysis',
    body: 'NDVI time-series, crown cover detection, land use classification — the same data used in $50,000+ consultant reports. For cookstove projects, we apply validated fNRB values (not the industry average of 80%+ that inflates credits). We use real regional data: ~30% for most African geographies.',
    img: REFOREST_IMG,
    badge: 'fNRB calibrated to regional field data',
  },
  {
    n: '03', title: 'Pre-VVB Feasibility Report',
    body: 'A certification-ready report structured for Verra VCS, Gold Standard, or Plan Vivo — before you commit to full VVB engagement. Know your project\'s viability, CO₂ potential, and likely certification pathway before spending $50,000–$200,000 on project development.',
    img: AGROFOR_IMG,
    badge: 'Delivered in 24 hours · $7,500 flat',
  },
]

const COMPETITORS = [
  {
    name: 'Traditional consultants\n(South Pole, Winrock, SCS)',
    feasibility: '$25,000–$75,000+',
    timeline: '3–6 months',
    additionality: 'Manual, often missed',
    fNRB: 'Industry average (inflated)',
    preVVB: '✗ No standard offering',
    color: '#9CA3AF',
  },
  {
    name: 'Carbon Direct / Pachama\n(post Nov 2025 acquisition)',
    feasibility: 'Enterprise pricing',
    timeline: '4–8 weeks',
    additionality: 'Science-led review',
    fNRB: 'Satellite MRV (post-registration)',
    preVVB: '✗ Focuses on MRV after registration',
    color: '#9CA3AF',
  },
  {
    name: 'Feasibility.Earth\n(Powered by Green Earth Group)',
    feasibility: '$7,500 flat',
    timeline: '24 hours',
    additionality: '✓ Automated + expert review',
    fNRB: '✓ Regional field-validated values',
    preVVB: '✓ Purpose-built pre-VVB screen',
    color: '#1B4332',
    highlight: true,
  },
]

const USE_CASES = [
  { title: 'Reforestation',  img: REFOREST_IMG, href: '/use-cases#reforestation', badge: 'Verra VCS VM0047' },
  { title: 'Agroforestry',   img: AGROFOR_IMG,  href: '/use-cases#agroforestry', badge: 'Plan Vivo · VCS' },
  { title: 'ARR Projects',   img: KAZ_IMG,      href: '/use-cases#arr',          badge: 'Verra VCS' },
  { title: 'Cookstoves',     img: COOK_IMG,     href: '/use-cases#cookstoves',   badge: 'Gold Standard · CDM' },
]

const GEG_PROJECTS = [
  { name: 'Sauki Clean Cookstoves',        country: 'Nigeria',    credits: '60,000', cert: 'Gold Standard', note: 'fNRB validated by field data' },
  { name: 'Bulindi Agroforestry & Chimps', country: 'Uganda',     credits: '44,000', cert: 'Gold Standard', note: 'Community-validated baseline' },
  { name: 'Aral Sea Afforestation',        country: 'Kazakhstan', credits: '31,250', cert: 'Verra VCS',     note: 'Dryland ARR methodology' },
  { name: 'Greenzone Reforestation',       country: 'Cameroon',   credits: '13,750', cert: 'Verra VCS',     note: 'Congo Basin additionality' },
]

export default function HomePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        {/* ── HERO ── */}
        <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src={HERO_IMG} alt="African landscape" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,40,25,0.94) 0%, rgba(27,67,50,0.80) 55%, rgba(27,67,50,0.35) 100%)' }} />
          </div>

          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1, padding: '100px 24px 160px' }}>
            <div style={{ maxWidth: 700 }}>
              {/* Powered by badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px 5px 8px', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 100, marginBottom: 24 }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, background: '#40916C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 6 4 10 4 14a8 8 0 0016 0C20 10 16 6 12 2z"/></svg>
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.3px' }}>Powered by Green Earth Group</span>
              </div>

              <h1 className="font-display" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.08, marginBottom: 20 }}>
                The only pre-VVB<br />feasibility platform<br /><span style={{ color: '#86C89C' }}>built by practitioners</span>
              </h1>

              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 14, maxWidth: 580 }}>
                70% of cookstove projects over-credit. ~50% of top NBS projects have additionality risk. Most projects only discover this after spending $50,000–$200,000 on development.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginBottom: 36, maxWidth: 560, fontWeight: 500 }}>
                Feasibility.Earth catches these failures <em>before</em> you commit — in 24 hours, for $7,500.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/pricing" className="btn-amber" style={{ fontSize: 16, padding: '15px 32px' }}>Start a Feasibility Study →</Link>
                <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 26px', background: 'rgba(255,255,255,0.10)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.22)' }}>
                  How it works
                </Link>
              </div>
              <p style={{ marginTop: 18, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Verra VCS · Gold Standard · Plan Vivo · Screened against fNRB field data</p>
            </div>
          </div>

          {/* Research-backed stats bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1, background: 'rgba(15,40,25,0.90)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="fe-wrap">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', padding: '20px 0' }}>
                {MARKET_FACTS.map((f, i) => (
                  <div key={i} style={{ textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none', padding: '0 12px' }}>
                    <div className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#F4C430', lineHeight: 1, marginBottom: 4 }}>{f.stat}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4, marginBottom: 2 }}>{f.desc}</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.28)', fontStyle: 'italic' }}>{f.source}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEM SECTION ── */}
        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="fe-badge fe-badge-earth" style={{ marginBottom: 16 }}>The problem we solve</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>
                Most projects fail at certification.<br />Yours doesn&apos;t have to.
              </h2>
              <p style={{ fontSize: 16, color: '#5C5C58', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
                The voluntary carbon market has a quality crisis. Projects that pass traditional feasibility reviews still fail VVB validation — because incumbent tools miss the issues that actually matter.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {[
                {
                  icon: '⚠️', color: '#DC2626', bg: '#FEF2F2', border: '#FECACA',
                  title: 'The additionality trap',
                  body: 'Nearly half of the top 47 VCM projects by retirement volume in 2024 carried non-additionality risk — the most fundamental feasibility failure. This means the forest would have survived without the project.',
                  source: 'BeZero Carbon ratings, 2024',
                  cta: 'We screen for this at intake',
                },
                {
                  icon: '🔢', color: '#B45309', bg: '#FFFBEB', border: '#FDE68A',
                  title: 'The fNRB inflation problem',
                  body: 'Cookstove projects routinely use fNRB values of 80%+ when independent research shows the real figure is ~30% for most African geographies. UC Berkeley found 6.3× average over-crediting. This destroys credit value on the market.',
                  source: 'UC Berkeley, Nature Sustainability 2024',
                  cta: 'We use validated regional fNRB data',
                },
                {
                  icon: '⏱', color: '#1B4332', bg: '#F0FDF4', border: '#BBF7D0',
                  title: 'The VVB commitment trap',
                  body: 'Projects commit to full PDD development before any formal feasibility screen. By the time a VVB flags additionality or methodology issues, $50,000–$200,000 has already been spent. A pre-VVB screen costs a fraction of that.',
                  source: 'VCM Primer + Winrock transaction cost data',
                  cta: 'We screen before you commit',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 16, border: `1px solid ${item.border}`, padding: '28px 24px' }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1A1A18', marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.7, marginBottom: 14 }}>{item.body}</p>
                  <div style={{ padding: '8px 12px', background: item.bg, borderRadius: 8, marginBottom: 12 }}>
                    <p style={{ fontSize: 11, color: item.color, fontWeight: 600 }}>📎 {item.source}</p>
                  </div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: item.color }}>✓ {item.cta}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE FIX IT ── */}
        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 16 }}>Our process</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>
                Three screens most consultants skip
              </h2>
              <p style={{ fontSize: 16, color: '#5C5C58', maxWidth: 500, margin: '0 auto' }}>
                Built by the team that developed 149,000 CO₂ credits across Africa and Central Asia.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {STEPS.map((step, i) => (
                <div key={i} className="fe-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden', minHeight: 280 }}>
                  {i % 2 === 0 ? (<>
                    <div style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                        <div className="font-display" style={{ fontSize: 52, fontWeight: 700, color: '#E8DDD0', lineHeight: 1 }}>{step.n}</div>
                        <div>
                          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18' }}>{step.title}</h3>
                          <span className="fe-badge fe-badge-green" style={{ fontSize: 10, marginTop: 4, display: 'inline-block' }}>{step.badge}</span>
                        </div>
                      </div>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.75 }}>{step.body}</p>
                    </div>
                    <div style={{ position: 'relative' }}><Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} /></div>
                  </>) : (<>
                    <div style={{ position: 'relative' }}><Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} /></div>
                    <div style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                        <div className="font-display" style={{ fontSize: 52, fontWeight: 700, color: '#E8DDD0', lineHeight: 1 }}>{step.n}</div>
                        <div>
                          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18' }}>{step.title}</h3>
                          <span className="fe-badge fe-badge-green" style={{ fontSize: 10, marginTop: 4, display: 'inline-block' }}>{step.badge}</span>
                        </div>
                      </div>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.75 }}>{step.body}</p>
                    </div>
                  </>)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPETITIVE COMPARISON ── */}
        <section className="fe-section" style={{ background: '#F5ECD7' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <div className="fe-badge fe-badge-earth" style={{ marginBottom: 16 }}>How we compare</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#1A1A18' }}>
                The only pre-VVB platform.<br />Not another consultant.
              </h2>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0', minWidth: 640 }}>
                <thead>
                  <tr style={{ background: '#1B4332' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', borderRadius: '8px 0 0 0' }}>Provider</th>
                    {['Cost', 'Timeline', 'Additionality screen', 'fNRB handling', 'Pre-VVB focus'].map((h, i) => (
                      <th key={h} style={{ padding: '14px 16px', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', borderRadius: i === 4 ? '0 8px 0 0' : 0 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPETITORS.map((c, i) => (
                    <tr key={i} style={{ background: c.highlight ? '#EBF5EE' : '#fff', borderBottom: '1px solid #E2DDD6' }}>
                      <td style={{ padding: '18px 20px', fontSize: 13, fontWeight: c.highlight ? 800 : 600, color: c.highlight ? '#1B4332' : '#374151', whiteSpace: 'pre-line', borderLeft: c.highlight ? '3px solid #1B4332' : '3px solid transparent' }}>
                        {c.name}
                        {c.highlight && <span style={{ display: 'block', fontSize: 10, color: '#40916C', fontWeight: 700, marginTop: 2 }}>← You are here</span>}
                      </td>
                      {[c.feasibility, c.timeline, c.additionality, c.fNRB, c.preVVB].map((val, j) => (
                        <td key={j} style={{ padding: '18px 16px', textAlign: 'center', fontSize: 13, fontWeight: c.highlight ? 700 : 400, color: c.highlight ? '#1B4332' : '#6B7280' }}>
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 12, fontStyle: 'italic' }}>
              * Competitor analysis based on public information. South Pole and Carbon Direct/Pachama focus primarily on post-registration MRV and full project development, not pre-VVB feasibility screening.
            </p>
          </div>
        </section>

        {/* ── POWERED BY GEG ── */}
        <section className="fe-section" style={{ background: '#1B4332', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', right: -100, top: -100, width: 500, height: 500, borderRadius: '50%', background: 'rgba(255,255,255,0.02)', pointerEvents: 'none' }} />
          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px 5px 8px', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 100, marginBottom: 24 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: '#40916C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 6 4 10 4 14a8 8 0 0016 0C20 10 16 6 12 2z"/></svg>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>Powered by Green Earth Group</span>
                </div>

                <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#fff', marginBottom: 20, lineHeight: 1.15 }}>
                  Not a tool.<br />Experience in code.
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 24 }}>
                  Feasibility.Earth is built by the team that actually developed, certified, and operates 149,000 CO₂ credits across four countries. We&apos;ve made the mistakes. We&apos;ve learned the hard way what kills a project at VVB review. We encoded that into a tool.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 28 }}>
                  Green Earth Group N.V. is a publicly listed carbon and biodiversity project developer (Green Earth, co₂expert, projects.earth). Feasibility.Earth is its pre-project screening platform — made available to the broader market.
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {['Verra VCS certified', 'Gold Standard certified', '4 active countries', 'NBS practitioners'].map((tag, i) => (
                    <span key={i} style={{ fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 100, background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}>{tag}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {GEG_PROJECTS.map((p, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '18px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{p.name}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{p.country}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: 15, fontWeight: 800, color: '#86C89C' }}>{p.credits}</p>
                        <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>credits/yr</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 100, background: 'rgba(134,200,156,0.2)', color: '#86C89C' }}>{p.cert}</span>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>{p.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 14 }}>Supported project types</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#1A1A18' }}>All four major NBS categories</h2>
              <p style={{ fontSize: 15, color: '#5C5C58', marginTop: 10, maxWidth: 460, margin: '10px auto 0' }}>Each with methodology-specific screening criteria built in — not generic templates.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))', gap: 16 }}>
              {USE_CASES.map((uc, i) => (
                <Link key={i} href={uc.href} className="fe-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ position: 'relative', height: 175 }}>
                    <Image src={uc.img} alt={uc.title} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(27,67,50,0.78) 0%, transparent 55%)' }} />
                    <div style={{ position: 'absolute', bottom: 14, left: 14 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{uc.title}</h3>
                    </div>
                  </div>
                  <div style={{ padding: '14px 18px' }}>
                    <span className="fe-badge fe-badge-green" style={{ fontSize: 10 }}>{uc.badge}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: 'linear-gradient(135deg, #0F2819 0%, #1B4332 100%)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -80, top: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.025)', pointerEvents: 'none' }} />
          <div className="fe-wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px 5px 8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 100, marginBottom: 24 }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: '#40916C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 6 4 10 4 14a8 8 0 0016 0C20 10 16 6 12 2z"/></svg>
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Powered by Green Earth Group</span>
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: 18 }}>
              Know before you commit.<br />Screen before the VVB does.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
              $7,500 catches what a $75,000 consultant often misses. Report in 24 hours. Built on 149,000 real carbon credits.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/pricing" className="btn-amber" style={{ fontSize: 16, padding: '15px 36px' }}>Start a Feasibility Study →</Link>
              <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 26px', background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.18)' }}>
                Read the methodology
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
