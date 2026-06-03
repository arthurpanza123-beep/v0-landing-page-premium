"use client"

import { ArrowRight, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"
import { Container } from "./section"
import { WHATSAPP_DEFAULT } from "@/lib/site"

export function FinalCta() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="ring-gradient relative overflow-hidden rounded-[2.5rem] border border-primary/30 bg-gradient-to-br from-primary/18 via-card/90 to-card px-6 py-20 text-center shadow-[0_32px_100px_-24px_oklch(0.62_0.18_255/0.25)] sm:px-12 sm:py-28">
            {/* Layered ambient glows — blue top, warm bottom */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-96 w-[800px] -translate-x-1/2 rounded-full opacity-70"
              style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.18) 0%, transparent 70%)", filter: "blur(100px)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full opacity-50"
              style={{ background: "radial-gradient(ellipse, oklch(0.72 0.14 65 / 0.12) 0%, transparent 70%)", filter: "blur(80px)" }}
            />
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(70%_70%_at_50%_50%,#000,transparent)]" />

            <div className="relative mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 py-2 text-sm font-medium text-primary backdrop-blur-sm">
                <Sparkles className="size-4" />
                Seu entretenimento começa aqui
              </span>
              <h2 className="mt-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
                Pronto para transformar{" "}
                <span className="text-gradient-blue">suas noites?</span>
              </h2>
              <p className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground/80">
                Nossa equipe está online agora. Chame no WhatsApp, tire suas dúvidas e comece a assistir ainda hoje.
              </p>
              <Button
                asChild
                size="lg"
                className="group mt-12 h-16 rounded-2xl px-10 text-[1rem] font-semibold shadow-[0_12px_40px_-8px_oklch(0.62_0.18_255/0.5)] transition-all duration-300 hover:shadow-[0_16px_50px_-8px_oklch(0.62_0.18_255/0.6)]"
              >
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  Falar com a equipe
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.9rem] text-muted-foreground/60">
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-whatsapp/60" />
                  Resposta em minutos
                </span>
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary/60" />
                  Sem compromisso
                </span>
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-warm/60" />
                  Cancele quando quiser
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
