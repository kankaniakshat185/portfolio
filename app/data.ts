type Project = {
  name: string
  description: string[]
  techStack: string[]
  githubLink?: string
  liveLink?: string
  id: string
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
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'BiasScope',
    description: [
      'Architected a full-stack news intelligence platform that aggregates global media, detects political bias, and enables cross-examination via a RAG-based chat interface, built on a distributed microservices architecture.',
      'Built an asynchronous ingestion pipeline (NewsAPI + headless scraping) to process 50+ sources with deduplication and anti-bot fallbacks, achieving 90% data quality across noisy real-world datasets.',
      'Developed and deployed NLP pipelines using Hugging Face Transformers (DistilBERT, PoliticalBiasBERT) for bias and sentiment classification, enabling scalable, low-latency inference on live news streams.',
      'Implemented a Retrieval-Augmented Generation (RAG) system using LLaMA-3-8B with strict context grounding, reducing hallucinations and ensuring fact-based responses from source articles.',
      'Engineered a secure Next.js + PostgreSQL backend (Prisma ORM, Better-Auth) supporting persistent sessions, historical analytics, and automated PDF intelligence report generation.'
    ],
    techStack: ['Python', 'Hugging Face Transformers', 'PostgreSQL', 'FastAPI', 'Docker', 'Next.js'],
    githubLink: 'https://github.com/kankaniakshat185/biasscope-app-frontend',
    liveLink: 'https://biasscope-app.vercel.app',
    id: 'project1',
  },
  {
    name: 'DataScope',
    description: [
      'Architected a full-stack ML validation platform with automated pipelines for consensus-based outlier detection, data leakage checks, and comprehensive dataset drift analysis.',
      'Engineered a Scikit-learn evaluation engine utilizing dynamic cross-validation to quantify the causal impact of data-cleaning techniques on accuracy and R² scores.',
      'Implemented intelligent preprocessing heuristics that leverage SHAP values to visualize feature importance and optimize dataset quality for model training.',
      'Designed an interactive analytics dashboard featuring an automated technical glossary, EDA plots, converting complex statistical diagnostics into actionable, interpretable visual insights.',
      'Deployed an end-to-end architecture using Next.js, FastAPI, and PostgreSQL to handle secure dataset uploads, real-time ML processing, and automated reporting.'
    ],
    techStack: ['Python', 'Pandas', 'scikit-learn', 'PostgreSQL', 'FastAPI', 'Docker', 'Next.js'],
    githubLink: 'https://github.com/kankaniakshat185/datascope-hf-backend',
    liveLink: 'https://datascope-app.vercel.app',
    id: 'project2',
  },
  {
    name: 'Custom-http-server',
    description: [
      'TCP Socket Management: Low-level binding, listening, and accepting of raw network connections.',
      'Concurrent Threading: Capable of handling massive traffic via isolated background threads for each connection.',
      'Persistent Connections: Implements Keep-Alive logic to reuse TCP connections across multiple requests.',
      'Content Negotiation: Supports dynamic gzip compression based on client Accept-Encoding headers.',
      'Dynamic Routing: URL path parsing and routing for endpoints.',
      'File System Operations: Safely reads, writes, and serves binary files directly from disk based on POST and GET requests.'
    ],
    techStack: ['Python', 'HTTP Protocols', 'Computer Networks'],
    githubLink: 'https://github.com/kankaniakshat185/custom-http-server',
    id: 'project3',
  },


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
  },
  {
    title: 'Thinking in systems: How I learn Computer Science',
    description:
      'A deep dive into how I see Computers and my thoughts about everything related.',
    link: '/blog/thinking-in-systems',
    uid: 'blog-2',
  },
  {
    title: 'Dreams. Goals',
    description:
      'An ever expanding page going deep into what I\'ve always dream\'t about and the goals I strive to achieve.',
    link: '/blog/my-dreams-and-goals',
    uid: 'blog-3',
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
