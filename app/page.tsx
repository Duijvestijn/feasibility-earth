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

const PROCESS_STEPS = [
  {
    n: '01', title: 'Tell us about your land',
    body: 'Share your location, land size, and what you have in mind. No technical knowledge needed — our experts ask the right questions. We take it from there.',
    img: REFOREST_IMG, time: 'Day 1',
  },
  {
    n: '02', title: 'We analyse everything',
    body: 'Our team combines satellite imagery, local land data, and 10+ years of on-the-ground experience to assess your project\'s real potential. We\'ve done this in Nigeria, Uganda, Cameroon, Kazakhstan — we know the landscape.',
    img: SAT_IMG, time: 'Days 2 – 4',
  },
  {
    n: '03', title: 'You get a clear answer',
    body: 'A full feasibility report. Plain language. Real numbers. What your project could be worth, which certification path fits, and exactly what to do next. Your expert walks you through it personally.',
    img: AGROFOR_IMG, time: 'Day 5',
  },
]

const WHY_US = [
  {
    icon: '🌍',
    title: 'We\'ve done it ourselves',
    body: 'Green Earth Group has developed over 149,000 verified carbon credits across Africa and Central Asia — reforestation in Nigeria, agroforestry in Uganda, cookstoves in Kenya, land restoration in Kazakhstan. This isn\'t theory. It\'s experience.',
  },
  {
    icon: '👥',
    title: 'Experts guide you every step',
    body: 'You\'re not filling in a form and hoping for the best. A dedicated expert is assigned to your project. They\'ve worked on some of the world\'s most complex nature-based carbon projects. They know what works — and what doesn\'t.',
  },
  {
    icon: '📅',
    title: '5 business days, guaranteed',
    body: 'We know you can\'t wait months to decide. Traditional consultants take 3–6 months. We deliver a complete, certification-ready feasibility report in 5 business days — so you can move forward with confidence.',
  },
  {
    icon: '💰',
    title: 'A fraction of the cost',
    body: 'A traditional feasibility study from a large consultant costs $25,000–$75,000 and still might miss critical issues. We deliver the same depth — built on real project experience — for $7,500 flat.',
  },
]

const PROJECTS = [
  { name: 'Sauki Clean Cookstoves',        country: 'Nigeria',    credits: '60,000', img: COOK_IMG,     color: '#F59D24', desc: 'Distributed clean cookstoves to 40,000+ households' },
  { name: 'Bulindi Agroforestry & Chimps', country: 'Uganda',     credits: '44,000', img: AGROFOR_IMG,  color: '#1B4332', desc: 'Community agroforestry protecting chimpanzee habitat' },
  { name: 'Aral Sea Afforestation',        country: 'Kazakhstan', credits: '31,250', img: KAZ_IMG,      color: '#40916C', desc: 'Restoring one of the world\'s great ecological disasters' },
  { name: 'Greenzone Reforestation',       country: 'Cameroon',   credits: '13,750', img: REFOREST_IMG, color: '#6B4226', desc: 'Large-scale reforestation in the Congo Basin region' },
]

const USE_CASES = [
  { title: 'Reforestation',  sub: 'Planting trees on degraded land', img: REFOREST_IMG, href: '/use-cases#reforestation' },
  { title: 'Agroforestry',   sub: 'Trees integrated with farming',   img: AGROFOR_IMG,  href: '/use-cases#agroforestry' },
  { title: 'ARR Projects',   sub: 'Afforestation & land restoration', img: KAZ_IMG,     href: '/use-cases#arr' },
  { title: 'Cookstoves',     sub: 'Clean cooking technology',         img: COOK_IMG,    href: '/use-cases#cookstoves' },
]

export default function HomePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        {/* HERO */}
        <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src={HERO_IMG} alt="African landscape" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,40,25,0.92) 0%, rgba(27,67,50,0.78) 55%, rgba(27,67,50,0.30) 100%)' }} />
          </div>

          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1, padding: '100px 24px 160px' }}>
            <div style={{ maxWidth: 680 }}>

              {/* Powered by badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px 5px 8px', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 100, marginBottom: 28 }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, background: '#40916C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 6 4 10 4 14a8 8 0 0016 0C20 10 16 6 12 2z"/></svg>
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.3px' }}>Powered by Green Earth Group</span>
              </div>

              <h1 className="font-display" style={{ fontSize: 'clamp(38px, 5.5vw, 66px)', fontWeight: 700, color: '#fff', lineHeight: 1.08, marginBottom: 22 }}>
                Is your land right<br />for a carbon project?<br />
                <span style={{ color: '#86C89C' }}>Know in 5 business days.</span>
              </h1>

              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.80)', lineHeight: 1.75, marginBottom: 12, maxWidth: 560 }}>
                We&apos;ve developed carbon projects in Nigeria, Uganda, Kazakhstan, and Cameroon. We know exactly what makes a project work — and what kills it before it starts.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.95)', lineHeight: 1.75, marginBottom: 36, maxWidth: 540, fontWeight: 500 }}>
                Tell us about your land. Our experts do the rest. Full report in 5 business days, for $7,500.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/pricing" className="btn-amber" style={{ fontSize: 16, padding: '16px 34px' }}>
                  Start Your Feasibility Study →
                </Link>
                <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 26px', background: 'rgba(255,255,255,0.10)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.22)' }}>
                  How it works
                </Link>
              </div>

              <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.40)' }}>
                Verra VCS · Gold Standard · Plan Vivo · $7,500 flat fee · No fieldwork required
              </p>
            </div>
          </div>

          {/* Bottom bar: simple, human */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1, background: 'rgba(15,40,25,0.90)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="fe-wrap">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', padding: '20px 0' }}>
                {[
                  { icon: '📅', value: '5 business days', sub: 'from submission to report' },
                  { icon: '👥', value: 'Dedicated expert', sub: 'assigned to your project' },
                  { icon: '🏆', value: '149,000+ credits', sub: 'developed by our team' },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none', padding: '0 12px' }}>
                    <div style={{ fontSize: 18, marginBottom: 4 }}>{s.icon}</div>
                    <div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 2 }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — simple 3 steps */}
        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 16 }}>Simple process</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#1A1A18', marginBottom: 14 }}>
                Three steps.<br />Five business days.
              </h2>
              <p style={{ fontSize: 16, color: '#5C5C58', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
                You share what you have. We bring the expertise. No jargon, no confusion — just a clear answer at the end.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="fe-card" style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', overflow: 'hidden', minHeight: 280 }}>
                  {i % 2 === 0 ? (<>
                    <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: 14, fontWeight: 800, color: '#1B4332' }}>{step.n}</span>
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#40916C', letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>{step.time}</span>
                      </div>
                      <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1A1A18', marginBottom: 12, marginTop: 8 }}>{step.title}</h3>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.75 }}>{step.body}</p>
                    </div>
                    <div style={{ position: 'relative' }}><Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} /></div>
                  </>) : (<>
                    <div style={{ position: 'relative' }}><Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} /></div>
                    <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: 14, fontWeight: 800, color: '#1B4332' }}>{step.n}</span>
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#40916C', letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>{step.time}</span>
                      </div>
                      <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1A1A18', marginBottom: 12, marginTop: 8 }}>{step.title}</h3>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.75 }}>{step.body}</p>
                    </div>
                  </>)}
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/pricing" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>Start your study — $7,500 flat →</Link>
            </div>
          </div>
        </section>

        {/* WHY FEASIBILITY.EARTH — human, warm */}
        <section className="fe-section" style={{ background: '#F5ECD7' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <div className="fe-badge fe-badge-earth" style={{ marginBottom: 16 }}>Why work with us</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#1A1A18' }}>
                We don&apos;t just run software.<br />We guide you through it.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {WHY_US.map((item, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid #E2DDD6', padding: '28px 24px' }}>
                  <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1A1A18', marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.75 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PROJECTS — credibility */}
        <section className="fe-section" style={{ background: '#1B4332' }}>
          <div className="fe-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <div>
                {/* Powered by */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px 5px 8px', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 100, marginBottom: 24 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: '#40916C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 6 4 10 4 14a8 8 0 0016 0C20 10 16 6 12 2z"/></svg>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>Powered by Green Earth Group</span>
                </div>

                <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
                  We&apos;ve done this work<br />in the field.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
                  Feasibility.Earth is built by Green Earth Group — one of the world&apos;s most active developers of nature-based carbon projects. We&apos;ve worked in some of the most challenging environments on earth.
                </p>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 28 }}>
                  Cookstoves in rural Nigeria. Agroforestry alongside chimpanzee habitats in Uganda. Restoring the Aral Sea in Kazakhstan. When you work with Feasibility.Earth, you get that experience applied to your project.
                </p>
                <Link href="/use-cases" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#86C89C', fontWeight: 700, textDecoration: 'none' }}>
                  See our project types →
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {PROJECTS.map((p, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', borderRadius: 14, overflow: 'hidden', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ position: 'relative' }}>
                      <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '16px 18px' }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{p.name}</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>{p.desc}</p>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#86C89C' }}>{p.credits} credits/yr</span>
                        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>·</span>
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{p.country}</span>
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
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 14 }}>What we cover</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#1A1A18' }}>
                Which type of project<br />do you have in mind?
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))', gap: 16 }}>
              {USE_CASES.map((uc, i) => (
                <Link key={i} href={uc.href} className="fe-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ position: 'relative', height: 190 }}>
                    <Image src={uc.img} alt={uc.title} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(27,67,50,0.82) 0%, transparent 55%)' }} />
                    <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{uc.title}</h3>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>{uc.sub}</p>
                    </div>
                  </div>
                  <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 13, color: '#5C5C58' }}>Learn more</span>
                    <span style={{ fontSize: 16, color: '#1B4332' }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING CALLOUT */}
        <section className="fe-section-sm" style={{ background: '#F5ECD7' }}>
          <div className="fe-wrap" style={{ maxWidth: 800 }}>
            <div style={{ background: '#fff', borderRadius: 20, border: '1px solid #E2DDD6', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ padding: '44px 40px', background: '#1B4332' }}>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: 16 }}>Pricing</p>
                <div className="font-display" style={{ fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: 8 }}>$7,500</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, marginBottom: 28 }}>flat fee · no hidden costs</p>
                <Link href="/pricing" className="btn-amber" style={{ width: '100%', justifyContent: 'center' }}>Start your study →</Link>
                <p style={{ marginTop: 14, fontSize: 12, color: 'rgba(255,255,255,0.30)', textAlign: 'center' as const }}>50% refund if land doesn&apos;t qualify</p>
              </div>
              <div style={{ padding: '44px 36px' }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#5C5C58', marginBottom: 20 }}>What you get:</p>
                {[
                  '✓  Full feasibility report in 5 business days',
                  '✓  Dedicated expert for your project',
                  '✓  Satellite land analysis included',
                  '✓  Certification pathway recommendation',
                  '✓  CO₂ credit potential estimate',
                  '✓  One round of revisions',
                  '✓  Personal walkthrough call',
                ].map((item, i) => (
                  <p key={i} style={{ fontSize: 14, color: '#374151', marginBottom: 10, lineHeight: 1.5 }}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #0F2819 0%, #1B4332 100%)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -100, top: -80, width: 450, height: 450, borderRadius: '50%', background: 'rgba(255,255,255,0.02)', pointerEvents: 'none' }} />
          <div className="fe-wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px 5px 8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 100, marginBottom: 28 }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: '#40916C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 6 4 10 4 14a8 8 0 0016 0C20 10 16 6 12 2z"/></svg>
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>Powered by Green Earth Group</span>
            </div>

            <h2 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: 18 }}>
              Ready to find out<br />what your land could be worth?
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', marginBottom: 36, maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.7 }}>
              Tell us about your project. A real expert — with experience from some of the world&apos;s biggest nature-based carbon projects — will guide you from start to finish. Report in 5 business days.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/pricing" className="btn-amber" style={{ fontSize: 16, padding: '16px 38px' }}>
                Start a Feasibility Study →
              </Link>
              <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 28px', background: 'rgba(255,255,255,0.10)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.18)' }}>
                See how it works
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
