"use client"

import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Container, Eyebrow } from "./section"
import { WHATSAPP_DEFAULT } from "@/lib/site"

const STEPS = [
  {
    n: "01",
    title: "Escolha seu plano",
    desc: "Mensal, trimestral, semestral ou anual. Você escolhe o que faz sentido para começar.",
    image: "/images/step-01-plans.png",
    accent: "from-blue-500/20 to-transparent",
    tag: "1 minuto",
  },
  {
    n: "02",
    title: "Fale com a equipe",
    desc: "Nosso atendimento confirma seu aparelho e tira suas dúvidas direto pelo WhatsApp.",
    image: "/images/step-02-chat.png",
    accent: "from-sky-400/20 to-transparent",
    tag: "Resposta rápida",
  },
  {
    n: "03",
    title: "Configure com suporte",
    desc: "A gente te orienta passo a passo para deixar tudo pronto, sem termos técnicos.",
    image: "/images/step-03-setup.png",
    accent: "from-indigo-500/20 to-transparent",
    tag: "Sem complicação",
  },
  {
    n: "04",
    title: "Comece a assistir",
    desc: "Depois de configurado, é só aproveitar no seu ritmo — e o suporte segue com você.",
    image: "/images/step-04-watch.png",
    accent: "from-blue-400/20 to-transparent",
    tag: "Na hora",
  },
]

function StepCard({
  step,
  index,
}: {
  step: (typeof STEPS)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:bg-white/[0.07]"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden sm:h-56">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${step.accent} via-transparent`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.012_264)] via-transparent to-transparent" />

        {/* Step number */}
        <div className="absolute left-5 top-5 flex size-11 items-center justify-center rounded-2xl border border-primary/40 bg-black/50 backdrop-blur-md">
          <span className="text-sm font-bold text-primary">{step.n}</span>
        </div>

        {/* Tag */}
        <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur-md">
          {step.tag}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col p-7">
        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-white/55">{step.desc}</p>

        {/* Connector dot */}
        {index < STEPS.length - 1 && (
          <div className="absolute -right-3.5 top-[6.5rem] z-10 hidden size-7 items-center justify-center rounded-full border border-primary/30 bg-[oklch(0.13_0.012_264)] lg:flex">
            <ArrowRight className="size-3.5 text-primary/60" />
          </div>
        )}
      </div>

      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 60px 0 oklch(0.62 0.18 255 / 0.06)" }}
      />
    </motion.div>
  )
}

export function Steps() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section id="como-funciona" ref={sectionRef} className="relative overflow-hidden py-28 sm:py-36">
      {/* Ambient background glow */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute left-1/4 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-30"
          style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.18) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
      </motion.div>

      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.1rem] lg:leading-[1.06]">
              Do plano à tela,{" "}
              <span className="text-muted-foreground">em minutos.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/50 sm:text-lg">
              Quatro passos simples. Suporte humano do início ao fim. Sem tecnicidade, sem enrolação.
            </p>
          </motion.div>
        </div>

        {/* Steps grid */}
        <div className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <StepCard key={step.n} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-7 py-3.5 text-[0.9rem] font-semibold text-primary backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:bg-primary/20"
          >
            Começar agora
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
