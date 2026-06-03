"use client"

import { motion } from "motion/react"
import { ChevronDown } from "lucide-react"

interface ScrollIndicatorProps {
  targetId?: string
  className?: string
}

export function ScrollIndicator({ targetId = "como-funciona", className }: ScrollIndicatorProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className={`group flex flex-col items-center gap-2 ${className}`}
      aria-label="Role para baixo"
    >
      <span className="text-xs font-medium uppercase tracking-widest text-white/40">
        Descubra
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06]"
      >
        <ChevronDown className="size-5 text-white/50 transition-colors group-hover:text-white/70" />
      </motion.div>
    </motion.button>
  )
}
