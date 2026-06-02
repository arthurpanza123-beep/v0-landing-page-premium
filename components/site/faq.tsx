"use client"

import { MessageCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"
import { Container, Eyebrow } from "./section"
import { WHATSAPP_DEFAULT } from "@/lib/site"

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
    <section className="relative py-28 sm:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* LEFT — heading + CTA */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Perguntas</Eyebrow>
              <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:leading-[1.05]">
                Dúvidas frequentes
              </h2>
              <p className="mt-6 max-w-sm text-pretty text-lg leading-relaxed text-muted-foreground">
                Não achou o que procurava? Fale com a gente — respondemos rápido pelo WhatsApp.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="mt-7 h-12 rounded-full border-border/70 bg-card/40 px-6 backdrop-blur hover:bg-card/70"
              >
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  Tirar uma dúvida
                </a>
              </Button>
            </div>
          </Reveal>

          {/* RIGHT — accordion */}
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="flex flex-col gap-3.5">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border/70 bg-card/50 px-6 transition-colors data-[state=open]:border-primary/40 data-[state=open]:bg-card"
                >
                  <AccordionTrigger className="py-5 text-left text-lg font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
