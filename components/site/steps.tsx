"use client"

import { motion } from "motion/react"
import { ListChecks, MessagesSquare, Settings2, PlayCircle } from "lucide-react"
import { Reveal, Stagger, staggerItem } from "./reveal"
import { Container, SectionHeading } from "./section"

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
    <section id="como-funciona" className="relative py-28 sm:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Como funciona"
            title={
              <>
                Quatro passos.{" "}
                <span className="text-muted-foreground">Zero complicação.</span>
              </>
            }
            description="Do primeiro contato até você assistindo, a gente cuida de cada etapa com você."
          />
        </Reveal>

        <div className="relative mt-20">
          {/* connecting line on large screens */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {STEPS.map((step) => (
              <motion.div key={step.n} variants={staggerItem} className="relative">
                {/* numbered node */}
                <div className="relative z-10 mb-7 flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="flex size-[4.5rem] items-center justify-center rounded-2xl border border-primary/30 bg-card text-2xl font-bold text-primary shadow-glow">
                    {step.n}
                  </span>
                </div>

                <div className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                    <step.icon className="size-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                  <div className="pointer-events-none absolute -bottom-16 -right-16 size-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  )
}
