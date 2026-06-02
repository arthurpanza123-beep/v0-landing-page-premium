"use client"

import { motion, useScroll, useTransform } from "motion/react"
import {
  ArrowRight,
  MessageCircle,
  Clock,
  Headphones,
  BadgeCheck,
  Sparkles,
  Zap,
} from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { WHATSAPP_DEFAULT, whatsappLink } from "@/lib/site"
import { AnnouncementBadge } from "./micro/announcement-badge"
import { StatusCard } from "./micro/status-card"
import { GlowButton } from "./micro/glow-button"
import { FloatingElement, GlowOrb } from "./micro/floating-element"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "10%"])

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
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,transparent_20%,var(--background)_75%)]" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-background via-background/95 to-transparent" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-background via-background/50 to-background/80" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background/60 via-transparent to-background" />

      {/* Premium ambient glow orbs */}
      <GlowOrb color="primary" size="lg" className="right-1/4 top-1/4" intensity={0.15} />
      <GlowOrb color="warm" size="md" className="bottom-1/3 left-0" intensity={0.08} />
      <GlowOrb color="accent" size="sm" className="right-10 top-1/2" intensity={0.1} />

      {/* Content wrapper with proper vertical centering */}
      <motion.div style={{ y: contentY }} className="relative flex min-h-[100svh] items-center pt-20 pb-16 lg:pt-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-8 xl:gap-16">
            {/* LEFT — Premium copy section */}
            <div className="relative z-10 flex flex-col items-start">
              {/* Premium announcement badge */}
              <AnnouncementBadge pulse>
                Atendimento online agora
              </AnnouncementBadge>

              {/* Hero headline - large and impactful */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
                className="mt-8 text-balance text-5xl font-bold leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.25rem]"
              >
                <span className="block">Seu entretenimento,</span>
                <motion.span 
                  className="mt-2 block text-gradient-blue"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2, ease }}
                >
                  pronto para usar.
                </motion.span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease }}
                className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-foreground/70 sm:text-xl lg:max-w-md xl:max-w-xl"
              >
                Você escolhe o plano, chama nossa equipe e recebe ajuda para deixar tudo configurado
                na sua TV, celular ou TV Box — sem complicação, sem termos difíceis e com suporte
                humano pelo WhatsApp.
              </motion.p>

              {/* Premium CTAs with glow effect */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease }}
                className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:items-center"
              >
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <GlowButton variant="whatsapp" size="lg" className="w-full sm:w-auto">
                    <MessageCircle className="size-5" />
                    Quero configurar agora
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </GlowButton>
                </a>
                <a href="#planos">
                  <GlowButton variant="secondary" size="lg" className="w-full sm:w-auto">
                    Ver planos
                    <ArrowRight className="size-5" />
                  </GlowButton>
                </a>
              </motion.div>

              {/* Trust indicators as horizontal pills */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45, ease }}
                className="mt-12 flex flex-wrap items-center gap-3"
              >
                {[
                  { icon: Zap, label: "Configuração em minutos" },
                  { icon: Headphones, label: "Suporte humano" },
                  { icon: BadgeCheck, label: "Sem fidelidade" },
                ].map(({ icon: Icon, label }, i) => (
                  <motion.span
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/70 backdrop-blur-sm transition-colors duration-300 hover:border-white/15 hover:bg-white/8 hover:text-foreground/90"
                  >
                    <Icon className="size-4 text-primary" />
                    {label}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Premium visual composition */}
            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              {/* Ambient glow behind composition */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[140px]" />
                <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-amber-500/6 blur-[100px]" />
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
                    <div className="absolute -inset-6 -z-10 rounded-3xl bg-primary/8 blur-3xl" />

                    {/* TV with interface */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3, ease }}
                      className="relative overflow-hidden rounded-2xl shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)]"
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
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
                      {/* Screen edge glow */}
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                    </motion.div>

                    {/* TV reflection on surface */}
                    <div className="absolute -bottom-8 left-1/2 -z-10 h-16 w-4/5 -translate-x-1/2">
                      <div className="h-full w-full rounded-full bg-primary/10 blur-2xl" />
                    </div>
                  </div>
                </div>

                {/* Floating smartphone */}
                <FloatingElement
                  delay={0.5}
                  duration={6}
                  y={12}
                  className="absolute -right-2 bottom-0 z-20 w-[26%] sm:-right-6 sm:bottom-4 lg:-right-4 lg:bottom-8 xl:-right-8 xl:w-[24%]"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 50, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, delay: 0.55, ease }}
                    className="relative"
                  >
                    {/* Phone glow */}
                    <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-primary/12 blur-2xl" />
                    <Image
                      src="/images/app-mobile.png"
                      alt="Central Play Plus - Interface no celular"
                      width={280}
                      height={560}
                      className="w-full rounded-[2rem] shadow-[0_50px_100px_-25px_rgba(0,0,0,0.8)]"
                    />
                    {/* Phone edge highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
                  </motion.div>
                </FloatingElement>

                {/* Mascot with popcorn */}
                <FloatingElement
                  delay={0.7}
                  duration={5}
                  y={8}
                  className="absolute -bottom-4 right-[12%] z-30 w-[32%] sm:-bottom-8 sm:right-[15%] sm:w-[30%] lg:right-[10%] lg:w-[28%]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease }}
                  >
                    <Image
                      src="/images/mascot-cozy-v4.png"
                      alt="Mascote Central Play Plus"
                      width={320}
                      height={320}
                      className="w-full drop-shadow-[0_35px_60px_rgba(0,0,0,0.7)]"
                    />
                  </motion.div>
                </FloatingElement>

                {/* Floating Status Card — Plano Ativo */}
                <FloatingElement
                  delay={0.6}
                  duration={5}
                  y={10}
                  className="absolute -left-2 top-[12%] z-20 sm:-left-6 lg:-left-10"
                >
                  <StatusCard
                    icon={<BadgeCheck className="size-5" />}
                    title="Plano ativo"
                    subtitle="Configurado"
                    variant="success"
                    delay={0.6}
                  />
                </FloatingElement>

                {/* Floating Status Card — Suporte Humano */}
                <FloatingElement
                  delay={0.75}
                  duration={5.5}
                  y={10}
                  className="absolute -left-2 bottom-[28%] z-20 sm:-left-6 lg:-left-10"
                >
                  <a
                    href={whatsappLink("Olá! Quero falar com o suporte humano da Central Play Plus.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <StatusCard
                      icon={
                        <span className="relative">
                          <Headphones className="size-5" />
                          <span className="absolute -right-0.5 -top-0.5 flex size-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/60" />
                            <span className="relative inline-flex size-2.5 rounded-full bg-whatsapp" />
                          </span>
                        </span>
                      }
                      title="Suporte humano"
                      subtitle="Online agora"
                      variant="success"
                      delay={0.75}
                    />
                  </a>
                </FloatingElement>

                {/* Floating Status Card — Configuração Rápida */}
                <FloatingElement
                  delay={0.85}
                  duration={4.5}
                  y={8}
                  className="absolute -top-2 right-[5%] z-20 sm:right-[8%] sm:top-0"
                >
                  <StatusCard
                    icon={<Sparkles className="size-4" />}
                    title="Pronto em minutos"
                    variant="accent"
                    delay={0.85}
                  />
                </FloatingElement>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  )
}
