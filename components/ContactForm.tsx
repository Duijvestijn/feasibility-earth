'use client'
import { useState } from 'react'

function Arrow({ size = 15, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const inputStyle = { width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #D1D5DB', fontSize: 14, color: '#1A1A18', outline: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit' }
const labelStyle = { fontSize: 12, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.3px' } as const

export default function ContactForm() {
  const [fields, setFields] = useState({ firstName: '', lastName: '', email: '', organisation: '', role: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function set(key: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields(f => ({ ...f, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #D4E9DC', padding: '40px 32px', textAlign: 'center' }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 10 }}>We received your inquiry.</h3>
        <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.75, maxWidth: 380, margin: '0 auto' }}>
          Our feasibility team will respond within one business day. Check your inbox for a confirmation.
        </p>
      </div>
    )
  }

  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E2DDD6', padding: '32px 28px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div className="fe-form-row">
          <div>
            <label style={labelStyle}>First name</label>
            <input type="text" placeholder="Your first name" value={fields.firstName} onChange={set('firstName')} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Last name</label>
            <input type="text" placeholder="Your last name" value={fields.lastName} onChange={set('lastName')} style={inputStyle} />
          </div>
        </div>
        <div>
          <label style={labelStyle}>Work email *</label>
          <input type="email" required placeholder="you@organisation.com" value={fields.email} onChange={set('email')} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Organisation</label>
          <input type="text" placeholder="Company or fund name" value={fields.organisation} onChange={set('organisation')} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Your role</label>
          <select value={fields.role} onChange={set('role')} style={{ ...inputStyle, background: '#fff' }}>
            <option value="">Select your role</option>
            <option value="Project developer">Project developer</option>
            <option value="Investor / fund manager">Investor / fund manager</option>
            <option value="Landowner">Landowner</option>
            <option value="Carbon aggregator">Carbon aggregator</option>
            <option value="Development finance institution">Development finance institution</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Tell us about your project *</label>
          <textarea required placeholder="Location, land size, project type, number of projects — whatever you know at this stage" rows={5} value={fields.message} onChange={set('message')} style={{ ...inputStyle, resize: 'vertical' }} />
        </div>
        {status === 'error' && (
          <p style={{ fontSize: 13, color: '#DC2626', background: '#FEF2F2', padding: '10px 14px', borderRadius: 8, margin: 0 }}>
            Something went wrong — please try again or email us at feasibility@green.earth
          </p>
        )}
        <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ justifyContent: 'center', display: 'flex', gap: 8, fontSize: 15, padding: '14px 0', opacity: status === 'loading' ? 0.6 : 1 }}>
          {status === 'loading' ? 'Sending…' : <>Send — we will respond within one business day <Arrow size={15} color="#fff" /></>}
        </button>
        <p style={{ fontSize: 11, color: '#9CA3AF', textAlign: 'center', lineHeight: 1.6, margin: 0 }}>
          This goes directly to our feasibility team. We do not pass your details to third parties.
        </p>
      </form>
    </div>
  )
}
