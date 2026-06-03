"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Play, Users, Tv, Trophy, Baby, Film } from "lucide-react"
import { Container, Eyebrow } from "./section"

const CATEGORIES = [
  {
    id: "filmes",
    icon: Film,
    label: "Filmes",
    count: "+5.000 títulos",
    image: "/images/catalog-movies.png",
    span: "col-span-2 row-span-2",
    desc: "Lançamentos e clássicos de todos os gêneros.",
  },
  {
    id: "series",
    icon: Tv,
    label: "Séries",
    count: "+2.000 séries",
    image: "/images/catalog-series.png",
    span: "col-span-1 row-span-1",
    desc: "As melhores séries nacionais e internacionais.",
  },
  {
    id: "canais",
    icon: Users,
    label: "Canais ao vivo",
    count: "+200 canais",
    image: "/images/catalog-channels.png",
    span: "col-span-1 row-span-1",
    desc: "Notícias, entretenimento e cultura em tempo real.",
  },
  {
    id: "futebol",
    icon: Trophy,
    label: "Futebol",
    count: "Ao vivo",
    image: "/images/catalog-sports.png",
    span: "col-span-1 row-span-1",
    desc: "Campeonatos nacionais e internacionais.",
  },
  {
    id: "infantil",
    icon: Baby,
    label: "Infantil",
    count: "+500 títulos",
    image: "/images/catalog-kids.png",
    span: "col-span-1 row-span-1",
    desc: "Conteúdo seguro e divertido para as crianças.",
  },
]

function CatalogCard({
  item,
  index,
  className,
}: {
  item: (typeof CATEGORIES)[number]
  index: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_20px_60px_-20px_oklch(0_0_0/0.6)] ${className}`}
    >
      <Image
        src={item.image}
        alt={item.label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      {/* Overlay — mais profundidade e menos opacidade no topo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-50% to-black/5" />

      {/* Shine on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "linear-gradient(135deg, transparent 40%, oklch(1 0 0 / 0.04) 50%, transparent 60%)" }}
      />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="flex size-16 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
          <Play className="size-6 fill-white/90 text-white/90" />
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <item.icon className="size-4 text-primary" />
            <span className="text-[0.9rem] font-semibold text-white">{item.label}</span>
          </div>
          <span className="rounded-full border border-primary/25 bg-primary/12 px-3 py-1 text-[11px] font-semibold text-primary">
            {item.count}
          </span>
        </div>
        <p className="mt-2 text-[13.5px] leading-snug text-white/50">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export function Catalog() {
  return (
    <section id="catalogo" className="relative py-20 sm:py-32 lg:py-40">
      {/* Ambient glow — blue left, warm right bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-12"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.5) 0%, transparent 70%)", filter: "blur(100px)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-[15%] -z-10 h-[450px] w-[450px] translate-x-1/3 rounded-full opacity-12"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.14 65 / 0.35) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Catálogo</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[3.1rem] lg:leading-[1.06]">
              Tudo que você quer assistir,{" "}
              <span className="text-muted-foreground">num só lugar.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/50 sm:text-lg">
              Filmes, séries, canais ao vivo, futebol e muito mais. Tudo em um único lugar, na palma da sua mão.
            </p>
          </motion.div>
        </div>

        {/* Bento grid */}
        <div
          className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5"
          style={{ gridTemplateRows: "auto" }}
        >
          {/* Hero tile — filmes */}
          <CatalogCard item={CATEGORIES[0]} index={0} className="min-h-[200px] lg:col-span-2 lg:row-span-2 lg:min-h-[380px]" />
          {/* Others */}
          {CATEGORIES.slice(1).map((item, i) => (
            <CatalogCard key={item.id} item={item} index={i + 1} className="min-h-[140px] lg:min-h-0" />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-7 grid grid-cols-2 divide-x divide-white/6 overflow-hidden rounded-[1.5rem] border border-white/6 bg-white/[0.03] sm:grid-cols-4"
        >
          {[
            { value: "+5.000", label: "Filmes" },
            { value: "+2.000", label: "Séries" },
            { value: "+200", label: "Canais ao vivo" },
            { value: "4K", label: "Ultra HD" },
          ].map((stat, i) => (
            <div key={stat.label} className={`flex flex-col items-center py-7 ${i > 1 ? "hidden sm:flex" : ""}`}>
              <span className="text-2xl font-bold tracking-[-0.02em] text-white sm:text-[1.75rem]">{stat.value}</span>
              <span className="mt-1.5 text-[0.8rem] text-white/35">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
