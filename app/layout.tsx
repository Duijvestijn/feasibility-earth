import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Feasibility.Earth — Carbon Project Feasibility for Serious Developers',
  description: 'Expert-led feasibility studies for nature-based carbon projects. Eligibility assessment, bankable full studies, and full project development — backed by practitioners with certified project experience worldwide.',
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
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MG2L7PZ6');`}
      </Script>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MG2L7PZ6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8515463.js"></script>
      </body>
    </html>
  )
}
