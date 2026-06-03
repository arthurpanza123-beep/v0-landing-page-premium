"use client"

import { motion } from "motion/react"
import { Clock, Headphones, ShieldOff, MessageCircle, ArrowRight, Check, Zap, CreditCard, Ban } from "lucide-react"
import { Container, Eyebrow } from "./section"
import { whatsappLink } from "@/lib/site"

const CHAT_MSGS = [
  { from: "team", text: "Olá! Posso te ajudar com a configuração agora." },
  { from: "user", text: "Tenho uma Smart TV LG, funciona?" },
  { from: "team", text: "Funciona sim! Te guio em menos de 5 minutos." },
  { from: "user", text: "Perfeito, pode começar!" },
]

const FREEDOM_FEATURES = [
  { icon: CreditCard, label: "Pix na hora", desc: "Pagamento único, sem surpresa" },
  { icon: Ban, label: "Zero multa", desc: "Cancele sem pagar nada" },
  { icon: Zap, label: "Ativa hoje", desc: "Começa a assistir agora" },
  { icon: ShieldOff, label: "Sem contrato", desc: "Você decide o período" },
]

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-16 sm:py-20 lg:py-24">
      {/* Ambient — blue center, warm bottom corners */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.5) 0%, transparent 65%)", filter: "blur(100px)" }}
      />

      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Por que a Central Play Plus</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Entretenimento feito{" "}
              <span className="text-muted-foreground">para você.</span>
            </h2>
          </motion.div>
        </div>

        {/* Benefit rows */}
        <div className="mt-10 flex flex-col gap-4 lg:mt-12">

          {/* Row 1: Setup rápido + Suporte humano */}
          <div className="grid gap-4 lg:grid-cols-2">

            {/* Setup em minutos */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 transition-all duration-500 hover:border-primary/25 lg:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                  <Clock className="size-5 text-primary" />
                </div>
                <Eyebrow>Configuração em minutos</Eyebrow>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                Pronto para assistir antes de acabar o café.
              </h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-white/50">
                Nossa equipe te orienta passo a passo. Sem precisar entender de tecnologia.
              </p>

              {/* Progress steps visual */}
              <div className="mt-6 flex flex-col gap-2.5">
                {["Escolha seu plano", "Fale com a equipe", "Configure com suporte", "Comece a assistir"].map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <motion.span 
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Check className="size-3.5" strokeWidth={3} />
                    </motion.span>
                    <span className="text-sm text-white/70">{step}</span>
                    <span className="ml-auto rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary/70">
                      {["1 min", "Rápido", "5 min", "Pronto"][i]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Suporte humano */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 transition-all duration-500 hover:border-whatsapp/25 lg:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl border border-whatsapp/30 bg-whatsapp/10">
                  <Headphones className="size-5 text-whatsapp" />
                </div>
                <Eyebrow>Suporte humano</Eyebrow>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                Você fala com pessoas reais, não com robôs.
              </h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-white/50">
                Atendimento pelo WhatsApp, com resposta rápida e linguagem simples.
              </p>

              {/* Chat mockup */}
              <div className="mt-6 overflow-hidden rounded-xl border border-white/8 bg-black/30 backdrop-blur-sm">
                <div className="flex items-center gap-2.5 border-b border-white/8 px-4 py-2.5">
                  <div className="flex size-7 items-center justify-center rounded-full bg-whatsapp">
                    <MessageCircle className="size-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-white">Central Play Plus</p>
                    <p className="flex items-center gap-1 text-[10px] text-whatsapp">
                      <motion.span 
                        className="size-1.5 rounded-full bg-whatsapp" 
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      /> 
                      online agora
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-3">
                  {CHAT_MSGS.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.15 + i * 0.2 }}
                      className={`max-w-[82%] rounded-xl px-3 py-1.5 text-[12px] ${
                        msg.from === "user"
                          ? "ml-auto rounded-br-sm bg-primary text-white"
                          : "rounded-bl-sm bg-white/10 text-white/80"
                      }`}
                    >
                      {msg.text}
                    </motion.div>
                  ))}
                </div>
              </div>

              <a
                href={whatsappLink("Olá! Quero falar com a equipe da Central Play Plus.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn mt-5 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-whatsapp/90 hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4" />
                Falar com a equipe
                <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Row 2: Sem fidelidade — clean design without image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-amber-500/15 bg-gradient-to-br from-amber-500/[0.08] via-white/[0.03] to-transparent p-6 transition-all duration-500 hover:border-amber-400/25 lg:p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
              {/* Copy */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10">
                    <ShieldOff className="size-5 text-amber-400" />
                  </div>
                  <Eyebrow>Sem fidelidade</Eyebrow>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                  Pague só enquanto quiser.
                </h3>
                <p className="mt-3 max-w-sm text-[0.9rem] leading-relaxed text-white/50">
                  Sem contratos, sem renovação automática. Você escolhe o período, paga via Pix e cancela quando precisar.
                </p>
              </div>
              
              {/* Feature cards grid */}
              <div className="grid grid-cols-2 gap-3">
                {FREEDOM_FEATURES.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div 
                      key={item.label} 
                      className="group/card rounded-xl border border-white/8 bg-white/[0.04] p-4 transition-all duration-300 hover:border-amber-400/20 hover:bg-white/[0.06]"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <Icon className="size-5 text-amber-400/80" />
                      <p className="mt-2 text-sm font-semibold text-white">{item.label}</p>
                      <p className="mt-0.5 text-xs text-white/40">{item.desc}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
