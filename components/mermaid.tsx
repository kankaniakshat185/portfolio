'use client'

import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral',
      securityLevel: 'loose',
      fontFamily: 'inherit',
    })

    const renderChart = async () => {
      if (ref.current && chart) {
        try {
          // Generate a random ID for the SVG
          const id = `mermaid-${Math.random().toString(36).substring(7)}`
          const { svg } = await mermaid.render(id, chart)
          if (ref.current) {
            ref.current.innerHTML = svg
          }
        } catch (error) {
          console.error("Mermaid render error:", error)
        }
      }
    }

    renderChart()
  }, [chart])

  return (
    <div 
      ref={ref} 
      className="flex justify-center items-center w-full min-h-[300px] bg-white dark:bg-zinc-900 rounded-xl p-4 overflow-auto" 
    />
  )
}
