import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1B4332', color: 'rgba(255,255,255,0.6)' }}>
      <div className="fe-wrap" style={{ padding: '60px 24px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 52 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #1B4332 0%, #40916C 100%)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" fill="white" opacity=".9"/>
                  <circle cx="12" cy="10" r="3" fill="rgba(255,255,255,0.5)"/>
                </svg>
              </div>
              <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>feasibility.earth</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.75, maxWidth: 210, color: 'rgba(255,255,255,0.5)' }}>
              From land to bankable carbon project — eligibility, feasibility, and full project development.
            </p>
            <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['Verra VCS', 'Gold Standard', 'Plan Vivo'].map(tag => (
                <span key={tag} style={{ fontSize: 10, fontWeight: 600, padding: '3px 9px', borderRadius: 100, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.10)', whiteSpace: 'nowrap' as const }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.1px', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.32)', marginBottom: 16 }}>Services</p>
            {[
              { href: '/pricing#pre-feasibility', label: 'Eligibility Check — $500' },
              { href: '/pricing#feasibility',     label: 'Full Feasibility Study — $7,500' },
              { href: '/pricing#development',     label: 'Project Development' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="fe-footer-link" style={{ display: 'block', fontSize: 13, marginBottom: 10 }}>{l.label}</Link>
            ))}
          </div>

          {/* Platform */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.1px', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.32)', marginBottom: 16 }}>Platform</p>
            {[
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/use-cases',    label: 'Use Cases' },
              { href: '/faq',          label: 'FAQ' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="fe-footer-link" style={{ display: 'block', fontSize: 13, marginBottom: 10 }}>{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.1px', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.32)', marginBottom: 16 }}>Contact</p>
            <a href="mailto:feasibility@green.earth" className="fe-footer-link" style={{ display: 'block', fontSize: 13, marginBottom: 10 }}>feasibility@green.earth</a>
            <a href="https://green.earth" target="_blank" rel="noopener noreferrer" className="fe-footer-link" style={{ display: 'block', fontSize: 13 }}>green.earth</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>
            © 2026 Feasibility.Earth
          </p>

          {/* Subtle GEG credit */}
          <Link href="https://green.earth" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, textDecoration: 'none', opacity: 0.45, transition: 'opacity .15s' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" fill="rgba(255,255,255,0.7)"/>
              <circle cx="12" cy="10" r="3" fill="rgba(255,255,255,0.35)"/>
            </svg>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 500, letterSpacing: '0.2px' }}>A Green Earth Group platform</span>
          </Link>

          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/privacy" className="fe-footer-link" style={{ fontSize: 12 }}>Privacy</Link>
            <Link href="/terms"   className="fe-footer-link" style={{ fontSize: 12 }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
