"use client"

import { motion, useInView } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Tv, Trophy, Baby, Film, Radio, Sparkles } from "lucide-react"
import { Container, Eyebrow } from "./section"

const CATEGORIES = [
  {
    id: "filmes",
    icon: Film,
    label: "Filmes",
    count: "+15.000",
    gradient: "from-blue-500/25 via-blue-600/10 to-transparent",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    id: "series",
    icon: Tv,
    label: "Séries",
    count: "+5.000",
    gradient: "from-purple-500/25 via-purple-600/10 to-transparent",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
  {
    id: "canais",
    icon: Radio,
    label: "Canais ao Vivo",
    count: "+1.500",
    gradient: "from-emerald-500/25 via-emerald-600/10 to-transparent",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "futebol",
    icon: Trophy,
    label: "Futebol",
    count: "Ao vivo",
    gradient: "from-amber-500/25 via-amber-600/10 to-transparent",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    glowColor: "rgba(245, 158, 11, 0.15)",
  },
  {
    id: "infantil",
    icon: Baby,
    label: "Infantil",
    count: "+2.000",
    gradient: "from-pink-500/25 via-pink-600/10 to-transparent",
    iconBg: "bg-pink-500/15",
    iconColor: "text-pink-400",
    glowColor: "rgba(236, 72, 153, 0.15)",
  },
]

const HIGHLIGHTS = [
  "Lançamentos de cinema",
  "Séries completas dubladas",
  "Canais nacionais e internacionais",
  "Futebol ao vivo",
  "Desenhos animados",
  "Documentários",
  "Conteúdo 4K Ultra HD",
  "Legendado e dublado",
]

// Animated counter component
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    
    let startTime: number
    const duration = 2000 // 2 seconds
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (easeOutQuart)
      const eased = 1 - Math.pow(1 - progress, 4)
      setDisplayValue(Math.round(eased * value))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {displayValue.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

export function Catalog() {
  return (
    <section id="catalogo" className="relative py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Catálogo</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Tudo em um só lugar
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-white/55">
              Mais de 30.000 conteúdos entre filmes, séries, canais ao vivo, futebol e infantil.
            </p>
          </motion.div>
        </div>

        {/* Category cards - premium grid with hover effects */}
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative flex cursor-default flex-col items-center rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.05] to-transparent p-5 text-center transition-colors duration-500 hover:border-white/15 sm:p-6"
              style={{ 
                boxShadow: `0 0 0 0 ${cat.glowColor}`,
                transition: "box-shadow 0.5s ease, border-color 0.5s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 50px -10px ${cat.glowColor}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 0 ${cat.glowColor}`
              }}
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${cat.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              <motion.div 
                className={`relative z-10 flex size-12 items-center justify-center rounded-xl ${cat.iconBg} sm:size-14`}
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <cat.icon className={`size-6 ${cat.iconColor} sm:size-7`} />
              </motion.div>
              
              <span className="relative z-10 mt-3 text-[0.9rem] font-semibold text-white sm:mt-4 sm:text-base">{cat.label}</span>
              <span className="relative z-10 mt-1 text-xs text-white/45 sm:text-[0.8rem]">{cat.count}</span>
            </motion.div>
          ))}
        </div>

        {/* Highlights strip - animated entrance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
        >
          {HIGHLIGHTS.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[0.75rem] text-white/60 transition-colors sm:px-4 sm:py-2 sm:text-[0.8rem]"
            >
              <Sparkles className="size-3 text-primary/70" />
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats bar - with animated numbers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 flex max-w-2xl items-center justify-center divide-x divide-white/10 rounded-2xl border border-white/8 bg-white/[0.03] py-5 sm:py-6"
        >
          <motion.div 
            className="flex flex-1 flex-col items-center px-4 sm:px-8"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-white sm:text-2xl">
              +<AnimatedNumber value={30000} />
            </span>
            <span className="mt-1 text-[0.7rem] text-white/40 sm:text-xs">Conteúdos</span>
          </motion.div>
          <motion.div 
            className="flex flex-1 flex-col items-center px-4 sm:px-8"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-white sm:text-2xl">
              +<AnimatedNumber value={1500} />
            </span>
            <span className="mt-1 text-[0.7rem] text-white/40 sm:text-xs">Canais ao vivo</span>
          </motion.div>
          <div className="flex flex-1 flex-col items-center px-4 sm:px-8">
            <span className="text-xl font-bold text-white sm:text-2xl">4K</span>
            <span className="mt-1 text-[0.7rem] text-white/40 sm:text-xs">Ultra HD</span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
