import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Syne } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
})

const siteUrl = 'https://sahlmhd.vercel.app'
const title = 'Mohammed Sahl | Frontend Developer'
const description =
  'Frontend Developer skilled in React.js, Next.js, and MERN stack. Based in Dubai, UAE. Open to frontend roles and freelance projects.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s — Mohammed Sahl',
  },
  description,
  keywords: [
    'frontend developer',
    'React.js',
    'Next.js',
    'MERN stack',
    'Tailwind CSS',
    'Dubai',
    'Mohammed Sahl',
    'portfolio',
  ],
  authors: [{ name: 'Mohammed Sahl V U' }],
  openGraph: {
    title,
    description: 'React & Next.js developer based in Dubai. Shipping production UI at Ecogo Software Solutions.',
    url: siteUrl,
    siteName: 'Mohammed Sahl Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'React & Next.js developer based in Dubai.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0e17',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary font-mono">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
