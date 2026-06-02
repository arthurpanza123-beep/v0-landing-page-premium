"use client"

import { ArrowRight, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"
import { Container } from "./section"
import { WHATSAPP_DEFAULT } from "@/lib/site"

export function FinalCta() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="ring-gradient relative overflow-hidden rounded-[2rem] border border-primary/40 bg-gradient-to-br from-primary/25 via-card to-card px-6 py-16 text-center shadow-soft sm:px-12 sm:py-24">
            {/* layered glows */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]"
            />
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(70%_70%_at_50%_50%,#000,transparent)]" />

            <div className="relative mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur">
                <Sparkles className="size-4 text-primary" />
                Último passo
              </span>
              <h2 className="mt-7 text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-[4rem] lg:leading-[1.02]">
                Quer deixar tudo{" "}
                <span className="text-gradient-blue">pronto ainda hoje?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Chame nossa equipe, confirme seu aparelho e escolha o melhor plano para começar sem
                dor de cabeça.
              </p>
              <Button
                asChild
                size="lg"
                className="group mt-10 h-15 rounded-full px-8 text-base shadow-glow"
              >
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  Quero começar agora
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-muted-foreground">
                <span>Resposta rápida</span>
                <span className="hidden size-1 rounded-full bg-border sm:block" />
                <span>Sem compromisso</span>
                <span className="hidden size-1 rounded-full bg-border sm:block" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
