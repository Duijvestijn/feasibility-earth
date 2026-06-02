import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Feasibility.Earth — Carbon Project Feasibility for Serious Developers',
  description: 'Expert-led feasibility studies for nature-based carbon projects. Eligibility assessment, bankable full studies, and full project development — backed by a team that has certified 149,000+ credits across Africa and Central Asia.',
  keywords: 'carbon project feasibility study, nature-based solutions, Verra VCS, Gold Standard, carbon credit development, reforestation feasibility, agroforestry carbon, cookstove carbon credits',
  openGraph: {
    title: 'Feasibility.Earth — Know What Your Land Is Capable Of',
    description: 'Expert-led feasibility studies for nature-based carbon projects. From eligibility assessment to full project development — backed by proven field experience.',
    url: 'https://feasibility.earth',
    siteName: 'Feasibility.Earth',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feasibility.Earth',
    description: 'Expert-led feasibility studies for nature-based carbon projects.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
