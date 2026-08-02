import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const { error } = await resend.contacts.create({
      audienceId: AUDIENCE_ID,
      email,
      firstName: firstName?.trim() || undefined,
      unsubscribed: false,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
