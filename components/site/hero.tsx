"use client"

import { motion, useScroll, useTransform } from "motion/react"
import {
  ArrowRight,
  MessageCircle,
  Clock,
  Headphones,
  BadgeCheck,
} from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { WHATSAPP_DEFAULT, whatsappLink } from "@/lib/site"
import { AnnouncementBadge } from "./micro/announcement-badge"
import { StatusCard } from "./micro/status-card"
import { GlowButton } from "./micro/glow-button"
import { FloatingElement } from "./micro/floating-element"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const waveOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-background"
    >
      {/* Deep black base */}
      <div className="absolute inset-0 -z-40 bg-background" />

      {/* Cinematic blue light wave at the bottom */}
      <motion.div
        style={{ opacity: waveOpacity }}
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-30 h-[75%]"
      >
        <Image
          src="/images/hero-wave.png"
          alt=""
          fill
          priority
          className="object-cover object-bottom opacity-80"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/20 to-background" />
      </motion.div>

      {/* Guaranteed cinematic blue glow sweeping the lower portion */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-30 h-[55%] bg-[radial-gradient(120%_100%_at_70%_120%,oklch(0.55_0.2_255/0.55)_0%,oklch(0.4_0.18_258/0.25)_35%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-30 h-44 bg-gradient-to-t from-primary/25 to-transparent blur-2xl" />

      {/* Premium grain texture */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.5] bg-grid mix-blend-soft-light" />

      {/* Breathing ambient glow behind the visual */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-10%] top-1/2 -z-20 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-primary/20 blur-[160px]"
      />
      <div className="pointer-events-none absolute left-[-5%] top-[18%] -z-20 h-72 w-72 rounded-full bg-amber-400/[0.05] blur-[120px]" />

      {/* Content */}
      <div className="relative flex min-h-[100svh] items-center pt-28 pb-20 lg:pt-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10 xl:gap-16">
            {/* LEFT — copy */}
            <motion.div style={{ y: contentY }} className="relative z-10 flex flex-col items-start lg:pr-8">
              <AnnouncementBadge pulse>Atendimento online agora</AnnouncementBadge>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
                className="mt-7 text-balance text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-[4.5rem]"
              >
                <span className="block">Seu entretenimento,</span>
                <motion.span
                  className="mt-1.5 block text-gradient-blue"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.22, ease }}
                >
                  pronto para usar.
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease }}
                className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-foreground/65 sm:text-xl"
              >
                Você escolhe o plano, chama nossa equipe e recebe ajuda para deixar tudo configurado
                na sua TV, celular ou TV Box — sem complicação, sem termos difíceis e com suporte
                humano pelo WhatsApp.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease }}
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

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease }}
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-foreground/55"
              >
                {[
                  { icon: Clock, label: "Configuração em minutos" },
                  { icon: Headphones, label: "Suporte humano" },
                  { icon: BadgeCheck, label: "Sem fidelidade" },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-2">
                    <Icon className="size-4 text-primary" />
                    {label}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — single strong visual */}
            <motion.div style={{ y: visualY }} className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.25, ease }}
                className="relative"
              >
                {/* soft glow halo behind the TV */}
                <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-primary/10 blur-[100px]" />

                {/* Main TV visual */}
                <FloatingElement delay={0.4} duration={7} y={10}>
                  <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_80px_140px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
                    <Image
                      src="/images/tv-hero-clean.png"
                      alt="Central Play Plus em uma Smart TV premium"
                      width={1100}
                      height={825}
                      priority
                      quality={95}
                      className="w-full"
                    />
                    {/* subtle screen sheen */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
                  </div>
                </FloatingElement>

                {/* Floating card — Plano ativo */}
                <FloatingElement
                  delay={0.6}
                  duration={6}
                  y={12}
                  className="absolute -left-3 top-[14%] z-20 sm:-left-8 lg:-left-12"
                >
                  <StatusCard
                    icon={<BadgeCheck className="size-5" />}
                    title="Plano ativo"
                    subtitle="Configurado"
                    variant="success"
                    delay={0.6}
                  />
                </FloatingElement>

                {/* Floating card — Suporte humano online */}
                <FloatingElement
                  delay={0.78}
                  duration={6.5}
                  y={12}
                  className="absolute right-1 bottom-[12%] z-20 sm:-right-8 lg:-right-12"
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
                      delay={0.78}
                    />
                  </a>
                </FloatingElement>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
