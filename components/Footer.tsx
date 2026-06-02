import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1B4332', color: 'rgba(255,255,255,0.7)', marginTop: 'auto' }}>
      <div className="fe-wrap" style={{ padding: '64px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" fill="white"/>
                  <circle cx="12" cy="10" r="3" fill="rgba(255,255,255,0.4)"/>
                </svg>
              </div>
              <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>feasibility.earth</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 220 }}>
              Know if your land qualifies for a carbon project — in minutes, not months.
            </p>
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 100, background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}>Verra VCS</span>
              <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 100, background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}>Gold Standard</span>
            </div>
          </div>

          {/* Platform */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Platform</p>
            {['How It Works', 'Pricing', 'Use Cases', 'FAQ'].map(l => (
              <Link key={l} href={`/${l.toLowerCase().replace(/ /g, '-')}`} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: 10, transition: 'color .15s' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}>
                {l}
              </Link>
            ))}
          </div>

          {/* Project types */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Project Types</p>
            {['Reforestation', 'Agroforestry', 'ARR Projects', 'Cookstoves'].map(l => (
              <Link key={l} href="/use-cases" style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: 10, transition: 'color .15s' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}>
                {l}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Contact</p>
            <a href="mailto:feasibility@green.earth" style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: 10 }}>feasibility@green.earth</a>
            <p style={{ fontSize: 13, lineHeight: 1.6, marginTop: 16 }}>A Green Earth Group platform</p>
            <Link href="https://green.earth" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 13, color: '#40916C', textDecoration: 'none', fontWeight: 600 }}>
              green.earth →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13 }}>© 2026 Feasibility.Earth · Green Earth Group N.V.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/privacy" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
