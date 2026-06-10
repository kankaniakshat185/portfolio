'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { XIcon, Github, LinkIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  //WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
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
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

const CATEGORIES = ['All', 'AI/ML', 'Backend', 'Fullstack', 'Systems']

export default function Personal() {
  const [activeCategory, setActiveCategory] = useState<string>('All')



  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >

      <div className="flex flex-col space-y-24">
        {/* About Section */}
        <motion.section
          id="about"
          className="scroll-mt-24 w-full"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <div className="flex-1 space-y-4">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
              I’m a Computer Science student specializing in Artificial Intelligence, with core interests in <span className="font-serif italic font-medium text-zinc-900 dark:text-zinc-100">backend engineering, distributed systems, machine learning, and scalable architectures</span>. I enjoy building applications that fuse rigorous software engineering with practical AI, specifically systems involving large-scale data pipelines, APIs, and intelligent workflows.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
              A large part of my learning currently revolves around understanding how modern software scales end-to-end—from backend service design to model orchestration. I'm particularly drawn to backend development using Python &amp; FastAPI, asynchronous event-driven architectures, caching, and database design.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base text-zinc-500">
              I prefer learning through building, focusing on applying theoretical concepts in real-world scenarios to design high-performance systems.
            </p>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="scroll-mt-24 w-full"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-4 text-lg font-medium">Education</h3>
          <div className="relative overflow-hidden rounded-2xl p-3 bg-zinc-50/30 dark:bg-zinc-900/10 transition-colors duration-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20">
            <div className="relative z-10 flex flex-col gap-1.5">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">July 2023 – May 2027</span>
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Manipal Institute of Technology</h4>
                <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
                  CGPA: 8.11
                </span>
              </div>
              <p className="text-base text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                Bachelor of Technology in Computer Science (Artificial Intelligence)
              </p>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="scroll-mt-24 w-full"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h3 className="text-lg font-medium">Selected Projects</h3>
            
            {/* Category filter tabs */}
            <div className="flex gap-1 p-1 rounded-full bg-white/60 backdrop-blur-lg shadow-lg shadow-zinc-200/20 dark:bg-zinc-950/60 dark:shadow-none border border-zinc-200/20 dark:border-zinc-800/20 w-fit">
              <AnimatedBackground
                defaultValue="All"
                onValueChange={(val) => setActiveCategory(val || 'All')}
                className="h-full rounded-full bg-white shadow-xs dark:bg-zinc-800"
                transition={{
                  type: 'spring',
                  bounce: 0,
                  duration: 0.25,
                }}
              >
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    data-id={cat}
                    className={`rounded-full px-3 py-1 text-xs font-medium cursor-pointer transition-colors ${
                      activeCategory === cat
                        ? 'text-zinc-900 dark:text-zinc-50'
                        : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </AnimatedBackground>
            </div>
          </div>

          <motion.div layout className="relative flex flex-col space-y-4">
            <AnimatePresence mode="wait">
              {PROJECTS.filter(
                (project) =>
                  activeCategory === 'All' ||
                  project.categories.includes(activeCategory)
              ).map((project) => {
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
                    key={project.id}
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
                            <span className="text-zinc-400 dark:text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sm">↗</span>
                          </a>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
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
                      <ul className="mt-3.5 space-y-2 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                        {project.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-mono">
                        <span className="font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mr-1">Stack:</span>
                        {project.techStack.map((tech, idx) => (
                          <div key={tech} className="flex items-center">
                            <span className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors duration-200 cursor-default">
                              {tech}
                            </span>
                            {idx < project.techStack.length - 1 && (
                              <span className="ml-2.5 text-zinc-300 dark:text-zinc-800 font-mono select-none">/</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          id="tech-stack"
          className="scroll-mt-24 w-full"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium">Tech Stack &amp; Interests</h3>
          <div className="divide-y divide-zinc-100 dark:divide-zinc-900/50">
            {[
              {
                category: 'Languages',
                items: ['Python', 'C', 'C++']
              },
              {
                category: 'Backend & Infrastructure',
                items: ['FastAPI', 'RESTful APIs', 'Redis', 'Docker', 'Kubernetes', 'Celery', 'Asynchronous Processing', 'System Design', 'Caching', 'Authentication']
              },
              {
                category: 'Databases',
                items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Relational Schema Design']
              },
              {
                category: 'Data Science & ML',
                items: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'PyTorch', 'HuggingFace', 'NLP', 'RAG']
              },
              {
                category: 'Core CS Concepts',
                items: ['Distributed & Scalable Systems', 'OOP', 'DBMS', 'OS', 'CN']
              },
              {
                category: 'Developer Tools',
                items: ['Git', 'GitHub', 'Postman', 'PowerBI', 'Vercel']
              }
            ].map((group) => (
              <div key={group.category} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-zinc-100 dark:border-zinc-900/50 last:border-b-0">
                <h4 className="w-full sm:w-1/4 text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-mono">{group.category}</h4>
                <div className="w-full sm:w-3/4 flex flex-wrap gap-x-3 gap-y-1.5 leading-relaxed">
                  {group.items.map((tech, idx) => (
                    <div key={tech} className="flex items-center text-sm">
                      <span className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors duration-200 cursor-default font-medium">
                        {tech}
                      </span>
                      {idx < group.items.length - 1 && (
                        <span className="ml-3 text-zinc-300 dark:text-zinc-800 font-mono text-xs select-none">/</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Blogs Section */}
        <motion.section
          id="blogs"
          className="scroll-mt-24 w-full"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-3 text-lg font-medium">Personal Blogs</h3>
          <div className="flex flex-col space-y-0">
            <AnimatedBackground
              enableHover
              className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
            >
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.uid}
                  className="-mx-3 rounded-xl px-3 py-3"
                  href={post.link}
                  data-id={post.uid}
                >
                  <div className="flex flex-col space-y-1">
                    <h4 className="font-normal dark:text-zinc-100">
                      {post.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </AnimatedBackground>
          </div>
        </motion.section>

        {/* Connect Section */}
        <motion.section
          id="contact"
          className="scroll-mt-24 w-full"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-4 text-lg font-medium">Connect</h3>
          
          <div className="space-y-6">
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
              I’m always open to discussing new opportunities, open-source projects, systems design, or anything tech-related. Drop me a line!
            </p>
            
            {/* Minimalist ledger-style links */}
            <div className="divide-y divide-zinc-100 dark:divide-zinc-900/50 border-t border-b border-zinc-100 dark:border-zinc-900/50">
              {[
                { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
                { label: 'GitHub', value: 'github.com/kankaniakshat185', href: 'https://github.com/kankaniakshat185' },
                { label: 'LinkedIn', value: 'linkedin.com/in/akshat-kankani', href: 'https://www.linkedin.com/in/akshat-kankani' },
                { label: 'LeetCode', value: 'leetcode.com/Akshat185', href: 'https://leetcode.com/u/Akshat185' },
                { label: 'Resume', value: 'View Resume (PDF)', href: '/Resume.pdf' },
              ].map((item) => (
                <div 
                  key={item.label}
                  className="flex items-baseline justify-between py-3 group"
                >
                  <span className="text-zinc-500 dark:text-zinc-400 tracking-wider uppercase text-[10px] font-mono font-bold">{item.label}</span>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors text-sm font-mono"
                    >
                      {item.value}
                    </a>
                    <span className="text-zinc-300 dark:text-zinc-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[10px]">↗</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.main>
  )
}


