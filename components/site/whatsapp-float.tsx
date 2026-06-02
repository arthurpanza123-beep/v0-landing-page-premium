"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { WHATSAPP_DEFAULT } from "@/lib/site"

export function WhatsappFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="group animate-pulse-ring fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-whatsapp py-3.5 pl-4 pr-5 text-whatsapp-foreground shadow-[0_12px_40px_-8px] shadow-whatsapp/70 sm:bottom-7 sm:right-7"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-whatsapp opacity-60 blur-md transition-opacity group-hover:opacity-90" />
          <MessageCircle className="size-6" />
          <span className="hidden text-sm font-semibold sm:inline">Falar no WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
