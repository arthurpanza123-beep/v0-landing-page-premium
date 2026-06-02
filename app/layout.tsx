import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Central Play Plus — Seu entretenimento, pronto para usar',
  description:
    'Você escolhe o plano, chama nossa equipe e recebe ajuda para deixar tudo configurado na sua TV, celular ou TV Box. Suporte humano pelo WhatsApp, sem complicação e sem fidelidade.',
  keywords: [
    'Central Play Plus',
    'entretenimento',
    'configuração de TV',
    'suporte humano',
    'planos de entretenimento',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Central Play Plus — Seu entretenimento, pronto para usar',
    description:
      'Escolha o plano, fale com a equipe e receba ajuda para configurar tudo na sua TV, celular ou TV Box. Suporte humano pelo WhatsApp.',
    type: 'website',
    locale: 'pt_BR',
  },
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
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
