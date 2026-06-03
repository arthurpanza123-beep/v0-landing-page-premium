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
    <section id="planos" className="relative py-16 sm:py-20 lg:py-24">
      {/* Ambient glows — blue center, warm accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/6 blur-[180px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[20%] bottom-[15%] -z-10 h-[350px] w-[350px] rounded-full opacity-12"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.14 65 / 0.35) 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[15%] top-[30%] -z-10 h-[300px] w-[300px] rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.14 65 / 0.3) 0%, transparent 70%)", filter: "blur(60px)" }}
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

        <Stagger className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:grid-cols-4 lg:items-stretch lg:gap-5">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              whileHover={plan.highlight ? { scale: 1.02 } : { y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "group relative flex flex-col rounded-[1.5rem] border p-5 transition-all duration-500 sm:p-6 lg:p-8",
                plan.highlight
                  ? "z-10 border-primary/50 bg-gradient-to-b from-primary/15 via-primary/5 to-card shadow-[0_0_60px_-12px_oklch(0.62_0.18_255/0.4),0_24px_80px_-24px_oklch(0.62_0.18_255/0.35)] lg:scale-[1.06]"
                  : "border-border/40 bg-gradient-to-b from-card/60 to-card/30 hover:border-primary/25 hover:bg-card/70 hover:shadow-[0_16px_50px_-16px_oklch(0_0_0/0.5)]",
              )}
            >
              {/* Glow effect for highlight card */}
              {plan.highlight && (
                <div className="pointer-events-none absolute -inset-px rounded-[1.5rem] bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-60" />
              )}
              
              {plan.badge && (
                <motion.span 
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-[0_8px_32px_-8px_oklch(0.62_0.18_255/0.6)]"
                >
                  <Sparkles className="size-3.5" />
                  {plan.badge}
                </motion.span>
              )}

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {plan.name}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm font-medium text-muted-foreground/70">R$</span>
                <span
                  className={cn(
                    "text-[3.5rem] font-bold tracking-[-0.03em] leading-none",
                    plan.highlight && "text-gradient-blue",
                  )}
                >
                  {plan.price}
                </span>
                <span className="ml-1 text-sm text-muted-foreground/60">{plan.period}</span>
              </div>

              <div className="mt-2 flex flex-col gap-1">
                <p className="h-4 text-xs font-medium text-primary/90">
                  {plan.equivalent ?? "pago de uma vez"}
                </p>
                {plan.savings && (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex w-fit items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-400"
                  >
                    <TrendingDown className="size-3" />
                    {plan.savings}
                  </motion.span>
                )}
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-8 flex flex-col gap-4 border-t border-border/40 pt-8">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={feature} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-[14.5px] text-foreground/85"
                  >
                    <span
                      className={cn(
                        "flex size-[1.125rem] shrink-0 items-center justify-center rounded-full",
                        plan.highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/12 text-primary",
                      )}
                    >
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "h-[3.25rem] w-full rounded-2xl text-[0.9rem] font-semibold transition-all duration-300",
                    plan.highlight
                      ? "bg-primary text-primary-foreground shadow-[0_8px_30px_-6px_oklch(0.62_0.18_255/0.5)] hover:bg-primary/90 hover:shadow-[0_12px_40px_-6px_oklch(0.62_0.18_255/0.6)]"
                      : "bg-secondary/80 text-secondary-foreground hover:bg-accent",
                  )}
                >
                  <a
                    href={whatsappLink(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Escolher {plan.name.toLowerCase()}
                    {plan.highlight && <ArrowRight className="ml-1 size-4" />}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12 text-center text-sm text-muted-foreground">
          Pagamento à vista no Pix &bull; Sem renovação automática &bull; Ativação no mesmo dia
        </Reveal>
      </Container>
    </section>
  )
}
