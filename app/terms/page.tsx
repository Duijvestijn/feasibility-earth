import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Feasibility.Earth',
  description: 'Terms of Service for Feasibility.Earth, a Green Earth Group platform.',
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '64px 0 52px' }}>
          <div className="fe-wrap" style={{ maxWidth: 760 }}>
            <h1 className="font-display" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 12 }}>
              Terms of Service
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)' }}>Feasibility.Earth · Green Earth Group N.V. · Last updated: August 2026</p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#fff' }}>
          <div className="fe-wrap" style={{ maxWidth: 760 }}>
            <div style={{ fontSize: 15, color: '#374151', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 28 }}>

              <div style={{ padding: '20px 24px', background: '#FEF9EC', borderRadius: 12, border: '1px solid #F4C430' }}>
                <p style={{ fontSize: 14, color: '#6B4226', fontWeight: 600 }}>
                  Full Terms of Service are being prepared and will be published here. If you have questions about the terms of your project assessment or engagement, contact us at <a href="mailto:feasibility@green.earth" style={{ color: '#1B4332' }}>feasibility@green.earth</a>.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>The platform</h2>
                <p>Feasibility.Earth is operated by Green Earth Group N.V. By using this platform and submitting projects for assessment, you agree to the terms set out here and in any written assessment agreement.</p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>Assessment reports</h2>
                <p>Feasibility.Earth assessments are desktop pre-feasibility studies based on satellite data, publicly available datasets, and expert analysis. They are not a guarantee of project eligibility, registration, or credit issuance. Reports are provided for decision-support purposes only.</p>
                <p style={{ marginTop: 12 }}>Reports may not reflect legal land tenure status, community consultation requirements, field conditions, or regulatory approvals — all of which are outside the scope of a remote desktop study and must be independently verified.</p>
                <p style={{ marginTop: 12 }}>Feasibility.Earth is an independent Green Earth Group platform. Feasibility.Earth and Green Earth Group are not affiliated with or endorsed by Verra, Gold Standard, Plan Vivo, or any other certification body referenced in reports.</p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>Paid services</h2>
                <p>For paid assessments (Eligibility Check — $500; Full Feasibility Study — $7,500), payment terms and deliverable scope are confirmed in writing before work begins.</p>
                <p style={{ marginTop: 12 }}>For the Eligibility Check, the $500 fee is non-refundable once work has commenced. For the Full Feasibility Study, if the completed study concludes that the land does not qualify for a viable carbon project, 50% of the $7,500 fee is refunded. No refund is available once the report has been delivered.</p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>Open Call submissions</h2>
                <p>Projects submitted through the Open Call are evaluated at Green Earth&apos;s discretion. Submission does not create any obligation on Green Earth to proceed with, fund, or develop a project. Green Earth covers the prefeasibility assessment cost as part of its project sourcing process; this does not constitute a service agreement or partnership commitment.</p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>Intellectual property</h2>
                <p>Assessment reports prepared for a client are the client&apos;s property upon full payment. Green Earth retains the right to use aggregated, anonymised data from assessments to improve its methodology and tools.</p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>Governing law</h2>
                <p>These terms are governed by the laws of the Netherlands. Disputes are subject to the exclusive jurisdiction of the courts of the Netherlands.</p>
              </div>

              <div style={{ paddingTop: 12, borderTop: '1px solid #E2DDD6' }}>
                <p style={{ fontSize: 13, color: '#9CA3AF' }}>
                  Questions about these terms: <Link href="/contact" style={{ color: '#1B4332' }}>contact us</Link> or email <a href="mailto:feasibility@green.earth" style={{ color: '#1B4332' }}>feasibility@green.earth</a>.
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
