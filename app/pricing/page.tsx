import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

function CheckIcon({ color = '#1B4332', size = 14 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}
function ArrowRight({ size = 15, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const FAQS = [
  { q: 'Do I need to start with the eligibility check, or can I go straight to the full study?', a: 'You can start with either. The eligibility check ($500) is a sensible first step if you are uncertain whether your land qualifies — it gives you a clear answer before committing to the full study. If you already have a reasonable degree of confidence, you can proceed directly to the full feasibility study.' },
  { q: 'What makes the full feasibility study "bankable"?', a: 'The full study is structured to meet the standards expected by development finance institutions, investors, and certification bodies. It includes carbon credit potential with supporting methodology, a certification pathway recommendation, financial projections, and an expert-reviewed assessment of key risks. You can present this to an investor or take it into a certification process.' },
  { q: 'What does project development involve, and how do you decide to invest?', a: 'For projects that pass the full feasibility study, we offer to support or lead the complete development process — from Project Design Document through certification, credit sales, and ongoing monitoring. For qualifying projects, we also consider co-investment. This decision is made on a case-by-case basis following the feasibility study; we do not commit to investment without that analysis.' },
  { q: 'Do I need technical knowledge to get started?', a: 'No. You provide basic information about your land and project intent. Our team handles all technical analysis. Your expert will ask the right follow-up questions and guide you through each stage.' },
  { q: 'What if my land does not qualify at the eligibility stage?', a: 'If the eligibility check concludes your land is unlikely to support a viable carbon project, we will provide a clear written explanation of the barriers identified. The $500 fee is non-refundable at this stage, but you will have a concrete, informed answer rather than months of uncertainty.' },
  { q: 'What is the refund policy for the full feasibility study?', a: 'If the full feasibility study concludes that your land does not qualify, we refund 50% of the $7,500 fee.' },
  { q: 'Which project types and geographies do you cover?', a: 'We assess reforestation, agroforestry, ARR (Afforestation, Reforestation and Revegetation), and clean cookstove projects. We work globally, with particular expertise in Sub-Saharan Africa and Central Asia.' },
]

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #0A1E11 0%, #1B4332 100%)', padding: '88px 0 68px', textAlign: 'center' }}>
          <div className="fe-wrap">
            <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.12)', color: '#D8F3DC', border: '1px solid rgba(255,255,255,0.16)', marginBottom: 22 }}>
              Services
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
              A 70+ page independent report<br />you can count on.
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.62)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>
              If your land has real carbon potential, you need to know exactly how much — and have the documentation to prove it to investors, certification bodies, and development partners. That is what we produce.
            </p>
          </div>
        </section>

        {/* THREE TIERS */}
        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap" style={{ maxWidth: 1000 }}>

            {/* Tier 1: Pre-Feasibility */}
            <div id="pre-feasibility" style={{ marginBottom: 20, display: 'grid', gridTemplateColumns: '1fr 2fr', borderRadius: 16, border: '1px solid #D4E9DC', overflow: 'hidden', background: '#fff' }}>
              <div style={{ padding: '40px 36px', background: '#EBF5EE', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid #D4E9DC' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' as const, color: '#40916C', marginBottom: 12 }}>Step 01</span>
                <div className="font-display" style={{ fontSize: 52, fontWeight: 700, color: '#1B4332', lineHeight: 1, marginBottom: 6 }}>$500</div>
                <p style={{ fontSize: 15, color: '#40916C', fontWeight: 600, marginBottom: 24 }}>Eligibility Check</p>
                <p style={{ fontSize: 13, color: '#5C5C58', lineHeight: 1.7, marginBottom: 24 }}>Is your land eligible for a carbon project? A clear answer in 2–3 business days.</p>
                <Link href="https://app.feasibility.earth" target="_blank" className="btn-primary" style={{ justifyContent: 'center', display: 'flex', gap: 8, fontSize: 14 }}>
                  Start eligibility check <ArrowRight size={14} color="#fff" />
                </Link>
              </div>
              <div style={{ padding: '40px 40px' }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#5C5C58', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 22 }}>What is included</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 28px' }}>
                  {[
                    'Satellite screening of your land parcel',
                    'Assessment against Verra VCS, Gold Standard and Plan Vivo criteria',
                    'Preliminary carbon credit potential estimate',
                    'Identification of key risks or barriers',
                    'Clear written recommendation: proceed or not',
                    'Delivered in 2–3 business days',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                      <div style={{ width: 18, height: 18, borderRadius: 5, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <CheckIcon color="#1B4332" size={10} />
                      </div>
                      <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tier 2: Full Feasibility */}
            <div id="feasibility" style={{ marginBottom: 20, display: 'grid', gridTemplateColumns: '1fr 2fr', borderRadius: 16, border: '2px solid #1B4332', overflow: 'hidden', background: '#fff', boxShadow: '0 12px 40px rgba(27,67,50,0.14)', position: 'relative' as const }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1B4332, #40916C)' }} />
              <div style={{ padding: '44px 36px', background: '#1B4332', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>Step 02</span>
                <div className="font-display" style={{ fontSize: 52, fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: 6 }}>$7,500</div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', fontWeight: 600, marginBottom: 6 }}>Full Feasibility Study</p>
                <p style={{ fontSize: 13, color: '#F4C430', fontWeight: 700, marginBottom: 16 }}>Bankable. Certification-ready.</p>

                {/* Report size callout */}
                <div style={{ padding: '14px 16px', background: 'rgba(255,255,255,0.08)', borderRadius: 10, marginBottom: 20, border: '1px solid rgba(255,255,255,0.12)' }}>
                  <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', fontFamily: 'Fraunces, Georgia, serif', marginBottom: 2 }}>70+ page report</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.50)' }}>Everything assessed remotely — no site visit required</p>
                </div>

                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 24 }}>A complete in-depth study structured for investors, DFIs, and certification bodies. Delivered in 5 business days.</p>
                <Link href="/contact" className="btn-amber" style={{ justifyContent: 'center', display: 'flex', gap: 8, fontSize: 14, textDecoration: 'none' }}>
                  Start full study <ArrowRight size={14} color="#1A1A18" />
                </Link>
                <p style={{ marginTop: 12, fontSize: 11, color: 'rgba(255,255,255,0.22)', textAlign: 'center' as const }}>50% refund if land does not qualify</p>
              </div>

              <div style={{ padding: '36px 36px' }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#5C5C58', letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: 20 }}>What the 70+ page report covers</p>

                {[
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
                ].map((group, i) => (
                  <div key={i} style={{ marginBottom: 16 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#1B4332', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 8, paddingBottom: 6, borderBottom: '1px solid #E8E4DF' }}>{group.section}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                      {group.items.map((item, j) => (
                        <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                          <div style={{ width: 16, height: 16, borderRadius: 4, background: '#EBF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                            <CheckIcon color="#1B4332" size={9} />
                          </div>
                          <span style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: 18, padding: '12px 14px', background: '#F0FDF4', borderRadius: 10, border: '1px solid #C5E8D3' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#1B4332', marginBottom: 3 }}>All remote. No site visit required.</p>
                  <p style={{ fontSize: 12, color: '#2D6A4F', lineHeight: 1.6 }}>Every section of this report is produced using satellite data, regional databases, and methodology expertise. You do not need to arrange fieldwork — we handle the full technical assessment remotely.</p>
                </div>
              </div>
            </div>

            {/* Tier 3: Project Development */}
            <div id="development" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', borderRadius: 16, border: '1px solid #E2DDD6', overflow: 'hidden', background: '#fff' }}>
              <div style={{ padding: '40px 36px', background: '#F5ECD7', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid #E2DDD6' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' as const, color: '#6B4226', marginBottom: 12 }}>Step 03</span>
                <div className="font-display" style={{ fontSize: 32, fontWeight: 700, color: '#1A1A18', lineHeight: 1.1, marginBottom: 6 }}>By arrangement</div>
                <p style={{ fontSize: 15, color: '#6B4226', fontWeight: 600, marginBottom: 16 }}>Project Development</p>
                <p style={{ fontSize: 13, color: '#5C5C58', lineHeight: 1.7, marginBottom: 8 }}>
                  Full development support and, for qualifying projects, capital co-investment.
                </p>
                <div style={{ padding: '12px 14px', background: 'rgba(27,67,50,0.06)', borderRadius: 9, marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#1B4332', letterSpacing: '0.5px', textTransform: 'uppercase' as const, marginBottom: 6 }}>Investment criteria</p>
                  <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.65 }}>We consider co-investment in projects with demonstrated net present value, low permanence risk, and a clear path to first credit issuance. Assessment is made following the full feasibility study. The study is the filter.</p>
                </div>
                <a href="/contact" className="btn-primary" style={{ justifyContent: 'center', display: 'flex', gap: 8, fontSize: 14, textDecoration: 'none' }}>
                  Discuss your project <ArrowRight size={14} color="#fff" />
                </a>
                <p style={{ marginTop: 10, fontSize: 11, color: '#9CA3AF', textAlign: 'center' as const }}>Only available after completed feasibility study</p>
              </div>
              <div style={{ padding: '40px 40px' }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#5C5C58', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 22 }}>What we bring to your project</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 28px' }}>
                  {[
                    'Project Design Document (PDD) development',
                    'Certification and registration support',
                    'Carbon credit marketing and sales',
                    'Technical implementation and field supervision',
                    'Ongoing monitoring and verification reporting',
                    'Community and stakeholder engagement',
                    'Legal and regulatory navigation',
                    'Capital co-investment for qualifying projects',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                      <div style={{ width: 18, height: 18, borderRadius: 5, background: '#F5E6D8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <CheckIcon color="#6B4226" size={10} />
                      </div>
                      <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24, padding: '16px 18px', background: '#FEF9EE', borderRadius: 10, border: '1px solid #FDDEA5' }}>
                  <p style={{ fontSize: 13, color: '#92400E', lineHeight: 1.7 }}>
                    <strong>On capital investment:</strong> For projects that demonstrate strong fundamentals in the full feasibility study, we consider direct co-investment as a project partner. This is assessed on a case-by-case basis and is not guaranteed — but it is available.
                  </p>
                </div>
              </div>
            </div>

            {/* ROI anchor */}
            <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ padding: '18px 20px', background: '#FEF9EE', borderRadius: 12, border: '1px solid #FDDEA5' }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: '#92400E', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 6 }}>Cost of a failed project</p>
                <p style={{ fontSize: 24, fontWeight: 800, color: '#1A1A18', fontFamily: 'Fraunces, Georgia, serif', lineHeight: 1.1, marginBottom: 6 }}>$150k–$500k</p>
                <p style={{ fontSize: 12, color: '#92400E', lineHeight: 1.6 }}>Typical wasted spend when a project fails at PDD validation — plus 18–24 months of lost time. (Source: VCM practitioner data)</p>
              </div>
              <div style={{ padding: '18px 20px', background: '#EBF5EE', borderRadius: 12, border: '1px solid #C5E8D3' }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: '#1B4332', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 6 }}>Our full study</p>
                <p style={{ fontSize: 24, fontWeight: 800, color: '#1B4332', fontFamily: 'Fraunces, Georgia, serif', lineHeight: 1.1, marginBottom: 6 }}>$7,500</p>
                <p style={{ fontSize: 12, color: '#2D6A4F', lineHeight: 1.6 }}>Identifies the same failure modes before you commit development capital. Approximately 1.5–5% of the risk it eliminates.</p>
              </div>
            </div>
            <div style={{ marginTop: 10, padding: '14px 18px', background: '#F9FAFB', borderRadius: 10, border: '1px solid #E2DDD6' }}>
              <p style={{ fontSize: 13, color: '#5C5C58', lineHeight: 1.7 }}>
                Traditional consultancies charge <strong>$25,000–$75,000</strong> and take 3–6 months for equivalent depth. We apply the same methodology standards in five business days — and unlike a consultancy, we can co-develop and co-invest in projects that clear our assessment.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="fe-section-sm" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 740 }}>
            <h2 className="font-display" style={{ fontSize: 32, fontWeight: 700, color: '#1A1A18', marginBottom: 36, textAlign: 'center' }}>Common questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ background: '#FAFAF8', borderRadius: 12, border: '1px solid #E2DDD6', padding: '22px 26px' }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', marginBottom: 10 }}>{faq.q}</p>
                  <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              ))}
            </div>
            <div style={{ background: '#1B4332', borderRadius: 16, padding: '32px', textAlign: 'center', marginTop: 28 }}>
              <p style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Ready to get started?</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 22 }}>Begin with the $500 eligibility check — a clear answer in 2–3 business days.</p>
              <Link href="https://app.feasibility.earth" target="_blank" className="btn-amber" style={{ fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Start eligibility check — $500 <ArrowRight size={14} color="#1A1A18" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
