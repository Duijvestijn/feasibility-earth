import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const REFOREST_IMG = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175000_427a09a9-a320-4d6c-81ef-2c43cd4b7f9e.png'
const AGROFOR_IMG  = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175005_e7dfbf54-39e5-4de4-b11d-58227004bf11.png'
const KAZ_IMG      = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175019_8bea7c7e-6b88-419e-ab70-3a36a56c747e.png'
const COOK_IMG     = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_175014_477afb67-83bf-496e-9cc3-9039d3d6b61a.png'

const CASES = [
  {
    id: 'reforestation', title: 'Reforestation', img: REFOREST_IMG, color: '#1B4332',
    badge: 'Verra VCS · Gold Standard',
    body: 'Planting trees on previously deforested or degraded land. Feasibility.Earth checks whether your land qualifies for an Afforestation / Reforestation (A/R) or Improved Forest Management (IFM) methodology.',
    suitableFor: ['Degraded land, former agricultural fields', 'Areas with low existing carbon stock', 'Regions with deforestation history (pre-1990 for VCS)'],
    metrics: [{ label: 'Typical CO₂', value: '5–40 tCO₂/ha/yr' }, { label: 'Project life', value: '20–100 years' }, { label: 'Std. methodology', value: 'VM0047 / AR-ACM0003' }],
    example: 'Greenzone Reforestation Project, Congo Basin — 13,750 VCUs annually',
  },
  {
    id: 'agroforestry', title: 'Agroforestry', img: AGROFOR_IMG, color: '#2D6A4F',
    badge: 'Plan Vivo · Verra VCS',
    body: 'Integrating trees into agricultural and pastoral systems. These projects simultaneously sequester carbon and support farmer livelihoods — often eligible under community-based standards like Plan Vivo.',
    suitableFor: ['Active smallholder farmland', 'Pastoral grazing land with tree integration potential', 'Community-based land management systems'],
    metrics: [{ label: 'Typical CO₂', value: '3–15 tCO₂/ha/yr' }, { label: 'Project life', value: '10–30 years' }, { label: 'Std. methodology', value: 'Plan Vivo · VM0017' }],
    example: 'Bulindi Agroforestry & Chimpanzee Conservation, Uganda — 44,000 VERs annually',
  },
  {
    id: 'arr', title: 'ARR Projects', img: KAZ_IMG, color: '#40916C',
    badge: 'Verra VCS · CDM',
    body: 'Afforestation, Reforestation, and Revegetation on severely degraded or barren land — including dryland restoration, grassland rehabilitation, and riparian revegetation.',
    suitableFor: ['Barren or severely degraded land', 'Former desert or saline soil', 'Riparian and wetland areas'],
    metrics: [{ label: 'Typical CO₂', value: '2–20 tCO₂/ha/yr' }, { label: 'Project life', value: '20–60 years' }, { label: 'Std. methodology', value: 'VM0047 · CDM AR-ACM' }],
    example: 'Aral Sea Afforestation, Kazakhstan — 31,250 VCUs from saxaul planting',
  },
  {
    id: 'cookstoves', title: 'Cookstoves', img: COOK_IMG, color: '#6B4226',
    badge: 'Gold Standard · CDM',
    body: 'Distributing energy-efficient cookstoves to households that currently cook on open fires or inefficient traditional stoves. Reduces fuel consumption and associated deforestation.',
    suitableFor: ['Rural households using firewood or charcoal', 'Areas with high deforestation driven by cooking fuel', 'Community programs with measurable distribution'],
    metrics: [{ label: 'Typical CO₂', value: '1–3 tCO₂/household/yr' }, { label: 'Project life', value: '5–10 years' }, { label: 'Std. methodology', value: 'GS TPDDTEC · AMS-II.G' }],
    example: 'Sauki Clean Cookstoves, Nigeria — 60,000 VERs from 40,000 households',
  },
]

export default function UseCasesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)', padding: '80px 0 64px' }}>
          <div className="fe-wrap">
            <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.15)', color: '#D8F3DC', border: '1px solid rgba(255,255,255,0.2)', marginBottom: 20 }}>Supported project types</div>
            <h1 className="font-display" style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>Works for all major<br />nature-based projects</h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 500, lineHeight: 1.7 }}>Feasibility.Earth supports all four main project categories. Eligibility criteria, CO₂ methodologies, and certification standards are built in.</p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
              {CASES.map((c, i) => (
                <div key={c.id} id={c.id} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: 48, alignItems: 'center' }}>
                  {i % 2 === 0 ? (<>
                    <div style={{ position: 'relative', height: 340, borderRadius: 16, overflow: 'hidden' }}>
                      <Image src={c.img} alt={c.title} fill style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
                        <span className="fe-badge fe-badge-green" style={{ fontSize: 10, background: 'rgba(255,255,255,0.92)', color: c.color }}>{c.badge}</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="font-display" style={{ fontSize: 30, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>{c.title}</h2>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.7, marginBottom: 20 }}>{c.body}</p>
                      <div style={{ background: '#F5ECD7', borderRadius: 12, padding: '16px 18px', marginBottom: 16 }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#6B4226', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 8 }}>Suitable for:</p>
                        {c.suitableFor.map((s, j) => (
                          <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 5 }}>
                            <span style={{ color: c.color, fontWeight: 700, fontSize: 13 }}>✓</span>
                            <span style={{ fontSize: 13, color: '#5C5C58' }}>{s}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
                        {c.metrics.map((m, j) => (
                          <div key={j} style={{ padding: '10px 14px', borderRadius: 10, background: '#FAFAF8', border: '1px solid #E2DDD6' }}>
                            <p style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 3 }}>{m.label}</p>
                            <p style={{ fontSize: 14, fontWeight: 700, color: c.color }}>{m.value}</p>
                          </div>
                        ))}
                      </div>
                      <p style={{ fontSize: 12, color: '#40916C', fontStyle: 'italic' }}>📌 {c.example}</p>
                    </div>
                  </>) : (<>
                    <div>
                      <h2 className="font-display" style={{ fontSize: 30, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>{c.title}</h2>
                      <p style={{ fontSize: 15, color: '#5C5C58', lineHeight: 1.7, marginBottom: 20 }}>{c.body}</p>
                      <div style={{ background: '#F5ECD7', borderRadius: 12, padding: '16px 18px', marginBottom: 16 }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#6B4226', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 8 }}>Suitable for:</p>
                        {c.suitableFor.map((s, j) => (
                          <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 5 }}>
                            <span style={{ color: c.color, fontWeight: 700, fontSize: 13 }}>✓</span>
                            <span style={{ fontSize: 13, color: '#5C5C58' }}>{s}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
                        {c.metrics.map((m, j) => (
                          <div key={j} style={{ padding: '10px 14px', borderRadius: 10, background: '#FAFAF8', border: '1px solid #E2DDD6' }}>
                            <p style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 3 }}>{m.label}</p>
                            <p style={{ fontSize: 14, fontWeight: 700, color: c.color }}>{m.value}</p>
                          </div>
                        ))}
                      </div>
                      <p style={{ fontSize: 12, color: '#40916C', fontStyle: 'italic' }}>📌 {c.example}</p>
                    </div>
                    <div style={{ position: 'relative', height: 340, borderRadius: 16, overflow: 'hidden' }}>
                      <Image src={c.img} alt={c.title} fill style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
                        <span className="fe-badge fe-badge-green" style={{ fontSize: 10, background: 'rgba(255,255,255,0.92)', color: c.color }}>{c.badge}</span>
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
            <h2 className="font-display" style={{ fontSize: 32, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>Not sure which type fits?</h2>
            <p style={{ fontSize: 16, color: '#5C5C58', marginBottom: 28, maxWidth: 400, margin: '0 auto 28px' }}>Submit your land details and we&apos;ll determine the right methodology during the eligibility check.</p>
            <Link href="/pricing" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>Start a Study →</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
