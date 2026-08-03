import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Insights — Feasibility.Earth',
  description: 'Practical analysis on carbon project feasibility, methodology, and market failures. Written by practitioners.',
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const ARTICLES = [
  {
    slug: 'satellite-data-carbon-project-assessment',
    tag: 'Methodology',
    title: 'How Satellite Data Replaced Site Visits in Carbon Project Feasibility',
    excerpt: 'Ten years ago, a credible feasibility assessment required field teams for weeks. Today, the same analysis — in most cases a more accurate one — is produced remotely in days. Here is what changed, what satellite data actually measures, and why this matters for project economics.',
    readTime: '5 min',
    date: 'August 2026',
  },
  {
    slug: 'verra-vcs-vs-gold-standard-plan-vivo',
    tag: 'Certification',
    title: 'Verra VCS, Gold Standard, or Plan Vivo: Which Standard Fits Your Carbon Project?',
    excerpt: 'Choosing the wrong certification standard at the feasibility stage is one of the most common and most correctable mistakes in carbon project development. The choice determines your methodology, buyer pool, and development timeline. Here is how to decide.',
    readTime: '7 min',
    date: 'July 2026',
  },
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

              {/* Featured first article */}
              <Link href={`/insights/${ARTICLES[0].slug}`} style={{ textDecoration: 'none', display: 'block' }} data-reveal>
                <div className="fe-card" style={{ overflow: 'hidden' }}>
                  <div style={{ background: 'linear-gradient(135deg, #0D1F15 0%, #1B4332 60%, #2D6A4F 100%)', padding: '44px 40px 40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: 'rgba(134,200,156,0.18)', color: '#86C89C', border: '1px solid rgba(134,200,156,0.2)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{ARTICLES[0].tag}</span>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)' }}>{ARTICLES[0].date} · {ARTICLES[0].readTime} read</span>
                      <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 4, background: 'rgba(212,160,23,0.2)', color: '#D4A017', border: '1px solid rgba(212,160,23,0.25)' }}>Latest</span>
                    </div>
                    <h2 className="font-display" style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, color: '#fff', lineHeight: 1.22, marginBottom: 14, maxWidth: 640, letterSpacing: '-0.02em' }}>{ARTICLES[0].title}</h2>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.58)', lineHeight: 1.78, maxWidth: 600, marginBottom: 24 }}>{ARTICLES[0].excerpt}</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: '#86C89C' }}>
                      Read article <Arrow size={13} color="#86C89C" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Remaining articles */}
              {ARTICLES.slice(1).map((article, i) => (
                <Link key={i} href={`/insights/${article.slug}`} style={{ textDecoration: 'none', display: 'block' }} data-reveal data-reveal-delay={String(i * 60)}>
                  <div className="fe-card" style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                        <span className="fe-badge fe-badge-green" style={{ fontSize: 10 }}>{article.tag}</span>
                        <span style={{ fontSize: 11, color: '#9CA3AF' }}>{article.date} · {article.readTime} read</span>
                      </div>
                      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1A1A18', lineHeight: 1.35, marginBottom: 8 }}>{article.title}</h2>
                      <p style={{ fontSize: 13.5, color: '#5C5C58', lineHeight: 1.75 }}>{article.excerpt}</p>
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

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '64px 0' }}>
          <div className="fe-wrap" style={{ maxWidth: 640 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#40916C', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: 12 }}>New analysis, when we publish it</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(22px,3.5vw,32px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 10 }}>
              Stay current on feasibility methodology.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 28 }}>
              We publish new analysis when something is worth saying — not on a forced schedule. No filler.
            </p>
            <NewsletterForm variant="dark" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
