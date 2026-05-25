type Project = {
  name: string
  description: string
  link: string
  id: string
  img: string
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
    description:
      'End-to-end NLP analytics pipeline for detecting media bias and sentiment using transformer-based models, scalable scraping infrastructure, and explainability-driven analysis workflows.',
    link: 'https://biasscope-app.vercel.app',
    id: 'project1',
    img: "https://images.seattletimes.com/wp-content/uploads/2021/08/pressTSR.jpg?d=780x501"
  },
  {
    name: 'DataScope',
    description: 'ML validation and debugging platform featuring consensus-based anomaly detection, segmented explainability, drift analysis, and automated remediation pipelines.',
    link: 'https://datascope-app.vercel.app',
    id: 'project2',
    img: "https://media.istockphoto.com/id/1960011023/vector/cartoon-document-with-loupe-icon-vector-illustration-diagram-icon-on-bubbles-background.jpg?s=612x612&w=0&k=20&c=jpiaAcihGGYinfoTGmvIKRLDfH7wQpD3a5oQtm-LK4Y="
  },
  {
    name: 'custom-http-server',
    description: 'A lightweight, robust, and custom-built HTTP/1.1 server written entirely from scratch in Python.',
    link: 'https://github.com/kankaniakshat185/custom-http-server',
    id: 'project3',
    img: "https://ruslanspivak.com/lsbaws-part1/LSBAWS_HTTP_request_response.png"
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
