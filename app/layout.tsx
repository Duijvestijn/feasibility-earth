import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Feasibility.Earth — Carbon Project Feasibility Studies',
  description: 'Digital feasibility studies for carbon and biodiversity projects. Satellite analysis, CO₂ potential calculation and eligibility checks in minutes — not months.',
  openGraph: {
    title: 'Feasibility.Earth',
    description: 'Know if your land qualifies for a carbon project in minutes.',
    url: 'https://feasibility.earth',
    siteName: 'Feasibility.Earth',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
