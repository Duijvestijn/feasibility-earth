import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Feasibility.Earth',
  description: 'Privacy Policy for Feasibility.Earth, a Green Earth Group platform.',
  robots: { index: false, follow: false },
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

              <div style={{ padding: '20px 24px', background: '#FEF9EC', borderRadius: 12, border: '1px solid #F4C430' }}>
                <p style={{ fontSize: 14, color: '#6B4226', fontWeight: 600 }}>
                  A full Privacy Policy is being prepared and will be published here. If you have questions about how your data is handled in the meantime, contact us at <a href="mailto:feasibility@green.earth" style={{ color: '#1B4332' }}>feasibility@green.earth</a>.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>Who we are</h2>
                <p>Feasibility.Earth is a platform operated by Green Earth Group N.V. When you submit a project, use our contact form, or subscribe to communications, your data is processed by Green Earth Group N.V.</p>
                <p style={{ marginTop: 12 }}>Contact: <a href="mailto:feasibility@green.earth" style={{ color: '#1B4332', textDecoration: 'none', fontWeight: 600 }}>feasibility@green.earth</a></p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>What data we collect</h2>
                <p>When you use Feasibility.Earth, we may collect:</p>
                <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li><strong>Contact form submissions:</strong> name, email address, organisation, role, and your project description.</li>
                  <li><strong>Newsletter subscriptions:</strong> email address and name (only when you explicitly opt in).</li>
                  <li><strong>Usage data:</strong> pages visited, session duration, and similar analytics via Google Tag Manager and HubSpot, subject to your cookie preferences.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>How we use your data</h2>
                <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li>To respond to project enquiries and assess project fit.</li>
                  <li>To send the newsletter if you opted in (you can unsubscribe at any time).</li>
                  <li>To understand how the site is used and improve it.</li>
                </ul>
                <p style={{ marginTop: 12 }}>We do not sell your data or pass it to third parties for marketing purposes.</p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A18', marginBottom: 12 }}>Your rights</h2>
                <p>You have the right to access, correct, or delete your personal data, and to object to or restrict processing. To exercise any of these rights, email <a href="mailto:feasibility@green.earth" style={{ color: '#1B4332' }}>feasibility@green.earth</a>.</p>
              </div>

              <div style={{ paddingTop: 12, borderTop: '1px solid #E2DDD6' }}>
                <p style={{ fontSize: 13, color: '#9CA3AF' }}>
                  This page will be updated with a complete Privacy Policy. Questions in the meantime: <Link href="/contact" style={{ color: '#1B4332' }}>contact us</Link>.
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
