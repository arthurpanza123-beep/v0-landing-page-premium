"use client"

import { motion, useScroll, useTransform } from "motion/react"
import {
  ArrowRight,
  MessageCircle,
  Clock,
  Headphones,
  BadgeCheck,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_DEFAULT, whatsappLink } from "@/lib/site"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* Premium cinematic room background with parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-30"
      >
        <Image
          src="/images/hero-scene-v4.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={95}
        />
      </motion.div>

      {/* Multi-layer gradient overlays for depth and readability */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,transparent_30%,var(--background)_80%)]" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-background via-background/90 to-transparent" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-background via-background/40 to-background/70" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background/50 via-transparent to-background" />

      {/* Cinematic ambient light accents */}
      <div className="absolute right-1/4 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-primary/12 blur-[180px]" />
      <div className="absolute bottom-1/3 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-amber-500/6 blur-[120px]" />
      <div className="absolute right-0 top-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-primary/8 blur-[100px]" />

      {/* Content wrapper with proper vertical centering */}
      <div className="relative flex min-h-[100svh] items-center pt-20 pb-16 lg:pt-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-8 xl:gap-16">
            {/* LEFT — Premium copy section */}
            <div className="relative z-10 flex flex-col items-start">
              {/* Online badge with glow */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-foreground/90 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/70" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-whatsapp" />
                </span>
                Atendimento online agora
              </motion.span>

              {/* Hero headline - large and impactful */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
                className="mt-8 text-balance text-5xl font-bold leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.25rem]"
              >
                <span className="block">Seu entretenimento,</span>
                <span className="mt-2 block text-gradient-blue">pronto para usar.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.18, ease }}
                className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-foreground/70 sm:text-xl lg:max-w-md xl:max-w-xl"
              >
                Você escolhe o plano, chama nossa equipe e recebe ajuda para deixar tudo configurado
                na sua TV, celular ou TV Box — sem complicação, sem termos difíceis e com suporte
                humano pelo WhatsApp.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.26, ease }}
                className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="group relative h-14 overflow-hidden rounded-full px-8 text-base font-semibold shadow-[0_0_0_1px_rgba(var(--primary),0.3),0_20px_60px_-15px_rgba(var(--primary),0.5)] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(var(--primary),0.5),0_30px_80px_-15px_rgba(var(--primary),0.6)] sm:h-15"
                >
                  <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary to-primary/90" />
                    <span className="absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                    <MessageCircle className="size-5" />
                    Quero configurar agora
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-14 rounded-full border border-white/10 bg-white/5 px-8 text-base font-medium text-foreground/90 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-foreground sm:h-15"
                >
                  <a href="#planos">
                    Ver planos
                    <ArrowRight className="size-5" />
                  </a>
                </Button>
              </motion.div>

              {/* Trust bar */}
              <motion.ul
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.34, ease }}
                className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-foreground/60"
              >
                {[
                  { icon: Clock, label: "Configuração em minutos" },
                  { icon: Headphones, label: "Suporte humano" },
                  { icon: BadgeCheck, label: "Sem fidelidade" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2.5">
                    <span className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                      <Icon className="size-4 text-primary" />
                    </span>
                    <span className="font-medium">{label}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* RIGHT — Premium visual composition */}
            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              {/* Ambient glow behind composition */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-amber-500/8 blur-[80px]" />
              </div>

              {/* Main composition */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease }}
                className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-[600px] xl:h-[680px]"
              >
                {/* Premium TV with real interface */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-[95%] sm:max-w-[90%]">
                    {/* TV glow effect */}
                    <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl" />

                    {/* TV with interface */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3, ease }}
                      className="relative overflow-hidden rounded-2xl shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)]"
                    >
                      <Image
                        src="/images/app-tv.png"
                        alt="Central Play Plus - Interface na Smart TV"
                        width={1000}
                        height={563}
                        priority
                        className="w-full"
                      />
                      {/* Subtle screen reflection */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                    </motion.div>

                    {/* TV reflection on surface */}
                    <div className="absolute -bottom-6 left-1/2 -z-10 h-12 w-4/5 -translate-x-1/2">
                      <div className="h-full w-full rounded-full bg-primary/15 blur-xl" />
                    </div>
                  </div>
                </div>

                {/* Floating smartphone */}
                <motion.div
                  initial={{ opacity: 0, x: 50, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1, delay: 0.55, ease }}
                  className="absolute -right-2 bottom-0 z-20 w-[26%] sm:-right-6 sm:bottom-4 lg:-right-4 lg:bottom-8 xl:-right-8 xl:w-[24%]"
                >
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    {/* Phone glow */}
                    <div className="absolute -inset-2 -z-10 rounded-[2.5rem] bg-primary/15 blur-xl" />
                    <Image
                      src="/images/app-mobile.png"
                      alt="Central Play Plus - Interface no celular"
                      width={280}
                      height={560}
                      className="w-full rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]"
                    />
                  </motion.div>
                </motion.div>

                {/* Mascot with popcorn */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7, ease }}
                  className="absolute -bottom-4 right-[12%] z-30 w-[32%] sm:-bottom-8 sm:right-[15%] sm:w-[30%] lg:right-[10%] lg:w-[28%]"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <Image
                      src="/images/mascot-cozy-v4.png"
                      alt="Mascote Central Play Plus"
                      width={320}
                      height={320}
                      className="w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
                    />
                  </motion.div>
                </motion.div>

                {/* Floating card — Plano Ativo */}
                <motion.div
                  initial={{ opacity: 0, x: -40, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.65, ease }}
                  className="absolute -left-2 top-[12%] z-20 sm:-left-6 lg:-left-10"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-whatsapp/30 to-whatsapp/10">
                        <BadgeCheck className="size-5 text-whatsapp" />
                      </span>
                      <div>
                        <p className="text-xs font-medium text-foreground/50">Plano ativo</p>
                        <p className="text-sm font-semibold text-foreground">Configurado</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating card — Suporte Humano */}
                <motion.a
                  href={whatsappLink("Olá! Quero falar com o suporte humano da Central Play Plus.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -40, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.8, ease }}
                  className="group absolute -left-2 bottom-[28%] z-20 sm:-left-6 lg:-left-10"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 group-hover:border-whatsapp/30 group-hover:shadow-[0_20px_60px_-15px_rgba(34,197,94,0.3)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="relative flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-whatsapp/30 to-whatsapp/10">
                        <Headphones className="size-5 text-whatsapp" />
                        <span className="absolute -right-0.5 -top-0.5 flex size-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/60" />
                          <span className="relative inline-flex size-3 rounded-full bg-whatsapp" />
                        </span>
                      </span>
                      <div>
                        <p className="text-xs font-medium text-foreground/50">Suporte humano</p>
                        <p className="text-sm font-semibold text-whatsapp">Online agora</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.a>

                {/* Floating card — Configuração */}
                <motion.div
                  initial={{ opacity: 0, x: 40, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.9, ease }}
                  className="absolute -top-2 right-[5%] z-20 sm:right-[8%] sm:top-0"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="rounded-2xl border border-white/10 bg-black/70 px-4 py-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-primary/10">
                        <Sparkles className="size-4 text-primary" />
                      </span>
                      <p className="text-sm font-medium text-foreground/90">Pronto em minutos</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
