"use client"

import { motion, useScroll, useTransform } from "motion/react"
import {
  ArrowRight,
  Clock,
  Headphones,
  BadgeCheck,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { WHATSAPP_DEFAULT, whatsappLink } from "@/lib/site"
import { AnnouncementBadge } from "./micro/announcement-badge"
import { StatusCard } from "./micro/status-card"
import { GlowButton } from "./micro/glow-button"
import { FloatingElement } from "./micro/floating-element"

const ease = [0.22, 1, 0.36, 1] as const

// Compatibility devices shown at the bottom of the hero
const DEVICES = [
  { icon: "📺", label: "Smart TV" },
  { icon: "📦", label: "TV Box" },
  { icon: "📱", label: "Celular" },
  { icon: "⬛", label: "Tablet" },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])
  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative overflow-hidden"
    >
      {/* ── BACKGROUND: integrated living room scene ── */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <Image
            src="/images/hero-room-final.png"
            alt=""
            fill
            priority
            unoptimized
            className="object-cover object-left lg:object-[center_30%]"
          />
        </motion.div>
        {/* Vignette esquerdo elegante — concentrado nos primeiros 45%, dissolve suavemente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 from-[0%] via-black/55 via-[30%] to-transparent to-[58%]" />
        {/* No mobile, escurece mais o lado direito para isolar o texto */}
        <div className="absolute inset-0 bg-black/30 lg:hidden" />
        {/* Bleed superior e inferior para suavidade */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/65 to-transparent" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1280px] flex-col justify-center px-5 pb-32 pt-32 sm:px-8 lg:grid lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-4 lg:pb-24 lg:pl-16 lg:pr-8 lg:pt-24">

        {/* ── LEFT — copy ── */}
        <motion.div
          style={{ y: contentY }}
          className="relative z-10 flex flex-col items-start"
        >
          {/* Badge */}
          <AnnouncementBadge pulse>Atendimento online agora</AnnouncementBadge>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            className="mt-6 text-balance font-bold leading-[1.05] tracking-[-0.02em] text-white
                       text-[clamp(2.4rem,4.6vw,3.75rem)]"
          >
            Seu entretenimento,{" "}
            <span
              style={{
                background: "linear-gradient(110deg, #93c5fd 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              pronto
            </span>{" "}
            para usar.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.26, ease }}
            className="mt-5 max-w-[420px] text-pretty text-[0.975rem] leading-[1.7] text-white/55 sm:text-[1rem]"
          >
            Você escolhe o plano, fala com nossa equipe e nós te ajudamos a
            configurar sua TV, celular ou TV Box com suporte humano pelo
            WhatsApp.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38, ease }}
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
          >
            {/* Primary */}
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl
                         bg-primary px-6 py-3.5 text-[0.9rem] font-semibold text-white
                         shadow-[0_6px_24px_-6px] shadow-primary/55 transition-all duration-300
                         hover:-translate-y-px hover:shadow-[0_12px_32px_-6px] hover:shadow-primary/60
                         active:translate-y-0 sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Calendar className="size-4 shrink-0" />
              Quero configurar agora
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Secondary */}
            <a
              href="#planos"
              className="group inline-flex items-center justify-center gap-2 rounded-xl
                         border border-white/14 bg-white/[0.05] px-6 py-3.5 text-[0.9rem] font-semibold text-white/80
                         backdrop-blur-md transition-all duration-300
                         hover:border-white/25 hover:bg-white/[0.08] sm:w-auto"
            >
              Ver planos
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {[
              { icon: Clock, label: "Configuração em minutos" },
              { icon: Headphones, label: "Suporte humano" },
              { icon: BadgeCheck, label: "Sem fidelidade" },
            ].map(({ icon: Icon, label }, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.57 + i * 0.07 }}
                className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-white/45"
              >
                <span className="flex size-5 items-center justify-center rounded-full border border-white/15 bg-white/[0.07]">
                  <Icon className="size-2.5 text-white/60" />
                </span>
                {label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT — floating cards ancorados na área direita ── */}
        <motion.div
          style={{ y: visualY }}
          className="relative z-10 hidden h-full min-h-[520px] lg:block"
          aria-hidden
        >
          {/* Plano ativo — topo direito, acima da TV */}
          <FloatingElement
            delay={0.6}
            duration={6.5}
            y={9}
            className="absolute right-2 top-[6%]"
          >
            <StatusCard
              icon={<BadgeCheck className="size-4" />}
              title="Plano ativo"
              subtitle="Configurado"
              variant="success"
              delay={0.6}
            />
          </FloatingElement>

          {/* Suporte humano — inferior direito, longe do celular/mesa que fica no centro-inferior */}
          <FloatingElement
            delay={0.82}
            duration={7}
            y={9}
            className="absolute bottom-[12%] right-2"
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
                    <Headphones className="size-4" />
                    <span className="absolute -right-0.5 -top-0.5 flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/60" />
                      <span className="relative inline-flex size-2 rounded-full bg-whatsapp" />
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
      </div>

      {/* ── COMPATIBILITY BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease }}
        className="relative z-10 mx-auto mb-10 w-full max-w-[1280px] px-5 sm:px-8 lg:px-12"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-md sm:gap-6">
          <span className="text-sm font-medium text-white/50">
            Compatível com os principais dispositivos
          </span>
          <span className="hidden h-4 w-px bg-white/15 sm:block" />
          {[
            {
              label: "Smart TV",
              svg: (
                <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-[1.5]" aria-hidden>
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              ),
            },
            {
              label: "TV Box",
              svg: (
                <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-[1.5]" aria-hidden>
                  <rect x="2" y="7" width="20" height="10" rx="2" />
                  <circle cx="17" cy="12" r="1" className="fill-current" />
                  <path d="M7 12h6" />
                </svg>
              ),
            },
            {
              label: "Celular",
              svg: (
                <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-[1.5]" aria-hidden>
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" strokeLinecap="round" />
                </svg>
              ),
            },
            {
              label: "Tablet",
              svg: (
                <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-[1.5]" aria-hidden>
                  <rect x="3" y="2" width="18" height="20" rx="2" />
                  <path d="M12 18h.01" strokeLinecap="round" />
                </svg>
              ),
            },
          ].map(({ label, svg }) => (
            <span key={label} className="inline-flex items-center gap-2 text-sm font-medium text-white/70">
              <span className="text-white/50">{svg}</span>
              {label}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
