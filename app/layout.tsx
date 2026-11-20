import type { Metadata, Viewport } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import { AppointmentWidget } from '@/components/appointment-widget'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScrollReveals } from '@/components/scroll-reveals'
import { practice } from '@/lib/practice'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${practice.name} | Florida Telepsychiatry`,
    template: `%s | ${practice.name}`,
  },
  description:
    'Adult Psychiatry | Older Adult & Geriatric Psychiatry. Personal telehealth care for adults 18+ located in Florida with Kizito L. Mbaekwe, MSN, APRN, PMHNP-BC.',
  applicationName: practice.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: practice.name,
    title: `${practice.name} — Care that sees the whole you`,
    description:
      'Compassionate, evidence-based telehealth psychiatry for adults 18+ and older adults located in Florida.',
  },
  icons: {
    icon: { url: '/images/marenova-symbol.svg', type: 'image/svg+xml' },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-5 focus:py-3 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <AppointmentWidget>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
          <ScrollReveals />
        </main>
        <SiteFooter />
        </AppointmentWidget>
      </body>
    </html>
  )
}
