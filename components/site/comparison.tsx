"use client"

import { motion } from "motion/react"
import { Check, X, Sparkles } from "lucide-react"
import { Container, SectionHeading } from "./section"

const FEATURES = [
  { feature: "Preço mensal", us: "A partir de R$25", netflix: "R$55+", tvCabo: "R$150+" },
  { feature: "Filmes e séries", us: "+5.000 títulos", netflix: "Limitado", tvCabo: "Pacotes extras" },
  { feature: "Canais ao vivo", us: "+200 canais", netflix: false, tvCabo: true },
  { feature: "Futebol e esportes", us: true, netflix: false, tvCabo: "Pacote adicional" },
  { feature: "Suporte humano", us: "WhatsApp 24h", netflix: "Chat bot", tvCabo: "0800 demorado" },
  { feature: "Fidelidade", us: false, netflix: false, tvCabo: "12 meses" },
  { feature: "Instalação técnica", us: false, netflix: false, tvCabo: "Agendamento" },
  { feature: "Multi-dispositivos", us: "TV, celular, tablet", netflix: "Limitado por plano", tvCabo: "Só TV" },
]

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="flex items-center justify-center">
        <span className="flex size-6 items-center justify-center rounded-full bg-whatsapp/15">
          <Check className="size-3.5 text-whatsapp" />
        </span>
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="flex items-center justify-center">
        <span className="flex size-6 items-center justify-center rounded-full bg-red-500/15">
          <X className="size-3.5 text-red-400" />
        </span>
      </span>
    )
  }
  return <span className="text-[0.85rem] text-white/70">{value}</span>
}

export function Comparison() {
  return (
    <section id="comparativo" className="relative py-32 sm:py-44">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.4) 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <Container>
        <SectionHeading
          eyebrow="Comparativo"
          title="Por que escolher a Central Play Plus?"
          description="Veja como nos comparamos com outras opções do mercado"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          {/* Header row */}
          <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.02]">
            <div className="p-4 sm:p-5">
              <span className="text-[0.8rem] font-medium text-white/40">Recurso</span>
            </div>
            <div className="flex flex-col items-center justify-center border-l border-white/10 bg-primary/8 p-4 sm:p-5">
              <span className="flex items-center gap-1.5 text-[0.85rem] font-bold text-primary sm:text-[0.95rem]">
                <Sparkles className="size-4" />
                Central Play
              </span>
            </div>
            <div className="flex items-center justify-center border-l border-white/10 p-4 sm:p-5">
              <span className="text-[0.8rem] font-medium text-white/50 sm:text-[0.85rem]">Netflix</span>
            </div>
            <div className="flex items-center justify-center border-l border-white/10 p-4 sm:p-5">
              <span className="text-[0.8rem] font-medium text-white/50 sm:text-[0.85rem]">TV a cabo</span>
            </div>
          </div>

          {/* Data rows */}
          {FEATURES.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="grid grid-cols-4 border-b border-white/5 last:border-b-0"
            >
              <div className="flex items-center p-4 sm:p-5">
                <span className="text-[0.8rem] font-medium text-white/70 sm:text-[0.85rem]">{row.feature}</span>
              </div>
              <div className="flex items-center justify-center border-l border-white/10 bg-primary/5 p-4 text-center sm:p-5">
                <CellValue value={row.us} />
              </div>
              <div className="flex items-center justify-center border-l border-white/10 p-4 text-center sm:p-5">
                <CellValue value={row.netflix} />
              </div>
              <div className="flex items-center justify-center border-l border-white/10 p-4 text-center sm:p-5">
                <CellValue value={row.tvCabo} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA below table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-[0.9rem] text-white/50">
            Mais conteúdo, menos custo, suporte de verdade.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
