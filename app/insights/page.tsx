import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights — Feasibility.Earth',
  description: 'Practical analysis on carbon project feasibility, methodology, and market failures. Written by practitioners.',
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const ARTICLES = [
  {
    slug: 'why-carbon-projects-fail-feasibility',
    tag: 'Methodology',
    title: 'Why Nature-Based Carbon Projects Fail — and What a Rigorous Feasibility Assessment Should Catch',
    excerpt: 'Nature-based carbon projects fail certification at a high rate — not because of bad land, but because of assessments that miss the problems that matter. Here is what those problems are, and how a rigorous pre-development feasibility screen should address them.',
    readTime: '8 min',
    date: 'June 2026',
  },
  {
    slug: 'carbon-feasibility-study-cost',
    tag: 'Due Diligence',
    title: 'What Does a Carbon Project Feasibility Study Cost — and What Are You Actually Buying?',
    excerpt: 'Traditional feasibility studies from environmental consultancies cost $25,000–$75,000 and take months. But the study itself is not the product — what you are buying is risk elimination. Here is how to evaluate what a study is worth, and what separates rigorous work from desk-based templates.',
    readTime: '6 min',
    date: 'May 2026',
  },
  {
    slug: 'additionality-failure-carbon-projects',
    tag: 'Certification',
    title: 'The Additionality Problem: Why Half of Top Carbon Projects Carry Certification Risk',
    excerpt: 'Additionality — the requirement that carbon benefits would not have occurred without the project — is the most consequential test in carbon project development. It is also the most consistently missed in early-stage feasibility work. This is how it fails, and why.',
    readTime: '7 min',
    date: 'April 2026',
  },
]

export default function InsightsPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '80px 0 64px' }}>
          <div className="fe-wrap">
            <div style={{ maxWidth: 600 }}>
              <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.10)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.14)', marginBottom: 22 }}>Insights</div>
              <h1 className="font-display" style={{ fontSize: 'clamp(30px,5vw,50px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
                Practical analysis from practitioners.
              </h1>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.58)', lineHeight: 1.8 }}>
                On carbon project feasibility, methodology failures, and what rigorous assessment actually requires.
              </p>
            </div>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap" style={{ maxWidth: 820 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {ARTICLES.map((article, i) => (
                <Link key={i} href={`/insights/${article.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="fe-card" style={{ padding: '32px 32px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                        <span className="fe-badge fe-badge-green" style={{ fontSize: 10 }}>{article.tag}</span>
                        <span style={{ fontSize: 11, color: '#9CA3AF' }}>{article.date} · {article.readTime} read</span>
                      </div>
                      <h2 style={{ fontSize: 19, fontWeight: 700, color: '#1A1A18', lineHeight: 1.35, marginBottom: 10 }}>{article.title}</h2>
                      <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.75 }}>{article.excerpt}</p>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                      <Arrow size={18} color="#1B4332" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
