"use client"

import { motion } from "motion/react"
import { Check, Sparkles, ArrowRight, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal, Stagger, staggerItem } from "./reveal"
import { Container, SectionHeading } from "./section"
import { PLANS, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Plans() {
  return (
    <section id="planos" className="relative py-24 sm:py-28 lg:py-36">
      {/* Ambient glows — premium depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/4 opacity-50"
        style={{ background: "radial-gradient(ellipse, oklch(0.65 0.20 255 / 0.12) 0%, transparent 60%)", filter: "blur(100px)" }}
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

        <Stagger className="mt-14 grid gap-5 sm:mt-18 sm:grid-cols-2 sm:gap-6 lg:mt-24 lg:grid-cols-4 lg:items-stretch lg:gap-6">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-500 sm:p-7 lg:p-8",
                plan.highlight
                  ? "z-10 border-primary/40 bg-gradient-to-b from-primary/12 via-primary/5 to-card/80 shadow-[0_0_80px_-20px_oklch(0.65_0.20_255/0.35),inset_0_1px_0_0_rgba(255,255,255,0.05)] lg:scale-[1.03]"
                  : "border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-card/50 hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_24px_60px_-20px_oklch(0_0_0/0.6)]",
              )}
            >
              {/* Premium glow line at top for highlighted card */}
              {plan.highlight && (
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
              )}
              
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-primary to-primary/90 px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-[0_8px_24px_-6px_oklch(0.65_0.20_255/0.6)]">
                  <Sparkles className="size-3.5" />
                  {plan.badge}
                </span>
              )}

              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {plan.name}
              </p>

              <div className="mt-7 flex items-baseline gap-1">
                <span className="text-sm font-medium text-muted-foreground/60">R$</span>
                <span
                  className={cn(
                    "text-[3.75rem] font-bold tracking-[-0.04em] leading-none",
                    plan.highlight && "text-gradient-blue",
                  )}
                >
                  {plan.price}
                </span>
                <span className="ml-1.5 text-sm text-muted-foreground/50">{plan.period}</span>
              </div>

              <div className="mt-3 flex flex-col gap-1.5">
                <p className="h-4 text-xs font-medium text-primary/80">
                  {plan.equivalent ?? "pago de uma vez"}
                </p>
                {plan.savings && (
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/12 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                    <TrendingDown className="size-3" />
                    {plan.savings}
                  </span>
                )}
              </div>

              <p className="mt-6 text-[0.9rem] leading-[1.7] text-muted-foreground/80">
                {plan.description}
              </p>

              <ul className="mt-8 flex flex-col gap-4 border-t border-white/[0.06] pt-8">
                {plan.features.map((feature) => (
                  <li 
                    key={feature} 
                    className="flex items-center gap-3 text-[0.875rem] text-foreground/80"
                  >
                    <span
                      className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded-full",
                        plan.highlight
                          ? "bg-primary text-primary-foreground shadow-[0_0_12px_-2px_oklch(0.65_0.20_255/0.5)]"
                          : "bg-primary/10 text-primary",
                      )}
                    >
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "h-14 w-full rounded-2xl text-[0.9rem] font-semibold transition-all duration-500",
                    plan.highlight
                      ? "bg-gradient-to-b from-primary to-primary/90 text-primary-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_12px_32px_-8px_oklch(0.65_0.20_255/0.5)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset,0_16px_40px_-8px_oklch(0.65_0.20_255/0.6)]"
                      : "bg-white/[0.04] text-foreground/80 hover:bg-white/[0.08]",
                  )}
                >
                  <a
                    href={whatsappLink(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Escolher {plan.name.toLowerCase()}
                    {plan.highlight && <ArrowRight className="ml-2 size-4" />}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-14 text-center text-[0.875rem] text-muted-foreground/60">
          Pagamento à vista no Pix &bull; Sem renovação automática &bull; Ativação no mesmo dia
        </Reveal>
      </Container>
    </section>
  )
}
