import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const SATELLITE_IMG = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175009_19fc6154-aab5-4955-b5dc-d16dcac477c1.png'
const REFOREST_IMG  = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175000_427a09a9-a320-4d6c-81ef-2c43cd4b7f9e.png'
const AGROFOR_IMG   = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175005_e7dfbf54-39e5-4de4-b11d-58227004bf11.png'

const STEPS = [
  {
    n: '01', title: 'Submit Your Project',
    sub: 'Fill in the intake form',
    body: 'Provide your land coordinates (GeoJSON, KML or GPS points), project type, approximate area in hectares, and contact information. No fieldwork required at this stage.',
    details: ['Land location (country, region, coordinates)', 'Project type (reforestation, agroforestry, ARR, cookstoves)', 'Approximate land area in hectares', 'Current land use and ownership status'],
    img: SATELLITE_IMG, time: '~15 minutes',
  },
  {
    n: '02', title: 'Automated Eligibility Check',
    sub: 'Instant satellite screening',
    body: 'Our system runs an automated eligibility screen using satellite imagery and global datasets. We check additionality (was the land already forested?), baseline carbon stock, protected area overlaps, and land use history going back 10+ years.',
    details: ['NDVI time-series analysis (10-year baseline)', 'Protected area and carbon registry overlap check', 'Additionality screening per VCS/GS methodology', 'Preliminary CO₂ potential estimate'],
    img: REFOREST_IMG, time: '< 2 minutes',
  },
  {
    n: '03', title: 'Full Feasibility Report',
    sub: 'Delivered within 24 hours',
    body: 'A certified carbon methodology specialist reviews the automated output and produces a full feasibility report. The report includes CO₂ potential (tonnes/year), project viability score, recommended certification pathway, and estimated credit value at current market prices.',
    details: ['Carbon stock baseline and increment model', 'Estimated annual CO₂ credits (tCO₂e)', 'Certification pathway recommendation', 'Market value estimate at current CO₂ prices'],
    img: AGROFOR_IMG, time: '24 hours',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)', padding: '80px 0 64px' }}>
          <div className="fe-wrap">
            <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.15)', color: '#D8F3DC', border: '1px solid rgba(255,255,255,0.2)', marginBottom: 20 }}>Process</div>
            <h1 className="font-display" style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
              From land to report<br />in 24 hours
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 520, lineHeight: 1.7 }}>
              Three automated steps replace what used to take 3–6 months and cost $75,000+. Here&apos;s exactly how it works.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
              {STEPS.map((step, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
                  {i % 2 === 0 ? (<>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                        <div className="font-display" style={{ fontSize: 56, fontWeight: 700, color: '#E8DDD0', lineHeight: 1 }}>{step.n}</div>
                        <div>
                          <p style={{ fontSize: 12, fontWeight: 700, color: '#40916C', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4 }}>{step.sub}</p>
                          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1A1A18' }}>{step.title}</h2>
                        </div>
                      </div>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.7, marginBottom: 24 }}>{step.body}</p>
                      <div style={{ background: '#F5ECD7', borderRadius: 12, padding: '18px 20px', marginBottom: 16 }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#6B4226', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 10 }}>What we check:</p>
                        {step.details.map((d, j) => (
                          <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                            <span style={{ color: '#1B4332', fontWeight: 700, fontSize: 13 }}>✓</span>
                            <span style={{ fontSize: 13, color: '#5C5C58' }}>{d}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: '#D8F3DC', borderRadius: 100 }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#1B4332' }}>⏱ {step.time}</span>
                      </div>
                    </div>
                    <div style={{ position: 'relative', height: 360, borderRadius: 16, overflow: 'hidden' }}>
                      <Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                  </>) : (<>
                    <div style={{ position: 'relative', height: 360, borderRadius: 16, overflow: 'hidden' }}>
                      <Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                        <div className="font-display" style={{ fontSize: 56, fontWeight: 700, color: '#E8DDD0', lineHeight: 1 }}>{step.n}</div>
                        <div>
                          <p style={{ fontSize: 12, fontWeight: 700, color: '#40916C', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4 }}>{step.sub}</p>
                          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1A1A18' }}>{step.title}</h2>
                        </div>
                      </div>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.7, marginBottom: 24 }}>{step.body}</p>
                      <div style={{ background: '#F5ECD7', borderRadius: 12, padding: '18px 20px', marginBottom: 16 }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#6B4226', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 10 }}>What we deliver:</p>
                        {step.details.map((d, j) => (
                          <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                            <span style={{ color: '#1B4332', fontWeight: 700, fontSize: 13 }}>✓</span>
                            <span style={{ fontSize: 13, color: '#5C5C58' }}>{d}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: '#D8F3DC', borderRadius: 100 }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#1B4332' }}>⏱ {step.time}</span>
                      </div>
                    </div>
                  </>)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fe-section-sm" style={{ background: '#F5ECD7', textAlign: 'center' }}>
          <div className="fe-wrap">
            <h2 className="font-display" style={{ fontSize: 36, fontWeight: 700, color: '#1A1A18', marginBottom: 14 }}>Ready to start?</h2>
            <p style={{ fontSize: 16, color: '#5C5C58', marginBottom: 28 }}>$7,500 flat fee · Full report in 24 hours · No fieldwork needed</p>
            <Link href="/pricing" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>Start a Feasibility Study →</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
