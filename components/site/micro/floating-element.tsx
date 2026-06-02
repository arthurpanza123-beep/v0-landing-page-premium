"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
}

export function FloatingElement({
  children,
  className,
  delay = 0,
  duration = 6,
  y = 12,
}: FloatingElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: [0, -y, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.6,
        },
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  )
}

interface GlowOrbProps {
  className?: string
  color?: "primary" | "accent" | "warm"
  size?: "sm" | "md" | "lg"
  intensity?: number
}

export function GlowOrb({
  className,
  color = "primary",
  size = "md",
  intensity = 0.6,
}: GlowOrbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: intensity, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        size === "sm" && "h-32 w-32",
        size === "md" && "h-64 w-64",
        size === "lg" && "h-96 w-96",
        color === "primary" && "bg-primary/40",
        color === "accent" && "bg-cyan-500/30",
        color === "warm" && "bg-amber-500/20",
        className,
      )}
    />
  )
}
