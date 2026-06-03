"use client"

import { useRef, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  as?: "button" | "a"
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  as = "button",
  href,
  target,
  rel,
  onClick,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = (e.clientX - centerX) * strength
    const distanceY = (e.clientY - centerY) * strength
    setPosition({ x: distanceX, y: distanceY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const Component = as === "a" ? motion.a : motion.button

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        href={as === "a" ? href : undefined}
        target={as === "a" ? target : undefined}
        rel={as === "a" ? rel : undefined}
        onClick={onClick}
        type={as === "button" ? type : undefined}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 350, damping: 15 }}
        className={cn(className)}
      >
        {children}
      </Component>
    </div>
  )
}
