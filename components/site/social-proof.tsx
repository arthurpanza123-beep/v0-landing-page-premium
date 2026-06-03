"use client"

import { motion } from "motion/react"
import { Clock, HeartHandshake, Tv2, Ban, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react"
import { Container, Eyebrow } from "./section"
import { whatsappLink } from "@/lib/site"

const BENEFITS = [
  {
    icon: Clock,
    title: "Ativação no mesmo dia",
    description: "Fechou o plano? Começamos a configurar na hora. Você assiste hoje mesmo.",
    highlight: "5 min",
    highlightLabel: "para ativar",
  },
  {
    icon: HeartHandshake,
    title: "Suporte que responde de verdade",
    description: "Atendimento humano pelo WhatsApp. Sem robô, sem espera, sem enrolação.",
    highlight: "Real",
    highlightLabel: "pessoa de verdade",
  },
  {
    icon: Tv2,
    title: "Conteúdo completo",
    description: "Filmes, séries, canais ao vivo, futebol e infantil. Tudo num só lugar.",
    highlight: "+5.000",
    highlightLabel: "conteúdos",
  },
  {
    icon: Ban,
    title: "Sem surpresas no final",
    description: "Preço fechado, sem taxa extra e sem multa se quiser cancelar.",
    highlight: "Zero",
    highlightLabel: "taxas ocultas",
  },
]

const SIMPLE_STEPS = [
  "Escolhe o plano",
  "Chama no WhatsApp",
  "Configura com ajuda",
  "Começa a assistir",
]

export function SocialProof() {
  return (
    <section id="diferenciais" className="relative py-20 sm:py-28 lg:py-36">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Por que a Central Play Plus?</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              O que nos diferencia
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-white/55">
              Não somos só mais um serviço. Somos uma equipe que cuida de você do começo ao fim.
            </p>
          </motion.div>
        </div>

        {/* Benefits grid - 2x2 on desktop */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-5">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.06] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 sm:size-12">
                  <benefit.icon className="size-5 text-primary sm:size-6" />
                </div>
                
                <div className="text-right">
                  <span className="text-2xl font-bold text-white sm:text-3xl">{benefit.highlight}</span>
                  <p className="text-[0.7rem] text-white/40 sm:text-xs">{benefit.highlightLabel}</p>
                </div>
              </div>
              
              <h3 className="mt-5 text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-white/55">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How it works - simple horizontal steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-center text-sm font-medium text-white/70 sm:text-base">Como funciona:</p>
            
            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-2">
              {SIMPLE_STEPS.map((step, i) => (
                <div key={step} className="flex items-center gap-2 sm:gap-2">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary/20 text-[0.65rem] font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-[0.8rem] text-white/80 sm:text-[0.85rem]">{step}</span>
                  </div>
                  {i < SIMPLE_STEPS.length - 1 && (
                    <ArrowRight className="hidden size-4 text-white/25 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-6 sm:text-left"
        >
          <p className="text-[0.9rem] text-white/60">
            Ficou com dúvida? Fale com a gente agora.
          </p>
          <a
            href={whatsappLink("Olá! Gostaria de saber mais sobre a Central Play Plus.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-[0.9rem] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)]"
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
