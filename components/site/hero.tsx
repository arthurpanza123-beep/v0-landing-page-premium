"use client"

import { motion } from "motion/react"
import {
  ArrowRight,
  MessageCircle,
  Clock,
  Headphones,
  BadgeCheck,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WHATSAPP_DEFAULT, whatsappLink } from "@/lib/site"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-16 sm:pt-36 lg:flex lg:items-center lg:pt-0 lg:pb-0"
    >
      {/* Cinematic cozy room background */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/hero-room-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={95}
        />
      </div>

      {/* Gradient overlays for depth and text readability */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-background via-transparent to-background/60" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background/40 via-transparent to-background" />

      {/* Warm + blue ambient light accents */}
      <div className="absolute right-1/4 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute left-0 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-amber-500/8 blur-[100px]" />

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-8 xl:gap-12">
          {/* LEFT — Copy */}
          <div className="relative z-10 flex flex-col items-start lg:py-24">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-foreground/90 backdrop-blur-md"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/70" />
                <span className="relative inline-flex size-2 rounded-full bg-whatsapp" />
              </span>
              Atendimento online agora
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
              className="mt-8 text-balance text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[4.25rem] xl:text-[5rem]"
            >
              <span className="block">Seu entretenimento,</span>
              <span className="mt-1 block text-gradient-blue">pronto para usar.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease }}
              className="mt-8 max-w-lg text-pretty text-lg leading-relaxed text-foreground/70 sm:text-xl lg:max-w-md xl:max-w-lg"
            >
              Você escolhe o plano, chama nossa equipe e recebe ajuda para deixar tudo configurado
              na sua TV, celular ou TV Box — sem complicação, sem termos difíceis e com suporte
              humano pelo WhatsApp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease }}
              className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                size="lg"
                className="group h-15 rounded-full px-8 text-base font-semibold shadow-glow"
              >
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  Quero configurar agora
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-15 rounded-full px-8 text-base font-medium text-foreground/90 hover:bg-white/10 hover:text-foreground"
              >
                <a href="#planos">
                  Ver planos
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-foreground/70"
            >
              <li className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 backdrop-blur-sm">
                  <Clock className="size-4 text-primary" />
                </span>
                Configuração em minutos
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 backdrop-blur-sm">
                  <Headphones className="size-4 text-primary" />
                </span>
                Suporte humano
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 backdrop-blur-sm">
                  <BadgeCheck className="size-4 text-primary" />
                </span>
                Sem fidelidade
              </li>
            </motion.ul>
          </div>

          {/* RIGHT — Premium visual composition: TV + Phone + Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease }}
            className="relative mx-auto w-full max-w-2xl lg:max-w-none"
          >
            {/* Ambient glow behind devices */}
            <div className="absolute inset-0 -z-10 scale-110">
              <div className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-primary/20 blur-[100px]" />
              <div className="absolute bottom-1/3 left-1/3 h-48 w-48 rounded-full bg-amber-500/10 blur-[80px]" />
            </div>

            {/* Main composition container */}
            <div className="relative aspect-[4/3] w-full">
              {/* TV with real interface */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[95%] sm:w-[90%]">
                  {/* TV Frame */}
                  <div className="relative overflow-hidden rounded-xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
                    <Image
                      src="/images/app-tv.png"
                      alt="Central Play Plus - Interface na Smart TV"
                      width={1000}
                      height={563}
                      priority
                      className="w-full"
                    />
                    {/* Subtle screen glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
                  </div>
                  {/* TV stand shadow / reflection */}
                  <div className="absolute -bottom-8 left-1/2 -z-10 h-16 w-3/4 -translate-x-1/2">
                    <div className="h-full w-full rounded-full bg-primary/10 blur-2xl" />
                  </div>
                </div>
              </div>

              {/* Smartphone floating on the right */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease }}
                className="absolute -right-4 bottom-4 z-20 w-[28%] sm:-right-8 sm:bottom-8 lg:-right-4 lg:bottom-12"
              >
                <div className="animate-float-slow rounded-[2rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.7)]" style={{ animationDelay: "1s" }}>
                  <Image
                    src="/images/app-mobile.png"
                    alt="Central Play Plus - Interface no celular"
                    width={300}
                    height={600}
                    className="w-full rounded-[2rem]"
                  />
                </div>
              </motion.div>

              {/* Mascot peeking from bottom right */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease }}
                className="absolute -bottom-8 right-[15%] z-30 w-[30%] sm:-bottom-12 sm:right-[18%] sm:w-[28%]"
              >
                <Image
                  src="/images/mascot-hero.png"
                  alt="Mascote Central Play Plus"
                  width={300}
                  height={300}
                  className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                />
              </motion.div>

              {/* Floating status card - "Plano Ativo" */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease }}
                className="absolute -left-2 top-[15%] z-20 sm:-left-6 lg:-left-8"
              >
                <div className="animate-float-slow rounded-2xl border border-white/10 bg-black/70 p-4 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-whatsapp/20">
                      <BadgeCheck className="size-5 text-whatsapp" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-foreground/60">Plano ativo</p>
                      <p className="text-sm font-semibold text-foreground">Configurado</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating support card */}
              <motion.a
                href={whatsappLink("Olá! Quero falar com o suporte humano da Central Play Plus.")}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75, ease }}
                className="group absolute -left-2 bottom-[25%] z-20 sm:-left-6 lg:-left-8"
              >
                <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:border-whatsapp/30 group-hover:bg-black/80" style={{ animationDelay: "2.5s" }}>
                  <div className="flex items-center gap-3">
                    <span className="relative flex size-10 items-center justify-center rounded-xl bg-whatsapp/20">
                      <Headphones className="size-5 text-whatsapp" />
                      <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-whatsapp" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-foreground/60">Suporte humano</p>
                      <p className="text-sm font-semibold text-whatsapp">Online agora</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
