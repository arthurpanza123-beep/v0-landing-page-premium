"use client"

import { motion, useScroll, useTransform } from "motion/react"
import {
  ArrowRight,
  Clock,
  Headphones,
  BadgeCheck,
  MessageCircle,
  Users,
  Star,
} from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { WHATSAPP_DEFAULT } from "@/lib/site"
import { AnnouncementBadge } from "./micro/announcement-badge"
import { TypingText } from "./micro/typing-text"
import { ScrollIndicator } from "./scroll-indicator"

const ease = [0.22, 1, 0.36, 1] as const

// CSS-only floating particles - much more performant than Framer Motion
function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className="absolute size-1 rounded-full bg-primary/40 animate-float-particle"
          style={{
            left: `${12 + i * 11}%`,
            top: `${15 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + (i % 3)}s`,
          }}
        />
      ))}
    </div>
  )
}

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
        {/* Mesh gradient com CSS animation - mais performante */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-50 animate-pulse-slow"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-35 animate-pulse-slower"
            style={{
              background: "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(147, 51, 234, 0.12) 0%, transparent 50%)",
            }}
          />
        </div>
        
        <FloatingParticles />
        
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

        {/* Glow da TV — CSS animation */}
        <div
          aria-hidden
          className="pointer-events-none absolute z-10 animate-pulse-slow"
          style={{ right: "14%", top: "22%", width: "38%", height: "40%" }}
        >
          {/* Halo principal azul */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 55% at 52% 48%, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0.10) 50%, transparent 80%)",
              filter: "blur(18px)",
            }}
          />
        </div>
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
            className="mt-8 text-balance font-bold leading-[1.02] tracking-[-0.035em] text-white text-[clamp(2.4rem,4vw,3.75rem)]"
          >
            Filmes, séries e canais ao vivo{" "}
            <span className="text-gradient-premium">
              na sua tela hoje.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.26, ease }}
            className="mt-6 max-w-[420px] text-pretty text-[1rem] leading-[1.75] text-white/65"
          >
            Ative em <TypingText /> com suporte humano pelo WhatsApp.{" "}
            <span className="text-white/45">Sem fidelidade, sem complicação.</span>
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
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl
                         bg-gradient-to-b from-primary to-primary/90 px-8 py-4.5 text-[0.95rem] font-semibold text-white
                         shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_12px_40px_-8px_rgba(59,130,246,0.5)]
                         transition-all duration-500 hover:-translate-y-0.5
                         hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset,0_20px_50px_-8px_rgba(59,130,246,0.6)]
                         active:translate-y-0"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
              <MessageCircle className="relative size-4 shrink-0" />
              <span className="relative">Falar no WhatsApp</span>
              <ArrowRight className="relative size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#planos"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl
                         border border-white/10 bg-white/[0.04] px-7 py-4 text-[0.9rem] font-semibold text-white/80
                         backdrop-blur-xl transition-all duration-500
                         hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
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
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-white/45 transition-transform hover:scale-105"
              >
                <span className="flex size-5 items-center justify-center rounded-full border border-white/15 bg-white/[0.07]">
                  <Icon className="size-2.5 text-white/60" />
                </span>
                {label}
              </span>
            ))}
          </motion.div>
          
          {/* Social proof counter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="mt-8 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {["C", "P", "P", "+"].map((letter, i) => (
                <div
                  key={i}
                  className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-primary text-[0.65rem] font-bold text-white"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <Users className="size-3.5 text-primary" />
                <span className="text-sm font-semibold text-white">+2.500 clientes</span>
              </div>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-xs text-white/50">satisfeitos</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator - bottom center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
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
            className="mt-6 text-balance font-bold leading-[1.05] tracking-[-0.03em] text-white text-[clamp(2.1rem,8.5vw,3rem)]"
          >
            Filmes, séries e canais ao vivo{" "}
            <span className="text-gradient-premium">
              na sua tela hoje.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
            className="mt-5 max-w-[340px] text-pretty text-[0.95rem] leading-[1.75] text-white/70"
          >
            Ative em <TypingText /> com suporte humano pelo WhatsApp.{" "}
            <span className="text-white/45">Sem fidelidade.</span>
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
                         rounded-xl bg-primary py-4 text-[1rem] font-semibold text-white
                         shadow-[0_8px_28px_-6px] shadow-primary/65 transition-all duration-300
                         active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <MessageCircle className="size-5 shrink-0" />
              Falar no WhatsApp
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

          {/* Trust pills — organized grid for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46, ease }}
            className="mt-8 flex flex-col gap-3"
          >
            {[
              { icon: Clock, label: "Configuração em minutos" },
              { icon: Headphones, label: "Suporte humano real" },
              { icon: MessageCircle, label: "Atendimento no WhatsApp" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-3 text-[0.9rem] text-white/70"
              >
                <Icon className="size-4 shrink-0 text-primary" />
                {label}
              </span>
            ))}
            <div className="mt-2 flex items-center gap-4">
              <span className="inline-flex items-center gap-2 text-[0.85rem] text-white/55">
                <BadgeCheck className="size-4 shrink-0 text-white/40" />
                Pagamento via Pix
              </span>
              <span className="inline-flex items-center gap-2 text-[0.85rem] text-white/55">
                <BadgeCheck className="size-4 shrink-0 text-white/40" />
                Sem fidelidade
              </span>
            </div>
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
