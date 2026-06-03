import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const SAT_IMG      = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175009_19fc6154-aab5-4955-b5dc-d16dcac477c1.png'
const REFOREST_IMG = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175000_427a09a9-a320-4d6c-81ef-2c43cd4b7f9e.png'
const AGROFOR_IMG  = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175005_e7dfbf54-39e5-4de4-b11d-58227004bf11.png'

const STEPS = [
  {
    day: 'Day 1', n: '01', title: 'You tell us about your land',
    sub: 'Simple intake — 15 minutes of your time',
    body: 'Fill in our intake form. Where is your land? How large? What type of project do you have in mind — planting trees, agroforestry, or something else? You don\'t need to be an expert. We\'ll ask the right questions and take it from there.',
    checklist: [
      'Your land location (country, region, GPS or coordinates)',
      'Approximate size in hectares',
      'Current state of the land (forests, farms, bare land)',
      'Your goal — carbon credits, biodiversity, both?',
    ],
    img: SAT_IMG,
  },
  {
    day: 'Days 2–4', n: '02', title: 'Our experts go to work',
    sub: 'Satellite data + 10 years of field experience',
    body: 'A dedicated expert is assigned to your project. They analyse your land using satellite imagery, regional land databases, and the knowledge we\'ve built over a decade developing projects in Nigeria, Uganda, Cameroon and Kazakhstan. We look at what the land has been, what it is now, and what it could become.',
    checklist: [
      'Satellite analysis of land condition and history',
      'Assessment of how many carbon credits your project could generate',
      'Review of which certification (Verra VCS, Gold Standard, Plan Vivo) fits best',
      'Identification of any risks or barriers — before they become expensive problems',
    ],
    img: REFOREST_IMG,
  },
  {
    day: 'Day 5', n: '03', title: 'A 70+ page report — and a personal debrief.',
    sub: 'Everything assessed. Nothing left unchecked.',
    body: 'You receive a comprehensive 70+ page feasibility report covering every material aspect of your project — land baseline, additionality, carbon potential, certification pathway, risk register, financial projections, and development roadmap. All produced remotely from satellite data and expert analysis. No site visit required.',
    checklist: [
      '70+ pages covering 7 core assessment areas',
      'Carbon credit potential with full confidence ranges',
      'Additionality case with supporting evidence',
      'Risk register structured for investor review',
      'Financial projections at bear / base / bull prices',
      'Certification pathway and gap analysis',
      'Development roadmap: from report to first credit',
      'Personal debrief call to walk through findings',
    ],
    img: AGROFOR_IMG,
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)', padding: '80px 0 64px' }}>
          <div className="fe-wrap">
            <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.15)', color: '#D8F3DC', border: '1px solid rgba(255,255,255,0.2)', marginBottom: 20 }}>
              Simple process
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
              Three steps.<br />Five business days.
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', maxWidth: 520, lineHeight: 1.75 }}>
              You don&apos;t need to be an expert. You just need to tell us about your land. Our team handles the rest — and guides you through every step.
            </p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
              {STEPS.map((step, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
                  {i % 2 === 0 ? (<>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: 15, fontWeight: 800, color: '#1B4332' }}>{step.n}</span>
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#40916C', textTransform: 'uppercase' as const, letterSpacing: '0.8px' }}>{step.day}</span>
                      </div>
                      <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1A1A18', marginBottom: 6, marginTop: 10 }}>{step.title}</h2>
                      <p style={{ fontSize: 13, color: '#40916C', fontWeight: 600, marginBottom: 16 }}>{step.sub}</p>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.8, marginBottom: 22 }}>{step.body}</p>
                      <div style={{ background: '#F5ECD7', borderRadius: 12, padding: '18px 20px' }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#6B4226', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 12 }}>What we cover:</p>
                        {step.checklist.map((item, j) => (
                          <div key={j} style={{ display: 'flex', gap: 9, marginBottom: 8 }}>
                            <span style={{ color: '#1B4332', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>✓</span>
                            <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ position: 'relative', height: 380, borderRadius: 16, overflow: 'hidden' }}>
                      <Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                  </>) : (<>
                    <div style={{ position: 'relative', height: 380, borderRadius: 16, overflow: 'hidden' }}>
                      <Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: 15, fontWeight: 800, color: '#1B4332' }}>{step.n}</span>
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#40916C', textTransform: 'uppercase' as const, letterSpacing: '0.8px' }}>{step.day}</span>
                      </div>
                      <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1A1A18', marginBottom: 6, marginTop: 10 }}>{step.title}</h2>
                      <p style={{ fontSize: 13, color: '#40916C', fontWeight: 600, marginBottom: 16 }}>{step.sub}</p>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.8, marginBottom: 22 }}>{step.body}</p>
                      <div style={{ background: '#F5ECD7', borderRadius: 12, padding: '18px 20px' }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#6B4226', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 12 }}>What you receive:</p>
                        {step.checklist.map((item, j) => (
                          <div key={j} style={{ display: 'flex', gap: 9, marginBottom: 8 }}>
                            <span style={{ color: '#1B4332', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>✓</span>
                            <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>)}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="fe-section-sm" style={{ background: '#F5ECD7', textAlign: 'center' }}>
          <div className="fe-wrap">
            <h2 className="font-display" style={{ fontSize: 34, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>
              Ready to get started?
            </h2>
            <p style={{ fontSize: 16, color: '#5C5C58', marginBottom: 28, maxWidth: 420, margin: '0 auto 28px' }}>
              $7,500 flat fee. Full report in 5 business days. A real expert guides you through it.
            </p>
            <Link href="/pricing" className="btn-primary" style={{ fontSize: 16, padding: '14px 36px' }}>
              Start your study →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
