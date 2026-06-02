import Link from 'next/link'

// TeamSection — buyer-facing bios: what their experience means for your project

const TEAM = [
  {
    initials: 'NW',
    name: 'Nicholas Wall',
    title: 'Head of Project Feasibility',
    // Buyer-facing: what his experience means for them, not what he does
    value: 'He has evaluated 100+ carbon project applications and led feasibility work on projects across Nigeria, Uganda, Cameroon, and Kazakhstan. He knows the specific failure modes that certification bodies flag — and catches them at the assessment stage, before they cost you capital.',
    insight: '"The most expensive feasibility mistake is missing an additionality failure that was visible in the land-use data. I have seen it happen on projects that took 18 months and $400K to develop before the error surfaced. We catch it in week one."',
    color: '#1B4332',
  },
  {
    initials: 'AA',
    name: 'Angel Daniel Armas',
    title: 'Senior Carbon Analyst',
    value: 'Leads satellite analysis and CO₂ potential modelling. Has validated fNRB assumptions for cookstove projects against regional field data — the single largest source of systematic overcrediting in the market. His analysis is what makes the difference between a study that passes certification review and one that does not.',
    insight: '"The industry average fNRB assumption for cookstove projects is around 80%. Regional field data consistently shows the real figure is 25–35%. That gap means projects issued at industry-standard assumptions are overcrediting by 2–3 times. We use the field data."',
    color: '#2D6A4F',
  },
  {
    initials: 'VK',
    name: 'Vaseem Khan',
    title: 'Remote Sensing & GIS Lead',
    value: 'Responsible for satellite data processing and the carbon stock modelling tools used in all assessments. Has built baseline carbon maps across four countries, giving our team proprietary regional datasets that most desk-based assessors do not have access to.',
    insight: '"Baseline carbon assumptions drive a majority of the variance in credit volume estimates. We do not use global averages. We build baselines from regional data, and we validate them against on-ground measurements where available."',
    color: '#40916C',
  },
]

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

export default function TeamSection() {
  return (
    <section style={{ background: '#FAFAF8', padding: '96px 0', borderTop: '1px solid #E8E4DF' }}>
      <div className="fe-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, alignItems: 'flex-start' }}>

          {/* Left: framing */}
          <div style={{ position: 'sticky', top: 96 }}>
            <div className="fe-badge fe-badge-green" style={{ marginBottom: 18 }}>Who assesses your project</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(24px,3.5vw,36px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.25, marginBottom: 16 }}>
              The people, not the platform.
            </h2>
            <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.85, marginBottom: 24 }}>
              Every feasibility study is assigned to a practitioner with direct project development experience in the relevant type and geography. Below is the team. These are the people who will review your project — not a software pipeline.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#1B4332', fontWeight: 700, textDecoration: 'none' }}>
              Tell us about your project <Arrow size={14} color="#1B4332" />
            </Link>
          </div>

          {/* Right: team cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {TEAM.map((member, i) => (
              <div key={i} style={{ borderRadius: 16, border: '1px solid #E2DDD6', overflow: 'hidden', background: '#fff' }}>
                <div style={{ height: 4, background: member.color }} />
                <div style={{ padding: '28px 28px' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: member.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 16, fontWeight: 800, color: '#fff' }}>{member.initials}</span>
                    </div>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', marginBottom: 2 }}>{member.name}</p>
                      <p style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500 }}>{member.title}</p>
                    </div>
                  </div>

                  {/* Buyer-facing value statement */}
                  <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.8, marginBottom: 18 }}>{member.value}</p>

                  {/* Attributed insight — specific, not generic */}
                  <div style={{ padding: '16px 18px', background: '#F9FAFB', borderRadius: 10, border: '1px solid #E8E4DF' }}>
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 8 }}>&ldquo;{member.insight}&rdquo;</p>
                    <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600 }}>— {member.name}, {member.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
