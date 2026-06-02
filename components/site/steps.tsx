"use client"

import { motion } from "motion/react"
import { ListChecks, MessagesSquare, Settings2, PlayCircle } from "lucide-react"
import { Reveal, Stagger, staggerItem } from "./reveal"

const STEPS = [
  {
    n: "01",
    icon: ListChecks,
    title: "Escolha seu plano",
    desc: "Mensal, trimestral, semestral ou anual. Você escolhe o que faz sentido para começar.",
  },
  {
    n: "02",
    icon: MessagesSquare,
    title: "Fale com a equipe",
    desc: "Nosso atendimento confirma seu aparelho e tira suas dúvidas direto pelo WhatsApp.",
  },
  {
    n: "03",
    icon: Settings2,
    title: "Configure com suporte",
    desc: "A gente te orienta passo a passo para deixar tudo pronto, sem termos técnicos.",
  },
  {
    n: "04",
    icon: PlayCircle,
    title: "Comece a usar",
    desc: "Depois de configurado, é só aproveitar no seu ritmo — e o suporte segue com você.",
  },
]

export function Steps() {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Como funciona</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Quatro passos.{" "}
            <span className="text-muted-foreground">Zero complicação.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <motion.div
              key={step.n}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-6 transition-colors duration-300 hover:border-primary/40 hover:bg-card"
            >
              <div className="absolute right-5 top-5 size-2 rounded-full bg-primary/50 transition-colors group-hover:bg-primary" />
              <span className="block text-5xl font-semibold tracking-tight text-foreground/10 transition-colors group-hover:text-primary/25">
                {step.n}
              </span>
              <div className="mt-6 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                <step.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
