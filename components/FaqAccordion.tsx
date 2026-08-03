'use client'
import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {items.map((faq, i) => (
        <div
          key={i}
          style={{
            background: '#FAFAF8',
            borderRadius: 12,
            border: `1px solid ${open === i ? '#C8D4CC' : '#E2DDD6'}`,
            overflow: 'hidden',
            transition: 'border-color .18s ease',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              padding: '20px 24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: 16,
            }}
          >
            <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', lineHeight: 1.4, margin: 0 }}>{faq.q}</p>
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: open === i ? '#1B4332' : '#EBF5EE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 2,
                transition: 'background .18s ease',
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={open === i ? '#fff' : '#1B4332'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {open === i
                  ? <line x1="5" y1="12" x2="19" y2="12"/>
                  : <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>
                }
              </svg>
            </div>
          </button>
          <div style={{ display: 'grid', gridTemplateRows: open === i ? '1fr' : '0fr', transition: 'grid-template-rows 0.32s cubic-bezier(0.22, 1, 0.36, 1)' }}>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ padding: '0 24px 20px' }}>
                <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
