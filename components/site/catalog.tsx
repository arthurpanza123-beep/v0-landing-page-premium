"use client"

import { motion } from "motion/react"
import { Play, Tv, Trophy, Baby, Film, Radio, Sparkles } from "lucide-react"
import { Container, Eyebrow } from "./section"

const CATEGORIES = [
  {
    id: "filmes",
    icon: Film,
    label: "Filmes",
    count: "+5.000",
    gradient: "from-blue-500/20 via-blue-600/10 to-transparent",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
  },
  {
    id: "series",
    icon: Tv,
    label: "Séries",
    count: "+2.000",
    gradient: "from-purple-500/20 via-purple-600/10 to-transparent",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
  },
  {
    id: "canais",
    icon: Radio,
    label: "Canais ao Vivo",
    count: "+200",
    gradient: "from-emerald-500/20 via-emerald-600/10 to-transparent",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
  },
  {
    id: "futebol",
    icon: Trophy,
    label: "Futebol",
    count: "Ao vivo",
    gradient: "from-amber-500/20 via-amber-600/10 to-transparent",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
  },
  {
    id: "infantil",
    icon: Baby,
    label: "Infantil",
    count: "+500",
    gradient: "from-pink-500/20 via-pink-600/10 to-transparent",
    iconBg: "bg-pink-500/15",
    iconColor: "text-pink-400",
  },
]

const HIGHLIGHTS = [
  "Lançamentos de cinema",
  "Séries completas",
  "Canais de notícias",
  "Campeonatos nacionais",
  "Desenhos animados",
  "Documentários",
  "Conteúdo 4K",
  "Legendado e dublado",
]

export function Catalog() {
  return (
    <section id="catalogo" className="relative py-20 sm:py-28 lg:py-36">
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
              Filmes, séries, canais ao vivo, futebol e conteúdo infantil. Escolha o que assistir, quando quiser.
            </p>
          </motion.div>
        </div>

        {/* Category cards - clean grid */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col items-center rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06] sm:p-6"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${cat.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              <div className={`relative z-10 flex size-12 items-center justify-center rounded-xl ${cat.iconBg} transition-transform duration-300 group-hover:scale-110 sm:size-14`}>
                <cat.icon className={`size-6 ${cat.iconColor} sm:size-7`} />
              </div>
              
              <span className="relative z-10 mt-3 text-[0.9rem] font-semibold text-white sm:mt-4 sm:text-base">{cat.label}</span>
              <span className="relative z-10 mt-1 text-xs text-white/45 sm:text-[0.8rem]">{cat.count}</span>
            </motion.div>
          ))}
        </div>

        {/* Highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {HIGHLIGHTS.map((item, i) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[0.75rem] text-white/60 sm:px-4 sm:py-2 sm:text-[0.8rem]"
            >
              <Sparkles className="size-3 text-primary/70" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Stats bar - simplified */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-10 flex max-w-2xl items-center justify-center divide-x divide-white/10 rounded-2xl border border-white/8 bg-white/[0.03] py-5 sm:py-6"
        >
          {[
            { value: "+10.000", label: "Títulos" },
            { value: "+200", label: "Canais" },
            { value: "4K", label: "Qualidade" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-1 flex-col items-center px-4 sm:px-8">
              <span className="text-xl font-bold text-white sm:text-2xl">{stat.value}</span>
              <span className="mt-1 text-[0.7rem] text-white/40 sm:text-xs">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
