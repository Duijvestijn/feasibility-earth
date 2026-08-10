import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2025-06-30.basil' })
const resend = new Resend(process.env.RESEND_API_KEY)

const NOTIFY_EMAIL = 'feasibility@green.earth'
const FROM_NOTIFY  = 'Feasibility.Earth <notify@feasibility.earth>'
const FROM_CONFIRM = 'Feasibility.Earth <feasibility@feasibility.earth>'

const ELIGIBILITY_LINK = 'plink_1U2qFDBCkS7uJWKB7WxkGSzg'
const STUDY_LINK       = 'plink_1U2qFDBCkS7uJWKBhTxjcPi1'

function serviceLabel(paymentLink: string | null) {
  if (paymentLink === ELIGIBILITY_LINK) return 'Eligibility Check ($500)'
  if (paymentLink === STUDY_LINK)       return 'Full Feasibility Study ($7,500)'
  return 'Feasibility service'
}

function serviceType(paymentLink: string | null): 'eligibility' | 'study' | 'unknown' {
  if (paymentLink === ELIGIBILITY_LINK) return 'eligibility'
  if (paymentLink === STUDY_LINK)       return 'study'
  return 'unknown'
}

function formatAmount(amount: number | null, currency: string | null) {
  if (!amount) return '—'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency?.toUpperCase() || 'USD',
  }).format(amount / 100)
}

function extractCustomFields(session: Stripe.Checkout.Session): Record<string, string> {
  const fields: Record<string, string> = {}
  for (const f of session.custom_fields || []) {
    const val = f.text?.value || f.dropdown?.value || f.numeric?.value || ''
    if (val) fields[f.label.custom || f.key] = val
  }
  return fields
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig  = req.headers.get('stripe-signature')

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true })
  }

  const session     = event.data.object as Stripe.Checkout.Session
  const customerEmail = session.customer_details?.email || ''
  const customerName  = session.customer_details?.name  || customerEmail
  const firstName     = customerName.split(' ')[0] || 'there'
  const amount        = formatAmount(session.amount_total, session.currency)
  const paymentLink   = session.payment_link as string | null
  const label         = serviceLabel(paymentLink)
  const type          = serviceType(paymentLink)
  const customFields  = extractCustomFields(session)
  const country       = customFields['Project country'] || customFields['project_country'] || ''
  const projectType   = customFields['Project type']    || customFields['project_type']    || ''

  const customFieldsHtml = (country || projectType) ? `
    <tr><td colspan="2" style="padding-top:16px;padding-bottom:4px;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:1px;">Project details</td></tr>
    ${country     ? `<tr><td style="padding:6px 0;color:#9CA3AF;width:140px;">Project country</td><td style="padding:6px 0;color:#1A1A18;font-weight:600;">${country}</td></tr>` : ''}
    ${projectType ? `<tr><td style="padding:6px 0;color:#9CA3AF;">Project type</td><td style="padding:6px 0;color:#1A1A18;font-weight:600;">${projectType}</td></tr>` : ''}
  ` : ''

  // ── Internal notification ──────────────────────────────────────────────
  await resend.emails.send({
    from:    FROM_NOTIFY,
    to:      NOTIFY_EMAIL,
    replyTo: customerEmail,
    subject: `Payment received: ${label} — ${customerName}`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:600px;padding:32px;background:#FAFAF8;border-radius:12px;">
        <div style="background:#1B4332;border-radius:10px;padding:20px 24px;margin-bottom:24px;">
          <p style="font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,0.5);margin:0 0 6px;">Payment received</p>
          <h2 style="font-size:22px;font-weight:700;color:#fff;margin:0 0 4px;">${label}</h2>
          <p style="font-size:20px;font-weight:800;color:#86C89C;margin:0;">${amount}</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:6px 0;color:#9CA3AF;width:140px;">Customer</td><td style="padding:6px 0;color:#1A1A18;font-weight:600;">${customerName}</td></tr>
          <tr><td style="padding:6px 0;color:#9CA3AF;">Email</td><td style="padding:6px 0;"><a href="mailto:${customerEmail}" style="color:#1B4332;">${customerEmail}</a></td></tr>
          <tr><td style="padding:6px 0;color:#9CA3AF;">Amount</td><td style="padding:6px 0;color:#1A1A18;">${amount}</td></tr>
          <tr><td style="padding:6px 0;color:#9CA3AF;">Session</td><td style="padding:6px 0;color:#9CA3AF;font-size:12px;">${session.id}</td></tr>
          ${customFieldsHtml}
        </table>
        <div style="margin-top:24px;padding:16px;background:#fff;border-radius:8px;border:1px solid #E2DDD6;">
          <p style="font-size:13px;font-weight:700;color:#1B4332;margin:0 0 6px;">Action required</p>
          <p style="font-size:13px;color:#374151;margin:0;">Contact <strong>${customerName}</strong> within 1 business day at <a href="mailto:${customerEmail}" style="color:#1B4332;">${customerEmail}</a> to ${type === 'eligibility' ? 'confirm receipt and begin the eligibility screening.' : 'schedule the kickoff call and begin the feasibility study.'}</p>
        </div>
        <p style="margin-top:20px;font-size:12px;color:#9CA3AF;">Reply directly to this email to reach ${customerName}.</p>
      </div>
    `,
  }).catch(err => console.error('Notify email error:', err))

  // ── Confirmation to buyer ──────────────────────────────────────────────
  if (customerEmail) {
    const isStudy = type === 'study'
    await resend.emails.send({
      from:    FROM_CONFIRM,
      to:      customerEmail,
      subject: `Your ${isStudy ? 'feasibility study' : 'eligibility check'} is confirmed — Feasibility.Earth`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;padding:32px;">
          <div style="background:linear-gradient(135deg,#1B4332,#2D6A4F);border-radius:12px;padding:28px;margin-bottom:28px;">
            <p style="font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,0.5);margin:0 0 10px;">Payment confirmed</p>
            <h1 style="font-size:22px;font-weight:700;color:#fff;margin:0 0 8px;">${label}</h1>
            <p style="font-size:15px;color:rgba(255,255,255,0.7);margin:0;">We will be in touch within one business day.</p>
          </div>

          <p style="font-size:15px;color:#374151;line-height:1.75;">Hi ${firstName},</p>
          <p style="font-size:15px;color:#374151;line-height:1.75;">
            Thank you — your payment of <strong>${amount}</strong> for the <strong>${label}</strong> has been received.
            ${isStudy
              ? 'A member of our assessment team will contact you within one business day to confirm your project details and begin the study.'
              : 'Our team will begin the eligibility screening and deliver your written assessment within 2–3 business days.'}
          </p>

          <div style="margin:24px 0;padding:20px;background:#F5F5F2;border-radius:10px;">
            <p style="font-size:12px;font-weight:700;color:#1B4332;text-transform:uppercase;letter-spacing:0.8px;margin:0 0 12px;">What happens next</p>
            ${isStudy ? `
              <div style="display:flex;flex-direction:column;gap:8px;">
                <p style="font-size:13px;color:#374151;margin:0;padding-left:16px;border-left:3px solid #40916C;">We review your project details and contact you within 1 business day</p>
                <p style="font-size:13px;color:#374151;margin:0;padding-left:16px;border-left:3px solid #40916C;">The full 70+ page feasibility report is delivered within 5 business days</p>
                <p style="font-size:13px;color:#374151;margin:0;padding-left:16px;border-left:3px solid #40916C;">If your land does not qualify, 50% of the study fee is refunded</p>
              </div>
            ` : `
              <div style="display:flex;flex-direction:column;gap:8px;">
                <p style="font-size:13px;color:#374151;margin:0;padding-left:16px;border-left:3px solid #40916C;">We begin satellite screening of your land parcel</p>
                <p style="font-size:13px;color:#374151;margin:0;padding-left:16px;border-left:3px solid #40916C;">Your written eligibility assessment is delivered within 2–3 business days</p>
                <p style="font-size:13px;color:#374151;margin:0;padding-left:16px;border-left:3px solid #40916C;">The report includes a clear recommendation: proceed or not — with reasoning</p>
              </div>
            `}
          </div>

          <p style="font-size:14px;color:#374151;line-height:1.75;">Questions in the meantime? Reply to this email and we will get back to you promptly.</p>

          <div style="margin-top:32px;padding-top:20px;border-top:1px solid #E2DDD6;">
            <p style="font-size:13px;color:#9CA3AF;margin:0;">Feasibility.Earth — a Green Earth Group platform</p>
            <p style="font-size:13px;color:#9CA3AF;margin:4px 0 0;"><a href="mailto:feasibility@green.earth" style="color:#9CA3AF;">feasibility@green.earth</a></p>
          </div>
        </div>
      `,
    }).catch(err => console.error('Confirmation email error:', err))
  }

  return NextResponse.json({ received: true })
}
