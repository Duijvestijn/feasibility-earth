import type { Metadata } from 'next'
import Script from 'next/script'
import ScrollRevealScript from '@/components/ScrollRevealScript'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import './globals.css'

const OG_IMAGE = 'https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260602_174959_337ef494-c1ed-43ed-8479-6f10ccf3680e.png'

export const metadata: Metadata = {
  metadataBase: new URL('https://feasibility.earth'),
  title: 'Feasibility.Earth — Carbon Project Feasibility for Serious Developers',
  description: 'Expert-led carbon project pre-feasibility assessments. Eligibility screening from $500, full feasibility study from $7,500, and project development partnership — backed by practitioners with certified project experience worldwide.',
  keywords: 'carbon project feasibility study, nature-based solutions, Verra VCS, Gold Standard, carbon credit development, reforestation feasibility, agroforestry carbon, cookstove carbon credits',
  openGraph: {
    title: 'Feasibility.Earth — Know What Your Land Is Capable Of',
    description: 'Expert-led carbon project pre-feasibility assessments. From eligibility screening to full study and project development — backed by proven field experience.',
    url: 'https://feasibility.earth',
    siteName: 'Feasibility.Earth',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Feasibility.Earth — Carbon project pre-feasibility assessment' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feasibility.Earth',
    description: 'Expert-led carbon project pre-feasibility assessments. Eligibility from $500, full study from $7,500.',
    images: [OG_IMAGE],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Feasibility.Earth',
              url: 'https://feasibility.earth',
              logo: 'https://feasibility.earth/favicon.svg',
              description: 'Expert-led carbon project pre-feasibility assessments. Eligibility screening, full feasibility study, and project development — backed by practitioners with certified project experience worldwide.',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'feasibility@green.earth',
                contactType: 'customer service',
                availableLanguage: 'English',
              },
              sameAs: ['https://green.earth'],
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Eligibility Check',
                  price: '500',
                  priceCurrency: 'USD',
                  description: 'Satellite screening and eligibility assessment for carbon project land parcels.',
                },
                {
                  '@type': 'Offer',
                  name: 'Full Feasibility Study',
                  price: '7500',
                  priceCurrency: 'USD',
                  description: '70+ page pre-feasibility report covering all material carbon project factors: land, additionality, carbon potential, risk, financials, and development pathway.',
                },
              ],
            }),
          }}
        />
        <ScrollProgress />
        {children}
        <BackToTop />
        <ScrollRevealScript />
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8515463.js"></script>
      </body>
    </html>
  )
}
