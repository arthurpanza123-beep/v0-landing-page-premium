"use client"

import { motion } from "motion/react"
import { Check, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal, Stagger, staggerItem } from "./reveal"
import { Container, SectionHeading } from "./section"
import { PLANS, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Plans() {
  return (
    <section id="planos" className="relative py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]"
      />
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Planos"
            title={
              <>
                Planos simples,{" "}
                <span className="text-muted-foreground">sem enrolação.</span>
              </>
            }
            description="Preço fixo, sem taxas escondidas. Cancele quando quiser."
          />
        </Reveal>

        <Stagger className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              className={cn(
                "group relative flex flex-col rounded-3xl border p-7 transition-all duration-300",
                plan.highlight
                  ? "ring-gradient z-10 border-primary/50 bg-gradient-to-b from-primary/15 via-card to-card shadow-glow lg:scale-[1.06]"
                  : "border-border/70 bg-card/50 hover:-translate-y-1 hover:border-primary/30 hover:bg-card",
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow">
                  <Sparkles className="size-3.5" />
                  {plan.badge}
                </span>
              )}

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {plan.name}
              </p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-base font-medium text-muted-foreground">R$</span>
                <span
                  className={cn(
                    "text-6xl font-bold tracking-tight",
                    plan.highlight && "text-gradient-blue",
                  )}
                >
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <p className="mt-1.5 h-4 text-xs font-medium text-primary/90">
                {plan.equivalent ?? "pago de uma vez"}
              </p>

              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-7 flex flex-col gap-3.5 border-t border-border/60 pt-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[15px]">
                    <span
                      className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded-full",
                        plan.highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/15 text-primary",
                      )}
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={cn(
                  "mt-8 h-12 w-full rounded-xl text-sm font-semibold",
                  plan.highlight
                    ? "bg-primary text-primary-foreground shadow-glow hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-accent",
                )}
              >
                <a
                  href={whatsappLink(
                    `Olá! Quero contratar o plano ${plan.name} (R$ ${plan.price}) da Central Play Plus.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escolher {plan.name.toLowerCase()}
                  {plan.highlight && <ArrowRight className="size-4" />}
                </a>
              </Button>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12 text-center text-sm text-muted-foreground">
          Pagamento à vista no Pix • Sem renovação automática • Cancele quando quiser
        </Reveal>
      </Container>
    </section>
  )
}
