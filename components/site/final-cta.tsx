"use client"

import { ArrowRight, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"
import { WHATSAPP_DEFAULT } from "@/lib/site"

export function FinalCta() {
  return (
    <section className="relative py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-card p-10 text-center sm:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                <Sparkles className="size-3.5 text-primary" />
                Último passo
              </span>
              <h2 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Quer deixar tudo pronto ainda hoje?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Chame nossa equipe, confirme seu aparelho e escolha o melhor plano para começar sem
                dor de cabeça.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-9 h-13 rounded-xl bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-12px] shadow-primary/60 transition-transform hover:scale-[1.02] hover:bg-primary/90"
              >
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  Quero começar agora
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>Resposta rápida</span>
                <span className="hidden size-1 rounded-full bg-border sm:block" />
                <span>Sem compromisso</span>
                <span className="hidden size-1 rounded-full bg-border sm:block" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
