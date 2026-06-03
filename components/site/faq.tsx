"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, MessageCircle } from "lucide-react"
import { Container, Eyebrow } from "./section"
import { WHATSAPP_DEFAULT } from "@/lib/site"

const FAQS = [
  {
    q: "Quanto tempo leva para ativar?",
    a: "Em poucos minutos após o contato pelo WhatsApp. Nossa equipe inicia a configuração assim que confirmamos o plano e o aparelho.",
  },
  {
    q: "Preciso entender de tecnologia?",
    a: "Não. A gente conduz tudo passo a passo, com linguagem simples e sem termos técnicos. É só seguir as orientações da nossa equipe.",
  },
  {
    q: "Funciona na minha TV?",
    a: "Funciona em Smart TVs com internet, celulares Android e iOS, TV Box com Android, tablets e computadores. Antes de começar, confirmamos a compatibilidade do seu aparelho.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Você fala com pessoas reais pelo WhatsApp, do primeiro contato até depois da ativação. O suporte continua disponível enquanto você usar o serviço.",
  },
  {
    q: "Tenho que assinar por muito tempo?",
    a: "Não. Não há fidelidade nem renovação automática. Você escolhe o período que preferir — mensal, trimestral, semestral ou anual — e cancela quando quiser.",
  },
  {
    q: "Quantas telas posso usar ao mesmo tempo?",
    a: "Depende do plano escolhido. Todos os planos incluem acesso multi-dispositivo. Nossa equipe esclarece os detalhes no atendimento antes de você contratar.",
  },
  {
    q: "Como faço o pagamento?",
    a: "O pagamento é feito via Pix, de forma simples e instantânea. Não há cobrança recorrente automática — você paga somente quando quiser renovar.",
  },
]

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <button
        onClick={onToggle}
        className={`group w-full overflow-hidden rounded-2xl border text-left transition-all duration-300 ${
          isOpen
            ? "border-primary/40 bg-primary/8 shadow-[0_0_0_1px_oklch(0.62_0.18_255/0.15),0_8px_32px_-8px_oklch(0.62_0.18_255/0.2)]"
            : "border-white/8 bg-white/[0.04] hover:border-primary/20 hover:bg-white/[0.07]"
        }`}
        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-5">
          <span className={`text-[15px] font-medium transition-colors duration-300 sm:text-base ${isOpen ? "text-white" : "text-white/80"}`}>
            {faq.q}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen ? "border-primary/50 bg-primary/15 text-primary" : "border-white/15 text-white/40 group-hover:border-primary/25 group-hover:text-primary/60"
            }`}
          >
            <Plus className="size-3.5" strokeWidth={2.5} />
          </motion.span>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-white/55">{faq.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-20 sm:py-32">
      {/* Ambient — blue top, warm bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full opacity-18"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.35) 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-[10%] -z-10 h-[350px] w-[400px] translate-x-1/3 rounded-full opacity-12"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.14 65 / 0.35) 0%, transparent 70%)", filter: "blur(70px)" }}
      />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-28"
          >
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.06]">
              Dúvidas? A gente responde.
            </h2>
            <p className="mt-5 max-w-sm text-pretty text-[15px] leading-relaxed text-white/55">
              Não achou o que procurava? Nossa equipe responde rápido pelo WhatsApp.
            </p>

            {/* Glass CTA card */}
            <div
              className="mt-8 rounded-3xl border border-white/8 p-6"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
            >
              <div className="flex size-11 items-center justify-center rounded-2xl border border-whatsapp/30 bg-whatsapp/10">
                <MessageCircle className="size-5 text-whatsapp" />
              </div>
              <p className="mt-4 text-sm font-semibold text-white">Ainda tem dúvida?</p>
              <p className="mt-1 text-[13px] text-white/45">Fale com a gente agora mesmo.</p>
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-whatsapp/90"
              >
                <MessageCircle className="size-4" />
                Tirar uma dúvida
              </a>
            </div>
          </motion.div>

          {/* RIGHT — accordion */}
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
