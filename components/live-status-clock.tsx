'use client'

export function LiveStatusClock() {
  return (
    <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-xs font-medium text-zinc-500 dark:text-zinc-400">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
      </span>
      <span>Active &amp; Building</span>
    </div>
  )
}
