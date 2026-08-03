import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Team — Feasibility.Earth',
  description: 'Every feasibility study is assigned to a practitioner with direct project development experience. Meet the people behind Feasibility.Earth.',
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const LEADERSHIP = [
  {
    slug: 'selwyn-duijvestijn',
    initials: 'SD',
    name: 'Selwyn Duijvestijn',
    title: 'Managing Director, Green Earth Group',
    bio: 'Founder of Green Earth Group and the driving force behind Feasibility.Earth. Has structured and delivered nature-based carbon projects across Sub-Saharan Africa, Central Asia, and Southeast Asia — from origination through certification, capital structuring, and credit sales.',
    color: '#0D2E1F',
    hasProfile: true,
  },
  {
    slug: 'hilda-van-der-meulen',
    initials: 'HM',
    name: 'Hilda van der Meulen',
    title: 'Director, Project Development',
    bio: 'Leads project intake, client relations, and the development pathway for projects assessed through Feasibility.Earth. Manages the process from initial eligibility submission to full study delivery and development partnership formation.',
    color: '#1B4332',
    hasProfile: true,
  },
]

const TECHNICAL = [
  {
    slug: 'nicholas-wall',
    initials: 'NW',
    name: 'Nicholas Wall',
    title: 'Head of Project Feasibility',
    bio: 'Has evaluated 100+ carbon project applications and led feasibility work on projects across Nigeria, Uganda, Cameroon, and Kazakhstan. Knows the specific failure modes that certification bodies flag — and catches them at the assessment stage.',
    color: '#2D6A4F',
    hasProfile: true,
  },
  {
    initials: 'AA',
    name: 'Angel Daniel Armas',
    title: 'Senior Carbon Analyst',
    bio: 'Leads satellite analysis and CO₂ potential modelling. Has validated fNRB assumptions for cookstove projects against regional field data — the single largest source of systematic overcrediting in the market.',
    color: '#40916C',
    hasProfile: false,
  },
  {
    initials: 'VK',
    name: 'Vaseem Khan',
    title: 'Remote Sensing & GIS Lead',
    bio: 'Responsible for satellite data processing and the carbon stock modelling tools used in all assessments. Has built baseline carbon maps across four countries, giving the team proprietary regional datasets most assessors do not have access to.',
    color: '#52B788',
    hasProfile: false,
  },
]

function MemberCard({ member, size = 'normal' }: { member: typeof TECHNICAL[0] & { slug?: string; hasProfile: boolean }, size?: 'normal' | 'large' }) {
  const isLarge = size === 'large'
  const inner = (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E2DDD6', overflow: 'hidden', height: '100%', transition: 'box-shadow 0.2s' }}>
      <div style={{ height: 4, background: member.color }} />
      <div style={{ padding: isLarge ? '32px 32px' : '28px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <div style={{ width: isLarge ? 56 : 48, height: isLarge ? 56 : 48, borderRadius: '50%', background: member.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: isLarge ? 18 : 15, fontWeight: 800, color: '#fff' }}>{member.initials}</span>
          </div>
          <div>
            <p style={{ fontSize: isLarge ? 17 : 15, fontWeight: 700, color: '#1A1A18', marginBottom: 3 }}>{member.name}</p>
            <p style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500 }}>{member.title}</p>
          </div>
        </div>
        <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.8 }}>{member.bio}</p>
        {member.hasProfile && (
          <p style={{ fontSize: 13, color: '#1B4332', fontWeight: 600, marginTop: 16, display: 'flex', alignItems: 'center', gap: 5 }}>
            View profile <Arrow size={12} color="#1B4332" />
          </p>
        )}
      </div>
    </div>
  )

  if (member.hasProfile && member.slug) {
    return (
      <Link href={`/team/${member.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        {inner}
      </Link>
    )
  }
  return inner
}

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '80px 0 64px' }}>
          <div className="fe-wrap" style={{ maxWidth: 680 }}>
            <h1 className="font-display" style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.08, marginBottom: 18 }}>
              The people, not the platform.
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.62)', lineHeight: 1.8 }}>
              Every feasibility study is assigned to a practitioner with direct project development experience in the relevant project type and geography. No black box. No outsourced analysis. You know exactly who is assessing your project — and why they are qualified to do it.
            </p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap" style={{ maxWidth: 960 }}>

            <p style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 24 }}>Leadership</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16, marginBottom: 56 }}>
              {LEADERSHIP.map((m, i) => (
                <MemberCard key={i} member={m} size="large" />
              ))}
            </div>

            <p style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 24 }}>Technical team</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {TECHNICAL.map((m, i) => (
                <MemberCard key={i} member={m} />
              ))}
            </div>

          </div>
        </section>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '72px 0' }}>
          <div className="fe-wrap" style={{ maxWidth: 640, textAlign: 'center' }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(24px,3.5vw,36px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 14 }}>
              Tell us about your project.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, marginBottom: 32 }}>
              We respond within one business day. If your project is suitable for a feasibility assessment, we will confirm which service applies and what happens next.
            </p>
            <Link href="/contact" className="btn-amber" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, padding: '14px 28px' }}>
              Get in touch <Arrow size={15} color="#1A1A18" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
