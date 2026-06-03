import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AnimatedBackground } from '@/components/site/animated-background'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Central Play Plus — Filmes, séries e canais ao vivo na sua tela hoje',
  description:
    'Filmes, séries, canais ao vivo e futebol na sua Smart TV, celular ou TV Box. Configuração em minutos com suporte humano pelo WhatsApp. Sem fidelidade, sem complicação.',
  keywords: [
    'Central Play Plus',
    'IPTV',
    'filmes series canais ao vivo',
    'configuração Smart TV',
    'suporte humano WhatsApp',
    'planos entretenimento',
    'TV Box',
  ],
  generator: 'v0.app',
  metadataBase: new URL('https://centralplayplus.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Central Play Plus — Filmes, séries e canais ao vivo na sua tela hoje',
    description:
      'Mais de 30.000 conteúdos entre filmes, séries, canais ao vivo e futebol. Configuração em minutos com suporte humano pelo WhatsApp. Planos a partir de R$ 20/mês. Sem fidelidade.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Central Play Plus',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Central Play Plus - Entretenimento na sua tela',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Central Play Plus — Filmes, séries e canais ao vivo',
    description: 'Configure em minutos com suporte humano pelo WhatsApp. Planos a partir de R$ 20/mês. Sem fidelidade.',
    images: ['/og-image.png'],
  },
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#0a0c12',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} bg-background overflow-x-hidden`}>
      <body className="font-sans antialiased grain overflow-x-hidden">
        {/* Animated premium background */}
        <AnimatedBackground />
        {children}
      </body>
    </html>
  )
}
