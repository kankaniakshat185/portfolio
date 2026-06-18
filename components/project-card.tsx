'use client'

import { useState } from 'react'
import { Github, LinkIcon, ChevronDown, ChevronUp, Network, XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import type { PROJECTS } from '@/app/data'
import { PROJECT_DIAGRAMS } from '@/app/diagrams'
import { Mermaid } from '@/components/mermaid'

type Project = typeof PROJECTS[0]

export function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
      className="group relative rounded-2xl -mx-6 p-6 transition-colors duration-300 hover:bg-zinc-50/30 dark:hover:bg-zinc-900/10"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              className="font-medium text-base text-zinc-900 dark:text-zinc-50 hover:underline flex items-center gap-1"
              href={project.liveLink || project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
              <span className="text-zinc-400 dark:text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sm">
                ↗
              </span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-all duration-200 hover:text-zinc-950 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-900"
              aria-label="Toggle Description"
            >
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {PROJECT_DIAGRAMS[project.id] && (
              <MorphingDialog
                transition={{
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                }}
              >
                <MorphingDialogTrigger>
                  <div
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-all duration-200 hover:text-zinc-950 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-900 cursor-pointer"
                    aria-label="View Architecture"
                  >
                    <Network className="h-3.5 w-3.5" />
                  </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                  <MorphingDialogContent className="relative rounded-2xl bg-white p-2 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 sm:p-4 max-w-4xl w-[90vw]">
                    <div className="w-full max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50">
                      <Mermaid chart={PROJECT_DIAGRAMS[project.id]} />
                    </div>
                  </MorphingDialogContent>
                  <MorphingDialogClose
                    className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1 z-50 cursor-pointer"
                    variants={{
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: { delay: 0.3, duration: 0.1 },
                      },
                      exit: { opacity: 0, transition: { duration: 0 } },
                    }}
                  >
                    <XIcon className="h-5 w-5 text-zinc-500" />
                  </MorphingDialogClose>
                </MorphingDialogContainer>
              </MorphingDialog>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-all duration-200 hover:text-zinc-950 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-900"
                aria-label="Live Demo"
              >
                <LinkIcon className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-all duration-200 hover:text-zinc-950 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-900"
                aria-label="GitHub Repository"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="relative mt-3.5">
                <ul className="space-y-2 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {project.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-mono">
          <span className="font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mr-1">
            Stack:
          </span>
          {project.techStack.map((tech, idx) => (
            <div key={tech} className="flex items-center">
              <span className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors duration-200 cursor-default">
                {tech}
              </span>
              
              {idx < project.techStack.length - 1 && (
                <span className="ml-2.5 text-zinc-300 dark:text-zinc-800 font-mono select-none">
                  /
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
