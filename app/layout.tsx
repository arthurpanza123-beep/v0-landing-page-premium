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
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} bg-background overflow-x-hidden`}>
      <body className="font-sans antialiased grain overflow-x-hidden">
        {/* Ambient background gradients for cozy atmosphere */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
        >
          {/* Blue glow — top left */}
          <div
            className="absolute -left-[20%] -top-[10%] h-[600px] w-[800px] rounded-full opacity-[0.10]"
            style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255) 0%, transparent 70%)", filter: "blur(100px)" }}
          />
          {/* Warm glow — bottom right */}
          <div
            className="absolute -bottom-[15%] -right-[15%] h-[500px] w-[700px] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(ellipse, oklch(0.75 0.12 55) 0%, transparent 70%)", filter: "blur(100px)" }}
          />
          {/* Warm glow — top right for balance */}
          <div
            className="absolute -right-[10%] top-[20%] h-[400px] w-[500px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(ellipse, oklch(0.75 0.12 55) 0%, transparent 70%)", filter: "blur(80px)" }}
          />
        </div>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
