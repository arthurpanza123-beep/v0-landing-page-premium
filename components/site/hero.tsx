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
import { WHATSAPP_DEFAULT } from "@/lib/site"
import { AnnouncementBadge } from "./micro/announcement-badge"
import { TypingText } from "./micro/typing-text"

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
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative overflow-hidden"
    >
      {/* ── BACKGROUND: desktop only — sala aconchegante ── */}
      <div className="absolute inset-0 z-0 hidden lg:block" aria-hidden>
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <Image
            src="/images/hero-room-final.png"
            alt=""
            fill
            priority
            unoptimized
            className="object-cover object-[center_30%]"
          />
        </motion.div>
        {/* Vignette esquerdo — concentrado nos primeiros 45% */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 from-[0%] via-black/55 via-[30%] to-transparent to-[58%]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Glow animado da TV — posição da TV na arte desktop */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute z-10"
          style={{ right: "14%", top: "22%", width: "38%", height: "40%" }}
          animate={{ opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Halo principal azul */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 55% at 52% 48%, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0.10) 50%, transparent 80%)",
              filter: "blur(18px)",
            }}
          />
          {/* Reflexo no rack — linha horizontal suave na parte inferior */}
          <div
            className="absolute bottom-0 left-[10%] h-6 w-[80%]"
            style={{
              background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(59,130,246,0.22) 0%, transparent 100%)",
              filter: "blur(8px)",
            }}
          />
        </motion.div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="relative z-10 mx-auto hidden min-h-[100svh] w-full max-w-[1280px] lg:grid lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-4 lg:pb-28 lg:pl-16 lg:pr-8 lg:pt-28">
        <motion.div
          style={{ y: contentY }}
          className="relative z-10 flex flex-col items-start"
        >
          <AnnouncementBadge pulse>Atendimento online agora</AnnouncementBadge>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            className="mt-8 text-balance font-bold leading-[1.05] tracking-[-0.02em] text-white text-[clamp(2rem,3.8vw,3.1rem)]"
          >
            Sua TV pronta para assistir,{" "}
            <span
              style={{
                background: "linear-gradient(110deg, #93c5fd 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              sem complicação.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.26, ease }}
            className="mt-6 max-w-[420px] text-pretty text-[0.975rem] leading-[1.7] text-white/60"
          >
            Você escolhe o plano, chama no WhatsApp e nossa equipe configura tudo com suporte humano. Simples assim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38, ease }}
            className="mt-9 flex items-center gap-3"
          >
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl
                         bg-primary px-6 py-3.5 text-[0.9rem] font-semibold text-white
                         shadow-[0_8px_28px_-6px] shadow-primary/60 transition-all duration-300
                         hover:-translate-y-1 hover:shadow-[0_16px_40px_-4px] hover:shadow-primary/70 active:translate-y-0"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Calendar className="size-4 shrink-0" />
              Configurar minha TV
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#planos"
              className="group inline-flex items-center justify-center gap-2 rounded-xl
                         border border-white/16 bg-white/[0.06] px-6 py-3.5 text-[0.9rem] font-semibold text-white/85
                         backdrop-blur-md transition-all duration-300
                         hover:border-white/30 hover:bg-white/12"
            >
              Ver planos
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
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
      </div>

      {/* ── MOBILE layout — imagem como background de tela cheia ── */}
      <div className="relative min-h-[100svh] lg:hidden">

        {/* Background: arte mobile cobrindo tudo desde o topo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-mobile-ambient.png"
            alt=""
            fill
            priority
            unoptimized
            className="object-cover object-[40%_20%]"
          />
        </div>

        {/* Camada 1: sombra mínima — arte já é escura */}
        <div className="absolute inset-0 z-10 bg-black/5" />

        {/* Camada 2: gradiente concentrado só no topo */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,8,20,0.78) 0%, rgba(5,8,20,0.50) 18%, rgba(5,8,20,0.12) 36%, rgba(5,8,20,0.0) 50%)",
          }}
        />

        {/* Camada 3: realce de luzes quentes (luminária + bokeh) via mix-blend-screen */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ mixBlendMode: "screen", opacity: 0.18 }}
        >
          {/* Luminária — canto inferior direito da arte */}
          <div
            className="absolute"
            style={{
              right: "12%", bottom: "18%",
              width: "30%", height: "25%",
              background: "radial-gradient(ellipse at 60% 70%, rgba(255,180,60,1) 0%, rgba(255,140,30,0.5) 40%, transparent 75%)",
              filter: "blur(22px)",
            }}
          />
          {/* Bokeh da janela — canto superior esquerdo */}
          <div
            className="absolute"
            style={{
              left: "0%", top: "0%",
              width: "55%", height: "55%",
              background: "radial-gradient(ellipse at 30% 30%, rgba(80,140,255,0.9) 0%, rgba(40,90,200,0.4) 45%, transparent 75%)",
              filter: "blur(28px)",
            }}
          />
        </div>

        {/* Conteúdo: copy com blur de vidro atrás do texto */}
        <div
          className="relative z-20 flex flex-col px-6 pb-12 pt-28 sm:px-8"
        >
          {/* Placa de vidro atrás da área de copy */}
          <div
            className="absolute inset-x-0 top-0 z-0"
            style={{
              height: "62%",
              background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.20) 70%, transparent 100%)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              maskImage: "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
            }}
          />

          <div className="relative z-10 flex flex-col">
          <AnnouncementBadge pulse>Atendimento online agora</AnnouncementBadge>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-6 text-balance font-bold leading-[1.1] tracking-[-0.02em] text-white text-[clamp(2rem,8vw,2.75rem)]"
          >
            Sua TV pronta para assistir,{" "}
            <span
              style={{
                background: "linear-gradient(110deg, #93c5fd 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              sem complicação.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
            className="mt-5 max-w-[340px] text-pretty text-[0.9rem] leading-[1.75] text-white/70"
          >
            Você escolhe o plano, chama no WhatsApp e nossa equipe configura tudo com suporte humano.
          </motion.p>

          {/* Botões empilhados, largura total */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease }}
            className="mt-8 flex flex-col gap-3"
          >
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden
                         rounded-xl bg-primary py-4 text-[0.95rem] font-semibold text-white
                         shadow-[0_8px_28px_-6px] shadow-primary/60 transition-all duration-300
                         active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Calendar className="size-4 shrink-0" />
              Configurar minha TV
              <ArrowRight className="size-4 shrink-0" />
            </a>
            <a
              href="#planos"
              className="inline-flex w-full items-center justify-center gap-1.5 text-[0.85rem] font-medium text-white/50 transition-colors hover:text-white/80"
            >
              Ver planos
              <ArrowRight className="size-3.5 shrink-0" />
            </a>
          </motion.div>

          {/* Trust pills — chips compactos estilo Apple, inline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46, ease }}
            className="mt-6 flex flex-wrap gap-2"
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
                transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[0.78rem] font-medium text-white/75 backdrop-blur-sm"
              >
                <Icon className="size-3 shrink-0 text-primary" />
                {label}
              </motion.span>
            ))}
          </motion.div>
          </div>{/* fim z-10 */}
        </div>

        {/* Fade na base — dissolve para a próxima seção */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-background to-transparent" />
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
