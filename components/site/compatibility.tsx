"use client"

import { motion } from "motion/react"
import { Tv, Smartphone, Box, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal, Stagger, staggerItem } from "./reveal"
import { whatsappLink } from "@/lib/site"

const DEVICES = [
  {
    icon: Tv,
    title: "Smart TV",
    desc: "Aparelhos modernos com acesso à internet.",
  },
  {
    icon: Smartphone,
    title: "Celular",
    desc: "Android ou iOS, em qualquer lugar.",
  },
  {
    icon: Box,
    title: "TV Box",
    desc: "Aparelhos com sistema Android.",
  },
]

export function Compatibility() {
  return (
    <section id="compatibilidade" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Compatibilidade
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Funciona no aparelho{" "}
            <span className="text-muted-foreground">que você já usa.</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Antes de começar, nossa equipe confirma a compatibilidade e te orienta da forma mais
            simples possível.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-3">
          {DEVICES.map((device) => (
            <motion.div
              key={device.title}
              variants={staggerItem}
              className="group flex flex-col items-start rounded-2xl border border-border/70 bg-card/50 p-7 transition-colors duration-300 hover:border-primary/40 hover:bg-card"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-105">
                <device.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{device.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{device.desc}</p>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border/70 bg-card/50 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-semibold">Não sabe se funciona no seu aparelho?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                A gente confere por você antes de qualquer compromisso.
              </p>
            </div>
            <Button
              asChild
              className="h-11 shrink-0 rounded-xl bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
            >
              <a
                href={whatsappLink(
                  "Olá! Quero saber se a Central Play Plus funciona no meu aparelho.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" />
                Perguntar no WhatsApp
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
