"use client"

import { motion } from "motion/react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal, Stagger, staggerItem } from "./reveal"
import { PLANS, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Plans() {
  return (
    <section id="planos" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Planos</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Planos simples,{" "}
            <span className="text-muted-foreground">sem enrolação.</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Preço fixo, sem taxas escondidas. Cancele quando quiser.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 transition-all duration-300",
                plan.highlight
                  ? "border-primary/60 bg-gradient-to-b from-primary/10 to-card shadow-[0_24px_70px_-30px] shadow-primary/50 lg:-translate-y-3"
                  : "border-border/70 bg-card/50 hover:border-primary/30 hover:bg-card",
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3.5 py-1 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/40">
                  {plan.badge}
                </span>
              )}

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {plan.name}
              </p>

              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-sm font-medium text-muted-foreground">R$</span>
                <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <p className="mt-1 h-4 text-xs text-primary/90">{plan.equivalent ?? "pago de uma vez"}</p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

              <ul className="mt-6 flex flex-col gap-3 border-t border-border/60 pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  "mt-7 h-11 w-full rounded-xl text-sm font-semibold",
                  plan.highlight
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:bg-primary/90"
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
                </a>
              </Button>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10 text-center text-sm text-muted-foreground">
          Pagamento à vista no Pix • Sem renovação automática • Cancele quando quiser
        </Reveal>
      </div>
    </section>
  )
}
