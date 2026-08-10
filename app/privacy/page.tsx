import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Feasibility.Earth',
  description: 'Privacy policy for Feasibility.Earth, a Green Earth Group N.V. platform. Governed by Netherlands law and GDPR.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '64px 0 52px' }}>
          <div className="fe-wrap" style={{ maxWidth: 760 }}>
            <h1 className="font-display" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 12 }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)' }}>Feasibility.Earth · Green Earth Group N.V. · Last updated: August 2026</p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 760 }}>
            <div style={{ fontSize: 15, color: '#374151', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 28 }}>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>Data controller</h2>
                <p>Feasibility.Earth is operated by <strong>Green Earth Group N.V.</strong>, a company registered in the Netherlands. As a Green Earth Group platform, Feasibility.Earth is covered by the Green Earth Group privacy policy, which governs how we collect, process, and protect personal data in accordance with GDPR.</p>
                <div style={{ marginTop: 16, padding: '16px 20px', background: '#F5F5F2', borderRadius: 10 }}>
                  <p style={{ fontSize: 14, marginBottom: 4 }}><strong>Full privacy policy:</strong>{' '}
                    <a href="https://green.earth/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#1B4332', fontWeight: 600 }}>green.earth/privacy-policy</a>
                  </p>
                  <p style={{ fontSize: 14, color: '#5C5C58', marginBottom: 0 }}>Contact: <a href="mailto:contact@green.earth" style={{ color: '#1B4332' }}>contact@green.earth</a></p>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>Data specific to Feasibility.Earth</h2>
                <p>In addition to the standard data categories described in the Green Earth Group privacy policy (contact information, usage data, communications), Feasibility.Earth also processes data specific to the assessment service:</p>
                <ul style={{ marginTop: 12, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    'Project location data — coordinates, land boundaries, and geographic identifiers submitted for eligibility screening or feasibility assessment',
                    'Land use history and tenure information provided as part of a project submission',
                    'Project design information — species or technology plans, carbon methodology preferences, development timelines',
                    'Payment details for paid services — processed securely; card data is not stored on our servers',
                    'Assessment correspondence — emails, form submissions, and follow-up communications related to a specific project',
                  ].map((item, i) => (
                    <li key={i} style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.75 }}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>Confidentiality of project submissions</h2>
                <p>Project information submitted for assessment — including location data, land tenure details, carbon projections, and project design — is treated as commercially confidential. We do not share, publish, or disclose submitted project data to third parties, except:</p>
                <ul style={{ marginTop: 12, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    'Where required by law or regulatory authority',
                    'With trusted technical processors who assist in delivering the assessment (under data processing agreements)',
                    'Where you have given explicit written consent',
                  ].map((item, i) => (
                    <li key={i} style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.75 }}>{item}</li>
                  ))}
                </ul>
                <p style={{ marginTop: 14 }}>Aggregated, anonymised data derived from assessments (for example, carbon potential ranges by project type and region) may be used to improve our methodology. No identifying information is included.</p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>Your rights</h2>
                <p>You have the right to access, correct, delete, restrict, or port your personal data, and to object to processing based on legitimate interests. To exercise any of these rights, contact <a href="mailto:contact@green.earth" style={{ color: '#1B4332' }}>contact@green.earth</a>. You also have the right to lodge a complaint with the Dutch Data Protection Authority (<em>Autoriteit Persoonsgegevens</em>).</p>
              </div>

              <div style={{ paddingTop: 12, borderTop: '1px solid #E2DDD6' }}>
                <p style={{ fontSize: 13, color: '#9CA3AF' }}>
                  Full policy and cookie details: <a href="https://green.earth/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#40916C' }}>green.earth/privacy-policy</a>
                  &nbsp;·&nbsp;
                  Questions: <a href="mailto:contact@green.earth" style={{ color: '#40916C' }}>contact@green.earth</a>
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
