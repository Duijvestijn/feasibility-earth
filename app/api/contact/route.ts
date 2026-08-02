import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, organisation, role, message } = await req.json()

    if (!email || !email.includes('@') || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const name = [firstName, lastName].filter(Boolean).join(' ') || email

    // Notification to feasibility team
    const { error: notifyError } = await resend.emails.send({
      from: 'Feasibility.Earth <notify@feasibility.earth>',
      to: 'feasibility@green.earth',
      replyTo: email,
      subject: `New project inquiry from ${name}${organisation ? ` — ${organisation}` : ''}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; padding: 32px; background: #FAFAF8; border-radius: 12px;">
          <h2 style="font-size: 20px; font-weight: 700; color: #1A1A18; margin: 0 0 24px;">New project inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #9CA3AF; width: 120px;">Name</td><td style="padding: 8px 0; color: #1A1A18; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #9CA3AF;">Email</td><td style="padding: 8px 0; color: #1A1A18;"><a href="mailto:${email}" style="color: #1B4332;">${email}</a></td></tr>
            ${organisation ? `<tr><td style="padding: 8px 0; color: #9CA3AF;">Organisation</td><td style="padding: 8px 0; color: #1A1A18;">${organisation}</td></tr>` : ''}
            ${role ? `<tr><td style="padding: 8px 0; color: #9CA3AF;">Role</td><td style="padding: 8px 0; color: #1A1A18;">${role}</td></tr>` : ''}
          </table>
          <div style="padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #E2DDD6; font-size: 14px; color: #374151; line-height: 1.75; white-space: pre-wrap;">${message}</div>
          <p style="margin-top: 24px; font-size: 12px; color: #9CA3AF;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    })

    if (notifyError) {
      console.error('Notify email error:', notifyError)
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }

    // Confirmation to submitter
    await resend.emails.send({
      from: 'Feasibility.Earth <feasibility@feasibility.earth>',
      to: email,
      subject: 'We received your project inquiry',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; padding: 32px;">
          <div style="background: linear-gradient(135deg, #1B4332, #2D6A4F); border-radius: 12px; padding: 28px; margin-bottom: 24px;">
            <h1 style="font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 8px;">We received your inquiry.</h1>
            <p style="font-size: 15px; color: rgba(255,255,255,0.7); margin: 0;">Our feasibility team will respond within one business day.</p>
          </div>
          <p style="font-size: 15px; color: #374151; line-height: 1.75;">Hi ${firstName || name},</p>
          <p style="font-size: 15px; color: #374151; line-height: 1.75;">Thank you for reaching out. A member of our project assessment team will review your inquiry and get back to you within one business day.</p>
          <p style="font-size: 15px; color: #374151; line-height: 1.75;">If you have additional details to share in the meantime, simply reply to this email.</p>
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #E2DDD6;">
            <p style="font-size: 13px; color: #9CA3AF; margin: 0;">Feasibility.Earth — a Green Earth Group platform</p>
            <p style="font-size: 13px; color: #9CA3AF; margin: 4px 0 0;">feasibility@green.earth</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
