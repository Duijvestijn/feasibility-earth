import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Feasibility.Earth',
  description: 'Common questions about carbon project feasibility assessment. For developers, investors, and institutional buyers.',
}

function Arrow({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const FAQS = [
  {
    category: 'What we do',
    items: [
      {
        q: 'What is Feasibility.Earth?',
        a: 'Feasibility.Earth is an expert-led feasibility assessment service for nature-based carbon projects. We combine satellite analysis with direct field experience — our team has developed and certified 149,000 carbon credits across Africa and Central Asia — to produce rigorous eligibility and feasibility assessments for reforestation, agroforestry, ARR, and cookstove projects.'
      },
      {
        q: 'Who uses Feasibility.Earth?',
        a: 'Carbon project developers who need a rigorous independent assessment before committing capital. Institutional investors and funds evaluating project pipelines. Corporate buyers conducting pre-acquisition due diligence on carbon assets. Development finance institutions requiring independent project validation. We work with both individual projects and institutional buyers screening multiple projects simultaneously.'
      },
      {
        q: 'How is this different from a traditional consultancy?',
        a: 'A traditional consultancy charges $25,000–$75,000 for a feasibility study and takes 3–6 months. We produce equivalent-depth assessments — built on the same methodology standards applied to our own certified projects — in 5 business days. The critical difference: our team has personally developed and certified the types of projects we assess. We do not assess from documents. We have been in the field.'
      },
      {
        q: 'Is this connected to Green Earth Group?',
        a: 'Feasibility.Earth is built and operated by Green Earth Group N.V. Our assessments draw directly on Green Earth\'s project development experience. The team that conducts your feasibility study is the same team that has developed, certified, and manages Green Earth\'s active project portfolio. We offer this assessment capability externally because we believe rigorous pre-project screening benefits the entire market.'
      },
    ],
  },
  {
    category: 'The assessment',
    items: [
      {
        q: 'What does the eligibility assessment cover?',
        a: 'The eligibility assessment ($500) covers five areas that determine whether a project can proceed: additionality (would the carbon benefit occur without the project?), baseline carbon stock, land use history going back 10+ years, applicable certification methodology, and geographic risk factors including permanence and leakage. We give you a clear documented recommendation — proceed, proceed with conditions, or do not proceed — within 2–3 business days.'
      },
      {
        q: 'What makes your full feasibility study "bankable"?',
        a: 'The full study ($7,500) is structured against the actual requirements of development finance institutions, Verra VCS auditors, and Gold Standard certification reviewers. It includes carbon potential with confidence ranges and sensitivity analysis, certification pathway with gap analysis, financial projections across scenario prices, risk register in a format accepted by institutional reviewers, and a monitoring framework outline. It is designed to function as the technical foundation for PDD development — materially reducing the time and cost of that subsequent step.'
      },
      {
        q: 'How accurate is the carbon credit estimate?',
        a: 'Our estimates are calibrated against Green Earth\'s certified project data. In post-certification comparison, our feasibility estimates have been within ±15% of final verified credit volumes. We document our assumptions transparently so your team and external auditors can interrogate the methodology. We do not produce headline estimates without showing our working.'
      },
      {
        q: 'Does the full feasibility study replace a Project Design Document?',
        a: 'No — and we are transparent about this. A PDD is required for certification, and is a distinct document. What our feasibility study does is reduce PDD development time by approximately 60% and eliminate the most expensive category of PDD failure: projects that reach PDD stage and are then rejected on additionality or baseline methodology grounds. Our study catches those failures first.'
      },
      {
        q: 'Do you conduct fieldwork?',
        a: 'For the eligibility assessment, assessment is remote — satellite data plus the information you provide. For the full feasibility study, fieldwork requirements depend on project type and geography. Where existing high-resolution regional datasets do not exist, we commission targeted field validation. This is included in the study cost, not a separate charge.'
      },
    ],
  },
  {
    category: 'Pricing and risk',
    items: [
      {
        q: 'What does each service cost?',
        a: 'Eligibility assessment: $500, delivered in 2–3 business days. Full feasibility study: $7,500, delivered in 5 business days. Both are flat fees with no variable costs. Project development partnership is by arrangement following a completed feasibility study, and terms depend on project specifics. For institutional buyers screening multiple projects, we offer structured batch programmes — contact us to discuss.'
      },
      {
        q: 'What is the refund policy?',
        a: 'For the full feasibility study: if our assessment concludes the land categorically does not qualify for a carbon project, we refund 50% of the study fee. You keep the full report with the documented reasoning — which is itself useful for ruling out the opportunity definitively. If the land qualifies but faces conditions or risks that need addressing before development, we document those clearly. There is no refund in that case, but you have a roadmap.'
      },
      {
        q: 'What does a bad feasibility assessment actually cost?',
        a: 'A carbon project that fails at validation after PDD development typically costs $150,000–$500,000 in wasted development spend and 18–24 months in lost time. For institutional buyers, failed projects also carry reputational exposure — KPMG\'s 2024 ESG due diligence study found that over 50% of investors who encountered material ESG findings during transactions experienced a deal-stopper. Our $7,500 study is designed to eliminate that risk before it materialises.'
      },
      {
        q: 'Can you screen multiple projects simultaneously?',
        a: 'Yes. For institutional buyers evaluating a pipeline, we structure batch assessment programmes. The standard process applies per project, but we coordinate timelines so reports are delivered in batches. Contact us with the number of projects and your timeline requirements — we will confirm capacity and outline how batch scheduling works.'
      },
    ],
  },
  {
    category: 'Project development',
    items: [
      {
        q: 'What does the project development service involve?',
        a: 'For projects that demonstrate strong fundamentals in the full feasibility study, we offer to lead or co-develop the full development cycle: Project Design Document, certification and registration, carbon credit marketing and sales, technical implementation and field supervision, and ongoing monitoring and verification reporting. We also consider direct capital co-investment for qualifying projects.'
      },
      {
        q: 'How do you decide whether to co-invest in a project?',
        a: 'Co-investment decisions are made case by case, following a completed full feasibility study. Key criteria include net present value of projected credit revenue, permanence risk rating, development timeline to first credit issuance, and quality of the on-ground implementation partner. We do not commit to co-investment without a completed feasibility study. The study is the filter.'
      },
      {
        q: 'What are your terms for project development partnership?',
        a: 'Terms vary by project and partnership structure. We work on both fee-for-service (PDD development, certification management) and revenue-sharing models (where we co-invest capital in exchange for a share of credit revenue). The terms applicable to your project are discussed after the feasibility study confirms viability. We do not publish standard terms because the right structure depends on project specifics.'
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>

        <section style={{ background: 'linear-gradient(150deg, #060E08 0%, #1B4332 100%)', padding: '80px 0 64px' }}>
          <div className="fe-wrap">
            <div className="fe-badge" style={{ background: 'rgba(216,243,220,0.10)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.14)', marginBottom: 22 }}>FAQ</div>
            <h1 className="font-display" style={{ fontSize: 'clamp(30px,5vw,50px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
              Common questions
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.62)', maxWidth: 480, lineHeight: 1.8 }}>
              For developers, investors, and institutional buyers evaluating carbon project feasibility.
            </p>
          </div>
        </section>

        <section className="fe-section" style={{ background: '#FAFAF8' }}>
          <div className="fe-wrap" style={{ maxWidth: 760 }}>
            {FAQS.map((section, si) => (
              <div key={si} style={{ marginBottom: 52 }}>
                <h2 style={{ fontSize: 12, fontWeight: 700, color: '#40916C', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 20 }}>
                  {section.category}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {section.items.map((faq, i) => (
                    <div key={i} style={{ background: '#fff', borderRadius: 12, border: '1px solid #E2DDD6', padding: '22px 26px' }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: '#1A1A18', marginBottom: 10 }}>{faq.q}</p>
                      <p style={{ fontSize: 14, color: '#5C5C58', lineHeight: 1.85 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ background: '#1B4332', borderRadius: 16, padding: '32px 28px', textAlign: 'center' }}>
              <p style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Have a question not answered here?</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 22, lineHeight: 1.7 }}>
                Our feasibility team responds within one business day.
              </p>
              <Link href="/contact" className="btn-amber" style={{ fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Get in touch <Arrow size={14} color="#1A1A18" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
