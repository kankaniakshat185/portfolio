import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { Header, Navbar } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { ScrollToTop } from '@/components/scroll-to-top'
import { InteractiveBackground } from '@/components/interactive-background'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://akshatkankani.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Akshat Kankani | Backend & Systems Engineer',
    template: '%s | Akshat Kankani'
  },
  description: 'CS undergrad building low-level, distributed and backend systems and applied AI: a C++ storage engine, a 14.5M ops/sec matching engine, a Python orchestrator, LLM tools. Projects, benchmarks, deep-dive engineering blogs.',
  openGraph: {
    title: 'Akshat Kankani | Backend & Systems Engineer',
    description: 'CS undergrad building low-level, distributed and backend systems and applied AI: a C++ storage engine, a 14.5M ops/sec matching engine, a Python orchestrator, LLM tools. Projects, benchmarks, deep-dive engineering blogs.',
    url: 'https://akshatkankani.vercel.app/',
    siteName: 'Akshat Kankani',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Akshat Kankani Portfolio Cover Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshat Kankani | Backend & Systems Engineer',
    description: 'CS undergrad building low-level, distributed and backend systems and applied AI: a C++ storage engine, a 14.5M ops/sec matching engine, a Python orchestrator, LLM tools. Projects, benchmarks, deep-dive engineering blogs.',
    images: ['/cover.jpg'],
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument',
  subsets: ['latin'],
  weight: '400',
  style: ['italic', 'normal'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-sans">
            <InteractiveBackground />
            <div className="relative mx-auto w-full max-w-3xl flex-1 px-6 pt-20 md:px-8">
              <div className="pointer-events-none fixed top-0 left-0 right-0 h-[76px] z-40 bg-white dark:bg-zinc-950" />
              <Navbar />
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
