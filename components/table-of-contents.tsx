'use client'

import { useEffect, useState } from 'react'

export function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  useEffect(() => {
    // We use a small timeout to ensure the MDX has been fully rendered into the DOM.
    const extractHeadings = () => {
      const elements = Array.from(document.querySelectorAll('main.prose h2, main.prose h3'))
      const parsedHeadings = elements.map((el) => {
        if (!el.id) {
          // generate a simple ID if one isn't provided by MDX
          el.id = el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || ''
        }
        return {
          id: el.id,
          text: el.textContent || '',
          level: el.tagName === 'H2' ? 2 : 3,
        }
      })
      setHeadings(parsedHeadings)
    }

    setTimeout(extractHeadings, 100)
    
    // Also run on window load just in case it takes longer
    window.addEventListener('load', extractHeadings)
    return () => window.removeEventListener('load', extractHeadings)
  }, [])

  if (headings.length === 0) return null

  return (
    <div className="hidden xl:block fixed left-8 2xl:left-12 top-64 w-48 2xl:w-64 max-h-[calc(100vh-16rem)] overflow-y-auto z-40">
      <h4 className="text-xs font-semibold uppercase text-zinc-500 mb-6 tracking-[0.2em]">Contents</h4>
      <ul className="space-y-4 text-[0.9rem] text-zinc-500 dark:text-zinc-400 font-serif italic">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? 'ml-4' : ''}>
            <a 
              href={`#${h.id}`} 
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors block leading-relaxed"
            >
              {h.text.toLowerCase()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
