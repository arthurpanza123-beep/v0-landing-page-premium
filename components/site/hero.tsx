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
      {/* Cinematic background */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/hero-bg-v3.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={95}
        />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-background via-transparent to-background/50" />

      {/* Ambient light accent */}
      <div className="absolute right-0 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute right-1/4 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-8 xl:gap-16">
          {/* LEFT — Copy */}
          <div className="relative z-10 flex flex-col items-start lg:py-24">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/80 backdrop-blur-sm"
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
              className="mt-8 text-balance text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem]"
            >
              <span className="block">Seu entretenimento,</span>
              <span className="mt-1 block text-gradient-blue">pronto para usar.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease }}
              className="mt-8 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl lg:max-w-md xl:max-w-lg"
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
                className="h-15 rounded-full px-8 text-base font-medium text-foreground/90 hover:bg-white/5 hover:text-foreground"
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
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
            >
              <li className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="size-4 text-primary" />
                </span>
                Configuração em minutos
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary/10">
                  <Headphones className="size-4 text-primary" />
                </span>
                Suporte humano
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary/10">
                  <BadgeCheck className="size-4 text-primary" />
                </span>
                Sem fidelidade
              </li>
            </motion.ul>
          </div>

          {/* RIGHT — Premium visual composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease }}
            className="relative mx-auto w-full max-w-2xl lg:max-w-none"
          >
            {/* Deep ambient glow */}
            <div className="absolute inset-0 -z-10 scale-110">
              <div className="absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/25 blur-[100px]" />
              <div className="absolute bottom-1/4 left-1/4 h-56 w-56 rounded-full bg-primary/15 blur-[80px]" />
            </div>

            {/* Main premium TV visual */}
            <div className="relative">
              <Image
                src="/images/hero-visual-v3.png"
                alt="Central Play Plus - Entretenimento premium na sua TV"
                width={800}
                height={600}
                priority
                className="relative z-10 w-full drop-shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
              />

              {/* Reflection effect */}
              <div className="absolute -bottom-20 left-1/2 -z-10 h-40 w-4/5 -translate-x-1/2">
                <div className="h-full w-full bg-gradient-to-b from-primary/8 to-transparent blur-2xl" />
              </div>
            </div>

            {/* Floating orb accent - top right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease }}
              className="absolute -right-4 -top-8 z-0 sm:-right-12 sm:-top-12"
            >
              <Image
                src="/images/float-glow-orb.png"
                alt=""
                width={120}
                height={120}
                className="w-20 animate-float-slow opacity-80 sm:w-28"
              />
            </motion.div>

            {/* Floating orb accent - bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease }}
              className="absolute -bottom-4 -left-6 z-0 sm:-bottom-8 sm:-left-10"
            >
              <Image
                src="/images/float-glow-orb.png"
                alt=""
                width={80}
                height={80}
                className="w-14 animate-float-slow opacity-60 sm:w-20"
                style={{ animationDelay: "2s" }}
              />
            </motion.div>

            {/* Premium status badge - floating */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease }}
              className="absolute -left-2 top-1/4 z-20 sm:-left-6"
            >
              <div className="animate-float-slow rounded-2xl border border-white/10 bg-black/60 p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-whatsapp/20">
                    <BadgeCheck className="size-5 text-whatsapp" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Plano ativo</p>
                    <p className="text-sm font-semibold text-foreground">Configurado</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Support widget - floating */}
            <motion.a
              href={whatsappLink("Olá! Quero falar com o suporte humano da Central Play Plus.")}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="group absolute -bottom-2 -right-2 z-20 sm:-right-6 sm:bottom-1/4"
            >
              <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:border-whatsapp/30 group-hover:bg-black/70">
                <div className="flex items-center gap-3">
                  <span className="relative flex size-10 items-center justify-center rounded-xl bg-whatsapp/20">
                    <Headphones className="size-5 text-whatsapp" />
                    <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-whatsapp" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Suporte humano</p>
                    <p className="text-sm font-semibold text-whatsapp">Online agora</p>
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
