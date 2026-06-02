"use client"

import { motion } from "motion/react"
import { ArrowRight, MessageCircle, ShieldCheck, Wifi, Volume2, Music, Star, Trophy, Clapperboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_DEFAULT } from "@/lib/site"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-44">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
        {/* Left column */}
        <div className="flex flex-col items-start">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-whatsapp opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-whatsapp" />
              </span>
              Atendimento online agora
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Seu entretenimento, <span className="text-gradient">pronto para usar.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Você escolhe o plano, chama nossa equipe e recebe ajuda para deixar tudo configurado na
            sua TV, celular ou TV Box — sem complicação, sem termos difíceis e com suporte humano pelo
            WhatsApp.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="h-13 rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-12px] shadow-primary/60 transition-transform hover:scale-[1.02] hover:bg-primary/90"
            >
              <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" />
                Quero configurar agora
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 rounded-xl border-border/70 bg-card/40 px-6 text-base font-medium backdrop-blur hover:bg-card"
            >
              <a href="#planos">
                Ver planos
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <TrustItem>Configuração em minutos</TrustItem>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <TrustItem>Suporte humano</TrustItem>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <TrustItem>Sem fidelidade</TrustItem>
          </motion.div>
        </div>

        {/* Right column visual */}
        <HeroVisual />
      </div>
    </section>
  )
}

function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <ShieldCheck className="size-4 text-primary" />
      {children}
    </span>
  )
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
    >
      {/* main "TV" surface */}
      <div className="relative aspect-[4/3.2] rounded-3xl border border-border/70 bg-gradient-to-br from-card to-background p-4 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between px-1 pb-3 text-muted-foreground">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">
            Destaque da noite
          </span>
          <div className="flex items-center gap-2">
            <Wifi className="size-3.5" />
            <Volume2 className="size-3.5" />
          </div>
        </div>

        {/* content grid */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="col-span-2 aspect-[16/9] rounded-xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent ring-1 ring-border/60" />
          <div className="aspect-[16/9] rounded-xl bg-accent ring-1 ring-border/60" />
        </div>
        <div className="mt-2.5 grid grid-cols-4 gap-2.5">
          {[
            "from-primary/25",
            "from-accent",
            "from-primary/20",
            "from-accent",
          ].map((c, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl bg-gradient-to-br ${c} to-background ring-1 ring-border/60`}
            />
          ))}
        </div>

        {/* category chips */}
        <div className="mt-3 flex gap-2">
          {[Clapperboard, Trophy, Music, Star].map((Icon, i) => (
            <div
              key={i}
              className="flex size-9 items-center justify-center rounded-lg bg-accent/80 text-muted-foreground ring-1 ring-border/60"
            >
              <Icon className="size-4" />
            </div>
          ))}
        </div>
      </div>

      {/* floating "Plano ativo" card */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute -left-3 -top-6 w-52 rounded-2xl glass border border-border/70 p-4 shadow-2xl sm:-left-6"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/20 ring-1 ring-primary/40">
            <ShieldCheck className="size-4 text-primary" />
          </div>
          <span className="text-sm font-medium text-muted-foreground">Plano ativo</span>
        </div>
        <p className="mt-3 text-lg font-semibold">Configurado</p>
        <p className="text-xs text-muted-foreground">em 4 minutos</p>
      </motion.div>

      {/* floating support card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75 }}
        className="absolute -bottom-6 -right-2 w-60 rounded-2xl glass border border-border/70 p-3.5 shadow-2xl sm:-right-6"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-full bg-whatsapp/20 ring-1 ring-whatsapp/40">
            <MessageCircle className="size-4 text-whatsapp" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium">Suporte humano</p>
            <p className="text-xs text-whatsapp">online agora</p>
          </div>
          <span className="ml-auto size-2 rounded-full bg-whatsapp" />
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-2 w-4/5 rounded-full bg-accent" />
          <div className="h-2 w-3/5 rounded-full bg-accent" />
        </div>
      </motion.div>
    </motion.div>
  )
}
