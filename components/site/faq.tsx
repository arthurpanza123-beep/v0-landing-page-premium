"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "./reveal"

const FAQS = [
  {
    q: "Quanto tempo leva para ativar?",
    a: "Em poucos minutos após o contato pelo WhatsApp. Nossa equipe inicia a configuração assim que confirmamos o plano.",
  },
  {
    q: "Preciso entender de tecnologia?",
    a: "Não. A gente conduz tudo passo a passo, com linguagem simples e sem termos técnicos. É só seguir as orientações.",
  },
  {
    q: "Funciona na minha TV?",
    a: "Funciona em Smart TVs com internet, celulares Android e iOS, e TV Box com Android. Antes de começar, confirmamos a compatibilidade do seu aparelho.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Você fala com pessoas reais pelo WhatsApp, do primeiro contato até depois da ativação. O suporte continua disponível enquanto você usar.",
  },
  {
    q: "Tenho que assinar por muito tempo?",
    a: "Não. Não há fidelidade nem renovação automática. Você escolhe o período que preferir e cancela quando quiser.",
  },
]

export function Faq() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Perguntas</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Dúvidas frequentes
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border/70 bg-card/50 px-5 transition-colors data-[state=open]:border-primary/40 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
