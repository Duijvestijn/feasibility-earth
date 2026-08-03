'use client'
import { useState } from 'react'

function CheckIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

const SECTIONS = [
  {
    section: 'Land & Baseline Analysis',
    items: ['10-year satellite land use history', 'NDVI vegetation index & biomass mapping', 'Deforestation rate analysis vs. regional benchmarks', 'Existing carbon stock estimation'],
  },
  {
    section: 'Additionality Assessment',
    items: ['Regulatory surplus test (current legislation)', 'Financial & investment barrier analysis', 'Performance benchmark vs. comparable activities', 'Additionality risk rating with evidence'],
  },
  {
    section: 'Carbon Potential',
    items: ['Annual CO₂ sequestration / avoidance estimate', 'Confidence ranges & sensitivity analysis', 'Projection over full project lifetime', 'Credit volume at scenario market prices'],
  },
  {
    section: 'Certification & Compliance',
    items: ['Recommended standard (Verra VCS, Gold Standard, Plan Vivo)', 'Gap analysis vs. current methodology requirements', 'Applicability conditions assessment', 'fNRB / baseline methodology validation'],
  },
  {
    section: 'Risk Register',
    items: ['Permanence risk & buffer pool estimate', 'Leakage risk assessment', 'Socioeconomic & political risk', 'Land ownership & tenure review'],
  },
  {
    section: 'Financial Projections',
    items: ['Revenue model at bear / base / bull carbon prices', 'Development cost estimates', 'Timeline to first credit issuance', 'Net present value range'],
  },
  {
    section: 'Development Pathway',
    items: ['Recommended next steps to PDD', 'Estimated PDD development cost & timeline', 'VVB engagement roadmap', 'MRV framework outline'],
  },
]

export default function ReportSections() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div>
      <p style={{ fontSize: 12, fontWeight: 700, color: '#5C5C58', letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: 14 }}>
        What the 70+ page report covers
      </p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {SECTIONS.map((group, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                background: 'none',
                border: 'none',
                borderBottom: `1px solid ${open === i ? '#C8D4CC' : '#E8E4DF'}`,
                cursor: 'pointer',
                textAlign: 'left',
                gap: 12,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, color: '#1B4332', letterSpacing: '0.6px', textTransform: 'uppercase' as const }}>{group.section}</span>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 500 }}>{group.items.length} items</span>
                <svg
                  width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.22s ease', flexShrink: 0 }}
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
            </button>
            <div style={{ display: 'grid', gridTemplateRows: open === i ? '1fr' : '0fr', transition: 'grid-template-rows 0.28s cubic-bezier(0.22, 1, 0.36, 1)' }}>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: '10px 0 8px' }}>
                  {group.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <div style={{ width: 16, height: 16, borderRadius: 4, background: '#EBF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <CheckIcon />
                      </div>
                      <span style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
