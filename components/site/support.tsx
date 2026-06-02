"use client"

import { motion } from "motion/react"
import { Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"
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
]

export function Support() {
  return (
    <section id="suporte" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/50 p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-whatsapp/10 blur-[120px]"
            />
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                  <span className="size-2 rounded-full bg-whatsapp" />
                  Suporte online agora
                </span>
                <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Aqui você não fica{" "}
                  <span className="text-muted-foreground">sozinho depois de pagar.</span>
                </h2>
                <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
                  Do primeiro contato até a configuração final, nosso atendimento acompanha você com
                  orientação clara, rápida e humana.
                </p>

                <ul className="mt-7 flex flex-col gap-3.5">
                  {POINTS.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-whatsapp/20 text-whatsapp">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 h-12 rounded-xl bg-whatsapp px-6 text-base font-semibold text-whatsapp-foreground shadow-[0_16px_40px_-12px] shadow-whatsapp/60 hover:bg-whatsapp/90"
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
              </div>

              {/* chat mockup */}
              <div className="rounded-2xl glass border border-border/70 p-4 shadow-2xl">
                <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-whatsapp/20 text-whatsapp ring-1 ring-whatsapp/40">
                    <MessageCircle className="size-4" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">Central Play Plus</p>
                    <p className="text-xs text-whatsapp">online</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2.5">
                  {CHAT.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.25 }}
                      className={
                        msg.from === "user"
                          ? "ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-primary/20 px-3.5 py-2.5 text-sm"
                          : "mr-auto max-w-[80%] rounded-2xl rounded-bl-sm bg-accent px-3.5 py-2.5 text-sm"
                      }
                    >
                      {msg.text}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
