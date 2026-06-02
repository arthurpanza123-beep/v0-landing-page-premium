"use client"

import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"
import Image from "next/image"
import { Container, Eyebrow } from "./section"

const STATS = [
  { value: 4800, suffix: "+", label: "Clientes ativos" },
  { value: 99, suffix: "%", label: "Satisfação geral" },
  { value: 5, suffix: " min", label: "Tempo médio de ativação" },
  { value: 4.9, suffix: "/5", label: "Avaliação média", isFloat: true },
]

const TESTIMONIALS = [
  {
    name: "Rafaela M.",
    location: "São Paulo, SP",
    rating: 5,
    text: "Configuraram na hora, minha TV LG ficou perfeita. O suporte foi melhor do que qualquer empresa grande que já usei.",
    initials: "RM",
  },
  {
    name: "Carlos S.",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Não esperava atendimento tão rápido. Em menos de 10 minutos tava assistindo. Recomendo demais.",
    initials: "CS",
  },
  {
    name: "Juliana F.",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Perfeito para quem não entende de tecnologia. Me guiaram passo a passo sem eu precisar saber nada.",
    initials: "JF",
  },
  {
    name: "Roberto L.",
    location: "Curitiba, PR",
    rating: 5,
    text: "Assisto futebol ao vivo sem travar. O preço cabe no bolso e o atendimento é top. Vale muito a pena.",
    initials: "RL",
  },
  {
    name: "Fernanda C.",
    location: "Fortaleza, CE",
    rating: 5,
    text: "Uso no celular e na TV ao mesmo tempo. Nunca tive problema. Suporte sempre responde rápido.",
    initials: "FC",
  },
  {
    name: "Marcos A.",
    location: "Porto Alegre, RS",
    rating: 5,
    text: "Já testei outros serviços. A Central Play Plus é diferente. Tem suporte de verdade, não é robô.",
    initials: "MA",
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

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof TESTIMONIALS)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col justify-between rounded-3xl border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/[0.07]"
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="mt-4 text-[15px] leading-relaxed text-white/75">&ldquo;{t.text}&rdquo;</p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/15 text-sm font-bold text-primary">
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-white/40">{t.location}</p>
        </div>
        <span className="ml-auto flex size-6 items-center justify-center rounded-full bg-whatsapp/20">
          <Star className="size-3 fill-whatsapp text-whatsapp" />
        </span>
      </div>
    </motion.div>
  )
}

export function SocialProof() {
  return (
    <section id="depoimentos" className="relative py-28 sm:py-36">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/social-proof-bg.png"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.13_0.012_264)] via-transparent to-[oklch(0.13_0.012_264)]" />
      </div>

      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Prova social</Eyebrow>
            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.1rem] lg:leading-[1.06]">
              Quem já usa,{" "}
              <span className="text-muted-foreground">aprova.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/50 sm:text-lg">
              Mais de 4.800 clientes ativos. Atendimento humano, ativação rápida e conteúdo de qualidade.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-3xl border border-white/8 bg-white/[0.05] px-4 py-7 text-center backdrop-blur-sm"
            >
              <span className="text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCount
                  target={stat.value}
                  suffix={stat.suffix}
                  isFloat={stat.isFloat}
                />
              </span>
              <span className="mt-2 text-[13px] text-white/45">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
