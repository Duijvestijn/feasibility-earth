import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const FAQS = [
  {
    category: 'About the platform',
    items: [
      { q: 'What is Feasibility.Earth?', a: 'Feasibility.Earth is a digital platform that automates carbon project feasibility studies. We combine satellite analysis, AI, and expert review to determine whether a piece of land qualifies for a certified carbon project — in 24 hours instead of months.' },
      { q: 'Who is Feasibility.Earth for?', a: 'Carbon project developers, landowners, and project aggregators who want to quickly assess whether their land qualifies for a Verra VCS, Gold Standard, or Plan Vivo carbon or biodiversity project.' },
      { q: 'Is Feasibility.Earth a Green Earth product?', a: 'Feasibility.Earth is built and operated by Green Earth Group N.V., a publicly listed carbon and biodiversity project developer. The platform was developed internally and validated on Green Earth\'s own project portfolio before being offered externally.' },
    ],
  },
  {
    category: 'The study',
    items: [
      { q: 'What does a feasibility study include?', a: 'A full feasibility study includes: automated eligibility check, NDVI satellite analysis, 10-year land use history, CO₂ potential estimate (tCO₂e/year), additionality assessment, certification pathway recommendation, and market value estimate. Everything is delivered in a single PDF report.' },
      { q: 'How accurate is the CO₂ estimate?', a: 'Our estimates are within ±15% of final certified figures, based on back-testing against Green Earth\'s certified projects. The report includes confidence ranges and methodology notes.' },
      { q: 'How long does it take?', a: 'The eligibility check is automated and takes less than 2 minutes. The full feasibility study, including expert review, is delivered within 24 hours of receiving your intake form.' },
      { q: 'Do I need to do any fieldwork?', a: 'No. The feasibility study is entirely remote. We use satellite imagery and the information you provide. If the study is positive and you proceed to full project development, fieldwork may be required at a later stage.' },
    ],
  },
  {
    category: 'Pricing & eligibility',
    items: [
      { q: 'What does a study cost?', a: 'A feasibility study costs $7,500 — a flat fee with no hidden costs. This includes the automated analysis, expert review, and one round of revisions.' },
      { q: 'What if my land is not eligible?', a: 'If the eligibility check determines your land does not qualify, we refund 50% of the study fee and provide a detailed explanation of the disqualifying factors.' },
      { q: 'What land size is required?', a: 'We work with projects from 50 hectares and above. Smaller parcels may qualify in some circumstances — contact us to discuss.' },
      { q: 'Which countries do you cover?', a: 'Feasibility.Earth works globally. We have specific experience in Sub-Saharan Africa (Nigeria, Uganda, Kenya, Cameroon), Central Asia (Kazakhstan), and Southeast Asia. We can assess land in any country with reliable satellite coverage.' },
    ],
  },
  {
    category: 'Certifications & standards',
    items: [
      { q: 'Which certification standards do you support?', a: 'We support Verra VCS (Verified Carbon Standard), Gold Standard, Plan Vivo, and CDM-based methodologies. The report will recommend the most suitable standard for your project type and location.' },
      { q: 'Can I use the report for full certification?', a: 'The feasibility report is designed to serve as the foundation for a full Project Design Document (PDD). It does not replace a PDD, but significantly reduces the time and cost to develop one.' },
      { q: 'What is additionality and how do you check it?', a: 'Additionality means the carbon benefits would not have occurred without the project. We check additionality using land use history data, forest cover change analysis (deforestation rates), and financial barrier tests per the applicable methodology.' },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>
        <section style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)', padding: '80px 0 64px' }}>
          <div className="fe-wrap">
            <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.15)', color: '#D8F3DC', border: '1px solid rgba(255,255,255,0.2)', marginBottom: 20 }}>FAQ</div>
            <h1 className="font-display" style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>Frequently asked questions</h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 460, lineHeight: 1.7 }}>Everything you need to know about the Feasibility.Earth platform and how it works.</p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap" style={{ maxWidth: 760 }}>
            {FAQS.map((section, si) => (
              <div key={si} style={{ marginBottom: 56 }}>
                <h2 style={{ fontSize: 12, fontWeight: 700, color: '#40916C', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 20 }}>{section.category}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {section.items.map((faq, i) => (
                    <div key={i} style={{ background: '#fff', borderRadius: 12, border: '1px solid #E2DDD6', padding: '20px 24px' }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', marginBottom: 8 }}>{faq.q}</p>
                      <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.75 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ background: '#1B4332', borderRadius: 16, padding: '32px 28px', textAlign: 'center' }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Still have questions?</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>Our team is happy to answer any questions about your specific project.</p>
              <a href="mailto:feasibility@green.earth" className="btn-amber" style={{ fontSize: 14 }}>Email us →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
