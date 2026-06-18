'use client'

import React, { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'

export function CodingStats() {
  const [lcData, setLcData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const fetchLeetCode = async () => {
      try {
        const res = await fetch('https://alfa-leetcode-api.onrender.com/Akshat185/solved')
        const data = await res.json()
        if (data && data.solvedProblem !== undefined) {
          setLcData(data)
        }
      } catch (e) {
        console.error("Failed to fetch LeetCode data", e)
      } finally {
        setLoading(false)
      }
    }
    fetchLeetCode()
  }, [])

  if (!mounted) return null

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 w-full scroll-mt-24"
      id="coding-stats"
    >
      <h3 className="mb-6 text-lg font-medium text-zinc-900 dark:text-zinc-100">Coding Activity</h3>
      
      <div className="flex flex-col gap-6 pt-2">
        {/* GitHub Contribution Graph */}
        <div className="rounded-2xl border border-zinc-200 bg-white/50 p-5 shadow-sm backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/50">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-mono flex items-center gap-2">
              GitHub Contributions
              <a href="https://github.com/kankaniakshat185" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
              </a>
            </h4>
          </div>
          <div className="overflow-x-auto pb-2 flex justify-center w-full">
            <div className="inline-flex min-w-max">
              <GitHubCalendar 
                username="kankaniakshat185" 
                colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                blockSize={9}
                blockMargin={3}
                fontSize={10}
                theme={{
                  light: ['#f4f4f5', '#d4d4d8', '#a1a1aa', '#71717a', '#3f3f46'],
                  dark: ['#18181b', '#27272a', '#3f3f46', '#52525b', '#71717a']
                }}
              />
            </div>
          </div>
        </div>

        {/* LeetCode Stats */}
        <div className="rounded-2xl border border-zinc-200 bg-white/50 p-5 shadow-sm backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/50 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-mono flex items-center gap-2">
              LeetCode
              <a href="https://leetcode.com/u/Akshat185/" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.384 1.384 0 0 0-.207-1.953l-3.5-2.831c-2.276-1.834-5.183-1.543-7.27.702l-2.072 2.22-3.14-3.364A1.376 1.376 0 0 0 0 4.22c0 .368.144.733.432 1.013l3.224 3.454.004.004c.005.006.01.011.016.017l-.014.015-3.085 3.303a1.378 1.378 0 0 0 1.956 1.95l3.155-3.376.012-.012 2.062-2.21A2.695 2.695 0 0 1 8.877 7.7a2.804 2.804 0 0 1 1.045-.296c.725-.064 1.466.19 1.996.721l3.5 2.83c.594.48 1.461.388 1.957-.206a1.384 1.384 0 0 0-.207-1.953l-3.5-2.831A1.372 1.372 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"></path></svg>
              </a>
            </h4>
            {lcData && (
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span className="font-bold text-zinc-900 dark:text-zinc-100">{lcData.solvedProblem}</span> Solved
              </div>
            )}
          </div>
          
          {loading ? (
            <div className="flex h-full items-center justify-center min-h-[60px]">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-600 dark:border-zinc-700 dark:border-t-zinc-400" />
            </div>
          ) : lcData ? (
            <div className="w-full">
              <div className="space-y-4 w-full">
                {/* Easy */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-zinc-500 dark:text-zinc-400">Easy</span>
                    <span className="text-zinc-600 dark:text-zinc-400 font-bold">{lcData.easySolved}</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-400 dark:bg-zinc-500" style={{ width: `${(lcData.easySolved / lcData.solvedProblem) * 100}%` }} />
                  </div>
                </div>
                
                {/* Medium */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-zinc-600 dark:text-zinc-300">Medium</span>
                    <span className="text-zinc-600 dark:text-zinc-400 font-bold">{lcData.mediumSolved}</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-600 dark:bg-zinc-400" style={{ width: `${(lcData.mediumSolved / lcData.solvedProblem) * 100}%` }} />
                  </div>
                </div>
                
                {/* Hard */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-zinc-800 dark:text-zinc-200">Hard</span>
                    <span className="text-zinc-600 dark:text-zinc-400 font-bold">{lcData.hardSolved}</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-800 dark:bg-zinc-200" style={{ width: `${(lcData.hardSolved / lcData.solvedProblem) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-zinc-500 min-h-[60px]">
              Stats unavailable
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}
