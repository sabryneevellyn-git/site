import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sabryne Evellyn - Marketing Digital em Campos dos Goytacazes | Consultoria e Estratégias',
  description: 'Marketing Digital em Campos dos Goytacazes. Transformo ideias em estratégias criativas que conectam, engajam e inspiram seu público. Consultoria, gestão de redes sociais e campanhas de lançamento.',
  keywords: [
    'marketing digital campos dos goytacazes',
    'marketing digital Campos dos Goytacazes',
    'consultoria marketing digital Campos dos Goytacazes',
    'gestão redes sociais Campos dos Goytacazes',
    'agência marketing digital Campos dos Goytacazes',
    'estratégias digitais Campos dos Goytacazes',
    'campanhas marketing digital Campos dos Goytacazes',
    'Sabryne Evellyn marketing digital',
    'marketing digital RJ',
    'marketing digital Rio de Janeiro'
  ],
  authors: [{ name: 'Sabryne Evellyn' }],
  creator: 'Sabryne Evellyn',
  publisher: 'Sabryne Evellyn',
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
    url: 'https://sabryneevellyn.com.br',
    title: 'Sabryne Evellyn - Marketing Digital em Campos dos Goytacazes',
    description: 'Marketing Digital em Campos dos Goytacazes. Consultoria, estratégias criativas e gestão de redes sociais.',
    siteName: 'Sabryne Evellyn - Marketing Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabryne Evellyn - Marketing Digital em Campos dos Goytacazes',
    description: 'Marketing Digital em Campos dos Goytacazes. Transformo ideias em estratégias criativas.',
  },
  alternates: {
    canonical: 'https://sabryneevellyn.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}