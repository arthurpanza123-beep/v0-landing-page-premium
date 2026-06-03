"use client"

import { motion } from "motion/react"
import { Star, Quote } from "lucide-react"
import { Container, Eyebrow } from "./section"

const TESTIMONIALS = [
  {
    name: "Carlos M.",
    location: "Rio de Janeiro, RJ",
    text: "Achei que ia ser complicado, mas em 10 minutos já estava funcionando. O suporte é muito atencioso.",
    rating: 5,
    plan: "Trimestral",
  },
  {
    name: "Ana Paula S.",
    location: "São Paulo, SP",
    text: "Melhor custo-benefício que já encontrei. Minha família toda assiste, em TVs diferentes, sem travar.",
    rating: 5,
    plan: "Anual",
  },
  {
    name: "Roberto F.",
    location: "Belo Horizonte, MG",
    text: "Não entendo muito de tecnologia, mas eles configuraram tudo pra mim pelo WhatsApp. Recomendo demais!",
    rating: 5,
    plan: "Semestral",
  },
  {
    name: "Juliana R.",
    location: "Curitiba, PR",
    text: "Cancelei a TV a cabo e economizo mais de R$ 200 por mês. A qualidade é excelente, sem travamentos.",
    rating: 5,
    plan: "Anual",
  },
]

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.18 255 / 0.3) 0%, transparent 60%)", filter: "blur(100px)" }}
      />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/55">
            Mais de 2.500 clientes satisfeitos em todo o Brasil
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-8 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-5 sm:gap-12"
        >
          {[
            { value: "+2.500", label: "Clientes ativos" },
            { value: "4.9", label: "Avaliação média", icon: true },
            { value: "98%", label: "Satisfação" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</span>
                {stat.icon && <Star className="size-5 fill-amber-400 text-amber-400" />}
              </div>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
            >
              {/* Quote icon */}
              <Quote className="absolute right-4 top-4 size-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Text */}
              <p className="mt-4 flex-1 text-[0.9rem] leading-relaxed text-white/70">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* Author */}
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-white/40">{testimonial.location}</p>
                </div>
                <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[0.7rem] font-medium text-primary">
                  Plano {testimonial.plan}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
