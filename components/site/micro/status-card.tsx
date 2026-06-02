"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface StatusCardProps {
  icon: React.ReactNode
  title: string
  subtitle?: string
  variant?: "default" | "success" | "accent"
  className?: string
  delay?: number
}

export function StatusCard({
  icon,
  title,
  subtitle,
  variant = "default",
  className,
  delay = 0,
}: StatusCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02, y: -2 }}
      className={cn(
        "group relative flex items-center gap-2.5 rounded-xl border px-3 py-2 backdrop-blur-md transition-all duration-300",
        variant === "default" && "border-white/12 bg-black/35 hover:bg-black/45",
        variant === "success" && "border-white/10 bg-black/40 hover:bg-black/50",
        variant === "accent"  && "border-primary/20 bg-black/40 hover:border-primary/35",
        className,
      )}
    >
      {/* Ambient glow */}
      <span
        className={cn(
          "absolute inset-0 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60",
          variant === "default" && "bg-foreground/5",
          variant === "success" && "bg-emerald-500/20",
          variant === "accent" && "bg-primary/20",
        )}
      />
      
      {/* Icon container */}
      <div
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-colors duration-300",
          variant === "default" && "bg-white/10 text-white/70",
          variant === "success" && "bg-emerald-500/20 text-emerald-400",
          variant === "accent"  && "bg-primary/20 text-primary",
        )}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <span className="text-[0.78rem] font-semibold leading-tight text-white/90">
          {title}
        </span>
        {subtitle && (
          <span
            className={cn(
              "text-[0.7rem] leading-tight",
              variant === "success" ? "text-emerald-400/75" : "text-white/45",
            )}
          >
            {subtitle}
          </span>
        )}
      </div>
    </motion.div>
  )
}
