"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    setIsMounted(true)
    
    // Only show on desktop
    if (window.innerWidth < 1024) return
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }
    
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("button, a, [role='button'], input, textarea, select")) {
        setIsHovering(true)
      }
    }
    
    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("button, a, [role='button'], input, textarea, select")) {
        setIsHovering(false)
      }
    }
    
    const handleMouseOut = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)
    document.addEventListener("mouseleave", handleMouseOut)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
      document.removeEventListener("mouseleave", handleMouseOut)
    }
  }, [mouseX, mouseY, isVisible])

  // Don't render on server or mobile
  if (!isMounted) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-screen"
      style={{ x, y }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
    >
      <div 
        className="relative -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          transition: "width 0.2s, height 0.2s",
        }}
      >
        {/* Outer glow */}
        <div 
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, oklch(0.62 0.18 255 / 0.6) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
        {/* Inner dot */}
        <div 
          className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/80"
        />
      </div>
    </motion.div>
  )
}
