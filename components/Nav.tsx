'use client'
import Link from 'next/link'
import { useState } from 'react'

const LINKS = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/use-cases',    label: 'Use Cases' },
  { href: '/pricing',      label: 'Pricing' },
  { href: '/faq',          label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(250,250,248,0.95)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #E2DDD6',
    }}>
      <div className="fe-wrap" style={{ display: 'flex', alignItems: 'center', height: 68, gap: 40 }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 9,
            background: 'linear-gradient(135deg, #1B4332 0%, #40916C 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" fill="white" opacity=".9"/>
              <circle cx="12" cy="10" r="3" fill="white"/>
            </svg>
          </div>
          <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 18, fontWeight: 700, color: '#1B4332', letterSpacing: '-0.3px' }}>
            feasibility<span style={{ color: '#40916C' }}>.earth</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', listStyle: 'none', gap: 4, flex: 1 }} className="hidden md:flex">
          {LINKS.map(l => (
            <li key={l.href}>
              <Link href={l.href} style={{
                padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
                color: '#5C5C58', textDecoration: 'none', display: 'block', transition: 'color .15s, background .15s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#1B4332'; (e.target as HTMLElement).style.background = '#F0EDE8'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = '#5C5C58'; (e.target as HTMLElement).style.background = 'transparent'; }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }} className="hidden md:flex">
          <Link href="https://app.feasibility.earth" target="_blank" className="btn-outline" style={{ padding: '9px 20px', fontSize: 14 }}>
            Log in
          </Link>
          <Link href="/pricing" className="btn-primary" style={{ padding: '10px 20px', fontSize: 14 }}>
            Start a Study
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: 6 }} className="md:hidden">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round">
            {open ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></> : <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: '1px solid #E2DDD6', background: '#FAFAF8', padding: '16px 24px 24px' }}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '12px 0', fontSize: 15, fontWeight: 500,
              color: '#1A1A18', textDecoration: 'none', borderBottom: '1px solid #F0EDE8',
            }}>{l.label}</Link>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
            <Link href="https://app.feasibility.earth" target="_blank" className="btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: 14 }}>Log in</Link>
            <Link href="/pricing" className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: 14 }}>Start a Study</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
