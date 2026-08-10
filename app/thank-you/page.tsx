import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment confirmed — Feasibility.Earth',
  robots: { index: false, follow: false },
}

const STEPS = {
  eligibility: [
    'We begin satellite screening of your land parcel immediately',
    'Your written eligibility assessment is delivered within 2–3 business days',
    'The report includes a clear recommendation — proceed or not — with documented reasoning',
  ],
  study: [
    'We contact you within 1 business day to confirm your project details',
    'The full 70+ page feasibility report is delivered within 5 business days',
    'If your land does not qualify, 50% of the study fee is refunded',
  ],
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  const isStudy = type === 'study'
  const steps = isStudy ? STEPS.study : STEPS.eligibility

  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68, minHeight: '100vh', background: '#FAFAF8' }}>

        <section style={{ padding: '96px 0 80px' }}>
          <div className="fe-wrap" style={{ maxWidth: 640 }}>

            {/* Check mark */}
            <div style={{ width: 64, height: 64, borderRadius: 18, background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>

            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#40916C', marginBottom: 12 }}>
              Payment confirmed
            </p>

            <h1 className="font-display" style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#1A1A18', lineHeight: 1.1, marginBottom: 16 }}>
              {isStudy
                ? 'Your feasibility study is confirmed.'
                : 'Your eligibility check is confirmed.'}
            </h1>

            <p style={{ fontSize: 17, color: '#5C5C58', lineHeight: 1.75, marginBottom: 40 }}>
              {isStudy
                ? 'A member of our assessment team will contact you within one business day to confirm your project details and begin the study.'
                : 'Our team will begin the eligibility screening and deliver your written assessment within 2–3 business days.'}
            </p>

            {/* What happens next */}
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E2DDD6', padding: '28px 32px', marginBottom: 24 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 20 }}>
                What happens next
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {steps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: '#EBF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: '#1B4332' }}>0{i + 1}</span>
                    </div>
                    <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, marginTop: 4 }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirmation email note */}
            <div style={{ background: '#F5ECD7', borderRadius: 12, padding: '14px 18px', marginBottom: 40 }}>
              <p style={{ fontSize: 13, color: '#6B4226', lineHeight: 1.6 }}>
                A confirmation email has been sent to you. If you have questions in the meantime, reply to that email or contact us at{' '}
                <a href="mailto:feasibility@green.earth" style={{ color: '#1B4332', fontWeight: 600 }}>feasibility@green.earth</a>.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 100, background: '#1B4332', color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                Back to Feasibility.Earth
              </Link>
              <Link href="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 100, background: 'transparent', border: '1px solid #D4E9DC', color: '#1B4332', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                View FAQ
              </Link>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
