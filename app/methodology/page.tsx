import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Methodology — Feasibility.Earth',
  description: 'How we assess nature-based carbon projects. Our eligibility and feasibility methodology, built on direct development experience across Africa and Central Asia.',
}

const SAT_IMG  = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175009_19fc6154-aab5-4955-b5dc-d16dcac477c1.png'
const REFOREST = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175000_427a09a9-a320-4d6c-81ef-2c43cd4b7f9e.png'

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}
function Check({ color = '#1B4332', size = 13 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}

const ELIGIBILITY_CHECKS = [
  {
    title: 'Additionality',
    body: 'Would the carbon benefit have occurred without the project? We assess this against the current VCS and Gold Standard requirements — checking land use history going back 10+ years, proximity to financial barriers, and whether the project passes the performance test for the applicable methodology.',
    why: 'The single most common reason projects fail certification and challenge after registration.',
  },
  {
    title: 'Baseline carbon stock',
    body: 'What is the current carbon stored in the land, and what would it be without intervention? We use satellite-derived biomass data, validated against regional forest inventories, to establish credible starting points rather than the inflated baselines that have caused systemic overcrediting in this market.',
    why: 'Forestry projects have failed 5–14× overcrediting due to incorrect baseline methodology (Nature Communications, 2026).',
  },
  {
    title: 'Land use and ownership',
    body: 'Is the land legally available for a carbon project? Are there existing commitments, indigenous land rights, or overlapping protected area designations that would prevent registration or create legal risk post-issuance?',
    why: 'Ownership disputes and prior rights are frequently discovered after significant capital has been committed.',
  },
  {
    title: 'Applicable methodology',
    body: 'Which Verra VCS, Gold Standard, or Plan Vivo methodology applies to this specific project type, geography, and land condition? We assess eligibility against current methodology versions — not those that may have been revised since the project concept was formed.',
    why: 'Methodology applicability determines credit volume, certification timeline, and ongoing monitoring costs.',
  },
  {
    title: 'Geographic risk factors',
    body: 'What are the climate, political, and socioeconomic risks specific to this location? Permanence risk (deforestation pressure), leakage risk (displaced activity), and regulatory stability all affect project viability and ongoing credit value.',
    why: 'Geographic risk is rarely captured in desk-based feasibility work. We have been in the field.',
  },
]

const FULL_STUDY_COMPONENTS = [
  { label: 'Carbon potential quantification', desc: 'Estimated annual CO₂ sequestration or emission avoidance, with confidence ranges and sensitivity analysis across key assumptions.' },
  { label: 'Certification pathway', desc: 'Recommended standard and methodology, with a gap analysis between current project state and registration requirements.' },
  { label: 'Financial projections', desc: 'Estimated credit volumes over project lifetime, at current and scenario market prices. Revenue timeline aligned to certification milestones.' },
  { label: 'Risk register', desc: 'Documented assessment of additionality, permanence, leakage, and socioeconomic risks — structured for investor and DFI review.' },
  { label: 'Monitoring framework outline', desc: 'Summary of the monitoring, reporting, and verification (MRV) requirements your project will need to meet under the applicable methodology.' },
  { label: 'Development pathway', desc: 'Recommended next steps — from PDD development through validation, registration, and first verification — with indicative timelines and cost ranges.' },
]

const STANDARDS = [
  {
    name: 'Verra VCS',
    full: 'Verified Carbon Standard',
    body: 'The largest voluntary carbon standard by credit volume. We assess against current VM0047 (Afforestation, Reforestation, and Revegetation), VM0042 (Improved Agricultural Land Management), and cookstove methodologies under AMS-II.G.',
  },
  {
    name: 'Gold Standard',
    full: 'Gold Standard for the Global Goals',
    body: 'The premium standard integrating carbon with sustainable development outcomes. Our team has certified projects under GS TPDDTEC (cookstoves) and LUF Activity Requirements (forestry). We assess against current GS requirements including the revised fNRB values mandated from 2024.',
    note: 'Note on cookstove projects: we use regionally validated fNRB values, not the industry average of 80%+ that has been the source of systematic over-crediting.',
  },
  {
    name: 'Plan Vivo',
    full: 'Plan Vivo Foundation',
    body: 'The standard designed for community-based agroforestry and land use projects. We assess against Plan Vivo\'s 2026 requirements, including the community benefit-sharing and governance standards that distinguish it from other voluntary frameworks.',
  },
]

export default function MethodologyPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '88px 0 72px' }}>
          <div className="fe-wrap">
            <div style={{ maxWidth: 700 }}>
              <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.10)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.14)', marginBottom: 24 }}>
                Methodology
              </div>
              <h1 className="font-display" style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
                How we assess carbon projects — and why the method matters.
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.62)', lineHeight: 1.85, maxWidth: 580 }}>
                Our assessment methodology is not a proprietary framework. It is built directly on the requirements of Verra VCS, Gold Standard, and Plan Vivo — the standards your project will need to satisfy. We assess against what is required, not what is convenient.
              </p>
            </div>
          </div>
        </section>

        {/* Why methodology matters */}
        <section className="fe-section-sm" style={{ background: '#0F1E13' }}>
          <div className="fe-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
              <div>
                <h2 className="font-display" style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: 18 }}>
                  The market has a quality problem. It starts at the assessment stage.
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.58)', lineHeight: 1.9, marginBottom: 16 }}>
                  Research published in Nature Communications (2026) documented that forestry carbon projects routinely overcredit by 5–14 times their stated value due to incorrect baseline assumptions about deforestation rates. This is not a fringe problem — it has affected major projects sold to multinational corporates.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.58)', lineHeight: 1.9, marginBottom: 24 }}>
                  A flawed feasibility assessment does not just fail the developer. It creates financial exposure for every party that relies on the resulting credits — including the corporates that purchase them.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.80)', lineHeight: 1.9, fontWeight: 500 }}>
                  Our methodology is designed to identify these failures before they become expensive — for you, and for the buyers of your credits.
                </p>
              </div>
              <div style={{ position: 'relative', height: 360, borderRadius: 16, overflow: 'hidden' }}>
                <Image src={SAT_IMG} alt="Satellite land analysis" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,14,8,0.4)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility assessment in detail */}
        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 16 }}>Stage 01: Eligibility Assessment</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.15, marginBottom: 14 }}>
                Five checks. Each one a reason<br />projects fail after certification.
              </h2>
              <p style={{ fontSize: 16, color: '#5C5C58', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
                Our eligibility screen covers the issues that most desk-based assessments miss — because our team has seen them surface in real projects, at real cost.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {ELIGIBILITY_CHECKS.map((check, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', borderRadius: 14, border: '1px solid #E2DDD6', overflow: 'hidden', background: '#fff' }}>
                  <div style={{ padding: '28px 32px', borderRight: '1px solid #F0EDE8' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 7, background: '#1B4332', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: 11, fontWeight: 800, color: '#fff' }}>0{i + 1}</span>
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1A1A18' }}>{check.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.8 }}>{check.body}</p>
                  </div>
                  <div style={{ padding: '28px 28px', background: '#F9FAFB', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 8 }}>Why it matters</p>
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, fontStyle: 'italic' }}>{check.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full feasibility study */}
        <section className="fe-section" style={{ background: '#1B4332' }}>
          <div className="fe-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <div>
                <div className="fe-badge" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.12)', marginBottom: 22 }}>
                  Stage 02: Full Feasibility Study
                </div>
                <h2 className="font-display" style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
                  Structured for the investors and certification bodies it will face.
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.60)', lineHeight: 1.9, marginBottom: 28 }}>
                  Our full feasibility study is not a document template. It is structured around what development finance institutions, Verra VCS auditors, and project investors actually require — because our team has produced these documents for our own projects.
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.60)', lineHeight: 1.9 }}>
                  A study that does not anticipate what it will be tested against is not bankable. Ours is built to be.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {FULL_STUDY_COMPONENTS.map((comp, i) => (
                  <div key={i} style={{ padding: '18px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)' }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <div style={{ width: 20, height: 20, borderRadius: 5, background: 'rgba(134,200,156,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Check color="#86C89C" size={11} />
                      </div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{comp.label}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.50)', lineHeight: 1.65 }}>{comp.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <div className="fe-badge fe-badge-green" style={{ marginBottom: 16 }}>Certification standards</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.2 }}>
                We assess against the standards as they are now — not as they were.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
              {STANDARDS.map((std, i) => (
                <div key={i} style={{ padding: '32px 28px', borderRadius: 16, border: '1px solid #E2DDD6', background: '#FAFAF8' }}>
                  <div style={{ marginBottom: 18 }}>
                    <p style={{ fontSize: 20, fontWeight: 800, color: '#1B4332', marginBottom: 4 }}>{std.name}</p>
                    <p style={{ fontSize: 13, color: '#9CA3AF' }}>{std.full}</p>
                  </div>
                  <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.8, marginBottom: std.note ? 14 : 0 }}>{std.body}</p>
                  {std.note && (
                    <div style={{ padding: '10px 14px', background: '#FEF9EE', borderRadius: 8, border: '1px solid #FDDEA5' }}>
                      <p style={{ fontSize: 12, color: '#92400E', lineHeight: 1.65 }}>{std.note}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Field experience */}
        <section className="fe-section-sm" style={{ background: '#F5ECD7' }}>
          <div className="fe-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
              <div style={{ position: 'relative', height: 340, borderRadius: 16, overflow: 'hidden' }}>
                <Image src={REFOREST} alt="Reforestation project" fill style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <h2 className="font-display" style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.25, marginBottom: 18 }}>
                  Methodology informed by field experience — not just standards documents.
                </h2>
                <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.9, marginBottom: 16 }}>
                  Our team has developed and certified nature-based carbon projects in Nigeria, Uganda, Kazakhstan, and Cameroon. The assessment criteria we apply are the same ones our own projects have been validated and verified against.
                </p>
                <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.9, marginBottom: 28 }}>
                  That means we know where auditors focus their scrutiny, what documentation gaps cause delays, and which risk factors tend to surface during verification — not because we have read about them, but because we have navigated them ourselves.
                </p>
                <Link href="/pricing" className="btn-primary" style={{ fontSize: 14, padding: '12px 24px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Discuss your project <Arrow size={14} color="#fff" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
