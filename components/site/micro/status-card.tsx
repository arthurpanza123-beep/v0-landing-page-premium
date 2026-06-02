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
        "group relative flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 backdrop-blur-xl transition-all duration-300",
        variant === "default" && "border-border/50 bg-card/60 hover:border-border/80 hover:bg-card/80",
        variant === "success" && "border-emerald-500/25 bg-emerald-950/50 hover:border-emerald-500/40",
        variant === "accent" && "border-primary/30 bg-primary/10 hover:border-primary/50",
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
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors duration-300",
          variant === "default" && "bg-muted/80 text-foreground/80 group-hover:bg-muted",
          variant === "success" && "bg-emerald-500/20 text-emerald-400",
          variant === "accent" && "bg-primary/20 text-primary",
        )}
      >
        {icon}
      </div>
      
      {/* Content */}
      <div className="flex flex-col">
        <span className="text-[0.8rem] font-semibold leading-tight text-foreground">
          {title}
        </span>
        {subtitle && (
          <span
            className={cn(
              "text-[0.72rem] leading-tight",
              variant === "success" ? "text-emerald-400/80" : "text-muted-foreground",
            )}
          >
            {subtitle}
          </span>
        )}
      </div>
    </motion.div>
  )
}
