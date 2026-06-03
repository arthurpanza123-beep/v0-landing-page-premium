"use client"

import { motion } from "motion/react"

interface SectionDividerProps {
  variant?: "wave" | "gradient" | "dots"
  flip?: boolean
}

export function SectionDivider({ variant = "gradient", flip = false }: SectionDividerProps) {
  if (variant === "wave") {
    return (
      <div className={`pointer-events-none relative h-16 w-full overflow-hidden ${flip ? "rotate-180" : ""}`} aria-hidden>
        <svg
          viewBox="0 0 1440 60"
          className="absolute bottom-0 w-full fill-background"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </svg>
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div className="flex items-center justify-center gap-2 py-8" aria-hidden>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="size-1.5 rounded-full bg-primary/30"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          />
        ))}
      </div>
    )
  }

  // Default gradient divider
  return (
    <motion.div
      className="relative h-px w-full overflow-hidden"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </motion.div>
  )
}
