type Project = {
  name: string
  description: string[]
  techStack: string[]
  liveLink?: string
  githubLink?: string
  id: string
  categories: string[]
  techDetails?: Record<string, string>
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
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
    name: 'Low-Latency Matching-Engine',
    description: [
      'Built a C++20 limit order book and matching engine from scratch, implementing strict price-time priority matching with partial order fills.',
      'Designed and benchmarked four independent implementations of the order book\'s core data structure — a standard-library baseline, a custom memory pool, and two cache-optimized array-based variants — to directly compare their real-world performance impact.',
      'Achieved up to 14.5 million orders processed per second in the best-performing version — a 2.4x to 3.9x throughput improvement over the baseline, measured consistently across three distinct workload patterns.',
      'Verified correctness across all four implementations with differential testing: identical order sequences replayed through each version, comparing results before trusting any performance claim.',
      'Profiled with real hardware performance counters to confirm the true source of every bottleneck, not just wall-clock timing.',
      'Backed by 71 automated tests, 99% code coverage, and a 5-stage CI pipeline — including one performance trade-off that was identified, documented, and resolved in a later version.'
    ],
    techStack: ['C++20', 'CMake', 'GoogleTest', 'clang', 'GitHub Actions', 'Apple Instruments (os_signpost)'],
    githubLink: 'https://github.com/kankaniakshat185/low-latency-matching-engine',
    id: 'project6',
    categories: ['Systems'],
    techDetails: {
      'C++20': 'Low-latency systems programming'
    }
  },
  {
    name: 'Custom-http-server',
    description: [
      'Hybrid Concurrency Model: Async selectors (epoll/kqueue) event loop with a worker thread pool, single-writer selector queue, and per-connection locking — backed by a 33-test suite in CI.',
      'TCP Socket Management: Low-level binding, non-blocking listening, and accepting of raw network connections.',
      'Persistent Connections: Keep-Alive and request pipelining to reuse TCP connections across multiple requests.',
      'Content Negotiation: Dynamic gzip compression based on Accept-Encoding, skipped automatically for already-compressed content types.',
      'Dynamic Routing: URL path parsing with correct 404 vs. 405 semantics, plus request size and idle-timeout limits to resist abuse.',
      'File System Operations: Safely reads, writes, and deletes binary files, streaming large files in chunks with directory-traversal defense.',
    ],
    techStack: ['Python', 'HTTP Protocols', 'Socket Programming', 'Docker', 'Concurrency & Multithreading'],
    githubLink: 'https://github.com/kankaniakshat185/custom-http-server',
    id: 'project5',
    categories: ['Systems'],
    techDetails: {
      'Python': 'Low-level socket programming'
    }
  },
  {
    name: 'PRScope - PR Review Intelligence',
    description: [
      'Architected a Chrome Extension + FastAPI platform injecting deterministic PR risk scores and LLM-driven reviews directly into GitHub.',
      'Built a risk engine using real control-flow-graph complexity and Bandit security scanning — reproducible without any LLM call.',
      'Engineered multi-language (Python/JS/TS) call-graph analysis backed by a persisted, incrementally-updated repo index for cross-file blast-radius detection.',
      'Designed and evaluated a retrieval-augmented incident matcher — 93% precision@1 — catching a real calibration bug that hid correct matches from users.',
      'Automated CI-style analysis via debounced GitHub webhooks; cut LLM call volume ~85% with multi-provider failover with BYOK (Gemini/OpenAI/Groq) for resilience',
      'Extended the platform with team-scoped collaboration: shared review visibility, crowdsourced incidents, and one-click GitHub commit-status publishing.'
    ],
    techStack: ['Python', 'Next.js', 'FastAPI', 'PostgreSQL', 'TailwindCSS', 'OAuth 2.0', 'ChromaDB', 'Tree-sitter'],
    liveLink: 'https://chromewebstore.google.com/detail/jfngcklfbiljgpoeehlkpkackahgopoc?utm_source=item-share-cb',
    githubLink: 'https://github.com/kankaniakshat185/prscope',
    id: 'project3',
    categories: ['Backend', 'Fullstack'],
    techDetails: {
      'Next.js': 'Chrome Extension UI',
      'FastAPI': 'Risk-scoring & AST parsing engine'
    }
  },
  {
    name: 'AlphaLab - α Factor Stress-testing Platform',
    description: [
      'Interactive Quantitative Research: Architected a full-stack financial backtesting platform using Next.js and FastAPI, featuring an intuitive visual Flow page and a comprehensive technical glossary to make complex quantitative strategies accessible to all users.',
      'High-Performance Stress Testing: Integrated an embedded DuckDB analytics engine to query 5 years of daily NIFTY 50 market data, powering an intensive 18-fold robustness testing grid that stress-tests strategies against missing data and market noise in under 3 minutes.',
      'Distributed Background Processing: Built an asynchronous job queue using Celery and Redis to offload heavy, multi-minute mathematical calculations from the main thread, keeping the frontend UI highly responsive during long experiments.',
      'Data Persistence & Authentication: Developed a secure JWT-based login system with PostgreSQL to authenticate users and automatically save complete experiment histories, allowing users to seamlessly review and iterate on past strategies.',
      'Cloud-Native Deployment: Engineered a production-ready environment deployed on Render, utilizing auto-running Alembic database migrations and Apache Arrow-optimized memory queries to safely process massive datasets on limited cloud hardware.'
    ],
    techStack: ['Python', 'Next.js', 'FastAPI', 'PostgreSQL', 'DuckDB', 'Celery', 'Redis'],
    liveLink: 'https://alphalab-hq.vercel.app',
    githubLink: 'https://github.com/kankaniakshat185/alphalab',
    id: 'project2',
    categories: ['Research', 'Backend', 'Fullstack'],
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
      'Claim-Centric Media Intelligence: Architected a full-stack news analysis platform using Next.js and FastAPI that moves beyond basic sentiment analysis, extracting and mapping distinct political claims to expose media echo chambers across hundreds of global news outlets.',
      'Intelligent Information Extraction: Engineered an automated NLP pipeline integrating LLMs for atomic claim extraction and Sentence-Transformers for vector-based semantic clustering, instantly condensing hundreds of disparate news paragraphs into unified, verifiable factual clusters.',
      'Distributed Background Processing: Built an asynchronous task queue utilizing Celery and Redis to offload heavy web scraping and LLM computations from the main API thread, keeping the frontend UI completely responsive during multi-minute intelligence runs.',
      'Secure Data Persistence & Auth: Implemented a robust PostgreSQL database managed via Prisma ORM, seamlessly integrated with Better-Auth for stateless JWT session management to safely track user query histories and persist thousands of generated claim graphs.',
      'High-Performance Visual Dashboard: Designed a polished, interactive UI leveraging Tailwind CSS and Next.js server-side rendering, translating dense mathematical and semantic relationships into a clean, zero-lag visual experience for end-users.'
    ],
    techStack: ['Python', 'Hugging Face', 'PostgreSQL', 'FastAPI', 'Docker', 'Redis', 'Next.js', 'Sentence-BERT', 'DeBERTa-v3 NLI'],
    liveLink: 'https://biasscope-app.vercel.app',
    githubLink: 'https://github.com/kankaniakshat185/biasscope-app-frontend',
    id: 'project1',
    categories: ['AI/ML', 'Backend', 'Fullstack'],
    techDetails: {
      'Python': 'Backend service & data processing',
      'FastAPI': 'High-performance API endpoints',
      'Next.js': 'Frontend interface'
    }
  },
  {
    name: 'DataScope - ML Observability Intelligence',
    description: [
      'Automated ML Data Governance: Engineered a deployment gating system (APPROVED/REVIEW/REJECTED) that mathematically evaluates dataset health. Processed datasets with hundreds of columns in under 20 seconds using FastAPI, Pandas, and Scikit-Learn to block poor-quality data from reaching production.',
      'Programmatic Pipeline Integration: Developed and published the datascope Python SDK on PyPI, enabling data scientists to trigger heavy cloud analytics from local notebooks. Designed the SDK to act as an automated CI/CD blocking gate for data pipelines without requiring manual UI checks.',
      'Causal Data Leakage Engine: Built a statistical engine that goes beyond simple correlation to isolate true data leakage before model training. Utilized automated feature ablation and mutual information to confidently flag problematic columns with over 95% accuracy.',
      'Outlier Consensus & Concept Drift: Architected a robust anomaly detection system that aggregates votes across 4 different algorithms (like Isolation Forests and DBSCAN). Implemented Population Stability Index (PSI) tracking to monitor data drift across millions of rows and prevent silent model degradation.',
      'High-Performance Full-Stack Analytics: Designed a decoupled, serverless architecture using Next.js and a Neon PostgreSQL database. Offloaded heavy ML computations to asynchronous FastAPI background workers, rendering interactive SHAP features and exploratory data analysis (EDA) with zero browser lag.'
    ],
    techStack: ['Python', 'Pandas', 'scikit-learn', 'PostgreSQL', 'FastAPI', 'Docker', 'Next.js'],
    liveLink: 'https://datascope-app.vercel.app',
    githubLink: 'https://github.com/kankaniakshat185/datascope-hf-backend',
    id: 'project4',
    categories: ['AI/ML', 'Backend', 'Fullstack'],
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
    title: 'A deep dive',
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
    title: 'Dreams. Goals',
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
    readingTime: '17 min read',
    githubLink: 'https://github.com/kankaniakshat185/custom-http-server',
  },
  {
    title: 'Inside a 14.5M Ops/sec C++ order Book Matching Engine',
    description: 'what got built: a limit order book, from scratch, in c++20. price-time priority matching, partial fills, market orders.',
    link: '/tech-blog/low-latency-matching-engine',
    uid: 'tech-blog-2',
    date: 'Aug 2026',
    readingTime: '10 min read',
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
