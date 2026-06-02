"use client"

import { useEffect, useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import { NAV_LINKS, WHATSAPP_DEFAULT } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition-all duration-300 sm:px-5",
          scrolled && "glass border-border/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]",
        )}
      >
        <a href="#inicio" aria-label="Central Play Plus — início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </Button>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-lg border border-border/60 text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl glass border border-border/60 p-3 lg:hidden"
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
