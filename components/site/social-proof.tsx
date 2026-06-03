"use client"

import { motion } from "motion/react"
import {
  Zap,
  HeartHandshake,
  Server,
  Shield,
  MessageCircle,
  ArrowRight,
  Wifi,
  Clock,
} from "lucide-react"
import { Container, Eyebrow } from "./section"
import { whatsappLink } from "@/lib/site"

const BENEFITS = [
  {
    icon: Server,
    title: "Servidor de alta estabilidade",
    description:
      "Infraestrutura dedicada com uptime acima de 99,5%. Sem travamentos, sem quedas no meio do filme.",
    highlight: "99,5%",
    highlightLabel: "uptime garantido",
    accentColor: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    size: "lg", // takes 2 cols on desktop
  },
  {
    icon: Zap,
    title: "Ativação no mesmo dia",
    description: "Fechou o plano? Começamos a configurar na hora. Em menos de 5 minutos você já está assistindo.",
    highlight: "5 min",
    highlightLabel: "para ativar",
    accentColor: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    size: "sm",
  },
  {
    icon: HeartHandshake,
    title: "Suporte humano real",
    description:
      "Fala com uma pessoa de verdade pelo WhatsApp. Sem robô, sem fila, sem enrolação.",
    highlight: "Humano",
    highlightLabel: "sempre",
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    size: "sm",
  },
  {
    icon: Shield,
    title: "Sem contrato, sem multa",
    description:
      "Pague só pelo período que quiser. Sem fidelidade, sem taxa de cancelamento, sem surpresas.",
    highlight: "Zero",
    highlightLabel: "taxas ocultas",
    accentColor: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    size: "sm",
  },
  {
    icon: Wifi,
    title: "Funciona no seu aparelho",
    description:
      "Smart TV, celular, tablet, TV Box ou Fire Stick. Antes de começar, a gente confirma a compatibilidade.",
    highlight: "5+",
    highlightLabel: "dispositivos",
    accentColor: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/20",
    size: "sm",
  },
]

const UPTIME_BARS = [95, 99, 97, 100, 98, 100, 99]

export function SocialProof() {
  return (
    <section id="diferenciais" className="relative py-16 sm:py-20 lg:py-24">
      {/* Ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[500px] w-[500px] translate-x-1/3 rounded-full opacity-15"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.3) 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <Eyebrow>Por que a Central Play Plus?</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            O que nos faz{" "}
            <span className="text-muted-foreground">diferentes.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-white/55">
            Não somos só mais um serviço de streaming. Temos estrutura técnica sólida e uma equipe que cuida de você.
          </p>
        </motion.div>

        {/* Bento grid — 1 large card + 4 small */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">

          {/* Large card — servidor */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-white/[0.03] to-transparent p-6 sm:col-span-2 lg:col-span-1 lg:row-span-2 sm:p-7"
          >
            <div className="flex size-12 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10">
              <Server className="size-6 text-blue-400" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">Servidor de alta estabilidade</h3>
            <p className="mt-2.5 text-[0.9rem] leading-[1.7] text-white/60">
              Infraestrutura dedicada com uptime acima de 99,5%. Sem travamentos, sem quedas no meio do filme.
            </p>

            {/* Uptime visual */}
            <div className="mt-6 rounded-xl border border-white/8 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-white/50">Estabilidade do servidor</span>
                <span className="text-xs font-bold text-blue-400">99,5% uptime</span>
              </div>
              <div className="mt-3 flex items-end gap-1">
                {UPTIME_BARS.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    className="flex-1 origin-bottom rounded-sm bg-blue-400/70"
                    style={{ height: `${h * 0.4}px` }}
                  />
                ))}
              </div>
              <div className="mt-2 flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_6px] shadow-emerald-400/60" />
                <span className="text-[0.7rem] text-white/50">Todos os sistemas operando normalmente</span>
              </div>
            </div>

            {/* Metric */}
            <div className="mt-6 flex items-baseline gap-1.5">
              <span className="text-5xl font-black text-blue-400">99,5%</span>
              <span className="text-sm text-white/40">uptime garantido</span>
            </div>
          </motion.div>

          {/* 4 small cards */}
          {BENEFITS.slice(1).map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 hover:border-white/15 sm:p-5 ${benefit.accentBorder} bg-gradient-to-br from-white/[0.04] to-transparent`}
              >
                <div className="flex items-start justify-between">
                  <motion.div 
                    className={`flex size-10 items-center justify-center rounded-xl border ${benefit.accentBorder} ${benefit.accentBg}`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`size-5 ${benefit.accentColor}`} />
                  </motion.div>
                  <div className="text-right">
                    <span className={`text-2xl font-black ${benefit.accentColor}`}>{benefit.highlight}</span>
                    <p className="text-[0.65rem] text-white/35">{benefit.highlightLabel}</p>
                  </div>
                </div>
                <h3 className="mt-4 text-[0.95rem] font-bold text-white leading-tight">{benefit.title}</h3>
                <p className="mt-1.5 text-[0.8rem] leading-[1.6] text-white/55">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <p className="text-[0.9rem] text-white/55">Ficou com dúvida? Fale com a gente agora.</p>
          <motion.a
            href={whatsappLink("Olá! Gostaria de saber mais sobre a Central Play Plus.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-2.5 text-[0.9rem] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.5)] transition-all duration-300"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="size-4" />
            Falar no WhatsApp
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        </motion.div>
      </Container>
    </section>
  )
}
