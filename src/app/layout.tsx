import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: 'EVY GROWTH - Assessoria em Marketing Digital Estratégico',
  description: 'Assessoria em marketing digital estratégico. Transformamos ideias em estratégias criativas que conectam, engajam e inspiram seu público. Consultoria, gestão de redes sociais e campanhas de lançamento.',
  keywords: [
    'marketing digital estratégico',
    'assessoria marketing digital',
    'consultoria marketing digital',
    'gestão redes sociais',
    'estratégias digitais',
    'campanhas marketing digital',
    'EVY GROWTH',
    'marketing digital RJ',
    'marketing digital Rio de Janeiro'
  ],
  authors: [{ name: 'EVY GROWTH' }],
  creator: 'EVY GROWTH',
  publisher: 'EVY GROWTH',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://evygrowth.com.br',
    title: 'EVY GROWTH - Assessoria em Marketing Digital Estratégico',
    description: 'Assessoria em marketing digital estratégico. Consultoria, estratégias criativas e gestão de redes sociais.',
    siteName: 'EVY GROWTH - Marketing Digital Estratégico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVY GROWTH - Assessoria em Marketing Digital Estratégico',
    description: 'Assessoria em marketing digital estratégico. Transformamos ideias em estratégias criativas.',
  },
  alternates: {
    canonical: 'https://evygrowth.com.br',
  },
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${dmSans.className}`}>{children}</body>
    </html>
  )
}