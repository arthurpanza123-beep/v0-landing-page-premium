"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { MessageCircle, ArrowRight, Wifi, Tv, Smartphone, Tablet, Monitor, Flame } from "lucide-react"
import { Container, Eyebrow } from "./section"
import { whatsappLink } from "@/lib/site"

const DEVICES = [
  {
    id: "smarttv",
    title: "Smart TV",
    desc: "Samsung, LG, Sony e outras com acesso a internet.",
    image: "/images/device-smarttv.png",
    icon: Tv,
  },
  {
    id: "mobile",
    title: "Celular",
    desc: "Android ou iOS. Em qualquer lugar.",
    image: "/images/device-smartphone.png",
    icon: Smartphone,
  },
  {
    id: "tablet",
    title: "Tablet",
    desc: "iPad ou Android. Tela grande, conforto total.",
    image: "/images/device-tablet.png",
    icon: Tablet,
  },
  {
    id: "tvbox",
    title: "TV Box",
    desc: "Transforma qualquer TV em Smart com Android.",
    image: "/images/device-tvbox.png",
    icon: Monitor,
  },
  {
    id: "firestick",
    title: "Fire Stick",
    desc: "Compatível com Fire TV Stick e similares.",
    image: "/images/device-firestick.png",
    icon: Flame,
  },
]

function DeviceCard({
  device,
  index,
}: {
  device: (typeof DEVICES)[number]
  index: number
}) {
  const Icon = device.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.3)]"
    >
      {/* Image container - clean, no overlay */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/20">
        <Image
          src={device.image}
          alt={device.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Text content - below image */}
      <div className="flex flex-col gap-2 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/15">
            <Icon className="size-4 text-primary" />
          </div>
          <h3 className="font-semibold text-white">{device.title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-white/55">{device.desc}</p>
      </div>
    </motion.div>
  )
}

export function Compatibility() {
  return (
    <section id="compatibilidade" className="relative py-20 sm:py-24 lg:py-32">
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
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Funciona no aparelho{" "}
              <span className="text-muted-foreground">que você já tem.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/50">
              Smart TV, celular, TV Box, tablet ou computador. Antes de começar, nossa equipe confirma a compatibilidade.
            </p>
          </motion.div>
        </div>

        {/* Device grid - clean cards */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:mt-14 sm:gap-5 lg:mt-16 lg:grid-cols-5 lg:gap-5">
          {DEVICES.map((device, i) => (
            <DeviceCard key={device.id} device={device} index={i} />
          ))}
        </div>

        {/* Bottom CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 sm:flex-row sm:px-8"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden size-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 sm:flex">
              <Wifi className="size-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-white">Não sabe se funciona no seu aparelho?</p>
              <p className="mt-0.5 text-sm text-white/50">Manda uma mensagem e a gente verifica na hora.</p>
            </div>
          </div>
          <a
            href={whatsappLink("Oi! Quero saber se a Central Play Plus funciona no meu aparelho.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-whatsapp/90"
          >
            <MessageCircle className="size-4" />
            Perguntar no WhatsApp
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
