"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "whatsapp"
  size?: "default" | "lg"
  children: React.ReactNode
  asChild?: boolean
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ variant = "primary", size = "default", className, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-300",
          size === "default" && "px-6 py-3 text-sm",
          size === "lg" && "px-8 py-4 text-base",
          variant === "primary" &&
            "bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_0_30px_-5px] hover:shadow-primary/50",
          variant === "secondary" &&
            "border border-border/60 bg-card/80 text-foreground backdrop-blur-md hover:border-border hover:bg-card",
          variant === "whatsapp" &&
            "bg-whatsapp text-whatsapp-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset] hover:shadow-[0_0_30px_-5px] hover:shadow-whatsapp/50",
          className,
        )}
        {...props}
      >
        {/* Shine effect */}
        <span
          className={cn(
            "absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full",
            variant === "secondary" && "via-white/10",
          )}
        />
        
        {/* Glow layer */}
        <span
          className={cn(
            "absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100",
            variant === "primary" && "bg-primary/60",
            variant === "whatsapp" && "bg-whatsapp/60",
          )}
        />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    )
  },
)
GlowButton.displayName = "GlowButton"
