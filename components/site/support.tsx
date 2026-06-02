"use client"

import { motion } from "motion/react"
import { Check, MessageCircle, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"
import { Container, Eyebrow } from "./section"
import { whatsappLink } from "@/lib/site"

const POINTS = [
  "Pessoas reais respondendo — não chatbot.",
  "Suporte contínuo disponível após a ativação.",
  "Orientação passo a passo, sem termos técnicos.",
]

const CHAT = [
  { from: "you", text: "Oi! Já posso te ajudar com a configuração." },
  { from: "user", text: "Tenho uma Smart TV LG, funciona?" },
  { from: "you", text: "Funciona sim! Te guio em 4 minutos." },
  { from: "user", text: "Perfeito, vamos nessa!" },
]

export function Support() {
  return (
    <section id="suporte" className="relative py-28 sm:py-36">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT — copy */}
          <Reveal>
            <Eyebrow>Suporte humano</Eyebrow>
            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              Aqui você não fica{" "}
              <span className="text-muted-foreground">sozinho depois de pagar.</span>
            </h2>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Do primeiro contato até a configuração final, nosso atendimento acompanha você com
              orientação clara, rápida e humana.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[15px]">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-whatsapp/20 text-whatsapp">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-9 h-13 rounded-full bg-whatsapp px-7 text-base font-semibold text-whatsapp-foreground shadow-[0_18px_44px_-14px] shadow-whatsapp/60 hover:bg-whatsapp/90"
            >
              <a
                href={whatsappLink("Olá! Quero falar com a equipe da Central Play Plus.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                Falar com a equipe
              </a>
            </Button>
          </Reveal>

          {/* RIGHT — chat mockup */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,oklch(0.68_0.16_155/0.22),transparent)] blur-2xl" />
              <div className="ring-gradient overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-soft backdrop-blur-xl">
                {/* header */}
                <div className="flex items-center gap-3 border-b border-border/50 bg-background/40 px-5 py-4">
                  <div className="flex size-11 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground">
                    <MessageCircle className="size-5" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">Central Play Plus</p>
                    <p className="flex items-center gap-1.5 text-xs text-whatsapp">
                      <span className="size-1.5 rounded-full bg-whatsapp" />
                      online agora
                    </p>
                  </div>
                  <span className="ml-auto flex items-center gap-1.5 rounded-full bg-whatsapp/15 px-2.5 py-1 text-[11px] font-medium text-whatsapp">
                    <ShieldCheck className="size-3.5" />
                    Verificado
                  </span>
                </div>

                {/* messages */}
                <div className="flex flex-col gap-3 px-5 py-6">
                  {CHAT.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.25 }}
                      className={
                        msg.from === "user"
                          ? "ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm text-primary-foreground"
                          : "mr-auto max-w-[78%] rounded-2xl rounded-bl-md bg-accent px-4 py-2.5 text-sm"
                      }
                    >
                      {msg.text}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + CHAT.length * 0.25 }}
                    className="mr-auto flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-accent px-4 py-3"
                  >
                    <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.2s]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.1s]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
                  </motion.div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
