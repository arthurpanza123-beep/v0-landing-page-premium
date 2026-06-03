"use client"

import { useEffect, useState } from "react"
import { Menu, X, MessageCircle, Clock, Flame } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import { NAV_LINKS, WHATSAPP_DEFAULT } from "@/lib/site"
import { cn } from "@/lib/utils"

// Calculate time until end of day
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

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const { hours, minutes, seconds } = formatTime(timeLeft)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Urgency Banner */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 backdrop-blur-sm"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 sm:gap-4 sm:py-2.5">
            <div className="flex items-center gap-2">
              <Flame className="size-4 text-amber-400 animate-pulse" />
              <span className="text-[0.75rem] font-medium text-amber-200/90 sm:text-[0.8rem]">
                Oferta válida até hoje
              </span>
            </div>
            
            <span className="hidden h-3.5 w-px bg-amber-500/30 sm:block" />
            
            <div className="flex items-center gap-1.5">
              <Clock className="size-3 text-amber-400/70" />
              <div className="flex items-center gap-0.5 font-mono text-[0.75rem] font-semibold text-white sm:text-[0.8rem]">
                <span className="rounded bg-amber-500/25 px-1 py-0.5">{hours}</span>
                <span className="text-amber-400">:</span>
                <span className="rounded bg-amber-500/25 px-1 py-0.5">{minutes}</span>
                <span className="text-amber-400">:</span>
                <span className="rounded bg-amber-500/25 px-1 py-0.5">{seconds}</span>
              </div>
            </div>

            <span className="hidden h-3.5 w-px bg-amber-500/30 lg:block" />
            
            <span className="hidden text-[0.75rem] text-amber-200/70 lg:inline">
              Aproveite o desconto especial
            </span>
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <div className="px-5 pt-3 sm:px-8 sm:pt-4">
        <div
        className={cn(
          "mx-auto flex max-w-[1240px] items-center justify-between rounded-2xl border border-transparent px-5 py-3 transition-all duration-300 lg:py-3.5",
          scrolled
            ? "glass border-white/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)]"
            : "bg-black/20 backdrop-blur-sm",
        )}
      >
        <a href="#inicio" aria-label="Central Play Plus — início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-[0.875rem] font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden bg-whatsapp text-whatsapp-foreground shadow-[0_8px_24px_-8px] shadow-whatsapp/60 hover:bg-whatsapp/90 sm:inline-flex"
          >
            <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale no WhatsApp
            </a>
          </Button>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/[0.07] text-white backdrop-blur-sm transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-[1240px] rounded-2xl glass border border-border/60 p-3 lg:hidden"
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
              >
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  Falar no WhatsApp
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
