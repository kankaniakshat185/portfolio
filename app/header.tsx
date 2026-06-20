'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { Github, Linkedin, FileText } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Akshat Kankani
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Computer Science Undergraduate
        </TextEffect>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800"
          aria-label="Resume PDF"
        >
          <FileText className="h-4 w-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshat-kankani/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href="https://github.com/kankaniakshat185"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800"
          aria-label="GitHub Profile"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}

export function Navbar() {
  const pathname = usePathname()

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="sticky top-6 z-50 mb-8 flex w-full items-center gap-1 rounded-full bg-white/60 p-1 backdrop-blur-lg shadow-lg shadow-zinc-200/20 dark:bg-zinc-950/60 dark:shadow-none">
      {[
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Tech Stack', id: 'tech-stack' },
        { label: 'Activity', id: 'coding-stats' },
        { label: 'Blogs', id: 'blogs' },
        { label: 'Connect', id: 'contact' },
      ].map((item) => (
        <Link
          key={item.id}
          href={`/#${item.id}`}
          onClick={(e) => scrollTo(e, item.id)}
          className="group flex-1 rounded-full px-2 py-2.5 text-center text-xs sm:text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-100/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-50"
        >
          <span className="relative inline-block">
            {item.label}
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-zinc-900 transition-all duration-300 group-hover:w-full dark:bg-zinc-50"></span>
          </span>
        </Link>
      ))}
    </nav>
  )
}

