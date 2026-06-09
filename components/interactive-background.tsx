'use client'
import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      baseOpacity: number
      opacity: number
    }> = []

    const isHoverable = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const mouse = { x: -1000, y: -1000, active: false }

    const initCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }

    const initParticles = () => {
      particles = []
      // Increased particle count for more prominent stars
      const count = Math.min(100, Math.floor((width * height) / 10000))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: Math.random() * 2.2 + 0.8, // Larger particles
          baseOpacity: Math.random() * 0.22 + 0.15, // Higher base visibility
          opacity: 0,
        })
      }
    }

    const handleResize = () => {
      initCanvas()
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
      mouse.active = false
    }

    // Determine colors based on active theme
    const isDark = resolvedTheme === 'dark'
    const colorRGB = isDark ? '34, 211, 238' : '82, 82, 91' // Cyan for dark, Zinc-600 for light

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Gentle drift
        p.x += p.vx
        p.y += p.vy

        // Wrap around boundary coordinates
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        let targetOpacity = p.baseOpacity

        // Repulsion logic
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const activeRadius = 140

          if (dist < activeRadius) {
            const force = (activeRadius - dist) / activeRadius
            // Smoothly push particles slightly away
            p.x += (dx / dist) * force * 0.8
            p.y += (dy / dist) * force * 0.8
            // Boost opacity near cursor
            targetOpacity = p.baseOpacity + force * 0.45
          }
        }

        // Interpolate opacity for smoothness
        p.opacity += (targetOpacity - p.opacity) * 0.1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${colorRGB}, ${p.opacity})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    handleResize()
    draw()

    window.addEventListener('resize', handleResize)
    if (isHoverable) {
      window.addEventListener('mousemove', handleMouseMove)
      document.body.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      if (isHoverable) {
        window.removeEventListener('mousemove', handleMouseMove)
        document.body.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 h-full w-full opacity-70 dark:opacity-45 transition-opacity duration-300"
    />
  )
}
