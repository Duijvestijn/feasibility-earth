import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const HERO_IMG      = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_174959_337ef494-c1ed-43ed-8479-6f10ccf3680e.png'
const SATELLITE_IMG = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175009_19fc6154-aab5-4955-b5dc-d16dcac477c1.png'
const REFOREST_IMG  = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175000_427a09a9-a320-4d6c-81ef-2c43cd4b7f9e.png'
const AGROFOR_IMG   = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175005_e7dfbf54-39e5-4de4-b11d-58227004bf11.png'
const COOK_IMG      = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175014_477afb67-83bf-496e-9cc3-9039d3d6b61a.png'
const KAZ_IMG       = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175019_8bea7c7e-6b88-419e-ab70-3a36a56c747e.png'

const STATS = [
  { value: '0+',  label: 'Hectares analysed',         icon: '🗺' },
  { value: '0 t', label: 'CO₂ potential identified',  icon: '🌿' },
  { value: '0',   label: 'Countries covered',          icon: '🌍' },
]

const STEPS = [
  { n: '01', title: 'Eligibility Check',     body: 'Submit your land coordinates. Our system instantly checks additionality, land use history, and baseline conditions against Verra and Gold Standard requirements.', img: SATELLITE_IMG },
  { n: '02', title: 'Satellite Analysis',    body: 'We run NDVI analysis, tree crown cover detection, and land classification using high-resolution satellite imagery — the same data used in $75,000+ manual studies.', img: REFOREST_IMG },
  { n: '03', title: 'CO₂ Potential Report',  body: 'Receive a full feasibility report with estimated carbon credit volumes, project viability score, and recommended certification pathway. In minutes.', img: AGROFOR_IMG },
]

const USE_CASES = [
  { title: 'Reforestation', sub: 'Tree planting on degraded land', img: REFOREST_IMG, badge: 'Verra VCS · Gold Standard', href: '/use-cases#reforestation' },
  { title: 'Agroforestry',  sub: 'Trees integrated with crops',   img: AGROFOR_IMG,  badge: 'Plan Vivo · Verra VCS',    href: '/use-cases#agroforestry' },
  { title: 'ARR Projects',  sub: 'Afforestation & revegetation',  img: KAZ_IMG,      badge: 'Verra VCS',                href: '/use-cases#arr' },
  { title: 'Cookstoves',    sub: 'Clean cooking technology',      img: COOK_IMG,     badge: 'Gold Standard · CDM',      href: '/use-cases#cookstoves' },
]

const PROJECTS = [
  { name: 'Greenzone Reforestation',       country: 'Cameroon',   credits: '13,750', cert: 'Verra VCS',     color: '#2D6A4F' },
  { name: 'Bulindi Agroforestry & Chimps', country: 'Uganda',     credits: '44,000', cert: 'Gold Standard', color: '#1B4332' },
  { name: 'Sauki Clean Cookstoves',        country: 'Nigeria',    credits: '60,000', cert: 'Gold Standard', color: '#40916C' },
  { name: 'Aral Sea Afforestation',        country: 'Kazakhstan', credits: '31,250', cert: 'Verra VCS',     color: '#6B4226' },
]

export default function HomePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        {/* HERO */}
        <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src={HERO_IMG} alt="Aerial African landscape" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(27,67,50,0.90) 0%, rgba(27,67,50,0.65) 60%, rgba(27,67,50,0.30) 100%)' }} />
          </div>

          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1, padding: '100px 24px 160px' }}>
            <div style={{ maxWidth: 680 }}>
              <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.18)', color: '#D8F3DC', border: '1px solid rgba(255,255,255,0.2)', marginBottom: 24 }}>
                🌍 Carbon Project Feasibility Platform
              </div>
              <h1 className="font-display" style={{ fontSize: 'clamp(38px, 6vw, 68px)', fontWeight: 700, color: '#fff', lineHeight: 1.08, marginBottom: 24 }}>
                Know if your land<br /><span style={{ color: '#D8F3DC' }}>qualifies in minutes</span>
              </h1>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, marginBottom: 36, maxWidth: 540 }}>
                Feasibility.Earth automates what used to take months and $75,000+. Upload coordinates — we run satellite analysis, eligibility checks, and CO₂ potential calculations instantly.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/pricing" className="btn-amber" style={{ fontSize: 16, padding: '15px 32px' }}>Start a Feasibility Study →</Link>
                <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: 'rgba(255,255,255,0.12)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>
                  How it works
                </Link>
              </div>
              <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>$7,500 flat fee · Report in 24 hrs · Verra VCS · Gold Standard · Plan Vivo</p>
            </div>
          </div>

          {/* Stats bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1, background: 'rgba(27,67,50,0.85)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="fe-wrap">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', padding: '22px 0' }}>
                {STATS.map((s, i) => (
                  <div key={i} style={{ textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                    <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.45)', marginBottom: 5 }}>{s.icon} {s.label}</div>
                    <div className="font-display" style={{ fontSize: 26, fontWeight: 700, color: '#D8F3DC' }}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 16 }}>Process</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>
                From land coordinates to<br />full report — in 24 hours
              </h2>
              <p style={{ fontSize: 17, color: '#5C5C58', maxWidth: 500, margin: '0 auto' }}>Three automated steps replace weeks of manual work by consultants and field researchers.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {STEPS.map((step, i) => (
                <div key={i} className="fe-card" style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', overflow: 'hidden', minHeight: 260 }}>
                  {i % 2 === 0 ? (<>
                    <div style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div className="font-display" style={{ fontSize: 56, fontWeight: 700, color: '#E8DDD0', lineHeight: 1, marginBottom: 14 }}>{step.n}</div>
                      <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1A1A18', marginBottom: 10 }}>{step.title}</h3>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                    <div style={{ position: 'relative' }}><Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} /></div>
                  </>) : (<>
                    <div style={{ position: 'relative' }}><Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} /></div>
                    <div style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div className="font-display" style={{ fontSize: 56, fontWeight: 700, color: '#E8DDD0', lineHeight: 1, marginBottom: 14 }}>{step.n}</div>
                      <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1A1A18', marginBottom: 10 }}>{step.title}</h3>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </>)}
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 44 }}>
              <Link href="/how-it-works" className="btn-primary">See full process →</Link>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="fe-section" style={{ background: '#F5ECD7' }}>
          <div className="fe-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
              <div>
                <div className="fe-badge fe-badge-earth" style={{ marginBottom: 16 }}>Why Feasibility.Earth</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#1A1A18', marginBottom: 18 }}>
                  A $75,000 study.<br />For a fraction.
                </h2>
                <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.7, marginBottom: 28 }}>
                  Traditional feasibility studies involve months of fieldwork and consultant fees. We&apos;ve automated the entire process — delivering the same depth in 24 hours at $7,500 flat.
                </p>
                {[
                  { icon: '⚡', title: 'Minutes, not months', body: 'Eligibility check in &lt;2 min. Full report in 24 hrs.' },
                  { icon: '🛰',  title: 'Satellite-grade data', body: 'NDVI, crown cover, land history — same as consultants.' },
                  { icon: '📋', title: 'Certification-ready',  body: 'Structured for Verra VCS, Gold Standard, Plan Vivo.' },
                  { icon: '💰', title: '$7,500 flat fee',       body: 'No hidden costs. One price, full report.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 16 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 9, background: '#fff', border: '1px solid #E2DDD6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: 14, color: '#1A1A18', marginBottom: 2 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                      <p style={{ fontSize: 13, color: '#5C5C58' }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="fe-card" style={{ overflow: 'hidden' }}>
                <div style={{ background: '#1B4332', padding: '18px 24px' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Comparison</p>
                </div>
                {[
                  { label: 'Cost',        trad: '$25k – $75k+',        plat: '$7,500 flat' },
                  { label: 'Timeline',    trad: '3 – 6 months',         plat: '24 hours' },
                  { label: 'Eligibility', trad: 'Manual desk review',   plat: 'Auto (<2 min)' },
                  { label: 'Data source', trad: 'Consultant visits',     plat: 'Satellite + AI' },
                  { label: 'Standards',   trad: 'Varies',               plat: 'Verra · GS · Plan Vivo' },
                  { label: 'Revisions',   trad: 'Extra cost',            plat: 'Included' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', borderTop: i > 0 ? '1px solid #F0EDE8' : 'none' }}>
                    <div style={{ padding: '13px 18px', fontSize: 12, fontWeight: 600, color: '#5C5C58', background: '#FAFAF8' }}>{row.label}</div>
                    <div style={{ padding: '13px 14px', fontSize: 12, color: '#B0AAA0', borderLeft: '1px solid #F0EDE8', textDecoration: 'line-through' }}>{row.trad}</div>
                    <div style={{ padding: '13px 14px', fontSize: 12, fontWeight: 700, color: '#1B4332', borderLeft: '1px solid #F0EDE8' }}>✓ {row.plat}</div>
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
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 14 }}>Supported Project Types</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 700, color: '#1A1A18' }}>Works for all major<br />nature-based project types</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))', gap: 18 }}>
              {USE_CASES.map((uc, i) => (
                <Link key={i} href={uc.href} className="fe-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ position: 'relative', height: 175 }}>
                    <Image src={uc.img} alt={uc.title} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(27,67,50,0.75) 0%, transparent 55%)' }} />
                    <div style={{ position: 'absolute', bottom: 14, left: 14 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{uc.title}</h3>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{uc.sub}</p>
                    </div>
                  </div>
                  <div style={{ padding: '14px 18px' }}>
                    <span className="fe-badge fe-badge-green" style={{ fontSize: 10 }}>{uc.badge}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <Link href="/use-cases" className="btn-outline">Explore all use cases →</Link>
            </div>
          </div>
        </section>

        {/* PROJECTS SHOWCASE */}
        <section className="fe-section" style={{ background: '#F4F0EB' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <div className="fe-badge fe-badge-earth" style={{ marginBottom: 14 }}>Proven in the field</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 700, color: '#1A1A18' }}>Built on real projects</h2>
              <p style={{ fontSize: 15, color: '#5C5C58', marginTop: 10, maxWidth: 460, margin: '10px auto 0' }}>
                Developed and validated on Green Earth Group&apos;s active carbon project portfolio across 4 countries.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
              {PROJECTS.map((p, i) => (
                <div key={i} className="fe-card" style={{ padding: '22px 18px' }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <span style={{ fontSize: 12, color: '#fff', fontWeight: 700 }}>{p.country.slice(0,2).toUpperCase()}</span>
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1A1A18', marginBottom: 3 }}>{p.name}</p>
                  <p style={{ fontSize: 12, color: '#5C5C58', marginBottom: 12 }}>{p.country}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: p.color }}>{p.credits} credits</span>
                    <span className="fe-badge fe-badge-green" style={{ fontSize: 9 }}>{p.cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)', padding: '96px 0', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', right: -100, top: -100, width: 500, height: 500, borderRadius: '50%', background: 'rgba(255,255,255,0.025)', pointerEvents: 'none' }} />
          <div className="fe-wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.15)', color: '#D8F3DC', border: '1px solid rgba(255,255,255,0.2)', marginBottom: 24 }}>Get started today</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: 18 }}>
              Ready to find out if<br />your land qualifies?
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 36, maxWidth: 440, margin: '0 auto 36px' }}>
              $7,500 flat fee. Full feasibility study delivered within 24 hours. No fieldwork required.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/pricing" className="btn-amber" style={{ fontSize: 16, padding: '15px 36px' }}>Start a Feasibility Study →</Link>
              <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 26px', background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
                How it works
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
