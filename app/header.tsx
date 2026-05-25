'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

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
          href="https://www.linkedin.com/in/akshat-kankani/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-800"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href="https://github.com/kankaniakshat185"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-800"
          aria-label="GitHub Profile"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}
