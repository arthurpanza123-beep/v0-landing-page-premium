"use client"

import { motion } from "motion/react"
import { Tv, Smartphone, Box, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal, Stagger, staggerItem } from "./reveal"
import { Container, Eyebrow } from "./section"
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
    <section id="compatibilidade" className="relative py-28 sm:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          {/* LEFT — heading */}
          <Reveal>
            <Eyebrow>Compatibilidade</Eyebrow>
            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              Funciona no aparelho{" "}
              <span className="text-muted-foreground">que você já usa.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Antes de começar, nossa equipe confirma a compatibilidade e te orienta da forma mais
              simples possível.
            </p>

            <div className="mt-8 rounded-3xl border border-border/70 bg-card/50 p-6">
              <p className="font-semibold">Não sabe se funciona no seu aparelho?</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                A gente confere por você antes de qualquer compromisso.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-5 h-12 rounded-xl bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
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

          {/* RIGHT — device cards */}
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {DEVICES.map((device) => (
              <motion.div
                key={device.title}
                variants={staggerItem}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-105">
                  <device.icon className="size-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{device.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {device.desc}
                </p>
                <div className="pointer-events-none absolute -bottom-12 -right-12 size-28 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}

            {/* accent tile */}
            <motion.div
              variants={staggerItem}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-card to-card p-7"
            >
              <div className="dot-grid absolute inset-0 opacity-30" />
              <p className="relative text-sm font-semibold uppercase tracking-[0.18em] text-primary/90">
                Configuração guiada
              </p>
              <p className="relative mt-4 text-pretty text-lg font-medium leading-snug">
                A gente te acompanha em cada toque até tudo estar pronto.
              </p>
            </motion.div>
          </Stagger>
        </div>
      </Container>
    </section>
  )
}
