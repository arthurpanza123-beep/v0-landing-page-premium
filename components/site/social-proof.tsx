"use client"

import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Clock, HeartHandshake, Tv2, Ban, MessageCircle, ArrowRight, Zap, Users, Shield } from "lucide-react"
import { Container, Eyebrow } from "./section"
import { whatsappLink } from "@/lib/site"

const STATS = [
  { value: 800, suffix: "+", label: "Clientes atendidos", icon: Users },
  { value: 98, suffix: "%", label: "Recomendam", icon: HeartHandshake },
  { value: 5, suffix: " min", label: "Ativação média", icon: Zap },
  { value: 4.8, suffix: "/5", label: "Avaliação", isFloat: true, icon: Shield },
]

const DIFFERENTIALS = [
  {
    icon: Zap,
    title: "Ativação rápida",
    desc: "Em minutos você já está assistindo. Sem burocracia, sem espera.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/25",
  },
  {
    icon: HeartHandshake,
    title: "Suporte humano",
    desc: "Atendimento real pelo WhatsApp. Nada de robôs ou respostas automáticas.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/25",
  },
  {
    icon: Tv2,
    title: "Multi-dispositivos",
    desc: "Funciona na TV, celular, tablet e TV Box. Use onde preferir.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/25",
  },
  {
    icon: Ban,
    title: "Sem fidelidade",
    desc: "Cancele quando quiser, sem multa e sem complicação.",
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "border-rose-400/25",
  },
]

function AnimatedCount({
  target,
  suffix,
  isFloat,
}: {
  target: number
  suffix: string
  isFloat?: boolean
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 1600
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + increment, target)
      setCount(isFloat ? Math.round(current * 10) / 10 : Math.round(current))
      if (current >= target) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target, isFloat])

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(1) : count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

export function SocialProof() {
  return (
    <section id="diferenciais" className="relative py-20 sm:py-32 lg:py-40">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-[30%] -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full opacity-15"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.35) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-[20%] -z-10 h-[350px] w-[350px] translate-x-1/2 rounded-full opacity-12"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.14 65 / 0.3) 0%, transparent 70%)", filter: "blur(70px)" }}
      />

      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Por que escolher a Central Play Plus?</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.08]">
              Simples, rápido e{" "}
              <span className="text-muted-foreground">sem complicação.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
              Centenas de clientes satisfeitos. Atendimento humano de verdade, ativação rápida e suporte contínuo.
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group flex flex-col items-center rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-6 text-center transition-all duration-500 hover:border-primary/20 hover:bg-white/[0.05] sm:py-8"
            >
              <div className="mb-3 flex size-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                <stat.icon className="size-5 text-primary" />
              </div>
              <span className="text-2xl font-bold tracking-[-0.02em] text-white sm:text-[2rem]">
                <AnimatedCount
                  target={stat.value}
                  suffix={stat.suffix}
                  isFloat={stat.isFloat}
                />
              </span>
              <span className="mt-1.5 text-[0.75rem] text-white/50 sm:text-[0.8rem]">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Differentials grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {DIFFERENTIALS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border ${item.borderColor} bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05] sm:p-7`}
            >
              <div className={`mb-4 flex size-12 items-center justify-center rounded-xl ${item.bgColor}`}>
                <item.icon className={`size-6 ${item.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-white/55">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-8 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left"
        >
          <div>
            <p className="text-lg font-semibold text-white">Ficou com alguma dúvida?</p>
            <p className="mt-1 text-[0.9rem] text-white/55">Nossa equipe está online agora para te ajudar.</p>
          </div>
          <a
            href={whatsappLink("Olá! Tenho algumas dúvidas sobre a Central Play Plus.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 text-[0.9rem] font-semibold text-white transition-all duration-300 hover:bg-whatsapp/90"
          >
            <MessageCircle className="size-4" />
            Falar no WhatsApp
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
