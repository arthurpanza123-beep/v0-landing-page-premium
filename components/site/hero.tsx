"use client"

import { motion } from "motion/react"
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Headphones,
  Clock,
  BadgeCheck,
  Wifi,
  Volume2,
  Play,
  Trophy,
  Music,
  Star,
  Film,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "./section"
import { WHATSAPP_DEFAULT, whatsappLink } from "@/lib/site"

const ease = [0.22, 1, 0.36, 1] as const

const tiles = [
  "from-blue-500/30 to-indigo-600/10",
  "from-rose-500/25 to-fuchsia-600/10",
  "from-emerald-500/25 to-teal-600/10",
  "from-amber-500/25 to-orange-600/10",
  "from-sky-500/25 to-cyan-600/10",
  "from-violet-500/25 to-purple-600/10",
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-20">
          {/* LEFT — copy */}
          <div className="flex flex-col items-start">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/70" />
                <span className="relative inline-flex size-2 rounded-full bg-whatsapp" />
              </span>
              Atendimento online agora
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="mt-6 text-pretty text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              Seu entretenimento,{" "}
              <span className="text-gradient-blue">pronto para usar.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
              className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Você escolhe o plano, chama nossa equipe e recebe ajuda para deixar tudo configurado
              na sua TV, celular ou TV Box — sem complicação, sem termos difíceis e com suporte
              humano pelo WhatsApp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
              className="mt-9 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                size="lg"
                className="group h-14 rounded-full px-7 text-base shadow-glow"
              >
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  Quero configurar agora
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-border/70 bg-card/40 px-7 text-base backdrop-blur hover:bg-card/70"
              >
                <a href="#planos">
                  Ver planos
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground"
            >
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-primary" />
                Configuração em minutos
              </li>
              <li className="flex items-center gap-2">
                <Headphones className="size-4 text-primary" />
                Suporte humano
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-primary" />
                Sem fidelidade
              </li>
            </motion.ul>
          </div>

          {/* RIGHT — cinematic interface mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            {/* glow behind */}
            <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,oklch(0.55_0.18_255/0.35),transparent)] blur-2xl" />

            {/* main screen */}
            <div className="ring-gradient relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-3 shadow-soft backdrop-blur-xl">
              <div className="overflow-hidden rounded-2xl bg-background/80">
                {/* top bar */}
                <div className="flex items-center justify-between border-b border-border/50 px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                      <Play className="size-3.5 fill-primary text-primary" />
                    </span>
                    <span className="text-sm font-medium">Central Play</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Wifi className="size-4" />
                    <Volume2 className="size-4" />
                    <span className="rounded-md bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                      HD
                    </span>
                  </div>
                </div>

                {/* featured banner */}
                <div className="px-5 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/80">
                    Destaque da noite
                  </p>
                  <div className="relative mt-3 h-32 overflow-hidden rounded-xl bg-gradient-to-br from-primary/30 via-indigo-600/15 to-transparent ring-1 ring-border/50 sm:h-36">
                    <div className="absolute inset-0 dot-grid opacity-40" />
                    <div className="absolute bottom-3 left-4">
                      <div className="h-2.5 w-28 rounded-full bg-foreground/70" />
                      <div className="mt-2 h-2 w-20 rounded-full bg-foreground/25" />
                    </div>
                    <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
                      <Play className="size-4 fill-current" />
                    </span>
                  </div>
                </div>

                {/* category grid */}
                <div className="grid grid-cols-3 gap-3 p-5">
                  {tiles.map((t, i) => (
                    <div
                      key={i}
                      className={`relative h-16 overflow-hidden rounded-lg bg-gradient-to-br ${t} ring-1 ring-border/50 sm:h-20`}
                    >
                      <div className="absolute bottom-1.5 left-1.5 h-1.5 w-9 rounded-full bg-foreground/40" />
                    </div>
                  ))}
                </div>

                {/* quick row */}
                <div className="flex items-center justify-around border-t border-border/50 px-5 py-3.5 text-muted-foreground">
                  <Film className="size-4" />
                  <Trophy className="size-4" />
                  <Star className="size-4" />
                  <Music className="size-4" />
                </div>
              </div>
            </div>

            {/* floating card: plano ativo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="animate-float-slow absolute -left-4 -top-6 w-52 rounded-2xl border border-border/60 bg-card/80 p-4 shadow-soft backdrop-blur-xl sm:-left-8"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
                  <ShieldCheck className="size-4 text-primary" />
                </span>
                <span className="text-sm font-medium text-muted-foreground">Plano ativo</span>
              </div>
              <p className="mt-3 text-lg font-semibold">Configurado</p>
              <p className="text-sm text-muted-foreground">em 4 minutos</p>
            </motion.div>

            {/* floating card: suporte humano */}
            <motion.a
              href={whatsappLink("Olá! Quero falar com o suporte humano da Central Play Plus.")}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease }}
              className="absolute -bottom-7 -right-3 flex w-60 items-center gap-3 rounded-2xl border border-border/60 bg-card/80 p-4 shadow-soft backdrop-blur-xl transition-colors hover:bg-card sm:-right-8"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground">
                <MessageCircle className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium">Suporte humano</p>
                <p className="flex items-center gap-1.5 text-xs text-whatsapp">
                  <span className="size-1.5 rounded-full bg-whatsapp" />
                  online agora
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
