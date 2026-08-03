import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Selwyn Duijvestijn — Managing Director · Feasibility.Earth',
  description: 'Selwyn Duijvestijn is the founder of Green Earth Group and the driving force behind Feasibility.Earth. He has structured nature-based carbon projects across Sub-Saharan Africa, Central Asia, and Southeast Asia.',
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const EXPERTISE = [
  'Nature-based carbon project origination and development',
  'Capital structuring for carbon and biodiversity credit projects',
  'Certification strategy — Verra VCS, Gold Standard, BioCarbon Standard',
  'Investor relations and carbon credit offtake negotiations',
  'Carbon project portfolio strategy across emerging markets',
  'Partnership and joint development agreements',
]

const OTHER_TEAM = [
  { slug: 'hilda-van-der-meulen', initials: 'HM', name: 'Hilda van der Meulen', title: 'Director, Project Development', color: '#1B4332' },
  { slug: 'nicholas-wall', initials: 'NW', name: 'Nicholas Wall', title: 'Head of Project Feasibility', color: '#2D6A4F' },
]

export default function SelwynPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Selwyn Duijvestijn',
    jobTitle: 'Managing Director',
    worksFor: { '@type': 'Organization', name: 'Green Earth Group', url: 'https://green.earth' },
    url: 'https://feasibility.earth/team/selwyn-duijvestijn',
    description: 'Founder of Green Earth Group. Has structured and delivered nature-based carbon projects across Sub-Saharan Africa, Central Asia, and Southeast Asia.',
  }

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #0D2E1F 100%)', padding: '80px 0 64px' }}>
          <div className="fe-wrap" style={{ maxWidth: 860 }}>
            <div style={{ marginBottom: 28 }}>
              <Link href="/team" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                Team
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#0D2E1F', border: '3px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: '#fff' }}>SD</span>
              </div>
              <div>
                <h1 className="font-display" style={{ fontSize: 'clamp(28px,4.5vw,48px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 10 }}>
                  Selwyn Duijvestijn
                </h1>
                <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', fontWeight: 500, marginBottom: 8 }}>Managing Director</p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>Green Earth Group · Feasibility.Earth</p>
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
                  Selwyn Duijvestijn is the founder of Green Earth Group and the driving force behind Feasibility.Earth. He has spent over a decade originating, structuring, and delivering nature-based carbon projects across Sub-Saharan Africa, Central Asia, and Southeast Asia — taking projects from initial site identification through certification, capital structuring, and credit sales.
                </p>
                <p style={{ marginBottom: 20 }}>
                  Green Earth Group manages a growing portfolio of carbon and biodiversity credit projects. The Group develops projects in-house, acting as both developer and certification sponsor, and works with external project owners and landholders under joint development agreements. Portfolio projects span reforestation, agroforestry, improved forest management, and cookstove distribution across multiple geographies and methodology types.
                </p>
                <p style={{ marginBottom: 20 }}>
                  Feasibility.Earth was built to make rigorous front-end screening available to the broader market. It applies the same methodology and analytical standards that Green Earth uses to evaluate its own investment decisions — satellite-based baseline analysis, additionality stress-testing, methodology pathway assessment — but as a standalone service that project owners can use independently.
                </p>
                <p style={{ marginBottom: 36 }}>
                  Selwyn maintains direct oversight of Green Earth&apos;s project portfolio and leads Feasibility.Earth&apos;s commercial relationships with project developers, investors, and development partners.
                </p>

                <div style={{ padding: '22px 24px', background: '#F5ECD7', borderRadius: 14, border: '1px solid #E2DDD6', marginBottom: 36 }}>
                  <p style={{ fontSize: 15, color: '#6B4226', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 10 }}>
                    &ldquo;Every project that failed after significant development capital was spent had a knowable problem at the feasibility stage. That is the problem we are solving — catching it earlier, with better tools, so the capital goes to projects that can actually deliver.&rdquo;
                  </p>
                  <p style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 600 }}>— Selwyn Duijvestijn, Managing Director</p>
                </div>

                <div style={{ padding: '28px 28px', background: '#1B4332', borderRadius: 16 }}>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Interested in working together?</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 20 }}>
                    For strategic development partnerships, joint venture enquiries, or large project portfolios, reach out directly to discuss whether Green Earth is the right partner.
                  </p>
                  <Link href="/contact" className="btn-amber" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                    Get in touch <Arrow size={14} color="#1A1A18" />
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div style={{ background: '#FAFAF8', borderRadius: 14, border: '1px solid #E2DDD6', padding: '24px 24px', marginBottom: 16 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: 16 }}>Areas of focus</p>
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
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: 16 }}>Green Earth Group</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {[
                      { label: 'Founded', value: '2015' },
                      { label: 'Focus', value: 'Nature-based carbon & biodiversity' },
                      { label: 'Geographies', value: 'Africa, Central Asia, SE Asia' },
                      { label: 'Platform', value: 'feasibility.earth · green.earth' },
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 12, color: '#9CA3AF' }}>{row.label}</span>
                        <span style={{ fontSize: 13, color: '#374151', fontWeight: 600, textAlign: 'right' }}>{row.value}</span>
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
