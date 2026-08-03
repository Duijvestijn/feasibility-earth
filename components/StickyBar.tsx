'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('stickyBarDismissed')) {
      setDismissed(true)
      return
    }
    const handler = () => setVisible(window.scrollY > 520)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function dismiss() {
    setDismissed(true)
    sessionStorage.setItem('stickyBarDismissed', '1')
  }

  const show = visible && !dismissed

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: 'rgba(15,30,19,0.97)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(64,145,108,0.18)',
        padding: '10px 24px',
        transform: show ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)' }}>Eligibility check:</span>
          <span style={{ fontSize: 15, fontWeight: 800, color: '#fff', fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}>$500</span>
          <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', whiteSpace: 'nowrap' }}>2–3 business days · 50% refund if land doesn't qualify</span>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
          <Link
            href="https://app.feasibility.earth"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 18px', background: '#D4A017', color: '#1A1A18',
              fontWeight: 700, fontSize: 13, borderRadius: 7, textDecoration: 'none',
            }}
          >
            Start now →
          </Link>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.28)', padding: '4px 6px', fontSize: 18, lineHeight: 1, display: 'flex', alignItems: 'center' }}
          >
            ×
          </button>
        </div>
      </div>
    </div>
  )
}
