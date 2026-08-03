import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nicholas Wall — Head of Project Feasibility · Feasibility.Earth',
  description: 'Nicholas Wall has evaluated 100+ carbon project applications and led feasibility work across Nigeria, Uganda, Cameroon, and Kazakhstan. He leads all feasibility assessment at Feasibility.Earth.',
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const EXPERTISE = [
  'Additionality assessment under Verra VCS & Gold Standard',
  'Baseline methodology — forest carbon and cookstove fNRB',
  'Certification pathway strategy and VVB engagement',
  'Permanence and leakage risk quantification',
  'Carbon project validation and verification',
  'Field experience: Nigeria, Uganda, Cameroon, Kazakhstan',
]

const OTHER_TEAM = [
  { slug: 'selwyn-duijvestijn', initials: 'SD', name: 'Selwyn Duijvestijn', title: 'Managing Director', color: '#0D2E1F' },
  { slug: 'hilda-van-der-meulen', initials: 'HM', name: 'Hilda van der Meulen', title: 'Director, Project Development', color: '#1B4332' },
]

export default function NicholasWallPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nicholas Wall',
    jobTitle: 'Head of Project Feasibility',
    worksFor: { '@type': 'Organization', name: 'Feasibility.Earth', url: 'https://feasibility.earth' },
    url: 'https://feasibility.earth/team/nicholas-wall',
    description: 'Nicholas Wall has evaluated 100+ carbon project applications and led feasibility work across Nigeria, Uganda, Cameroon, and Kazakhstan.',
  }

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #2D6A4F 100%)', padding: '80px 0 64px' }}>
          <div className="fe-wrap" style={{ maxWidth: 860 }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
              <Link href="/team" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                Team
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#2D6A4F', border: '3px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: '#fff' }}>NW</span>
              </div>
              <div>
                <h1 className="font-display" style={{ fontSize: 'clamp(28px,4.5vw,48px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 10 }}>
                  Nicholas Wall
                </h1>
                <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', fontWeight: 500, marginBottom: 8 }}>Head of Project Feasibility</p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>Feasibility.Earth · Green Earth Group</p>
              </div>
            </div>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 960 }}>
            <div className="fe-2col" style={{ alignItems: 'flex-start' }}>

              {/* Bio */}
              <div style={{ fontSize: 16, color: '#374151', lineHeight: 1.9 }}>
                <p style={{ marginBottom: 20 }}>
                  Nicholas Wall leads all project feasibility assessment at Feasibility.Earth. He has evaluated over 100 carbon project applications and directed feasibility work on projects across West Africa, East Africa, and Central Asia — covering reforestation, agroforestry, improved forest management, and cookstove distribution projects under Verra VCS and Gold Standard.
                </p>
                <p style={{ marginBottom: 20 }}>
                  His work spans the full technical scope of carbon project assessment: additionality analysis under current VCS and Gold Standard methodology, satellite-based land use baseline construction, fNRB validation for cookstove projects, carbon stock estimation, permanence and leakage risk quantification, and certification pathway strategy including VVB engagement.
                </p>
                <p style={{ marginBottom: 20 }}>
                  Before joining Green Earth Group, Nicholas worked directly on PDD development and third-party validation audits, giving him an unusually detailed understanding of what certification bodies test for at each stage of the validation process — and what desk-based assessments most frequently miss.
                </p>
                <p style={{ marginBottom: 36 }}>
                  He leads the feasibility assessment on every project that comes through Feasibility.Earth, supported by the remote sensing and carbon analysis team. All reports are reviewed and signed off by Nicholas before delivery.
                </p>

                <div style={{ padding: '22px 24px', background: '#F5ECD7', borderRadius: 14, border: '1px solid #E2DDD6', marginBottom: 36 }}>
                  <p style={{ fontSize: 15, color: '#6B4226', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 10 }}>
                    &ldquo;The most expensive feasibility mistake is missing an additionality failure that was visible in the land-use data. I have seen it happen on projects that took 18 months and $400K to develop before the error surfaced. We catch it in week one.&rdquo;
                  </p>
                  <p style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 600 }}>— Nicholas Wall, Head of Project Feasibility</p>
                </div>

                <div style={{ padding: '28px 28px', background: '#1B4332', borderRadius: 16 }}>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Nicholas assesses your project.</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 20 }}>
                    Every study is directly led by Nicholas, not delegated to a junior analyst or automated pipeline. If you submit a project through Feasibility.Earth, this is who reviews it.
                  </p>
                  <Link href="/contact" className="btn-amber" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                    Submit your project <Arrow size={14} color="#1A1A18" />
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div style={{ background: '#FAFAF8', borderRadius: 14, border: '1px solid #E2DDD6', padding: '24px 24px', marginBottom: 16 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: 16 }}>Areas of expertise</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {EXPERTISE.map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <div style={{ width: 18, height: 18, borderRadius: 5, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.55 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #E2DDD6', padding: '24px 24px', marginBottom: 16 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: 16 }}>Projects assessed</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    {[
                      { label: '100+', sub: 'applications reviewed' },
                      { label: '4', sub: 'countries with certified projects' },
                      { label: 'Verra VCS', sub: 'Gold Standard' },
                      { label: '5 yrs', sub: 'feasibility experience' },
                    ].map((stat, i) => (
                      <div key={i}>
                        <p style={{ fontSize: 18, fontWeight: 700, color: '#1B4332', marginBottom: 2 }}>{stat.label}</p>
                        <p style={{ fontSize: 11, color: '#9CA3AF' }}>{stat.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #E2DDD6', padding: '24px 24px' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: 14 }}>Rest of the team</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {OTHER_TEAM.map((m, i) => (
                      <Link key={i} href={`/team/${m.slug}`} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>{m.initials}</span>
                        </div>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 600, color: '#1A1A18', marginBottom: 1 }}>{m.name}</p>
                          <p style={{ fontSize: 11, color: '#9CA3AF' }}>{m.title}</p>
                        </div>
                        <Arrow size={12} color="#9CA3AF" />
                      </Link>
                    ))}
                  </div>
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
