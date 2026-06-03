"use client"

import { useEffect, useState } from "react"
import { MessageCircle, X, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { WHATSAPP_DEFAULT } from "@/lib/site"

export function WhatsappFloat() {
  const [visible, setVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
        >
          {/* Expanded tooltip card */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-64 rounded-2xl border border-white/12 bg-card/95 p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:w-72 sm:p-5"
              >
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute right-3 top-3 rounded-full p-1.5 text-white/40 transition-colors hover:bg-white/10 hover:text-white/70"
                  aria-label="Fechar"
                >
                  <X className="size-4" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-whatsapp/15 ring-1 ring-whatsapp/25">
                    <MessageCircle className="size-6 text-whatsapp" />
                  </div>
                  <div>
                    <p className="text-[0.95rem] font-semibold text-white">Fale com a gente</p>
                    <p className="flex items-center gap-1.5 text-[0.8rem] text-whatsapp">
                      <span className="size-1.5 animate-pulse rounded-full bg-whatsapp" />
                      Online agora
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[0.85rem] leading-relaxed text-white/55">
                  Tire suas dúvidas e comece a assistir hoje mesmo. Resposta em minutos.
                </p>
                <a
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp py-3.5 text-[0.9rem] font-semibold text-white transition-all duration-300 hover:bg-whatsapp/90 hover:shadow-[0_8px_28px_-6px_rgba(37,211,102,0.6)]"
                >
                  <MessageCircle className="size-4" />
                  Iniciar conversa
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB button - smaller on mobile */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isExpanded ? "Fechar chat" : "Abrir chat do WhatsApp"}
            className="group relative flex size-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_28px_-6px_rgba(37,211,102,0.6)] transition-all duration-300 hover:shadow-[0_12px_35px_-6px_rgba(37,211,102,0.7)] sm:size-14"
          >
            {/* Pulse ring animation */}
            {!isExpanded && (
              <span className="absolute inset-0 animate-pulse-ring rounded-full" />
            )}
            
            {/* Glow effect */}
            <span className="absolute inset-0 -z-10 rounded-full bg-whatsapp opacity-50 blur-lg transition-opacity group-hover:opacity-70" />
            
            {/* Icon */}
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              {isExpanded ? (
                <X className="size-5 sm:size-6" />
              ) : (
                <MessageCircle className="size-5 sm:size-6" />
              )}
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
