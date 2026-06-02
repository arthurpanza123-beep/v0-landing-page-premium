"use client"

import { motion } from "motion/react"
import { Clock, Headphones, ShieldCheck, MessageCircle, Wallet } from "lucide-react"
import { Container } from "./section"

const ITEMS = [
  { icon: Clock, label: "Configuração em minutos" },
  { icon: Headphones, label: "Suporte humano real" },
  { icon: MessageCircle, label: "Atendimento no WhatsApp" },
  { icon: Wallet, label: "Pagamento via Pix" },
  { icon: ShieldCheck, label: "Sem fidelidade" },
]

export function TrustBar() {
  return (
    <section aria-label="Diferenciais" className="relative border-y border-border/50 bg-card/30 py-7">
      <Container>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:justify-between"
        >
          {ITEMS.map((item) => (
            <motion.li
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground"
            >
              <item.icon className="size-4 text-primary" />
              {item.label}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
