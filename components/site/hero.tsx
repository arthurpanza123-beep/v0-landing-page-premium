"use client"

import { motion } from "motion/react"
import {
  ArrowRight,
  MessageCircle,
  Clock,
  Headphones,
  BadgeCheck,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "./section"
import { WHATSAPP_DEFAULT, whatsappLink } from "@/lib/site"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
      {/* Hero background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-20">
          {/* LEFT — copy */}
          <div className="flex flex-col items-start">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/70" />
                <span className="relative inline-flex size-2 rounded-full bg-whatsapp" />
              </span>
              Atendimento online agora
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="mt-6 text-pretty text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              Seu entretenimento,{" "}
              <span className="text-gradient-blue">pronto para usar.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
              className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Você escolhe o plano, chama nossa equipe e recebe ajuda para deixar tudo configurado
              na sua TV, celular ou TV Box — sem complicação, sem termos difíceis e com suporte
              humano pelo WhatsApp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
              className="mt-9 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                size="lg"
                className="group h-14 rounded-full px-7 text-base shadow-glow"
              >
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  Quero configurar agora
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-border/70 bg-card/40 px-7 text-base backdrop-blur hover:bg-card/70"
              >
                <a href="#planos">
                  Ver planos
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground"
            >
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-primary" />
                Configuração em minutos
              </li>
              <li className="flex items-center gap-2">
                <Headphones className="size-4 text-primary" />
                Suporte humano
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-primary" />
                Sem fidelidade
              </li>
            </motion.ul>
          </div>

          {/* RIGHT — visual mockup with real assets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            {/* glow behind */}
            <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,oklch(0.55_0.18_255/0.35),transparent)] blur-2xl" />

            {/* main app mockup image */}
            <div className="relative">
              <Image
                src="/images/app-mockup.png"
                alt="Interface do Central Play - seu entretenimento configurado"
                width={600}
                height={450}
                priority
                className="relative z-10 w-full rounded-2xl drop-shadow-2xl"
              />
              
              {/* subtle overlay glow */}
              <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-60" />
            </div>

            {/* floating card: plano ativo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="animate-float-slow absolute -left-4 -top-6 z-20 sm:-left-8"
            >
              <Image
                src="/images/float-plan-active.png"
                alt="Plano ativo - Configurado em 4 minutos"
                width={200}
                height={120}
                className="w-44 drop-shadow-xl sm:w-52"
              />
            </motion.div>

            {/* floating card: suporte humano */}
            <motion.a
              href={whatsappLink("Olá! Quero falar com o suporte humano da Central Play Plus.")}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease }}
              className="absolute -bottom-7 -right-3 z-20 transition-transform hover:scale-105 sm:-right-8"
            >
              <Image
                src="/images/float-support.png"
                alt="Suporte humano online agora"
                width={240}
                height={100}
                className="w-52 drop-shadow-xl sm:w-60"
              />
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
