import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hilda van der Meulen — Director, Project Development · Feasibility.Earth',
  description: 'Hilda van der Meulen leads project development and client relations at Feasibility.Earth, managing the assessment process from initial submission through study delivery.',
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const EXPERTISE = [
  'Carbon project intake and eligibility assessment',
  'Client development and project owner relations',
  'Feasibility process coordination and delivery',
  'Sustainable land management in emerging markets',
  'Project finance and structuring for nature-based solutions',
  'Development partnership formation',
]

const OTHER_TEAM = [
  { slug: 'selwyn-duijvestijn', initials: 'SD', name: 'Selwyn Duijvestijn', title: 'Managing Director', color: '#0D2E1F' },
  { slug: 'nicholas-wall', initials: 'NW', name: 'Nicholas Wall', title: 'Head of Project Feasibility', color: '#2D6A4F' },
]

export default function HildaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hilda van der Meulen',
    jobTitle: 'Director, Project Development',
    worksFor: { '@type': 'Organization', name: 'Feasibility.Earth', url: 'https://feasibility.earth' },
    url: 'https://feasibility.earth/team/hilda-van-der-meulen',
    description: 'Hilda van der Meulen leads project development and client relations at Feasibility.Earth.',
  }

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '80px 0 64px' }}>
          <div className="fe-wrap" style={{ maxWidth: 860 }}>
            <div style={{ marginBottom: 28 }}>
              <Link href="/team" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                Team
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#1B4332', border: '3px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: '#fff' }}>HM</span>
              </div>
              <div>
                <h1 className="font-display" style={{ fontSize: 'clamp(28px,4.5vw,48px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 10 }}>
                  Hilda van der Meulen
                </h1>
                <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', fontWeight: 500, marginBottom: 8 }}>Director, Project Development</p>
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
                  Hilda van der Meulen leads project development and client relations at Feasibility.Earth. She manages the full intake and assessment process for project submissions — from the first eligibility conversation through technical assessment coordination, final study delivery, and the development pathway that follows.
                </p>
                <p style={{ marginBottom: 20 }}>
                  Her work sits at the intersection of project management, client relationships, and carbon market strategy. She coordinates between project owners, the technical feasibility team, and Green Earth's development pipeline — ensuring that assessments move efficiently and that project owners have clear guidance at each stage of the process.
                </p>
                <p style={{ marginBottom: 20 }}>
                  Her background spans sustainable land management and project finance in emerging markets. She has worked closely with project owners across Africa and Southeast Asia, helping them understand the certification landscape and structure projects that can attract development capital.
                </p>
                <p style={{ marginBottom: 36 }}>
                  Hilda also leads the qualification process for projects considered for Green Earth development partnerships — the Open Call pathway where Green Earth co-develops projects as an equity partner rather than a fee-for-service provider.
                </p>

                <div style={{ padding: '22px 24px', background: '#F5ECD7', borderRadius: 14, border: '1px solid #E2DDD6', marginBottom: 36 }}>
                  <p style={{ fontSize: 15, color: '#6B4226', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 10 }}>
                    &ldquo;Most project owners don&apos;t know what they don&apos;t know at the submission stage. That&apos;s fine — that&apos;s exactly what the assessment is for. Our job is to give them a clear picture of where their project actually stands, not where they hope it stands.&rdquo;
                  </p>
                  <p style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 600 }}>— Hilda van der Meulen, Director, Project Development</p>
                </div>

                <div style={{ padding: '28px 28px', background: '#1B4332', borderRadius: 16 }}>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Submit your project for assessment.</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 20 }}>
                    Hilda handles all incoming project enquiries. Tell us about your project and she will confirm whether it is eligible for assessment and what the next steps look like.
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
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: 16 }}>What Hilda manages</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      'Project intake and first-contact qualification',
                      'Assessment process coordination',
                      'Open Call project evaluation',
                      'Development partnership formation',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1B4332', marginTop: 7, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{item}</span>
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
