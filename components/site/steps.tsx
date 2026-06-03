"use client"

import { motion } from "motion/react"
import { ArrowRight, MessageCircle, Zap, Headphones, PlayCircle } from "lucide-react"
import { Container, Eyebrow } from "./section"
import { WHATSAPP_DEFAULT } from "@/lib/site"

const STEPS = [
  {
    n: "01",
    title: "Escolha seu plano",
    desc: "Mensal, trimestral, semestral ou anual. Todos com suporte humano e ativação no mesmo dia.",
    icon: PlayCircle,
    accentColor: "text-blue-400",
    accentBg: "bg-blue-500/15",
    accentBorder: "border-blue-500/25",
    tag: "1 minuto",
    tagColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    items: ["Sem burocracia", "Preço fixo no Pix", "Sem renovação automática"],
  },
  {
    n: "02",
    title: "Fale com a equipe",
    desc: "Nossa equipe confirma seu aparelho, tira suas dúvidas e já te guia pelos próximos passos.",
    icon: MessageCircle,
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-500/15",
    accentBorder: "border-emerald-500/25",
    tag: "Resposta rápida",
    tagColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    items: ["Atendimento humano real", "Pelo WhatsApp", "Sem robôs"],
  },
  {
    n: "03",
    title: "Configure com suporte",
    desc: "A gente te orienta passo a passo. Você não precisa entender de tecnologia — nós cuidamos disso.",
    icon: Zap,
    accentColor: "text-amber-400",
    accentBg: "bg-amber-500/15",
    accentBorder: "border-amber-500/25",
    tag: "Sem complicação",
    tagColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    items: ["Smart TV, celular ou TV Box", "Guia passo a passo", "Menos de 5 minutos"],
  },
  {
    n: "04",
    title: "Comece a assistir",
    desc: "Depois de configurado, é só aproveitar. E se precisar de ajuda depois, o suporte segue com você.",
    icon: Headphones,
    accentColor: "text-violet-400",
    accentBg: "bg-violet-500/15",
    accentBorder: "border-violet-500/25",
    tag: "Na hora",
    tagColor: "text-violet-400 border-violet-500/30 bg-violet-500/10",
    items: ["+30.000 conteúdos", "+1.500 canais ao vivo", "Qualidade até 4K"],
  },
]

export function Steps() {
  return (
    <section id="como-funciona" className="relative overflow-hidden py-20 sm:py-32">
      {/* Ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.2) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.1rem] lg:leading-[1.06]">
            Do plano à tela,{" "}
            <span className="text-muted-foreground">em minutos.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
            Quatro passos simples. Suporte humano do início ao fim.
          </p>
        </motion.div>

        {/* Steps — alternating layout on desktop */}
        <div className="mt-16 flex flex-col gap-6 lg:gap-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            const isEven = i % 2 === 0
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 transition-all duration-500 hover:border-white/15 sm:p-8 lg:flex-row lg:items-center lg:gap-10 ${isEven ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Step number + icon block */}
                <div className="flex shrink-0 items-center gap-4 lg:w-56 lg:flex-col lg:items-center lg:gap-3 lg:text-center">
                  <div className={`flex size-16 shrink-0 items-center justify-center rounded-2xl border ${step.accentBorder} ${step.accentBg}`}>
                    <Icon className={`size-7 ${step.accentColor}`} />
                  </div>
                  <div>
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.72rem] font-semibold ${step.tagColor}`}>
                      {step.tag}
                    </span>
                    <p className={`mt-2 text-5xl font-black tracking-tight lg:text-6xl ${step.accentColor} opacity-20`}>
                      {step.n}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className={`hidden w-px shrink-0 self-stretch bg-white/8 lg:block`} />

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{step.title}</h3>
                  <p className="mt-2.5 max-w-lg text-[0.95rem] leading-[1.7] text-white/60">{step.desc}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-[0.78rem] text-white/70"
                      >
                        <span className={`size-1.5 rounded-full ${step.accentBg} ring-1 ${step.accentBorder}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector arrow between steps */}
                {i < STEPS.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 z-10 hidden -translate-x-1/2 size-6 items-center justify-center rounded-full border border-white/10 bg-background lg:flex">
                    <ArrowRight className="size-3 rotate-90 text-white/30" />
                  </div>
                )}
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
