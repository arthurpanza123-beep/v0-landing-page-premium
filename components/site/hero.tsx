"use client"

import { motion, useScroll, useTransform } from "motion/react"
import {
  ArrowRight,
  MessageCircle,
  Clock,
  Headphones,
  BadgeCheck,
  Radio,
  Film,
  MonitorPlay,
  Trophy,
} from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { WHATSAPP_DEFAULT, whatsappLink } from "@/lib/site"
import { AnnouncementBadge } from "./micro/announcement-badge"
import { StatusCard } from "./micro/status-card"
import { GlowButton } from "./micro/glow-button"
import { FloatingElement } from "./micro/floating-element"

const ease = [0.22, 1, 0.36, 1] as const

const CATEGORIES = [
  { label: "Ao vivo", icon: Radio, color: "text-rose-300", ring: "ring-rose-400/40", glow: "bg-rose-500/20" },
  { label: "Filmes", icon: Film, color: "text-sky-300", ring: "ring-sky-400/40", glow: "bg-sky-500/20" },
  { label: "Séries", icon: MonitorPlay, color: "text-violet-300", ring: "ring-violet-400/40", glow: "bg-violet-500/20" },
  { label: "Futebol", icon: Trophy, color: "text-emerald-300", ring: "ring-emerald-400/40", glow: "bg-emerald-500/20" },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-background"
    >
      {/* Cozy living room scene filling the hero */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 -z-40">
        <Image
          src="/images/hero-living-room.png"
          alt=""
          fill
          priority
          quality={95}
          className="object-cover object-right brightness-110"
        />
      </motion.div>

      {/* Warm + cool ambient wash to enrich the scene */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(90%_70%_at_15%_30%,oklch(0.52_0.17_260/0.38)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(70%_75%_at_88%_60%,oklch(0.74_0.14_68/0.4)_0%,transparent_58%)]" />

      {/* Legibility gradient — darker on the left where the copy sits, room shows warm on the right */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-background from-5% via-background/65 via-38% to-transparent to-80%" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-t from-background/70 via-transparent to-background/15" />

      {/* Soft grain for premium depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-grid mix-blend-soft-light" />

      {/* Content */}
      <div className="relative flex min-h-[100svh] items-center pt-28 pb-20 lg:pt-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_1fr] lg:gap-8 xl:gap-14">
            {/* LEFT — copy */}
            <motion.div style={{ y: contentY }} className="relative z-10 flex flex-col items-start lg:pr-6">
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
                className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/70 sm:text-xl"
              >
                Você escolhe o plano, chama nossa equipe e recebe ajuda para deixar tudo configurado
                na sua TV, celular ou TV Box — sem complicação, sem termos difíceis e com suporte
                humano pelo WhatsApp.
              </motion.p>

              {/* Colorful category chips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="mt-7 flex flex-wrap gap-2.5"
              >
                {CATEGORIES.map(({ label, icon: Icon, color, ring, glow }, i) => (
                  <motion.span
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.07, ease }}
                    className={`group relative inline-flex items-center gap-2 rounded-full bg-card/50 px-3.5 py-2 text-sm font-medium text-foreground/80 ring-1 ${ring} backdrop-blur-md transition-all duration-300 hover:bg-card/80`}
                  >
                    <span className={`absolute inset-0 -z-10 rounded-full ${glow} opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100`} />
                    <Icon className={`size-4 ${color}`} />
                    {label}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.52, ease }}
                className="mt-9 flex w-full flex-col gap-4 sm:flex-row sm:items-center"
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
                transition={{ duration: 0.9, delay: 0.62, ease }}
                className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-foreground/60"
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

            {/* RIGHT — rich visual composition */}
            <motion.div style={{ y: visualY }} className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.25, ease }}
                className="relative"
              >
                {/* soft glow halo behind the TV */}
                <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-primary/15 blur-[110px]" />

                {/* Main integrated room + TV scene */}
                <FloatingElement delay={0.4} duration={7} y={8}>
                  <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_80px_140px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
                    <Image
                      src="/images/hero-room-tv.png"
                      alt="Central Play Plus em uma Smart TV em uma sala aconchegante com filmes, séries e canais ao vivo"
                      width={1100}
                      height={825}
                      priority
                      quality={95}
                      className="w-full"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />
                  </div>
                </FloatingElement>

                {/* Overlapping premium phone */}
                <FloatingElement
                  delay={0.7}
                  duration={6.5}
                  y={14}
                  className="absolute -bottom-8 -left-6 z-20 w-[34%] max-w-[180px] sm:-left-10 lg:-bottom-10 lg:-left-14"
                >
                  <div className="overflow-hidden rounded-[1.5rem] shadow-[0_50px_90px_-30px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
                    <Image
                      src="/images/phone-rich-ui.png"
                      alt="Central Play Plus no celular"
                      width={400}
                      height={500}
                      quality={95}
                      className="w-full"
                    />
                  </div>
                </FloatingElement>

                {/* Floating card — Plano ativo */}
                <FloatingElement
                  delay={0.6}
                  duration={6}
                  y={12}
                  className="absolute -right-2 top-[10%] z-20 sm:-right-6 lg:-right-10"
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
                  delay={0.82}
                  duration={6.8}
                  y={12}
                  className="absolute -right-1 bottom-[16%] z-20 sm:-right-6 lg:-right-12"
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
                      delay={0.82}
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
