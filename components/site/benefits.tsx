"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Clock, Headphones, ShieldOff, MessageCircle, ArrowRight, Check } from "lucide-react"
import { Container, Eyebrow } from "./section"
import { whatsappLink } from "@/lib/site"

const CHAT_MSGS = [
  { from: "team", text: "Olá! Posso te ajudar com a configuração agora." },
  { from: "user", text: "Tenho uma Smart TV LG, funciona?" },
  { from: "team", text: "Funciona sim! Te guio em menos de 5 minutos." },
  { from: "user", text: "Perfeito, pode começar!" },
]

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-32 sm:py-44">
      {/* Ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.5) 0%, transparent 65%)", filter: "blur(120px)" }}
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
            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.1rem] lg:leading-[1.06]">
              Entretenimento feito{" "}
              <span className="text-muted-foreground">para você.</span>
            </h2>
          </motion.div>
        </div>

        {/* Benefit rows */}
        <div className="mt-16 flex flex-col gap-5">

          {/* Row 1: Setup rápido + Suporte humano */}
          <div className="grid gap-5 lg:grid-cols-2">

            {/* Setup em minutos */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 lg:p-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                  <Clock className="size-5 text-primary" />
                </div>
                <Eyebrow>Configuração em minutos</Eyebrow>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Pronto para assistir antes de acabar o café.
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/50">
                Nossa equipe te orienta passo a passo. Sem precisar entender de tecnologia. Sem baixar nada complicado.
              </p>

              {/* Progress steps visual */}
              <div className="mt-8 flex flex-col gap-3">
                {["Escolha seu plano", "Fale com a equipe", "Configure com suporte", "Comece a assistir"].map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-white/70">{step}</span>
                    <span className="ml-auto rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary/70">
                      {["1 min", "Rápido", "5 min", "Pronto"][i]}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="relative mt-8 overflow-hidden rounded-2xl">
                <Image
                  src="/images/benefit-setup.png"
                  alt="Configuração em minutos"
                  width={600}
                  height={280}
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.012_264/0.8)] to-transparent" />
              </div>
            </motion.div>

            {/* Suporte humano */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 lg:p-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-whatsapp/30 bg-whatsapp/10">
                  <Headphones className="size-5 text-whatsapp" />
                </div>
                <Eyebrow>Suporte humano</Eyebrow>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Você fala com pessoas reais, não com robôs.
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/50">
                Do primeiro contato até depois da ativação. Atendimento pelo WhatsApp, com resposta rápida e linguagem simples.
              </p>

              {/* Chat mockup */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/8 bg-black/30 backdrop-blur-sm">
                <div className="flex items-center gap-2.5 border-b border-white/8 px-4 py-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-whatsapp">
                    <MessageCircle className="size-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white">Central Play Plus</p>
                    <p className="flex items-center gap-1 text-[11px] text-whatsapp">
                      <span className="size-1.5 rounded-full bg-whatsapp" /> online agora
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 p-4">
                  {CHAT_MSGS.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.15 + i * 0.2 }}
                      className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-[13px] ${
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
                className="group/btn mt-6 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-whatsapp/90"
              >
                <MessageCircle className="size-4" />
                Falar com a equipe
                <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Row 2: Sem fidelidade — full width */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:border-primary/20"
          >
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              {/* Copy */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10">
                    <ShieldOff className="size-5 text-amber-400" />
                  </div>
                  <Eyebrow>Sem fidelidade</Eyebrow>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                  Pague só enquanto quiser. Cancele quando quiser.
                </h3>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/50">
                  Sem contratos, sem renovação automática. Você escolhe o período, paga via Pix e cancela quando precisar — sem burocracia.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    { label: "Sem contrato", sub: "Pague e pronto" },
                    { label: "Sem renovação", sub: "Você decide quando" },
                    { label: "Pagamento Pix", sub: "Simples e rápido" },
                    { label: "Cancele livre", sub: "Sem burocracia" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3">
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="mt-0.5 text-xs text-white/40">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Image */}
              <div className="relative min-h-[240px] overflow-hidden lg:min-h-0">
                <Image
                  src="/images/benefit-freedom.png"
                  alt="Liberdade total, sem fidelidade"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.13_0.012_264)] via-[oklch(0.13_0.012_264/0.3)] to-transparent lg:bg-gradient-to-r" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
