import Link from 'next/link'

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const TOC = [
  { n: '01', title: 'Land & Baseline Analysis', pages: 'pp. 8–22' },
  { n: '02', title: 'Additionality Assessment', pages: 'pp. 23–36' },
  { n: '03', title: 'Carbon Potential & Projections', pages: 'pp. 37–52' },
  { n: '04', title: 'Certification & Compliance', pages: 'pp. 53–62' },
  { n: '05', title: 'Risk Register', pages: 'pp. 63–72' },
  { n: '06', title: 'Financial Projections', pages: 'pp. 73–84' },
  { n: '07', title: 'Development Pathway', pages: 'pp. 85–96' },
]

const RISK_ITEMS = [
  { label: 'Permanence', level: 'medium', impact: 'High', prob: 'Low' },
  { label: 'Additionality', level: 'low', impact: 'High', prob: 'Low' },
  { label: 'Leakage', level: 'low', impact: 'Medium', prob: 'Low' },
  { label: 'Land tenure', level: 'medium', impact: 'High', prob: 'Medium' },
  { label: 'Political risk', level: 'low', impact: 'Medium', prob: 'Low' },
  { label: 'Market / price', level: 'medium', impact: 'High', prob: 'Medium' },
]

const riskColor = (l: string) => l === 'high' ? '#DC2626' : l === 'medium' ? '#D97706' : '#16A34A'
const riskBg   = (l: string) => l === 'high' ? '#FEF2F2' : l === 'medium' ? '#FFFBEB' : '#F0FDF4'

// Carbon bars: bear / base / bull across 5 years
const YEARS = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5']
const SCENARIOS = {
  bear: [3200, 8100, 14200, 18500, 21000],
  base: [4800, 12000, 20800, 27500, 31250],
  bull: [6100, 15400, 26500, 35000, 39800],
}
const MAX_VAL = 42000

export default function ReportPreviewSection() {
  return (
    <section style={{ background: '#111816', padding: '88px 0', overflow: 'hidden' }}>
      <div className="fe-wrap">

        {/* Header */}
        <div style={{ marginBottom: 52, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#40916C', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 10 }}>What you receive</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, maxWidth: 560 }}>
              A 70+ page report built for investor<br />and certification scrutiny.
            </h2>
          </div>
          <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#86C89C', fontWeight: 600, textDecoration: 'none', flexShrink: 0, paddingBottom: 4 }}>
            Full scope & pricing <Arrow size={14} color="#86C89C" />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 340px) 1fr', gap: 20, alignItems: 'start' }}>

          {/* ── COVER PAGE MOCKUP ── */}
          <div style={{ background: 'linear-gradient(165deg, #1B4332 0%, #0D2B1F 100%)', borderRadius: 16, padding: '36px 28px 28px', border: '1px solid rgba(255,255,255,0.08)', aspectRatio: '0.707', display: 'flex', flexDirection: 'column', boxShadow: '0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)' }}>

            {/* Cover top */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
                <div style={{ height: 2, width: 28, background: '#40916C', borderRadius: 2 }} />
                <div style={{ height: 2, width: 10, background: 'rgba(64,145,108,0.35)', borderRadius: 2 }} />
              </div>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Pre-Feasibility Study</p>
              <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: 6 }}>Carbon Project<br />Assessment Report</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>Prepared by Feasibility.Earth</p>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 20 }} />

            {/* Metadata block */}
            <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Standard', value: 'Verra VCS / VM0047' },
                { label: 'Assessed area', value: '2,840 ha' },
                { label: 'Est. CO₂', value: '31,250 tCO₂e/yr' },
                { label: 'Confidence', value: 'High (±12%)' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>{row.label}</span>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', fontWeight: 700, textAlign: 'right' }}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* TOC */}
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>Contents</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {TOC.map(t => (
                  <div key={t.n} style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 9, fontWeight: 800, color: '#40916C', flexShrink: 0 }}>{t.n}</span>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)', flex: 1, lineHeight: 1.4 }}>{t.title}</span>
                    <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', flexShrink: 0 }}>{t.pages}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>feasibility.earth</span>
              <div style={{ background: 'rgba(64,145,108,0.2)', border: '1px solid rgba(64,145,108,0.35)', borderRadius: 100, padding: '3px 10px' }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: '#86C89C', letterSpacing: '0.5px' }}>70+ pages</span>
              </div>
            </div>
          </div>

          {/* ── INNER PAGES ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Carbon projection chart page */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 26px', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 4 }}>Section 03 — Carbon Potential & Projections</p>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18' }}>Annual CO₂e projection — bear / base / bull</p>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {[['Bear', '#94A3B8'], ['Base', '#40916C'], ['Bull', '#1B4332']].map(([label, color]) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: color }} />
                      <span style={{ fontSize: 10, color: '#6B7280' }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <svg viewBox={`0 0 520 140`} style={{ width: '100%', display: 'block' }}>
                {/* Gridlines */}
                {[0, 0.25, 0.5, 0.75, 1].map(frac => {
                  const y = 120 - frac * 110
                  return (
                    <g key={frac}>
                      <line x1="44" y1={y} x2="516" y2={y} stroke="#F3F4F6" strokeWidth="1" />
                      <text x="40" y={y + 4} textAnchor="end" fill="#9CA3AF" fontSize="8">
                        {Math.round(frac * MAX_VAL / 1000)}k
                      </text>
                    </g>
                  )
                })}
                {/* Bars */}
                {YEARS.map((yr, i) => {
                  const groupW = 88
                  const barW = 18
                  const gap = 5
                  const x0 = 52 + i * groupW
                  const scenarios: Array<[keyof typeof SCENARIOS, string]> = [
                    ['bear', '#94A3B8'],
                    ['base', '#40916C'],
                    ['bull', '#1B4332'],
                  ]
                  return (
                    <g key={yr}>
                      {scenarios.map(([key, color], j) => {
                        const val = SCENARIOS[key][i]
                        const h = (val / MAX_VAL) * 110
                        const x = x0 + j * (barW + gap)
                        const y = 120 - h
                        return (
                          <rect key={key} x={x} y={y} width={barW} height={h} fill={color} rx="2" />
                        )
                      })}
                      <text x={x0 + (barW + gap) * 1} y={136} textAnchor="middle" fill="#6B7280" fontSize="9">{yr}</text>
                    </g>
                  )
                })}
              </svg>

              <div style={{ display: 'flex', gap: 20, marginTop: 12, paddingTop: 12, borderTop: '1px solid #F3F4F6' }}>
                {[['Bear', '21,000 tCO₂e', '#94A3B8'], ['Base', '31,250 tCO₂e', '#40916C'], ['Bull', '39,800 tCO₂e', '#1B4332']].map(([s, v, c]) => (
                  <div key={s}>
                    <p style={{ fontSize: 9, color: '#9CA3AF', marginBottom: 2 }}>{s} (Y5 est.)</p>
                    <p style={{ fontSize: 14, fontWeight: 700, color: c }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk register page */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '22px 26px', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 4 }}>Section 05 — Risk Register</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', marginBottom: 16 }}>Identified risks — probability × impact</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 72px', gap: 0 }}>
                {/* Header row */}
                {['Risk factor', 'Probability', 'Impact', 'Rating'].map((h, i) => (
                  <div key={i} style={{ padding: '6px 10px', background: '#F9FAFB', borderBottom: '1px solid #E5E7EB', borderRight: i < 3 ? '1px solid #E5E7EB' : 'none' }}>
                    <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#6B7280' }}>{h}</span>
                  </div>
                ))}
                {/* Data rows */}
                {RISK_ITEMS.map((r, i) => (
                  [
                    <div key={`${i}a`} style={{ padding: '7px 10px', borderBottom: '1px solid #F3F4F6', borderRight: '1px solid #F3F4F6' }}>
                      <span style={{ fontSize: 11, color: '#374151', fontWeight: 500 }}>{r.label}</span>
                    </div>,
                    <div key={`${i}b`} style={{ padding: '7px 10px', borderBottom: '1px solid #F3F4F6', borderRight: '1px solid #F3F4F6' }}>
                      <span style={{ fontSize: 11, color: '#6B7280' }}>{r.prob}</span>
                    </div>,
                    <div key={`${i}c`} style={{ padding: '7px 10px', borderBottom: '1px solid #F3F4F6', borderRight: '1px solid #F3F4F6' }}>
                      <span style={{ fontSize: 11, color: '#6B7280' }}>{r.impact}</span>
                    </div>,
                    <div key={`${i}d`} style={{ padding: '5px 10px', borderBottom: '1px solid #F3F4F6', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: riskBg(r.level), color: riskColor(r.level) }}>
                        {r.level.charAt(0).toUpperCase() + r.level.slice(1)}
                      </span>
                    </div>,
                  ]
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom note */}
        <p style={{ marginTop: 28, fontSize: 12, color: 'rgba(255,255,255,0.28)', textAlign: 'center' }}>
          Representative report structure. Actual project numbers, risk ratings, and recommendations vary based on land, methodology, and standard assessed.
        </p>

      </div>
    </section>
  )
}
