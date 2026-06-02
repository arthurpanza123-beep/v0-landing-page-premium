"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface AnnouncementBadgeProps {
  children: React.ReactNode
  icon?: React.ReactNode
  pulse?: boolean
  className?: string
}

export function AnnouncementBadge({
  children,
  icon,
  pulse = true,
  className,
}: AnnouncementBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card",
        className,
      )}
    >
      {/* Glow effect on hover */}
      <span className="absolute inset-0 -z-10 rounded-full bg-primary/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Pulse indicator */}
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      )}
      
      {icon && <span className="text-primary">{icon}</span>}
      
      <span className="text-foreground/90">{children}</span>
      
      {/* Subtle gradient border */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-transparent to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }} />
    </motion.div>
  )
}
