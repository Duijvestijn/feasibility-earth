// TeamSection — drop this into any page
// Replace placeholder data with real team members, photos, and quotes

const TEAM = [
  {
    initials: 'SD',
    name: 'Selwyn Duijvestijn',
    title: 'Founder & CEO',
    background: 'Founded Green Earth Group and has overseen the development of nature-based carbon projects across Africa and Central Asia. Responsible for the commercial and strategic direction of the project portfolio.',
    projects: ['Sauki Cookstoves — Nigeria', 'Aral Sea Afforestation — Kazakhstan'],
    color: '#1B4332',
  },
  {
    initials: 'NW',
    name: 'Nicholas Wall',
    title: 'Head of Project Feasibility',
    background: 'Leads the technical feasibility assessment process. Responsible for evaluating carbon project applications, running eligibility screens, and coordinating the production of full feasibility reports.',
    projects: ['Bulindi Agroforestry — Uganda', 'Greenzone Reforestation — Cameroon'],
    color: '#2D6A4F',
  },
  {
    initials: 'AA',
    name: 'Angel Daniel Armas',
    title: 'Senior Carbon Analyst',
    background: 'Leads satellite analysis, allometric CO₂ modelling, and technical field assessment. Specialises in ARR and cookstove methodology, including calibration of fNRB assumptions against regional field data.',
    projects: ['Aral Sea land analysis', 'Sauki fNRB field validation'],
    color: '#40916C',
  },
  {
    initials: 'VK',
    name: 'Vaseem Khan',
    title: 'Remote Sensing & GIS Lead',
    background: 'Responsible for satellite data processing, NDVI time-series analysis, and the digital infrastructure underpinning our assessment platform. Develops and maintains the carbon stock modelling tools used in all feasibility work.',
    projects: ['GIS platform development', 'Baseline carbon mapping — 4 countries'],
    color: '#6B4226',
  },
]

function ArrowRight({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

export default function TeamSection() {
  return (
    <section style={{ background: '#fff', padding: '96px 0' }}>
      <div className="fe-wrap">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="fe-badge fe-badge-green" style={{ marginBottom: 16 }}>The team</div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.2 }}>
            The people who will assess your project.
          </h2>
          <p style={{ fontSize: 15, color: '#5C5C58', marginTop: 14, maxWidth: 500, margin: '14px auto 0', lineHeight: 1.8 }}>
            Every feasibility study is assigned to one of these practitioners. They have been involved in the development and certification of each project in our portfolio.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
          {TEAM.map((member, i) => (
            <div key={i} style={{ borderRadius: 16, border: '1px solid #E2DDD6', overflow: 'hidden', background: '#FAFAF8' }}>
              {/* Avatar */}
              <div style={{ height: 10, background: member.color }} />
              <div style={{ padding: '28px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: member.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '0.5px' }}>{member.initials}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', marginBottom: 2 }}>{member.name}</p>
                    <p style={{ fontSize: 12, color: '#5C5C58', fontWeight: 500 }}>{member.title}</p>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: '#5C5C58', lineHeight: 1.75, marginBottom: 16 }}>{member.background}</p>
                <div style={{ borderTop: '1px solid #E8E4DF', paddingTop: 14 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 8 }}>Projects</p>
                  {member.projects.map((p, j) => (
                    <p key={j} style={{ fontSize: 12, color: '#374151', marginBottom: 4 }}>— {p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Attributed proof point */}
        <div style={{ marginTop: 52, padding: '36px 40px', borderRadius: 20, background: 'linear-gradient(135deg, #0F2016 0%, #1B4332 100%)', position: 'relative' as const, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -60, top: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.02)', pointerEvents: 'none' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 18, color: '#fff', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 16, fontFamily: 'Fraunces, Georgia, serif', fontWeight: 300 }}>
                &ldquo;We have operated in environments where data is scarce, standards are demanding, and the margin for error in a feasibility assessment is close to zero. That is what we apply to every project we review.&rdquo;
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
                Nicholas Wall, Head of Project Feasibility · Feasibility.Earth
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#2D6A4F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: '#fff' }}>NW</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#1B4332', fontWeight: 700, textDecoration: 'none' }}>
            Tell us about your project <ArrowRight size={14} color="#1B4332" />
          </a>
        </div>
      </div>
    </section>
  )
}
