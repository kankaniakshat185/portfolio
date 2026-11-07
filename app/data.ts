type Project = {
  name: string
  description: string[]
  techStack: string[]
  liveLink?: string
  githubLink?: string
  id: string
  categories: string[]
  defaultExpanded?: boolean
  techDetails?: Record<string, string>
  collaborator?: {
    name: string
    githubLink: string
  }
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  collaborator?: {
    name: string
    githubLink: string
  }
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  date: string
  readingTime: string
  githubLink?: string
  liveLink?: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Chronos',
    description: [
      'Built a Kubernetes-style orchestrator in Python with a versioned CAS store, filter/score scheduler, level-triggered reconciliation and rolling updates.',
      'Designed self-fencing nodes timed from heartbeat send time, guaranteeing no duplicate replicas under pause, crash and partition, with failed-node workloads replaced in 5.3 s.',
      'Implemented a write-ahead log with group commit and snapshots, raising durable writes 11× (300 → 3,393/s) and cutting 1M-record recovery from 124 s to 0.22 s.',
      'Profiled the scheduler and found 85% of time spent deep-copying cached nodes; a read-only cache view made it 2.8–3.9× faster (221 pods/s at 100 nodes).'
    ],
    techStack: ['Python', 'FastAPI', 'Prometheus', 'Grafana', 'GitHub Actions'],
    githubLink: 'https://github.com/kankaniakshat185/Chronos',
    id: 'project9',
    categories: ['Systems', 'Backend'],
    defaultExpanded: true,
  },
  {
    name: 'Strata',
    description: [
      'Built a C++ time-series storage engine with write-ahead logging, crash recovery and LSM-style compaction.',
      'Implemented Gorilla-based compression using delta-of-delta and XOR encoding, reducing storage by 4.28×.',
      'Benchmarked a hash-indexed and a B+ tree index at 1M entries — hash map wins lookups (500ns vs 3.8μs), B+ tree wins prefix scans by 3.4×, each losing where expected.',
      'Proved crash safety via deterministic fault injection, killing the process at 7 exact code points mid-write/compaction with zero data loss.'
    ],
    techStack: ['C++', 'POSIX APIs (file I/O, fsync, signals)', 'Multithreading', 'Make'],
    githubLink: 'https://github.com/kankaniakshat185/strata',
    collaborator: {
      name: 'Vaishnavi Rai',
      githubLink: 'https://github.com/VaishnaviRai287'
    },
    id: 'project7',
    categories: ['Systems', 'Team Project'],
    defaultExpanded: true,
  },
  {
    name: 'Low-Latency Matching Engine',
    description: [
      'Built a C++ limit-order-book matching engine with price-time priority, partial fills, and O(1) cancels.',
      'Benchmarked four OrderBook data-structure designs from a tree-based map to a cached flat-index array, improving throughput 2.5–3.9× (up to 14.5M ops/sec).',
      'Diagnosed a 10.3% regression via hardware performance counters, traced to an uncached bitmap scan; fixed it with a cached best-price index, turning it into a 100.6% gain (up to 122% elsewhere).',
      'Verified every optimization with differential testing, requiring all four implementations to produce byte-identical trade ledgers on the same input before any performance number was trusted.'
    ],
    techStack: ['C++', 'CMake', 'GoogleTest', 'Hardware Performance Profiling'],
    githubLink: 'https://github.com/kankaniakshat185/low-latency-matching-engine',
    id: 'project6',
    categories: ['Systems'],
    defaultExpanded: true,
  },
  {
    name: 'Relay',
    description: [
      'Built an LLM-orchestrated context engine automating cross-tool workflows across GitHub, Slack, and Jira — 8 query modes helping teams find code, investigate issues, and capture engineering knowledge.',
      'Implemented hybrid keyword/vector retrieval and relevance scoring, separating true matches from noisy correlations across integrated systems.',
      'Built asynchronous background jobs with Celery and Redis for data ingestion and indexing, and a provider-agnostic LLM layer supporting OpenAI, Claude, Groq, and Gemini, backed by 300+ tests.',
      'Diagnosed and fixed live production failures — a Redis/TLS misconfiguration, a Celery rate-limit exhaustion incident, and a silently stalled job scheduler — using structured JSON logging, Sentry, and Postgres query-plan analysis.'
    ],
    techStack: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL/pgvector', 'RAG', 'Redis/Celery'],
    githubLink: 'https://github.com/kankaniakshat185/Relay',
    liveLink: 'https://therelay.vercel.app',
    id: 'project8',
    categories: ['Fullstack', 'Backend'],
    defaultExpanded: true,
  },
  {
    name: 'Custom Memory Allocator',
    description: [
      'Built a C++ heap allocator (malloc/free/realloc) from scratch with explicit free lists, block splitting, and O(1) boundary-tag coalescing, hardened against use-after-free, verified by fuzzing and sanitizer-clean tests.',
      'Benchmarked six allocator designs across four workloads, eliminating all fragmentation failures (9,293 → 0), cutting memory up to 2.7×, and running up to 1.32× faster than macOS malloc.',
      'Profiled hardware performance counters to show worst-case cost was memory-bound free-list walks (98% of time), which coalescing shrank 8.5×, making the worst case 2.9× faster.'
    ],
    techStack: ['C++', 'CMake', 'GoogleTest', 'Hardware Performance Profiling'],
    githubLink: 'https://github.com/kankaniakshat185/custom-memory-allocator',
    id: 'project10',
    categories: ['Systems'],
    defaultExpanded: true,
  },
  {
    name: 'PRScope - PR Review Intelligence',
    description: [
      'Built a Chrome extension performing secure code analysis on GitHub PRs — Bandit-based vulnerability scanning plus configurable architecture-rule enforcement — flagging risks before merge.',
      'Integrated LLMs (Gemini, OpenAI, Groq) for PR summaries, checklists, and review comments; cut calls per analysis from up to 14 to 2 and enforced structured JSON output after rate-limit and malformed-output failures.',
      'Architected a risk-scoring engine and an incident-retrieval feature matching PRs against 15 real software incidents (Log4Shell, GitLab, Knight Capital), validated at 93% precision@1.',
      'Debugged and resolved a production issue through structured troubleshooting — root-caused a race condition causing intermittent first-login 500s, fixed and backed by a regression test.'
    ],
    techStack: ['Python', 'Next.js', 'FastAPI', 'PostgreSQL', 'TailwindCSS', 'OAuth 2.0', 'ChromaDB', 'Tree-sitter'],
    liveLink: 'https://chromewebstore.google.com/detail/jfngcklfbiljgpoeehlkpkackahgopoc?utm_source=item-share-cb',
    githubLink: 'https://github.com/kankaniakshat185/prscope',
    id: 'project3',
    categories: ['Backend', 'Fullstack'],
    defaultExpanded: true,
    techDetails: {
      'Next.js': 'Chrome Extension UI',
      'FastAPI': 'Risk-scoring & AST parsing engine'
    }
  },
  {
    name: 'AlphaLab - α Factor Stress-testing Platform',
    description: [
      'Built a full-stack quant research platform for backtesting equity alpha factors, computing a deterministic Robustness Score across 18 stress scenarios to automatically flag overfit factors.',
      'Designed a custom DSL with a recursive-descent lexer, parser, and AST compiler that statically blocks look-ahead bias before execution, enforced through 48 dedicated test cases.',
      'Enforced rigorous code review and branch-protected version control in a 2-engineer team, gating every merge to main behind CI (GitHub Actions) and 104 tests.'
    ],
    techStack: ['Python', 'Next.js', 'FastAPI', 'PostgreSQL', 'DuckDB', 'Celery', 'Redis'],
    liveLink: 'https://alphalab-hq.vercel.app',
    githubLink: 'https://github.com/kankaniakshat185/alphalab',
    collaborator: {
      name: 'Vaishnavi Rai',
      githubLink: 'https://github.com/VaishnaviRai287'
    },
    id: 'project2',
    categories: ['Research', 'Backend', 'Fullstack', 'Team Project'],
    defaultExpanded: false,
    techDetails: {
      'Next.js': 'Frontend interface & Flow builder',
      'FastAPI': 'Backend API & Database Management',
      'Celery': 'Asynchronous task orchestration',
      'DuckDB': 'High-performance analytics engine'
    }
  },
  {
    name: 'BiasScope - News Sentiment and Bias Intelligence',
    description: [
      'Architected a distributed news-intelligence platform transforming multi-source media into structured claims, evidence graphs, and event-level intelligence through LLM-based extraction and transformer NLP.',
      'Engineered claim-centric retrieval and clustering with sentence-transformer embeddings, tuned cosine-similarity thresholds, HDBSCAN, and DeBERTa-v3 NLI, processing up to 100 articles per search and flagging contradictory claims.',
      'Built asynchronous FastAPI pipelines for ingestion, enrichment, clustering, and intelligence generation with Celery/Redis and SHA-256 LLM caching, validated by 220+ automated tests.'
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'Docker', 'Redis + Celery', 'Hugging Face', 'Prisma'],
    liveLink: 'https://biasscope-app.vercel.app',
    githubLink: 'https://github.com/kankaniakshat185/biasscope-app-frontend',
    id: 'project1',
    categories: ['AI/ML', 'Backend', 'Fullstack'],
    defaultExpanded: false,
    techDetails: {
      'Python': 'Backend service & data processing',
      'FastAPI': 'High-performance API endpoints',
      'Next.js': 'Frontend interface'
    }
  },
  {
    name: 'Custom-http-server',
    description: [
      'Built an HTTP/1.1 server and web framework from scratch in Python, using non-blocking epoll/kqueue I/O, a worker thread pool, keep-alive with pipelining, onion-style middleware and parametric routing.',
      'Designed a single-writer selector model, where only the event-loop thread touches the selector, workers post register/unregister actions to a queue, and a socketpair wakes the loop. This fixed a stall that limited a single client to 2.5 req/s, and throughput reached about 12K req/s.',
      'Fixed graceful shutdown, which hung on every open connection, so it now completes in about 0.5 s with up to 50 connections open.',
      'Hardened the server against abuse, with a realpath-based directory-traversal defense (including a prefix-bypass regression test), 16 KB header and 10 MB body limits and a 30 s idle timeout, all covered by a 33-test pytest suite running in GitHub Actions CI.'
    ],
    techStack: ['Python', 'HTTP Protocols', 'Socket Programming', 'Docker', 'Concurrency & Multithreading'],
    githubLink: 'https://github.com/kankaniakshat185/custom-http-server',
    id: 'project5',
    categories: ['Systems'],
    defaultExpanded: false,
    techDetails: {
      'Python': 'Low-level socket programming'
    }
  },
  {
    name: 'DataScope - ML Observability Intelligence',
    description: [
      'Built an ML dataset governance platform that scores data for leakage, missingness and synthetic identifiers, then marks it APPROVED, REVIEW or REJECTED before training.',
      'Implemented leakage detection with mutual information, standalone predictive power and feature ablation, separating true leakage from harmless correlation.',
      'Built consensus outlier detection (Z-Score, MAD, Isolation Forest, DBSCAN) and drift detection (PSI, KL divergence, Wasserstein distance, KS) to catch bad data and silent model degradation.',
      'Published the datascope-ml Python SDK on PyPI, with a deployment check that fails an Airflow or Prefect pipeline on rejected data, backed by a Next.js gateway, Neon Postgres and async FastAPI workers.'
    ],
    techStack: ['Python', 'Pandas', 'scikit-learn', 'PostgreSQL', 'FastAPI', 'Docker', 'Next.js'],
    liveLink: 'https://datascope-app.vercel.app',
    githubLink: 'https://github.com/kankaniakshat185/datascope-hf-backend',
    id: 'project4',
    categories: ['AI/ML', 'Backend', 'Fullstack'],
    defaultExpanded: false,
    techDetails: {
      'scikit-learn': 'Evaluation engine for metrics',
      'FastAPI': 'Real-time ML processing backend'
    }
  }
]

// export const WORK_EXPERIENCE: WorkExperience[] = [
//   {
//     company: 'Reglazed Studio',
//     title: 'CEO',
//     start: '2024',
//     end: 'Present',
//     link: 'https://ibelick.com',
//     id: 'work1',
//   },
//   {
//     company: 'Freelance',
//     title: 'Design Engineer',
//     start: '2022',
//     end: '2024',
//     link: 'https://ibelick.com',
//     id: 'work2',
//   },
//   {
//     company: 'Freelance',
//     title: 'Front-end Developer',
//     start: '2017',
//     end: 'Present',
//     link: 'https://ibelick.com',
//     id: 'work3',
//   },
// ]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Unrushed: The art, music and places that shape me',
    description: 'A deep dive into me and my interests',
    link: '/blog/a-deep-dive-into-me',
    uid: 'blog-1',
    date: 'Jun 2026',
    readingTime: '3 min read',
  },
  {
    title: 'Thinking in systems: How I learn Computer Science',
    description:
      'A deep dive into how I see Computers and my thoughts about everything related.',
    link: '/blog/thinking-in-systems',
    uid: 'blog-2',
    date: 'May 2026',
    readingTime: '4 min read',
  },
  {
    title: "The Life I'm trying to build",
    description:
      'An ever expanding page going deep into what I\'ve always dream\'t about and the goals I strive to achieve.',
    link: '/blog/my-dreams-and-goals',
    uid: 'blog-3',
    date: 'May 2026',
    readingTime: '5 min read',
  },
]

export const TECH_BLOG_POSTS: BlogPost[] = [
  // You can add technical blogs here, e.g.:
  // {
  //   title: 'Understanding Distributed Systems',
  //   description: 'A deep dive into how large scale systems communicate.',
  //   link: '/tech-blog/understanding-distributed-systems',
  //   uid: 'tech-blog-1',
  //   date: 'Oct 2026',
  //   readingTime: '5 min read',
  // },
  {
    title: 'Behind the Sockets: What I Learned Building a Python HTTP Server',
    description: 'a raw-socket http/1.1 server in python - the whole architecture, and the four real concurrency bugs a self-audit found in code i thought was already correct.',
    link: '/tech-blog/custom-http-server',
    uid: 'tech-blog-1',
    date: 'Aug 2026',
    readingTime: '32 min read',
    githubLink: 'https://github.com/kankaniakshat185/custom-http-server',
  },
  {
    title: 'Inside a 14.5M Ops/sec C++ Order Book Matching Engine',
    description: 'what got built: a limit order book, from scratch, in c++20. price-time priority matching, partial fills, market orders.',
    link: '/tech-blog/low-latency-matching-engine',
    uid: 'tech-blog-2',
    date: 'Aug 2026',
    readingTime: '40 min read',
  },
  {
    title: 'Strata: a Time-Series Database From Scratch in C++',
    description: 'a time-series database built from scratch in c++. custom bit-level compression, write-ahead log, memtable, and lsm-tree compaction.',
    link: '/tech-blog/strata',
    uid: 'tech-blog-3',
    date: 'Aug 2026',
    readingTime: '50 min read',
    githubLink: 'https://github.com/kankaniakshat185/strata',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Email',
    link: 'mailto:kankaniakshat185@gmail.com'
  },
  {
    label: 'Github',
    link: 'https://github.com/kankaniakshat185',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/akshat-kankani/',
  },
  {
    label: 'Leetcode',
    link: 'https://leetcode.com/u/Akshat185/'
  },
  {
    label: 'Resume',
    link: '/Resume.pdf'
  }
]

export const EMAIL = 'kankaniakshat185@gmail.com'
