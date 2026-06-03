"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [hoverText, setHoverText] = useState("")
  
  // Raw mouse position (instant)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Dot follows instantly (very stiff spring)
  const dotSpring = { damping: 50, stiffness: 800, mass: 0.1 }
  const dotX = useSpring(mouseX, dotSpring)
  const dotY = useSpring(mouseY, dotSpring)
  
  // Ring follows with more lag (creates trailing effect)
  const ringSpring = { damping: 30, stiffness: 200, mass: 0.5 }
  const ringX = useSpring(mouseX, ringSpring)
  const ringY = useSpring(mouseY, ringSpring)
  
  // Outer glow follows with even more lag
  const glowSpring = { damping: 20, stiffness: 100, mass: 0.8 }
  const glowX = useSpring(mouseX, glowSpring)
  const glowY = useSpring(mouseY, glowSpring)

  // Rotation based on movement velocity
  const rotation = useTransform(
    [dotX, dotY, ringX, ringY],
    ([dx, dy, rx, ry]: number[]) => {
      const deltaX = dx - rx
      const deltaY = dy - ry
      return Math.atan2(deltaY, deltaX) * (180 / Math.PI)
    }
  )

  useEffect(() => {
    setIsMounted(true)
    
    // Only show on desktop
    if (window.innerWidth < 1024) return
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest("button, a, [role='button'], input, textarea, select, [data-cursor]")
      if (interactive) {
        setIsHovering(true)
        // Check for custom cursor text
        const cursorText = interactive.getAttribute("data-cursor")
        if (cursorText) setHoverText(cursorText)
      }
    }
    
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("button, a, [role='button'], input, textarea, select, [data-cursor]")) {
        setIsHovering(false)
        setHoverText("")
      }
    }
    
    const handleMouseLeave = () => {
      setIsVisible(false)
    }
    
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseover", handleMouseOver, { passive: true })
    document.addEventListener("mouseout", handleMouseOut, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [mouseX, mouseY, isVisible])

  if (!isMounted) return null

  return (
    <>
      {/* Outer glow - slowest, biggest */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{ x: glowX, y: glowY }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isVisible ? (isHovering ? 0.4 : 0.2) : 0,
        }}
        transition={{ opacity: { duration: 0.3 } }}
      >
        <div 
          className="relative -translate-x-1/2 -translate-y-1/2"
          style={{ width: 120, height: 120 }}
        >
          <motion.div 
            className="absolute inset-0 rounded-full"
            animate={{
              scale: isHovering ? 1.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              background: "radial-gradient(circle, oklch(0.62 0.18 255 / 0.4) 0%, oklch(0.72 0.14 65 / 0.1) 40%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </div>
      </motion.div>

      {/* Ring - medium speed */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x: ringX, y: ringY, rotate: rotation }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ opacity: { duration: 0.2 } }}
      >
        <motion.div 
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isClicking ? 28 : isHovering ? 50 : 36,
            height: isClicking ? 28 : isHovering ? 50 : 36,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Animated ring border */}
          <motion.div 
            className="absolute inset-0 rounded-full"
            animate={{
              borderWidth: isHovering ? 2 : 1.5,
              borderColor: isHovering 
                ? "oklch(0.62 0.18 255 / 0.8)" 
                : "oklch(0.62 0.18 255 / 0.5)",
            }}
            style={{
              borderStyle: "solid",
              boxShadow: isHovering 
                ? "0 0 20px oklch(0.62 0.18 255 / 0.5), inset 0 0 10px oklch(0.62 0.18 255 / 0.2)" 
                : "0 0 10px oklch(0.62 0.18 255 / 0.3)",
            }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Hover text */}
          {hoverText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center text-[0.6rem] font-semibold text-primary"
            >
              {hoverText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Center dot - fastest, most precise */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000]"
        style={{ x: dotX, y: dotY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ opacity: { duration: 0.15 } }}
      >
        <motion.div 
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
          animate={{
            width: isClicking ? 3 : isHovering ? 6 : 4,
            height: isClicking ? 3 : isHovering ? 6 : 4,
            opacity: isHovering && hoverText ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            boxShadow: "0 0 8px oklch(0.62 0.18 255 / 0.8)",
          }}
        />
      </motion.div>
    </>
  )
}
