'use client'
import { useState } from 'react'

export default function NewsletterForm({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const dark = variant === 'dark'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 24, height: 24, borderRadius: '50%', background: dark ? 'rgba(216,243,220,0.2)' : '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={dark ? '#86C89C' : '#1B4332'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <p style={{ fontSize: 14, color: dark ? 'rgba(255,255,255,0.75)' : '#1B4332', fontWeight: 600 }}>
          Subscribed — you will hear from us when we publish new analysis.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <label htmlFor="newsletter-email" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        style={{
          flex: '1 1 220px',
          padding: '11px 14px',
          borderRadius: 8,
          border: dark ? '1px solid rgba(255,255,255,0.2)' : '1px solid #D1D5DB',
          background: dark ? 'rgba(255,255,255,0.08)' : '#fff',
          color: dark ? '#fff' : '#1A1A18',
          fontSize: 14,
          outline: 'none',
        }}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={dark ? 'btn-amber' : 'btn-primary'}
        style={{ padding: '11px 22px', fontSize: 14, opacity: status === 'loading' ? 0.6 : 1 }}
      >
        {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p style={{ width: '100%', fontSize: 12, color: dark ? 'rgba(255,100,100,0.8)' : '#DC2626' }}>
          Something went wrong — try again or email us directly.
        </p>
      )}
    </form>
  )
}
