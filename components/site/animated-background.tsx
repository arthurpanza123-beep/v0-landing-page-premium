"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      hue: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.5 + 0.1
        this.hue = Math.random() * 60 + 200 // Blue to purple range
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = canvas!.width
        if (this.x > canvas!.width) this.x = 0
        if (this.y < 0) this.y = canvas!.height
        if (this.y > canvas!.height) this.y = 0

        // Subtle pulsing
        this.opacity = 0.15 + Math.sin(time * 0.001 + this.x * 0.01) * 0.1
      }

      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`
        ctx!.fill()
      }
    }

    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 25000)
      particles = Array.from({ length: Math.min(particleCount, 80) }, () => new Particle())
    }

    const drawGrid = () => {
      const gridSize = 80
      const gridOpacity = 0.03 + Math.sin(time * 0.0005) * 0.01

      ctx.strokeStyle = `rgba(100, 150, 255, ${gridOpacity})`
      ctx.lineWidth = 0.5

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    const drawGradientOrbs = () => {
      // Floating blue orb - top left
      const orb1X = canvas.width * 0.2 + Math.sin(time * 0.0003) * 100
      const orb1Y = canvas.height * 0.3 + Math.cos(time * 0.0004) * 80
      const gradient1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, 400)
      gradient1.addColorStop(0, "rgba(59, 130, 246, 0.12)")
      gradient1.addColorStop(0.5, "rgba(59, 130, 246, 0.04)")
      gradient1.addColorStop(1, "transparent")
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Floating purple orb - bottom right
      const orb2X = canvas.width * 0.8 + Math.cos(time * 0.00025) * 120
      const orb2Y = canvas.height * 0.7 + Math.sin(time * 0.00035) * 100
      const gradient2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, 350)
      gradient2.addColorStop(0, "rgba(139, 92, 246, 0.08)")
      gradient2.addColorStop(0.5, "rgba(139, 92, 246, 0.03)")
      gradient2.addColorStop(1, "transparent")
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Floating cyan orb - center
      const orb3X = canvas.width * 0.5 + Math.sin(time * 0.0002) * 150
      const orb3Y = canvas.height * 0.5 + Math.cos(time * 0.0003) * 100
      const gradient3 = ctx.createRadialGradient(orb3X, orb3Y, 0, orb3X, orb3Y, 300)
      gradient3.addColorStop(0, "rgba(34, 211, 238, 0.05)")
      gradient3.addColorStop(0.5, "rgba(34, 211, 238, 0.02)")
      gradient3.addColorStop(1, "transparent")
      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const animate = () => {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient orbs first (background)
      drawGradientOrbs()

      // Draw subtle grid
      drawGrid()

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-50"
      aria-hidden="true"
    />
  )
}
