"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Clock, Flame } from "lucide-react"

// Calculate time until end of day (for "oferta válida até hoje")
function getTimeUntilMidnight() {
  const now = new Date()
  const midnight = new Date(now)
  midnight.setHours(23, 59, 59, 999)
  return midnight.getTime() - now.getTime()
}

function formatTime(ms: number) {
  const hours = Math.floor(ms / (1000 * 60 * 60))
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((ms % (1000 * 60)) / 1000)
  return {
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  }
}

export function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const { hours, minutes, seconds } = formatTime(timeLeft)

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative overflow-hidden bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 border-b border-amber-500/20"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 sm:gap-4 sm:py-3">
        <div className="flex items-center gap-2">
          <Flame className="size-4 text-amber-400 animate-pulse" />
          <span className="text-[0.8rem] font-medium text-amber-200/90 sm:text-[0.85rem]">
            Oferta válida até hoje
          </span>
        </div>
        
        <span className="hidden h-4 w-px bg-amber-500/30 sm:block" />
        
        <div className="flex items-center gap-1.5">
          <Clock className="size-3.5 text-amber-400/70" />
          <div className="flex items-center gap-1 font-mono text-[0.85rem] font-semibold text-white sm:text-[0.9rem]">
            <span className="rounded bg-amber-500/20 px-1.5 py-0.5">{hours}</span>
            <span className="text-amber-400">:</span>
            <span className="rounded bg-amber-500/20 px-1.5 py-0.5">{minutes}</span>
            <span className="text-amber-400">:</span>
            <span className="rounded bg-amber-500/20 px-1.5 py-0.5">{seconds}</span>
          </div>
        </div>

        <span className="hidden h-4 w-px bg-amber-500/30 lg:block" />
        
        <span className="hidden text-[0.8rem] text-amber-200/70 lg:inline">
          Aproveite o desconto especial
        </span>
      </div>
      
      {/* Subtle animated gradient */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(251,191,36,0.1) 50%, transparent 100%)",
          animation: "shimmer 3s ease-in-out infinite",
        }}
      />
    </motion.div>
  )
}
