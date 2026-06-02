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

// SVG icon components — no emojis
function IconCalendar({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  )
}
function IconUsers({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>
  )
}
function IconStar({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}
function IconCheck({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}
function IconArrow({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}
function IconGlobe({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  )
}
function IconDocument({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  )
}
function IconLeaf({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.1c-.84 1.2-.17 2.9 1.2 2.9 2 0 3.98-2.07 5-4 1 2 2 4 5 4 6 0 8-6 8-12 0-1 0-2-1-3z"/>
    </svg>
  )
}
function IconPhone({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}
function IconShield({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}

const PROCESS_STEPS = [
  {
    n: '01', title: 'Submit your project details',
    day: 'Day 1',
    body: 'Provide your land location, size, and project type. No technical expertise required — our team takes the information and determines the right approach from there.',
    img: REFOREST_IMG,
  },
  {
    n: '02', title: 'Expert analysis in progress',
    day: 'Days 2–4',
    body: 'A dedicated expert is assigned to your project. Using satellite data and on-the-ground experience from projects in Nigeria, Uganda, Cameroon, and Kazakhstan, we assess your land\'s full potential.',
    img: SAT_IMG,
  },
  {
    n: '03', title: 'Report delivered. Expert debrief.',
    day: 'Day 5',
    body: 'Receive your full feasibility report. Your expert walks you through the findings on a personal call — clear conclusions, specific numbers, and a recommended path forward.',
    img: AGROFOR_IMG,
  },
]

const WHY_US = [
  {
    Icon: IconLeaf,
    title: 'Built from real project experience',
    body: 'Green Earth Group has developed over 149,000 verified carbon credits across four countries. Feasibility.Earth is that experience, codified — applied to your project from day one.',
  },
  {
    Icon: IconUsers,
    title: 'A dedicated expert on every study',
    body: 'Every feasibility study is assigned to a practitioner with direct experience in the relevant project type and geography. Not a platform response — a person who has been in the field.',
  },
  {
    Icon: IconCalendar,
    title: 'Five business days, without exception',
    body: 'We know investment decisions cannot wait months. Traditional consultancies take 3–6 months. We deliver a complete, certification-ready feasibility report in five business days.',
  },
  {
    Icon: IconDocument,
    title: 'A fraction of traditional consulting costs',
    body: 'A large consultancy charges $25,000–$75,000 for a feasibility study and takes months. We deliver equivalent rigour — grounded in live project expertise — for $7,500 flat.',
  },
]

const GEG_PROJECTS = [
  { name: 'Sauki Clean Cookstoves',        country: 'Nigeria',    credits: '60,000',  img: COOK_IMG,     cert: 'Gold Standard' },
  { name: 'Bulindi Agroforestry & Chimps', country: 'Uganda',     credits: '44,000',  img: AGROFOR_IMG,  cert: 'Gold Standard' },
  { name: 'Aral Sea Afforestation',        country: 'Kazakhstan', credits: '31,250',  img: KAZ_IMG,      cert: 'Verra VCS' },
  { name: 'Greenzone Reforestation',       country: 'Cameroon',   credits: '13,750',  img: REFOREST_IMG, cert: 'Verra VCS' },
]

const USE_CASES = [
  { title: 'Reforestation',  sub: 'Tree planting on degraded land',  img: REFOREST_IMG, href: '/use-cases#reforestation' },
  { title: 'Agroforestry',   sub: 'Trees integrated with farming',   img: AGROFOR_IMG,  href: '/use-cases#agroforestry' },
  { title: 'ARR Projects',   sub: 'Afforestation and revegetation',  img: KAZ_IMG,      href: '/use-cases#arr' },
  { title: 'Cookstoves',     sub: 'Clean cooking technology',        img: COOK_IMG,     href: '/use-cases#cookstoves' },
]

const GEG_BADGE = (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '6px 16px 6px 9px', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 100 }}>
    <div style={{ width: 22, height: 22, borderRadius: 6, background: '#40916C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <IconLeaf size={12} color="#fff" />
    </div>
    <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.2px' }}>Powered by Green Earth Group</span>
  </div>
)

export default function HomePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        {/* HERO */}
        <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src={HERO_IMG} alt="Aerial view of African landscape" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,30,18,0.94) 0%, rgba(27,67,50,0.80) 55%, rgba(27,67,50,0.28) 100%)' }} />
          </div>

          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1, padding: '100px 24px 160px' }}>
            <div style={{ maxWidth: 680 }}>
              <div style={{ marginBottom: 30 }}>{GEG_BADGE}</div>

              <h1 className="font-display" style={{ fontSize: 'clamp(38px, 5.5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.08, marginBottom: 24 }}>
                Is your land right<br />for a carbon project?<br />
                <span style={{ color: '#86C89C' }}>Know in five business days.</span>
              </h1>

              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 36, maxWidth: 560 }}>
                We have developed carbon projects in Nigeria, Uganda, Kazakhstan, and Cameroon. We know exactly what makes a project viable — and what prevents one from reaching certification. We put that expertise to work on your land.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/pricing" className="btn-amber" style={{ fontSize: 16, padding: '16px 34px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  Start a Feasibility Study <IconArrow size={16} color="#1A1A18" />
                </Link>
                <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 26px', background: 'rgba(255,255,255,0.10)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.22)' }}>
                  How it works
                </Link>
              </div>

              <p style={{ marginTop: 22, fontSize: 13, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.2px' }}>
                Verra VCS · Gold Standard · Plan Vivo · $7,500 flat fee · No fieldwork required
              </p>
            </div>
          </div>

          {/* Stats bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1, background: 'rgba(10,30,18,0.92)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="fe-wrap">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', padding: '22px 0' }}>
                {[
                  { icon: <IconCalendar size={18} color="rgba(255,255,255,0.4)" />, value: '5 business days', sub: 'from submission to report' },
                  { icon: <IconUsers size={18} color="rgba(255,255,255,0.4)" />,    value: 'Dedicated expert',  sub: 'assigned to your project' },
                  { icon: <IconStar size={18} color="rgba(255,255,255,0.4)" />,    value: '149,000+ credits',  sub: 'developed by our team' },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none', padding: '0 16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>{s.icon}</div>
                    <div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 3 }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.2px' }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 16 }}>The process</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#1A1A18', marginBottom: 14 }}>
                Three steps.<br />Five business days.
              </h2>
              <p style={{ fontSize: 16, color: '#5C5C58', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
                You provide the land details. We provide the expertise. A clear, actionable report — with a personal debrief — in five business days.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="fe-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden', minHeight: 280 }}>
                  {i % 2 === 0 ? (<>
                    <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#1B4332', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ fontSize: 13, fontWeight: 800, color: '#fff' }}>{step.n}</span>
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#40916C', letterSpacing: '1px', textTransform: 'uppercase' as const }}>{step.day}</span>
                      </div>
                      <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1A1A18', marginBottom: 14 }}>{step.title}</h3>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.8 }}>{step.body}</p>
                    </div>
                    <div style={{ position: 'relative' }}><Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} /></div>
                  </>) : (<>
                    <div style={{ position: 'relative' }}><Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} /></div>
                    <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#1B4332', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ fontSize: 13, fontWeight: 800, color: '#fff' }}>{step.n}</span>
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#40916C', letterSpacing: '1px', textTransform: 'uppercase' as const }}>{step.day}</span>
                      </div>
                      <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1A1A18', marginBottom: 14 }}>{step.title}</h3>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.8 }}>{step.body}</p>
                    </div>
                  </>)}
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 44 }}>
              <Link href="/pricing" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                Start a study — $7,500 flat <IconArrow size={16} color="#fff" />
              </Link>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="fe-section" style={{ background: '#F5ECD7' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <div className="fe-badge fe-badge-earth" style={{ marginBottom: 16 }}>Why work with us</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#1A1A18' }}>
                We do not just run software.<br />We guide you through it.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
              {WHY_US.map((item, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid #E2DDD6', padding: '32px 28px' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: '#EBF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <item.Icon size={22} color="#1B4332" />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1A1A18', marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.8 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POWERED BY GEG */}
        <section className="fe-section" style={{ background: '#1B4332', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', right: -120, bottom: -120, width: 500, height: 500, borderRadius: '50%', background: 'rgba(255,255,255,0.015)', pointerEvents: 'none' }} />
          <div className="fe-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

              <div>
                <div style={{ marginBottom: 28 }}>{GEG_BADGE}</div>

                <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 22 }}>
                  Not a platform built in isolation.<br />Experience built in the field.
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.68)', lineHeight: 1.85, marginBottom: 16 }}>
                  Feasibility.Earth is built by Green Earth Group — one of the world&apos;s most active developers of nature-based carbon projects. We have worked in some of the most complex environments on the planet: cookstoves in rural Nigeria, agroforestry alongside chimpanzee habitats in Uganda, restoring the Aral Sea in Kazakhstan.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.68)', lineHeight: 1.85, marginBottom: 32 }}>
                  When you commission a feasibility study through us, the people reviewing your land are the same people who have developed and certified these projects.
                </p>
                <Link href="/use-cases" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#86C89C', fontWeight: 700, textDecoration: 'none' }}>
                  See our project experience <IconArrow size={14} color="#86C89C" />
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {GEG_PROJECTS.map((p, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', borderRadius: 14, overflow: 'hidden', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)' }}>
                    <div style={{ position: 'relative', minHeight: 80 }}>
                      <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '16px 18px' }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{p.name}</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.42)', marginBottom: 10 }}>{p.country}</p>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#86C89C' }}>{p.credits} credits/yr</span>
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{p.cert}</span>
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
                  <div style={{ position: 'relative', height: 195 }}>
                    <Image src={uc.img} alt={uc.title} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(15,35,22,0.82) 0%, transparent 55%)' }} />
                    <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{uc.title}</h3>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{uc.sub}</p>
                    </div>
                  </div>
                  <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 13, color: '#5C5C58', fontWeight: 500 }}>Learn more</span>
                    <IconArrow size={14} color="#1B4332" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING CALLOUT */}
        <section className="fe-section-sm" style={{ background: '#F5ECD7' }}>
          <div className="fe-wrap" style={{ maxWidth: 840 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="fe-card">
              <div style={{ padding: '52px 44px', background: '#1B4332', borderRadius: '16px 0 0 16px' }}>
                <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 11, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase' as const, marginBottom: 20 }}>Feasibility Study</p>
                <div className="font-display" style={{ fontSize: 64, fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: 6 }}>$7,500</div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, marginBottom: 32 }}>flat fee · no hidden costs</p>
                <Link href="/pricing" className="btn-amber" style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Start your study <IconArrow size={15} color="#1A1A18" />
                </Link>
                <p style={{ marginTop: 14, fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center' as const }}>50% refund if land does not qualify</p>
              </div>
              <div style={{ padding: '52px 40px' }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#5C5C58', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 26 }}>Everything included</p>
                {[
                  { Icon: IconCalendar, text: 'Full feasibility report in 5 business days' },
                  { Icon: IconUsers,    text: 'Dedicated expert assigned to your project' },
                  { Icon: IconGlobe,   text: 'Satellite land analysis across all key criteria' },
                  { Icon: IconDocument,text: 'Certification pathway recommendation' },
                  { Icon: IconPhone,   text: 'Personal debrief call upon report delivery' },
                  { Icon: IconShield,  text: 'One revision round included' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 16 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: '#F0F0EC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <item.Icon size={16} color="#1B4332" />
                    </div>
                    <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.55, paddingTop: 6 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(150deg, #0A1E11 0%, #1B4332 100%)', padding: '104px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -120, top: -100, width: 500, height: 500, borderRadius: '50%', background: 'rgba(255,255,255,0.02)', pointerEvents: 'none' }} />
          <div className="fe-wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: 28, display: 'inline-block' }}>{GEG_BADGE}</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: 20 }}>
              Find out what your land<br />could be worth.
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.60)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.8 }}>
              A real expert — with experience from some of the world&apos;s most significant nature-based carbon projects — guides you from submission to report. Five business days.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/pricing" className="btn-amber" style={{ fontSize: 16, padding: '16px 38px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                Start a Feasibility Study <IconArrow size={16} color="#1A1A18" />
              </Link>
              <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 28px', background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.16)' }}>
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
