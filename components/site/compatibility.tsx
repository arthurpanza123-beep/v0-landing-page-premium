"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { MessageCircle, ArrowRight, Wifi } from "lucide-react"
import { Container, Eyebrow } from "./section"
import { whatsappLink } from "@/lib/site"

const DEVICES = [
  {
    id: "smarttv",
    title: "Smart TV",
    desc: "Samsung, LG, Sony e outras com acesso à internet.",
    image: "/images/device-smarttv.png",
    size: "col-span-2 row-span-2",
    imgClass: "object-cover object-center",
  },
  {
    id: "mobile",
    title: "Celular",
    desc: "Android ou iOS. Em qualquer lugar.",
    image: "/images/device-mobile.png",
    size: "col-span-1 row-span-1",
    imgClass: "object-cover object-center",
  },
  {
    id: "tablet",
    title: "Tablet",
    desc: "iPad ou Android. Tela grande, conforto total.",
    image: "/images/device-tablet.png",
    size: "col-span-1 row-span-1",
    imgClass: "object-cover object-center",
  },
  {
    id: "tvbox",
    title: "TV Box",
    desc: "Transforma qualquer TV em Smart com Android.",
    image: "/images/device-tvbox.png",
    size: "col-span-1 row-span-1",
    imgClass: "object-cover object-center",
  },
  {
    id: "firestick",
    title: "Fire Stick",
    desc: "Compatível com Fire TV Stick e similares.",
    image: "/images/device-tvbox.png",
    size: "col-span-1 row-span-1",
    imgClass: "object-cover object-center",
  },
]

function DeviceCard({
  device,
  index,
  className,
}: {
  device: (typeof DEVICES)[number]
  index: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 ${className}`}
    >
      <Image
        src={device.image}
        alt={device.title}
        fill
        className={`${device.imgClass} transition-transform duration-700 group-hover:scale-105`}
      />
      {/* Dark overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span className="flex size-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
            {device.title}
          </p>
        </div>
        <p className="mt-1.5 text-sm leading-snug text-white/65">{device.desc}</p>
      </div>

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 80px 0 oklch(0.62 0.18 255 / 0.08)" }}
      />
    </motion.div>
  )
}

export function Compatibility() {
  return (
    <section id="compatibilidade" className="relative py-28 sm:py-36">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full opacity-25"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.35) 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Compatibilidade</Eyebrow>
            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.1rem] lg:leading-[1.06]">
              Funciona no aparelho{" "}
              <span className="text-muted-foreground">que você já tem.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/50 sm:text-lg">
              Smart TV, celular, TV Box, tablet ou computador. Antes de começar, nossa equipe confirma a compatibilidade.
            </p>
          </motion.div>
        </div>

        {/* Device bento grid */}
        <div className="mt-14 grid h-auto grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5" style={{ minHeight: "520px" }}>
          {/* Smart TV — large hero tile */}
          <DeviceCard device={DEVICES[0]} index={0} className="col-span-2 min-h-[280px] lg:row-span-2 lg:min-h-0" />
          {/* Others */}
          {DEVICES.slice(1).map((device, i) => (
            <DeviceCard key={device.id} device={device} index={i + 1} className="min-h-[160px] lg:min-h-0" />
          ))}
        </div>

        {/* Bottom CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/8 bg-white/[0.04] px-8 py-7 backdrop-blur-sm sm:flex-row"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
              <Wifi className="size-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-white">Não sabe se funciona no seu aparelho?</p>
              <p className="mt-0.5 text-sm text-white/50">Nossa equipe verifica por você antes de qualquer compromisso.</p>
            </div>
          </div>
          <a
            href={whatsappLink("Olá! Quero saber se a Central Play Plus funciona no meu aparelho.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-whatsapp/90"
          >
            <MessageCircle className="size-4" />
            Perguntar no WhatsApp
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
