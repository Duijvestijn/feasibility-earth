'use client'
import { useState } from 'react'

function Arrow({ size = 15, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const inputStyle = { width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #D1D5DB', fontSize: 14, color: '#1A1A18', outline: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit' }
const labelStyle = { fontSize: 12, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, letterSpacing: '0.3px' } as const

export default function ContactForm() {
  const [fields, setFields] = useState({ firstName: '', lastName: '', email: '', organisation: '', role: '', message: '' })
  const [newsletter, setNewsletter] = useState(false)
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
        body: JSON.stringify({ ...fields, newsletter }),
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
            <label htmlFor="firstName" style={labelStyle}>First name</label>
            <input id="firstName" name="firstName" type="text" autoComplete="given-name" placeholder="Your first name" value={fields.firstName} onChange={set('firstName')} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="lastName" style={labelStyle}>Last name</label>
            <input id="lastName" name="lastName" type="text" autoComplete="family-name" placeholder="Your last name" value={fields.lastName} onChange={set('lastName')} style={inputStyle} />
          </div>
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Work email *</label>
          <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@organisation.com" value={fields.email} onChange={set('email')} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="organisation" style={labelStyle}>Organisation</label>
          <input id="organisation" name="organisation" type="text" autoComplete="organization" placeholder="Company or fund name" value={fields.organisation} onChange={set('organisation')} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="role" style={labelStyle}>Your role</label>
          <select id="role" name="role" value={fields.role} onChange={set('role')} style={{ ...inputStyle, background: '#fff' }}>
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
          <label htmlFor="message" style={labelStyle}>Tell us about your project *</label>
          <textarea id="message" name="message" required placeholder="Location, land size, project type, number of projects — whatever you know at this stage" rows={5} value={fields.message} onChange={set('message')} style={{ ...inputStyle, resize: 'vertical' }} />
        </div>
        <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={newsletter}
            onChange={e => setNewsletter(e.target.checked)}
            style={{ marginTop: 3, accentColor: '#1B4332', flexShrink: 0, width: 15, height: 15 }}
          />
          <span style={{ fontSize: 13, color: '#5C5C58', lineHeight: 1.6 }}>
            Keep me updated — I would like to receive methodology insights and analysis from Feasibility.Earth.
          </span>
        </label>
        {status === 'error' && (
          <p style={{ fontSize: 13, color: '#DC2626', background: '#FEF2F2', padding: '10px 14px', borderRadius: 8, margin: 0 }}>
            Something went wrong — please try again or email us at feasibility@green.earth
          </p>
        )}
        <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ justifyContent: 'center', display: 'flex', gap: 8, fontSize: 15, padding: '14px 0', opacity: status === 'loading' ? 0.6 : 1 }}>
          {status === 'loading' ? 'Sending…' : <>Send — we will respond within one business day <Arrow size={15} color="#fff" /></>}
        </button>
        <p style={{ fontSize: 11, color: '#9CA3AF', textAlign: 'center', lineHeight: 1.6, margin: 0 }}>
          This goes directly to our feasibility team. By submitting you agree to our <a href="/privacy" style={{ color: '#6B7280', textDecoration: 'underline' }}>Privacy Policy</a>.
        </p>
      </form>
    </div>
  )
}
